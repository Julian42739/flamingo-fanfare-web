
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Species from '@/components/Species';
import Gallery from '@/components/Gallery';
import Conservation from '@/components/Conservation';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Species />
      <Gallery />
      <Conservation />
      <Footer />
    </div>
  );
};

export default Index;
