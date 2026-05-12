"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

export function GalleryFinale() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });

  const reveal = (delay = 0) => ({
    initial: { opacity: 0, y: 24, filter: "blur(10px)" },
    animate: inView
      ? { opacity: 1, y: 0, filter: "blur(0px)" }
      : { opacity: 0, y: 24, filter: "blur(10px)" },
    transition: { duration: 1, ease: EASE, delay },
  });

  return (
    <section
      ref={ref}
      id="contact"
      className="relative flex min-h-[88vh] items-center justify-center overflow-hidden bg-black px-6 py-32 md:py-40"
    >
      {/* Ambient atmosphere */}
      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-0 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.03) 35%, transparent 70%)",
          filter: "blur(60px)",
        }}
        initial={{ scale: 0.6, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.6, opacity: 0 }}
        transition={{ duration: 2.2, ease: EASE }}
      />

      {/* Grain texture for filmic depth */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 360 360' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-[900px] flex-col items-center text-center">
        {/* Eyebrow with hairlines */}
        <motion.div {...reveal(0)} className="mb-8 flex items-center gap-4">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.15 }}
            style={{ transformOrigin: "right" }}
            className="h-px w-12 bg-white/60"
          />
          <span className="text-[0.62rem] uppercase tracking-[0.42em] text-white/85">
            Let&apos;s create
          </span>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.15 }}
            style={{ transformOrigin: "left" }}
            className="h-px w-12 bg-white/60"
          />
        </motion.div>

        {/* Heading with word stagger */}
        <h2 className="font-display text-5xl leading-[0.95] text-white md:text-7xl lg:text-[5.6rem]">
          <motion.span {...reveal(0.1)} className="block">
            Tell your story in
          </motion.span>
          <motion.span
            {...reveal(0.28)}
            className="mt-2 block italic relative"
            style={{
              fontFamily: '"Cormorant Garamond", serif',
            }}
          >
            cinematic light.
            <motion.span
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.4, ease: EASE, delay: 1.0 }}
              style={{ transformOrigin: "left" }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-px w-[58%] bg-white/50"
            />
          </motion.span>
        </h2>

        {/* Supporting micro-copy */}
        <motion.p
          {...reveal(0.48)}
          className="mt-10 max-w-[520px] text-[0.95rem] leading-[1.75] text-white/55"
        >
          Cinematic portraits, products, and motion films. Every frame
          intentional. Every grade engineered to hold emotion.
        </motion.p>

        {/* Primary CTA — magnetic glow button */}
        <motion.div {...reveal(0.65)} className="mt-12">
          <a
            href="mailto:hello@rawfx.studio?subject=Project%20Inquiry"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white px-10 py-5 text-sm font-semibold uppercase tracking-[0.28em] text-black transition-transform duration-500 hover:scale-[1.03] active:scale-[0.98]"
            style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
          >
            {/* Shine sweep */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/70 to-transparent transition-transform duration-[1200ms] ease-out group-hover:translate-x-full"
            />
            <Sparkles className="relative h-4 w-4" />
            <span className="relative">Start a Project</span>
            <ArrowRight className="relative h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* Secondary link */}
        <motion.div {...reveal(0.78)} className="mt-6">
          <a
            href="#works"
            className="text-[0.62rem] uppercase tracking-[0.36em] text-white/55 transition-colors hover:text-white"
          >
            or revisit the works
          </a>
        </motion.div>

        {/* Footer line — diamond + copyright + socials */}
        <motion.div
          {...reveal(0.95)}
          className="mt-24 flex w-full max-w-[640px] items-center justify-between border-t border-white/10 pt-8"
        >
          <span className="text-[0.58rem] uppercase tracking-[0.28em] text-white/40">
            © {new Date().getFullYear()} RAW Fx Studio
          </span>
          <span
            aria-hidden="true"
            className="inline-block h-2.5 w-2.5 rotate-45 bg-white/85"
            style={{ boxShadow: "0 0 14px rgba(255,255,255,0.35)" }}
          />
          <div className="flex items-center gap-5 text-[0.58rem] uppercase tracking-[0.28em] text-white/55">
            <a href="#" className="hover:text-white transition-colors">IG</a>
            <a href="#" className="hover:text-white transition-colors">Behance</a>
            <a href="#" className="hover:text-white transition-colors">YouTube</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
