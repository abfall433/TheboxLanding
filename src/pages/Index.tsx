
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import ServicesPreview from '../components/ServicesPreview';
import TeamPreview from '../components/TeamPreview';
import GalleryPreview from '../components/GalleryPreview';
import ReviewsCarousel from '../components/ReviewsCarousel';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <About />
      <ServicesPreview />
      <TeamPreview />
      <GalleryPreview />
      <ReviewsCarousel />
      <Footer />
    </div>
  );
};

export default Index;
