"use client";
import React from "react";
import Image from "next/image";
import { StickyScroll } from "../sticky-scroll-reveal";

const content = [
  {
    title: "About VITopia '24",
    subtitle: "VITOPIA",
    description:
      "VITopia 2024 showcased a stellar lineup, including Jonita Gandhi, a versatile Indian singer, and the acclaimed music duo Salim–Sulaiman. The festival featured energetic performances from the Progressive Brothers, a popular DJ duo, and the engaging Jammers Band. Thaikkudam Bridge, known for their fusion music, and Nucleya, a leading DJ with a unique sound, also lit up the stage, ensuring an unforgettable experience.",
    content: (
      <Image
        src="/last_lineup/jonitha.avif"
        alt="Collaborative Editing"
        layout="fill"
        objectFit="cover"
      />
    ),
  },
  {
    title: "About VIT - AP",
    subtitle: "VIT-AP",
    description:
      "VIT-AP University was established in 2017 in Amaravati, near Vijayawada, Andhra Pradesh, with a nurturing environment, state-of-the-art facilities, and an infrastructure covering 44,50,664 square meters, all within our sprawling 100-acre campus. VIT-AP University has achieved the prestigious #1 ranking as the Emerging Private University in India for three consecutive years (2022, 2023, and 2024) in the Outlook Ranking for Higher Education. Fostering a rich learning environment, our diverse community comprises over 17,500 students from all states, Union Territories, and 11 countries. We ensure that your academic journey leads to a promising career and higher study opportunities. With over 90% of our students getting placements spread across the globe and an impressive highest package of 38 LPA, the university also supports 150+ STAR Schemes, offering top packages of 24.7 LPA, empowering rural students for global opportunities. Our state-of-the-art infrastructure includes research facilities worth 8 crore INR, resulting in 3,271 publications in reputed journals and 594 published patents. We provide a nurturing atmosphere for entrepreneurial minds with 35,000 square feet of incubation and startup space dedicated to fostering innovation.",
    content: (
      <Image
        src="/vitap_drone.webp"
        alt="Real Time Changes"
        layout="fill"
        objectFit="cover"
      />
    ),
  },
];

export function AboutDesktop() {
  return (
    <div className="p-10 bg-black">
      <StickyScroll content={content} />
    </div>
  );
}
