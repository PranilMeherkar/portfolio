"use client";

import { SectionHeading } from "@/components/motion/SectionHeading";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { TIMELINE } from "@/lib/site";

export function Experience() {
  return (
    <section
      id="experience"
      className="px-6 py-24 md:px-8 md:py-32"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="experience"
          label="Career"
          title="Experience"
          description="From engineering foundations to leading frontend delivery across large, cross-functional teams."
        />
        <div className="relative">
          {TIMELINE.map((entry, index) => (
            <TimelineItem
              key={entry.period}
              entry={entry}
              isLast={index === TIMELINE.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
