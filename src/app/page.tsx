"use client";

import Loader from "@/components/Loader";
import { useAnimation } from "@/context/AnimationContext";
import CinematicHero from "@/components/CinematicHero";
import ScrollStory from "@/components/ScrollStory";

export default function Home() {
  const { introDone } = useAnimation();

  return (
    <main className="bg-black">
      {!introDone && <Loader />}

      {introDone && (
        <div
          className="
            h-screen
            overflow-y-scroll
            snap-y
            snap-mandatory
            scroll-smooth
          "
        >
          <CinematicHero />
          <ScrollStory />
        </div>
      )}
    </main>
  );
}
