import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { animation } from '../../utils/animationConfig';

interface StaggerChildrenProps {
  children: ReactNode;
  stagger?: number;
  initialDelay?: number;
  whileInView?: boolean;
  className?: string;
}

const containerVariants = (stagger: number, initialDelay: number) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: initialDelay },
  },
});

export const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: animation.ease.out, duration: 0.5 },
  },
};

export const StaggerChildren = ({
  children,
  stagger = animation.stagger,
  initialDelay = 0,
  whileInView = false,
  className,
}: StaggerChildrenProps) => {
  const { motionAllowed } = useReducedMotion();

  if (!motionAllowed) {
    return <div className={className}>{children}</div>;
  }

  const motionProps = whileInView
    ? {
        whileInView: 'visible' as const,
        viewport: { once: true, margin: '-80px' },
        initial: 'hidden',
      }
    : {
        animate: 'visible' as const,
        initial: 'hidden',
      };

  return (
    <motion.div
      className={className}
      variants={containerVariants(stagger, initialDelay)}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};
