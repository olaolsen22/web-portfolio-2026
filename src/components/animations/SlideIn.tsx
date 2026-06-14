import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { animation } from '../../utils/animationConfig';

type Direction = 'left' | 'right' | 'up' | 'down';

interface SlideInProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
}

const offsets: Record<Direction, { x?: number; y?: number }> = {
  left: { x: -40 },
  right: { x: 40 },
  up: { y: -40 },
  down: { y: 40 },
};

export const SlideIn = ({
  children,
  direction = 'left',
  delay = 0,
  duration = animation.duration.standard,
  className,
}: SlideInProps) => {
  const { motionAllowed } = useReducedMotion();

  if (!motionAllowed) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offsets[direction] }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, delay, ease: animation.ease.out }}
    >
      {children}
    </motion.div>
  );
};
