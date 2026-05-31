import { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useReducedTransparency } from '@/hooks/useReducedTransparency';
import { useDarkMode } from '@/hooks/useDarkMode';
import { useLanguage } from '@/hooks/useLanguage';
import { NAV_LINKS } from '@/constants/nav';
import { NavLogo, NavLink, NavLinkMobile } from '@/components/ui/typography';
import { cn } from '@/utils';
import { animation } from '@/utils/animationConfig';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { motionAllowed } = useReducedMotion();
  const { transparencyAllowed } = useReducedTransparency();
  const { isDark, toggle: toggleDark } = useDarkMode();
  const { lang, setLang, t } = useLanguage();

  const toggleLang = () => setLang(lang === 'en' ? 'nb' : 'en');

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 w-full border-b',
          transparencyAllowed ? 'backdrop-blur-md border-border/60' : 'bg-background border-border'
        )}
        style={transparencyAllowed ? { backgroundColor: 'var(--nav-bg)' } : undefined}
      >
        {/* 3-column grid: logo | nav (centered) | controls */}
        <div className="flex items-center justify-between h-16 px-4 md:grid md:grid-cols-[1fr_auto_1fr] md:px-8">
          <a href="/" className="leading-none" aria-label="Ola – go to top">
            <NavLogo className="text-brand">Ola.</NavLogo>
          </a>

          <nav className="hidden md:flex" aria-label="Primary navigation">
            <NavigationMenu>
              <NavigationMenuList>
                {NAV_LINKS.map(({ key, href }) => (
                  <NavigationMenuItem key={href}>
                    <NavigationMenuLink
                      href={href}
                      className="group/navlink px-3 py-2 transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <NavLink className="transition-colors group-hover/navlink:text-foreground">
                        {t(key)}
                      </NavLink>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          <div className="flex items-center justify-end gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleLang}
              aria-label={lang === 'en' ? 'Switch to Norwegian' : 'Switch to English'}
            >
              <span className="text-xs font-semibold">{lang === 'en' ? 'NO' : 'EN'}</span>
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={toggleDark}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun /> : <Moon />}
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="md:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </header>

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
                      onClick={() => setMenuOpen(false)}
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
    </>
  );
};
