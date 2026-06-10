import { createContext, useContext, useEffect, useState } from 'react';

type UserPreference = 'system' | 'enabled' | 'disabled';

interface MotionContextValue {
  motionAllowed: boolean;
  transparencyAllowed: boolean;
  hasOSMotionReduction: boolean;
  hasOSTransparencyReduction: boolean;
  userMotionPref: UserPreference;
  userTransparencyPref: UserPreference;
  setMotionPref: (pref: UserPreference) => void;
  setTransparencyPref: (pref: UserPreference) => void;
}

const MotionContext = createContext<MotionContextValue | null>(null);

export const useMotionContext = (): MotionContextValue => {
  const ctx = useContext(MotionContext);
  if (!ctx) throw new Error('useMotionContext must be used inside MotionProvider');
  return ctx;
};

export const MotionProvider = ({ children }: { children: React.ReactNode }) => {
  const [systemReducedMotion, setSystemReducedMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  const [systemReducedTransparency, setSystemReducedTransparency] = useState(
    () => window.matchMedia('(prefers-reduced-transparency: reduce)').matches
  );
  const [userMotionPref, setUserMotionPref] = useState<UserPreference>('system');
  const [userTransparencyPref, setUserTransparencyPref] = useState<UserPreference>('system');

  useEffect(() => {
    const mqlMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onMotionChange = (e: MediaQueryListEvent) => setSystemReducedMotion(e.matches);
    mqlMotion.addEventListener('change', onMotionChange);

    const mqlTransparency = window.matchMedia('(prefers-reduced-transparency: reduce)');
    const onTransparencyChange = (e: MediaQueryListEvent) =>
      setSystemReducedTransparency(e.matches);
    mqlTransparency.addEventListener('change', onTransparencyChange);

    return () => {
      mqlMotion.removeEventListener('change', onMotionChange);
      mqlTransparency.removeEventListener('change', onTransparencyChange);
    };
  }, []);

  const motionAllowed =
    userMotionPref === 'enabled'
      ? true
      : userMotionPref === 'disabled'
        ? false
        : !systemReducedMotion;

  const transparencyAllowed =
    userTransparencyPref === 'enabled'
      ? true
      : userTransparencyPref === 'disabled'
        ? false
        : !systemReducedTransparency;

  useEffect(() => {
    if (!motionAllowed) {
      document.documentElement.setAttribute('data-motion-reduced', '');
    } else {
      document.documentElement.removeAttribute('data-motion-reduced');
    }
  }, [motionAllowed]);

  useEffect(() => {
    if (!transparencyAllowed) {
      document.documentElement.setAttribute('data-transparency-reduced', '');
    } else {
      document.documentElement.removeAttribute('data-transparency-reduced');
    }
  }, [transparencyAllowed]);

  return (
    <MotionContext.Provider
      value={{
        motionAllowed,
        transparencyAllowed,
        hasOSMotionReduction: systemReducedMotion,
        hasOSTransparencyReduction: systemReducedTransparency,
        userMotionPref,
        userTransparencyPref,
        setMotionPref: setUserMotionPref,
        setTransparencyPref: setUserTransparencyPref,
      }}
    >
      {children}
    </MotionContext.Provider>
  );
};
