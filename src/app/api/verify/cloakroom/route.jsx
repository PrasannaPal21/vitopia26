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


        const is_admin = await prisma.users.findUnique({
            where: {
                email: data_token_content.adminEmail,
            }
        })

        if (!is_admin) {
            return new NextResponse(JSON.stringify({ message: "Unauthorized" }), {
                status: 401,
                headers: {
                    "Content-Type": "application/json",
                },
            });
        }

        if (is_admin.scan !== "all" && is_admin.scan !== "cloakroom") {
            return new NextResponse(JSON.stringify({ message: "No Access To Scan This QR" }), {
                status: 400,
                headers: {
                    "Content-Type": "application/json",
                },
            });
        }

        const scannedData = JSON.parse(data_token_content.scannedData);

        const cloakroom_user = await prisma.cloakRoom.findUnique({
            where: {
                invoiceId: scannedData.invoiceId,
            }
        })

        if (!cloakroom_user) {
            return new NextResponse(JSON.stringify({ message: "No Items Found" }), {
                status: 400,
                headers: {
                    "Content-Type": "application/json",
                },
            });
        }

        if (cloakroom_user.isReturned === true) {
            return new NextResponse(JSON.stringify({ message: "Already Returned" }), {
                status: 400,
                headers: {
                    "Content-Type": "application/json",
                },
            });
        }

        await prisma.cloakRoom.update({
            where: {
                invoiceId: scannedData.invoiceId,
            }, data: {
                isReturned: true,
            }
        })

        await prisma.availableCloakRoom.update({
            where: {
                id: cloakroom_user.cloakRoomId,
                room: cloakroom_user.room,
                locker: cloakroom_user.locker
            },
            data: {
                available: true,
            }
        })

        return new NextResponse(JSON.stringify({ message: "Returned Successfully" }), {
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
