import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { FadeIn } from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/button';
import { Small } from '@/components/ui/typography';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';

export const Footer = () => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <footer className="w-full border-t border-[var(--rule)] bg-background py-5 sm:py-6">
      <div className="container">
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 gap-3 text-center sm:grid-cols-3 sm:items-center sm:text-left">
            <Small className="text-muted-foreground">{t('footer.credit')}</Small>

            <Small className="text-center text-muted-foreground">{t('footer.crafted')}</Small>

            <div className="flex justify-center sm:justify-end">
              <Button
                variant="link"
                className="h-auto p-0 text-[0.8rem] font-medium text-muted-foreground hover:text-foreground"
                onClick={() => setOpen(true)}
              >
                {t('footer.privacy')}
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[85dvh] overflow-y-auto sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{t('privacyNotice.title')}</DialogTitle>
          </DialogHeader>

          <p className="text-sm text-muted-foreground">{t('privacyNotice.intro')}</p>

          <div className="space-y-4">
            <div>
              <p className="mb-1 text-sm font-semibold text-foreground">
                {t('privacyNotice.noDataTitle')}
              </p>
              <p className="text-sm text-muted-foreground">{t('privacyNotice.noDataBody')}</p>
            </div>

            <div>
              <p className="mb-1 text-sm font-semibold text-foreground">
                {t('privacyNotice.localStorageTitle')}
              </p>
              <p className="text-sm text-muted-foreground">{t('privacyNotice.localStorageBody')}</p>
            </div>

            <div>
              <p className="mb-1 text-sm font-semibold text-foreground">
                {t('privacyNotice.githubTitle')}
              </p>
              <p className="text-sm text-muted-foreground">{t('privacyNotice.githubBody')}</p>
            </div>

            <div>
              <p className="mb-1 text-sm font-semibold text-foreground">
                {t('privacyNotice.contactTitle')}
              </p>
              <p className="text-sm text-muted-foreground">{t('privacyNotice.contactBody')}</p>
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" size="sm">
                {t('privacyNotice.close')}
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </footer>
  );
};
