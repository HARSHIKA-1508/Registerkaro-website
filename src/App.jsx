import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StepsToProcess from './components/StepsToProcess';
import BlogSection from './components/BlogSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import VideoSection from './components/VideoSection';
import FeaturesSection from'./components/FeaturesSection';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <ServicesSection/>
      <AboutSection />
      <TestimonialsSection />
      <VideoSection />
      <FeaturesSection/>
      <StepsToProcess />
      <BlogSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default App;