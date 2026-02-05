"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CinematicSection({
  children,
  overlay,
}: {
  children: React.ReactNode;
  overlay: React.ReactNode;
}) {
  const ref = useRef(null);
  const isActive = useInView(ref, {
    amount: 0.6, // section must be mostly visible
  });

  return (
    <section
      ref={ref}
      className="relative h-screen snap-start flex items-center px-8 overflow-hidden"
    >
      {/* MAIN CONTENT */}
      <div className="relative z-10 w-full">
        {children}
      </div>

      {/* OVERLAY POP-UP */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={
          isActive
            ? { opacity: 1, scale: 1 }
            : { opacity: 0, scale: 0.9 }
        }
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="absolute inset-0 pointer-events-none"
      >
        {overlay}
      </motion.div>
    </section>
  );
}
