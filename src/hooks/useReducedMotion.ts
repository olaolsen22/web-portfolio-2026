import { useEffect, useState } from 'react';

type UserPreference = 'system' | 'enabled' | 'disabled';

const STORAGE_KEY = 'motion-preference';

const getStoredPref = (): UserPreference => {
  const v = localStorage.getItem(STORAGE_KEY);
  if (v === 'enabled' || v === 'disabled') return v;
  return 'system';
};

const osPrefers = (): boolean => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const useReducedMotion = () => {
  const [userPref, setUserPrefState] = useState<UserPreference>(getStoredPref);
  const [hasOSReduction, setHasOSReduction] = useState<boolean>(osPrefers);

  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e: MediaQueryListEvent) => setHasOSReduction(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  const setUserPref = (pref: UserPreference) => {
    setUserPrefState(pref);
    if (pref === 'system') {
      localStorage.removeItem(STORAGE_KEY);
    } else {
      localStorage.setItem(STORAGE_KEY, pref);
    }
  };

  const motionAllowed =
    userPref === 'enabled' ? true : userPref === 'disabled' ? false : !hasOSReduction;

  return {
    motionAllowed,
    hasOSReduction,
    hasUserOverride: userPref !== 'system',
    setUserPref,
  };
};
