// crmPage.jsx (Updated)

import React from 'react';

// Import all section components from their respective files
import { CRMHeroSection } from './CRMContent/CRMHeroSection';
import { StaticFocusSection } from './CRMContent/StaticFocusSection';
import { InteractiveContentSection } from './CRMContent/InteractiveContentSection';
import { SlidingTeaserSection } from './CRMContent/SlidingTeaserSection';
import { CaseStudyHero } from './CRMContent/CaseStudyHero';

// Removed IMAGES constant and CaseStudyHero component from this file

export default function crmpage() {
    return (
        <div className="min-h-screen bg-white">
            
            {/* 1. Video Hero Section */}
            <CRMHeroSection />
            
            {/* 2. Static Content Section */}
            <StaticFocusSection/>

            {/* 3. Interactive Content Section */}
            <InteractiveContentSection/>

            {/* 4. Case Study Hero Section */}
            <CaseStudyHero />
            {/* 5.Sliding Teaser Section */}
            <SlidingTeaserSection />
        </div>
    );
};

//export { MainContentFlow };