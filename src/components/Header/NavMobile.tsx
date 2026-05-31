import { motion, AnimatePresence } from 'motion/react';
import { NAV_LINKS } from '@/constants/nav';
import { NavLinkMobile } from '@/components/ui/typography';
import { cn } from '@/utils';
import { animation } from '@/utils/animationConfig';
import type { TranslationKey } from '@/content';

interface NavMobileProps {
  menuOpen: boolean;
  motionAllowed: boolean;
  transparencyAllowed: boolean;
  lang: 'en' | 'nb';
  t: (key: TranslationKey) => string;
  onClose: () => void;
}

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
          duration: motionAllowed ? animation.duration.fast : 0,
          ease: animation.ease.out,
        }}
        className={cn(
          'fixed inset-0 z-[49] flex flex-col md:hidden',
          transparencyAllowed ? 'backdrop-blur-xl' : 'bg-background'
        )}
        style={transparencyAllowed ? { backgroundColor: 'var(--menu-bg)' } : undefined}
        role="dialog"
        aria-modal="true"
        aria-label={lang === 'en' ? 'Navigation menu' : 'Navigasjonsmeny'}
      >
        <nav
          className="flex flex-1 items-center justify-center pt-16"
          aria-label={lang === 'en' ? 'Mobile navigation' : 'Mobil navigasjon'}
        >
          <ul className="flex flex-col items-center gap-8">
            {NAV_LINKS.map(({ key, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="group transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm px-2 py-1"
                  onClick={onClose}
                >
                  <NavLinkMobile className="transition-colors group-hover:text-primary">
                    {t(key)}
                  </NavLinkMobile>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    )}
  </AnimatePresence>
);
