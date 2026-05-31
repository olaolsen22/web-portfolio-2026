import { AnimatePresence, motion } from 'motion/react';
import type { ReactNode } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { animation } from '../../utils/animationConfig';

interface DrawerRevealProps {
  isOpen: boolean;
  children: ReactNode;
  className?: string;
}

export const DrawerReveal = ({ isOpen, children, className }: DrawerRevealProps) => {
  const { motionAllowed } = useReducedMotion();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={className}
          initial={motionAllowed ? { opacity: 0, y: -8 } : false}
          animate={{ opacity: 1, y: 0 }}
          exit={motionAllowed ? { opacity: 0, y: -8 } : undefined}
          transition={{ duration: animation.duration.enter, ease: animation.ease.out }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
