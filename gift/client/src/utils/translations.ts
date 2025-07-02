export const translations = {
  en: {
    // Navigation
    home: 'Home',
    categories: 'Categories',
    aboutUs: 'About Us',
    contact: 'Contact',
    login: 'Login',
    signup: 'Sign Up',
    cart: 'Cart',
    search: 'Search products...',
    
    // Homepage
    heroTitle: 'Personalized Gifts That Tell Your Story',
    heroSubtitle: 'Create unique, customized gifts for your loved ones with our premium quality products and fast delivery across India.',
    shopNow: 'Shop Now',
    exploreCategories: 'Explore Categories',
    featuredProducts: 'Featured Products',
    whyChooseUs: 'Why Choose Us',
    
    // Product
    addToCart: 'Add to Cart',
    buyNow: 'Buy Now',
    customizeProduct: 'Customize Product',
    reviews: 'Reviews',
    description: 'Description',
    specifications: 'Specifications',
    deliveryInfo: 'Delivery Information',
    
    // Cart
    yourCart: 'Your Cart',
    subtotal: 'Subtotal',
    shipping: 'Shipping',
    total: 'Total',
    proceedToCheckout: 'Proceed to Checkout',
    continueShopping: 'Continue Shopping',
    
    // Common
    currency: '₹',
    free: 'Free',
    outOfStock: 'Out of Stock',
    inStock: 'In Stock',
    loading: 'Loading...',
  },
  hi: {
    // Navigation
    home: 'मुख्य पृष्ठ',
    categories: 'श्रेणियाँ',
    aboutUs: 'हमारे बारे में',
    contact: 'संपर्क',
    login: 'लॉगिन',
    signup: 'साइन अप',
    cart: 'कार्ट',
    search: 'उत्पाद खोजें...',
    
    // Homepage
    heroTitle: 'व्यक्तिगत उपहार जो आपकी कहानी कहते हैं',
    heroSubtitle: 'हमारे प्रीमियम गुणवत्ता वाले उत्पादों और भारत भर में तेज़ डिलीवरी के साथ अपने प्रियजनों के लिए अनूठे, अनुकूलित उपहार बनाएं।',
    shopNow: 'अभी खरीदारी करें',
    exploreCategories: 'श्रेणियाँ देखें',
    featuredProducts: 'विशेष उत्पाद',
    whyChooseUs: 'हमें क्यों चुनें',
    
    // Product
    addToCart: 'कार्ट में जोड़ें',
    buyNow: 'अभी खरीदें',
    customizeProduct: 'उत्पाद अनुकूलित करें',
    reviews: 'समीक्षाएं',
    description: 'विवरण',
    specifications: 'विशेषताएं',
    deliveryInfo: 'डिलीवरी जानकारी',
    
    // Cart
    yourCart: 'आपका कार्ट',
    subtotal: 'कुल योग',
    shipping: 'शिपिंग',
    total: 'कुल',
    proceedToCheckout: 'चेकआउट पर जाएं',
    continueShopping: 'खरीदारी जारी रखें',
    
    // Common
    currency: '₹',
    free: 'मुफ्त',
    outOfStock: 'स्टॉक में नहीं',
    inStock: 'स्टॉक में',
    loading: 'लोड हो रहा है...',
  },
};

export function getTranslation(key: string, language: 'en' | 'hi'): string {
  const keys = key.split('.');
  let value: any = translations[language];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
}