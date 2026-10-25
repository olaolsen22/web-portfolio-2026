import { AnimatePresence, motion } from 'motion/react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useAnalyticsConsent } from '@/hooks/useAnalyticsConsent';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useReducedTransparency } from '@/hooks/useReducedTransparency';
import { cn } from '@/utils';
import { animation } from '@/utils/animationConfig';
import { Button } from '@/components/ui/button';
import { Label, P } from '@/components/ui/typography';
import { DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { privacyNoticeSections } from '@/content/privacyNoticeSections';
import type { TranslationKey } from '@/content';

const linkClass = 'underline underline-offset-2 can-hover:hover:opacity-80';

interface PrivacyNoticeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// Lets visitors give or withdraw consent for detailed statistics after closing the prompt
const ConsentControl = () => {
  const { t } = useLanguage();
  const { consent, setConsent, available, browserOptOut } = useAnalyticsConsent();

  if (browserOptOut) return <P className="mt-2">{t('privacyNotice.consentBrowserSignal')}</P>;
  if (!available) return null;

  const granted = consent === 'granted';
  return (
    <div className="mt-2 flex flex-wrap items-center gap-3">
      <P aria-live="polite" className="font-medium text-foreground">
        {t(granted ? 'privacyNotice.consentStatusOn' : 'privacyNotice.consentStatusOff')}
      </P>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setConsent(granted ? 'denied' : 'granted')}
      >
        {t(granted ? 'privacyNotice.consentWithdraw' : 'privacyNotice.consentAllow')}
      </Button>
    </div>
  );
};

export const PrivacyNoticeModal = ({ open, onOpenChange }: PrivacyNoticeModalProps) => {
  const { t } = useLanguage();
  const { motionAllowed } = useReducedMotion();
  const { transparencyAllowed } = useReducedTransparency();

  const modalContent = (
    <>
      <DialogHeader className="relative flex flex-row justify-between items-center">
        <DialogTitle className="text-[1.05rem] font-extrabold tracking-[-0.02em] text-left">
          {t('privacyNotice.title')}
        </DialogTitle>
        <DialogPrimitive.Close
          aria-label={t('privacyNotice.close')}
          className="p-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <X className="h-4 w-4" />
        </DialogPrimitive.Close>
      </DialogHeader>

      <div className="space-y-4 py-2">
        {privacyNoticeSections.map((section) => (
          <div key={section.titleKey}>
            <h3 className="mb-1.5">
              <Label className="text-[0.8rem] font-extrabold tracking-[0.06em]">
                {t(section.titleKey)}
              </Label>
            </h3>
            <P>
              {section.bodyParts.map((part, i) =>
                'key' in part ? (
                  <span key={i}>{t(part.key)} </span>
                ) : (
                  <a
                    key={i}
                    href={part.link.href}
                    className={linkClass}
                    {...(part.link.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                  >
                    {part.link.isTranslationKey
                      ? t(part.link.text as TranslationKey)
                      : part.link.text}
                  </a>
                )
              )}
            </P>
            {section.consentControl && <ConsentControl />}
          </div>
        ))}
      </div>

      <DialogFooter>
        <DialogPrimitive.Close asChild>
          <Button variant="default" size="sm" className="mt-3">
            {t('privacyNotice.close')}
          </Button>
        </DialogPrimitive.Close>
      </DialogFooter>
    </>
  );

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal forceMount>
        <AnimatePresence>
          {open && (
            <>
              <DialogPrimitive.Overlay asChild forceMount>
                <motion.div
                  className={cn(
                    'fixed inset-0 z-50',
                    transparencyAllowed ? 'bg-background/60 backdrop-blur-md' : 'bg-background'
                  )}
                  initial={motionAllowed ? { opacity: 0 } : false}
                  animate={{ opacity: 1 }}
                  exit={motionAllowed ? { opacity: 0 } : undefined}
                  transition={{ duration: animation.duration.enter, ease: animation.ease.out }}
                />
              </DialogPrimitive.Overlay>

              <DialogPrimitive.Content asChild forceMount aria-describedby={undefined}>
                {/* Wrapper owns centering; motion.div owns animation — avoids transform conflict */}
                <div className="fixed left-1/2 top-1/2 z-50 w-[calc(100vw-2rem)] sm:max-w-xl -translate-x-1/2 -translate-y-1/2 focus:outline-none">
                  <motion.div
                    className="w-full max-h-[85dvh] overflow-y-auto rounded-lg border bg-background p-6 shadow-lg"
                    initial={motionAllowed ? { opacity: 0, scale: 0.96, y: -8 } : false}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={motionAllowed ? { opacity: 0, scale: 0.96, y: -8 } : undefined}
                    transition={{ duration: animation.duration.enter, ease: animation.ease.out }}
                  >
                    {modalContent}
                  </motion.div>
                </div>
              </DialogPrimitive.Content>
            </>
          )}
        </AnimatePresence>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};
