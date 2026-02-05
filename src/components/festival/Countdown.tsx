"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const festivalDate = new Date("2026-07-10T18:00:00").getTime();
  const [time, setTime] = useState(festivalDate - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(festivalDate - Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((time / (1000 * 60)) % 60);

  return (
    <div className="flex gap-8 text-center mt-10">
      <div>
        <h2 className="text-5xl font-black">{days}</h2>
        <p className="text-gray-400">Days</p>
      </div>
      <div>
        <h2 className="text-5xl font-black">{hours}</h2>
        <p className="text-gray-400">Hours</p>
      </div>
      <div>
        <h2 className="text-5xl font-black">{minutes}</h2>
        <p className="text-gray-400">Minutes</p>
      </div>
    </div>
  );
}