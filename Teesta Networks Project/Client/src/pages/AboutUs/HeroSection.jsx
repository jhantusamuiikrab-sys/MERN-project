// src/components/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = ({ mission }) => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-24 sm:py-32" style={{
            backgroundImage: "url('https://betanews.com/wp-content/uploads/2023/03/Future-network.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          className="text-5xl sm:text-7xl font-extrabold tracking-tight"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          We Are <span className="text-[#cfa866]">Teesta Networks</span> {/* Use hex code */}
        </motion.h1>
        <motion.p
          className="mt-6 max-w-3xl mx-auto text-xl sm:text-2xl font-light opacity-80"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          {mission}
        </motion.p>
      </div>
    </div>
  );
};

export default HeroSection;