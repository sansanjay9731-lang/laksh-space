import React from 'react';
import { MapPin, Zap, Users } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=500&fit=crop',
      title: 'Prime Location in Bangalore',
      icon: MapPin,
      points: [
        'Located in the heart of Bangalore business district',
        'Easy access to public transportation and major highways',
        'Close to restaurants, cafes, and essential amenities'
      ]
    },
    {
      image: 'https://images.unsplash.com/photo-1758630737900-a28682c5aa69?w=400&h=500&fit=crop',
      title: 'Flexible Solutions',
      icon: Zap,
      points: [
        'Choose from single seaters to customized offices',
        'Month-to-month or long-term lease options available',
        'Scale up or down based on your business needs'
      ]
    },
    {
      image: 'https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?w=400&h=500&fit=crop',
      title: 'Professional Environment',
      icon: Users,
      points: [
        'Fully furnished and equipped private cabins',
        'High-speed internet and modern amenities',
        'Professional support services to help you succeed'
      ]
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1E5E] mb-4">
            Why Choose Laksh Space?
          </h2>
          <p className="text-lg text-gray-600">
            Professional workspace solutions designed for your success
          </p>
        </div>

        <div className="space-y-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                />
              </div>
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <div className="flex items-center mb-4">
                  <benefit.icon className="w-8 h-8 text-[#FF6B35] mr-3" />
                </div>
                <h3 className="text-3xl font-bold text-[#1A1E5E] mb-6">{benefit.title}</h3>
                <ul className="space-y-4">
                  {benefit.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-[#FF6B35]/10 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-[#FF6B35]"></div>
                      </div>
                      <span className="text-gray-700 text-lg">{point}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-8 bg-[#1A1E5E] hover:bg-[#2a3a7e] text-white">
                  Learn More →
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

import { Button } from './ui/button';

export default Benefits;