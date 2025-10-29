import React from 'react';
// src/components/Career/Career.jsx
import CareerHero from './Career/CareerHeroSec';
import CareerJoin from './Career/CareerJoinUs';
import CareerBenefits from './Career/CareerBenefits';
import CareerCurrentOpening from './Career/CareerCurrentOpening';
import CareerFooter from './Career/CareerFooter';

export default function MainCareerFlow() {
  return (
    <div className="bg-gray-50 font-inter">
      <CareerHero />
      <CareerJoin />
      <CareerBenefits />
      <CareerCurrentOpening />
       <CareerFooter /> 
    </div>
  );
}

export { MainCareerFlow };