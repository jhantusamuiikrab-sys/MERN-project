// HeroVideoSection.jsx

import React from 'react';

// Teaser cards data (kept here as it's tightly coupled with the Hero section)
const videoTeaserCards = [
    { title: 'Kyndryl launches Agentic AI Framework', href: '/ai-framework' },
    { title: 'Moving beyond AI hype', href: '/beyond-ai-hype' },
    { title: 'The AI inflection point', href: '/ai-inflection-point' },
];

const HeroVideoSection = () => (
    <header className="relative h-[100vh] min-h-[500px] overflow-hidden bg-black">
        {/* Background Video */}
        <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="placeholder-image.jpg" 
        >
            <source src="/CRM.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gray-900 opacity-60"></div>

        {/* Main Text Content */}
        <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white pb-32">
            <h1 className="text-5xl text-[#cfa866] md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
                Scale AI you can trust.
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 drop-shadow-lg">
                Achieve results you can prove.
            </h2>
            <p className="text-xl max-w-2xl font-light drop-shadow-lg">
                Lead with confidence and empower your people with trusted, human-centric AI
            </p>
        </div>
        
        {/* Bottom Teaser Cards */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
            <div className="max-w-7xl mx-auto flex">
                {videoTeaserCards.map((card, index) => (
                    <a 
                        key={index} 
                        href={card.href} 
                        className={`flex-1 p-6 text-white hover:bg-gray-700 transition duration-300 cursor-pointer flex justify-between items-start 
                            bg-gray-800 bg-opacity-80
                            ${index > 0 ? 'border-l border-gray-700' : ''}
                        `}
                    >
                        <span className="text-lg font-medium leading-snug">
                            {card.title}
                        </span>
                        <span className="text-xl font-light ml-4">
                            ›
                        </span>
                    </a>
                ))}
            </div>
        </div>
    </header>
);

export {HeroVideoSection};