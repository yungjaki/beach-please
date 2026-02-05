"use client";

import { useEffect, useState } from "react";

export default function Particles() {
  const [particles, setParticles] = useState<
    { top: number; left: number }[]
  >([]);

  useEffect(() => {
    const generated = Array.from({ length: 40 }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
    }));

    setParticles(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute w-1 h-1 bg-brand-green rounded-full animate-pulse"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
          }}
        />
      ))}
    </div>
  );
}
