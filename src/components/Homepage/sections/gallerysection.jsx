"use client";
import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const images = [
    "/last_lineup/jonitha.avif",
    "/vitap_drone.webp",
    "/last_lineup/jonitha.avif", // Using repeats for now as placeholders
    "/vitap_drone.webp",
    "/last_lineup/jonitha.avif",
    "/vitap_drone.webp",
];

export default function GallerySection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
    const x2 = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

    return (
        <section ref={containerRef} className="py-20 bg-black overflow-hidden relative border-b border-white/10">
            <div className="mb-12 text-center">
                <h2 className="text-4xl md:text-8xl font-anton text-white opacity-10 uppercase select-none">
                    Memories
                </h2>
                <p className="text-primary font-bold uppercase tracking-widest -mt-8 md:-mt-16 relative z-10">
                    Capture The Moment
                </p>
            </div>

            <div className="flex flex-col gap-8">
                {/* Row 1 - Left */}
                <motion.div style={{ x: x1 }} className="flex gap-8 w-[200%]">
                    {[...images, ...images].map((src, i) => (
                        <div key={i} className="relative w-[400px] h-[250px] shrink-0 rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-white/10">
                            <Image src={src} fill className="object-cover" alt="Gallery" />
                            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay opacity-0 hover:opacity-100 transition-opacity" />
                        </div>
                    ))}
                </motion.div>

                {/* Row 2 - Right */}
                <motion.div style={{ x: x2 }} className="flex gap-8 w-[200%]">
                    {[...images, ...images].reverse().map((src, i) => (
                        <div key={i} className="relative w-[400px] h-[250px] shrink-0 rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-white/10">
                            <Image src={src} fill className="object-cover" alt="Gallery" />
                            <div className="absolute inset-0 bg-secondary/20 mix-blend-overlay opacity-0 hover:opacity-100 transition-opacity" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
