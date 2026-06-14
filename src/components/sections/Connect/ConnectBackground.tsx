import { cn } from '@/utils';
import { useIsLowEndDevice } from '@/hooks/useIsLowEndDevice';
import styles from './ConnectBackground.module.css';

export const ConnectBackground = () => {
  const noPerf = useIsLowEndDevice();

  return (
    <div aria-hidden="true" className={cn(styles.bg, noPerf && styles.noPerf)}>
      <div className={styles.blob} />
      <div className={styles.mid} />
      <div className={styles.amber} />
      <div className={cn(styles.dot, styles.d1)} />
      <div className={cn(styles.dot, styles.d2)} />
      <div className={cn(styles.dot, styles.d3)} />
    </div>
  );
};
