"use client";

import { FadeIn } from "./FadeIn";

type SectionHeadingProps = {
  id: string;
  label: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  id,
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <FadeIn className="mb-12 md:mb-16">
      <p
        id={`${id}-label`}
        className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-violet-400"
      >
        {label}
      </p>
      <h2
        id={`${id}-heading`}
        className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-lg text-muted">{description}</p>
      )}
    </FadeIn>
  );
}
