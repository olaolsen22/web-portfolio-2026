import { useEffect, useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { useReducedTransparency } from '../../hooks/useReducedTransparency';

export const AccessibilityPrompts = () => {
  const { t } = useLanguage();
  const {
    hasOSReduction: motionOS,
    hasUserOverride: motionOverride,
    setUserPref: setMotionPref,
  } = useReducedMotion();
  const {
    hasOSReduction: transparencyOS,
    hasUserOverride: transparencyOverride,
    setUserPref: setTransparencyPref,
  } = useReducedTransparency();

  const [showMotion, setShowMotion] = useState(false);
  const [showTransparency, setShowTransparency] = useState(false);

  useEffect(() => {
    if (motionOS && !motionOverride) {
      const t = setTimeout(() => setShowMotion(true), 1500);
      return () => clearTimeout(t);
    }
    setShowMotion(false);
  }, [motionOS, motionOverride]);

  useEffect(() => {
    if (transparencyOS && !transparencyOverride) {
      const t = setTimeout(() => setShowTransparency(true), 1500);
      return () => clearTimeout(t);
    }
    setShowTransparency(false);
  }, [transparencyOS, transparencyOverride]);

  if (!showMotion && !showTransparency) return null;

  return (
    <section
      aria-label={t('accessibility.promptLabel')}
      className="p-4 bg-card border-t border-border shadow-lg flex items-center justify-between gap-4"
    >
      <p className="text-sm">
        {showMotion ? t('accessibility.enableAnimations') : t('accessibility.enableTransparency')}
      </p>
      <div className="flex gap-2 shrink-0">
        <button
          onClick={() => {
            if (showMotion) {
              setMotionPref('enabled');
              setShowMotion(false);
            } else {
              setTransparencyPref('enabled');
              setShowTransparency(false);
            }
          }}
          className="px-3 py-1.5 text-sm bg-primary text-primary-foreground rounded can-hover:hover:opacity-90 transition-opacity"
        >
          {t('accessibility.enable')}
        </button>
        <button
          onClick={() => {
            if (showMotion) {
              setShowMotion(false);
            } else {
              setShowTransparency(false);
            }
          }}
          className="px-3 py-1.5 text-sm border border-border rounded can-hover:hover:bg-muted transition-colors"
        >
          {t('accessibility.keepOff')}
        </button>
      </div>
    </section>
  );
};
