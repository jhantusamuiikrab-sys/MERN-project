import React from 'react';
import './WebDev.css'

const WebDevHeroSection = () => {
  // A placeholder video source. Replace 'your-background-video.mp4' with your actual video path.
  // The video should be loopable and muted for this effect.
  const videoSource = 'https://www.iflexion.com/static/headerSectionVideo-58885f407628f7c67d9b61bc7ffd47da.mp4';

  return (
    <div className="relative min-h-screen bg-white text-gray-800 overflow-hidden">
      {/* --- Custom Video Background Section (T and N Shapes) --- */}
      <div className="absolute top-0 right-0 w-1/2 h-full flex justify-end items-center">
        {/* T Shape Container */}
        <div className="relative w-1/2 h-full mr-4 custom-t-shape">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={videoSource}
            autoPlay
            loop
            muted
            playsInline
          />
          {/* A dark overlay for better text contrast, if needed */}
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>

        {/* N Shape Container */}
        <div className="relative w-1/2 h-full custom-n-shape">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={videoSource}
            autoPlay
            loop
            muted
            playsInline
          />
          {/* A dark overlay for better text contrast, if needed */}
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>
      </div>

      {/* --- Content Overlay Section (Matching the template's left side) --- */}
      <div className="relative container mx-auto px-4 py-20 z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4" style={{ color: "#cfa866" }}>
            Trusted <span className="block">software development company</span>
          </h1>
          <h2 className="text-4xl md:text-5xl font-light mb-8" style={{ color: "#1b2e4e" }}>
            since 1999
          </h2>

          <p className="text-lg mb-12 max-w-xl" style={{ color: "#1b2e4e" }}>
            With 25+ years of experience and 1,000+ professionals on board, we
            combine profound tech knowledge and solid business expertise to
            deliver tailored solutions powering enterprises, SMBs, and startups.
          </p>

          {/* Client Logos Section */}
          <div className="flex flex-wrap items-center space-x-6 mb-4">
            <img src="https://cellmoney.net/siteadmin/images/logo.png" alt="cellmoney" className="h-6 opacity-60 hover:opacity-100 transition duration-300" />
            <img src="https://static.wixstatic.com/media/f80350_6455fc27cd3b49eb990aa25eb4c7cdd4~mv2.png/v1/crop/x_0,y_1,w_1920,h_1078/fill/w_188,h_105,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f80350_6455fc27cd3b49eb990aa25eb4c7cdd4~mv2.png" alt="waiwai" className="h-6 opacity-60 hover:opacity-100 transition duration-300" />
            <img src="https://s7ap1.scene7.com/is/image/tatamotors/logo-new-black?$HL-50-33-D$&fit=fit&fmt=webp-alpha" alt="tatamotors" className="h-6 opacity-60 hover:opacity-100 transition duration-300" />
            <img src="https://www.marutisuzuki.com/adobe/assets/urn:aaid:aem:a56e8c3b-21f2-4297-82d6-bba2413d85be/as/Arena-Logo.svg" alt="marutisuzuki" className="h-6 opacity-60 hover:opacity-100 transition duration-300" />
            <img src="https://www.cyberplat.com/img/title_logo.gif" alt="cyberplat" className="h-6 opacity-60 hover:opacity-100 transition duration-300" />
            <img src="https://www.hitechanimationstudio.com/assets/images/hi-tech/logo.png" alt="hi-tech" className="h-6 opacity-60 hover:opacity-100 transition duration-300" />
            <img src="https://www.big9.co.in/assets/img/Clean-Layered-Logo-Reveal_free-_1__2_.gif" alt="big9" className="h-6 opacity-60 hover:opacity-100 transition duration-300" />
            <img src="https://www.sifytechnologies.com/wp-content/uploads/2022/04/logo_007800781_2166.png" alt="sify" className="h-6 opacity-60 hover:opacity-100 transition duration-300" />

          </div>
          <p className="text-sm" style={{ color: "#1b2e4e" }}>
            800+ customers from startups to Fortune 500 companies
          </p>
        </div>
      </div>

      {/* Optional: Navigation/Header (Placeholder) */}
      <header className="absolute top-0 w-full z-20">
        {/* Add your logo, menu, and Contact Us button here */}
      </header>
    </div>
  );
};

export {WebDevHeroSection};