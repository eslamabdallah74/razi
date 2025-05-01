import React from 'react';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import './i18n/config';

function App() {
  useScrollAnimation();
  
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Header />
      <main className="pt-16">
        <AboutUs />
        <Services />
        <Portfolio />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;