import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Menu, X, ChevronDown, Building2, Users, Briefcase, Home } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navigationItems = [
    {
      id: 'office-space',
      label: 'Office Space',
      icon: Building2,
      items: [
        { name: 'Single Seater', desc: 'Individual private workspace', units: '10 available' },
        { name: '2 Seater Cabin', desc: 'Perfect for partnerships', units: '4 available' },
        { name: '6 Seater Cabin', desc: 'Growing team space', units: '1 available' }
      ]
    },
    {
      id: 'custom-offices',
      label: 'Custom Offices',
      icon: Home,
      items: [
        { name: 'Customized Office', desc: 'Fully branded workspace', units: '1 available' }
      ]
    },
    {
      id: 'meeting-rooms',
      label: 'Meeting Rooms',
      icon: Users,
      items: [
        { name: 'Meeting Room', desc: 'Professional meeting space (6-8 capacity)', units: '1 available' }
      ]
    }
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
            <Link to="/" className="flex items-center">
              <img 
                src="/laksh-logo.png" 
                alt="Laksh Space" 
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop menu */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="hover:text-[#e30613] transition-colors font-medium text-black">
                Home
              </Link>
              
              {/* Navigation Items with Individual Dropdowns */}
              {navigationItems.map((navItem) => (
                <div 
                  key={navItem.id}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(navItem.id)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center space-x-2 hover:text-[#e30613] transition-colors font-medium text-black">
                    <navItem.icon size={18} strokeWidth={1.5} />
                    <span>{navItem.label}</span>
                    <ChevronDown size={16} className={`transform transition-transform ${activeDropdown === navItem.id ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Individual Dropdown for each nav item */}
                  {activeDropdown === navItem.id && (
                    <div className="absolute left-0 top-full pt-2 w-[400px] z-50">
                      <div className="bg-white border border-gray-200 rounded-lg shadow-2xl p-6">
                        <div className="flex items-center space-x-3 pb-4 border-b border-gray-200 mb-4">
                          <navItem.icon className="w-6 h-6 text-[#e30613]" strokeWidth={1.5} />
                          <h3 className="font-bold text-black text-lg">{navItem.label}</h3>
                        </div>
                        
                        <div className="space-y-3">
                          {navItem.items.map((item, i) => (
                            <Link
                              key={i}
                              to="/solutions"
                              className="block p-3 rounded-md hover:bg-gray-50 transition-colors group/item"
                            >
                              <h4 className="font-bold text-black group-hover/item:text-[#e30613] transition-colors mb-1">
                                {item.name}
                              </h4>
                              <p className="text-sm text-[#807f83] mb-1">{item.desc}</p>
                              <p className="text-xs text-[#46c1be] font-semibold">{item.units}</p>
                            </Link>
                          ))}
                        </div>
                        
                        <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                          <Link 
                            to="/solutions" 
                            className="inline-block bg-[#e30613] hover:bg-[#c1050f] text-white font-bold px-6 py-2 rounded-md transition-colors text-sm"
                          >
                            View All {navItem.label} →
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
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
              
              {navigationItems.map((navItem) => (
                <div key={navItem.id}>
                  <Link 
                    to="/solutions" 
                    className="block hover:text-[#e30613] transition-colors font-medium text-black"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {navItem.label}
                  </Link>
                </div>
              ))}
              
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