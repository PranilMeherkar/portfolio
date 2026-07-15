"use client";

import Link from "next/link";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";
import { StaggerReveal } from "@/components/motion/StaggerReveal";
import { FadeIn } from "@/components/motion/FadeIn";
import { GlowOrb } from "@/components/ui/GlowOrb";

export function Hero() {
  return (
    <section
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-24 pb-20 md:px-8"
      aria-labelledby="hero-heading"
    >
      <ParallaxLayer className="absolute inset-0">
        <GlowOrb />
      </ParallaxLayer>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <FadeIn>
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
            Acting Technical Lead · Mumbai
          </p>
        </FadeIn>

        <div id="hero-heading">
          <StaggerReveal
            text="Pranil Meherkar"
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
          />
        </div>

        <FadeIn delay={0.3}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300 md:text-xl">
            Frontend engineer specializing in{" "}
            <span className="text-foreground">React & Next.js</span> —
            architecture, performance, and delivery at scale.
          </p>
        </FadeIn>

        <FadeIn delay={0.45}>
          <p className="mt-4 max-w-xl text-base text-muted">
            Leading 18–20 developers across cross-functional Next.js products.
          </p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#experience"
              className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              View experience
            </Link>
            <Link
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 text-sm font-medium text-foreground transition-colors hover:border-violet-500/40 hover:bg-violet-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Get in touch
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
