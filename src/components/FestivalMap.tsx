"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useArtist } from "@/context/ArtistContext";

type Stage = {
  id: string;
  name: string;
  x: number;
  y: number;
};

const stages: Stage[] = [
  { id: "main", name: "Main Stage", x: 50, y: 30 },
  { id: "beach", name: "Beach Stage", x: 20, y: 60 },
  { id: "underground", name: "Underground", x: 75, y: 65 },
];

export default function FestivalMap() {
  const [active, setActive] = useState<string | null>(null);
  const { openArtist } = useArtist();

  return (
    <div className="relative w-full aspect-[16/9] bg-black/40 rounded-3xl overflow-hidden border border-white/10">
      {/* MAP BACKGROUND */}
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* BEACH */}
        <rect x="0" y="0" width="100" height="100" fill="#0a0a0a" />

        {/* SAND */}
        <motion.path
          d="M0,55 C30,50 60,70 100,60 L100,100 L0,100 Z"
          fill="#111"
        />

        {/* WATER */}
        <motion.path
          d="M0,0 C30,10 60,0 100,15 L100,0 Z"
          fill="#050505"
        />

        {/* STAGES */}
        {stages.map((stage) => (
          <motion.g
            key={stage.id}
            onClick={() => setActive(stage.id)}
            onHoverStart={() => setActive(stage.id)}
            onHoverEnd={() => setActive(null)}
            className="cursor-pointer"
          >
            <motion.circle
              cx={stage.x}
              cy={stage.y}
              r={active === stage.id ? 3.5 : 2.5}
              fill="#00ffae"
              animate={{
                opacity: active === stage.id ? 1 : 0.7,
              }}
            />
            <motion.text
              x={stage.x}
              y={stage.y - 5}
              textAnchor="middle"
              fill="white"
              fontSize="3"
              style={{ pointerEvents: "none" }}
              animate={{
                opacity: active === stage.id ? 1 : 0.6,
              }}
            >
              {stage.name}
            </motion.text>
          </motion.g>
        ))}
      </svg>

      {/* INFO PANEL */}
      {active && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-md border border-white/10 rounded-xl px-6 py-4"
        >
          <p className="font-bold">
            {stages.find((s) => s.id === active)?.name}
          </p>
          <button
            onClick={() =>
              openArtist({ name: "Artists playing here" })
            }
            className="mt-2 text-green-400 text-sm hover:underline"
          >
            View artists →
          </button>
        </motion.div>
      )}
    </div>
  );
}
