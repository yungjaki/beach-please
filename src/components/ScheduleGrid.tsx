"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const days = ["Friday", "Saturday", "Sunday"];
const stages = ["Main Stage", "Beach Stage", "Underground"];

const scheduleData = {
  Friday: [
    { artist: "TRAVIS SCOTT", stage: "Main Stage", time: "22:00" },
    { artist: "YEAT", stage: "Beach Stage", time: "20:30" },
    { artist: "KEN CARSON", stage: "Underground", time: "19:00" },
  ],
  Saturday: [
    { artist: "PLAYBOI CARTI", stage: "Main Stage", time: "23:00" },
    { artist: "DESTROY LONELY", stage: "Beach Stage", time: "21:00" },
    { artist: "ICE SPICE", stage: "Underground", time: "19:30" },
  ],
  Sunday: [
    { artist: "LIL UZI VERT", stage: "Main Stage", time: "22:30" },
    { artist: "CENTRAL CEE", stage: "Beach Stage", time: "20:00" },
    { artist: "PINKPANTHERESS", stage: "Underground", time: "18:30" },
  ],
};

export default function ScheduleGrid() {
  const [activeDay, setActiveDay] = useState<keyof typeof scheduleData>("Friday");

  return (
    <div>
      {/* DAY TABS */}
      <div className="flex gap-4 mb-12">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setActiveDay(day as keyof typeof scheduleData)}
            className={`px-6 py-2 rounded-full font-bold transition
              ${
                activeDay === day
                  ? "bg-brand-green text-black"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stages.map((stage) => (
          <motion.div
            key={stage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="border border-white/10 rounded-2xl p-6"
          >
            <h3 className="font-black text-xl mb-6">
              {stage}
            </h3>

            <div className="space-y-4">
              {scheduleData[activeDay]
                .filter((slot) => slot.stage === stage)
                .map((slot) => (
                  <div
                    key={slot.artist}
                    className="flex items-center justify-between bg-black/40 rounded-xl px-4 py-3 hover:border-green-400 border border-transparent transition"
                  >
                    <span className="font-bold">
                      {slot.artist}
                    </span>
                    <span className="text-white/60 text-sm">
                      {slot.time}
                    </span>
                  </div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
