"use client";
import React from "react";
import CountdownTimer from "@/components/Homepage/CountDownTimer";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const TimerSection = () => {
  return (
    <section className="bg-[#050505] py-20 md:py-32 relative overflow-hidden border-y border-lime-400/20">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(190, 242, 100, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(190, 242, 100, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}
        />
      </div>

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent" />

      {/* Noise Texture */}
      <div
        className="absolute inset-0 opacity-30 mix-blend-overlay"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* CTA Side */}
          <div className="text-center lg:text-left space-y-8 flex-1">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-anton text-white leading-none uppercase">
                THE COUNTDOWN
              </h2>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-anton leading-none uppercase relative inline-block">
                <span
                  className="text-transparent bg-gradient-to-r from-lime-400 via-green-400 to-lime-400 bg-clip-text animate-pulse"
                  style={{
                    WebkitTextStroke: '2px rgba(190, 242, 100, 0.3)'
                  }}
                >
                  HAS BEGUN
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-lime-400 to-transparent opacity-50" />
              </h2>
            </div>

            <p className="text-white/60 font-outfit text-lg md:text-xl max-w-md mx-auto lg:mx-0 leading-relaxed">
              The ultimate fest experience is just around the corner. Secure your spot now!
            </p>

            <Link
              href="https://events.vitap.ac.in/e/vitopia-2025-cultural-dd247f1d-90e2-4daa-8615-441050caf953"
              target="_blank"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-lime-400 to-green-400 text-black font-anton text-xl md:text-2xl uppercase tracking-widest hover:from-lime-300 hover:to-green-300 transition-all duration-300 shadow-[0_0_30px_rgba(190,242,100,0.6)] hover:shadow-[0_0_50px_rgba(190,242,100,0.8)] hover:scale-105 relative group overflow-hidden"
            >
              <span className="relative z-10">Register Now</span>
              <MdArrowOutward className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              {/* Shimmer Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </Link>
          </div>

          {/* Timer Component Wrapper */}
          <div className="w-full lg:w-auto flex-1 max-w-4xl">
            <div className="relative p-8 md:p-12 lg:p-16">
              <CountdownTimer />
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(50px);
          }
        }
      `}</style>
    </section>
  );
};

export default TimerSection;
