import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-[#1A1E5E] mb-6">About Laksh Space</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-4">
            Laksh Space is Bangalore's premier provider of private office cabins and meeting spaces. 
            We understand that businesses need flexibility, professionalism, and quality workspace solutions.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Located in the heart of Bangalore, we offer a range of private cabin solutions from single 
            seaters to customized offices, designed to meet the needs of freelancers, startups, and 
            established businesses alike.
          </p>
          <p className="text-lg text-gray-700">
            Our spaces are fully equipped with modern amenities, high-speed internet, and professional 
            support services to help you focus on what matters most - growing your business.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;