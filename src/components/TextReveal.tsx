"use client";

import { motion } from "framer-motion";

export default function TextReveal({
  text,
  delay = 0,
  className = "",
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  const words = text.split(" ");

  return (
    <span className={`inline-block overflow-hidden ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-3"
          initial={{ y: "120%" }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
            delay: delay + i * 0.08,
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
