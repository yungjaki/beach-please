import { motion } from "framer-motion";
import { useArtist } from "@/context/ArtistContext";

type Artist = {
  name: string;
  isHeadliner?: boolean;
};

export default function ArtistCard({ name, isHeadliner }: Artist) {
  const { openArtist } = useArtist();

  return (
    <motion.div
      onClick={() => openArtist({ name })}
      className={`
        cursor-pointer relative overflow-hidden rounded-2xl
        border border-white/10 bg-black/40 backdrop-blur-md
        ${isHeadliner ? "md:col-span-2 md:row-span-2" : ""}
      `}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative z-10 flex items-center justify-center h-full p-10">
        <h3
          className={`
            text-center font-black tracking-tight
            ${isHeadliner ? "text-6xl" : "text-3xl"}
          `}
        >
          {name}
        </h3>
      </div>
    </motion.div>
  );
}
