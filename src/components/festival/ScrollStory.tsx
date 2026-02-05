"use client";

import { motion } from "framer-motion";

export default function ScrollStory() {
  const sections = [
    "Feel the bass on the sand.",
    "Dance under neon skies.",
    "Experience the wildest lineup.",
  ];

  return (
    <div className="space-y-40 py-40">
      {sections.map((text, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-4xl md:text-6xl font-black px-6"
        >
          {text}
        </motion.div>
      ))}
    </div>
  );
}