export const animation = {
  duration: {
    // backwards-compat aliases
    fast: 0.2,
    base: 0.4,
    slow: 0.6,
    slower: 0.9,
    // semantic tokens per design spec
    quick: 0.2, // color, border, opacity changes
    standard: 0.28, // transforms, interactive state changes
    enter: 0.28, // overlay / drawer fade-in
    lift: 0.35, // image / card hovers
    scroll: 0.6, // scroll reveal
    hero: 0.9, // hero name entrance
  },
  ease: {
    out: [0.0, 0.0, 0.2, 1] as const,
    inOut: [0.4, 0, 0.2, 1] as const,
    default: [0.25, 0.1, 0.25, 1] as const,
    linear: [0, 0, 1, 1] as const,
  },
  stagger: 0.08, // general-purpose list stagger
  staggerTight: 0.06, // nav link stagger (spec: 0.06s step)
} as const;
