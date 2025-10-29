import React from 'react';
import { TPlusHero } from './TPlus/TPlusHero';
import { TPlusSecond } from './TPlus/TPlusSecond';
import { TPlusThird } from './TPlus/TPlusThird';
import { TPlusForth } from './TPlus/TPlusForth';

export default function TorshaFlow() {
  return (
    <div className="bg-gray-50 font-inter">
      <TPlusHero />
      <TPlusSecond />
      <TPlusThird />
      <TPlusForth/>
    </div>
  );
}
export { TorshaFlow };