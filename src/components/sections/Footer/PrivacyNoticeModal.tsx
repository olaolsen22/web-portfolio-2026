import { AnimatePresence, motion } from 'motion/react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { animation } from '@/utils/animationConfig';
import { Button } from '@/components/ui/button';
import { Label, P } from '@/components/ui/typography';
import { DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';

interface PrivacyNoticeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const PrivacyNoticeModal = ({ open, onOpenChange }: PrivacyNoticeModalProps) => {
  const { t } = useLanguage();
  const { motionAllowed } = useReducedMotion();

  const sections = [
    {
      title: t('privacyNotice.whatSiteCollectsTitle'),
      body: t('privacyNotice.whatSiteCollectsBody'),
    },
    {
      title: t('privacyNotice.hostingProviderTitle'),
      body: t('privacyNotice.hostingProviderBody'),
    },
    { title: t('privacyNotice.githubPagesTitle'), body: t('privacyNotice.githubPagesBody') },
    { title: t('privacyNotice.netlifyTitle'), body: t('privacyNotice.netlifyBody') },
    { title: t('privacyNotice.gdprTitle'), body: t('privacyNotice.gdprBody') },
    { title: t('privacyNotice.questionsTitle'), body: t('privacyNotice.questionsBody') },
  ];

  const modalContent = (
    <>
      <DialogHeader className="relative pr-10">
        <DialogTitle className="text-[1.05rem] font-extrabold tracking-[-0.02em]">
          {t('privacyNotice.title')}
        </DialogTitle>
        <DialogPrimitive.Close
          aria-label={t('privacyNotice.close')}
          className="absolute right-0 top-0 flex min-h-[44px] min-w-[44px] items-center justify-center rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <X className="h-4 w-4" />
        </DialogPrimitive.Close>
      </DialogHeader>

      <div className="space-y-4 py-2">
        {sections.map(({ title, body }) => (
          <div key={title}>
            <h3 className="mb-1.5">
              <Label className="text-[0.8rem] font-extrabold tracking-[0.06em]">{title}</Label>
            </h3>
            <P>{body}</P>
          </div>
        ))}
      </div>

      <DialogFooter>
        <DialogPrimitive.Close asChild>
          <Button variant="default" size="sm">
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
                  className="fixed inset-0 z-50 bg-background/60 backdrop-blur-md"
                  initial={motionAllowed ? { opacity: 0 } : false}
                  animate={{ opacity: 1 }}
                  exit={motionAllowed ? { opacity: 0 } : undefined}
                  transition={{ duration: animation.duration.enter, ease: animation.ease.out }}
                />
              </DialogPrimitive.Overlay>

              <DialogPrimitive.Content asChild forceMount>
                {/* Wrapper owns centering; motion.div owns animation — avoids transform conflict */}
                <div className="fixed left-1/2 top-1/2 z-50 w-[calc(100vw-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 focus:outline-none">
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
