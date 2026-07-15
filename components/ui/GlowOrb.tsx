"use client";

export function GlowOrb() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div className="glow-pulse absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[120px]" />
      <div
        className="glow-pulse absolute -right-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-cyan-500/15 blur-[100px]"
        style={{ animationDelay: "2s" }}
      />
      <div className="absolute inset-0 grid-pattern opacity-60" />
    </div>
  );
}
