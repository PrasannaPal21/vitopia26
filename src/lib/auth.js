// /lib/auth.js
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";

export const auth = () => getServerSession(authOptions);
