import React from 'react';
import { RealEstateHeroSec } from './RealEstate/RealEstateHeroSec';
import { RealEstateSecond } from './RealEstate/RealEstateSecondSec';
import { RealEstateThird } from './RealEstate/RealEstateThird';

export default function MainRealEstateFlow() {
  return (
    <div className="bg-gray-50 font-inter">
      <RealEstateHeroSec />
      <RealEstateSecond />
      <RealEstateThird />
    </div>
  );
}

export { MainRealEstateFlow };