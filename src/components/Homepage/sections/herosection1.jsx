"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "../moving-border";

export default function HeroSection() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.04]" />

            {/* Gradient Blobs */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px]" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-6"
                >
                    <div className="inline-block border border-white/20 rounded-full px-4 py-1.5 bg-white/5 backdrop-blur-md mb-4">
                        <span className="text-secondary font-bold tracking-widest text-xs md:text-sm uppercase">
                            The Ultimate Fest of VIT-AP
                        </span>
                    </div>

                    <h1 className="text-[15vw] leading-[0.8] font-anton text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 uppercase select-none mix-blend-overlay">
                        VITOPIA
                    </h1>

                    <div className="flex items-center justify-center gap-4 text-3xl md:text-6xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent relative bottom-4 md:bottom-8">
                        <span>SPORT</span>
                        <span className="text-white mx-2 not-italic font-light opacity-50">x</span>
                        <span>CULTURE</span>
                    </div>

                    <p className="max-w-xl mx-auto text-gray-400 text-sm md:text-lg font-outfit">
                        Experience the 3-day saga of adrenaline, art, and innovation.
                        <br className="hidden md:block" />
                        Join us for the most electrifying event of the year.
                    </p>

                    <div className="pt-8 flex items-center justify-center gap-4">
                        <button className="px-8 py-3 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors">
                            View Events
                        </button>
                        <button className="px-8 py-3 border border-white/20 text-white font-bold uppercase tracking-wider hover:bg-white/10 transition-colors">
                            Highlights
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Ticker */}
            <div className="absolute bottom-12 w-full border-y border-white/10 py-3 bg-black/50 backdrop-blur-sm overflow-hidden flex">
                <motion.div
                    className="whitespace-nowrap flex gap-12 text-gray-500 font-mono text-xs uppercase tracking-[0.2em]"
                    animate={{ x: "-100%" }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                >
                    {Array(10).fill("•  Coming Soon  •  Register Now  •  VITOPIA 2025  ").map((item, i) => (
                        <span key={i}>{item}</span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
