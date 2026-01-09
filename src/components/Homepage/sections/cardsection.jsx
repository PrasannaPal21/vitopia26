"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { IconBallFootball, IconMusic, IconCpu } from "@tabler/icons-react";

const bentoItems = [
  {
    title: "SPORTS",
    description: "Unleash your inner athlete. 15+ adrenaline pumping events.",
    href: "/sports",
    icon: <IconBallFootball className="w-12 h-12 text-black" />,
    color: "bg-primary", // Lime
    size: "col-span-12 md:col-span-8",
  },
  {
    title: "CULTURALS",
    description: "Dance, Music, Drama & more.",
    href: "/culturals",
    icon: <IconMusic className="w-12 h-12 text-white" />,
    color: "bg-accent", // Pink
    size: "col-span-12 md:col-span-4",
  },
  {
    title: "TECHNICA",
    description: "Hackathons, Robo-wars & Tech-talks.",
    href: "/technica",
    icon: <IconCpu className="w-12 h-12 text-white" />,
    color: "bg-secondary", // Purple
    size: "col-span-12 md:col-span-4",
  },
  {
    title: "PRO-NITES",
    description: "Star-studded nights you'll never forget.",
    href: "/pronites",
    icon: null, // Maybe an image here?
    color: "bg-white",
    textColor: "text-black",
    size: "col-span-12 md:col-span-8",
  },
];

export default function CardSection() {
  return (
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="text-4xl md:text-6xl font-anton text-white uppercase">
            Explore <span className="text-stroke text-transparent">Categories</span>
          </h2>
          <div className="hidden md:block w-32 h-1 bg-white/20 mb-4" />
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6 auto-rows-[250px]">
          {bentoItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className={`${item.size} group relative overflow-hidden rounded-md border border-white/10 transition-all hover:scale-[1.01] hover:shadow-2xl`}
            >
              <div className={`absolute inset-0 ${item.color} opacity-90 transition-opacity group-hover:opacity-100`} />

              {/* Content */}
              <div className={`relative h-full flex flex-col justify-between p-8 ${item.textColor || 'text-black'}`}>
                <div className="self-end opacity-50 group-hover:opacity-100 transition-opacity transform group-hover:rotate-12 duration-500">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-4xl font-anton uppercase tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className={`font-outfit text-lg opacity-80 ${item.textColor ? 'text-black' : 'text-black/80'}`}>
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Decorative Pattern Overlay */}
              <div className="absolute inset-0 bg-grid-pattern opacity-[0.1] mix-blend-overlay pointer-events-none" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
