"use client";

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    FiUpload,
    FiSearch,
    FiClock,
    FiAlertCircle,
    FiList,
} from "react-icons/fi";

export default function MainUserDashboard() {
    const { data: session, status } = useSession();

    if (status === "loading") {
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
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative bg-black min-h-screen flex flex-col items-center justify-center gap-10 p-4 pt-20"
        >
            <h1 className="text-4xl font-bold text-white mb-8">User Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/dashboard/user/registrations">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded-md flex items-center justify-between w-full transition duration-300 ease-in-out"
                    >
                        <span>Entry Passes</span>
                    </motion.button>
                </Link>
                <Link href="/dashboard/user/cloakroom">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded-md flex items-center justify-between w-full transition duration-300 ease-in-out"
                    >
                        <span>Issued Cloak Room</span>
                    </motion.button>
                </Link>
            </div>
        </motion.div>
    );
}
