"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { useMotionConfig } from "./use-motion-config";

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "none";
};

export function FadeIn({
  children,
  delay = 0,
  className,
  direction = "up",
}: FadeInProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { prefersReducedMotion, ease, duration } = useMotionConfig();

  const offset =
    direction === "up"
      ? { y: 24, x: 0 }
      : direction === "left"
        ? { y: 0, x: -24 }
        : { y: 0, x: 0 };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        ...(!prefersReducedMotion ? offset : {}),
      }}
      animate={
        inView
          ? { opacity: 1, y: 0, x: 0 }
          : { opacity: 0, ...(!prefersReducedMotion ? offset : {}) }
      }
      transition={{ duration, delay, ease }}
    >
      {children}
    </motion.div>
  );
}
