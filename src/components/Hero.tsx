"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import TextReveal from "@/components/TextReveal";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const titleX = useTransform(mouseX, [-300, 300], [-20, 20]);
  const titleY = useTransform(mouseY, [-300, 300], [-20, 20]);

  const bgX = useTransform(mouseX, [-300, 300], [-40, 40]);
  const bgY = useTransform(mouseY, [-300, 300], [-40, 40]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* BACKGROUND GLOW */}
      <motion.div
        style={{ x: bgX, y: bgY }}
        className="absolute inset-[-20%] bg-[radial-gradient(circle_at_center,rgba(115,249,76,0.12),transparent_60%)]"
      />

      {/* CONTENT */}
      <motion.div
        style={{ x: titleX, y: titleY }}
        className="relative z-10 text-center px-6"
      >
        <h1 className="text-[clamp(3rem,8vw,7rem)] font-black leading-[0.95] tracking-tight">
          <span className="block">
            <TextReveal text="BEACH" />
          </span>

          <span className="block text-brand-green drop-shadow-[0_0_40px_rgba(115,249,76,0.45)]">
            <TextReveal text="PLEASE" delay={0.2} />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-6 text-white/70 max-w-xl mx-auto text-lg"
        >
          Europe’s wildest beach festival. Music, sand, nights you’ll never forget.
        </motion.p>

        {/* CTA */}
        <div className="mt-10 flex items-center justify-center gap-6">
          <a
            href="/tickets"
            className="bg-brand-green text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition"
          >
            Buy Tickets
          </a>

          <a
            href="/lineup"
            className="text-white/80 hover:text-white transition"
          >
            View Lineup →
          </a>
        </div>
      </motion.div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
