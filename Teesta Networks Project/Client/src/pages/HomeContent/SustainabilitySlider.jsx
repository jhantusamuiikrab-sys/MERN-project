import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SolarImg from "../../assets/Images/Realestate.webp";
import InnovationImg from "../../assets/Images/Realestate.webp";
import ImpactImg from "../../assets/Images/Realestate.webp";

const slides = [
  {
    id: "sustainability",
    title: "Corporate Sustainability",
    heading: "Sustainability",
    description: `
      Our growth strategy is defined by our business acumen and our corporate responsibility.
      Our commitment to sustainable value-creation demonstrates the principle that we care
      for our people and our planet.`,
    image: SolarImg,
  },
  {
    id: "innovation",
    title: "Driving Innovation",
    heading: "Innovation",
    description: `
      Innovation lies at the heart of our company’s success. We continually embrace new technologies,
      optimize operations, and foster creative solutions that deliver long-term value for our stakeholders.`,
    image: InnovationImg,
  },
  {
    id: "impact",
    title: "Creating Impact",
    heading: "Our Impact",
    description: `
      Our work transforms communities and industries. Through strategic investments and social initiatives,
      we create opportunities, empower people, and protect the environment for future generations.`,
    image: ImpactImg,
  },
];

export default function SustainabilitySlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const activeSlide = slides[activeIndex];

  return (
    <div className="bg-[#0f1f38] text-white min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 py-12">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-16 mb-8 border-b border-white/20 w-full max-w-5xl">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setActiveIndex(index)}
            className={`pb-3 text-base sm:text-lg md:text-xl font-medium relative transition-all duration-300 ${
              activeIndex === index ? "text-[#f7b733]" : "text-white/80 hover:text-[#f7b733]"
            }`}
          >
            {slide.heading}
            {activeIndex === index && (
              <motion.span
                layoutId="underline"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#f7b733] rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Slide Content */}
      <div className="flex flex-col md:flex-row gap-10 items-center max-w-6xl mx-auto w-full">
        {/* Left Text */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.id}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-4 text-center md:text-left px-2 sm:px-0"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-[#f7b733]">
              {activeSlide.title}
            </h1>
            <p className="text-base sm:text-lg leading-relaxed whitespace-pre-line text-white/90">
              {activeSlide.description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Right Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.image}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full"
          >
            <img
              src={activeSlide.image}
              alt={activeSlide.title}
              className="rounded-xl shadow-lg w-full h-[220px] sm:h-[300px] md:h-[400px] object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots for Mobile Navigation */}
      <div className="flex justify-center gap-3 mt-10 md:hidden">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeIndex === index ? "bg-[#f7b733]" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
