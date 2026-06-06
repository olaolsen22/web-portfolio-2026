import { useMemo } from 'react';
import { cn } from '@/utils';
import styles from './ConnectBackground.module.css';

export const ConnectBackground = () => {
  const noPerf = useMemo(() => {
    if (typeof navigator === 'undefined') return false;
    const lowCores = navigator.hardwareConcurrency < 4;
    const nav = navigator as Navigator & { deviceMemory?: number };
    const lowRam = nav.deviceMemory !== undefined && nav.deviceMemory < 4;
    return lowCores || lowRam;
  }, []);

  return (
    <div aria-hidden="true" className={cn(styles.bg, noPerf && styles.noPerf)}>
      <div className={styles.blob} />
    </div>
  );
};
