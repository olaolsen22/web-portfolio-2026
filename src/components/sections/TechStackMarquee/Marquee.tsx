import { useRef, useState } from 'react';
import { motion, useMotionValue, useAnimationFrame } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Pill } from '@/components/ui/typography';

const SPEED_PX_PER_S = 40;

const FADE_STYLE = {
  maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
  WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
} as const;

interface MarqueeProps {
  skills: string[];
  isPaused: boolean;
}

export const Marquee = ({ skills, isPaused }: MarqueeProps) => {
  const { motionAllowed } = useReducedMotion();
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useAnimationFrame((_, delta) => {
    if (!motionAllowed || isPaused || isHovered) return;
    const halfWidth = (trackRef.current?.scrollWidth ?? 0) / 2;
    if (!halfWidth) return;
    const next = x.get() - (delta / 1000) * SPEED_PX_PER_S;
    x.set(next <= -halfWidth ? 0 : next);
  });

  if (!motionAllowed || isPaused) {
    return (
      <div className="flex flex-wrap justify-center gap-y-3 px-6 md:px-12 lg:px-20" role="list">
        {skills.map((skill, i) => (
          <Pill key={skill} role="listitem" className="flex items-center">
            {i > 0 && (
              <Pill className="mx-6 select-none text-brand" aria-hidden="true">
                ·
              </Pill>
            )}
            <Pill className="whitespace-nowrap text-sm font-bold text-brand">{skill}</Pill>
          </Pill>
        ))}
      </div>
    );
  }

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
          <Pill key={i} className="flex shrink-0 items-center">
            <Pill className="whitespace-nowrap text-sm font-bold text-brand">{skill}</Pill>
            <Pill className="mx-6 select-none text-brand">·</Pill>
          </Pill>
        ))}
      </motion.div>
    </div>
  );
};
