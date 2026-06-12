import { useEffect } from 'react';
import { useLanguageContext } from '../context/LanguageContext';

export const useSiteTitle = () => {
  const { t } = useLanguageContext();
  useEffect(() => {
    document.title = t('site.title');
  }, [t]);
};
