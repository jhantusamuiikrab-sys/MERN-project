// InteractiveContentSection.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import firstImage from "../../assets/CRMImages/dynamicAIimage.jpeg";
import secondImage from "../../assets/CRMImages/AI-drivenInnovationImage.jpg";
import thirdImage from "../../assets/CRMImages/futureReadyAIimage.png";
import forthImage from "../../assets/CRMImages/ImplementAIsecurityImage.avif";
import fifthImage from "../../assets/CRMImages/intelligentAutomationImage.png";

const IMAGES = {
  FIRST: firstImage,
  SECOND: secondImage,
  THIRD: thirdImage,
  FORTH: forthImage,
  FIFTH: fifthImage,
};

const interactiveTabs = [
  {
    id: "build",
    leftText: "Build and deploy dynamic AI systems",
    rightContent: {
      headline: "Build and deploy dynamic AI systems",
      bullets: [
        "Design and deploy multi-agent systems that learn, refine, and scale",
        "Tailored to your proprietary data and legacy assets",
        "Integrate tacit knowledge to act on and advance unique and specific processes",
      ],
      link: "Teesta Networks ›",
      imageSrc: IMAGES.FIRST,
    },
  },
  {
    id: "develop",
    leftText: "Develop an AI strategy that scales",
    rightContent: {
      headline: "Develop a future-ready AI strategy",
      bullets: [
        "Create a robust roadmap aligned with business goals.",
        "Identify quick wins and long-term transformational projects.",
        "Ensure ethical and compliant AI usage across the enterprise.",
      ],
      link: "Teesta Networks ›",
      imageSrc: IMAGES.SECOND,
    },
  },
  {
    id: "reimagine",
    leftText: "Reimagine customer and employee experiences with AI",
    rightContent: {
      headline: "Transform experiences with intelligent automation",
      bullets: [
        "Enhance customer service with smart virtual agents.",
        "Streamline employee workflows and boost productivity.",
        "Personalize interactions at scale using behavioral insights.",
      ],
      link: "Teesta Networks ›",
      imageSrc: IMAGES.THIRD,
    },
  },
  {
    id: "make",
    leftText: "Upgrade your technology environment for AI-driven innovation",
    rightContent: {
      headline: "Upgrade your technology environment for AI-driven innovation",
      bullets: [
        "Design and deploy multi-agent systems that learn, refine, and scale",
        "Tailored to your proprietary data and legacy assets",
        "Integrate tacit knowledge to act on and advance unique and specific processes",
      ],
      link: "Teesta Networks ›",
      imageSrc: IMAGES.FORTH,
    },
  },
  {
    id: "shape",
    leftText: "Implement holistic AI governance and security",
    rightContent: {
      headline: "Implement holistic AI governance and security",
      bullets: [
        "Design and deploy multi-agent systems that learn, refine, and scale",
        "Tailored to your proprietary data and legacy assets",
        "Integrate tacit knowledge to act on and advance unique and specific processes",
      ],
      link: "Teesta Networks ›",
      imageSrc: IMAGES.FIFTH,
    },
  },
];

export const InteractiveContentSection = () => {
  const [activeTab, setActiveTab] = useState(interactiveTabs[0].id);
  const currentTabContent = interactiveTabs.find(
    (tab) => tab.id === activeTab
  ).rightContent;

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#cfa866] mb-10 sm:mb-14 max-w-3xl leading-snug">
          Co-create with Kyndryl for scalable and secure AI-centric organizations
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Column: Tabs */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            {interactiveTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`block text-left w-full pb-2 border-b transition-all duration-300 ${
                  activeTab === tab.id
                    ? "text-[#cfa866] border-[#cfa866] font-semibold"
                    : "text-[#1b2e4e] border-[#cfa866]/40 hover:text-[#cfa866]"
                }`}
              >
                <span className="text-lg sm:text-xl md:text-2xl font-medium">
                  {tab.leftText}
                </span>
              </button>
            ))}
          </div>

          {/* Right Column: Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTabContent.headline}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="lg:col-span-7 bg-white p-6 sm:p-8 shadow-lg rounded-2xl border border-[#cfa866]/50"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                {/* Text Section */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#cfa866] mb-4 border-t-2 border-[#cfa866] pt-3">
                    {currentTabContent.headline}
                  </h3>
                  <ul className="space-y-2 sm:space-y-3 list-disc pl-5 text-[#1b2e4e]">
                    {currentTabContent.bullets.map((bullet, index) => (
                      <li key={index} className="text-sm sm:text-base leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className="mt-5 inline-block text-[#cfa866] font-semibold hover:text-[#1b2e4e] transition-all duration-200 text-sm sm:text-base"
                  >
                    {currentTabContent.link}
                  </a>
                </div>

                {/* Image Section */}
                {currentTabContent.imageSrc && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center items-center"
                  >
                    <img
                      src={currentTabContent.imageSrc}
                      alt={currentTabContent.headline}
                      className="w-full h-48 sm:h-64 md:h-72 object-cover rounded-lg shadow-md"
                    />
                  </motion.div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
