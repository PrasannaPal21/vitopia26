'use client'

import { Footer } from "@/components/Homepage/sections/footer";
import Navbar from "@/components/Homepage/sections/navbar";
import SportsCard from "@/components/SportsPage/sportsCard";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function SportsList() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            const response = await fetch(`/api/fetch/sports`, {
                headers: {
                    'Authorization': `Bearer ${process.env.NEXT_API_TOKEN}`,
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();

            setData(data.events);
            setIsLoading(false);
        };
        fetchData();
    }, []);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center md:h-[60vh]">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-neutral-500"></div>
            </div>
        );
    }

    return (
        <div className="bg-black min-h-screen flex flex-col items-center relative">
            <Navbar />
            <div className="pt-44 px-16 sm:px-24 md:px-32 lg:px-40 text-xl w-full">
                <ul className="space-y-3 text-white">
                    <motion.li whileHover={{ x: 10 }} className="flex items-center">
                        • All sports playing days include free lodging (50 km away) and food.
                    </motion.li>
                    <motion.li whileHover={{ x: 10 }} className="flex items-center">
                        • All Cricket Registrations are stopped and fixtures will be shared soon.
                    </motion.li>
                </ul>
            </div>
            <div className="flex flex-wrap justify-center items-center w-full p-4 py-20">
                {data.map(event => (
                    <div className="p-4 md:w-1/3 lg:w-1/4"> {/* Adjusting card size based on the screen size */}
                        <SportsCard key={event.id} beach={event} />
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default SportsList;
