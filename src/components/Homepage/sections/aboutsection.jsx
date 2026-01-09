"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Decorative Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-6xl font-anton text-white uppercase mb-4">
                                The <span className="text-primary">Legacy</span>
                            </h2>
                            <div className="w-24 h-1 bg-secondary mb-8" />

                            <h3 className="text-2xl font-bold text-white mb-4">VITOPIA '24 FLASHBACK</h3>
                            <p className="text-gray-400 font-outfit text-lg leading-relaxed mb-6">
                                Last year, we witnessed history. With stellar performances by <span className="text-white font-bold">Jonita Gandhi</span> and the legendary duo <span className="text-white font-bold">Salim–Sulaiman</span>, VITOPIA '24 set the benchmark.
                                From the bass wobbles of Nucleya to the fusion beats of Thaikkudam Bridge, it was a 3-day spectacle of pure energy.
                            </p>

                            <h3 className="text-2xl font-bold text-white mb-4">VIT-AP UNIVERSITY</h3>
                            <p className="text-gray-400 font-outfit text-lg leading-relaxed">
                                Located in Amaravati, VIT-AP stands as a beacon of innovation.
                                Ranked #1 Emerging Private University, we are a hub of 17,500+ students from across the globe.
                                Our 100-acre campus is where technology meets culture.
                            </p>
                        </motion.div>
                    </div>

                    {/* Image Grid */}
                    <div className="relative h-[600px] w-full">
                        <div className="absolute top-0 right-0 w-3/4 h-3/5 border-2 border-primary/30 p-2">
                            <div className="relative w-full h-full bg-gray-900 pointer-events-none">
                                <Image
                                    src="/last_lineup/jonitha.avif"
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                    alt="Jonita Gandhi"
                                />
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-3/4 h-3/5 border-2 border-accent/30 p-2 z-10 bg-black">
                            <div className="relative w-full h-full bg-gray-900">
                                <Image
                                    src="/vitap_drone.webp"
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                    alt="VIT AP Campus"
                                />
                            </div>
                        </div>

                        {/* Neon Elements */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-md z-20">
                            <span className="font-anton text-3xl text-white">2025</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
