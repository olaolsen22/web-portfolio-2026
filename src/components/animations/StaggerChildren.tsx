import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { animation } from '../../utils/animationConfig';

interface StaggerChildrenProps {
  children: ReactNode;
  stagger?: number;
  className?: string;
}

const containerVariants = (stagger: number) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger },
  },
});

export const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: animation.ease.out, duration: animation.duration.base },
  },
};

export const StaggerChildren = ({
  children,
  stagger = animation.stagger,
  className,
}: StaggerChildrenProps) => {
  const { motionAllowed } = useReducedMotion();

  if (!motionAllowed) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={containerVariants(stagger)}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
};
