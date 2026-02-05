"use client";

import { motion } from "framer-motion";

export default function FAQCard({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <motion.div
      className="
        bg-black/40 backdrop-blur-md
        border border-white/10
        rounded-2xl p-8
        hover:border-green-400/40
        transition
      "
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <h3 className="text-xl md:text-2xl font-bold mb-4">
        {question}
      </h3>

      <p className="text-white/70 leading-relaxed whitespace-pre-line">
        {answer}
      </p>
    </motion.div>
  );
}
