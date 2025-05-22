
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-flamingo-dark font-bold text-2xl">Flamingos</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-natural-brown hover:text-flamingo-dark transition-colors">Inicio</a>
          <a href="#about" className="text-natural-brown hover:text-flamingo-dark transition-colors">Acerca de</a>
          <a href="#species" className="text-natural-brown hover:text-flamingo-dark transition-colors">Especies</a>
          <a href="#gallery" className="text-natural-brown hover:text-flamingo-dark transition-colors">Galería</a>
          <a href="#conservation" className="text-natural-brown hover:text-flamingo-dark transition-colors">Conservación</a>
        </div>
        <div className="md:hidden">
          <button className="text-natural-brown hover:text-flamingo-dark">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
