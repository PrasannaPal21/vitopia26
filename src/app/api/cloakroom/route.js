import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { extractDataFromToken } from "@/lib/jwttoken";

export async function POST(request) {
  const prisma = new PrismaClient();

  try {
    const auth_token = request.headers.get("Authorization");
    const data_token = request.headers.get("Token");

    if (!auth_token) {
      return NextResponse.json({ message: "Authorization header is missing" }, { status: 401 });
    }

    const auth_token_parts = auth_token.split(" ");

    if (
      auth_token_parts.length !== 2 ||
      auth_token_parts[0] !== "Bearer" ||
      auth_token_parts[1] !== process.env.NEXT_API_TOKEN
    ) {
      return NextResponse.json({ message: "Invalid Authorization header format" }, { status: 401 });
    }

    const data_token_parts = extractDataFromToken(data_token);

    const is_admin = await prisma.users.findUnique({
      where: { email: data_token_parts.adminEmail },
    });

    if (!is_admin) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }


    const scannedData = JSON.parse(data_token_parts.scannedData);

    const user = await prisma.registration.findUnique({
      where: { invoiceId: scannedData.invoiceId }
    });

    const availableLocker = await prisma.availableCloakRoom.findFirst({
      where: { room: is_admin.event, available: true },
      orderBy: { locker: "asc" }, // Assign the smallest available locker
    });

    
    if (!availableLocker) {
      return NextResponse.json({ message: "No available lockers in this room" }, { status: 400 });
    }

    // Step 3: Mark the locker as occupied
    await prisma.availableCloakRoom.update({
      where: { id: availableLocker.id },
      data: { available: false },
    });

    // Step 4: Save the user details along with assigned room & locker
    const newEntry = await prisma.cloakRoom.create({
      data: {
        email: user.email,
        name: user.name,
        invoiceId: user.invoiceId,
        room: availableLocker.room,
        locker: availableLocker.locker,
      },
    });

    return NextResponse.json(
      { message: "Cloak room details saved", data: newEntry },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error saving cloak room details:", error);
    return NextResponse.json({ message: "Error saving cloak room details" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
