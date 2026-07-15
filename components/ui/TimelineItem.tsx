"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import type { TimelineEntry } from "@/lib/site";

type TimelineItemProps = {
  entry: TimelineEntry;
  isLast?: boolean;
};

export function TimelineItem({ entry, isLast }: TimelineItemProps) {
  return (
    <FadeIn direction="left" className="relative flex gap-6 md:gap-8">
      <div className="flex flex-col items-center">
        <div className="relative z-10 mt-1.5 h-3 w-3 shrink-0 rounded-full border-2 border-violet-500 bg-background shadow-[0_0_12px_rgba(139,92,246,0.5)]" />
        {!isLast && (
          <div className="mt-2 w-px flex-1 bg-gradient-to-b from-violet-500/50 to-transparent min-h-[80px]" />
        )}
      </div>
      <article className="pb-12 md:pb-16">
        <time className="font-mono text-xs text-violet-400">{entry.period}</time>
        <h3 className="mt-2 font-display text-xl font-semibold text-foreground md:text-2xl">
          {entry.title}
        </h3>
        <p className="mt-1 text-muted">{entry.company}</p>
        <ul className="mt-4 space-y-2">
          {entry.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex gap-2 text-sm leading-relaxed text-zinc-400 md:text-base"
            >
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-500" />
              {highlight}
            </li>
          ))}
        </ul>
      </article>
    </FadeIn>
  );
}
