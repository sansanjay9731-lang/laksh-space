import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1A1E5E] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-white">Laksh</span>
              <span className="text-[#FF6B35]">Space</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Professional private office cabins in the heart of Bangalore.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#FF6B35] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#FF6B35] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#FF6B35] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Single Seater Cabins</li>
              <li>2 Seater Cabins</li>
              <li>6 Seater Cabins</li>
              <li>Customized Offices</li>
              <li>Meeting Rooms</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Phone className="w-5 h-5 text-[#FF6B35] mt-0.5 flex-shrink-0" />
                <a href="tel:+919972235566" className="text-gray-300 hover:text-[#FF6B35] transition-colors">
                  +91 9972235566
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-5 h-5 text-[#FF6B35] mt-0.5 flex-shrink-0" />
                <a href="mailto:lakshspaceblr@gmail.com" className="text-gray-300 hover:text-[#FF6B35] transition-colors break-all">
                  lakshspaceblr@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-[#FF6B35] mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Bangalore, Karnataka, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center text-gray-300">
          <p>© {new Date().getFullYear()} Laksh Space. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;