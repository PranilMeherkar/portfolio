"use client";

import { SectionHeading } from "@/components/motion/SectionHeading";
import { BentoCard } from "@/components/ui/BentoCard";
import { BENTO_ITEMS } from "@/lib/site";

export function TechStack() {
  return (
    <section
      id="stack"
      className="px-6 py-24 md:px-8 md:py-32"
      aria-labelledby="stack-label"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="stack"
          label="Toolkit"
          title="Tech stack & architecture"
          description="The tools and patterns I use to ship scalable, type-safe, high-performance frontend systems."
        />
        <div className="grid auto-rows-[minmax(120px,auto)] grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4 md:gap-4">
          {BENTO_ITEMS.map((item, index) => (
            <BentoCard key={item.name} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
