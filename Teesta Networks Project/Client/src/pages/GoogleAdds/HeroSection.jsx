import React from 'react'
import { Zap } from 'lucide-react';
import { motion } from 'framer-motion'; 

const tagline = "Scale Your Business with Precision Google Ads.";

const VERY_LIGHT_GOLD_BG = '#fff8f0';
const PRIMARY_GOLD = '#cfa866'; 
const SHADOW_RGB = '207, 168, 102'; 
const DARKER_GOLD = '#b58c49'; 

const Button = ({ children, primary = true }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05, boxShadow: primary ? `0 10px 15px rgba(${SHADOW_RGB}, 0.5)` : "0 5px 10px rgba(0,0,0,0.1)" }}
      whileTap={{ scale: 0.95 }}
      className={`px-8 py-3 font-semibold rounded-lg transition duration-300 ${
        primary
          ? `bg-[${PRIMARY_GOLD}] text-white shadow-lg hover:bg-[${DARKER_GOLD}]`
          : `bg-white text-[${PRIMARY_GOLD}] border border-[${PRIMARY_GOLD}] hover:bg-gray-50`
      }`}
    >
      {children}
    </motion.button>
  );
};

// --- Framer Motion Variants ---

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};
function HeroSection() {
  return (
    <>
     <section className={`relative overflow-hidden pt-24 pb-32 bg-[${VERY_LIGHT_GOLD_BG}]` }
        style={{
            backgroundImage: "url('https://www.luxurypresence.com/wp-content/uploads/2022/08/google-ads-hero.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Animated Zap Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
              className={`mx-auto w-16 h-16 bg-[${PRIMARY_GOLD}] rounded-full flex items-center justify-center mb-6 shadow-xl`}
            >
              <Zap className="w-8 h-8 text-yellow-300" />
            </motion.div>

            {/* Animated Headline */}
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {tagline.split(' ').map((word, index) => (
                <motion.span
                  key={index}
                  className="inline-block mr-3  "
                  variants={itemVariants}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              className="max-w-3xl mx-auto text-xl text-gray-600 mb-10"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              We specialize exclusively in high-performance Google Ads campaigns that deliver predictable, measurable growth. Stop guessing, start scaling.
            </motion.p>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.5, type: "spring", stiffness: 150 }}
              className="flex justify-center space-x-4"
            >
              <Button primary={true}>
                Launch My Campaign Today
              </Button>
              <Button primary={false}>
                View Case Studies
              </Button>
            </motion.div>
          </div>
        </section>

    </>
  )
}

export default HeroSection