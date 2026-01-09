"use server";

import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req) {
  const prisma = new PrismaClient();
  try {
    const data = await req.json();
    const { eventId, image, regNo, name, department } = data;

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

    if (!eventId || !image) {
      return NextResponse.json({ message: "Invalid data." }, { status: 400 });
    }

    const isExist = await prisma.posters.findUnique({
      where: {
        eventId,
      },
    });

    if (isExist) {
      return NextResponse.json(
        {
          message:
            "Image already uploaded. Please Contact to update the Image",
        },
        { status: 400 }
      );
    }

    const response = await prisma.posters.create({
      data: {
        eventId,
        image,
        regNo,
        name,
        department,
      },
      select: {
        id: true,
        eventId: true,
        image: true,
        regNo: true,
        name: true,
        department: true,
      },
    });

    if (!response) {
      return NextResponse.json(
        { message: "Error while uploading Image." },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: "Image uploaded successfully." });
  } catch (error) {
    console.error("Error while uploading Image:", error);
  } finally {
    await prisma.$disconnect();
  }
}
