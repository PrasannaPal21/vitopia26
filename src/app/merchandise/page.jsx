"use client";
import { Footer } from "@/components/Homepage/sections/footer";
import HeroSection2 from "@/components/Homepage/sections/herosection2";
import Navbar from "@/components/Homepage/sections/navbar";
import { ProwShows } from "@/components/Merch/proshows";
import { Tshirts } from "@/components/Merch/tshirts";
import { PinContainer } from "@/components/ui/3d-pin";
import React from "react";

export default function AnimatedPinDemo() {
    return (
        (
            <div className="bg-black min-h-screen">
                <Navbar />
                <div className=" w-full flex flex-col items-center justify-center pt-40">
                    {/* <ProwShows/> */}
                    <HeroSection2 />
                    <Tshirts />
                </div>
                <Footer />
            </div>
        )
    );
}

