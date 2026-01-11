"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { MdArrowOutward } from "react-icons/md";

const navItems = [
  { title: "Home", href: "/" },
  { title: "Sports", href: "/sports" },
  { title: "Culturals", href: "/culturals" },
  { title: "Merchandise", href: "/merchandise" },
  { title: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-4 bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-sm supports-[backdrop-filter]:bg-white/60" : "py-6 bg-transparent"
          }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative w-32 h-12 md:w-40 md:h-16 group">
            <Image
              src="/vitopia-color.png"
              fill
              className="object-contain transition-transform group-hover:scale-105"
              alt="VITOPIA Logo"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 bg-white/40 px-8 py-3 rounded-full border border-white/40 backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm font-bold uppercase tracking-wider transition-colors ${isActive ? "text-violet-600" : "text-gray-600 hover:text-gray-900"
                    }`}
                >
                  {item.title}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-violet-600 shadow-[0_0_10px_var(--primary)]"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm cursor-pointer font-bold text-gray-600 hover:text-gray-900 uppercase transition-colors hover:scale-105 active:scale-95 duration-200">
              Login
            </button>

            <div className="relative inline-block group scale-[0.85] origin-right">
              {/* Pulsing Glow Background */}
              <div className="absolute -inset-3 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 opacity-20 blur-xl group-hover:opacity-40 animate-pulse transition-opacity duration-300" />

              <button
                className="relative block overflow-hidden"
                style={{
                  clipPath: 'polygon(12% 0%, 100% 0%, 88% 100%, 0% 100%)'
                }}
              >
                {/* Main Button */}
                <div className="relative cursor-pointer px-8 py-3 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 text-white font-anton text-lg uppercase tracking-[0.1em] transition-all duration-300 group-hover:from-violet-500 group-hover:via-fuchsia-400 group-hover:to-rose-400">
                  <div className="flex items-center gap-3 relative z-10">
                    <span className="group-hover:translate-x-1 transition-transform duration-300">GRAB PASSES</span>
                    <MdArrowOutward className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </div>

                  {/* Diagonal Shimmer */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />

                  {/* Animated Scanline */}
                  <div className="absolute left-0 right-0 h-[2px] bg-white/60 top-1/2 -translate-y-1/2 group-hover:animate-ping opacity-0 group-hover:opacity-100" />
                </div>
              </button>

              {/* Decorative Corner Elements */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-violet-500 group-hover:w-5 group-hover:h-5 transition-all duration-300" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-violet-500 group-hover:w-5 group-hover:h-5 transition-all duration-300" />
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-gray-900 p-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <IconMenu2 size={32} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-[60] bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden text-gray-900"
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-gray-500 hover:text-gray-900"
            >
              <IconX size={40} />
            </button>

            {navItems.map((item, idx) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
              >
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-4xl font-anton uppercase tracking-widest ${pathname === item.href ? "text-violet-600" : "text-gray-900"}`}
                >
                  {item.title}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="relative inline-block group mt-8"
            >
              {/* Pulsing Glow Background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 opacity-30 blur-2xl group-hover:opacity-50 animate-pulse transition-opacity duration-300" />

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleSignIn();
                }}
                className="relative block overflow-hidden"
                style={{
                  clipPath: 'polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)'
                }}
              >
                {/* Main Button */}
                <div className="relative cursor-pointer px-8 py-4 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 text-white font-anton text-xl uppercase tracking-[0.15em] transition-all duration-300 group-hover:from-violet-500 group-hover:via-fuchsia-400 group-hover:to-rose-400">
                  <div className="flex items-center gap-3 relative z-10">
                    <span className="group-hover:translate-x-1 transition-transform duration-300">GRAB PASSES</span>
                    <MdArrowOutward className="text-xl group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
                  </div>

                  {/* Diagonal Shimmer */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />

                  {/* Animated Scanline */}
                  <div className="absolute left-0 right-0 h-[2px] bg-white/60 top-1/2 -translate-y-1/2 group-hover:animate-ping opacity-0 group-hover:opacity-100" />
                </div>
              </button>

              {/* Decorative Corner Elements */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-violet-500 group-hover:w-8 group-hover:h-8 transition-all duration-300" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-violet-500 group-hover:w-8 group-hover:h-8 transition-all duration-300" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
