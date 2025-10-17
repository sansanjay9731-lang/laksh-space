import React from 'react';
import { Search } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#1A1E5E] to-[#2a3a7e] text-white">
      <div className="max-w-7xl mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Private Office Cabins<br />
              <span className="text-[#FF6B35]">Your Way.</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              From a single desk to customized offices. Professional workspace solutions in the heart of Bangalore.
            </p>
            
            {/* Search bar */}
            <div className="bg-white rounded-lg p-2 flex items-center space-x-2 max-w-xl">
              <Search className="text-gray-400 ml-2" size={20} />
              <Input
                type="text"
                placeholder="Search for office spaces in Bangalore..."
                className="border-0 focus-visible:ring-0 text-gray-900"
              />
              <Button className="bg-[#FF6B35] hover:bg-[#FF5722] text-white">
                Search
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1746021375246-7dc8ab0583f0?w=800&h=600&fit=crop"
              alt="Modern office space"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;