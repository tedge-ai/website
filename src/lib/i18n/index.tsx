'use client';

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import en from './en';
import fr from './fr';

export type Locale = 'fr' | 'en';

const translations: Record<Locale, Record<string, string>> = { en, fr };

interface I18nContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextValue>({
  locale: 'en',
  setLocale: () => {},
  t: (key) => key,
});

function detectLocale(): Locale {
  if (typeof window === 'undefined') return 'en';
  const saved = localStorage.getItem('tedge_locale');
  if (saved === 'en' || saved === 'fr') return saved;
  const browserLang = navigator.language.slice(0, 2);
  return browserLang === 'fr' ? 'fr' : 'en';
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    setLocaleState(detectLocale());
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem('tedge_locale', l);
  }, []);

  const t = useCallback((key: string): string => {
    return translations[locale]?.[key] || translations.en[key] || key;
  }, [locale]);

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
