import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import itsolution from "../../assets/Images/ITSolutionBanner.png";
import digitalmarket from "../../assets/Images/Dmarketing_1.jpg";
import realestate from "../../assets/Images/Realestate.webp";
import mobilewallet from "../../assets/Images/pafpaybanner.webp";
import szutra from "../../assets/Images/szutrabanner.webp";
import ecommerce from "../../assets/Images/Ecommercebanner.webp";

const images = [
  { src: itsolution, alt: "IT Solutions", caption: "Empowering your business through tailored IT innovations." },
  { src: digitalmarket, alt: "Digital Marketing", caption: "Maximize your online presence with data-driven marketing." },
  { src: realestate, alt: "Real Estate", caption: "Smart property solutions that redefine modern living." },
  { src: mobilewallet, alt: "Mobile E-Wallet", caption: "Revolutionizing transactions through secure mobile payments." },
  { src: szutra, alt: "Szutra", caption: "Smart platform for mobility, delivery, and e-services." },
  { src: ecommerce, alt: "E-Commerce", caption: "Delivering digital commerce experiences that drive results." },
];

const mainImageVariants = {
  initial: { scale: 1.05, opacity: 0, x: 20 },
  animate: {
    scale: 1,
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 18,
      duration: 0.8,
    },
  },
  exit: { scale: 0.95, opacity: 0, x: -20, transition: { duration: 0.4 } },
};

// ----------------- Thumbnail Bar -----------------
const ThumbnailBar = ({ images, currentIndex, setIndex }) => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [didDrag, setDidDrag] = useState(false);

  const getClientX = (e) => (e.touches ? e.touches[0].clientX : e.clientX);

  const handleStart = (e) => {
    const clientX = getClientX(e);
    if (e.target.closest("button")) return;

    setIsDragging(true);
    setDidDrag(false);
    setStartX(clientX);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMove = (e) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const clientX = getClientX(e);
    const walk = (clientX - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
    if (Math.abs(walk) > 5) setDidDrag(true);
  };

  const handleEnd = () => setIsDragging(false);

  const handleThumbnailClick = (e, index) => {
    if (didDrag) {
      e.preventDefault();
      setDidDrag(false);
      return;
    }
    setIndex(index);
  };

  useEffect(() => {
    window.addEventListener("mouseup", handleEnd);
    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("mousemove", handleMove);
    };
  }, [isDragging, startX, scrollLeft]);

  return (
    <motion.div
      ref={scrollRef}
      onMouseDown={handleStart}
      onTouchStart={handleStart}
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
      className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex space-x-2 p-2 bg-black/50 backdrop-blur-sm rounded-xl shadow-lg overflow-x-scroll max-w-[95vw] sm:max-w-[600px] md:max-w-[800px] cursor-grab active:cursor-grabbing"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {images.map((img, index) => (
        <motion.button
          key={index}
          onClick={(e) => handleThumbnailClick(e, index)}
          className={`flex-shrink-0 w-14 h-9 sm:w-16 sm:h-10 md:w-20 md:h-12 rounded-md overflow-hidden transition-all duration-300 ease-in-out border-2 ${
            currentIndex === index
              ? "border-indigo-400 scale-110 shadow-indigo-500/80 shadow-lg"
              : "border-transparent opacity-70 hover:opacity-100 hover:scale-105"
          }`}
          whileHover={{ scale: currentIndex === index ? 1.1 : 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover pointer-events-none"
          />
        </motion.button>
      ))}
    </motion.div>
  );
};

// ----------------- Main Component -----------------
const App = () => {
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);
  const AUTOPLAY_INTERVAL = 5000;

  const autoAdvance = useCallback(() => {
    setMainImageIndex((prev) => (prev + 1) % images.length);
  }, []);

  useEffect(() => {
    setHasMounted(true);
    document.body.style.overflowX = "hidden";
    document.body.style.margin = "0";

    const id = setInterval(autoAdvance, AUTOPLAY_INTERVAL);
    return () => {
      clearInterval(id);
      document.body.style.overflowX = "auto";
      document.body.style.margin = "8px";
    };
  }, [autoAdvance]);

  const mainImage = images[mainImageIndex];

  if (!hasMounted) {
    return (
      <div className="flex justify-center items-center w-full h-screen bg-gray-900">
        <div className="text-white text-lg animate-pulse">Loading Slider...</div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-gray-900 font-sans">
      <div className="relative w-full h-[80vh] sm:h-[90vh] md:h-screen overflow-hidden shadow-2xl">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={mainImage.alt + mainImageIndex}
            className="absolute inset-0 cursor-pointer"
            variants={mainImageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
          >
            <img
              src={mainImage.src}
              alt={mainImage.alt}
              className="w-full h-full object-cover"
              onError={(e) =>
                (e.currentTarget.src =
                  "https://placehold.co/1920x1080/374151/FFFFFF?text=Image+Missing")
              }
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

            <motion.div
              className="absolute bottom-24 left-5 sm:left-10 md:left-20 right-5 sm:right-auto text-white z-10 p-4 drop-shadow-xl max-w-[90%] sm:max-w-xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg leading-snug">
                {mainImage.alt}
              </h1>
              <p className="mt-3 text-base sm:text-lg md:text-xl font-light max-w-lg drop-shadow-md">
                {mainImage.caption}
              </p>
              <button className="mt-6 px-5 sm:px-6 py-2.5 sm:py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-500 transition-colors duration-300 text-sm sm:text-base">
                Explore Solution
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <ThumbnailBar images={images} currentIndex={mainImageIndex} setIndex={setMainImageIndex} />
      </div>
    </div>
  );
};

export default App;
