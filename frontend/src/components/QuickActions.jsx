import React from 'react';
import { Building2, Users, Phone, Calendar } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const QuickActions = () => {
  const actions = [
    {
      icon: Building2,
      title: 'Our Solutions',
      description: 'Browse our range of office spaces',
      action: 'View All'
    },
    {
      icon: Phone,
      title: 'Talk to Us',
      description: 'Get advice from our experts',
      action: 'Contact Now'
    },
    {
      icon: Calendar,
      title: 'Book a Tour',
      description: 'Visit our office spaces',
      action: 'Schedule Visit'
    },
    {
      icon: Users,
      title: 'Get a Quote',
      description: 'Request personalized pricing',
      action: 'Get Quote'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {actions.map((action, index) => (
          <Card 
            key={index} 
            className="hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200 hover:border-[#e30613] group bg-white"
          >
            <CardContent className="p-6 lg:p-8 text-center">
              <action.icon className="w-12 h-12 text-[#46c1be] mb-4 group-hover:text-[#e30613] transition-colors mx-auto" strokeWidth={1.5} />
              <h3 className="text-lg font-bold text-black mb-2 font-aller">{action.title}</h3>
              <p className="text-[#807f83] text-sm mb-4 font-aller">{action.description}</p>
              <div className="text-[#e30613] font-bold text-sm group-hover:underline font-aller">
                {action.action} →
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;