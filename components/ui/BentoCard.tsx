"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import type { BentoItem } from "@/lib/site";

type BentoCardProps = {
  item: BentoItem;
  index: number;
};

export function BentoCard({ item, index }: BentoCardProps) {
  const Icon = item.icon;

  return (
    <FadeIn
      delay={index * 0.08}
      className={`group flex flex-col justify-between rounded-2xl border border-white/5 bg-zinc-900/40 p-5 backdrop-blur-sm transition-colors hover:border-violet-500/25 hover:bg-zinc-900/60 md:p-6 ${item.className}`}
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-zinc-300 transition-colors group-hover:bg-violet-500/10 group-hover:text-violet-400">
        <Icon className="h-4 w-4 md:h-5 md:w-5" aria-hidden />
      </div>
      <div className="mt-4">
        <h3 className="font-display text-base font-semibold text-foreground md:text-lg">
          {item.name}
        </h3>
        <p className="mt-1 text-xs text-muted md:text-sm">{item.description}</p>
      </div>
    </FadeIn>
  );
}
