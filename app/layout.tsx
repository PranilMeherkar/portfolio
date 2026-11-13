import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pranil Meherkar — Senior Frontend Developer & Acting Technical Lead · React & Next.js",
  description:
    "Results-focused Software Engineer with 3.9 years of experience specializing in React.js and Next.js. Senior Developer & Acting Technical Lead guiding 18–20 engineers across scalable frontend architecture, performance, and delivery.",
  openGraph: {
    title: "Pranil Meherkar — Senior Frontend Developer & Acting Technical Lead",
    description:
      "Senior Frontend Engineer & Acting Tech Lead building high-performance React and Next.js applications at scale.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${syne.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
