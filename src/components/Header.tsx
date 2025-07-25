import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Sun, Moon } from 'lucide-react';
import { Language } from '../types/menu';
import LanguageToggle from './LanguageToggle';
import logo from '../assets/logo.png';

interface HeaderProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
  isDarkMode: boolean;
  onThemeToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ language, onLanguageChange, isDarkMode, onThemeToggle }) => {
  const titles = {
    en: {
      name: 'Family',
      subtitle: 'CAFFE BAR & PIZZERIA',
      phone: '+386 49 49 54 34',
      address: 'St.18 April, Vushtrri, 42000'
    },
    al: {
      name: 'Family',
      subtitle: 'CAFFE BAR & PIZZERIA',
      phone: '+386 49 49 54 34',
      address: 'Rr.18 Prilli, Vushtrri, 42000'
    }
  };

  return (
    <div className={`relative text-white overflow-hidden transition-all duration-500 ${
      isDarkMode 
        ? 'bg-restaurant-header' 
        : 'bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800'
    }`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-red/20 to-transparent"></div>
        <div className="brand-pattern opacity-30"></div>
      </div>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-6 pt-12 pb-8 relative z-10"
      >
        {/* Language Toggle and Theme Toggle Positioned Top Right */}
        <div className="absolute top-4 right-4 flex items-center space-x-3">
          {/* Theme Toggle */}
          <motion.button
            onClick={onThemeToggle}
            className="flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl text-white hover:bg-white/20 transition-all duration-300 border border-white/20 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              initial={false}
              animate={{ rotate: isDarkMode ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </motion.div>
          </motion.button>
          
          {/* Language Toggle */}
          <LanguageToggle
            currentLanguage={language}
            onLanguageChange={onLanguageChange}
            isDarkMode={isDarkMode}
          />
        </div>
        
        <div className="max-w-lg mx-auto">
          {/* Restaurant Info */}
          <div className="text-center">
            {/* Logo */}
            <motion.div 
              className="flex flex-col items-center justify-center z-20 pt-8 pb-4 md:pt-12 md:pb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src={logo} 
                alt="Family Caffe Bar & Pizzeria Logo" 
                className="mx-auto w-full max-w-[140px] sm:max-w-[180px] md:max-w-[220px] h-auto object-contain drop-shadow-2xl"
                style={{minHeight: '48px'}}
              />
            </motion.div>
            
            {/* Contact Info */}
            <motion.div 
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className={`flex items-center justify-center space-x-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-300'}`}>
                <Phone size={16} className="text-brand-red" />
                <span className="text-sm font-medium">{titles[language].phone}</span>
              </div>
              <div className={`flex items-center justify-center space-x-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-300'}`}>
                <MapPin size={16} className="text-brand-red" />
                <span className="text-sm font-medium">{titles[language].address}</span>
              </div>
            </motion.div>

            {/* Delivery Badge */}
            <motion.div 
              className="mt-6 inline-flex items-center bg-brand-red px-4 py-2 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-white font-semibold text-sm">
                {language === 'en' ? 'FREE DELIVERY' : 'DËRGIM FALAS'}
              </span>
            </motion.div>
          </div>
        </div>
      </motion.header>
    </div>
  );
};

export default Header;
