import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { getTranslation } from '../utils/translations';
import { categories } from '../data/products';

export default function CategoryGrid() {
  const { state, dispatch } = useApp();
  const t = (key: string) => getTranslation(key, state.language);

  const handleCategoryClick = (categoryId: string) => {
    dispatch({ type: 'SET_SELECTED_CATEGORY', payload: categoryId });
  };

  return (
    <section className="py-16 bg-gray-900 relative overflow-hidden">
      {/* Background floating elements for CategoryGrid */}
      <div className="absolute top-16 right-16 w-4 h-4 bg-cyan-400 rounded-full animate-float opacity-15"></div>
      <div className="absolute top-48 left-32 w-2.5 h-2.5 bg-yellow-400 rounded-full animate-sparkle opacity-25"></div>
      <div className="absolute bottom-32 right-1/4 w-3 h-3 bg-green-400 rounded-full animate-sparkle-delayed opacity-20"></div>
      <div className="absolute bottom-16 left-16 w-1.5 h-1.5 bg-purple-400 rounded-full animate-sparkle-slow opacity-30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {t('exploreCategories')}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover our wide range of personalized gifts for every occasion and celebration
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer transform hover:scale-105 transition-all duration-300 animate-float ${
                index === 0 ? 'sm:col-span-2 lg:col-span-1 xl:col-span-2' : ''
              }`}
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="aspect-square relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  {/* Floating sparkles inside category cards */}
                  <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-sparkle opacity-70"></div>
                  <div className="absolute top-0 left-8 w-1 h-1 bg-yellow-400 rounded-full animate-sparkle-delayed opacity-60"></div>
                  
                  <h3 className="text-white text-xl font-bold mb-2 group-hover:text-cyan-300 transition-colors animate-bounce-gentle">
                    {category.name}
                  </h3>
                  
                  <div className="flex items-center text-white/80 group-hover:text-white transition-colors">
                    <span className="text-sm">Explore Collection</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/10 transition-colors duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Categories Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center space-x-2 mx-auto">
            <span>View All Categories</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}