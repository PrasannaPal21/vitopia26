"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function HeroSection2() {
    return (
        <div
            className="h-[50vh] w-full md:w-[50vw] relative bg-contain bg-no-repeat bg-center md:bg-cover"
            style={{ backgroundImage: "url('/bk1.jpg')" }}
        >
            <div className="absolute inset-0 flex items-center justify-center">
                <a 
                    href="https://events.vitap.ac.in/e/vitopia-2025-cultural-dd247f1d-90e2-4daa-8615-441050caf953" 
                    target="_blank"
                >
                    <div className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] relative z-30">
                        <Image
                            src={"/button.png"}
                            alt="Ortopia Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                </a>
            </div>
        </div>
    );
}
