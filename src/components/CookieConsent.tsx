'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, Settings, Check } from 'lucide-react';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always required
    analytics: false,
    marketing: false,
    functional: false
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    const allPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    };
    setPreferences(allPreferences);
    localStorage.setItem('cookie-consent', JSON.stringify(allPreferences));
    localStorage.setItem('consent-date', new Date().toISOString());
    setShowBanner(false);
  };

  const acceptSelected = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    localStorage.setItem('consent-date', new Date().toISOString());
    setShowBanner(false);
    setShowPreferences(false);
  };

  const rejectAll = () => {
    const minimalPreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false
    };
    setPreferences(minimalPreferences);
    localStorage.setItem('cookie-consent', JSON.stringify(minimalPreferences));
    localStorage.setItem('consent-date', new Date().toISOString());
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-lg"
      >
        {!showPreferences ? (
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <div className="flex items-start space-x-3 flex-1">
                <Shield className="w-6 h-6 text-blue-900 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    We value your privacy
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Southern Lodge uses cookies to enhance your browsing experience, provide personalized content, 
                    and analyze our traffic. We also share information about your use of our site with our analytics partners. 
                    By clicking "Accept All", you consent to our use of cookies.
                  </p>
                  <div className="mt-2">
                    <button
                      onClick={() => setShowPreferences(true)}
                      className="text-blue-900 hover:underline text-sm font-medium"
                    >
                      Customize preferences
                    </button>
                    {' | '}
                    <a href="/privacy" className="text-blue-900 hover:underline text-sm">
                      Privacy Policy
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 lg:ml-6">
                <button
                  onClick={rejectAll}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  Reject All
                </button>
                <button
                  onClick={acceptAll}
                  className="px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="container mx-auto px-4 py-6">
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <Settings className="w-5 h-5 mr-2" />
                  Cookie Preferences
                </h3>
                <button
                  onClick={() => setShowPreferences(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">Necessary Cookies</h4>
                    <p className="text-sm text-gray-600">Required for basic site functionality</p>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm text-gray-500">Always Active</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">Analytics Cookies</h4>
                    <p className="text-sm text-gray-600">Help us understand how visitors use our website</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences({...preferences, analytics: e.target.checked})}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">Marketing Cookies</h4>
                    <p className="text-sm text-gray-600">Used to deliver personalized advertisements</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) => setPreferences({...preferences, marketing: e.target.checked})}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">Functional Cookies</h4>
                    <p className="text-sm text-gray-600">Enable enhanced functionality and personalization</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.functional}
                      onChange={(e) => setPreferences({...preferences, functional: e.target.checked})}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
              
              <div className="flex gap-3 mt-6">
                <button
                  onClick={acceptSelected}
                  className="flex-1 px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieConsent;
