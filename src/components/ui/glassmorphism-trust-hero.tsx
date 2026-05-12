import React from "react";

export interface GlassmorphismTrustHeroProps {
  backgroundSrc?: string;
}

export default function GlassmorphismTrustHero({
  backgroundSrc = "/images/gallery-hero.png",
}: GlassmorphismTrustHeroProps) {
  return (
    <div className="relative w-full min-h-screen bg-zinc-950 text-white overflow-hidden font-sans">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover"
        style={{
          backgroundImage: `url(${backgroundSrc})`,
          backgroundPosition: "center",
        }}
      />
      {/* Soft cinematic vignette */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/35 via-transparent to-black/70" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/25 via-transparent to-black/25" />
    </div>
  );
}
