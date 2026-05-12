"use client";

import { useState, type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

export interface FeatureSpotlightSpec {
  label: string;
  value: string;
}

export interface FeatureSpotlightProps {
  titleLine1: string;
  titleLine2?: string;
  eyebrow?: string;
  description?: ReactNode;
  src: string;
  alt?: string;
  index?: string;
  specs?: FeatureSpotlightSpec[];
  reversed?: boolean;
  ctaLabel?: string;
  href?: string;
  /** Controls image aspect ratio */
  aspect?: "portrait" | "landscape";
}

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";
const FG = "rgba(255,255,255,0.92)";
const FG_SOFT = "rgba(255,255,255,0.55)";
const FG_FAINT = "rgba(255,255,255,0.30)";
const BG = "#0a0a0a";

const ASPECT_CLASSES = {
  portrait:
    "aspect-[4/5] w-full max-w-[520px] md:max-w-[460px] lg:max-w-[560px] xl:max-w-[620px]",
  landscape:
    "aspect-[16/10] w-full max-w-[640px] md:max-w-[640px] lg:max-w-[780px] xl:max-w-[880px]",
};

export function FeatureSpotlight({
  titleLine1,
  titleLine2,
  eyebrow = "Featured",
  description,
  src,
  alt,
  index = "01",
  specs,
  reversed = false,
  ctaLabel = "Explore",
  href = "#",
  aspect = "portrait",
}: FeatureSpotlightProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      className={`group relative grid w-full cursor-pointer grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-14 lg:gap-20 ${
        reversed ? "md:[&>div:first-child]:order-2" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      {/* Left: Text Block */}
      <div className="relative z-10 flex w-full flex-col items-center text-center md:col-span-5 md:items-start md:text-left lg:col-span-5 lg:pt-6">
        {/* Index + label row */}
        <div className="mb-8 flex w-full items-center gap-4">
          <span className="font-mono text-[0.7rem] tracking-[0.25em] text-white/85">{index}</span>
          <div
            className="h-px bg-white/85 transition-all duration-700"
            style={{ width: isHovered ? 56 : 32, transitionTimingFunction: EASE }}
          />
          <span
            className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/85 transition-all duration-700 md:text-xs"
            style={{
              letterSpacing: isHovered ? "0.34em" : "0.28em",
              transitionTimingFunction: EASE,
            }}
          >
            {eyebrow}
          </span>
        </div>

        {/* Title */}
        <h2 className="relative">
          <span
            className="block font-display text-5xl font-normal leading-[0.92] tracking-tight text-white transition-all duration-700 sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl"
            style={{
              transform: isHovered ? "translateY(-2px)" : "translateY(0)",
              transitionTimingFunction: EASE,
            }}
          >
            {titleLine1}
          </span>
          {titleLine2 ? (
            <span
              className="block font-display text-5xl font-normal leading-[0.92] tracking-tight text-white transition-all duration-700 sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl"
              style={{
                transform: isHovered ? "translateX(12px)" : "translateX(0)",
                transitionTimingFunction: EASE,
              }}
            >
              {titleLine2}
            </span>
          ) : null}
        </h2>

        {/* Story */}
        {description ? (
          <p
            className="mt-8 max-w-[480px] text-base leading-[1.7] transition-all duration-700 md:mt-10 md:max-w-[440px] md:text-[1.02rem] lg:mt-12 lg:max-w-[480px] lg:text-[1.06rem]"
            style={{
              color: isHovered ? FG : FG_SOFT,
              transform: isHovered ? "translateY(-4px)" : "translateY(0)",
              transitionTimingFunction: EASE,
            }}
          >
            {description}
          </p>
        ) : null}

        {/* Specs — editorial stacked layout */}
        {specs && specs.length > 0 ? (
          <dl
            className="mt-10 w-full max-w-[480px] md:max-w-[440px] lg:max-w-[480px]"
            style={{
              opacity: isHovered ? 1 : 0.7,
              transition: `opacity 700ms ${EASE}`,
            }}
          >
            {specs.map((s, i) => (
              <div
                key={s.label}
                className="flex items-center justify-between gap-4 py-3 text-[0.78rem]"
                style={{
                  borderTop: i === 0 ? "1px solid rgba(255,255,255,0.14)" : "none",
                  borderBottom: "1px solid rgba(255,255,255,0.10)",
                }}
              >
                <dt className="uppercase tracking-[0.24em]" style={{ color: FG_FAINT }}>
                  {s.label}
                </dt>
                <dd className="font-mono tracking-wide" style={{ color: FG }}>
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        ) : null}

        {/* CTA */}
        <div className="mt-9 flex items-center gap-4 md:mt-11 lg:mt-12">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-500 md:h-11 md:w-11 lg:h-12 lg:w-12"
            style={{
              borderColor: isHovered ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.25)",
              backgroundColor: isHovered ? "#ffffff" : "transparent",
              color: isHovered ? BG : FG,
              transform: isHovered ? "scale(1.05)" : "scale(1)",
              boxShadow: isHovered ? "0 8px 32px rgba(255,255,255,0.18)" : "0 0 0 transparent",
              transitionTimingFunction: EASE,
            }}
          >
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform duration-500 md:h-4 md:w-4"
              style={{
                transform: isHovered ? "rotate(45deg)" : "rotate(0deg)",
                transitionTimingFunction: EASE,
              }}
            />
          </div>
          <span
            className="text-[10px] font-medium uppercase tracking-[0.32em] text-white transition-all duration-700 md:text-xs"
            style={{
              opacity: isHovered ? 1 : 0.5,
              transform: isHovered ? "translateX(0)" : "translateX(-8px)",
              transitionTimingFunction: EASE,
              transitionDelay: isHovered ? "100ms" : "0ms",
            }}
          >
            {ctaLabel}
          </span>
        </div>
      </div>

      {/* Right: Image Block */}
      <div
        className={`flex w-full md:col-span-7 lg:col-span-7 ${
          reversed ? "md:justify-start" : "md:justify-end"
        } justify-center`}
      >
        <div
          className="relative transition-all duration-700"
          style={{
            transform: isHovered ? "translateX(4px) translateY(-4px)" : "translateX(0) translateY(0)",
            transitionTimingFunction: EASE,
          }}
        >
          <div
            className="absolute -inset-3 border transition-all duration-700 md:-inset-4"
            style={{
              borderColor: isHovered ? "rgba(255,255,255,0.18)" : "transparent",
              transform: isHovered ? "scale(1.01)" : "scale(1)",
              transitionTimingFunction: EASE,
            }}
          />

          <div className={`relative overflow-hidden ${ASPECT_CLASSES[aspect]}`}>
          <div
            className="absolute -inset-1 transition-all duration-700"
            style={{
              boxShadow: isHovered ? "0 24px 64px rgba(0,0,0,0.55)" : "0 0 0 transparent",
              transitionTimingFunction: EASE,
            }}
          />
          <img
            src={src}
            alt={alt ?? titleLine1}
            loading="lazy"
            className="h-full w-full object-cover transition-all duration-1000"
            style={{
              transform: isHovered ? "scale(1.04)" : "scale(1)",
              transitionTimingFunction: EASE,
            }}
          />

          <div
            className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent transition-opacity duration-700"
            style={{
              opacity: isHovered ? 1 : 0,
              transitionTimingFunction: EASE,
            }}
          />

          {[
            { pos: "left-2 top-2 md:left-3 md:top-3", axis: "y", origin: "top", delay: "50ms" },
            { pos: "left-2 top-2 md:left-3 md:top-3", axis: "x", origin: "left", delay: "100ms" },
            { pos: "bottom-2 right-2 md:bottom-3 md:right-3", axis: "y", origin: "bottom", delay: "150ms" },
            { pos: "bottom-2 right-2 md:bottom-3 md:right-3", axis: "x", origin: "right", delay: "200ms" },
          ].map((c, idx) => (
            <div
              key={idx}
              className={`absolute ${c.pos} ${
                c.axis === "y" ? "h-5 w-px md:h-6" : "h-px w-5 md:w-6"
              }`}
              style={{
                background: "rgba(255,255,255,0.85)",
                opacity: isHovered ? 1 : 0,
                transform: isHovered
                  ? c.axis === "y"
                    ? "scaleY(1)"
                    : "scaleX(1)"
                  : c.axis === "y"
                  ? "scaleY(0)"
                  : "scaleX(0)",
                transformOrigin: c.origin,
                transition: `transform 500ms ${EASE} ${c.delay}, opacity 500ms ${EASE} ${c.delay}`,
              }}
            />
          ))}
          </div>
        </div>
      </div>
    </a>
  );
}
