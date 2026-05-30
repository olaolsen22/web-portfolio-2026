import { useLanguage } from '../../hooks/useLanguage';

export const SkipLink = () => {
  const { t } = useLanguage();

  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded"
    >
      {t('skipToContent')}
    </a>
  );
};
