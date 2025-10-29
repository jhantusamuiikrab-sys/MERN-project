import React from 'react';

const SzutraThirdSec = () => {
  const imageUrl = "https://www.jdsvaranasi.in/wp-content/uploads/2021/03/Where-Can-I-Buy-Banarasi-Saree-In-Banaras-banner-min-1024x576.jpg"; // Replaced with a placeholder. You'll want to host your image and use its URL here.

  const handleFiftyPercentOffClick = () => {
    // Replace with the actual URL you want to open
    window.open("https://www.szutra.com/", "_blank");
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={imageUrl}
        alt="Festive Favourites"
        className="w-full h-auto object-cover object-center"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-end px-4 md:px-12 text-white">
        <div className="text-right p-4">
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl italic mb-2 md:mb-4 drop-shadow-lg"
              style={{ color: '#cfa866' }}>
            Festive Favourites
          </h2>
          <p
            className="text-lg md:text-xl lg:text-2xl font-sans font-medium cursor-pointer hover:underline drop-shadow-lg"
            style={{ color: '#cfa866' }}
            onClick={handleFiftyPercentOffClick}
          >
            UPTO 50% OFF
          </p>
        </div>
      </div>
    </div>
  );
};

export {SzutraThirdSec};