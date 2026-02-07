"use client";

import { createContext, useContext, useState, useCallback } from "react";

type AnimationContextType = {
  introDone: boolean;
  finishIntro: () => void;
  resetIntro: () => void;
};

const AnimationContext = createContext<AnimationContextType>({
  introDone: false,
  finishIntro: () => {},
  resetIntro: () => {},
});

export function AnimationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [introDone, setIntroDone] = useState(false);

  const finishIntro = useCallback(() => {
    setIntroDone(true);
  }, []);

  const resetIntro = useCallback(() => {
    setIntroDone(false);
  }, []);

  return (
    <AnimationContext.Provider
      value={{
        introDone,
        finishIntro,
        resetIntro,
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimation() {
  return useContext(AnimationContext);
}
