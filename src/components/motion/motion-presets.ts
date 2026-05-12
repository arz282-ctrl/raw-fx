export const cinematicEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const pageTiming = {
  bridge: 1.25,
  content: 1.05,
  stagger: 0.08,
};

export const fadeUp = {
  initial: { opacity: 0, y: 28, filter: "blur(8px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: cinematicEase },
  },
  exit: {
    opacity: 0,
    y: -20,
    filter: "blur(8px)",
    transition: { duration: 0.65, ease: cinematicEase },
  },
};
