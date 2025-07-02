import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X, Heart } from 'lucide-react';
import { Link } from 'wouter';
import galaxLogo from '../assets/galax-logo.svg';
import { useApp } from '../context/AppContext';
import { getTranslation } from '../utils/translations';

export default function Header() {
  const { state, dispatch } = useApp();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  const t = (key: string) => getTranslation(key, state.language);

  const toggleLanguage = () => {
    dispatch({ type: 'SET_LANGUAGE', payload: state.language === 'en' ? 'hi' : 'en' });
    setIsLanguageOpen(false);
  };

  const cartItemsCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <header className="bg-white shadow-2xl sticky top-0 z-50 border-b border-gray-200 relative overflow-hidden">
      {/* Floating decorative elements in header */}
      <div className="absolute top-2 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-sparkle opacity-60"></div>
      <div className="absolute top-4 right-40 w-0.5 h-0.5 bg-yellow-400 rounded-full animate-sparkle-delayed opacity-70"></div>
      <div className="absolute bottom-2 left-32 w-1.5 h-1.5 bg-green-400 rounded-full animate-sparkle-slow opacity-50"></div>
      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-0 md:py-2">
          {/* Logo and Search Bar */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <img 
                src={galaxLogo} 
                alt="Galax Logo" 
                className="w-12 h-12 animate-rotate-slow"
              />
              <div>
                {/* GALAX text in light blue */}
                <h1 
                  className="text-2xl font-bold tracking-wider"
                  style={{color: '#67E8F9'}}
                >
                  GALAX
                </h1>
                <p className="text-xs text-gray-500 animate-bounce-gentle">Personalized with Love</p>
              </div>
            </div>

            {/* Desktop Search Bar */}
            <div className="hidden md:flex flex-1 max-w-sm md:max-w-md">
              <div className="relative w-full">
              <input
                type="text"
                placeholder={t('search')}
                value={state.searchQuery}
                onChange={(e) => dispatch({ type: 'SET_SEARCH_QUERY', payload: e.target.value })}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    // Search is already triggered by onChange, so we can just blur the input
                    e.currentTarget.blur();
                  }
                }}
                className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00CDFE] focus:border-transparent text-sm md:text-base"
              />
              <button
                onClick={() => {
                  // If there's already a search query, keep it; if not, focus the input
                  if (!state.searchQuery.trim()) {
                    const input = document.querySelector('input[placeholder*="search"]') as HTMLInputElement;
                    input?.focus();
                  }
                }}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#00CDFE] hover:bg-[#00B8E6] text-white p-1.5 rounded-full transition-colors"
              >
                <Search className="h-4 w-4" />
              </button>
              </div>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Mobile Search Button */}
            <button
              onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-[#00CDFE] transition-colors"
            >
              <Search className="h-6 w-6" />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <a href="#" className="text-gray-700 hover:text-[#00CDFE] transition-colors font-medium">
                {t('home')}
              </a>
              <a href="#" className="text-gray-700 hover:text-[#00CDFE] transition-colors font-medium">
                {t('categories')}
              </a>
              <button onClick={scrollToBottom} className="text-gray-700 hover:text-[#00CDFE] transition-colors font-medium">
                {t('aboutUs')}
              </button>
              <a href="https://wa.me/9560524736" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#00CDFE] transition-colors font-medium">
                {t('contact')}
              </a>
            </nav>



            {/* Cart */}
            <Link href="/cart">
              <button className="relative p-2 text-gray-700 hover:text-[#00CDFE] transition-colors">
                <ShoppingCart className="h-6 w-6" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium" style={{backgroundColor: '#00CDFE'}}>
                    {cartItemsCount}
                  </span>
                )}
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-[#00CDFE] transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>


      </div>

      {/* Mobile Search Bar */}
      {isMobileSearchOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-3">
          <div className="relative">
            <input
              type="text"
              placeholder={t('search')}
              value={state.searchQuery}
              onChange={(e) => dispatch({ type: 'SET_SEARCH_QUERY', payload: e.target.value })}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  e.currentTarget.blur();
                  setIsMobileSearchOpen(false);
                }
              }}
              className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00CDFE] focus:border-transparent text-base"
              autoFocus
            />
            <button
              onClick={() => {
                if (state.searchQuery.trim()) {
                  // If there's a search query, blur the input to trigger search
                  const input = document.querySelector('input[placeholder*="search"]') as HTMLInputElement;
                  input?.blur();
                  setIsMobileSearchOpen(false);
                } else {
                  // If no search query, just close the search bar
                  setIsMobileSearchOpen(false);
                }
              }}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#00CDFE] hover:bg-[#00B8E6] text-white p-2 rounded-full transition-colors"
            >
              {state.searchQuery.trim() ? <Search className="h-4 w-4" /> : <X className="h-4 w-4" />}
            </button>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-4">
            <a href="#" className="block text-gray-700 hover:text-[#00CDFE] transition-colors font-medium">
              {t('home')}
            </a>
            <a href="#" className="block text-gray-700 hover:text-[#00CDFE] transition-colors font-medium">
              {t('categories')}
            </a>
            <button onClick={scrollToBottom} className="block text-gray-700 hover:text-[#00CDFE] transition-colors font-medium">
              {t('aboutUs')}
            </button>
            <a href="https://wa.me/9560524736" target="_blank" rel="noopener noreferrer" className="block text-gray-700 hover:text-[#00CDFE] transition-colors font-medium">
              {t('contact')}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}