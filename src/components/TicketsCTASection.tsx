"use client";

import { motion } from "framer-motion";
import TextReveal from "@/components/TextReveal";
import Link from "next/link";

export default function TicketsCTASection() {
  return (
    <section className="relative h-screen snap-start flex items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(115,249,76,0.12),transparent_65%)]" />

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h2 className="text-[clamp(3rem,7vw,6rem)] font-black leading-[0.95] tracking-tight">
          <span className="block">
            <TextReveal text="YOU KNOW" />
          </span>
          <span className="block">
            <TextReveal text="YOU’LL BE THERE." delay={0.2} />
          </span>
        </h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-8 text-white/70 text-xl"
        >
          July 2026 · Costinești, Romania
        </motion.p>

        {/* CTA BUTTON */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, duration: 0.4 }}
          className="mt-14"
        >
          <Link
            href="/tickets"
            className="
              inline-flex items-center justify-center
              px-14 py-6 rounded-full
              bg-brand-green text-black
              font-black text-xl
              hover:scale-105
              transition
              shadow-[0_0_40px_rgba(115,249,76,0.4)]
            "
          >
            Buy tickets
          </Link>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
