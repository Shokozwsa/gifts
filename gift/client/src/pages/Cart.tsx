import React, { useEffect } from 'react';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { getTranslation } from '../utils/translations';
import { Link } from 'wouter';

export default function Cart() {
  const { state, dispatch } = useApp();

  // Scroll to top when cart page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const t = (key: string) => getTranslation(key, state.language);

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      dispatch({ type: 'REMOVE_FROM_CART', payload: id });
    } else {
      dispatch({ type: 'UPDATE_CART_QUANTITY', payload: { id, quantity } });
    }
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const subtotal = state.cart.reduce((sum, item) => {
    const price = item.product.discountPrice || item.product.price;
    return sum + (price * item.quantity);
  }, 0);

  const shipping = subtotal > 500 ? 0 : 50;
  const total = subtotal + shipping;

  if (state.cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <ShoppingBag className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Add some personalized gifts to get started!</p>
            <Link href="/">
              <button className="bg-[#00CDFE] hover:bg-[#00B8E6] text-white px-8 py-3 rounded-full font-medium transition-colors">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <button className="p-2 text-gray-600 hover:text-[#00CDFE] transition-colors">
                <ArrowLeft className="h-6 w-6" />
              </button>
            </Link>
            <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>
          </div>
          {state.cart.length > 0 && (
            <button
              onClick={clearCart}
              className="text-red-500 hover:text-red-600 font-medium transition-colors"
            >
              Clear Cart
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {state.cart.map((item) => {
                const price = item.product.discountPrice || item.product.price;
                return (
                  <div key={item.id} className="p-6 border-b border-gray-200 last:border-b-0">
                    <div className="flex items-start space-x-4">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 mb-1">{item.product.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{item.product.description}</p>
                        
                        {/* Customization Details */}
                        {item.customization && Object.keys(item.customization).length > 0 && (
                          <div className="mb-2">
                            <p className="text-xs text-gray-500 mb-1">Customization:</p>
                            {Object.entries(item.customization).map(([key, value]) => (
                              <p key={key} className="text-xs text-gray-600">
                                {key}: {String(value)}
                              </p>
                            ))}
                          </div>
                        )}

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 text-gray-500 hover:text-[#00CDFE] transition-colors"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 text-gray-500 hover:text-[#00CDFE] transition-colors"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span className="font-bold text-lg">₹{(price * item.quantity).toFixed(2)}</span>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="p-1 text-red-500 hover:text-red-600 transition-colors"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    {shipping === 0 ? 'Free' : `₹${shipping.toFixed(2)}`}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="text-xs text-gray-500">
                    Free shipping on orders over ₹500
                  </p>
                )}
                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>₹{total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-[#00CDFE] hover:bg-[#00B8E6] text-white py-3 rounded-full font-medium transition-colors mb-3">
                Proceed to Checkout
              </button>
              
              <Link href="/">
                <button className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-full font-medium transition-colors">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}