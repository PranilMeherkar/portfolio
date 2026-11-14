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

export const SITE_CONFIG = {
  name: "Pranil Meherkar",
  shortName: "Pranil",
  role: "Senior Frontend Developer & Acting Technical Lead",
  title: "Pranil Meherkar - Senior Frontend Developer & Acting Technical Lead · React & Next.js",
  description:
    "Results-focused Software Engineer with 3.9 years of experience specializing in high-performance web applications using React.js and Next.js. Senior Developer & Acting Technical Lead guiding 18–20 engineers across scalable frontend architecture, performance, and delivery.",
  url: "https://portfolio-beta-flax-cr3w0td88t.vercel.app",
  ogImage: "/opengraph-image",
  location: "Mumbai, Maharashtra, India",
  email: "pmeherkar@gmail.com",
  phone: "+91-9757196299",
  skills: [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Redux Toolkit",
    "SWR",
    "Core Web Vitals",
    "SSR / SSG / ISR",
    "Frontend Architecture",
    "Technical Mentorship",
    "Team Leadership",
  ],
} as const;

export const SOCIAL = {
  github: "https://github.com/PranilMeherkar",
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
    period: "Sept 2026 – Oct 2026",
    title: "Senior Software Developer (Acting Technical Lead)",
    company: "Nimap Infotech",
    highlights: [
      "Directed frontend team execution and managed technical delivery across concurrent React.js and Next.js projects.",
      "Accelerated development workflows, complex debugging, and code refactoring using AI tools like Cursor and Claude Code.",
      "Conducted thorough architectural code reviews, mentored engineers, and upheld frontend best practices across teams.",
    ],
  },
  {
    period: "Feb 2023 – Sept 2026",
    title: "Associate Software Developer (Acting Technical Lead)",
    company: "Nimap Infotech",
    highlights: [
      "Led frontend technical coordination and delivery for an 18–20 member engineering team across cross-functional products.",
      "Architected reusable React generic components, scalable design systems, and centralized state-management solutions.",
      "Engineered high-performance Next.js applications with SSR, SSG, intelligent caching, and Core Web Vitals optimization.",
      "Collaborated closely with product managers and cross-functional teams to deliver scalable solutions matching business goals.",
    ],
  },
  {
    period: "Sept 2018 – May 2022",
    title: "B.Tech, Electronics & Telecommunications",
    company: "K J Somaiya Institute of Technology",
    highlights: [
      "Engineering foundation supporting a career in high-performance web development and frontend systems architecture.",
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
      "Redux Toolkit, Context API, and SWR - choosing the right tool for each use case.",
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
    name: "Cursor / Claude Code",
    description: "AI-accelerated engineering",
    icon: Sparkles,
    className: "",
  },
];
