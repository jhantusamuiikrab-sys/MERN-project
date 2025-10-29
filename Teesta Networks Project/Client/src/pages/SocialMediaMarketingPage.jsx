import { useState } from 'react';
import { motion } from 'framer-motion';

import RemarkableResults from './SocialMediaContent/RemarkableResults';
import {GSocialMediaHeroSection} from './SocialMediaContent/GSocialMediaHeroSection'
//import { LeadForm, TypewriterText } from './SocialMediaContent/Herosection';
import { AnimatedMeetingForm, BookMeetingTab } from './SocialMediaContent/BookMeeating';
import { ServicesSection } from './SocialMediaContent/Services';
import TrustBadges from './SocialMediaContent/TrustBadges';
import TestimonialCarousel from './SocialMediaContent/TestimonialCarousel';


/* ---------------- ANIMATION VARIANTS ---------------- */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

/* ---------------- MAIN PAGE ---------------- */
export default function SocialMediaMarketingPage() {

  const [isMeetingOpen, setIsMeetingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 font-inter antialiased overflow-x-hidden">     
      
      {/* <section className="relative h-screen flex items-center justify-center p-4">        
        <div className="absolute inset-0 z-0">
          <video
            src="/Social Media.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/70 backdrop-brightness-50"></div>
        </div>       
        <BookMeetingTab onOpen={() => setIsMeetingOpen(true)} />        
        <div className="relative z-10 text-center flex flex-col items-center justify-center h-full pt-20">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-4xl">
            <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#cfa866] leading-tight mb-4">
              Award Winning
              <span className="block mt-1">Digital Marketing Agency</span>
            </motion.h2>
            <TypewriterText text="We are passionate about fostering growth and delivering measurable results for businesses of all sizes through innovative digital strategies." />
          </motion.div>
          <LeadForm />
        </div>
      </section> */}
<GSocialMediaHeroSection/>
      {/* --- SERVICES SECTION (NEW) --- */}
      <ServicesSection />

      {/* --- TRUST BADGES SECTION --- */}
     <TrustBadges/>
        
      {/* Animated Form Modal */}
      <AnimatedMeetingForm isOpen={isMeetingOpen} onClose={() => setIsMeetingOpen(false)} />
        <RemarkableResults/>
        <TestimonialCarousel/>
    </div>
  );
}