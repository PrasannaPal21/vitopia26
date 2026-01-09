"use client";
import { generateToken } from "@/lib/jwttoken";
import QrReader from "modern-react-qr-reader";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

const CloakRoom = () => {
    const [popup, setPopup] = useState(false);
    const [scannedData, setScannedData] = useState(null);
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState(null); // "success" or "error"

    const { data: session, status } = useSession();

    if (status === "loading") {
        return (
            <div className="flex items-center justify-center min-h-screen bg-black">
                <motion.div
                    className="w-12 h-12 border-t-4 border-blue-500 rounded-full animate-spin"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
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
                <h1 className="text-4xl font-bold text-white">Access Denied</h1>
                <p className="text-xl text-gray-300">You are not authenticated. Please sign in.</p>
                <button
                    onClick={() => signIn("google", { callbackUrl: "/auth/role-bridge" })}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition transform hover:scale-105"
                >
                    Sign In
                </button>
            </motion.div>
        );
    }

    if (session?.user?.role !== "admin") {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-black min-h-screen flex flex-col items-center justify-center gap-10 p-4"
            >
                <h1 className="text-4xl font-bold text-white">Unauthorized</h1>
                <p className="text-xl text-gray-300">You are not authorized to view this page.</p>
                <button
                    onClick={() => (window.location.href = "/")}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition transform hover:scale-105"
                >
                    Return to Home
                </button>
            </motion.div>
        );
    }

    const handleError = (err) => {
        console.error(err);
        setMessageType("error");
        setMessage("Error reading QR. Try again.");
        setPopup(true);
    };

    const handleScan = (data) => {
        if (data) {
            try {
                setMessageType(null);
                setScannedData(data);
                setPopup(true);
            } catch (error) {
                console.error("Error parsing QR data:", error);
                setMessageType("error");
                setMessage("Invalid QR Code data. Please try again.");
                setPopup(true);
            }
        }
    };

    const onPopUpClose = () => {
        setPopup(false);
        setScannedData(null);
        setMessage("");
        setMessageType(null);
    };

    const handleSubmit = async () => {
        if (!scannedData) {
            setMessageType("error");
            setMessage("No scan data available.");
            return;
        }

        try {
            setMessage("");

            console.log("Scanned data:", scannedData);

            const generated_token = generateToken({ scannedData, adminEmail: session.user?.email }, 60 * 60 * 24 * 30);
            const response = await fetch("/api/cloakroom", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${process.env.NEXT_API_TOKEN}`,
                    "Token": generated_token,
                },
            });

            const result = await response.json();
            if (result.message === "Cloak room details saved") {
                setMessageType("success");
                setMessage( "Cloak Room Issued Token & Room: " + result.data.locker + " & " + result.data.room);
            } else {
                setMessageType("error");
                setMessage(result.message);
            }

            setPopup(true);
            setScannedData(null);
        } catch (error) {
            console.error("Verification error:", error);
            setMessageType("error");
            setMessage("Failed to verify. Try again.");
            setPopup(true);
        }
    };

    return (
        <>
            {popup && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className={`p-6 ${messageType === "success"
                                ? "bg-green-500 text-white"
                                : messageType === null ? "bg-gradient-to-r from-blue-700 to-blue-500" : "bg-red-500 text-white"
                            } text-white shadow-xl rounded-lg max-w-md w-full relative flex flex-col items-center`}
                    >
                        <IoMdClose
                            size={30}
                            className="absolute top-3 right-3 cursor-pointer"
                            onClick={onPopUpClose}
                        />
                        {scannedData ? (
                            <div className="text-center">
                                <h2 className="text-2xl font-bold mb-3">Cloak Room</h2>
                                <button
                                    className="mt-4 px-6 py-2 bg-white text-blue-700 font-bold rounded-lg hover:bg-gray-200 transition-all"
                                    onClick={handleSubmit}
                                >
                                    Issue Cloak Room
                                </button>
                            </div>
                        ) : (
                            <div
                                className={`mt-4 px-6 py-3 text-center font-bold text-4xl rounded-lg ${messageType === "success"
                                        ? "bg-green-500 text-white"
                                        : "bg-red-500 text-white"
                                    }`}
                            >
                                {message}
                            </div>
                        )}
                    </motion.div>
                </div>
            )}

            <div className="h-full w-full flex flex-col items-center justify-center bg-black min-h-screen">
                <main className="text-center text-white">
                    <h1 className="text-3xl font-bold mb-4">Cloak Room Issue</h1>
                    <QrReader
                        delay={300}
                        facingMode="environment"
                        onError={handleError}
                        onScan={handleScan}
                        style={{ width: "100%", maxWidth: "400px", margin: "auto" }}
                    />
                </main>
                {message && (
                    <div
                        className={`mt-4 px-6 py-3 text-center font-bold text-lg rounded-lg ${messageType === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
                            }`}
                    >
                        {message}
                    </div>
                )}
            </div>
        </>
    );
};

export default CloakRoom;
