import { useMotionContext } from '../context/MotionContext';

export const useReducedTransparency = () => {
  const {
    transparencyAllowed,
    hasOSTransparencyReduction,
    userTransparencyPref,
    setTransparencyPref,
  } = useMotionContext();
  return {
    transparencyAllowed,
    hasOSReduction: hasOSTransparencyReduction,
    hasUserOverride: userTransparencyPref !== 'system',
    setUserPref: setTransparencyPref,
  };
};
