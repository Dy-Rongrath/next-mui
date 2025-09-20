'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import i18n from 'i18next';
import { I18nextProvider, initReactI18next, useTranslation } from 'react-i18next';
import en from '../locales/en.json';
import km from '../locales/km.json';

// Initialize i18next
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    km: { translation: km },
  },
  lng: 'en', // default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

interface LanguageContextType {
  t: (key: string) => string;
  changeLanguage: (lng: 'en' | 'km') => void;
  language: string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { t, i18n: i18nInstance } = useTranslation();

  const changeLanguage = (lng: 'en' | 'km') => {
    i18nInstance.changeLanguage(lng);
  };
  
  const value = {
    t,
    changeLanguage,
    language: i18nInstance.language,
  };

  return (
    <I18nextProvider i18n={i18n}>
      <LanguageContext.Provider value={value}>
        {children}
      </LanguageContext.Provider>
    </I18nextProvider>
  );
}
