"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { IconBallFootball, IconMusic, IconCpu, IconStarFilled } from "@tabler/icons-react";

const bentoItems = [
  {
    title: "SPORTS",
    description: "Unleash your inner athlete. 15+ adrenaline pumping events.",
    href: "/sports",
    icon: <IconBallFootball className="w-14 h-14" />,
    color: "from-violet-600 to-fuchsia-500",
    borderColor: "border-violet-500/30",
    hoverBorderColor: "group-hover:border-violet-500/80",
    glowColor: "group-hover:shadow-[0_0_40px_rgba(124,58,237,0.4)]",
    size: "col-span-12 md:col-span-8",
    backgroundImage: "/sports.png",
  },
  {
    title: "CULTURALS",
    description: "Dance, Music, Drama & more.",
    href: "/culturals",
    icon: <IconMusic className="w-14 h-14" />,
    color: "from-amber-500 to-orange-500",
    borderColor: "border-amber-500/30",
    hoverBorderColor: "group-hover:border-amber-500/80",
    glowColor: "group-hover:shadow-[0_0_40px_rgba(245,158,11,0.4)]",
    size: "col-span-12 md:col-span-4",
    backgroundImage: "/culturals.png",
  },
  {
    title: "STATE RALLY",
    description: "One Nation, A Million Stories – The State-Wise Rally at VITOPIA 2025!.",
    href: "/",
    icon: <IconCpu className="w-14 h-14" />,
    color: "from-purple-500 to-violet-600",
    borderColor: "border-purple-500/30",
    hoverBorderColor: "group-hover:border-purple-500/80",
    glowColor: "group-hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]",
    size: "col-span-12 md:col-span-4",
    backgroundImage: "/state-rally.png",
  },
  {
    title: "PRO-SHOW",
    description: "Star-studded nights you'll never forget.",
    href: "/pronites",
    icon: <IconStarFilled className="w-14 h-14" />,
    color: "from-amber-400 to-orange-500",
    borderColor: "border-amber-400/30",
    hoverBorderColor: "group-hover:border-amber-400/80",
    glowColor: "group-hover:shadow-[0_0_40px_rgba(251,191,36,0.4)]",
    size: "col-span-12 md:col-span-8",
    backgroundImage: "/night.png",
  },
];

export default function CardSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden border-y border-gray-100">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
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

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center relative"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
        >
          {/* Glow effect behind text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[400px] h-[150px] bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-rose-500/20 blur-[80px] rounded-full" />
          </div>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-anton text-gray-900 uppercase mb-6 tracking-tight relative">
            EXPLORE{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 animate-pulse">
              CATEGORIES
            </span>
          </h2>
          <div className="w-48 h-2 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 mx-auto shadow-lg shadow-violet-500/30" />
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 auto-rows-[280px]">
          {bentoItems.map((item, idx) => (
            <motion.div
              key={idx}
              className={item.size}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <Link
                href={item.href}
                className={`group relative h-full overflow-hidden rounded-2xl border ${item.borderColor} ${item.hoverBorderColor} bg-white shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 hover:scale-[1.01] ${item.glowColor} block`}
              >
                {/* Background Image if available */}
                {item.backgroundImage && (
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-90 saturate-[1.6] transition-all duration-700 group-hover:scale-110 group-hover:opacity-100 group-hover:saturate-[1.6]"
                      style={{ backgroundImage: `url(${item.backgroundImage})` }}
                    />
                    {/* Subtle vignette for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                )}

                {/* Gradient Background - only show on non-image cards */}
                {!item.backgroundImage && <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-5 group-hover:opacity-15 transition-opacity duration-500`} />}

                {/* Grid Pattern Overlay */}
                {!item.backgroundImage && <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px'
                  }}
                />}

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-6 md:p-8">
                  {/* Icon - Top Right */}
                  <div className={`self-end text-gray-300 group-hover:text-gray-500 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12`}>
                    {item.icon}
                  </div>

                  {/* Text Content - Bottom */}
                  <div className="space-y-3">
                    <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-anton uppercase tracking-tight text-gray-900 group-hover:translate-x-1 transition-transform duration-300">
                      {item.title}
                    </h3>
                    <p className="font-outfit text-white md:text-lg transition-colors duration-300 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Explore Arrow */}
                    <div className="flex items-center gap-2 text-sm font-outfit uppercase tracking-widest text-white gap-3 transition-all duration-300">
                      <span>Explore</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Shine Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
