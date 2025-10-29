import React from 'react';

const technologies = [
  'Java', '.Net', 'JavaScript', 'HTML', 'CSS', 'C#', 
  'MongoDB', 'React', 'Express', 'SQL', 'Java', '.Net', 
  'JavaScript', 'HTML', 'CSS', 'C#', 
  'MongoDB', 'React', 'Express', 'SQL' // Duplicated to ensure seamless loop
];

const WebDevFourSec = () => {
  return (
    <div className="bg-white pt-20 pb-4">
      {/* --- Main Heading --- */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 text-center mb-8">
        <h2 className="text-4xl font-bold" style={{ color: "#cfa866" }}>
          1000+ IT professionals to cover your diverse tech needs
        </h2>
      </div>

      {/* --- Scrolling Marquee Container --- */}
      <div className="bg-[#1b2e4e] overflow-hidden relative w-full py-5 whitespace-nowrap">
        
        {/*
          IMPORTANT: The actual scrolling effect relies on the custom CSS animation 
          defined in the next section. We apply the `animate-marquee` class here.
          
          We repeat the list once within a single container to facilitate the seamless loop.
        */}
        <div className="flex w-[200%] marquee-animation">
          {/* First set of technologies */}
          {technologies.map((tech, index) => (
            <span 
              key={`tech-1-${index}`} 
              className="text-[#cfa866] text-xl font-semibold px-6 inline-flex items-center"
            >
              {tech}
              <span className="w-2 h-2 bg-white rounded-full ml-6 mr-6 flex-shrink-0"></span>
            </span>
          ))}

          {/* Second set of technologies (Repeated content for the seamless loop) */}
          {technologies.map((tech, index) => (
            <span 
              key={`tech-2-${index}`} 
              className="text-[#cfa866] text-xl font-semibold px-6 inline-flex items-center"
            >
              {tech}
              <span className="w-2 h-2 bg-[#cfa866] rounded-full ml-6 mr-6 flex-shrink-0"></span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export { WebDevFourSec };