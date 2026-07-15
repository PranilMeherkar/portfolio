"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { useMotionConfig } from "./use-motion-config";

type ParallaxLayerProps = {
  children: ReactNode;
  className?: string;
  offset?: number;
};

export function ParallaxLayer({
  children,
  className,
  offset = 80,
}: ParallaxLayerProps) {
  const ref = useRef(null);
  const { prefersReducedMotion } = useMotionConfig();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, offset]
  );

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}
