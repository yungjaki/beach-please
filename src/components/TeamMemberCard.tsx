"use client";

import { motion } from "framer-motion";

export default function TeamMemberCard({
  name,
  role,
  image,
}: {
  name: string;
  role: string;
  image: string;
}) {
  return (
    <motion.div
      className="
        relative h-[420px] overflow-hidden rounded-2xl
        bg-black border border-white/10
        group
      "
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* IMAGE — ALWAYS FILLS */}
      <img
        src={image}
        alt={name}
        className="
          absolute inset-0 w-full h-full
          object-cover
          grayscale group-hover:grayscale-0
          transition duration-500
        "
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

      {/* TEXT */}
      <div className="absolute bottom-0 left-0 p-6 w-full">
        <p className="font-bold text-xl text-white">
          {name}
        </p>
        <p className="text-white/80 text-sm mt-1">
          {role}
        </p>
      </div>
    </motion.div>
  );
}
