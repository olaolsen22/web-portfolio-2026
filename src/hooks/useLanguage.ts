import { useCallback, useState } from 'react';
import { translations } from '../content';
import type { TranslationKey } from '../content';

type Lang = 'en' | 'nb';

const STORAGE_KEY = 'lang';

const getInitialLang = (): Lang => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'en' || stored === 'nb') return stored;
  return navigator.language.startsWith('nb') ? 'nb' : 'en';
};

export const useLanguage = () => {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next;
  }, []);

  const t = useCallback(
    (key: TranslationKey): string => {
      const parts = key.split('.') as string[];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let value: any = translations[lang];
      for (const part of parts) {
        value = value?.[part];
      }
      return typeof value === 'string' ? value : key;
    },
    [lang]
  );

  return { t, lang, setLang };
};
