import React from 'react';
// Import all section components from their respective files
import { SutraHeroSec } from './Szutra/SutraHeroSec';
import {SzutraSecondSec} from './Szutra/SzutraSecondSec';
import { SzutraThirdSec } from './Szutra/SzutraThirdSec';
import { SzutraForthSec } from './Szutra/SzutraForthSec';


const MainSzutraFlow = () => {
    return (
        <div className="min-h-screen bg-white">
            < SutraHeroSec/>
            < SzutraSecondSec/>
            < SzutraThirdSec/>
            < SzutraForthSec/>
        </div>
    );
};

export default MainSzutraFlow;