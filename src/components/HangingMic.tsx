"use client";

import { motion } from "framer-motion";

const BASE_ROTATION = -130;
const MIC_X_OFFSET = -19;

export type MicState = "hidden" | "hanging" | "falling" | "fallen" | "exit";

export default function HangingMic({ state }: { state: MicState }) {
  if (state === "hidden") return null;

  return (
    <motion.div
      className="absolute top-[72px] left-[120px] origin-top z-50 pointer-events-none"
      initial={{ y: -300, opacity: 0 }}
      animate={
        state === "hanging"
          ? { y: 0, opacity: 1 }
          : state === "falling"
          ? {
              y: "calc(100vh - 140px)",
              rotate: 25,
              opacity: 1,
            }
          : state === "fallen"
          ? {
              y: "calc(100vh - 140px)",
              rotate: 90,
              opacity: 1,
            }
          : state === "exit"
          ? {
              y: "calc(100vh + 200px)",
              rotate: 140,
              opacity: 0,
            }
        : {}
      }
      transition={
        state === "exit"
          ? { duration: 0.8, ease: "easeInOut" }
          : state === "falling"
          ? { duration: 1, ease: "easeIn" }
          : { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
      }
    >
      {/* GROUP */}
      <motion.div
        className="relative flex flex-col items-center origin-top"
        animate={
          state === "hanging"
            ? { rotate: [-4, 4, -4] }
            : { rotate: 0 }
        }
        transition={{
          duration: 4,
          repeat: state === "hanging" ? Infinity : 0,
          ease: "easeInOut",
        }}
      >
        {/* ROPE */}
        {state === "hanging" && (
          <motion.div
            className="w-[2px] bg-white/40"
            initial={{ height: 0 }}
            animate={{ height: 180 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        )}

        {/* MIC */}
        <motion.img
          src="/mic/mic.png"
          alt=""
          className="mt-12 w-16 origin-top"
          style={{
            x: MIC_X_OFFSET,
            rotate: BASE_ROTATION,
          }}
        />
      </motion.div>
    </motion.div>
  );
}
