"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className="
        border border-white/10 rounded-2xl
        bg-black/40 backdrop-blur
        overflow-hidden
      "
    >
      {/* HEADER */}
      <button
        onClick={onToggle}
        className="
          w-full flex items-center justify-between
          px-6 py-5 text-left
          text-lg font-semibold
          hover:bg-white/5 transition
        "
      >
        <span>{question}</span>
        <span
          className={`transition-transform ${
            isOpen ? "rotate-45 text-brand-green" : "rotate-0"
          }`}
        >
          +
        </span>
      </button>

      {/* CONTENT */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-white/70 leading-relaxed whitespace-pre-line">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
