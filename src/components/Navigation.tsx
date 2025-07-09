
import React, { useState } from 'react';
import { Menu, X, Scissors } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Équipe', href: '/equipe' },
    { name: 'Galerie', href: '/galerie' },
    { name: 'Avis', href: '/avis' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
              <div className="bg-red-600 p-2 rounded">
                <Scissors className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <div>
                <div className="text-white font-black text-lg sm:text-xl tracking-wider">THE BOX</div>
                <div className="text-gray-400 text-xs font-medium tracking-widest">BARBER SHOP</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`transition-colors duration-200 font-medium text-sm xl:text-base ${
                    isActive(item.href)
                      ? 'text-red-500 border-b-2 border-red-500 pb-1'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 xl:px-6 py-2 rounded-md font-semibold transition-colors duration-200 text-sm xl:text-base">
                Prendre RDV
              </button>
            </div>

            {/* Tablet Navigation - Hidden nav items, show only RDV button */}
            <div className="hidden md:flex lg:hidden items-center space-x-4">
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-semibold transition-colors duration-200 text-sm">
                Prendre RDV
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black border-t border-gray-800">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-red-500'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-md font-semibold transition-colors duration-200 mt-4 md:hidden">
                Prendre RDV
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Sticky CTA Button - Mobile only */}
      <button className="fixed bottom-6 right-6 z-40 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-200 hover:scale-105 md:hidden">
        Prendre RDV
      </button>
    </>
  );
};

export default Navigation;
