import React, { useRef } from "react";

// --- IMAGE PLACEHOLDERS ---
const PLACEHOLDER_IMG = {
  AI_BASE:
    "https://s7d1.scene7.com/is/image/kyndryl/v_1kyndryl-wired-16x9?qlt=85&wid=1600&dpr=on,2",
  BRAIN_HYPE:
    "https://s7d1.scene7.com/is/image/kyndryl/working-on-cell-tower?qlt=85&wid=1600&dpr=on,2",
  TOWER_MAN:
    "https://s7d1.scene7.com/is/image/kyndryl/ai-healthcare-v1-16x9?qlt=85&wid=1600&dpr=on,2",
};

// --- CARD DATA ---
const teaserCardsData = [
  {
    title: "Shepherding change to build a strong foundation for generative AI",
    href: "https://s7d1.scene7.com/is/image/kyndryl/v_1kyndryl-wired-16x9?qlt=85&wid=1600&dpr=on,2",
    imgSrc: PLACEHOLDER_IMG.AI_BASE,
  },
  {
    title: "Moving beyond the hype",
    href: "https://s7d1.scene7.com/is/image/kyndryl/working-on-cell-tower?qlt=85&wid=1600&dpr=on,2",
    imgSrc: PLACEHOLDER_IMG.BRAIN_HYPE,
  },
  {
    title: "ROI on the prize: How to drive outcomes with generative AI",
    href: "https://s7d1.scene7.com/is/image/kyndryl/ai-healthcare-v1-16x9?qlt=85&wid=1600&dpr=on,2",
    imgSrc: PLACEHOLDER_IMG.TOWER_MAN,
  },
  {
    title: "The future of AI in hybrid cloud",
    href: "https://example.com/hybrid-cloud",
    imgSrc: PLACEHOLDER_IMG.TOWER_MAN,
  },
  {
    title: "Ethical AI: Principles and practice",
    href: "https://example.com/ethical-ai",
    imgSrc: PLACEHOLDER_IMG.BRAIN_HYPE,
  },
  {
    title: "Accelerating data modernization",
    href: "https://example.com/data-mod",
    imgSrc: PLACEHOLDER_IMG.AI_BASE,
  },
];

// --- SCROLL ARROW COMPONENT ---
const Arrow = ({ direction, onClick, label, visible }) => {
  if (!visible) return null;
  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full text-gray-700 bg-white shadow-lg border border-gray-200 hover:text-[#cfa866] hover:bg-gray-50 transition duration-150 z-20 ${
        direction === "left" ? "left-0 ml-2 sm:ml-4" : "right-0 mr-2 sm:mr-4"
      }`}
      aria-label={label}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 sm:h-8 sm:w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        {direction === "left" ? (
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        )}
      </svg>
    </button>
  );
};

// --- MAIN COMPONENT ---
const SlidingTeaserSection = () => {
  const scrollRef = useRef(null);
  const scrollDistance = 350;

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft +=
        direction === "left" ? -scrollDistance : scrollDistance;
    }
  };

  return (
    <>
      {/* Hide scrollbar globally */}
      <style jsx="true">{`
        .hide-native-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-native-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <section
        className="py-16 sm:py-20 bg-white relative"
        id="rethink-ai-series"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#cfa866] mb-8 sm:mb-10">
            What we’re thinking about AI transformation
          </h2>

          <div className="relative">
            {/* Left Arrow (hidden on mobile) */}
            <Arrow
              direction="left"
              onClick={() => scroll("left")}
              label="Scroll Left"
              visible={typeof window !== "undefined" && window.innerWidth > 640}
            />

            {/* Scrollable Container */}
            <div
              ref={scrollRef}
              className="flex space-x-4 sm:space-x-6 overflow-x-auto hide-native-scrollbar snap-x snap-mandatory pb-4"
              style={{ scrollBehavior: "smooth" }}
            >
              {teaserCardsData.map((card, index) => (
                <a
                  key={index}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-[80%] sm:w-72 md:w-80 lg:w-96 snap-start group"
                >
                  <div className="p-4 sm:p-5 bg-white border border-[#cfa866] rounded-lg shadow-md hover:shadow-xl transition duration-300 h-full flex flex-col justify-between">
                    {/* Card Title */}
                    <h3 className="text-lg sm:text-xl font-semibold text-[#1b2e4e] leading-snug mb-3 group-hover:text-[#cfa866] transition-colors duration-150">
                      {card.title}
                    </h3>

                    {/* Image */}
                    <div className="h-40 sm:h-48 md:h-56 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                      <img
                        src={card.imgSrc}
                        alt={card.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://placehold.co/384x192/E5E7EB/6B7280?text=AI+Insights";
                        }}
                      />
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Right Arrow (hidden on mobile) */}
            <Arrow
              direction="right"
              onClick={() => scroll("right")}
              label="Scroll Right"
              visible={typeof window !== "undefined" && window.innerWidth > 640}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export { SlidingTeaserSection };
