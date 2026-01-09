"use client";
import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { WaveMaterial } from "../WaveMaterial";
import { easing } from "maath";

function ShaderPlane() {
  const ref = useRef();
  const { viewport, size } = useThree();
  useFrame((state, delta) => {
    ref.current.time += delta;
    easing.damp3(ref.current.pointer, state.pointer, 0.2, delta);
  });
  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry />
      <waveMaterial
        ref={ref}
        key={WaveMaterial.key}
        resolution={[size.width * viewport.dpr, size.height * viewport.dpr]}
      />
    </mesh>
  );
}

export default function HeroSection() {
  return (
    <div className="w-full h-full">
      <Canvas style={{  height: "100vh" }}>
        <ShaderPlane />
      </Canvas>
      <div className="absolute top-0 flex flex-col items-center justify-center w-full h-full">
        <div className="text-[24px] md:text-[40px] lg:text-[60px] text-center text-white font-bold shadow-xl">
          INTERNATIONAL SPORTS AND CULTURAL
          <br />
          FIESTA
        </div>
        <div className="text-[16px] md:text-[20px] lg:text-[30px] text-center text-white font-thin shadow-xl">
          March 8<sup>th</sup> & 9<sup>th</sup>, 2025
        </div>
        <button className="mt-10 bg-white text-black font-bold text-lg px-10 py-3 rounded-full shadow-xl">
          Registration
        </button>
      </div>
    </div>
  );
}
