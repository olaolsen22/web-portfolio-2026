export const animation = {
  duration: { fast: 0.2, base: 0.4, slow: 0.6, slower: 0.9 },
  ease: {
    out: [0.0, 0.0, 0.2, 1] as const,
    inOut: [0.4, 0, 0.2, 1] as const,
    default: [0.25, 0.1, 0.25, 1] as const,
    linear: [0, 0, 1, 1] as const,
  },
  stagger: 0.08,
} as const;
