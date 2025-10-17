import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import QuickActions from '../components/QuickActions';
import OfficeSpaces from '../components/OfficeSpaces';
import Benefits from '../components/Benefits';
import TrustedCompanies from '../components/TrustedCompanies';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <QuickActions />
      <OfficeSpaces />
      <Benefits />
      <TrustedCompanies />
      <Footer />
    </div>
  );
};

export default HomePage;