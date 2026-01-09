"use client";
import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date(`03/07/2025 18:00:00`) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    const value = timeLeft[interval];
    return (
      <div key={interval} className="flex flex-col items-center mx-4 md:mx-8">
        <div className="text-white text-5xl md:text-8xl font-anton tracking-wider text-stroke-sm md:text-stroke-md">
          {value < 10 ? `0${value}` : value}
        </div>
        <div className="text-xs md:text-sm text-primary font-bold uppercase tracking-[0.2em] mt-2">
          {interval}
        </div>
      </div>
    );
  });

  return (
    <div className="flex justify-center flex-wrap gap-4 w-full">
      {timerComponents.length ? timerComponents : <span className="text-white font-anton text-4xl">Event Started!</span>}
    </div>
  );
};

export default CountdownTimer;
