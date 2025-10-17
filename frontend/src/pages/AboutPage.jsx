import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold text-black mb-8 font-aller">About Laksh Space</h1>
        <div className="prose max-w-none">
          <p className="text-xl text-[#807f83] mb-6 font-aller leading-relaxed">
            Laksh Space is RT Nagar, Bangalore's premier provider of private office cabins and meeting spaces. 
            We understand that businesses need flexibility, professionalism, and quality workspace solutions.
          </p>
          <p className="text-xl text-[#807f83] mb-6 font-aller leading-relaxed">
            Located in the heart of RT Nagar, Bangalore, we offer a range of private cabin solutions from single 
            seaters to customized offices, designed to meet the needs of freelancers, startups, and 
            established businesses alike.
          </p>
          <p className="text-xl text-[#807f83] font-aller leading-relaxed">
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