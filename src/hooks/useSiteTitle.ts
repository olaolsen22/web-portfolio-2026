import { useEffect } from 'react';
import { useLanguage } from './useLanguage';

export const useSiteTitle = () => {
  const { t } = useLanguage();
  useEffect(() => {
    document.title = t('site.title');
  }, [t]);
};
