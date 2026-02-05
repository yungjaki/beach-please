"use client";

import { createContext, useContext, useState } from "react";

type Artist = {
  name: string;
};

type ArtistContextType = {
  artist: Artist | null;
  openArtist: (artist: Artist) => void;
  closeArtist: () => void;
};

const ArtistContext = createContext<ArtistContextType | null>(null);

export function ArtistProvider({ children }: { children: React.ReactNode }) {
  const [artist, setArtist] = useState<Artist | null>(null);

  return (
    <ArtistContext.Provider
      value={{
        artist,
        openArtist: setArtist,
        closeArtist: () => setArtist(null),
      }}
    >
      {children}
    </ArtistContext.Provider>
  );
}

export function useArtist() {
  const ctx = useContext(ArtistContext);
  if (!ctx) throw new Error("useArtist must be used inside ArtistProvider");
  return ctx;
}
