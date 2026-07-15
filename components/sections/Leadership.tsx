"use client";

import { SectionHeading } from "@/components/motion/SectionHeading";
import { StaggerChildren } from "@/components/motion/StaggerReveal";
import { SessionCard } from "@/components/ui/SessionCard";
import { SESSIONS } from "@/lib/site";

export function Leadership() {
  return (
    <section
      id="leadership"
      className="px-6 py-24 md:px-8 md:py-32"
      aria-labelledby="leadership-label"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="leadership"
          label="Leadership"
          title="Mentorship & knowledge sharing"
          description="Beyond delivery — I manage teams, run code reviews, and host technical sessions that elevate frontend standards across the organization."
        />
        <StaggerChildren className="grid gap-4 sm:grid-cols-2 lg:gap-6">
          {SESSIONS.map((session) => (
            <SessionCard key={session.title} session={session} />
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
