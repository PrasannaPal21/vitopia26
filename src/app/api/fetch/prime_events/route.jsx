"use server";

import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req) {
    try {

        const token = req.headers.get("Authorization");

        if (!token) {
            return new NextResponse(JSON.stringify({ message: "Authorization header is missing" }), {
                status: 401,
                headers: {
                    "Content-Type": "application/json",
                },
            });
        }

        const token_parts = token.split(' ');

        if (token_parts.length !== 2 || token_parts[0] !== "Bearer" || !token_parts[1] || token_parts[1] !== process.env.NEXT_API_TOKEN) {
            return new NextResponse(JSON.stringify({ message: "Invalid Authorization header format" }), {
                status: 401,
                headers: {
                    "Content-Type": "application/json",
                },
            });
        }

        const events = await prisma.primeEvents.findMany({
            select: {
                id: true,
                name: true,
                startPrice: true,
                endPrice: true,
                imageLink: true,
                link: true,
                description: true
            },
            orderBy: {
                name: "asc",
            },
        });
        return new NextResponse(JSON.stringify({ message: "Fetched", events }), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (err) {
        console.error(err);
        return new NextResponse(JSON.stringify({ message: "Error" }), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } finally {
        await prisma.$disconnect();
    }
}
