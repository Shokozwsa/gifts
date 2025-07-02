import React from 'react';
import { ArrowRight, Sparkles, Gift, Heart, Star, Package } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { getTranslation } from '../utils/translations';

export default function Hero() {
  const { state } = useApp();
  const t = (key: string) => getTranslation(key, state.language);

  return (
    <section className="relative overflow-hidden" style={{background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3a 25%, #2d1b69 50%, #1e1e3f 75%, #0a0a1a 100%)'}}>
      {/* Gift-themed Animated Background */}
      <div className="absolute inset-0">
        {/* Large floating gift boxes - Row 1 */}
        <div className="absolute top-10 left-10 opacity-30" style={{animation: 'giftFloat 12s ease-in-out infinite'}}>
          <Gift className="w-16 h-16" style={{color: '#BCECAC'}} />
        </div>
        <div className="absolute top-32 right-16 opacity-25" style={{animation: 'giftFloat 15s ease-in-out infinite reverse', animationDelay: '2s'}}>
          <Package className="w-20 h-20" style={{color: '#00CDFE'}} />
        </div>
        <div className="absolute top-20 left-1/3 opacity-35" style={{animation: 'giftFloat 10s ease-in-out infinite', animationDelay: '4s'}}>
          <Gift className="w-14 h-14" style={{color: '#ff6b6b'}} />
        </div>
        <div className="absolute top-60 right-1/3 opacity-28" style={{animation: 'giftFloat 18s ease-in-out infinite reverse', animationDelay: '1s'}}>
          <Package className="w-18 h-18" style={{color: '#ffd93d'}} />
        </div>

        {/* Large floating gift boxes - Row 2 */}
        <div className="absolute top-1/2 left-8 opacity-25" style={{animation: 'giftFloat 14s ease-in-out infinite', animationDelay: '3s'}}>
          <Gift className="w-15 h-15" style={{color: '#ff9f43'}} />
        </div>
        <div className="absolute top-2/3 right-12 opacity-30" style={{animation: 'giftFloat 16s ease-in-out infinite reverse', animationDelay: '5s'}}>
          <Package className="w-17 h-17" style={{color: '#a855f7'}} />
        </div>
        <div className="absolute top-1/3 right-8 opacity-20" style={{animation: 'giftFloat 11s ease-in-out infinite', animationDelay: '2.5s'}}>
          <Gift className="w-13 h-13" style={{color: '#06d6a0'}} />
        </div>

        {/* Large floating gift boxes - Row 3 */}
        <div className="absolute bottom-20 left-1/4 opacity-25" style={{animation: 'giftFloat 13s ease-in-out infinite reverse', animationDelay: '6s'}}>
          <Package className="w-16 h-16" style={{color: '#BCECAC'}} />
        </div>
        <div className="absolute bottom-40 right-1/4 opacity-22" style={{animation: 'giftFloat 17s ease-in-out infinite', animationDelay: '1.5s'}}>
          <Gift className="w-19 h-19" style={{color: '#00CDFE'}} />
        </div>
        <div className="absolute bottom-60 left-1/2 opacity-28" style={{animation: 'giftFloat 9s ease-in-out infinite reverse', animationDelay: '4.5s'}}>
          <Package className="w-14 h-14" style={{color: '#ff6b6b'}} />
        </div>
        <div className="absolute bottom-32 right-8 opacity-24" style={{animation: 'giftFloat 15s ease-in-out infinite', animationDelay: '7s'}}>
          <Gift className="w-16 h-16" style={{color: '#ffd93d'}} />
        </div>
        <div className="absolute bottom-16 left-16 opacity-26" style={{animation: 'giftFloat 12s ease-in-out infinite reverse', animationDelay: '3.5s'}}>
          <Package className="w-15 h-15" style={{color: '#ff9f43'}} />
        </div>

        {/* Sparkling stars animation - Many more */}
        <div className="absolute top-20 left-1/3 opacity-50" style={{animation: 'sparkle 8s ease-in-out infinite'}}>
          <Star className="w-8 h-8" style={{color: '#BCECAC'}} />
        </div>
        <div className="absolute top-60 right-1/3 opacity-45" style={{animation: 'sparkle 6s ease-in-out infinite', animationDelay: '2s'}}>
          <Star className="w-6 h-6" style={{color: '#00CDFE'}} />
        </div>
        <div className="absolute bottom-60 left-1/2 opacity-55" style={{animation: 'sparkle 10s ease-in-out infinite', animationDelay: '4s'}}>
          <Sparkles className="w-10 h-10" style={{color: '#ff6b6b'}} />
        </div>
        <div className="absolute top-40 right-10 opacity-40" style={{animation: 'sparkle 7s ease-in-out infinite', animationDelay: '1s'}}>
          <Star className="w-7 h-7" style={{color: '#ffd93d'}} />
        </div>
        
        {/* Additional stars spread across screen */}
        <div className="absolute top-24 left-20 opacity-35" style={{animation: 'sparkle 9s ease-in-out infinite', animationDelay: '3s'}}>
          <Star className="w-5 h-5" style={{color: '#a855f7'}} />
        </div>
        <div className="absolute top-80 left-2/3 opacity-40" style={{animation: 'sparkle 11s ease-in-out infinite', animationDelay: '1.5s'}}>
          <Sparkles className="w-9 h-9" style={{color: '#06d6a0'}} />
        </div>
        <div className="absolute top-1/4 left-8 opacity-30" style={{animation: 'sparkle 5s ease-in-out infinite', animationDelay: '2.5s'}}>
          <Star className="w-6 h-6" style={{color: '#ff9f43'}} />
        </div>
        <div className="absolute bottom-32 left-2/3 opacity-45" style={{animation: 'sparkle 12s ease-in-out infinite', animationDelay: '0.5s'}}>
          <Star className="w-8 h-8" style={{color: '#BCECAC'}} />
        </div>
        <div className="absolute bottom-72 right-20 opacity-38" style={{animation: 'sparkle 7.5s ease-in-out infinite', animationDelay: '4.5s'}}>
          <Sparkles className="w-7 h-7" style={{color: '#00CDFE'}} />
        </div>
        <div className="absolute top-44 left-1/2 opacity-42" style={{animation: 'sparkle 8.5s ease-in-out infinite', animationDelay: '6s'}}>
          <Star className="w-9 h-9" style={{color: '#ffd93d'}} />
        </div>
        <div className="absolute bottom-44 right-1/3 opacity-36" style={{animation: 'sparkle 6.5s ease-in-out infinite', animationDelay: '3.5s'}}>
          <Star className="w-5 h-5" style={{color: '#ff6b6b'}} />
        </div>
        <div className="absolute top-2/3 left-1/4 opacity-48" style={{animation: 'sparkle 10.5s ease-in-out infinite', animationDelay: '5.5s'}}>
          <Sparkles className="w-11 h-11" style={{color: '#a855f7'}} />
        </div>

        {/* Floating hearts with bounce - Many more */}
        <div className="absolute top-1/3 left-20 opacity-40" style={{animation: 'heartBounce 9s ease-in-out infinite'}}>
          <Heart className="w-12 h-12" style={{color: '#ff6b6b'}} />
        </div>
        <div className="absolute bottom-1/3 right-20 opacity-45" style={{animation: 'heartBounce 11s ease-in-out infinite reverse', animationDelay: '3s'}}>
          <Heart className="w-10 h-10" style={{color: '#BCECAC'}} />
        </div>
        <div className="absolute top-12 right-1/2 opacity-35" style={{animation: 'heartBounce 8s ease-in-out infinite', animationDelay: '1.5s'}}>
          <Heart className="w-8 h-8" style={{color: '#00CDFE'}} />
        </div>
        <div className="absolute bottom-12 left-1/3 opacity-50" style={{animation: 'heartBounce 13s ease-in-out infinite reverse', animationDelay: '4.5s'}}>
          <Heart className="w-11 h-11" style={{color: '#ffd93d'}} />
        </div>
        <div className="absolute top-56 left-12 opacity-38" style={{animation: 'heartBounce 10s ease-in-out infinite', animationDelay: '2s'}}>
          <Heart className="w-9 h-9" style={{color: '#a855f7'}} />
        </div>
        <div className="absolute bottom-56 right-16 opacity-42" style={{animation: 'heartBounce 7s ease-in-out infinite reverse', animationDelay: '5s'}}>
          <Heart className="w-7 h-7" style={{color: '#06d6a0'}} />
        </div>
        <div className="absolute top-72 right-1/4 opacity-33" style={{animation: 'heartBounce 12s ease-in-out infinite', animationDelay: '3.5s'}}>
          <Heart className="w-10 h-10" style={{color: '#ff9f43'}} />
        </div>
        <div className="absolute bottom-80 left-1/4 opacity-47" style={{animation: 'heartBounce 9.5s ease-in-out infinite reverse', animationDelay: '1s'}}>
          <Heart className="w-13 h-13" style={{color: '#ff6b6b'}} />
        </div>

        {/* Large celebratory sparkles */}
        <div className="absolute top-16 right-1/4 opacity-20" style={{animation: 'bigSparkle 14s ease-in-out infinite'}}>
          <Sparkles className="w-24 h-24" style={{color: '#00CDFE'}} />
        </div>
        <div className="absolute bottom-16 left-1/3 opacity-15" style={{animation: 'bigSparkle 16s ease-in-out infinite reverse', animationDelay: '5s'}}>
          <Sparkles className="w-28 h-28" style={{color: '#BCECAC'}} />
        </div>

        {/* Ribbon-like flowing lines */}
        <div className="absolute top-1/4 left-0 w-full h-2 opacity-10" style={{background: 'linear-gradient(90deg, transparent, #BCECAC, #00CDFE, transparent)', animation: 'ribbon 20s ease-in-out infinite'}}></div>
        <div className="absolute bottom-1/4 left-0 w-full h-2 opacity-15" style={{background: 'linear-gradient(90deg, transparent, #ff6b6b, #ffd93d, transparent)', animation: 'ribbon 25s ease-in-out infinite reverse', animationDelay: '8s'}}></div>

        {/* Gift confetti burst */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5" style={{animation: 'confetti 30s ease-in-out infinite'}}>
          <div className="w-32 h-32 rounded-full" style={{background: 'conic-gradient(from 0deg, #BCECAC, #00CDFE, #ff6b6b, #ffd93d, #BCECAC)'}}></div>
        </div>

        {/* Subtle gradient background overlay */}
        <div className="absolute inset-0 opacity-10" style={{background: 'radial-gradient(circle at 30% 40%, rgba(188,236,172,0.3), transparent 50%), radial-gradient(circle at 70% 60%, rgba(0,205,254,0.2), transparent 50%)'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <div className="flex items-center space-x-2 text-white px-4 py-2 rounded-full text-sm font-medium" style={{background: 'linear-gradient(to right, #BCECAC, #00CDFE)'}}>
                <Sparkles className="h-4 w-4" />
                <span>Premium Quality Guaranteed</span>
              </div>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent" style={{backgroundImage: 'linear-gradient(to right, #BCECAC, #00CDFE, #ffffff)'}}>
                {t('heroTitle')}
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl">
              {t('heroSubtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2" style={{background: 'linear-gradient(to right, #BCECAC, #00CDFE)'}}>
                <span>{t('shopNow')}</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              
              <button className="border-2 border-gray-500 text-gray-300 px-8 py-4 rounded-full font-semibold hover:border-[#00CDFE] hover:text-[#00CDFE] transition-all duration-200 flex items-center justify-center space-x-2">
                <span>{t('exploreCategories')}</span>
                <Gift className="h-5 w-5" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-600">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-white">50K+</div>
                <div className="text-sm text-gray-400">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-white">1000+</div>
                <div className="text-sm text-gray-400">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-white">4.8★</div>
                <div className="text-sm text-gray-400">Rating</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/1303098/pexels-photo-1303098.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Personalized Gifts"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg animate-bounce border border-white/20">
                <Heart className="h-8 w-8" style={{color: '#BCECAC'}} />
                <div className="text-sm font-medium text-gray-900 mt-1">Made with Love</div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg animate-pulse border border-white/20">
                <Gift className="h-8 w-8" style={{color: '#00CDFE'}} />
                <div className="text-sm font-medium text-gray-900 mt-1">Free Shipping</div>
              </div>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute inset-0 rounded-2xl transform rotate-6 scale-105 opacity-20" style={{background: 'linear-gradient(45deg, #BCECAC, #00CDFE)'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
}