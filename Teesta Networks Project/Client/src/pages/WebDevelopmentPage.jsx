import React from 'react';
// Import all section components from their respective files
import { WebDevpHeroSection } from './WebDev/WDHeroSection';
import { WebDevMenuSec } from './WebDev/WebDevMenuSec';
import { WebDevThirdSec } from './WebDev/WebDevThirdSec';
import { WebDevFourSec } from './WebDev/WebDevFourSec';

export default function MainWebDevFlow() {
    return (
        <div className="min-h-screen bg-white">
            < WebDevpHeroSection/>
            < WebDevMenuSec/>
            < WebDevThirdSec/>
            < WebDevFourSec/>
        </div>
    );
};

