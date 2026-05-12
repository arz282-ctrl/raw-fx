import type { Metadata } from "next";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/motion/smooth-scroll-provider";
import { PageTransitionShell } from "@/components/motion/page-transition-shell";
import { CinematicNavbar } from "@/components/site/cinematic-navbar";

export const metadata: Metadata = {
  title: "RAW Fx STUDIO — Cinematic Visual Storytelling",
  description:
    "Premium cinematography & photography studio specializing in cinematic portraits, product photography, landscape storytelling, and visual narratives. Shot on Sony A6700.",
  keywords: [
    "cinematography",
    "photography",
    "cinematic portrait",
    "product photography",
    "visual storytelling",
    "RAW Fx Studio",
    "Sony A6700",
  ],
  openGraph: {
    title: "RAW Fx STUDIO — Cinematic Visual Storytelling",
    description:
      "Premium cinematography & photography studio. Cinematic portraits, golden hour landscapes, and product visuals.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,500;1,700&family=JetBrains+Mono:wght@400;500&family=Sora:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <div className="ambient-blobs" aria-hidden="true" />
        <div className="cinematic-grain" aria-hidden="true" />
        <SmoothScrollProvider>
          <CinematicNavbar />
          <PageTransitionShell>{children}</PageTransitionShell>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
