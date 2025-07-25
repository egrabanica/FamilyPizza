import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Globe } from 'lucide-react';
import { Language } from '../types/menu';

interface LanguageToggleProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
  isDarkMode?: boolean;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({
  currentLanguage,
  onLanguageChange,
  isDarkMode = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧', shortCode: 'EN' },
    { code: 'al', label: 'Shqip', flag: '🇦🇱', shortCode: 'AL' }
  ];

  const currentLang = languages.find(lang => lang.code === currentLanguage);

  const handleLanguageSelect = (langCode: Language) => {
    onLanguageChange(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-xl px-4 py-2.5 text-white hover:bg-white/20 transition-all duration-300 border border-white/20 shadow-lg"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Globe size={16} className="text-white/80" />
        <span className="text-sm font-semibold">{currentLang?.flag}</span>
        <span className="text-sm font-medium">{currentLang?.shortCode}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={14} className="text-white/70" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-10"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={`absolute top-full right-0 mt-2 backdrop-blur-md rounded-xl shadow-xl border overflow-hidden z-20 min-w-[140px] ${
                isDarkMode 
                  ? 'bg-black/90 border-white/20' 
                  : 'bg-white/95 border-white/30'
              }`}
            >
              {languages.map((lang) => (
                <motion.button
                  key={lang.code}
                  onClick={() => handleLanguageSelect(lang.code as Language)}
                  className={`w-full px-4 py-3 text-left hover:bg-brand-red/10 transition-all duration-200 flex items-center space-x-3 ${
                    currentLanguage === lang.code 
                      ? 'bg-brand-red/5 text-brand-red' 
                      : isDarkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}
                  whileHover={{ x: 4 }}
                >
                  <span className="text-base">{lang.flag}</span>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{lang.shortCode}</span>
                    <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{lang.label}</span>
                  </div>
                  {currentLanguage === lang.code && (
                    <motion.div
                      layoutId="currentLangIndicator"
                      className="w-2 h-2 bg-brand-red rounded-full ml-auto"
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageToggle;