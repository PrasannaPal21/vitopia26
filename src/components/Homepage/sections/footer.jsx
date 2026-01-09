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
  IconMapPin
} from "@tabler/icons-react";

export function Footer() {
  return (
    <footer className="relative bg-[#050505] pt-20 pb-10 overflow-hidden border-t border-white/5">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="relative w-48 h-20">
              <Image
                src="/vitap-logo-white.png"
                fill
                className="object-contain object-left"
                alt="VIT-AP"
              />
            </div>
            <h2 className="text-5xl md:text-8xl font-anton text-white tracking-widest opacity-20 select-none">
              VITOPIA
            </h2>
            <p className="text-gray-400 max-w-md">
              The ultimate fusion of Technology, Sports, and Culture.
              Join us for the most electrifying fest of the year.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-primary uppercase tracking-widest">Explore</h3>
            <ul className="space-y-4">
              {['Sports', 'Culturals', 'Merchandise', 'About'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-primary transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/dashboard" className="text-accent hover:text-accent/80 font-medium transition-colors">
                  Dashboard / Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-secondary uppercase tracking-widest">Connect</h3>
            <div className="space-y-4 text-gray-400 text-sm">
              <div className="flex items-start gap-3">
                <IconMail className="shrink-0 text-white/50" size={20} />
                <div>
                  <p className="font-semibold text-white">General Inquiries</p>
                  <a href="mailto:convenor.vitopia@vitap.ac.in" className="hover:text-white transition-colors">convenor.vitopia@vitap.ac.in</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <IconMapPin className="shrink-0 text-white/50" size={20} />
                <div>
                  <p className="font-semibold text-white">Location</p>
                  <p>VIT-AP University, Amaravati</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              {[
                { icon: IconBrandInstagram, href: "https://instagram.com/vitap.vitopia" },
                { icon: IconBrandFacebook, href: "https://facebook.com" },
                { icon: IconBrandTwitter, href: "https://twitter.com" },
                { icon: IconBrandLinkedin, href: "https://linkedin.com" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all hover:scale-110"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 uppercase tracking-wider">
          <p>&copy; 2025 VITOPIA. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
