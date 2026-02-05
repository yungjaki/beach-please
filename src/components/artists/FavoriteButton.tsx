"use client";

import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

export default function FavoriteButton({ id }: { id: string }) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) {
      setSaved(JSON.parse(stored).includes(id));
    }
  }, [id]);

  const toggleFavorite = () => {
    const stored = JSON.parse(localStorage.getItem("favorites") || "[]");

    let updated;

    if (stored.includes(id)) {
      updated = stored.filter((f: string) => f !== id);
      setSaved(false);
    } else {
      updated = [...stored, id];
      setSaved(true);
    }

    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <button
      onClick={toggleFavorite}
      className="absolute top-3 right-3 z-20"
    >
      <Heart
        className={`${
          saved ? "fill-green-400 text-green-400" : "text-white"
        } transition`}
      />
    </button>
  );
}
