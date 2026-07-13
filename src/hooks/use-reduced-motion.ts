import { useState, useEffect } from "react";

/**
 * Returns true when we should skip entrance animations.
 * On mobile (≤768px) we skip them entirely so content appears instantly.
 */
export function useSkipAnimations(): boolean {
  const [skip, setSkip] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setSkip(mq.matches);
    const handler = (e: MediaQueryListEvent) => setSkip(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return skip;
}
