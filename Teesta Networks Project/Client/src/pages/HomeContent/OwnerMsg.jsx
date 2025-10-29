import React from 'react';
import dictimg from '../../assets/Images/DirectorImage.webp'
const OwnerMsg = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 font-sans">
      <div className="max-w-4xl w-full bg-white rounded-lg flex flex-col md:flex-row items-center">
        
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 flex-shrink-0">
          <img 
            src={dictimg} // Using a URL for simplicity, you can use a local import
            alt="Portrait of Ranadip Bose" 
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-2/3 p-8 md:p-12 flex flex-col items-start">
          <blockquote className="relative text-gray-800 text-lg md:text-xl font-medium leading-relaxed mb-6 pb-12">
            {/* Giant opening quote in the background */}
            <span 
              className="absolute -top-6 -left-8 text-8xl text-gray-100 font-serif z-0" 
              aria-hidden="true"
            >
              “
            </span>
            
            {/* The actual quote text */}
            <span className="relative z-10">
              Universities must push the boundaries of research and <strong className="font-bold">corporates</strong> must push the boundaries of execution. Together, we must create impact — not just in markets but in the very fabric of our own <strong className="font-bold">Indian society</strong>
            </span>

            {/* Custom quote graphic at the end */}
            <div className="quote-graphic absolute bottom-2 right-0 w-48 h-12"></div>
          </blockquote>

          <div className="text-left">
            <p className="font-bold text-gray-900 text-base">Ranadip Bose</p>
            <p className="text-gray-500 text-sm">Director, i-KRAB e-sol Pvt. Ltd.</p>
          </div>
          <a 
            href="#" 
            className="mt-6 py-2 px-6 border border-gray-300 text-gray-700 font-semibold rounded-md hover:bg-gray-50 transition-colors duration-200"
          >
            View Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default OwnerMsg;