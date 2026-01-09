import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { PrismaClient } from "@prisma/client";

export async function GET(request) {
  const prisma = new PrismaClient();

  const session = await auth();
  if (!session || !session.user?.email) {
    return NextResponse.json({ token: null });
  }
  const entry = await prisma.cloakRoom.findFirst({
    where: { email: session.user.email },
  });
  return NextResponse.json({ token: entry ? entry.token : null });
}
