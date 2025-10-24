import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Menu, X, ChevronDown, Building2, Users, Briefcase, Home } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const solutionCategories = [
    {
      title: 'Office Space',
      icon: Building2,
      items: [
        { name: 'Single Seater', desc: 'Individual private workspace', units: '10 available' },
        { name: '2 Seater Cabin', desc: 'Perfect for partnerships', units: '4 available' },
        { name: '6 Seater Cabin', desc: 'Growing team space', units: '1 available' }
      ]
    },
    {
      title: 'Custom Offices',
      icon: Home,
      items: [
        { name: 'Customized Office', desc: 'Fully branded workspace', units: '1 available' }
      ]
    },
    {
      title: 'Meeting Rooms',
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
                src="https://customer-assets.emergentagent.com/job_laksh-headquarters/artifacts/rmaboak3_Laksh%20Logo%20%2836%20x%2018%20in%29.png" 
                alt="Laksh Space" 
                className="h-12 w-auto"
              />
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
                
                {/* Regus-Style Mega Dropdown */}
                {solutionsOpen && (
                  <div className="absolute left-0 top-full pt-2 w-[900px]">
                    <div className="bg-white border border-gray-200 rounded-lg shadow-2xl p-8">
                      <div className="grid grid-cols-3 gap-8">
                        {solutionCategories.map((category, index) => (
                          <div key={index} className="space-y-4">
                            {/* Category Header */}
                            <div className="flex items-center space-x-3 pb-3 border-b border-gray-200">
                              <category.icon className="w-6 h-6 text-[#e30613]" strokeWidth={1.5} />
                              <h3 className="font-bold text-black text-lg">{category.title}</h3>
                            </div>
                            
                            {/* Category Items */}
                            <div className="space-y-3">
                              {category.items.map((item, i) => (
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
                          </div>
                        ))}
                      </div>
                      
                      {/* Footer CTA */}
                      <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                        <Link 
                          to="/solutions" 
                          className="inline-block bg-[#e30613] hover:bg-[#c1050f] text-white font-bold px-8 py-3 rounded-md transition-colors"
                        >
                          View All Solutions →
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