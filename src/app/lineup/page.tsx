"use client";

import { motion } from "framer-motion";
import ArtistCard from "@/components/ArtistCard";

const artists = [
  { name: "TRAVIS SCOTT", headliner: true },
  { name: "PLAYBOI CARTI", headliner: true },
  { name: "LIL UZI VERT" },
  { name: "YEAT" },
  { name: "DESTROY LONELY" },
  { name: "KEN CARSON" },
  { name: "CENTRAL CEE" },
  { name: "ICE SPICE" },
  { name: "PINKPANTHERESS" },
];

export default function LineupPage() {
  return (
    <main className="pt-40 px-8 max-w-7xl mx-auto">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <h1 className="text-6xl md:text-7xl font-black mb-6">
          Lineup
        </h1>
        <p className="text-white/60 max-w-xl">
          World-class artists. Unforgettable nights.
        </p>
      </motion.div>

      {/* GRID */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[220px]"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.06,
            },
          },
        }}
      >
        {artists.map((artist) => (
          <motion.div
            key={artist.name}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <ArtistCard
              name={artist.name}
              isHeadliner={artist.headliner}
            />
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
