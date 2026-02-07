"use client";

import TextReveal from "@/components/TextReveal";
import {
  motion,
  AnimatePresence,
  useInView,
  useAnimationControls,
} from "framer-motion";
import { useRef, useEffect } from "react";

/* -----------------------------
   PALM COMPONENT (FIXED)
------------------------------ */

function Palm({
  palm,
  index,
}: {
  palm: {
    src: string;
    left: string;
    bottom: string;
    width: number;
    rotate: number;
    opacity: number;
    flip?: boolean;
    delay: number;
  };
  index: number;
}) {
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <motion.img
      src={palm.src}
      alt=""
      className="absolute origin-bottom select-none"
      style={{
        left: palm.left,
        bottom: palm.bottom,
        width: palm.width,
        maxWidth: "70vw", // 📱 MOBILE SAFETY
        opacity: palm.opacity,
        transform: palm.flip ? "scaleX(-1)" : "none",
      }}
      variants={{
        hidden: {
          y: 300,
          rotate: palm.rotate - 12,
          opacity: 0,
        },
        visible: {
          y: 0,
          rotate: palm.rotate,
          opacity: palm.opacity,
          transition: {
            delay: palm.delay,
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          },
        },
        exit: {
          y: 300,
          rotate: palm.rotate + 12,
          opacity: 0,
          transition: {
            duration: 0.6,
            ease: "easeInOut",
          },
        },
      }}
      initial="hidden"
      animate={controls}
      onAnimationComplete={(definition) => {
        if (definition === "visible") {
          controls.start({
            rotate: [
              palm.rotate - 1,
              palm.rotate + 1.5,
              palm.rotate - 1,
            ],
            transition: {
              duration: 8 + index * 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          });
        }
      }}
    />
  );
}


/* -----------------------------
   MANIFESTO SECTION
------------------------------ */

export default function ManifestoSection() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    amount: 0.6,
  });

  const palms = [
    {
      src: "/palms/palm-1.png",
      left: "-10%",
      bottom: "10px",
      width: 500,
      rotate: 20,
      opacity: 0.5,
      flip: true,
      delay: 0,
    },
    {
      src: "/palms/palm-1.png",
      left: "65%",
      bottom: "-20px",
      width: 650,
      rotate: -23,
      opacity: 0.5,
      delay: 0.2,
    },
  ];

  return (
    <section
      ref={ref}
      className="relative h-screen snap-start flex items-center justify-center overflow-hidden"
    >
      {/* 🌴 PALMS */}
      <AnimatePresence>
        {isInView && (
          <motion.div
            className="absolute inset-0 pointer-events-none overflow-hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {palms.map((palm, i) => (
              <Palm key={i} palm={palm} index={i} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🌿 BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(115,249,76,0.08),transparent_65%)]" />

      {/* ✍️ CONTENT */}
      <div className="relative z-10 max-w-5xl text-center px-6">
        <h2 className="text-[clamp(3rem,7vw,6rem)] font-black leading-[0.95] tracking-tight">
          <span className="block">
            <TextReveal text="THIS IS NOT" />
          </span>
          <span className="block">
            <TextReveal text="JUST A FESTIVAL." delay={0.2} />
          </span>
        </h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-10 text-white/70 text-xl max-w-2xl mx-auto"
        >
          It’s a place where music, freedom, and unforgettable
          nights collide.
        </motion.p>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}

