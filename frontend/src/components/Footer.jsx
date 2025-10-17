import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 font-aller">
              <span className="text-white">Laksh</span>
              <span className="text-[#e30613]">Space</span>
            </h3>
            <p className="text-[#adb0b2] mb-4 font-aller">
              Professional private office cabins in RT Nagar, Bangalore.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 font-aller">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-[#adb0b2] hover:text-[#e30613] transition-colors font-aller">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#adb0b2] hover:text-[#e30613] transition-colors font-aller">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#adb0b2] hover:text-[#e30613] transition-colors font-aller">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-bold mb-4 font-aller">Our Services</h4>
            <ul className="space-y-3 text-[#adb0b2] font-aller">
              <li>Single Seater Cabins</li>
              <li>2 Seater Cabins</li>
              <li>6 Seater Cabins</li>
              <li>Customized Offices</li>
              <li>Meeting Rooms</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 font-aller">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#e30613] mt-0.5 flex-shrink-0" />
                <a href="tel:+919972235566" className="text-[#adb0b2] hover:text-[#e30613] transition-colors font-aller">
                  +91 9972235566
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#e30613] mt-0.5 flex-shrink-0" />
                <a href="mailto:lakshspaceblr@gmail.com" className="text-[#adb0b2] hover:text-[#e30613] transition-colors break-all font-aller">
                  lakshspaceblr@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#e30613] mt-0.5 flex-shrink-0" />
                <span className="text-[#adb0b2] font-aller">RT Nagar, Bangalore, Karnataka, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-[#adb0b2] font-aller">
          <p>© {new Date().getFullYear()} Laksh Space. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;