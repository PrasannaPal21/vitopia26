"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-4 bg-black/80 backdrop-blur-md border-b border-white/10" : "py-6 bg-transparent"
          }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative w-32 h-12 md:w-40 md:h-16 group">
            <Image
              src="/logo.svg"
              fill
              className="object-contain transition-transform group-hover:scale-105"
              alt="VITOPIA Logo"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 bg-white/5 px-8 py-3 rounded-full border border-white/10 backdrop-blur-sm">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm font-bold uppercase tracking-wider transition-colors ${isActive ? "text-primary" : "text-gray-400 hover:text-white"
                    }`}
                >
                  {item.title}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary shadow-[0_0_10px_var(--primary)]"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
              <button className="text-sm font-bold text-gray-400 hover:text-white uppercase transition-colors">
                Login
              </button>

            <button
              className="px-6 py-2 bg-primary text-black font-anton font-bold uppercase tracking-wider text-lg rounded-sm hover:bg-primary/90 hover:scale-105 transition-all shadow-[0_0_15px_rgba(190,242,100,0.4)]"
            >
              Grab Passes
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2"
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
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-white/50 hover:text-white"
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
                  className={`text-4xl font-anton uppercase tracking-widest ${pathname === item.href ? "text-primary text-stroke" : "text-white"
                    }`}
                >
                  {item.title}
                </Link>
              </motion.div>
            ))}

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              onClick={() => {
                setMobileMenuOpen(false);
                handleSignIn();
              }}
              className="mt-8 px-8 py-3 bg-white text-black font-anton text-2xl uppercase rounded hover:bg-gray-200"
            >
              Grab Passes
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
