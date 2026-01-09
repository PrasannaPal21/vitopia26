'use server';

import { extractDataFromToken } from "@/lib/jwttoken";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req) {
    const prisma = new PrismaClient();
    try {
        const auth_token = req.headers.get("Authorization");
        const data_token = req.headers.get("Token");

        if (!auth_token) {
            return new NextResponse(JSON.stringify({ message: "Authorization header is missing" }), {
                status: 401,
                headers: {
                    "Content-Type": "application/json",
                },
            });
        }

        const auth_token_parts = auth_token.split(' ');

        if (auth_token_parts.length !== 2 || auth_token_parts[0] !== "Bearer" || !auth_token_parts[1] || auth_token_parts[1] !== process.env.NEXT_API_TOKEN) {
            return new NextResponse(JSON.stringify({ message: "Invalid Authorization header format" }), {
                status: 401,
                headers: {
                    "Content-Type": "application/json",
                },
            });
        }

        const data_token_content = extractDataFromToken(data_token);

        const data = await prisma.registration.findUnique({
            where: {
                invoiceId: data_token_content.scannedData.invoiceId,
            },
        });

        // const issue_tshirts = await prisma.issueTshirts.findMany({
        //     where: {
        //         email: data.email,
        //     },
        // });

        // if (issue_tshirts.length === 0) {
        //     return new NextResponse(JSON.stringify({ message: "Tshirt Will not be issued Today" }), {
        //         status: 401,
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //     });
        // }

        if (data.scanned === true) {
            return new NextResponse(JSON.stringify({ message: "Invalid QR" }), {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                },
            });
        }

        const admin_user = await prisma.users.findUnique({
            where: {
                email: data_token_content.adminEmail,
            },
        });

        if (!admin_user) {
            return new NextResponse(JSON.stringify({ message: "Unauthorized" }), {
                status: 401,
                headers: {
                    "Content-Type": "application/json",
                },
            });
        }

        if (data.regType !== "VITopia 2025 T-shirts" && data.regType !== "VITopia 2025 Cultural") {
            return new NextResponse(JSON.stringify({ message: "Wrong QR" }), {
                status: 401,
                headers: {
                    "Content-Type": "application/json",
                },
            });
        }

        const find_unique_tshirt = await prisma.tShirtSacn.findUnique({
            where: {
                invoiceId: data.invoiceId,
            },
        });


        if (find_unique_tshirt) {
            return new NextResponse(JSON.stringify({ message: "Invalid QR" }), {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                },
            });
        }

        await prisma.tShirtSacn.create({
            data: {
                invoiceId: data.invoiceId,
                adminEmail: data_token_content.adminEmail,
                userEmail: data.email,
            }
        })

        await prisma.scanHistory.create({
            data: {
                invoiceId: data.invoiceId,
                adminEmail: data_token_content.adminEmail,
                userEmail: data.email,
            }
        })

        await prisma.registration.update({
            where: {
                invoiceId: data_token_content.scannedData.invoiceId,
            },
            data: {
                scanned: true,
            },
        });

        return new NextResponse(JSON.stringify({ message: "Verified Successfully", data }), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });

    } catch (error) {
        console.error("Error fetching data:", error);
        return new NextResponse(JSON.stringify({ message: "Error fetching data" }), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } finally {
        await prisma.$disconnect();
    }
}
