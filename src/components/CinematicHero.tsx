"use client";

import { motion } from "framer-motion";

export default function CinematicHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden snap-start">
      {/* VIDEO */}
      <video
        src="https://bbxxougg1szxv4fi.public.blob.vercel-storage.com/hero.mp4" // ← put your video in /public
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <motion.div
        className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-[clamp(3rem,8vw,8rem)] font-black leading-[0.9]">
          <span className="block">BEACH</span>
          <span className="block text-brand-green drop-shadow-[0_0_40px_rgba(0,255,170,0.4)]">
            PLEASE
          </span>
        </h1>

        <p className="mt-6 text-white/70 max-w-xl text-lg">
          Music. Sand. Nights you’ll never forget.
        </p>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <a
            href="/tickets"
            className="bg-brand-green text-black px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition"
          >
            Buy Tickets
          </a>
        </motion.div>
      </motion.div>

      {/* SCROLL INDICATOR */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.6 }}
      >
        ↓
      </motion.div>
    </section>
  );
}

