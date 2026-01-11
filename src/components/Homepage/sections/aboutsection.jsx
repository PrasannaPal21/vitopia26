"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section className="py-16 md:py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden border-y border-gray-100">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-10">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(124, 58, 237, 0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(124, 58, 237, 0.03) 1px, transparent 1px)
                        `,
                        backgroundSize: '60px 60px'
                    }}
                />
            </div>

            {/* Decorative Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-fuchsia-500/5 rounded-full blur-[120px]" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-10 md:mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-anton text-gray-900 uppercase mb-3 leading-none">
                        THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-500">LEGACY</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent mx-auto mb-3" />
                    <p className="text-gray-600 font-outfit text-base md:text-lg max-w-2xl mx-auto">
                        Where tradition meets innovation, and every year creates history
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center max-w-7xl mx-auto">

                    {/* Content Cards */}
                    <motion.div
                        className="space-y-5"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* VITOPIA '24 Card */}
                        <div className="group">
                            <div className="border-l-4 border-violet-500 pl-5 py-3 bg-gradient-to-r from-violet-200 to-transparent hover:from-violet-100 transition-all duration-300">
                                <h3 className="text-xl md:text-2xl lg:text-3xl font-anton text-gray-900 mb-3 uppercase flex items-center gap-2">
                                    VITOPIA '24
                                    <span className="text-sm font-outfit normal-case text-violet-600 font-semibold">Flashback</span>
                                </h3>
                                <p className="text-gray-700 font-outfit text-sm md:text-base leading-relaxed">
                                    Last year, we witnessed history. With stellar performances by{" "}
                                    <span className="text-violet-600 font-semibold">Jonita Gandhi</span> and the legendary duo{" "}
                                    <span className="text-violet-600 font-semibold">Salim–Sulaiman</span>, VITOPIA '24 set the benchmark.
                                </p>
                                <p className="text-gray-600 font-outfit text-sm md:text-base leading-relaxed mt-2">
                                    From the bass wobbles of <span className="text-gray-900 font-semibold">Nucleya</span> to the fusion beats of{" "}
                                    <span className="text-gray-900 font-semibold">Thaikkudam Bridge</span>, it was a 3-day spectacle of pure energy.
                                </p>
                            </div>
                        </div>

                        {/* VIT-AP Card */}
                        <div className="group">
                            <div className="border-l-4 border-violet-500 pl-5 py-3 bg-gradient-to-r from-violet-200 to-transparent hover:from-violet-100 transition-all duration-300">
                                <h3 className="text-xl md:text-2xl lg:text-3xl font-anton text-gray-900 mb-3 uppercase flex items-center gap-2">
                                    VIT-AP
                                    <span className="text-sm font-outfit normal-case text-violet-600 font-semibold">University</span>
                                </h3>
                                <p className="text-gray-700 font-outfit text-sm md:text-base leading-relaxed">
                                    Located in <span className="text-violet-600 font-semibold">Amaravati</span>, VIT-AP stands as a beacon of innovation.
                                </p>
                                <p className="text-gray-600 font-outfit text-sm md:text-base leading-relaxed mt-2">
                                    Ranked <span className="text-gray-900 font-semibold">#1 Emerging Private University</span>, we are a hub of{" "}
                                    <span className="text-gray-900 font-semibold">17,500+ students</span> from across the globe.
                                    Our 200-acre campus is where technology meets culture.
                                </p>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-3 pt-3">
                            <div className="text-center p-3 bg-gray-50 backdrop-blur-sm border border-gray-200 rounded-lg">
                                <div className="text-2xl md:text-3xl font-anton text-violet-500 mb-1">17K+</div>
                                <div className="text-xs md:text-sm text-gray-600 font-outfit uppercase tracking-wider">Students</div>
                            </div>
                            <div className="text-center p-4 bg-gray-50 backdrop-blur-sm border border-gray-200 rounded-lg">
                                <div className="text-2xl md:text-3xl font-anton text-violet-500 mb-1">200</div>
                                <div className="text-xs md:text-sm text-gray-600 font-outfit uppercase tracking-wider">Acres</div>
                            </div>
                            <div className="text-center p-4 bg-gray-50 backdrop-blur-sm border border-gray-200 rounded-lg">
                                <div className="text-2xl md:text-3xl font-anton text-amber-500 mb-1">#1</div>
                                <div className="text-xs md:text-sm text-gray-600 font-outfit uppercase tracking-wider">Ranked</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Enhanced Image Grid */}
                    <motion.div
                        className="relative h-[400px] md:h-[480px] w-full"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Top Image - Jonita Gandhi */}
                        <div className="absolute top-0 right-0 w-[70%] h-[55%] border-2 border-violet-500/40 p-2 group hover:border-violet-500/80 transition-all duration-300">
                            <div className="relative w-full h-full bg-gray-100 overflow-hidden">
                                <Image
                                    src="/last_lineup/jonitha.avif"
                                    fill
                                    className="object-cover group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                                    alt="Jonita Gandhi Performance"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute bottom-4 left-4 text-white font-anton text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    JONITA GANDHI
                                </div>
                            </div>
                        </div>

                        {/* Bottom Image - Campus */}
                        <div className="absolute bottom-0 left-0 w-[75%] h-[55%] border-2 border-violet-500/40 p-2 z-10 bg-gray-100 group hover:border-violet-500/80 transition-all duration-300">
                            <div className="relative w-full h-full bg-gray-100 overflow-hidden">
                                <Image
                                    src="/vitap_drone.webp"
                                    fill
                                    className="object-cover group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                                    alt="VIT-AP Campus Aerial View"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute bottom-4 left-4 text-white font-anton text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    VIT-AP CAMPUS
                                </div>
                            </div>
                        </div>

                        {/* Center Badge */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                            <div className="relative w-28 h-28 md:w-32 md:h-32 border-2 border-gray-300 rounded-full flex items-center justify-center backdrop-blur-xl bg-white/90 shadow-[0_0_40px_rgba(124,58,237,0.3)] group hover:border-violet-500 hover:shadow-[0_0_60px_rgba(124,58,237,0.5)] transition-all duration-300">
                                <div className="text-center">
                                    <div className="font-anton text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-violet-600 to-fuchsia-500 mb-1">
                                        26
                                    </div>
                                    <div className="text-xs text-gray-400 font-outfit uppercase tracking-wider">
                                        Edition
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
