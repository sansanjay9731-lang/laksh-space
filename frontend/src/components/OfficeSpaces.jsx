import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Calendar, Users, Building } from 'lucide-react';
import { mockOfficeSpaces } from '../data/mockData';

const OfficeSpaces = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1E5E] mb-4">
            Flexible Workspace Designed Around Your Needs
          </h2>
          <p className="text-lg text-gray-600">
            Our fully-equipped private cabins are available for as long as you need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockOfficeSpaces.map((space) => (
            <Card key={space.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden h-64">
                <img
                  src={space.image}
                  alt={space.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {space.available && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Available
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-[#1A1E5E] mb-3">{space.title}</h3>
                <p className="text-gray-600 mb-4">{space.description}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-700">
                    <Users className="w-4 h-4 mr-2 text-[#FF6B35]" />
                    <span className="text-sm">{space.capacity}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Calendar className="w-4 h-4 mr-2 text-[#FF6B35]" />
                    <span className="text-sm">{space.term}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Building className="w-4 h-4 mr-2 text-[#FF6B35]" />
                    <span className="text-sm">{space.units} unit(s) available</span>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <Button className="flex-1 bg-[#FF6B35] hover:bg-[#FF5722] text-white">
                    Get a Quote
                  </Button>
                  <Button variant="outline" className="flex-1 border-[#1A1E5E] text-[#1A1E5E] hover:bg-[#1A1E5E] hover:text-white">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Need Help Card */}
        <Card className="mt-12 bg-gradient-to-r from-[#1A1E5E] to-[#2a3a7e] text-white">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Need a Helping Hand?</h3>
                <p className="text-gray-200 mb-4">
                  Arrange a 1:1 call with a professional advisor.
                </p>
                <ul className="space-y-2 text-gray-200">
                  <li>• Expert advice on workspace solutions</li>
                  <li>• Discuss different options</li>
                  <li>• Receive a personalized quote</li>
                  <li>• Sign up and get started</li>
                </ul>
              </div>
              <div className="flex justify-center">
                <Button className="bg-[#FF6B35] hover:bg-[#FF5722] text-white text-lg px-8 py-6">
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