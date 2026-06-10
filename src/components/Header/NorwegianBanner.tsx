import { motion } from 'motion/react';
import { X, TriangleAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Muted } from '@/components/ui/typography';
import { cn } from '@/utils';
import { animation } from '@/utils/animationConfig';
import type { TranslationKey } from '@/content';

interface NorwegianBannerProps {
  onClose: () => void;
  t: (key: TranslationKey) => string;
  motionAllowed: boolean;
  transparencyAllowed: boolean;
}

export const NorwegianBanner = ({
  onClose,
  t,
  motionAllowed,
  transparencyAllowed,
}: NorwegianBannerProps) => (
  <motion.div
    key="nb-banner"
    initial={{ opacity: 0, y: motionAllowed ? -4 : 0 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: motionAllowed ? -4 : 0 }}
    transition={{
      duration: motionAllowed ? animation.duration.enter : 0,
      ease: animation.ease.out,
    }}
    role="region"
    aria-label="Norsk språknotat"
    className={cn(
      'fixed top-[5.3rem] left-0 right-0 z-[49] w-full border-b',
      transparencyAllowed
        ? 'backdrop-blur-xl backdrop-saturate-[1.6] border-border-mid'
        : 'bg-background border-border'
    )}
    style={transparencyAllowed ? { backgroundColor: 'var(--nav-bg)' } : undefined}
  >
    <div className="grid grid-cols-[1fr_auto_1fr] items-center px-4 py-2 md:px-8">
      <span />
      <div className="flex items-center gap-2">
        <TriangleAlert size={14} aria-hidden="true" className="shrink-0 text-muted-foreground" />
        <Muted>{t('banner.langNote')}</Muted>
      </div>
      <div className="flex justify-end">
        <Button
          variant="ghost"
          size="icon"
          aria-label={t('banner.dismiss')}
          onClick={onClose}
          className="h-7 w-7 shrink-0 border-0 hover:border-0"
        >
          <X size={14} aria-hidden="true" />
        </Button>
      </div>
    </div>
  </motion.div>
);
