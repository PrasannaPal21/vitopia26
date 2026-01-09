"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconMail,
  IconMapPin,
  IconArrowUp,
  IconArrowRight
} from "@tabler/icons-react";
import { motion } from "framer-motion";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050505] overflow-hidden border-t border-white/10">
      {/* Scrolling Ticker */}
      <div className="w-full bg-lime-400 py-3 overflow-hidden flex relative z-20">
        <motion.div
          className="flex gap-8 whitespace-nowrap text-black font-anton text-lg uppercase tracking-widest items-center"
          animate={{ x: "-50%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {Array(10).fill("• VITOPIA 2026 • PRO SHOW • SPORTS • CULTURE • GET READY FOR THE HYPE • ").map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </motion.div>
        {/* <motion.div
          className="flex gap-8 whitespace-nowrap text-black font-anton text-lg uppercase tracking-widest items-center absolute left-full"
          animate={{ x: "-150%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {Array(10).fill("VITOPIA 2026 • TECHNOLOGY • SPORTS • CULTURE • GET READY FOR THE HYPE • ").map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </motion.div> */}
      </div>

      <div className="pt-24 pb-10 relative">
        {/* Massive Background Text */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full overflow-hidden pointer-events-none select-none opacity-[0.02]">
          <h1 className="text-[25vw] font-anton text-white text-center leading-[0.8] tracking-tighter">
            VITOPIA
          </h1>
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-lime-400/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

            {/* Brand/About/Newsletter Column */}
            <div className="lg:col-span-4 space-y-8">
              <Link href="/" className="relative block w-48 h-16 opacity-90 hover:opacity-100 transition-opacity">
                <Image
                  src="/logo.svg"
                  fill
                  className="object-contain object-left"
                  alt="VITOPIA Logo"
                />
              </Link>
              <p className="text-white/60 font-outfit text-lg max-w-md leading-relaxed">
                The ultimate fusion of <span className="text-white">Technology</span>, <span className="text-white">Sports</span>, and <span className="text-white">Culture</span>.
              </p>

              {/* Newsletter */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <h4 className="text-white font-anton text-xl uppercase mb-3">Stay Updated</h4>
                <div className="relative flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-black/40 border border-white/10 text-white px-4 py-3 rounded-l-lg focus:outline-none focus:border-lime-400 transition-colors font-outfit"
                  />
                  <button className="bg-lime-400 hover:bg-lime-500 text-black px-4 rounded-r-lg transition-colors flex items-center justify-center">
                    <IconArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Links Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-10 lg:pl-12">
              {[
                {
                  title: "Explore",
                  color: "text-lime-400",
                  items: ['Sports', 'Culturals', 'Merchandise', 'Sponsors']
                },
                {
                  title: "Account",
                  color: "text-purple-400",
                  items: ['Login / Register', 'Campus Ambassador', 'Meet the Team', 'FAQ']
                },
                {
                  title: "Support",
                  color: "text-pink-400",
                  items: ['Contact Us', 'Help Center', 'Safety Guide', 'Map']
                }
              ].map((section, idx) => (
                <div key={idx} className="space-y-6">
                  <h3 className={`text-xl font-anton uppercase tracking-wider ${section.color}`}>{section.title}</h3>
                  <ul className="space-y-3">
                    {section.items.map((item) => (
                      <li key={item}>
                        <Link href="#" className="text-white/50 font-outfit hover:text-white transition-all flex items-center gap-2 group text-base">
                          <span className={`w-0 h-[2px] ${section.color.replace('text-', 'bg-')} transition-all duration-300 group-hover:w-4`} />
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 pb-4 flex flex-col items-center justify-between gap-8">
            {/* Socials */}
            <div className="flex gap-4">
              {[
                { icon: IconBrandInstagram, href: "", color: "hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-500" },
                { icon: IconBrandFacebook, href: "", color: "hover:bg-[#1877F2]" },
                { icon: IconBrandTwitter, href: "", color: "hover:bg-sky-500" },
                { icon: IconBrandLinkedin, href: "", color: "hover:bg-[#0A66C2]" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/60 transition-all duration-500 hover:text-white hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] ${social.color}`}
                >
                  <social.icon size={22} />
                </a>
              ))}
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
              <p className="text-white/30 text-sm font-outfit uppercase tracking-wider text-center md:text-left">
                &copy; 2025 VITOPIA. Crafted with <span className="text-red-500 animate-pulse">❤</span> by <span className="text-white mobile-hidden">Web Team</span>.
              </p>

              <button
                onClick={scrollToTop}
                className="group flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full text-white/50 hover:bg-white/10 hover:text-white transition-all"
              >
                <span className="text-xs font-anton uppercase tracking-widest">Back to Top</span>
                <IconArrowUp className="group-hover:-translate-y-1 transition-transform duration-300" size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
