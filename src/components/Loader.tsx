"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { useAnimation } from "@/context/AnimationContext";

export default function Loader() {
  const { finishIntro } = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      finishIntro();
    }, 2200);

    return () => clearTimeout(timer);
  }, [finishIntro]);

  return (
<div
  className="fixed inset-0 z-[200] bg-black flex items-center justify-center"
>

      {/* ISOLATED MOTION ELEMENT */}
<motion.div
  className="w-32 h-32-translate-y-4"
  initial={true} // 🔥 IMPORTANT — no initial motion state
  animate={{
    rotate: 360 * 2,
    scale: [1, 1.05, 1],
  }}
  transition={{
    rotate: {
      duration: 1.8,
      ease: "linear",
    },
    scale: {
      delay: 1.8,
      duration: 0.4,
      ease: "easeOut",
    },
  }}
  style={{
    transformOrigin: "50% 50%",
    willChange: "transform",
  }}
>
<img
  src="/logo.svg"
  alt="Beach Please"
  className="w-full h-full object-contain block"
  draggable={false}
/>

      </motion.div>
    </div>
  );
}
