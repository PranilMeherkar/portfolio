"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { useMotionConfig } from "./use-motion-config";

type StaggerRevealProps = {
  text: string;
  className?: string;
  splitBy?: "words" | "chars";
  id?: string;
};

export function StaggerReveal({
  text,
  className,
  splitBy = "words",
  id,
}: StaggerRevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const { prefersReducedMotion, ease, duration } = useMotionConfig();

  const parts =
    splitBy === "words" ? text.split(" ") : text.split("");

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.06,
        delayChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, ease },
    },
  };

  return (
    <h1 id={id} ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        className="inline-flex flex-wrap"
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        aria-hidden="true"
      >
        {parts.map((part, i) => (
          <motion.span
            key={`${part}-${i}`}
            variants={child}
            className="inline-block"
          >
            {part}
            {splitBy === "words" && i < parts.length - 1 ? "\u00A0" : ""}
          </motion.span>
        ))}
      </motion.span>
    </h1>
  );
}

type StaggerChildrenProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
};

export function StaggerChildren({
  children,
  className,
  stagger = 0.08,
}: StaggerChildrenProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { prefersReducedMotion, ease, duration } = useMotionConfig();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: prefersReducedMotion ? 0 : stagger,
          },
        },
      }}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration, ease },
                },
              }}
            >
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}
