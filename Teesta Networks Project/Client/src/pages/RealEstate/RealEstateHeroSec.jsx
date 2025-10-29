import React from 'react';
// 🛑 KEEP THIS IMPORT FOR ANIMATION 🛑
import { useInView } from 'react-intersection-observer'; 

import heroImage from "../../assets/RealEstateImages/Realestatebnr.png";
const IMAGES = {
    HERO: heroImage
};

// --- Main Page Component ---
const RealEstateHeroSec = () => {
     
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* 1. Hero/Banner Section - Text Overlay Updated for Left Alignment */}
      <section className="relative h-screen w-full">
        {/* Image */}
        <img 
          src={IMAGES.HERO} 
          alt="Modern interior of a real estate property"
          className="w-full h-full object-cover object-center"
        />
        
        {/* 🛑 UPDATED TEXT OVERLAY CONTAINER 🛑 */}
        {/* - items-start: Aligns items to the left (start of the column axis)
            - justify-center: Keeps the text vertically centered (you can adjust this to 'end' if you want it strictly at the bottom)
            - max-w-7xl: Limits the width of the container
            - px-4 md:px-12: Adds left/right padding
        */}
        <div className="absolute inset-0 flex flex-col items-start justify-center max-w-7xl mx-auto px-4 md:px-12">
    {/* Title */}
    <h1 
        className="text-2xl md:text-4xl lg:text-3xl font-bold text-[#cfa866] mb-2"
        style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }} 
    >
        Real Estate
    </h1>
    
    {/* Subheading */}
    <p 
        className="text-lg md:text-xl lg:text-1xl text-[#cfa866] max-w-lg md:max-w-1xl"
        style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }} 
    >
        510earth, a Teesta Networks brand, is a top real estate consultancy in India offering residential, commercial, and land deals with trusted builders.
    </p>
</div>
      </section>
</div>
);
};

export {RealEstateHeroSec};