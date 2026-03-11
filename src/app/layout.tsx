import type { Metadata } from "next";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: "AtamaiAgents — Managed Cloud Hosting for AI Agents",
  description:
    "Deploy open-source AI agents in 60 seconds. No Docker, no VPS, no headaches. Bring your own keys. Managed cloud hosting starting at $19/mo.",
  keywords: [
    "AI agent hosting",
    "OpenClaw hosting",
    "managed AI agents",
    "cloud AI deployment",
    "AtamaiAgents",
  ],
  openGraph: {
    title: "AtamaiAgents — Your AI Agent, Live in 60 Seconds",
    description:
      "Managed cloud hosting for open-source AI agents. No Docker, no VPS, no headaches.",
    url: "https://atamai.ai",
    siteName: "AtamaiAgents",
    images: [
      {
        url: "https://atamai.ai/og-image.png", // placeholder — generate before launch
        width: 1200,
        height: 630,
        alt: "AtamaiAgents — Managed AI Agent Hosting",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AtamaiAgents — Your AI Agent, Live in 60 Seconds",
    description:
      "Managed cloud hosting for open-source AI agents. Starting at $19/mo.",
    images: ["https://atamai.ai/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://atamai.ai",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* TODO: Add analytics script here (Plausible / PostHog) */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-background text-white antialiased">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
