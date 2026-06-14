import { cn } from '@/utils';
import { useIsLowEndDevice } from '@/hooks/useIsLowEndDevice';
import styles from './HeroBackground.module.css';

export const HeroBackground = () => {
  const noPerf = useIsLowEndDevice();

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
