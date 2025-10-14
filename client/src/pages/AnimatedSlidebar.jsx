
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// The images array remains the same
const images = [
  {
    src: "https://www.pixelstalk.net/wp-content/uploads/2016/07/Beautiful-Full-HD-Images.jpg",
    alt: "Emerald Peaks",
    caption: "Explore the lush green peaks of the Emerald Range.",
  },
  {
    src: "https://wallpapercave.com/wp/wp3182298.jpg",
    alt: "Golden Cityscape",
    caption: "A vibrant city illuminated by the sunset's golden hour.",
  },
  {
    src: "https://www.pixelstalk.net/wp-content/uploads/2016/08/Nature-wallpapers-Full-HD-backgroud.jpg",
    alt: "Cosmic Drift",
    caption: "Journey through the abstract beauty of the cosmic void.",
  },
  {
    src: "https://www.pixelstalk.net/wp-content/uploads/2016/06/Desktop-Wallpaper-HD-Free-Download.jpg",
    alt: "Sunset Horizon",
    caption: "The tranquil moment where the ocean meets the fiery horizon.",
  },
];

// Define the animation variants for the new zoom and spread effect
const zoomVariants = (direction) => ({
  initial: {
    // Start very small (zoomed in the middle) and fully transparent
    scale: 0.1,
    opacity: 0,
  },
  animate: {
    // Zoom out to fill the screen and become fully opaque
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring", // Use a spring type for a slight bounce effect
      stiffness: 50, // Decreased stiffness for a slower, softer entrance
      damping: 15,  // Decreased damping
      duration: 2.5, // *** Increased duration for a much slower zoom-in ***
    },
  },
  exit: {
    // Fade out while slightly scaling down the exiting image
    scale: 0.8,
    opacity: 0,
  },
});

const App = () => {
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  // *** NEW: State to track if the component has mounted ***
  const [hasMounted, setHasMounted] = useState(false);
  
  const mainImage = images[mainImageIndex];
  
  const AUTOPLAY_INTERVAL = 5000; 

  const handleThumbnailClick = (newIndex) => {
    setDirection(newIndex > mainImageIndex ? 1 : -1);
    setMainImageIndex(newIndex);
  };
  
  // useEffect for the automatic slide functionality and to set hasMounted
  useEffect(() => {
    // *** NEW: Set hasMounted to true after the initial render ***
    setHasMounted(true);

    const autoAdvance = () => {
      setMainImageIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        setDirection(1); 
        return nextIndex;
      });
    };

    const intervalId = setInterval(autoAdvance, AUTOPLAY_INTERVAL);
    return () => clearInterval(intervalId);
  }, []); 
  
  // *** NEW: Do not render the main slider until the component has mounted ***
  if (!hasMounted) {
      // Render an empty background or a simple spinner while mounting
      return <div className="flex justify-center items-center w-screen h-screen bg-black p-0 font-inter"></div>;
  }

  return (
    // Outer container set to w-screen h-screen and p-0 for full edge-to-edge coverage
    <div className="flex justify-center items-center w-screen h-screen bg-black p-0 font-inter"> 
      
      {/* Inner container set to w-full h-full */}
      <div className="relative w-full h-full overflow-hidden shadow-2xl">
        
        <AnimatePresence initial={false} mode="wait">
          {/* Main Image Container with Zoom Animation */}
          <motion.div
            key={mainImage.alt + mainImageIndex} 
            className="absolute inset-0"
            variants={zoomVariants(direction)} 
            initial="initial"
            animate="animate"
            exit="exit"
            // Exit transition duration is short to make the incoming image more prominent
            transition={{ duration: 0.5, ease: "easeOut" }} 
          >
            <img 
              src={mainImage.src} 
              alt={mainImage.alt} 
              className="w-full h-full object-cover" 
              // Placeholder for image loading error
              onError={(e) => { e.target.src = "https://placehold.co/1920x1080/4F46E5/FFFFFF?text=Image+Load+Failed"; }}
            />
            
            {/* Overlay and Caption */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <motion.div 
              className="absolute bottom-10 left-10 text-white z-10 p-4 drop-shadow-xl" 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h1 className="text-5xl font-extrabold drop-shadow-lg">{mainImage.alt}</h1> 
              <p className="mt-3 text-xl max-w-lg drop-shadow-md">{mainImage.caption}</p>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Floating Thumbnails Container */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 ml-4 flex flex-row space-x-6 md:space-x-10 z-20"> 
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={`
                cursor-pointer overflow-hidden rounded-lg shadow-xl transition-all duration-500
                ${index === mainImageIndex 
                  ? 'w-48 h-28 md:w-64 md:h-40 ring-4 ring-white ring-offset-2 ring-offset-black opacity-100' // Bigger when active
                  : 'w-28 h-16 md:w-40 md:h-24 opacity-70 hover:opacity-100' // Smaller when inactive
                }
              `}
              onClick={() => handleThumbnailClick(index)}
              initial={{ y: 50, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.05 + 0.3, duration: 0.4 }} 
              whileHover={{ scale: 1.1, boxShadow: "0 15px 25px rgba(0,0,0,0.7)" }} 
              whileTap={{ scale: 0.95 }}
            >
              <img 
                src={image.src} 
                alt={`Thumbnail of ${image.alt}`} 
                className="w-full h-full object-cover" 
                onError={(e) => { e.target.src = "https://placehold.co/160x90/6B7280/FFFFFF?text=Thumb"; }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;