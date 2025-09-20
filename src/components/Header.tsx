'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from '../hooks/useTranslation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const navItems = [
    { href: '/', label: t('nav.home') },
    { href: '/rooms', label: t('nav.rooms') },
    { href: '/dining', label: t('nav.dining') },
    { href: '/gallery', label: t('nav.gallery') },
  ];

  return (
    <header className="bg-white shadow-lg fixed w-full z-50 top-0">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>{t('header.phone')}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>{t('header.address')}</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <span>{t('header.available')}</span>
            </div>
            <LanguageSwitcher variant="light" />
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3"
              >
                <img 
                  src="/southern lodge.png" 
                  alt="Southern Lodge Logo"
                  className="h-14 w-auto"
                />
                <span className="text-2xl font-bold text-blue-900">
                  Southern Lodge
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.div
                  key={item.href}
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-blue-900 font-medium transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/book"
                  className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition-colors duration-200"
                >
                  {t('nav.bookNow')}
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-gray-700 hover:text-blue-900 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/book"
                className="block mt-4 bg-blue-900 text-white text-center py-2 rounded-full hover:bg-blue-800 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.bookNow')}
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;