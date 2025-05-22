
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-lagoon-light to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-natural-brown mb-4">
              El Maravilloso Mundo de los <span className="text-flamingo-dark">Flamencos</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Descubre la elegancia y belleza de estas fascinantes aves conocidas por su distintivo color rosa y su singular forma de vida.
            </p>
            <div className="flex space-x-4">
              <Button className="bg-flamingo-pink hover:bg-flamingo-dark text-white">
                Descubrir Más
              </Button>
              <Button variant="outline" className="border-flamingo-pink text-flamingo-dark hover:bg-flamingo-light">
                Ver Galería
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute -inset-1 bg-flamingo-pink/20 rounded-full blur-xl animate-float"></div>
              <img 
                src="https://images.unsplash.com/photo-1572503618307-c481c9383f20?q=80&w=1000&auto=format&fit=crop" 
                alt="Flamencos rosa en el agua" 
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
