"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import TextReveal from "@/components/TextReveal";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Desktop-only mouse parallax
  useEffect(() => {
    if (window.innerWidth < 768) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const titleX = useTransform(mouseX, [-300, 300], [-16, 16]);
  const titleY = useTransform(mouseY, [-300, 300], [-16, 16]);

  const bgX = useTransform(mouseX, [-300, 300], [-30, 30]);
  const bgY = useTransform(mouseY, [-300, 300], [-30, 30]);

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden px-4">
      {/* BACKGROUND GLOW */}
      <motion.div
        aria-hidden
        style={{ x: bgX, y: bgY }}
        className="
          absolute inset-[-30%]
          bg-[radial-gradient(circle_at_center,rgba(115,249,76,0.14),transparent_60%)]
        "
      />

      {/* CONTENT */}
      <motion.div
        style={{ x: titleX, y: titleY }}
        className="relative z-10 text-center w-full max-w-4xl"
      >
        <h1
          className="
            font-black leading-[0.92] tracking-tight
            text-[clamp(2.6rem,10vw,7rem)]
          "
        >
          <span className="block">
            <TextReveal text="BEACH" />
          </span>

          <span className="block text-brand-green drop-shadow-[0_0_36px_rgba(115,249,76,0.45)]">
            <TextReveal text="PLEASE" delay={0.2} />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="
            mt-6 mx-auto
            max-w-[36ch]
            text-base sm:text-lg
            text-white/70
          "
        >
          Europe’s wildest beach festival. Music, sand, nights you’ll never forget.
        </motion.p>

        {/* CTA */}
        <div
          className="
            mt-10
            flex flex-col sm:flex-row
            items-center justify-center
            gap-4 sm:gap-6
          "
        >
          <a
            href="/tickets"
            className="
              w-full sm:w-auto
              bg-brand-green text-black
              px-8 py-4
              rounded-full
              font-bold
              text-base
              transition
              hover:scale-105
              active:scale-95
            "
          >
            Buy Tickets
          </a>

          <a
            href="/lineup"
            className="
              text-white/80
              text-base
              hover:text-white
              transition
            "
          >
            View Lineup →
          </a>
        </div>
      </motion.div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
