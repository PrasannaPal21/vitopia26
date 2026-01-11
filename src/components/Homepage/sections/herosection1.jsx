"use client";
import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black py-20">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero-image.png"
                    alt="Hero Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/70" />
            </div>

            {/* Background Elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.04] z-0" />

            {/* Gradient Blobs */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px]" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-5xl mx-auto text-center"
                >
                    {/* Badge */}
                    <motion.div
                        className="inline-flex items-center border border-lime-400/30 rounded-full px-5 py-2 bg-lime-400/5 backdrop-blur-md mb-8"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.15 }}
                    >
                        <span className="text-lime-400 font-outfit font-semibold tracking-wider text-xs md:text-sm uppercase">
                            The Ultimate Fest of VIT-AP
                        </span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                        className="text-[18vw] sm:text-[15vw] md:text-[12vw] leading-[0.85] font-anton text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/30 uppercase select-none tracking-tight mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        VITOPIA
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.div
                        className="flex items-center justify-center gap-3 md:gap-6 text-2xl md:text-5xl lg:text-6xl font-black italic tracking-tight mb-8"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-400">SPORT</span>
                        <span className="text-white/40 mx-1 md:mx-2 not-italic font-light text-xl md:text-4xl">×</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">CULTURE</span>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        className="max-w-2xl hidden md-visible mx-auto text-gray-400 text-base md:text-lg lg:text-xl font-outfit leading-relaxed mb-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Experience the 3-day saga of adrenaline, art, and innovation.
                        <br className="hidden sm:block" />
                        Join us for the most electrifying event of the year.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <button className="w-[80%] sm:w-auto px-10 py-4 bg-gradient-to-r from-lime-400 to-green-400 text-black font-anton text-base md:text-lg uppercase tracking-wider hover:from-lime-300 hover:to-green-300 transition-all duration-300 shadow-[0_0_30px_rgba(190,242,100,0.4)] hover:shadow-[0_0_50px_rgba(190,242,100,0.6)] hover:scale-105">
                            View Events
                        </button>
                        <button className="w-[80%] sm:w-auto px-10 py-4 border-2 border-white/20 text-white font-anton text-base md:text-lg uppercase tracking-wider hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm">
                            Highlights
                        </button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Decorative Ticker */}
            <div className="absolute bottom-0 w-full border-t border-white/10 py-4 bg-black/50 backdrop-blur-sm overflow-hidden">
                <div className="ticker-wrapper">
                    <div className="ticker-content whitespace-nowrap flex gap-12 text-gray-500 font-mono text-xs uppercase tracking-[0.2em]">
                        {Array(8).fill("•  Feb 22-24, 2026  •  Register Now  •  VITOPIA  ").map((item, i) => (
                            <span key={i}>{item}</span>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes ticker {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                .ticker-wrapper {
                    display: flex;
                    will-change: transform;
                }

                .ticker-content {
                    animation: ticker 30s linear infinite;
                }

                @media (prefers-reduced-motion: reduce) {
                    .ticker-content {
                        animation: none;
                    }
                }
            `}</style>
        </section>
    );
}
