import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { FadeIn } from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/button';
import { Small } from '@/components/ui/typography';
import { PrivacyNoticeModal } from './PrivacyNoticeModal';

export const Footer = () => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <footer className="w-full border-t border-rule bg-background py-10 sm:py-6">
      <div className="mx-auto w-full max-w-[1920px] px-4 sm:px-6 md:px-12 lg:px-20">
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 gap-3 justify-items-center text-center sm:grid-cols-2 sm:justify-items-stretch sm:items-center sm:text-left lg:grid-cols-3">
            <Small>
              {t('footer.credit')} <em className="not-italic font-bold text-brand">Ola</em>
              {' · '}
              {new Date().getFullYear()}
            </Small>

            <Small className="text-center text-xs tracking-[0.02em] sm:hidden lg:block">
              {t('footer.crafted')}
            </Small>

            <div className="flex justify-center sm:justify-end">
              <Button
                variant="link"
                className="p-0 h-auto text-[0.8rem] min-h-0"
                onClick={() => setOpen(true)}
              >
                {t('footer.privacy')}
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>

      <PrivacyNoticeModal open={open} onOpenChange={setOpen} />
    </footer>
  );
};
