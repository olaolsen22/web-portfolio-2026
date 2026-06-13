import { AnimatePresence, motion } from 'motion/react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useReducedTransparency } from '@/hooks/useReducedTransparency';
import { cn } from '@/utils';
import { animation } from '@/utils/animationConfig';
import { Button } from '@/components/ui/button';
import { Label, P } from '@/components/ui/typography';
import { DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';

import { EMAIL_ADDRESS, LINKEDIN_URL } from '@/constants/links';

const NETLIFY_PRIVACY_URL = 'https://www.netlify.com/privacy/';
const DATATILSYNET_URL = 'https://www.datatilsynet.no/';

const linkClass = 'underline underline-offset-2 can-hover:hover:opacity-80';

interface PrivacyNoticeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const PrivacyNoticeModal = ({ open, onOpenChange }: PrivacyNoticeModalProps) => {
  const { t } = useLanguage();
  const { motionAllowed } = useReducedMotion();
  const { transparencyAllowed } = useReducedTransparency();

  const sections: Array<{ title: string; body: React.ReactNode }> = [
    {
      title: t('privacyNotice.whatSiteCollectsTitle'),
      body: t('privacyNotice.whatSiteCollectsBody'),
    },
    {
      title: t('privacyNotice.netlifyTitle'),
      body: (
        <>
          {t('privacyNotice.netlifyBody')} {t('privacyNotice.netlifyBodyLinkPre')}
          <a
            href={NETLIFY_PRIVACY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            {t('privacyNotice.netlifyBodyLinkText')}
          </a>
          {t('privacyNotice.netlifyBodyLinkPost')}
        </>
      ),
    },
    {
      title: t('privacyNotice.gdprTitle'),
      body: (
        <>
          {t('privacyNotice.gdprBody')} {t('privacyNotice.gdprBodyLinkPre')}
          <a
            href={DATATILSYNET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            datatilsynet.no
          </a>
          {t('privacyNotice.gdprBodyLinkPost')}
        </>
      ),
    },
    {
      title: t('privacyNotice.questionsTitle'),
      body: (
        <>
          {t('privacyNotice.questionsBodyPre')}
          <a href={`mailto:${EMAIL_ADDRESS}`} className={linkClass}>
            {t('privacyNotice.questionsEmailLinkText')}
          </a>
          {t('privacyNotice.questionsBodyOr')}
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
            LinkedIn
          </a>
          {t('privacyNotice.questionsBodyPost')}
        </>
      ),
    },
  ];

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

              <DialogPrimitive.Content asChild forceMount>
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
