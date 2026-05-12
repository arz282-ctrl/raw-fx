"use client";

import GlassmorphismTrustHero from "@/components/ui/glassmorphism-trust-hero";
import { ZoomParallax } from "@/components/ui/zoom-parallax";
import { FeatureSpotlight } from "@/components/ui/feature-spotlight";
import { GalleryFinale } from "@/components/site/gallery-finale";

const parallaxImages = [
  { src: "/images/image-1.png", alt: "Cinematic Portrait" },
  { src: "/images/image-2.png", alt: "Strength & Grace" },
  { src: "/images/image-3.png", alt: "Into The Wild" },
  { src: "/images/image-4.png", alt: "Rugged Machine" },
  { src: "/images/image-5.png", alt: "Amber Horizon" },
  { src: "/images/image-6.png", alt: "Supremacy" },
  { src: "/images/image-7.png", alt: "Underpass" },
];

type Visual = {
  src: string;
  index: string;
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  specs: { label: string; value: string }[];
  aspect: "portrait" | "landscape";
};

const visuals: Visual[] = [
  {
    src: "/images/image-1.png",
    index: "01",
    eyebrow: "Portrait",
    titleLine1: "Cinematic",
    titleLine2: "Portrait",
    aspect: "portrait",
    description: "Controlled studio light meets natural storytelling — presence held in a single frame.",
    specs: [
      { label: "Camera", value: "Sony A6700" },
      { label: "Lens", value: "35mm f/1.8" },
      { label: "Grade", value: "S-Log3" },
      { label: "Place", value: "Studio · CMB" },
    ],
  },
  {
    src: "/images/image-2.png",
    index: "02",
    eyebrow: "Editorial",
    titleLine1: "Strength",
    titleLine2: "& Grace",
    aspect: "landscape",
    description: "Duality — power and softness shaped through directional light and quiet composition.",
    specs: [
      { label: "Camera", value: "Sony A6700" },
      { label: "Lens", value: "50mm f/1.8" },
      { label: "Grade", value: "S-Log3" },
      { label: "Place", value: "Studio Set" },
    ],
  },
  {
    src: "/images/image-3.png",
    index: "03",
    eyebrow: "Landscape",
    titleLine1: "Into",
    titleLine2: "The Wild",
    aspect: "landscape",
    description: "Golden-hour silhouette dwarfed by palms — a meditation on scale and stillness.",
    specs: [
      { label: "Camera", value: "Sony A6700" },
      { label: "Lens", value: "16mm f/2.8" },
      { label: "Grade", value: "HLG" },
      { label: "Place", value: "Tangalle" },
    ],
  },
  {
    src: "/images/image-4.png",
    index: "04",
    eyebrow: "Automotive",
    titleLine1: "Rugged",
    titleLine2: "Machine",
    aspect: "portrait",
    description: "Minimal automotive frame in cold mist — tension between motion and pause.",
    specs: [
      { label: "Camera", value: "Sony A6700" },
      { label: "Lens", value: "35mm f/1.8" },
      { label: "Grade", value: "S-Log3" },
      { label: "Place", value: "Highland" },
    ],
  },
  {
    src: "/images/image-5.png",
    index: "05",
    eyebrow: "Travel",
    titleLine1: "Amber",
    titleLine2: "Horizon",
    aspect: "portrait",
    description: "Golden-hour triptych — warmth distilled into a quiet visual poem.",
    specs: [
      { label: "Camera", value: "Sony A6700" },
      { label: "Lens", value: "70–200mm" },
      { label: "Grade", value: "S-Log3" },
      { label: "Place", value: "Ella Ridge" },
    ],
  },
  {
    src: "/images/image-6.png",
    index: "06",
    eyebrow: "Product",
    titleLine1: "Supremacy",
    titleLine2: "",
    aspect: "portrait",
    description: "Volcanic stone, slow smoke, atmospheric pressure — luxury rendered raw.",
    specs: [
      { label: "Camera", value: "Sony A6700" },
      { label: "Lens", value: "90mm Macro" },
      { label: "Grade", value: "Custom LUT" },
      { label: "Place", value: "Tabletop" },
    ],
  },
  {
    src: "/images/image-7.png",
    index: "07",
    eyebrow: "Mood",
    titleLine1: "Underpass",
    titleLine2: "",
    aspect: "landscape",
    description: "Fluorescent green wash, environmental portrait — cinematic and unfiltered.",
    specs: [
      { label: "Camera", value: "Sony A6700" },
      { label: "Lens", value: "35mm f/1.8" },
      { label: "Grade", value: "S-Log3" },
      { label: "Place", value: "Colombo · Night" },
    ],
  },
];

export default function GalleryPage() {
  return (
    <main className="relative bg-black">
      <GlassmorphismTrustHero backgroundSrc="/images/gallery-hero.png" />

      <section id="works" className="relative bg-black">
        <ZoomParallax images={parallaxImages} />
      </section>

      <section className="bg-black px-6 md:px-12 lg:px-20 xl:px-28">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-32 py-24 md:gap-44 md:py-32 lg:gap-56 lg:py-40">
          {visuals.map((v, i) => (
            <FeatureSpotlight
              key={v.index}
              index={v.index}
              eyebrow={v.eyebrow}
              titleLine1={v.titleLine1}
              titleLine2={v.titleLine2 || undefined}
              description={v.description}
              src={v.src}
              alt={`${v.titleLine1} ${v.titleLine2}`}
              specs={v.specs}
              reversed={i % 2 === 1}
              ctaLabel="View"
              aspect={v.aspect}
            />
          ))}
        </div>
      </section>

      <GalleryFinale />
    </main>
  );
}
