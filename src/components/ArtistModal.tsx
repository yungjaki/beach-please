"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useArtist } from "@/context/ArtistContext";
import { useEffect } from "react";

export default function ArtistModal() {
  const { artist, closeArtist } = useArtist();

  // ESC key close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeArtist();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeArtist]);

  return (
    <AnimatePresence>
      {artist && (
        <motion.div
          className="fixed inset-0 z-[300] bg-black/90 backdrop-blur-lg flex items-center justify-center px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeArtist}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="max-w-2xl w-full text-center"
          >
            <h2 className="text-6xl md:text-7xl font-black mb-6">
              {artist.name}
            </h2>

            <p className="text-white/70 mb-10">
              More details coming soon. Stay tuned for set time and stage.
            </p>

            <div className="flex justify-center gap-6">
              <button className="bg-brand-green text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition">
                Add to my schedule
              </button>

              <button
                onClick={closeArtist}
                className="text-white/70 hover:text-white transition"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
