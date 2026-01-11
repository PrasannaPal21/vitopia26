"use client";
import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-violet-50/30 to-white py-20">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero-image-colored.png"
                    alt="Vitopia Hero Image"
                    className="w-full h-full object-cover relative backdrop-blur-sm z-10"
                />
                <div className="absolute inset-0 bg-white/40" />
            </div>

            {/* Background Elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.04] z-0" />

            {/* Gradient Blobs */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-violet-500/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-violet-500/20 rounded-full blur-[120px]" />

            <div className="container w-auto py-4 rounded-xl backdrop-blur-sm mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-5xl mx-auto text-center"
                >
                    {/* Badge */}
                    <motion.div
                        className="inline-flex items-center border border-violet-500/20 rounded-full px-5 py-2 bg-white/50 backdrop-blur-md mb-8 shadow-sm hover:shadow-violet-500/10 transition-all duration-300 hover:border-violet-500/40"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.15 }}
                    >
                        <span className="text-violet-600 font-outfit font-semibold tracking-wider text-xs md:text-sm uppercase">
                            The Ultimate Fest of VIT-AP
                        </span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                        className="text-[18vw] sm:text-[15vw] md:text-[12vw] leading-[0.85] font-anton text-transparent bg-clip-text bg-gradient-to-b from-gray-900 via-gray-800 to-gray-600 uppercase select-none tracking-tight mb-6"
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
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-500">SPORT</span>
                        <span className="text-gray-400 mx-1 md:mx-2 not-italic font-light text-xl md:text-4xl">×</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-500">CULTURE</span>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        className="max-w-2xl hidden md-visible mx-auto text-gray-600 text-base md:text-lg lg:text-xl font-outfit leading-relaxed mb-10"
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
                        <button className="w-[80%] sm:w-auto px-10 py-4 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 text-white font-anton text-base md:text-lg uppercase tracking-wider hover:from-violet-500 hover:via-fuchsia-400 hover:to-rose-400 transition-all duration-300 shadow-[0_10px_40px_-10px_rgba(124,58,237,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(124,58,237,0.6)] hover:scale-105 rounded-xl">
                            View Events
                        </button>
                        <button className="w-[80%] sm:w-auto px-10 py-4 border-2 border-gray-300 text-gray-900 font-anton text-base md:text-lg uppercase tracking-wider hover:bg-gray-100 hover:border-gray-400 transition-all duration-300 backdrop-blur-sm">
                            Highlights
                        </button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Decorative Ticker */}
            <div className="absolute bottom-0 w-full border-t border-gray-200 py-4 bg-white/80 backdrop-blur-sm overflow-hidden">
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
