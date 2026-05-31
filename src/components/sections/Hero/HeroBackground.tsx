import { useMemo } from 'react';
import { cn } from '@/utils';
import styles from './HeroBackground.module.css';

export const HeroBackground = () => {
  const noPerf = useMemo(() => {
    if (typeof navigator === 'undefined') return false;
    const lowCores = navigator.hardwareConcurrency < 4;
    const nav = navigator as Navigator & { deviceMemory?: number };
    const lowRam = nav.deviceMemory !== undefined && nav.deviceMemory < 4;
    return lowCores || lowRam;
  }, []);

  return (
    <>
      <div aria-hidden="true" className={cn(styles.bg, noPerf && styles.noPerf)}>
        <div className={styles.grid} />
        <div className={cn(styles.shape, styles.s1)} />
        <div className={cn(styles.shape, styles.s2)} />
        <div className={cn(styles.shape, styles.s3)} />
        <div className={cn(styles.dot, styles.d1)} />
        <div className={cn(styles.dot, styles.d2)} />
        <div className={cn(styles.dot, styles.d3)} />
      </div>
      {!noPerf && <div className={styles.grain} aria-hidden="true" />}
    </>
  );
};
