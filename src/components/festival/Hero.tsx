"use client";

import { motion } from "framer-motion";
import Countdown from "./Countdown";
import Particles from "./Particles";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover opacity-40"
      >
        <source src="/festival-video.mp4" type="video/mp4" />
      </video>

      <Particles />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <h1 className="text-7xl md:text-9xl font-black tracking-widest">
          BEACH PLEASE
        </h1>

        <p className="text-gray-300 mt-6 max-w-xl mx-auto">
          Europe's wildest beach music experience.
        </p>

        <Countdown />
      </motion.div>
    </section>
  );
}