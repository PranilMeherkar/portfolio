"use client";

import { motion } from "framer-motion";
import type { SessionEntry } from "@/lib/site";
import { useMotionConfig } from "@/components/motion/use-motion-config";

type SessionCardProps = {
  session: SessionEntry;
};

export function SessionCard({ session }: SessionCardProps) {
  const { prefersReducedMotion } = useMotionConfig();
  const Icon = session.icon;

  return (
    <motion.article
      className="group relative flex flex-col rounded-2xl border border-white/5 bg-zinc-900/40 p-6 backdrop-blur-sm transition-colors hover:border-violet-500/30 hover:bg-zinc-900/60"
      whileHover={prefersReducedMotion ? {} : { y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
          <Icon className="h-5 w-5" aria-hidden />
        </div>
        <span className="rounded-full border border-white/5 bg-white/5 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-zinc-400">
          {session.tag}
        </span>
      </div>
      <h3 className="font-display text-lg font-semibold text-foreground">
        {session.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {session.description}
      </p>
    </motion.article>
  );
}
