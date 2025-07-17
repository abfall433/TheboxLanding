
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, Facebook, Search, User, ShoppingBag, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Équipe', path: '/equipe' },
    { name: 'Galerie', path: '/galerie' },
    { name: 'Avis', path: '/avis' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      {/* Main Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isHomePage 
          ? (isScrolled ? 'top-0 bg-black/95 backdrop-blur-sm' : 'bg-transparent')
          : 'top-0 bg-black/95 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Social Icons - Left */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                 className="text-white hover:text-box-red transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                 className="text-white hover:text-box-red transition-colors duration-200">
                <Facebook size={20} />
              </a>
            </div>

            {/* Logo - Center */}
            <div className="flex-1 flex justify-center">
              <Link to="/" className="text-center">
                <div className="text-white font-display text-2xl font-bold tracking-wider">
                  THE BOX
                </div>
                <div className="w-16 h-0.5 bg-box-red mx-auto mt-1"></div>
              </Link>
            </div>

            {/* Action Icons - Right */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-white hover:text-box-red transition-colors duration-200">
                <Search size={20} />
              </button>
              <button className="text-white hover:text-box-red transition-colors duration-200">
                <User size={20} />
              </button>
              <button className="text-white hover:text-box-red transition-colors duration-200">
                <ShoppingBag size={20} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-box-red transition-colors duration-200"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex items-center justify-center py-4 border-t border-white/10">
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-white hover:text-box-red transition-colors duration-200 font-medium tracking-wide ${
                    location.pathname === item.path ? 'text-box-red' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-white hover:text-box-red transition-colors duration-200 font-medium ${
                    location.pathname === item.path ? 'text-box-red' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-white/10">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                   className="text-white hover:text-box-red transition-colors duration-200">
                  <Instagram size={20} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                   className="text-white hover:text-box-red transition-colors duration-200">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
