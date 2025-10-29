import React from 'react';

// Custom rich gold color accent
const ACCENT_GOLD = '#cfa866';
const SutraHeroSec = () => {
    // Custom style for the elegant main title text
    const titleStyle = {
        fontFamily: 'Playfair Display, Georgia, serif', 
        //textShadow: '0 0 10px rgba(0, 0, 0, 0.9)',
        color: ACCENT_GOLD,
    };

    return (
        // Set the main container to w-screen h-screen to ensure the video covers the full viewport
        <header className="relative w-screen h-screen min-h-[600px] overflow-hidden bg-black">
            
            {/* Background Video - Using object-cover to ensure no edge is visible */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                poster="placeholder-image.jpg" 
                // Added key to force remount/reload if video issues persist
                key="szutra-hero-video"
            >
                <source src="/SzutraFullVideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black opacity-40"></div> {/* Slightly darker overlay for dramatic contrast */}

            {/* Main Text Content (Centered) */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ color: "#cfa866" }}>                
                
                <h2 className="text-xl sm:text-2xl font-light tracking-widest uppercase mb-4 drop-shadow-md text-[#FFFF]">
                    Masterpieces Woven by SZUTRA
                </h2>               
                
                <h1 
                    className="text-6xl sm:text-8xl md:text-9xl font-bold leading-none mb-6 drop-shadow-lg"
                    style={titleStyle}
                >
                    The Zari Legacy
                </h1>                
                <p className="text-xl sm:text-xl max-w-3xl font-light drop-shadow-md mb-12 text-[#FFFF]">
                    Opulent threads. Modern silhouettes. Elevate your style with genuine Zari.
                </p>                
                <a
                    href="https://www.szutra.com/" // Set your destination URL here
                    target="_blank" // This ensures the link opens in a new tab
                    rel="noopener noreferrer" // Security best practice for target="_blank"
                    className={`
                        text-black font-semibold py-3 px-10 rounded-full shadow-xl 
                        uppercase tracking-wider transition duration-300 ease-in-out
                        hover:scale-105 transform active:scale-95 border-2 border-transparent hover:border-white
                        focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50
                        inline-flex items-center justify-center 
                    `}
                    style={{ backgroundColor: ACCENT_GOLD }} 
                    aria-label="Shop our new Zari collection now"
                >
                    Explore Collection
                </a>
            </div>
        </header>
    );
};

export {SutraHeroSec} ;
