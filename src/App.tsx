import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language } from './types/menu';
import { menuData } from './data/menuData';
import Header from './components/Header';
import CategoryList from './components/CategoryList';
import MenuItemCard from './components/MenuItemCard';

function App() {
  const menuRef = useRef<HTMLDivElement>(null);
  const [language, setLanguage] = useState<Language>('en');
  const [activeCategory, setActiveCategory] = useState<string>(menuData.categories[0].id);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Split categories into drinks and food
  const drinkCategoryIds = ['pije-freskuese', 'pije-te-ngrohta'];
  const drinkCategories = menuData.categories.filter(cat => drinkCategoryIds.includes(cat.id));
  const foodCategories = menuData.categories.filter(cat => !drinkCategoryIds.includes(cat.id));

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    // Scroll to the menu section instead of the top
    setTimeout(() => {
      if (menuRef.current) {
        menuRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 0);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const currentCategory = menuData.categories.find(cat => cat.id === activeCategory);

  return (
    <div className={`min-h-screen relative transition-all duration-500 ${
      isDarkMode 
        ? 'bg-restaurant-dark text-white' 
        : 'bg-gradient-to-br from-gray-100 via-white to-gray-50 text-gray-900'
    }`}>
      {/* Header */}
      <Header 
        language={language} 
        onLanguageChange={handleLanguageChange}
        isDarkMode={isDarkMode}
        onThemeToggle={toggleTheme}
      />
      {/* Category Navigation - Drinks & Food (side by side) */}
      <div className="container mx-auto px-4 pt-6">
        <div className="flex flex-col md:flex-row gap-8 items-stretch min-h-[400px]">
          <div className="flex-1 min-w-0 h-full flex flex-col">
            <h2 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{language === 'en' ? 'Drinks' : 'Pije'}</h2>
            <CategoryList
              categories={drinkCategories}
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
              language={language}
              isDarkMode={isDarkMode}
            />
          </div>
          <div className="flex-1 min-w-0 h-full flex flex-col">
            <h2 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{language === 'en' ? 'Food' : 'Ushqim'}</h2>
            <CategoryList
              categories={foodCategories}
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
              language={language}
              isDarkMode={isDarkMode}
            />
          </div>
        </div>
      </div>
      {/* Menu Items */}
      <div ref={menuRef} className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            key={`${activeCategory}-header`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={`text-center mb-12 backdrop-blur-sm rounded-3xl py-8 px-6 shadow-lg border transition-all duration-300 ${
              isDarkMode
                ? 'bg-black/40 border-white/10 text-white'
                : 'bg-white/60 border-white/20 text-gray-900'
            }`}
          >
            <h1 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {currentCategory?.name[language]}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-red to-red-600 mx-auto mb-4 rounded-full shadow-sm"></div>
            <p className={`text-lg font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}> 
              {language === 'en' 
                ? `Discover our ${currentCategory?.items.length} delicious options` 
                : `Zbuloni ${currentCategory?.items.length} opsionet tona të shijshme`
              }
            </p>
          </motion.div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {currentCategory?.items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: index * 0.1, 
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                >
                  <MenuItemCard
                    item={item}
                    language={language}
                    isDarkMode={isDarkMode}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default App;
