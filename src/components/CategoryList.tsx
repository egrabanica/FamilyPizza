import React from 'react';
import { motion } from 'framer-motion';
import { MenuCategory, Language } from '../types/menu';

interface CategoryListProps {
  categories: MenuCategory[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
  language: Language;
  isDarkMode: boolean;
}

const CategoryList: React.FC<CategoryListProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
  language,
  isDarkMode,
}) => {
  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case 'pije-freskuese': return '🥤';
      case 'pije-te-ngrohta': return '☕';
      case 'mëngjes': return '🍳';
      case 'sallatat': return '🥗';
      case 'sanduiqet': return '🥪';
      case 'hamburgerët': return '🍔';
      case 'grillada': return '🍖';
      case 'pizza': return '🍕';
      case 'Pastas  ': return '🍝';
      default: return '🍴';
    }
  };

  const getCategoryColor = (categoryId: string, isActive: boolean) => {
    const colors = {
      'pije-freskuese': isActive ? 'from-blue-500 to-cyan-500' : 'from-blue-100 to-cyan-100',
      'pije-te-ngrohta': isActive ? 'from-amber-500 to-orange-500' : 'from-amber-100 to-orange-100',
      'mëngjes': isActive ? 'from-yellow-500 to-amber-500' : 'from-yellow-100 to-amber-100',
      'sallatat': isActive ? 'from-green-500 to-emerald-500' : 'from-green-100 to-emerald-100',
      'sanduiqet': isActive ? 'from-purple-500 to-violet-500' : 'from-purple-100 to-violet-100',
      'hamburgerët': isActive ? 'from-red-500 to-rose-500' : 'from-red-100 to-rose-100',
      'grillada': isActive ? 'from-orange-500 to-red-500' : 'from-orange-100 to-red-100',
      'pizza': isActive ? 'from-red-500 to-pink-500' : 'from-red-100 to-pink-100',
      'Pastas  ': isActive ? 'from-indigo-500 to-purple-500' : 'from-indigo-100 to-purple-100',
    };
    return colors[categoryId as keyof typeof colors] || (isActive ? 'from-gray-500 to-gray-600' : 'from-gray-100 to-gray-200');
  };

  return (
    <div className={`transition-all duration-500 ${
      isDarkMode 
        ? 'bg-gray-900 border-b border-gray-700' 
        : 'bg-white border-b border-gray-200'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="grid min-w-0 gap-4 grid-cols-[repeat(auto-fit,minmax(120px,1fr))]">
          {categories.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`flex flex-col items-center justify-center h-full rounded-lg px-3 py-4 border text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-red/50 w-full
                  ${isActive
                    ? 'border-brand-red bg-brand-red/10 text-brand-red'
                    : isDarkMode
                      ? 'border-gray-700 bg-gray-800 text-gray-200 hover:bg-gray-700 hover:border-brand-red/40'
                      : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-100 hover:border-brand-red/40'}
                `}
                style={{ minHeight: '90px' }}
              >
                <span className="text-lg mb-1">{getCategoryIcon(category.id)}</span>
                <span className="leading-tight text-center break-words w-full font-semibold" style={{wordBreak: 'break-word', fontSize: '0.98em'}} title={category.name[language]}>
                  {category.name[language]}
                </span>
              </button>
            );
          })}
        </div>
        <div className="mt-4 text-center">
          <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold border transition-all duration-200 ${
            isDarkMode
              ? 'bg-gray-800 border-gray-700 text-gray-400'
              : 'bg-gray-50 border-gray-200 text-gray-500'
          }`}>
            {categories.length} {language === 'en' ? 'Categories Available' : 'Kategori të Disponueshme'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;