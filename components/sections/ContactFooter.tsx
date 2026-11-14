"use client";

import { motion } from "framer-motion";
import { Code2, Mail, UserRound } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { useMotionConfig } from "@/components/motion/use-motion-config";
import { SOCIAL } from "@/lib/site";

const links = [
  {
    href: SOCIAL.github,
    label: "GitHub",
    icon: Code2,
    external: true,
  },
  {
    href: SOCIAL.linkedin,
    label: "LinkedIn",
    icon: UserRound,
    external: true,
  },
] as const;

export function ContactFooter() {
  const { prefersReducedMotion } = useMotionConfig();

  return (
    <footer
      id="contact"
      className="border-t border-white/5 px-6 py-24 md:px-8 md:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl text-center">
        <FadeIn>
          <h2
            id="contact-heading"
            className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl"
          >
            Let&apos;s connect
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            Open to technical leadership conversations and frontend
            architecture roles.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {links.map(({ href, label, icon: Icon }) => (
              <motion.div
                key={label}
                whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Pranil Meherkar on ${label}`}
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 text-sm text-foreground transition-colors hover:border-violet-500/40 hover:bg-violet-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                  {label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Link
                href={`mailto:${SOCIAL.email}`}
                aria-label="Send email to Pranil Meherkar"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-violet-500 px-6 text-sm font-medium text-white shadow-lg shadow-violet-500/20 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Mail className="h-4 w-4" aria-hidden />
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mt-16 font-mono text-xs text-zinc-600">
            © {new Date().getFullYear()} Pranil Meherkar · Mumbai, Maharashtra
          </p>
        </FadeIn>
      </div>
    </footer>
  );
}
