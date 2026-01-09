"use client";
import Navbar from "@/components/Homepage/sections/navbar";
import HeroSection from "@/components/Homepage/sections/herosection1";
import AboutSection from "@/components/Homepage/sections/aboutsection";
import TimerSection from "@/components/Homepage/sections/timersection";
import CardSection from "@/components/Homepage/sections/cardsection";
import GallerySection from "@/components/Homepage/sections/gallerysection";
import { Footer } from "@/components/Homepage/sections/footer";

export default function Page() {
  return (
    <main className="bg-black min-h-screen selection:bg-primary selection:text-black">
      <Navbar />
      <HeroSection />
      <TimerSection />
      <AboutSection />
      <CardSection />
      <GallerySection />
      <Footer />
    </main>
  );
}
