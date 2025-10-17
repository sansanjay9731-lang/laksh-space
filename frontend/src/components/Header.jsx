import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const solutions = [
    { name: 'Private Offices', icon: '🏢', desc: 'Ready-to-use offices for teams' },
    { name: 'Custom Offices', icon: '✨', desc: 'Customized to your brand' },
    { name: 'Meeting Rooms', icon: '📋', desc: 'Professional meeting spaces' },
    { name: 'Single Seater', icon: '👤', desc: 'Individual workspace' },
    { name: '2 Seater Cabin', icon: '👥', desc: 'Perfect for small teams' },
    { name: '6 Seater Cabin', icon: '👨‍👩‍👧‍👦', desc: 'Growing team spaces' }
  ];

  return (
    <header className="bg-white text-black shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        {/* Top bar */}
        <div className="border-b border-gray-200 px-4 py-2 hidden md:block bg-gray-50">
          <div className="flex justify-end items-center space-x-6 text-sm text-gray-700">
            <a href="tel:+919972235566" className="flex items-center space-x-2 hover:text-[#e30613] transition-colors">
              <Phone size={16} />
              <span>+91 9972235566</span>
            </a>
            <a href="mailto:lakshspaceblr@gmail.com" className="flex items-center space-x-2 hover:text-[#e30613] transition-colors">
              <Mail size={16} />
              <span>lakshspaceblr@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Main navigation */}
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold font-aller">
              <span className="text-black">Laksh</span>
              <span className="text-[#e30613]">Space</span>
            </Link>

            {/* Desktop menu */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="hover:text-[#e30613] transition-colors font-medium text-black">
                Home
              </Link>
              
              {/* Solutions Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                <button className="flex items-center space-x-1 hover:text-[#e30613] transition-colors font-medium text-black">
                  <span>Solutions</span>
                  <ChevronDown size={16} className={`transform transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Mega Dropdown */}
                {solutionsOpen && (
                  <div className="absolute left-0 top-full pt-2 w-[600px]">
                    <div className="bg-white border border-gray-200 rounded-lg shadow-2xl p-6">
                      <h3 className="text-sm font-bold text-[#807f83] uppercase mb-4">Our Solutions</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {solutions.map((solution, index) => (
                          <Link
                            key={index}
                            to="/solutions"
                            className="flex items-start space-x-3 p-3 rounded-md hover:bg-gray-50 transition-colors group/item"
                          >
                            <span className="text-2xl">{solution.icon}</span>
                            <div>
                              <h4 className="font-bold text-black group-hover/item:text-[#e30613] transition-colors">
                                {solution.name}
                              </h4>
                              <p className="text-sm text-[#807f83]">{solution.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <Link 
                          to="/solutions" 
                          className="text-[#e30613] font-bold hover:underline"
                        >
                          View all solutions →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <Link to="/about" className="hover:text-[#e30613] transition-colors font-medium text-black">
                About
              </Link>
              <Link to="/contact" className="hover:text-[#e30613] transition-colors font-medium text-black">
                Contact
              </Link>
              <Button className="bg-[#e30613] hover:bg-[#c1050f] text-white font-bold rounded-md">
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
                className="block hover:text-[#e30613] transition-colors font-medium text-black"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/solutions" 
                className="block hover:text-[#e30613] transition-colors font-medium text-black"
                onClick={() => setMobileMenuOpen(false)}
              >
                Solutions
              </Link>
              <Link 
                to="/about" 
                className="block hover:text-[#e30613] transition-colors font-medium text-black"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="block hover:text-[#e30613] transition-colors font-medium text-black"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-2 border-t border-gray-200">
                <a href="tel:+919972235566" className="flex items-center space-x-2 mb-2 text-gray-700">
                  <Phone size={16} />
                  <span>+91 9972235566</span>
                </a>
                <a href="mailto:lakshspaceblr@gmail.com" className="flex items-center space-x-2 text-gray-700">
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