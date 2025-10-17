import React from 'react';

const TrustedCompanies = () => {
  const companies = [
    { name: 'Tech Startups', logo: 'https://via.placeholder.com/150x50/1A1E5E/FFFFFF?text=TechCorp' },
    { name: 'Financial Services', logo: 'https://via.placeholder.com/150x50/1A1E5E/FFFFFF?text=FinServe' },
    { name: 'Consulting Firms', logo: 'https://via.placeholder.com/150x50/1A1E5E/FFFFFF?text=Consultants' },
    { name: 'Marketing Agencies', logo: 'https://via.placeholder.com/150x50/1A1E5E/FFFFFF?text=Marketing' },
    { name: 'IT Companies', logo: 'https://via.placeholder.com/150x50/1A1E5E/FFFFFF?text=ITSolutions' },
    { name: 'Design Studios', logo: 'https://via.placeholder.com/150x50/1A1E5E/FFFFFF?text=DesignCo' }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#1A1E5E] text-center mb-12">
          Trusted by Professionals Across Industries
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {companies.map((company, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="max-w-full h-auto opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedCompanies;