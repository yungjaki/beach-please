"use client";

import { motion } from "framer-motion";
import FestivalMap from "@/components/FestivalMap";

export default function MapPage() {
  return (
    <main className="pt-40 px-8 max-w-7xl mx-auto">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <h1 className="text-6xl md:text-7xl font-black mb-6">
          Festival Map
        </h1>
        <p className="text-white/60 max-w-xl">
          Explore the grounds. Find your stage.
        </p>
      </motion.div>

      {/* MAP */}
      <FestivalMap />
    </main>
  );
}
