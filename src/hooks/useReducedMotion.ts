import { useMotionContext } from '../context/MotionContext';

export const useReducedMotion = () => {
  const { motionAllowed, hasOSMotionReduction, userMotionPref, setMotionPref } = useMotionContext();
  return {
    motionAllowed,
    hasOSReduction: hasOSMotionReduction,
    hasUserOverride: userMotionPref !== 'system',
    setUserPref: setMotionPref,
  };
};
