import React from 'react';
import { Route, Switch } from 'wouter';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import FeaturedProducts from './components/FeaturedProducts';
import Features from './components/Features';
import Footer from './components/Footer';
import Cart from './pages/Cart';

function HomePage() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <FeaturedProducts />
      <Features />
    </>
  );
}

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-gray-900">
        <Header />
        <main>
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </main>
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;