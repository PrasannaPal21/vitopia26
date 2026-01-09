"use client";
import React from "react";
import CountdownTimer from "@/components/Homepage/CountDownTimer";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const TimerSection = () => {
  return (
    <section className="bg-black py-20 relative overflow-hidden border-y border-white/10">
      {/* Background Noise */}
      <div className="absolute inset-0 bg-white/5 opacity-50" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* CTA Side */}
          <div className="text-center md:text-left space-y-6">
            <h2 className="text-4xl md:text-6xl font-anton text-white leading-tight">
              THE COUNTDOWN <br />
              <span className="text-transparent text-stroke">HAS BEGUN</span>
            </h2>

            <Link
              href="https://events.vitap.ac.in/e/vitopia-2025-cultural-dd247f1d-90e2-4daa-8615-441050caf953"
              target="_blank"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-black font-anton text-xl uppercase tracking-widest hover:bg-white transition-colors shadow-[0_0_15px_rgba(190,242,100,0.5)]"
            >
              Register Now <MdArrowOutward />
            </Link>
          </div>

          {/* Timer Component Wrapper */}
          <div className="w-full md:w-auto p-6 md:p-10 border border-white/10 bg-white/5 backdrop-blur-xl rounded-2xl relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent opacity-20 group-hover:opacity-40 blur transition-opacity duration-500 rounded-2xl" />
            <div className="relative">
              <CountdownTimer />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TimerSection;
