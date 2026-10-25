import { useEffect, useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { useAnalyticsConsent } from '@/hooks/useAnalyticsConsent';
import { Button } from '@/components/ui/button';
import { P } from '@/components/ui/typography';
import { PrivacyNoticeModal } from '@/components/sections/Footer/PrivacyNoticeModal';

// Asks before loading the client-side tracker (section views, link clicks). Basic visit
// statistics are recorded server-side and don't depend on this choice.
export const AnalyticsConsentPrompt = () => {
  const { t } = useLanguage();
  const { consent, setConsent, available } = useAnalyticsConsent();
  const [visible, setVisible] = useState(false);
  const [noticeOpen, setNoticeOpen] = useState(false);
  const shouldAsk = available && consent === null;

  useEffect(() => {
    if (shouldAsk) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
    setVisible(false);
  }, [shouldAsk]);

  return (
    <>
      {visible && (
        <section
          aria-label={t('analyticsConsent.label')}
          className="flex flex-col gap-3 border-t border-border bg-card p-4 shadow-lg md:flex-row md:items-center md:justify-between md:gap-4"
        >
          <P className="text-foreground">{t('analyticsConsent.message')}</P>
          {/* Same variant for both choices — declining must be as easy as accepting */}
          <div className="flex shrink-0 flex-wrap items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => setConsent('granted')}>
              {t('analyticsConsent.allow')}
            </Button>
            <Button variant="outline" size="sm" onClick={() => setConsent('denied')}>
              {t('analyticsConsent.decline')}
            </Button>
            <Button variant="link" size="sm" onClick={() => setNoticeOpen(true)}>
              {t('analyticsConsent.privacyNotice')}
            </Button>
          </div>
        </section>
      )}
      <PrivacyNoticeModal open={noticeOpen} onOpenChange={setNoticeOpen} />
    </>
  );
};
