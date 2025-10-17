import React from 'react';

const TrustedCompanies = () => {
  const companies = [
    { name: 'Tech Startups', logo: 'https://via.placeholder.com/150x50/000000/FFFFFF?text=TechCorp' },
    { name: 'Financial Services', logo: 'https://via.placeholder.com/150x50/000000/FFFFFF?text=FinServe' },
    { name: 'Consulting Firms', logo: 'https://via.placeholder.com/150x50/000000/FFFFFF?text=Consultants' },
    { name: 'Marketing Agencies', logo: 'https://via.placeholder.com/150x50/000000/FFFFFF?text=Marketing' },
    { name: 'IT Companies', logo: 'https://via.placeholder.com/150x50/000000/FFFFFF?text=ITSolutions' },
    { name: 'Design Studios', logo: 'https://via.placeholder.com/150x50/000000/FFFFFF?text=DesignCo' }
  ];

  return (
    <div className="bg-[#f5f5f5] py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-black text-center mb-16 font-aller">
          Trusted by Professionals Across Industries
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {companies.map((company, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center p-6 bg-white rounded-md shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="max-w-full h-auto grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedCompanies;