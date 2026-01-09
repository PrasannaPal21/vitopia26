import React from "react";
import { Meteors } from "../ui/meteors";
import Image from "next/image";

export function MeteorCard({ data }) {
  const SVGComponent = (props) => (
    <svg
      fill="#808080"
      width="24px"
      height="24px"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M41,34.89a11.85,11.85,0,1,1,8.39-3.46A11.86,11.86,0,0,1,41,34.89Zm0-19.71a7.86,7.86,0,1,0,5.56,2.3A7.83,7.83,0,0,0,41,15.18Z" />
      <path d="M20.11,51.48a4.16,4.16,0,0,1-3-1.23l-3.39-3.39a4.19,4.19,0,0,1-.32-5.58L29.58,20.85a2,2,0,0,1,3.56,1.43A7.85,7.85,0,0,0,35.4,28.6h0a7.86,7.86,0,0,0,6.32,2.26,2,2,0,0,1,1.43,3.56L22.72,50.57A4.19,4.19,0,0,1,20.11,51.48ZM29.79,27,16.56,43.76a.23.23,0,0,0,0,.28L20,47.42a.21.21,0,0,0,.28,0L37,34.21a11.72,11.72,0,0,1-4.39-2.78h0A11.72,11.72,0,0,1,29.79,27Z" />
      <path d="M13.17,52.83a2,2,0,0,1-1.41-3.42l3.68-3.68a2,2,0,1,1,2.83,2.83l-3.68,3.68A2,2,0,0,1,13.17,52.83Z" />
    </svg>
  );

  return (
    <div className="card-hover-effect">
      {/* Neon glowing image container */}
      <div className="relative w-full h-3/4 rounded-lg custom-rainbow-border overflow-hidden shadow-lg mb-4">
        <Image
          src={data.image}
          alt="Artist"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="absolute inset-0 rounded-lg blur-xl"></div>
      </div>

      {/* Text Content */}
      <div className="w-full flex flex-col items-center mt-auto">
        <div className="flex items-center space-x-2">
          <h1 className="font-bold text-lg text-white">{data.name}</h1>
          <SVGComponent />
        </div>
        <p className="font-light text-sm text-slate-400">{data.role}</p>
        <p className="font-light text-sm text-slate-400">{data.day}</p>
      </div>

      {/* Optional Meteors Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <Meteors number={20} />
      </div>
    </div>
  );
}
