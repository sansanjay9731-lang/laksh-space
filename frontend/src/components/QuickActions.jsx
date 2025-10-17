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
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {actions.map((action, index) => (
          <Card 
            key={index} 
            className="hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-[#FF6B35] group"
          >
            <CardContent className="p-6">
              <action.icon className="w-12 h-12 text-[#1A1E5E] mb-4 group-hover:text-[#FF6B35] transition-colors" />
              <h3 className="text-lg font-semibold text-[#1A1E5E] mb-2">{action.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{action.description}</p>
              <div className="text-[#FF6B35] font-medium text-sm group-hover:underline">
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