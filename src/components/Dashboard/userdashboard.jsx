"use client";

import { useEffect, useState } from "react";
import GeneratedTickets from "@/components/Dashboard/GeneratedTickets";
import { generateToken } from "@/lib/jwttoken";
import { useSession, signIn } from "next-auth/react"; // Note: Import signIn
import { motion } from "framer-motion";
import Link from "next/link"; // Import Link

export default function TicketForm() {
    const [ticketData, setTicketData] = useState([]);
    const { data: session, status } = useSession();
    const [loading, setLoading] = useState(true);

    // Always call useEffect; conditionally fetch data if session exists
    useEffect(() => {
        const fetchData = async () => {
            try {
                const generated_token = generateToken(session?.user, 60 * 60 * 24 * 30);
                const response = await fetch("/api/fetch/passes", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${process.env.NEXT_API_TOKEN}`,
                        "Token": generated_token,
                    },
                });

                if (!response.ok) {
                    throw new Error("Error fetching passes. Please refresh the page.");
                }

                const apiResponse = await response.json();
                // Extract passes from the `data` property or use an empty array if not found
                const passesData = apiResponse.data || [];

                // Transform each pass to match the expected structure.
                const transformedPasses = passesData.map((pass) => ({
                    event: pass.event,
                    name: pass.name,
                    amount: pass.amount,
                    invoiceId: pass.invoiceId,
                    universityName: pass.universityName,
                    qrValue: JSON.stringify({ invoiceId: pass.invoiceId, name: pass.name, event: pass.event }),
                }));

                setTicketData(transformedPasses);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching passes:", error);
            }
        };

        // Only fetch data if a session exists.
        if (session) {
            fetchData();
        }
    }, [session, setLoading]);

    // Now conditionally render based on the session status
    if (status === "loading" || loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-black">
                <motion.div
                    className="w-12 h-12 border-t-4 border-blue-500 rounded-full animate-spin"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 1,
                        repeat: Number.POSITIVE_INFINITY,
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
                <p className="text-xl text-gray-300">
                    You are not authenticated. Please sign in.
                </p>
                <button
                    onClick={() =>
                        signIn("google", { callbackUrl: "/auth/role-bridge" })
                    }
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
                <p className="text-xl text-gray-300">
                    You are not authorized to view this page.
                </p>
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
        <div className="relative min-h-screen flex flex-col items-center justify-center bg-black">
            {ticketData.length > 0 ? (
                <div className="my-8">
                    <GeneratedTickets ticketData={ticketData} />
                </div>
            ) : (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center"
                >
                    {/* Creative SVG illustration */}
                    <motion.svg
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="w-24 h-24 text-gray-500 mb-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 17v-6a3 3 0 016 0v6m-6 0h6"
                        />
                    </motion.svg>

                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="text-2xl font-bold text-white"
                    >
                        Oops! No Passes Found
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="mt-2 text-gray-400 text-center max-w-md"
                    >
                        It looks like your pass collection is empty. Generate some passes and unlock your next adventure!
                    </motion.p>
                </motion.div>
            )}
        </div>
    );
}
