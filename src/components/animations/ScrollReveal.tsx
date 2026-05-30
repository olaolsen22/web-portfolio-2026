import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { animation } from '../../utils/animationConfig';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export const ScrollReveal = ({
  children,
  delay = 0,
  duration = animation.duration.base,
  className,
}: ScrollRevealProps) => {
  const { motionAllowed } = useReducedMotion();

  if (!motionAllowed) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration, delay, ease: animation.ease.out }}
    >
      {children}
    </motion.div>
  );
};
