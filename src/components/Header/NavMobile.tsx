import { motion, AnimatePresence } from 'motion/react';
import { NAV_LINKS } from '@/constants/nav';
import { NavLinkMobile } from '@/components/ui/typography';
import { cn } from '@/utils';
import { animation } from '@/utils/animationConfig';
import { itemVariants } from '@/components/animations/StaggerChildren';
import type { TranslationKey } from '@/content';

interface NavMobileProps {
  menuOpen: boolean;
  motionAllowed: boolean;
  transparencyAllowed: boolean;
  lang: 'en' | 'nb';
  t: (key: TranslationKey) => string;
  onClose: () => void;
}

const menuListVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: animation.staggerTight,
      delayChildren: animation.stagger,
    },
  },
};

export const NavMobile = ({
  menuOpen,
  motionAllowed,
  transparencyAllowed,
  lang,
  t,
  onClose,
}: NavMobileProps) => (
  <AnimatePresence>
    {menuOpen && (
      <motion.div
        id="mobile-menu"
        key="mobile-menu"
        initial={{ opacity: 0, y: motionAllowed ? -8 : 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: motionAllowed ? -8 : 0 }}
        transition={{
          duration: motionAllowed ? animation.duration.enter : 0,
          ease: animation.ease.out,
        }}
        className={cn(
          'fixed inset-0 z-[49] flex flex-col md:hidden overflow-hidden',
          transparencyAllowed ? 'backdrop-blur-xl' : 'bg-background'
        )}
        style={transparencyAllowed ? { backgroundColor: 'var(--menu-bg)' } : undefined}
        role="dialog"
        aria-modal="true"
        aria-label={lang === 'en' ? 'Navigation menu' : 'Navigasjonsmeny'}
      >
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute rounded-full opacity-[0.22] dark:opacity-[0.18]"
          style={{
            width: 540,
            height: 540,
            top: -200,
            right: -260,
            background: 'radial-gradient(circle, #10b981, transparent 70%)',
            filter: 'blur(80px)',
            willChange: 'transform',
          }}
          animate={
            motionAllowed ? { x: [0, -80, 0], y: [0, 60, 0], scale: [1, 1.08, 1] } : undefined
          }
          transition={{ repeat: Infinity, duration: 22, ease: 'easeInOut' }}
        />
        <nav
          className="flex flex-1 flex-col w-full px-5 pb-8 pt-32"
          aria-label={lang === 'en' ? 'Mobile navigation' : 'Mobil navigasjon'}
        >
          <motion.ul
            className="flex flex-col w-full divide-y divide-border"
            variants={menuListVariants}
            initial={motionAllowed ? 'hidden' : false}
            animate="visible"
          >
            {NAV_LINKS.map(({ key, href }, index) => (
              <motion.li key={href} variants={motionAllowed ? itemVariants : undefined}>
                <a
                  href={href}
                  className="group flex items-end justify-between py-5 px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  onClick={onClose}
                >
                  <NavLinkMobile className="transition-[color,padding-left] duration-200 group-hover:text-brand group-hover:pl-3">
                    {t(key)}
                  </NavLinkMobile>
                  <span className="text-[0.7rem] font-bold text-muted-foreground">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </nav>
      </motion.div>
    )}
  </AnimatePresence>
);
