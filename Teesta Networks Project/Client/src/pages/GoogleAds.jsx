import { motion } from 'framer-motion'; 

import Services from './GoogleAdds/Services';
import {GAddHeroSection} from './GoogleAdds/GAddHeroSection';
import AnimatedNumbers from './GoogleAdds/AnimatedNumbers';
import StaggeredAnimation from './GoogleAdds/StaggeredAnimation';
import FinalCTA from './GoogleAdds/FinalCTA';

const PRIMARY_GOLD = '#cfa866'; 
const agencyName = "";//Teesta Networks
const SHADOW_RGB = '207, 168, 102'; 
 const DARKER_GOLD = '#b58c49';

export const Button = ({ children, primary = true }) => {
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

const GoogleAds = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <header className="top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className={`text-2xl font-extrabold text-[${PRIMARY_GOLD}]`}
          >
            {agencyName}
          </motion.div>
          <Button primary={true}>
            Get Your Free Audit
          </Button>
        </div>
      </header>

      <main>
        {/* --- 1. Hero Section (High Animation) --- */}
       <GAddHeroSection/>
        {/* --- 2. Stats Section (Animated Numbers) --- */}
        <AnimatedNumbers/>
        {/* --- 3. Services Section (Scroll Reveal Cards) --- */}
        <Services/>
        {/* --- 4. The Process Section (Staggered Animation) --- */}
        <StaggeredAnimation/>
        {/* --- 5. Final CTA --- */}
        <FinalCTA/>
      </main>

    </div>
  );
};

export default GoogleAds;
