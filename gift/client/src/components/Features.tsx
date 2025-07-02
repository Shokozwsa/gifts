import React from 'react';
import { Truck, Shield, Headphones, Gift, Clock, Heart } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { getTranslation } from '../utils/translations';

export default function Features() {
  const { state } = useApp();
  const t = (key: string) => getTranslation(key, state.language);

  const features = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'Free delivery on orders above ₹999 across India',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: '2-5 business days delivery with real-time tracking',
      color: 'text-green-500',
      bgColor: 'bg-green-50',
    },
    {
      icon: Shield,
      title: 'Secure Payments',
      description: '100% secure payments with UPI, cards & net banking',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Heart,
      title: 'Premium Quality',
      description: 'High-quality materials and printing technology',
      color: 'text-red-500',
      bgColor: 'bg-red-50',
    },
    {
      icon: Gift,
      title: 'Gift Wrapping',
      description: 'Beautiful gift wrapping options available',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock customer support via chat & call',
      color: 'text-teal-500',
      bgColor: 'bg-teal-50',
    },
  ];

  return (
    <section className="py-16 bg-gray-900 relative overflow-hidden">
      {/* Background floating elements */}
      <div className="absolute top-10 left-10 w-3 h-3 bg-cyan-400 rounded-full animate-float opacity-20"></div>
      <div className="absolute top-32 right-20 w-2 h-2 bg-yellow-400 rounded-full animate-sparkle opacity-30"></div>
      <div className="absolute bottom-20 left-1/4 w-2.5 h-2.5 bg-green-400 rounded-full animate-sparkle-delayed opacity-25"></div>
      <div className="absolute bottom-40 right-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-sparkle-slow opacity-35"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {t('whyChooseUs')}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We're committed to providing the best personalized gifting experience in India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-gray-700 hover:border-cyan-500 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 text-center bg-gray-800 animate-slide-up relative overflow-hidden"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Floating decorative elements */}
                <div className="absolute top-3 right-3 w-2 h-2 bg-cyan-400 rounded-full animate-bounce-gentle opacity-60"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-yellow-400 rounded-full animate-sparkle opacity-50"></div>
                
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-700 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 animate-pulse-glow">
                  <Icon className={`h-8 w-8 ${feature.color} animate-bounce-gentle`} />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust Section */}
        <div className="mt-16 bg-gradient-to-r from-orange-50 to-pink-50 rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Trusted by 50,000+ Happy Customers
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Join thousands of satisfied customers who have made their special moments even more memorable with our personalized gifts. We're proud to be India's leading platform for customized gifts.
              </p>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">4.8/5</div>
                  <div className="text-sm text-gray-600">Customer Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">99%</div>
                  <div className="text-sm text-gray-600">On-time Delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">24/7</div>
                  <div className="text-sm text-gray-600">Support Available</div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/1303098/pexels-photo-1303098.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Happy Customers"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}