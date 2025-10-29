import React from 'react';
// 🛑 KEEP THIS IMPORT FOR ANIMATION 🛑
import { useInView } from 'react-intersection-observer'; 

import resedentialImage from "../../assets/RealEstateImages/Rosetta-Listing-Image.webp";
import commercialImage from "../../assets/RealEstateImages/Prasad-Square-Listing-Image.webp";
import landplotImage from "../../assets/RealEstateImages/ParadiseLandImage.webp";
const IMAGES = {
    RESIDENTIAL: resedentialImage,
    COMMERCIAL: commercialImage,
    LAND: landplotImage,
};

// --- Card Component (Reusable) ---
// 🛑 ADDED delay PROP, useInView, and CORRECTED LINK ATTRIBUTES 🛑
const FeatureCard = ({ title, imageUrl, link, delay = 0 }) => {
    const { ref, inView } = useInView({
        triggerOnce: true, 
        threshold: 0.1,    
    });

    return (
        <a 
            ref={ref}
            href={link} 
            target="_blank" // ✅ FIX: Opens link in a new tab
            rel="noopener noreferrer" // ✅ FIX: Security best practice
            // ADDED ANIMATION CLASSES and RESPONSIVE SHADOW
            className={`relative block rounded-xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition duration-300 ease-in-out group hover:shadow-2xl
                        ${inView ? 'animate-slide-in' : 'opacity-0'}
            `}
            style={{ animationDelay: `${delay}ms` }}
        >
            {/* Image */}
            <img 
                src={imageUrl} 
                alt={title} 
                // ADDED RESPONSIVE HEIGHT: h-60 on small screens, h-72 on medium/large
                className="w-full h-60 md:h-72 object-cover object-center transition duration-500 group-hover:opacity-90"
            />
            
            {/* Overlay Text Container */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-semibold flex items-center">
                    {title}
                    <span className="ml-2 text-sm">↗</span>
                </h3>
            </div>
        </a>
    );
};
const RealEstateSecond= () => {
  return (
    <div className=" bg-gray-50">
      {/* 2. Feature Cards Section - UPDATED MARGIN AND STAGGERED DELAYS */}
      <section className=" px-4 md:px-8 mt-12 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <FeatureCard 
            title="Residential"
            imageUrl={IMAGES.RESIDENTIAL}
            link={"https://www.510earth.com/Residential"} 
            delay={0} // Stagger
          />
          
          <FeatureCard 
            title="Commercial"
            imageUrl={IMAGES.COMMERCIAL}
            link={"https://www.510earth.com/Commercial"}
            delay={150} // Stagger
          />
          
          <FeatureCard 
            title="Land"
            imageUrl={IMAGES.LAND}
            link={"https://www.510earth.com/Land"}
            delay={300} // Stagger
          />
          
        </div>
      </section>
    </div>
  );
};

export {RealEstateSecond};


