// StaticFocusSection.jsx
import React from "react";
import { motion } from "framer-motion";

const focusCards = [
  {
    title: "Accelerate beyond efficiency",
    description: "unlock transformational value",
    href: "#accelerate",
  },
  {
    title: "From idea to impact",
    description: "one sprint at a time",
    href: "#idea-to-impact",
  },
  {
    title: "Future-ready by design",
    description: "intelligent architectures for a dynamic world",
    href: "#future-ready",
  },
  {
    title: "People at the center",
    description: "intelligence at their side",
    href: "#people-center",
  },
];

const StaticFocusSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-white text-[#1b2e4e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Main Headline */}
        <div className="mb-16 max-w-5xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-[#cfa866]">
            Turn AI ambition into impact.
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl font-normal text-[#1b2e4e]/90">
            Build and deploy adaptive, human-centric AI strategies rooted in your infrastructure,
            designed for scale, and guided by Kyndryl's principles to deliver lasting value and agility.
          </p>
        </div>

        {/* Focus Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {focusCards.map((card, index) => (
            <motion.a
              key={index}
              href={card.href}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="group block p-5 rounded-lg bg-white border border-[#e5e5e5] shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <div className="border-t-4 border-[#cfa866] pt-5">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#cfa866] mb-2 group-hover:text-[#1b2e4e] transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-[#1b2e4e]/90 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export { StaticFocusSection };
 