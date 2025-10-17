import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#1A1E5E] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Top bar */}
        <div className="border-b border-white/10 px-4 py-2 hidden md:block">
          <div className="flex justify-end items-center space-x-6 text-sm">
            <a href="tel:+919972235566" className="flex items-center space-x-2 hover:text-[#FF6B35] transition-colors">
              <Phone size={16} />
              <span>+91 9972235566</span>
            </a>
            <a href="mailto:lakshspaceblr@gmail.com" className="flex items-center space-x-2 hover:text-[#FF6B35] transition-colors">
              <Mail size={16} />
              <span>lakshspaceblr@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Main navigation */}
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold">
              <span className="text-white">Laksh</span>
              <span className="text-[#FF6B35]">Space</span>
            </Link>

            {/* Desktop menu */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="hover:text-[#FF6B35] transition-colors font-medium">
                Home
              </Link>
              <Link to="/about" className="hover:text-[#FF6B35] transition-colors font-medium">
                About
              </Link>
              <Link to="/contact" className="hover:text-[#FF6B35] transition-colors font-medium">
                Contact
              </Link>
              <Button className="bg-[#FF6B35] hover:bg-[#FF5722] text-white">
                Get a Quote
              </Button>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 space-y-4">
              <Link 
                to="/" 
                className="block hover:text-[#FF6B35] transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="block hover:text-[#FF6B35] transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="block hover:text-[#FF6B35] transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-2">
                <a href="tel:+919972235566" className="flex items-center space-x-2 mb-2">
                  <Phone size={16} />
                  <span>+91 9972235566</span>
                </a>
                <a href="mailto:lakshspaceblr@gmail.com" className="flex items-center space-x-2">
                  <Mail size={16} />
                  <span>lakshspaceblr@gmail.com</span>
                </a>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;