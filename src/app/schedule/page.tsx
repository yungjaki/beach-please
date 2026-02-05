"use client";

import { motion } from "framer-motion";
import ScheduleGrid from "@/components/ScheduleGrid";

export default function SchedulePage() {
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
          Schedule
        </h1>
        <p className="text-white/60 max-w-xl">
          Plan your days. Don’t miss a moment.
        </p>
      </motion.div>

      {/* GRID */}
      <ScheduleGrid />
    </main>
  );
}
