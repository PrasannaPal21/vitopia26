"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import { FiUpload } from "react-icons/fi";
import { QRCodeCanvas } from "qrcode.react";

export default function CloakRoomDetails() {
  const { data: session, status } = useSession();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [bags, setBags] = useState("");
  const [qrToken, setQrToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (status === "authenticated" && session?.user?.email) {
      setLoading(true); // Start loading
      fetch("/api/cloakroom/get-token")
        .then((res) => res.json())
        .then((data) => {
          if (data.token) {
            setQrToken(data.token);
          }
        })
        .catch((err) => {
          console.error("Error fetching token", err);
        })
        .finally(() => setLoading(false)); // Stop loading after request
    } else {
      setLoading(false); // Stop loading if user is not authenticated
    }
  }, [status, session]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const token = crypto.randomUUID
      ? crypto.randomUUID()
      : Math.random().toString(36).substr(2, 9);
    try {
      const res = await fetch("/api/cloakroom", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          bags,
          token,
          email: session.user.email,
        }),
      });
      if (!res.ok) {
        throw new Error("Failed to save data");
      }
      setQrToken(token);
    } catch (err) {
      setError("Error generating QR. Please try again.");
    }
    setLoading(false);
  };

  if (status === "loading" || loading) {
    return (
      <motion.div className="flex items-center justify-center min-h-screen bg-black">
        <div className="text-white text-lg animate-pulse">Loading...</div>
      </motion.div>
    );
  }

  if (!session) {
    return (
      <motion.div className="flex items-center justify-center min-h-screen bg-black">
        <div className="text-white">Access Denied. Please log in.</div>
      </motion.div>
    );
  }

  if (qrToken) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-black min-h-screen flex flex-col items-center justify-center p-4"
      >
        <h1 className="text-4xl font-bold text-white mb-8">
          QR Code Generated
        </h1>
        <QRCodeCanvas value={qrToken} size={256} />
        <p className="text-white mt-4">Token: {qrToken}</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-black min-h-screen flex flex-col items-center justify-center p-4"
    >
      <h1 className="text-4xl font-bold text-white mb-8">Cloak Room Details</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-6 rounded-xl shadow-lg max-w-md w-full space-y-4"
      >
        {error && <p className="text-red-500">{error}</p>}
        <div>
          <label className="block text-white mb-2">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-md bg-gray-800 text-white"
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label className="block text-white mb-2">Phone Number</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-3 rounded-md bg-gray-800 text-white"
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div>
          <label className="block text-white mb-2">Number of Bags</label>
          <input
            type="number"
            value={bags}
            onChange={(e) => setBags(e.target.value)}
            className="w-full p-3 rounded-md bg-gray-800 text-white"
            placeholder="Enter number of bags"
            min="0"
            required
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={loading}
          className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-300 ease-in-out"
        >
          <FiUpload className="text-lg" />
          {loading ? "Generating..." : "Generate QR"}
        </motion.button>
      </form>
    </motion.div>
  );
}
