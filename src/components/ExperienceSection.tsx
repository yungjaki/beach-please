"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const items = [
  {
    title: "Get Your Ticket",
    subtitle: "Secure your place on the beach",
    href: "/tickets",
    accent: "from-brand-green/30",
  },
  {
    title: "Explore the Lineup",
    subtitle: "Artists, stages & moments",
    href: "/lineup",
    accent: "from-purple-500/30",
  },
  {
    title: "Discover the Festival",
    subtitle: "Stages, map & info",
    href: "/map",
    accent: "from-cyan-400/30",
  },
];

export default function ExperienceSection() {
  return (
    <section className="relative h-screen snap-start flex items-center justify-center overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black" />

      <div className="relative z-10 max-w-7xl w-full px-6">
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-6xl md:text-7xl font-black mb-20"
        >
          Choose your experience
        </motion.h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
            >
              <Link href={item.href}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="
                    relative h-[260px] rounded-3xl p-8
                    bg-white/5 backdrop-blur-xl
                    border border-white/10
                    cursor-pointer overflow-hidden
                  "
                >
                  {/* GLOW */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.accent} to-transparent opacity-0 hover:opacity-100 transition`}
                  />

                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      <h3 className="text-3xl font-black mb-3">
                        {item.title}
                      </h3>
                      <p className="text-white/60">
                        {item.subtitle}
                      </p>
                    </div>

                    <span className="text-brand-green font-semibold">
                      Enter →
                    </span>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
