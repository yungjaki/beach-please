"use client";

import { createContext, useContext, useState } from "react";

const AnimationContext = createContext<{
  introDone: boolean;
  finishIntro: () => void;
}>({
  introDone: false,
  finishIntro: () => {},
});

export function AnimationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [introDone, setIntroDone] = useState(false);

  return (
    <AnimationContext.Provider
      value={{
        introDone,
        finishIntro: () => setIntroDone(true),
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimation() {
  return useContext(AnimationContext);
}
