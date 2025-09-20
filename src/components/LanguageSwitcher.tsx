'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ChevronDown } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'zh', name: '中文', flag: '🇨🇳' }
];

interface LanguageSwitcherProps {
  variant?: 'light' | 'dark';
}

const LanguageSwitcher = ({ variant = 'dark' }: LanguageSwitcherProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLanguage: currentLangCode, changeLanguage } = useTranslation();
  
  const currentLanguage = languages.find(l => l.code === currentLangCode) || languages[0];

  const selectLanguage = (language: Language) => {
    changeLanguage(language.code as any);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-2 px-3 py-2 transition-colors duration-200 ${
          variant === 'light' 
            ? 'text-white hover:text-blue-100' 
            : 'text-gray-700 hover:text-blue-900'
        }`}
        aria-label="Select Language"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline text-sm">{currentLanguage.flag} {currentLanguage.name}</span>
        <span className="sm:hidden text-sm">{currentLanguage.flag}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-50"
          >
            <div className="py-2">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => selectLanguage(language)}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-3 ${
                    currentLangCode === language.code ? 'bg-blue-50 text-blue-900' : 'text-gray-700'
                  }`}
                >
                  <span className="text-lg">{language.flag}</span>
                  <span>{language.name}</span>
                  {currentLangCode === language.code && (
                    <span className="ml-auto text-blue-900">✓</span>
                  )}
                </button>
              ))}
            </div>
            
            <div className="border-t px-4 py-2">
              <p className="text-xs text-gray-500">
                Translation powered by AI
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay to close dropdown when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default LanguageSwitcher;
