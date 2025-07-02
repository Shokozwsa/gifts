import React from 'react';
import { Star, Heart, ShoppingCart, Eye } from 'lucide-react';
import { Product } from '../types';
import { useApp } from '../context/AppContext';
import { getTranslation } from '../utils/translations';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { state, dispatch } = useApp();
  const t = (key: string) => getTranslation(key, state.language);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    const cartItem = {
      id: `${product.id}-${Date.now()}`,
      product,
      quantity: 1,
      customization: {},
    };
    dispatch({ type: 'ADD_TO_CART', payload: cartItem });
  };

  const discountPercentage = product.discountPrice 
    ? Math.round(((product.price - product.discountPrice) / product.price) * 100)
    : 0;

  return (
    <div className="group bg-gray-800 rounded-2xl shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 overflow-hidden border border-gray-700 animate-float relative">
      {/* Floating sparkles */}
      <div className="absolute top-2 left-2 w-2 h-2 bg-yellow-400 rounded-full animate-sparkle opacity-70"></div>
      <div className="absolute top-4 right-8 w-1 h-1 bg-cyan-400 rounded-full animate-sparkle-delayed opacity-60"></div>
      <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-green-400 rounded-full animate-sparkle-slow opacity-50"></div>
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col space-y-2">
          {product.featured && (
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-medium">
              Featured
            </span>
          )}
          {discountPercentage > 0 && (
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
              {discountPercentage}% OFF
            </span>
          )}
          {product.customizable && (
            <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium">
              Customizable
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors shadow-lg">
            <Heart className="h-5 w-5 text-gray-600 hover:text-red-500" />
          </button>
          <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors shadow-lg">
            <Eye className="h-5 w-5 text-gray-600 hover:text-blue-500" />
          </button>
        </div>

        {/* Quick Add to Cart */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={handleAddToCart}
            className="w-full py-2 px-4 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 text-white"
            style={{backgroundColor: '#00CDFE'}}
          >
            <ShoppingCart className="h-4 w-4" />
            <span>{t('addToCart')}</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-cyan-400 transition-colors">
          {product.name}
        </h3>
        
        <p className="text-gray-300 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-600'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-400 ml-2">
            {product.rating} ({product.reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-white">
              {t('currency')}{product.discountPrice || product.price}
            </span>
            {product.discountPrice && (
              <span className="text-sm text-gray-400 line-through">
                {t('currency')}{product.price}
              </span>
            )}
          </div>
          
          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
            product.inStock 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {product.inStock ? t('inStock') : t('outOfStock')}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mt-3">
          {product.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}