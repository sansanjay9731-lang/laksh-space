import React from 'react';
import { Search } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Hero = () => {
  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight font-aller text-black">
              Private Office Cabins.<br />
              <span className="text-[#e30613]">Your Way.</span>
            </h1>
            <p className="text-xl mb-8 text-[#807f83] font-aller">
              From a single desk to customized offices. Professional workspace solutions in RT Nagar, Bangalore.
            </p>
            
            {/* Search bar */}
            <div className="bg-white border-2 border-gray-200 rounded-md p-2 flex items-center space-x-2 max-w-xl shadow-sm">
              <Search className="text-gray-400 ml-2" size={20} />
              <Input
                type="text"
                placeholder="Search for office spaces in Bangalore..."
                className="border-0 focus-visible:ring-0 text-black"
              />
              <Button className="bg-[#e30613] hover:bg-[#c1050f] text-white font-bold">
                Search
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1746021375246-7dc8ab0583f0?w=800&h=600&fit=crop"
              alt="Modern office space"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;