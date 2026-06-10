import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useReducedTransparency } from '@/hooks/useReducedTransparency';
import { useDarkMode } from '@/hooks/useDarkMode';
import { useLanguage } from '@/hooks/useLanguage';
import { NavLogo } from '@/components/ui/typography';
import { cn } from '@/utils';
import { NavDesktop } from './NavDesktop';
import { HeaderControls } from './HeaderControls';
import { NavMobile } from './NavMobile';
import { NorwegianBanner } from './NorwegianBanner';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bannerDismissed, setBannerDismissed] = useState(false);
  const { motionAllowed } = useReducedMotion();
  const { transparencyAllowed } = useReducedTransparency();
  const { isDark, toggle: toggleDark } = useDarkMode();
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    if (lang === 'nb') setBannerDismissed(false);
  }, [lang]);

  const toggleLang = () => setLang(lang === 'en' ? 'nb' : 'en');

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 w-full border-b',
          transparencyAllowed
            ? 'backdrop-blur-xl backdrop-saturate-[1.6] border-border-mid'
            : 'bg-background border-border'
        )}
        style={transparencyAllowed ? { backgroundColor: 'var(--nav-bg)' } : undefined}
      >
        {/* 3-column grid: logo | nav (centered) | controls */}
        <div className="flex items-center justify-between h-[5.3rem] px-4 md:grid md:grid-cols-[1fr_auto_1fr] md:px-8">
          <a href="/" className="leading-none" aria-label="Ola – go to top">
            <NavLogo className="text-brand">Ola.</NavLogo>
          </a>

          <NavDesktop t={t} />

          <HeaderControls
            lang={lang}
            toggleLang={toggleLang}
            isDark={isDark}
            toggleDark={toggleDark}
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
          />
        </div>
      </header>

      <AnimatePresence>
        {lang === 'nb' && !bannerDismissed && (
          <NorwegianBanner
            key="nb-banner"
            onClose={() => setBannerDismissed(true)}
            t={t}
            motionAllowed={motionAllowed}
            transparencyAllowed={transparencyAllowed}
          />
        )}
      </AnimatePresence>

      <NavMobile
        menuOpen={menuOpen}
        motionAllowed={motionAllowed}
        transparencyAllowed={transparencyAllowed}
        lang={lang}
        t={t}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
};
