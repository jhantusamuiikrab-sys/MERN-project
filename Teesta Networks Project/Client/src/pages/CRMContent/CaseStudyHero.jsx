import React from "react";

const PLACEHOLDER_IMG = {
  CASE_STUDY: "https://s7d1.scene7.com/is/image/kyndryl/customer-win-logistics:21x9_Small?qlt=85",
};

const CaseStudyHero = () => (
  <section className="relative bg-white pt-10 pb-16 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Image Container */}
      <div className="relative w-full h-[60vh] sm:h-[70vh] lg:h-screen min-h-[400px] mb-10 rounded-lg overflow-hidden shadow-2xl">
        <img
          src={PLACEHOLDER_IMG.CASE_STUDY}
          alt="Logistics ships at a port"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = PLACEHOLDER_IMG.CASE_STUDY;
          }}
        />

        {/* Floating Metric Box */}
        <div className="absolute right-4 bottom-4 sm:right-6 sm:bottom-6 md:right-8 md:bottom-8 bg-white/95 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-lg shadow-2xl max-w-xs sm:max-w-sm w-[90%] sm:w-auto border border-gray-100">
          <div className="bg-[#cfa866] text-[#1b2e4e] p-3 sm:p-4 mb-4 text-center rounded-md">
            <p className="text-xs sm:text-sm font-light">
              To develop AI-powered customer service assistant prototype
            </p>
            <p className="text-2xl sm:text-3xl font-bold mt-1">5 weeks</p>
          </div>
          <div className="text-left">
            <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#cfa866] leading-snug">
              Up to 95%
            </p>
            <p className="text-[#1b2e4e] mt-2 text-sm sm:text-base leading-relaxed">
              improvement predicted in time needed to respond to customer requests
            </p>
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="relative pt-0 bg-white z-10">
        <div className="max-w-4xl">
          <p className="text-xs sm:text-sm font-semibold uppercase text-[#1b2e4e] mb-3 sm:mb-4">
            Logistics solutions provider
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#cfa866] leading-snug sm:leading-tight mb-4 sm:mb-6">
            GenAI-powered reporting boosts customer service
          </h2>

          <p className="text-base sm:text-lg text-[#1b2e4e] max-w-2xl mb-6 sm:mb-8 leading-relaxed">
            Kyndryl helped a third-party logistics provider develop an AI-powered customer service assistant. 
            The solution enables customer service representatives to use a simple interface to request data 
            in conversational language and receive accurate results in minutes.
          </p>

          <a
            href="/full-story-link-goes-here"
            className="inline-flex items-center text-base sm:text-lg font-semibold text-[#cfa866] hover:text-[#1b2e4e] transition-colors duration-200"
          >
            Read full story &gt;
          </a>
        </div>
      </div>
    </div>
  </section>
);

export { CaseStudyHero };
