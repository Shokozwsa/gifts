export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  images: string[];
  category: string;
  subcategory?: string;
  customizable: boolean;
  customizationOptions?: CustomizationOption[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  tags: string[];
  featured?: boolean;
}

export interface CustomizationOption {
  id: string;
  name: string;
  type: 'text' | 'image' | 'color' | 'size' | 'material';
  required: boolean;
  options?: string[];
  maxLength?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  customization?: Record<string, any>;
  id: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  addresses: Address[];
  preferences: {
    language: 'en' | 'hi';
    currency: 'INR';
  };
}

export interface Address {
  id: string;
  name: string;
  street: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  isDefault: boolean;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
  images?: string[];
}

export interface Category {
  id: string;
  name: string;
  image: string;
  subcategories?: Category[];
}