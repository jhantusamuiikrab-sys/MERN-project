import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
const dynamicBackgroundUrl = "Torsha1.png";
const dynamicBackgroundUrl1 = "Torsha2.png";
const slides = [
  {
    id: 1,
    title: "Style That Defines You",
    subtitle: "Trendy Fashion & Accessories",
    image: dynamicBackgroundUrl,
  },
  {
    id: 2,
    title: "Fresh Looks for Little Stars",
    subtitle: "Kids Wear Collection",
    image: dynamicBackgroundUrl1,
  },
  {
    id: 3,
    title: "Luxury Living Essentials",
    subtitle: "Household & Lifestyle",
    image: dynamicBackgroundUrl,
  },
];

export default function EcomHeroSection() {
  const [current, setCurrent] = useState(0);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {slides.map((slide, index) => (
        <motion.div
          key={slide.id}
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${slide.image})` }}
          animate={{ opacity: current === index ? 1 : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#1b2e4e]/90 via-[#1b2e4e]/70 to-[#cfa866]/30"></div>

          {current === index && (
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute top-1/2 left-12 transform -translate-y-1/2 text-white max-w-lg"
            >
              <h2 className="text-5xl font-extrabold mb-4 leading-tight">
                {slide.title}
              </h2>
              <p className="text-lg mb-6 text-[#f5e2b8] font-medium">
                {slide.subtitle}
              </p>
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-[#cfa866] to-[#f5e2b8] text-[#1b2e4e] px-6 py-3 rounded-full font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300">
                Shop Now <ArrowRight size={18} />
              </button>
            </motion.div>
          )}
        </motion.div>
      ))}

      {/* Navigation Buttons */}
      <div className="absolute inset-x-0 bottom-10 flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index ? "bg-[#cfa866]" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Arrow Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-[#1b2e4e]/50 text-white p-3 rounded-full hover:bg-[#1b2e4e]/80 transition-all"
      >
        <ArrowLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-[#1b2e4e]/50 text-white p-3 rounded-full hover:bg-[#1b2e4e]/80 transition-all"
      >
        <ArrowRight />
      </button>
    </section>
  );
}