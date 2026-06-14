import { useMemo } from 'react';

export const useIsLowEndDevice = () =>
  useMemo(() => {
    if (typeof navigator === 'undefined') return false;
    const lowCores = navigator.hardwareConcurrency < 4;
    const nav = navigator as Navigator & { deviceMemory?: number };
    const lowRam = nav.deviceMemory !== undefined && nav.deviceMemory < 4;
    return lowCores || lowRam;
  }, []);
