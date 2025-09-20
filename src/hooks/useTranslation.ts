'use client';

import { useState, useEffect, useCallback } from 'react';
import { translations, Language } from '../translations';

type TranslationPath = string;

interface UseTranslationReturn {
  t: (key: TranslationPath) => string;
  currentLanguage: Language;
  changeLanguage: (language: Language) => void;
  availableLanguages: Language[];
}

const getNestedValue = (obj: any, path: string): string => {
  return path.split('.').reduce((current, key) => {
    return current && current[key] !== undefined ? current[key] : path;
  }, obj);
};

export const useTranslation = (): UseTranslationReturn => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');

  // Initialize language from localStorage or browser
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language') as Language;
    if (savedLanguage && translations[savedLanguage]) {
      setCurrentLanguage(savedLanguage);
    } else {
      // Auto-detect browser language
      const browserLang = navigator.language.split('-')[0] as Language;
      if (translations[browserLang]) {
        setCurrentLanguage(browserLang);
      }
    }
  }, []);

  // Translation function
  const t = useCallback((key: TranslationPath): string => {
    const translation = getNestedValue(translations[currentLanguage], key);
    
    // Fallback to English if translation not found
    if (translation === key && currentLanguage !== 'en') {
      return getNestedValue(translations.en, key);
    }
    
    return translation || key;
  }, [currentLanguage]);

  // Change language function
  const changeLanguage = useCallback((language: Language) => {
    if (translations[language]) {
      setCurrentLanguage(language);
      localStorage.setItem('preferred-language', language);
      
      // Trigger a custom event for other components to listen to
      window.dispatchEvent(new CustomEvent('languageChanged', { 
        detail: { language } 
      }));
    }
  }, []);

  const availableLanguages = Object.keys(translations) as Language[];

  return {
    t,
    currentLanguage,
    changeLanguage,
    availableLanguages
  };
};