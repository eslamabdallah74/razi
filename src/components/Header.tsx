import React, { useState } from 'react';
import { Menu, X, Languages } from 'lucide-react';
import { NavLink } from './NavLink';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <header className="fixed w-full h-16 bg-white shadow-md z-50">
      <div className="container mx-auto px-6 h-full flex justify-between items-center">
        <a href="#" className="flex items-center">
          <div className="w-10 h-10 bg-razi-red rounded-full flex items-center justify-center mr-3">
            <span className="text-white font-bold">R</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-razi-blue">
              <span className="font-arabic">رازي</span>
            </h1>
            <p className="text-xs font-arabic text-razi-red">
              {t('header.slogan')}
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <NavLink href="#home" className="mx-10">{t('nav.home')}</NavLink>
          <NavLink href="#about">{t('nav.about')}</NavLink>
          <NavLink href="#services">{t('nav.services')}</NavLink>
          <NavLink href="#portfolio">{t('nav.work')}</NavLink>
          <NavLink href="#contact">{t('nav.contact')}</NavLink>
          <button
            onClick={toggleLanguage}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Languages size={20} className="text-razi-blue" />
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleLanguage}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Languages size={20} className="text-razi-blue" />
          </button>
          <button 
            className="text-razi-blue"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <a href="#home" className="text-razi-blue hover:text-razi-red transition-colors" onClick={() => setIsMenuOpen(false)}>{t('nav.home')}</a>
            <a href="#about" className="text-razi-blue hover:text-razi-red transition-colors" onClick={() => setIsMenuOpen(false)}>{t('nav.about')}</a>
            <a href="#services" className="text-razi-blue hover:text-razi-red transition-colors" onClick={() => setIsMenuOpen(false)}>{t('nav.services')}</a>
            <a href="#portfolio" className="text-razi-blue hover:text-razi-red transition-colors" onClick={() => setIsMenuOpen(false)}>{t('nav.work')}</a>
            <a href="#contact" className="text-razi-blue hover:text-razi-red transition-colors" onClick={() => setIsMenuOpen(false)}>{t('nav.contact')}</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;