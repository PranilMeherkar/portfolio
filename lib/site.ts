import type { LucideIcon } from "lucide-react";
import {
  Box,
  Braces,
  Code2,
  Container,
  Layers,
  Palette,
  RefreshCw,
  Sparkles,
  TestTube2,
  Wind,
} from "lucide-react";

export const SOCIAL = {
  github: "https://github.com/your-username",
  linkedin: "https://in.linkedin.com/in/pranil-meherkar-b37a7a1a4",
  email: "pmeherkar@gmail.com",
} as const;

export const NAV_LINKS = [
  { href: "#experience", label: "Experience" },
  { href: "#leadership", label: "Leadership" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
] as const;

export type TimelineEntry = {
  period: string;
  title: string;
  company: string;
  highlights: string[];
};

export const TIMELINE: TimelineEntry[] = [
  {
    period: "Feb 2023 – Present",
    title: "Associate Software Developer (Acting Technical Lead)",
    company: "Nimap Infotech",
    highlights: [
      "Lead frontend execution and technical coordination for 18–20 developers across React and Next.js applications.",
      "Built reusable components, scalable UI architecture, and shared state-management solutions.",
      "Optimized Next.js apps with SSR, SSG, caching, and SEO; improved Core Web Vitals.",
      "Conducted code reviews, mentored juniors, and aligned delivery with product stakeholders.",
    ],
  },
  {
    period: "2018 – 2022",
    title: "B.Tech, Electronics & Telecommunications",
    company: "K J Somaiya Institute of Technology",
    highlights: [
      "Engineering foundation supporting a career in high-performance web development.",
    ],
  },
];

export type SessionEntry = {
  title: string;
  description: string;
  tag: string;
  icon: LucideIcon;
};

export const SESSIONS: SessionEntry[] = [
  {
    title: "Building React Generic Components",
    description:
      "Type-safe, reusable UI patterns for team-wide consistency and faster feature delivery.",
    tag: "Workshop",
    icon: Layers,
  },
  {
    title: "Next.js Performance & Web Vitals",
    description:
      "SSR/SSG strategies, caching, lazy loading, and measurable Core Web Vitals improvements.",
    tag: "Tech Talk",
    icon: Wind,
  },
  {
    title: "Frontend Code Review Standards",
    description:
      "PR hygiene, architecture decisions, and scalable patterns across the codebase.",
    tag: "Mentorship",
    icon: Code2,
  },
  {
    title: "Scalable State Management",
    description:
      "Redux Toolkit, Context API, and SWR — choosing the right tool for each use case.",
    tag: "Workshop",
    icon: RefreshCw,
  },
];

export type BentoItem = {
  name: string;
  description: string;
  icon: LucideIcon;
  className: string;
};

export const BENTO_ITEMS: BentoItem[] = [
  {
    name: "Next.js",
    description: "App Router, SSR, SSG, ISR",
    icon: Wind,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    name: "TypeScript",
    description: "Type-safe UI systems at scale",
    icon: Braces,
    className: "md:col-span-2",
  },
  {
    name: "React.js",
    description: "Components, hooks, architecture",
    icon: Box,
    className: "md:row-span-2",
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first, responsive design",
    icon: Palette,
    className: "",
  },
  {
    name: "Redux Toolkit",
    description: "Predictable global state",
    icon: Layers,
    className: "",
  },
  {
    name: "SWR",
    description: "Data fetching & caching",
    icon: RefreshCw,
    className: "",
  },
  {
    name: "Docker",
    description: "Containerized workflows",
    icon: Container,
    className: "",
  },
  {
    name: "Vitest / RTL",
    description: "Component testing",
    icon: TestTube2,
    className: "",
  },
  {
    name: "Cursor / AI",
    description: "AI-assisted development",
    icon: Sparkles,
    className: "",
  },
];
