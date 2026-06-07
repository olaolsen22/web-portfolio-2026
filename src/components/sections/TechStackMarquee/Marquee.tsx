import { useRef, useState } from 'react';
import { motion, useMotionValue, useAnimationFrame } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const SPEED_PX_PER_S = 40;

const FADE_STYLE = {
  maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
  WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
} as const;

interface MarqueeProps {
  skills: string[];
}

export const Marquee = ({ skills }: MarqueeProps) => {
  const { motionAllowed } = useReducedMotion();
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useAnimationFrame((_, delta) => {
    if (!motionAllowed || isHovered) return;
    const halfWidth = (trackRef.current?.scrollWidth ?? 0) / 2;
    if (!halfWidth) return;
    const next = x.get() - (delta / 1000) * SPEED_PX_PER_S;
    x.set(next <= -halfWidth ? 0 : next);
  });

  return (
    <div
      className="overflow-hidden"
      style={FADE_STYLE}
      aria-hidden="true"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div ref={trackRef} style={{ x, display: 'flex', width: 'max-content' }}>
        {[...skills, ...skills].map((skill, i) => (
          <span key={i} className="flex shrink-0 items-center">
            <span className="whitespace-nowrap text-sm font-bold tracking-wide text-brand">
              {skill}
            </span>
            <span className="mx-6 inline-block h-3 w-px bg-brand" aria-hidden="true" />
          </span>
        ))}
      </motion.div>
    </div>
  );
};
