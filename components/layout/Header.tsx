"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/site";

export function Header() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <header className="fixed top-0 z-50 w-full">
      <motion.div
        className="h-px origin-left bg-gradient-to-r from-violet-500 to-cyan-400"
        style={{ scaleX }}
      />
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 backdrop-blur-md md:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          aria-label="Pranil Meherkar - Return to top"
          className="font-display text-sm font-bold tracking-tight text-foreground transition-opacity hover:opacity-80"
        >
          PRANIL<span className="text-violet-400">.</span>
        </Link>
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-zinc-400 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="#contact"
          className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-violet-500/40 hover:bg-violet-500/10 md:text-sm"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
