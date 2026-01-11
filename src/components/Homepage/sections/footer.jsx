"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconArrowUp,
  IconArrowRight
} from "@tabler/icons-react";
import { motion } from "framer-motion";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white overflow-hidden border-t border-gray-200">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-gray-100/50 pointer-events-none" />
      {/* Scrolling Ticker */}
      <div className="w-full bg-violet-600 py-3 overflow-hidden flex relative z-20">
        <motion.div
          className="flex gap-8 whitespace-nowrap text-white font-anton text-lg uppercase tracking-widest items-center"
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
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full overflow-hidden pointer-events-none select-none opacity-[0.04]">
          <h1 className="text-[25vw] font-anton text-gray-900 text-center leading-[0.8] tracking-tighter opacity-10">
            VITOPIA
          </h1>
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-400/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

            {/* Brand/About/Newsletter Column */}
            <div className="lg:col-span-4 space-y-8">
              <Link href="/" className="relative block w-48 h-16 opacity-90 hover:opacity-100 transition-opacity">
                <Image
                  src="/vitopia-color.png"
                  fill
                  className="object-contain object-left"
                  alt="VITOPIA Logo"
                />
              </Link>
              <p className="text-gray-500 font-outfit text-lg max-w-md leading-relaxed">
                The ultimate fusion of <span className="text-gray-900 font-medium">Technology</span>, <span className="text-gray-900 font-medium">Sports</span>, and <span className="text-gray-900 font-medium">Culture</span>.
              </p>

              {/* Newsletter */}
              {/* <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"> */}
              <h4 className="text-gray-900 font-anton text-xl uppercase mb-3">Stay Updated</h4>
              <div className="relative flex shadow-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-white border border-gray-200 text-gray-900 px-4 py-3 rounded-l-lg focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors font-outfit placeholder:text-gray-400"
                />
                <button className="bg-violet-600 hover:bg-violet-700 text-white px-4 rounded-r-lg transition-colors flex items-center justify-center">
                  <IconArrowRight size={20} />
                </button>
              </div>
              {/* </div> */}
            </div>

            {/* Links Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-10 lg:pl-12">
              {[
                {
                  title: "Explore",
                  color: "text-violet-600",
                  items: [
                    { label: 'Sports', href: '/sports' },
                    { label: 'Culturals', href: '/culturals' },
                    { label: 'Merchandise', href: '/merchandise' },
                    { label: 'Sponsors', href: '/sponsers' }
                  ]
                },
                {
                  title: "Account",
                  color: "text-violet-600",
                  items: [
                    { label: 'Login / Register', href: '/login' },
                    { label: 'Patrons', href: '/patrons' },
                    { label: 'Meet the Team', href: '/team' },
                    { label: 'FAQ', href: '/faq' }
                  ]
                },
                {
                  title: "Support",
                  color: "text-amber-500",
                  items: [
                    { label: 'Contact Us', href: '/contact' },
                    { label: 'Rule Book', href: '#' },
                    { label: 'Map', href: 'https://maps.app.goo.gl/PSy6LqAeRo16vSd68' }
                  ]
                }
              ].map((section, idx) => (
                <div key={idx} className="space-y-6">
                  <h3 className={`text-xl font-anton uppercase tracking-wider ${section.color}`}>{section.title}</h3>
                  <ul className="space-y-3">
                    {section.items.map((item) => (
                      <li key={item.label}>
                        <Link href={item.href} className="text-gray-500 font-outfit hover:text-gray-900 transition-all flex items-center gap-2 group text-base">
                          <span className={`w-0 h-[2px] ${section.color.replace('text-', 'bg-')} transition-all duration-300 group-hover:w-4`} />
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Compact Footer Bottom - Single Row */}
          <div className="border-t border-gray-200 pt-6 pb-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Copyright - Left */}
              <p className="text-gray-400 text-sm font-outfit uppercase tracking-wider text-center md:text-left">
                &copy; 2026 VITOPIA. Crafted with <span className="text-rose-500 animate-pulse">❤</span> by{' '}
                <a href="https://linkedin.com/in/prasanna-pal-542992274" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-violet-600 transition-colors font-semibold">Prasanna</a>,{' '}
                <a href="https://linkedin.com/in/tanmay-rajurkar-254305227" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-violet-600 transition-colors font-semibold">Tanmay</a> and{' '}
                <a href="https://linkedin.com/in/tanvish-reddy" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-violet-600 transition-colors font-semibold">Tanvish</a>.
              </p>

              {/* Socials - Center */}
              <div className="flex gap-3">
                {[
                  { icon: IconBrandInstagram, href: "https://www.instagram.com/vitap.vitopia/", color: "hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-500" },
                  { icon: IconBrandFacebook, href: "https://www.facebook.com/vitap.university/", color: "hover:bg-[#1877F2]" },
                  { icon: IconBrandTwitter, href: "https://twitter.com/VITAPuniversity", color: "hover:bg-sky-500" },
                  { icon: IconBrandLinkedin, href: "https://www.linkedin.com/school/vitap-university/", color: "hover:bg-[#0A66C2]" }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 transition-all duration-300 hover:text-white hover:-translate-y-1 hover:shadow-lg ${social.color}`}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>

              {/* Back to Top - Right */}
              <button
                onClick={scrollToTop}
                className="group flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-all bg-white"
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
