"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MagneticCTA } from "@/components/motion/magnetic-cta";

const items = [
  { label: "Motion", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/gallery#contact" },
];

export function CinematicNavbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? "bg-ink/55 backdrop-blur-2xl border-b border-ink-border" : "bg-transparent"
      }`}
      style={{ transitionTimingFunction: "var(--ease-cinematic)" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        <Link
          href="/"
          aria-label="RAW Fx Studio — Home"
          className="font-sans text-sm md:text-base font-bold tracking-[0.2em] uppercase text-cream"
        >
          RAW F<span className="text-white">x</span> STUDIO
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {items.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                data-active={active}
                className={`nav-link text-xs font-semibold tracking-[0.15em] uppercase transition-colors duration-300 ${
                  active ? "text-white" : "text-cream-dim hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:inline-flex">
          <MagneticCTA
            href="/gallery#contact"
            className="btn-outline !px-5 !py-2.5 !text-[0.65rem]"
          >
            <span>Book Now</span>
          </MagneticCTA>
        </div>
      </div>
    </nav>
  );
}
