import React from 'react';
import { Search } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Hero = () => {
  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6 leading-tight font-aller text-black">
              Private Office Cabins.<br />
              <span className="text-[#e30613]">Your Way.</span>
            </h1>
            <p className="text-lg lg:text-xl mb-6 lg:mb-8 text-[#807f83] font-aller">
              From a single desk to customized offices. Professional workspace solutions in RT Nagar, Bangalore.
            </p>
            
            {/* Search bar */}
            <div className="bg-white border-2 border-gray-200 rounded-md p-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 max-w-xl shadow-sm">
              <div className="flex items-center flex-1">
                <Search className="text-gray-400 ml-2" size={20} />
                <Input
                  type="text"
                  placeholder="Search for office spaces in Bangalore..."
                  className="border-0 focus-visible:ring-0 text-black"
                />
              </div>
              <Button className="bg-[#e30613] hover:bg-[#c1050f] text-white font-bold w-full sm:w-auto">
                Search
              </Button>
            </div>
          </div>
          
          <div className="relative mt-8 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1746021375246-7dc8ab0583f0?w=800&h=600&fit=crop"
              alt="Modern office space"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;