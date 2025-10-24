import React from 'react';
import { Cpu, TrendingUp, Users, Megaphone, Code, Palette } from 'lucide-react';

const TrustedCompanies = () => {
  const companies = [
    { name: 'Tech Startups', icon: Cpu },
    { name: 'Financial Services', icon: TrendingUp },
    { name: 'Consulting Firms', icon: Users },
    { name: 'Marketing Agencies', icon: Megaphone },
    { name: 'IT Companies', icon: Code },
    { name: 'Design Studios', icon: Palette }
  ];

  return (
    <div className="bg-[#f5f5f5] py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-black text-center mb-12 lg:mb-16 font-aller">
          Trusted by Professionals Across Industries
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          {companies.map((company, index) => {
            const IconComponent = company.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center p-6 bg-white rounded-md shadow-sm hover:shadow-lg transition-shadow border border-gray-100 group cursor-pointer"
              >
                <IconComponent className="w-12 h-12 text-[#807f83] group-hover:text-[#e30613] transition-colors mb-3" strokeWidth={1.5} />
                <p className="text-xs font-semibold text-black text-center font-aller">{company.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TrustedCompanies;