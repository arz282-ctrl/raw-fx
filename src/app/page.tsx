"use client";

import { useEffect, useRef } from "react";
import {
  FullScreenScrollFX,
  FullScreenFXAPI,
} from "@/components/ui/full-screen-scroll-fx";

const homeSections = [
  { leftLabel: "Cinematic", title: "Portrait", rightLabel: "Sony A6700", background: "/images/image-1.png" },
  { leftLabel: "Duality", title: "Visual Story", rightLabel: "35mm / 50mm", background: "/images/image-2.png" },
  { leftLabel: "Silence", title: "Wilderness", rightLabel: "Golden Hour", background: "/images/image-3.png" },
  { leftLabel: "Solitude", title: "Machine", rightLabel: "f/1.8", background: "/images/image-4.png" },
  { leftLabel: "Warmth", title: "Golden Light", rightLabel: "S-Log3", background: "/images/image-5.png" },
  { leftLabel: "Luxury", title: "Product", rightLabel: "Studio", background: "/images/image-6.png" },
  { leftLabel: "Mood", title: "Atmosphere", rightLabel: "Cinematic", background: "/images/image-7.png" },
];

export default function HomePage() {
  const apiRef = useRef<FullScreenFXAPI>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const api = apiRef.current;
      if (!api) return;
      if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        api.next();
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        api.prev();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <main className="relative pt-20">
      <section id="motion" className="ambient-divider">
        <FullScreenScrollFX
          sections={homeSections}
          fontFamily={'"Cormorant Garamond", serif'}
          footer={<div />}
          showProgress
          durations={{ change: 0.95, snap: 1100 }}
          parallaxAmount={6}
          colors={{
            text: "rgba(255,255,255,0.92)",
            overlay: "rgba(0,0,0,0.18)",
            pageBg: "#050505",
            stageBg: "#000000",
          }}
          apiRef={apiRef}
        />
      </section>
    </main>
  );
}
