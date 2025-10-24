import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Calendar, Users, Building } from 'lucide-react';
import { mockOfficeSpaces } from '../data/mockData';

const OfficeSpaces = () => {
  return (
    <div className="bg-[#f5f5f5] py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-4 font-aller">
            Flexible Workspace Designed Around Your Needs
          </h2>
          <p className="text-lg lg:text-xl text-[#807f83] font-aller max-w-3xl mx-auto">
            Our fully-equipped private cabins are available for as long as you need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {mockOfficeSpaces.map((space) => (
            <Card key={space.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group bg-white border-0 flex flex-col">
              <div className="relative overflow-hidden h-48 lg:h-64">
                <img
                  src={space.image}
                  alt={space.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {space.available && (
                  <div className="absolute top-4 right-4 bg-[#46c1be] text-white px-3 py-1 rounded-sm text-sm font-bold">
                    Available
                  </div>
                )}
              </div>
              <CardContent className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl lg:text-2xl font-bold text-black mb-3 font-aller">{space.title}</h3>
                <p className="text-[#807f83] mb-6 font-aller flex-1">{space.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-[#807f83]">
                    <Users className="w-4 h-4 mr-2 text-[#46c1be] flex-shrink-0" strokeWidth={2} />
                    <span className="text-sm font-aller">{space.capacity}</span>
                  </div>
                  <div className="flex items-center text-[#807f83]">
                    <Calendar className="w-4 h-4 mr-2 text-[#46c1be] flex-shrink-0" strokeWidth={2} />
                    <span className="text-sm font-aller">{space.term}</span>
                  </div>
                  <div className="flex items-center text-[#807f83]">
                    <Building className="w-4 h-4 mr-2 text-[#46c1be] flex-shrink-0" strokeWidth={2} />
                    <span className="text-sm font-aller">{space.units} unit(s) available</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="flex-1 bg-[#e30613] hover:bg-[#c1050f] text-white font-bold">
                    Get a Quote
                  </Button>
                  <Button variant="outline" className="flex-1 border-2 border-black text-black hover:bg-black hover:text-white font-bold">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Need Help Card */}
        <Card className="mt-12 lg:mt-16 bg-white border-0 shadow-xl">
          <CardContent className="p-8 lg:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-black font-aller">Need a Helping Hand?</h3>
                <p className="text-[#807f83] mb-6 font-aller text-base lg:text-lg">
                  Arrange a 1:1 call with a professional advisor.
                </p>
                <ul className="space-y-3 text-[#807f83] font-aller">
                  <li className="flex items-start">
                    <span className="text-[#e30613] mr-2 font-bold">•</span>
                    Expert advice on workspace solutions
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#e30613] mr-2 font-bold">•</span>
                    Discuss different options
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#e30613] mr-2 font-bold">•</span>
                    Receive a personalized quote
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#e30613] mr-2 font-bold">•</span>
                    Sign up and get started
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <Button className="bg-[#e30613] hover:bg-[#c1050f] text-white text-base lg:text-lg px-8 lg:px-10 py-6 lg:py-7 font-bold w-full md:w-auto">
                  Talk to an Expert
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OfficeSpaces;