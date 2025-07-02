import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { getTranslation } from '../utils/translations';
import { products } from '../data/products';
import ProductCard from './ProductCard';

export default function FeaturedProducts() {
  const { state, dispatch } = useApp();
  const t = (key: string) => getTranslation(key, state.language);

  // Filter products based on search query
  const filteredProducts = React.useMemo(() => {
    if (!state.searchQuery.trim()) {
      return products.filter(product => product.featured);
    }
    
    const query = state.searchQuery.toLowerCase();
    return products.filter(product => 
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.tags.some(tag => tag.toLowerCase().includes(query))
    );
  }, [state.searchQuery]);

  const featuredProducts = filteredProducts;

  return (
    <section className="py-16 bg-gray-900 relative overflow-hidden">
      {/* Background floating elements for FeaturedProducts */}
      <div className="absolute top-20 left-20 w-3.5 h-3.5 bg-cyan-400 rounded-full animate-float opacity-20"></div>
      <div className="absolute top-56 right-28 w-2 h-2 bg-yellow-400 rounded-full animate-sparkle opacity-35"></div>
      <div className="absolute bottom-24 left-1/3 w-2.5 h-2.5 bg-green-400 rounded-full animate-sparkle-delayed opacity-25"></div>
      <div className="absolute bottom-48 right-20 w-1.5 h-1.5 bg-orange-400 rounded-full animate-sparkle-slow opacity-30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {state.searchQuery.trim() ? `Search Results for "${state.searchQuery}"` : t('featuredProducts')}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {state.searchQuery.trim() 
              ? `Found ${featuredProducts.length} product${featuredProducts.length !== 1 ? 's' : ''} matching your search`
              : 'Handpicked premium personalized gifts that our customers love the most'
            }
          </p>
        </div>

        {featuredProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {featuredProducts.map((product, index) => (
                <div key={product.id} className="animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>

            {/* View All Products Button - only show when not searching */}
            {!state.searchQuery.trim() && (
              <div className="text-center mt-12">
                <button className="text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center space-x-2 mx-auto animate-bounce-gentle relative" style={{backgroundColor: '#00CDFE'}}>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-sparkle opacity-60"></div>
                  <span>View All Products</span>
                  <ArrowRight className="h-5 w-5 animate-bounce-gentle" />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-4">No products found</h3>
            <p className="text-gray-300 mb-6">
              We couldn't find any products matching "{state.searchQuery}". Try searching with different keywords.
            </p>
            <button 
              onClick={() => dispatch({ type: 'SET_SEARCH_QUERY', payload: '' })}
              className="text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              style={{backgroundColor: '#00CDFE'}}
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </section>
  );
}