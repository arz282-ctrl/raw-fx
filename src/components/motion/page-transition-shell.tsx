"use client";

import { ReactNode, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { cinematicEase, pageTiming } from "@/components/motion/motion-presets";

export function PageTransitionShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [phase, setPhase] = useState<"idle" | "rising" | "holding" | "clearing">("idle");

  useEffect(() => {
    setPhase("rising");
    const t1 = window.setTimeout(() => setPhase("holding"), 600);
    const t2 = window.setTimeout(() => setPhase("clearing"), 950);
    const t3 = window.setTimeout(() => setPhase("idle"), 1700);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
    };
  }, [pathname]);

  const blackOpacity =
    phase === "rising" ? 1 : phase === "holding" ? 0.92 : phase === "clearing" ? 0 : 0;
  const glowOpacity =
    phase === "rising" ? 0.6 : phase === "holding" ? 1 : phase === "clearing" ? 0 : 0;

  return (
    <div className="relative">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 22, filter: "blur(10px)" }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: pageTiming.content, ease: cinematicEase, delay: 0.4 },
          }}
          exit={{
            opacity: 0,
            y: -10,
            filter: "blur(6px)",
            transition: { duration: 0.55, ease: cinematicEase },
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>

      <div className="route-bridge" aria-hidden="true">
        <motion.div
          className="layer layer-black"
          initial={false}
          animate={{ opacity: blackOpacity, y: blackOpacity > 0 ? 0 : -32 }}
          transition={{ duration: 0.85, ease: cinematicEase }}
        />
        <motion.div
          className="layer layer-glow"
          initial={false}
          animate={{ opacity: glowOpacity }}
          transition={{ duration: 1.2, ease: cinematicEase }}
        />
      </div>
    </div>
  );
}
