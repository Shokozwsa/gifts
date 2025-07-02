import React, { useState } from 'react';
import { Heart, Mail, Phone, Instagram, Youtube, X, Package, Users, Clock, Shield, Award, CheckCircle, Star } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import galaxLogo from '../assets/galax-logo.svg';
import { useApp } from '../context/AppContext';
import { getTranslation } from '../utils/translations';

export default function Footer() {
  const { state } = useApp();
  const t = (key: string) => getTranslation(key, state.language);
  const [isBulkOrdersOpen, setIsBulkOrdersOpen] = useState(false);
  const [isQualityPromiseOpen, setIsQualityPromiseOpen] = useState(false);

  return (
    <footer className="bg-white text-gray-900">
      {/* Newsletter Section */}
      <div className="py-12" style={{background: 'linear-gradient(to right, #BCECAC, #00CDFE)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Stay Updated with Latest Offers
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get exclusive discounts, new product updates, and gifting ideas delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              <button className="bg-white px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap" style={{color: '#00CDFE'}}>
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* Section 1 - White (Company Info) */}
        <div className="bg-white py-16 px-6">
          <div className="flex items-center space-x-3 mb-6 relative">
            {/* Floating decorative elements */}
            <div className="absolute -top-2 -right-2 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-sparkle opacity-60"></div>
            <div className="absolute top-8 right-4 w-1 h-1 bg-yellow-400 rounded-full animate-sparkle-delayed opacity-50"></div>
            
            <img 
              src={galaxLogo} 
              alt="Galax Logo" 
              className="w-12 h-12"
            />
            <div>
              <h1 
                className="text-2xl font-bold tracking-wider"
                style={{color: '#67E8F9'}}
              >
                GALAX
              </h1>
              <p className="text-xs text-gray-600 animate-bounce-gentle">Personalized with Love</p>
            </div>
          </div>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            India's leading platform for personalized gifts. We help you create memorable moments with our premium quality customized products and fast delivery across the country.
          </p>
          
          <div className="flex space-x-4">
            <a href="https://wa.me/9560524736" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] p-2 rounded-full hover:bg-[#128C7E] transition-colors">
              <FaWhatsapp className="h-5 w-5 text-white" />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=r.galax.gs@gmail.com" target="_blank" rel="noopener noreferrer" className="bg-[#4285F4] p-2 rounded-full hover:bg-[#3367D6] transition-colors">
              <Mail className="h-5 w-5 text-white" />
            </a>
            <a href="#" className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] p-2 rounded-full hover:opacity-80 transition-opacity">
              <Instagram className="h-5 w-5 text-white" />
            </a>
            <a href="#" className="bg-[#FF0000] p-2 rounded-full hover:bg-[#CC0000] transition-colors">
              <Youtube className="h-5 w-5 text-white" />
            </a>
          </div>
        </div>

        {/* Section 2 - Light Blue (Quick Links) */}
        <div className="bg-[#00CDFE] py-16 px-6">
          <h3 className="text-lg font-semibold mb-6 text-black">Quick Links</h3>
          <div className="space-y-3">
            <a href="#" className="block text-black/90 hover:text-black transition-colors">
              Size Guide
            </a>
            <button 
              onClick={() => setIsQualityPromiseOpen(true)}
              className="block text-black/90 hover:text-black transition-colors text-left"
            >
              Quality Promise
            </button>
            <button 
              onClick={() => setIsBulkOrdersOpen(true)}
              className="block text-black/90 hover:text-black transition-colors text-left"
            >
              Bulk Orders
            </button>
          </div>
        </div>

        {/* Section 3 - Green (Categories) */}
        <div className="bg-[#BCECAC] py-16 px-6">
          <h3 className="text-lg font-semibold mb-6 text-gray-800">Categories</h3>
          <div className="space-y-3">
            {['Photo Gifts', 'Personalized Jewelry', 'Custom Clothing', 'Festive Gifts', 'Corporate Gifts', 'Home Decor'].map((category) => (
              <a key={category} href="#" className="block text-gray-700 hover:text-gray-900 transition-colors">
                {category}
              </a>
            ))}
          </div>
        </div>

        {/* Section 4 - Baby Pink (Contact Info) */}
        <div className="bg-[#F8BBD9] py-16 px-6">
          <h3 className="text-lg font-semibold mb-6 text-gray-800">Contact Us</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-gray-700 flex-shrink-0" />
              <div className="text-gray-800">
                <p>+91 95605 24736</p>
                <p className="text-sm text-gray-600">Mon-Sat: 9AM-8PM</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-gray-700 flex-shrink-0" />
              <div className="text-gray-800">
                <p>r.galax.gs@gmail.com</p>
                <p className="text-sm text-gray-600">24/7 Email Support</p>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mt-8">
            <h4 className="text-sm font-semibold mb-3 text-gray-800">We Accept</h4>
            <div className="flex flex-wrap gap-2">
              <div className="bg-white/50 px-3 py-1 rounded text-xs text-gray-700">UPI</div>
              <div className="bg-white/50 px-3 py-1 rounded text-xs text-gray-700">Cards</div>
              <div className="bg-white/50 px-3 py-1 rounded text-xs text-gray-700">Net Banking</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer - Four Colored Sections */}
      <div className="grid grid-cols-1 md:grid-cols-4">
        {/* Section 1 - White */}
        <div className="bg-white py-6 px-4 text-center">
          <p className="text-gray-800 font-medium mb-2">&copy; 2025 Galax</p>
          <p className="text-gray-600 text-sm">All rights reserved</p>
        </div>
        
        {/* Section 2 - Light Blue */}
        <div className="bg-[#00CDFE] py-6 px-4 text-center">
          <p className="text-black font-medium mb-2">Privacy Policy</p>
          <p className="text-black/80 text-sm">Your data is safe</p>
        </div>
        
        {/* Section 3 - Green */}
        <div className="bg-[#BCECAC] py-6 px-4 text-center">
          <p className="text-gray-800 font-medium mb-2">Terms of Service</p>
          <p className="text-gray-700 text-sm">Fair & transparent</p>
        </div>
        
        {/* Section 4 - Baby Pink */}
        <div className="bg-[#F8BBD9] py-6 px-4 text-center">
          <div className="flex items-center justify-center space-x-2 text-gray-800 font-medium mb-2">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>in India</span>
          </div>
          <p className="text-gray-600 text-sm">Quality craftsmanship</p>
        </div>
      </div>

      {/* Bulk Orders Modal */}
      {isBulkOrdersOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">Bulk Orders</h2>
              <button 
                onClick={() => setIsBulkOrdersOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-r from-[#BCECAC] to-[#00CDFE] p-6 rounded-lg text-white">
                  <h3 className="text-xl font-semibold mb-4">Why Choose Bulk Orders?</h3>
                  <p className="text-white/90">
                    Perfect for corporate gifts, events, or large celebrations. Get personalized products at competitive prices with dedicated support.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Quick Benefits</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Volume discounts up to 30%</li>
                    <li>• Priority production & shipping</li>
                    <li>• Dedicated account manager</li>
                    <li>• Custom packaging options</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <Package className="h-12 w-12 text-[#00CDFE] mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-800 mb-2">Minimum Order</h4>
                  <p className="text-gray-600 text-sm">50+ items for bulk pricing</p>
                </div>
                
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <Users className="h-12 w-12 text-[#00CDFE] mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-800 mb-2">Corporate Events</h4>
                  <p className="text-gray-600 text-sm">Perfect for company gifts</p>
                </div>
                
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <Clock className="h-12 w-12 text-[#00CDFE] mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-800 mb-2">Fast Delivery</h4>
                  <p className="text-gray-600 text-sm">5-7 business days</p>
                </div>
                
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <Shield className="h-12 w-12 text-[#00CDFE] mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-800 mb-2">Quality Assured</h4>
                  <p className="text-gray-600 text-sm">100% satisfaction guarantee</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Volume Pricing</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded border">
                    <div className="text-lg font-semibold text-[#00CDFE]">50-99 items</div>
                    <div className="text-sm text-gray-600">10% discount</div>
                  </div>
                  <div className="bg-white p-4 rounded border">
                    <div className="text-lg font-semibold text-[#00CDFE]">100-499 items</div>
                    <div className="text-sm text-gray-600">20% discount</div>
                  </div>
                  <div className="bg-white p-4 rounded border">
                    <div className="text-lg font-semibold text-[#00CDFE]">500+ items</div>
                    <div className="text-sm text-gray-600">30% discount</div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">How to Order</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">1. Contact Us</h4>
                    <p className="text-gray-600 text-sm mb-3">Call or WhatsApp us with your requirements</p>
                    
                    <h4 className="font-semibold text-gray-700 mb-2">2. Get Quote</h4>
                    <p className="text-gray-600 text-sm mb-3">Receive detailed pricing and timeline</p>
                    
                    <h4 className="font-semibold text-gray-700 mb-2">3. Confirm Order</h4>
                    <p className="text-gray-600 text-sm">Approve design and make payment</p>
                  </div>
                  
                  <div className="bg-[#00CDFE] text-white p-6 rounded-lg">
                    <h4 className="font-semibold mb-3">Ready to Start?</h4>
                    <p className="text-white/90 text-sm mb-4">Contact our bulk orders team for personalized assistance</p>
                    <div className="flex items-center justify-center space-x-6">
                      <a 
                        href="https://wa.me/9560524736" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white p-3 rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <FaWhatsapp className="h-6 w-6 text-[#25D366]" />
                      </a>
                      <a 
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=r.galax.gs@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-3 rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <Mail className="h-6 w-6 text-[#4285F4]" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quality Promise Modal */}
      {isQualityPromiseOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">Our Quality Promise</h2>
              <button 
                onClick={() => setIsQualityPromiseOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="text-center mb-8">
                <div className="bg-gradient-to-r from-[#BCECAC] to-[#00CDFE] p-6 rounded-lg text-white">
                  <h3 className="text-xl font-semibold mb-4">Your happiness and trust are the foundation of our brand</h3>
                  <p className="text-white/90">
                    — and we stand behind every purchase you make.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 border border-gray-200 rounded-lg">
                  <Award className="h-16 w-16 text-[#00CDFE] mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-800 mb-3">Top-tier materials and craftsmanship</h4>
                  <p className="text-gray-600 text-sm">
                    We source only the finest materials and work with skilled artisans to ensure every product meets our exacting standards.
                  </p>
                </div>
                
                <div className="text-center p-6 border border-gray-200 rounded-lg">
                  <CheckCircle className="h-16 w-16 text-[#00CDFE] mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-800 mb-3">Rigorous quality checks before delivery</h4>
                  <p className="text-gray-600 text-sm">
                    Every item undergoes multiple quality inspections to ensure it meets our strict standards before reaching you.
                  </p>
                </div>
                
                <div className="text-center p-6 border border-gray-200 rounded-lg">
                  <Star className="h-16 w-16 text-[#00CDFE] mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-800 mb-3">Customer satisfaction as our top priority</h4>
                  <p className="text-gray-600 text-sm">
                    Your happiness is our success. We're committed to exceeding your expectations with every order.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">What This Means for You</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Quality Guarantee</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      If you're not completely satisfied with the quality of your order, we'll make it right.
                    </p>
                    
                    <h4 className="font-semibold text-gray-700 mb-2">Expert Craftsmanship</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      Our team of skilled professionals ensures every detail is perfect, from design to final product.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Premium Materials</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      We use only high-quality, durable materials that stand the test of time.
                    </p>
                    
                    <h4 className="font-semibold text-gray-700 mb-2">Continuous Improvement</h4>
                    <p className="text-gray-600 text-sm">
                      We constantly refine our processes to deliver even better products and service.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-[#00CDFE] text-white p-6 rounded-lg inline-block">
                  <h4 className="font-semibold mb-3">Questions About Quality?</h4>
                  <p className="text-white/90 text-sm mb-4">Contact us anytime for quality-related concerns</p>
                  <div className="flex items-center justify-center space-x-6">
                    <a 
                      href="https://wa.me/9560524736" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white p-3 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <FaWhatsapp className="h-6 w-6 text-[#25D366]" />
                    </a>
                    <a 
                      href="https://mail.google.com/mail/?view=cm&to=r.galax.gs@gmail.com&subject=Step-by-Step%20Quality%20Assurance%20Procedures%20for%20Customized%20Gifts%20—%20Design,%20Personalization,%20Packaging,%20and%20Delivery%20Standards&body=What%20step-by-step%20procedures%20are%20implemented%20to%20ensure%20that%20every%20customized%20gift%20meets%20predefined%20quality%20standards%20across%20design,%20personalization,%20packaging,%20and%20delivery%3F%20Specifically%2C%20how%20are%20orders%20verified%20for%20accuracy%2C%20how%20is%20each%20product%20inspected%20for%20defects%20or%20errors%2C%20what%20packaging%20guidelines%20are%20followed%20to%20protect%20and%20present%20the%20gift%2C%20and%20what%20checks%20are%20in%20place%20before%20final%20dispatch%20to%20ensure%20timely,%20damage-free%20delivery%3F"
                       target="_blank"
                      className="bg-white p-3 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <Mail className="h-6 w-6 text-[#00CDFE]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}