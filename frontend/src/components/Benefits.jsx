import React from 'react';
import { MapPin, Zap, Users } from 'lucide-react';
import { Button } from './ui/button';

const Benefits = () => {
  const benefits = [
    {
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=500&fit=crop',
      title: 'Prime Location in RT Nagar',
      icon: MapPin,
      points: [
        'Located in the heart of RT Nagar, Bangalore business district',
        'Easy access to public transportation and major highways',
        'Close to restaurants, cafes, and essential amenities'
      ]
    },
    {
      image: 'https://images.unsplash.com/photo-1758630737900-a28682c5aa69?w=600&h=500&fit=crop',
      title: 'Flexible Solutions',
      icon: Zap,
      points: [
        'Choose from single seaters to customized offices',
        'Month-to-month or long-term lease options available',
        'Scale up or down based on your business needs'
      ]
    },
    {
      image: 'https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?w=600&h=500&fit=crop',
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
    <div className="py-12 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-4 font-aller">
            Why Choose Laksh Space?
          </h2>
          <p className="text-lg lg:text-xl text-[#807f83] font-aller">
            Professional workspace solutions designed for your success
          </p>
        </div>

        <div className="space-y-12 lg:space-y-20">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`grid md:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="rounded-lg shadow-xl w-full h-64 lg:h-96 object-cover"
                />
              </div>
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <div className="flex items-center mb-4 lg:mb-6">
                  <benefit.icon className="w-8 h-8 lg:w-10 lg:h-10 text-[#46c1be] mr-3" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-black mb-4 lg:mb-6 font-aller">{benefit.title}</h3>
                <ul className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
                  {benefit.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-[#e30613] mt-2 mr-4 flex-shrink-0"></div>
                      <span className="text-[#807f83] text-base lg:text-lg font-aller">{point}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-[#e30613] hover:bg-[#c1050f] text-white font-bold px-6 lg:px-8 py-5 lg:py-6 text-base">
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

export default Benefits;