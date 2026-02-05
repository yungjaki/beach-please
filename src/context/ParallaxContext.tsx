"use client";

import { createContext, useContext, useEffect } from "react";
import { useMotionValue } from "framer-motion";

const ParallaxContext = createContext<any>(null);

export function ParallaxProvider({ children }: { children: React.ReactNode }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <ParallaxContext.Provider value={{ mouseX, mouseY }}>
      {children}
    </ParallaxContext.Provider>
  );
}

export function useParallax() {
  return useContext(ParallaxContext);
}
