"use client";

import { useEffect, useState } from "react";
import { generateToken } from "@/lib/jwttoken";
import { useSession, signIn } from "next-auth/react"; 
import { motion } from "framer-motion";
import Link from "next/link"; 

export default function CloakRoomUserDashboard() {
    const [ticketData, setTicketData] = useState([]);
    const { data: session, status } = useSession();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const generated_token = generateToken(session?.user, 60 * 60 * 24 * 30);
                const response = await fetch("/api/fetch/cloakroom", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${process.env.NEXT_API_TOKEN}`,
                        "Token": generated_token,
                    },
                });

                if (!response.ok) {
                    throw new Error("Error fetching locker details. Please refresh the page.");
                }

                const apiResponse = await response.json();
                const passesData = apiResponse.data || [];

                const transformedPasses = passesData.map((pass) => ({
                    room: pass.room,
                    locker: pass.locker,
                }));

                setTicketData(transformedPasses);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching locker details:", error);
                setLoading(false);
            }
        };

        if (session) {
            fetchData();
        }
    }, [session]);

    if (status === "loading" || loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-black">
                <motion.div
                    className="w-12 h-12 border-t-4 border-blue-500 rounded-full animate-spin"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                ></motion.div>
            </div>
        );
    }

    if (!session) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-black min-h-screen flex flex-col items-center justify-center gap-10 p-4"
            >
                <h1 className="text-4xl font-bold text-white mb-4">Access Denied</h1>
                <p className="text-xl text-gray-300">You are not authenticated. Please sign in.</p>
                <button
                    onClick={() => signIn("google", { callbackUrl: "/auth/role-bridge" })}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Sign In
                </button>
            </motion.div>
        );
    }

    if (session?.user?.role !== "user") {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-black min-h-screen flex flex-col items-center justify-center gap-10 p-4"
            >
                <h1 className="text-4xl font-bold text-white mb-4">Unauthorized</h1>
                <p className="text-xl text-gray-300">You are not authorized to view this page.</p>
                <Link
                    href="/"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Return to Home
                </Link>
            </motion.div>
        );
    }

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
            {ticketData.length > 0 ? (
                <div className="my-8 w-full max-w-md">
                    <h2 className="text-3xl font-bold text-center mb-6">Locker Details</h2>
                    <ul className="space-y-4">
                        {ticketData.map((ticket, index) => (
                            <li
                                key={index}
                                className="p-4 bg-gray-800 rounded-lg shadow-lg text-center"
                            >
                                <p className="text-lg font-semibold">Room: {ticket.room}</p>
                                <p className="text-lg">Locker: {ticket.locker}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center"
                >
                    <h2 className="text-2xl font-bold">No Items in Cloak Room</h2>
                    <p className="mt-2 text-gray-400">There are no locker details available.</p>
                </motion.div>
            )}
        </div>
    );
}
