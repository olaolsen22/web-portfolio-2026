import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { motion } from 'motion/react';
import { FadeIn } from './components/animations/FadeIn';
import { ScaleIn } from './components/animations/ScaleIn';
import { StaggerChildren, itemVariants } from './components/animations/StaggerChildren';
import { useDarkMode } from './hooks/useDarkMode';
import { useLanguage } from './hooks/useLanguage';
import { useReducedMotion } from './hooks/useReducedMotion';
import { useReducedTransparency } from './hooks/useReducedTransparency';
import { cn } from './utils/cn';

const queryClient = new QueryClient();

const PortfolioApp = () => {
  const { isDark, toggle: toggleDark } = useDarkMode();
  const { lang, setLang } = useLanguage();
  const {
    motionAllowed,
    hasOSReduction: motionOS,
    hasUserOverride: motionOverride,
    setUserPref: setMotionPref,
  } = useReducedMotion();
  const {
    transparencyAllowed,
    hasOSReduction: transparencyOS,
    hasUserOverride: transparencyOverride,
    setUserPref: setTransparencyPref,
  } = useReducedTransparency();

  const [showMotionPrompt, setShowMotionPrompt] = useState(false);
  const [showTransparencyPrompt, setShowTransparencyPrompt] = useState(false);

  useEffect(() => {
    if (motionOS && !motionOverride) {
      const t = setTimeout(() => setShowMotionPrompt(true), 1500);
      return () => clearTimeout(t);
    }
    setShowMotionPrompt(false);
  }, [motionOS, motionOverride]);

  useEffect(() => {
    if (transparencyOS && !transparencyOverride) {
      const t = setTimeout(() => setShowTransparencyPrompt(true), 1500);
      return () => clearTimeout(t);
    }
    setShowTransparencyPrompt(false);
  }, [transparencyOS, transparencyOverride]);

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded"
      >
        {lang === 'nb' ? 'Hopp til hovedinnhold' : 'Skip to main content'}
      </a>

      <main id="main">
        <h1 className="text-3xl font-bold mb-8">Portfolio Setup Verification</h1>

        {/* 1. Dev badge */}
        <section
          aria-label="Dev status"
          className="mb-8 p-4 border border-border rounded-lg font-mono text-sm"
        >
          <p className="font-semibold mb-1">Dev badge</p>
          <p>
            motion: {motionAllowed ? 'on' : 'off'} (OS: {motionOS ? 'on' : 'off'}) | transparency:{' '}
            {transparencyAllowed ? 'on' : 'off'} (OS: {transparencyOS ? 'on' : 'off'})
          </p>
          <p>
            lang: {lang} | dark: {isDark ? 'on' : 'off'}
          </p>
        </section>

        {/* 2. Dark mode toggle */}
        <section aria-label="Dark mode" className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Dark mode toggle</h2>
          <button
            onClick={toggleDark}
            className="px-4 py-2 bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity"
          >
            {isDark ? 'Switch to light' : 'Switch to dark'}
          </button>
        </section>

        {/* 3. Language toggle */}
        <section aria-label="Language" className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Language toggle</h2>
          <div className="flex gap-2">
            {(['en', 'nb'] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={cn(
                  'px-4 py-2 rounded border transition-colors',
                  lang === l
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'border-border hover:bg-muted'
                )}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <p className="mt-2 text-muted-foreground text-sm">
            Check DevTools: &lt;html lang&gt; should update
          </p>
        </section>

        {/* 4. Animated card */}
        <section aria-label="Animated card" className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Animated card (FadeIn + ScaleIn)</h2>
          <FadeIn>
            <ScaleIn delay={0.1}>
              <div className="p-6 border border-border rounded-lg bg-card text-card-foreground max-w-sm">
                <p className="font-medium">Animated card</p>
                <p className="text-muted-foreground text-sm mt-1">
                  Fades + scales in on mount. Instant when motion is off.
                </p>
              </div>
            </ScaleIn>
          </FadeIn>
        </section>

        {/* 5. Glassmorphism overlay */}
        <section aria-label="Glassmorphism" className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Glassmorphism overlay</h2>
          <div className="relative h-32 rounded-lg overflow-hidden bg-gradient-to-br from-blue-400 to-purple-600">
            <div
              className={cn(
                'absolute inset-4 rounded-lg flex items-center justify-center text-white font-medium',
                transparencyAllowed
                  ? 'bg-white/20 backdrop-blur-md border border-white/30'
                  : 'bg-white/40 border border-white/50'
              )}
            >
              {transparencyAllowed ? 'backdrop-filter active' : 'solid fallback (transparency off)'}
            </div>
          </div>
        </section>

        {/* 6. Stagger demo */}
        <section aria-label="Stagger demo" className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Stagger demo</h2>
          <StaggerChildren className="flex gap-3 flex-wrap">
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="w-16 h-16 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold"
              >
                {i}
              </motion.div>
            ))}
          </StaggerChildren>
        </section>

        {/* 7. Motion/transparency prompt (forced visible for testing) */}
        <section aria-label="Motion prompt demo" className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Motion/Transparency prompt (forced)</h2>
          <div className="p-4 border border-border rounded-lg bg-muted/40 max-w-md">
            <p className="text-sm mb-3">
              Animations are disabled on your device. Enable them for this site?
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setMotionPref('enabled')}
                className="px-3 py-1.5 text-sm bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity"
              >
                Enable
              </button>
              <button
                onClick={() => setMotionPref('disabled')}
                className="px-3 py-1.5 text-sm border border-border rounded hover:bg-muted transition-colors"
              >
                Keep off
              </button>
            </div>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Current: {motionOverride ? 'user override active' : 'following OS'}
          </p>
        </section>
      </main>

      {showMotionPrompt && (
        <div
          role="banner"
          className="fixed bottom-0 inset-x-0 p-4 bg-card border-t border-border shadow-lg flex items-center justify-between gap-4"
        >
          <p className="text-sm">
            Animations are disabled on your device. Enable them for this site?
          </p>
          <div className="flex gap-2 shrink-0">
            <button
              onClick={() => {
                setMotionPref('enabled');
                setShowMotionPrompt(false);
              }}
              className="px-3 py-1.5 text-sm bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity"
            >
              Enable
            </button>
            <button
              onClick={() => {
                setMotionPref('disabled');
                setShowMotionPrompt(false);
              }}
              className="px-3 py-1.5 text-sm border border-border rounded hover:bg-muted transition-colors"
            >
              Keep off
            </button>
          </div>
        </div>
      )}

      {showTransparencyPrompt && !showMotionPrompt && (
        <div
          role="banner"
          className="fixed bottom-0 inset-x-0 p-4 bg-card border-t border-border shadow-lg flex items-center justify-between gap-4"
        >
          <p className="text-sm">
            Transparency effects are disabled on your device. Enable them for this site?
          </p>
          <div className="flex gap-2 shrink-0">
            <button
              onClick={() => {
                setTransparencyPref('enabled');
                setShowTransparencyPrompt(false);
              }}
              className="px-3 py-1.5 text-sm bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity"
            >
              Enable
            </button>
            <button
              onClick={() => {
                setTransparencyPref('disabled');
                setShowTransparencyPrompt(false);
              }}
              className="px-3 py-1.5 text-sm border border-border rounded hover:bg-muted transition-colors"
            >
              Keep off
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <PortfolioApp />
  </QueryClientProvider>
);

export default App;
