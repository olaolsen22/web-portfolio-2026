import { createContext, useCallback, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { translations } from '@/content';
import type { TranslationKey } from '@/content';

type Lang = 'en' | 'nb';

const STORAGE_KEY = 'lang';

const getInitialLang = (): Lang => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'en' || stored === 'nb') return stored;
  return navigator.language.startsWith('nb') ? 'nb' : 'en';
};

interface LanguageContextValue {
  lang: Lang;
  setLang: (next: Lang) => void;
  t: (key: TranslationKey) => string;
}

export const LanguageContext = createContext<LanguageContextValue>({
  lang: 'en',
  setLang: () => {},
  t: (key) => key,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

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

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>
  );
};
