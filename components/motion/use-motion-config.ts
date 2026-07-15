"use client";

import { useReducedMotion } from "framer-motion";

export function useMotionConfig() {
  const prefersReducedMotion = useReducedMotion();

  return {
    prefersReducedMotion: !!prefersReducedMotion,
    ease: [0.22, 1, 0.36, 1] as const,
    duration: prefersReducedMotion ? 0.01 : 0.6,
  };
}
