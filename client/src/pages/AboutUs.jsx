// src/components/AboutUs.jsx
import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from './AboutUs/HeroSection';
import StoryTimeline from './AboutUs/StoryTimeline';
import PortfolioSection from './AboutUs/PortfolioSection';
import ValuesGrid from './AboutUs/ValuesGrid';


// Define the umbrella company data (omitted for brevity, assume it's the same)
const companyData = {
  mission: "To innovate and empower diverse industries through sustainable, user-centric solutions, built on a foundation of integrity and vision.",
  story: [
    { year: 2010, title: "The Spark", description: "Established as a small tech consultancy..." },
    { year: 2015, title: "First Expansion", description: "Launched our e-commerce platform..." },
    { year: 2020, title: "The Multi-Venture Leap", description: "Acquired a sustainable farming operation..." },
    { year: 2025, title: "Future Forward", description: "Targeting global expansion..." },
  ],
  ventures: [
    { name: "NexusTech Solutions", tagline: "The Digital Engine", description: "Leading software development and AI consultancy...", icon: "💻" },
    { name: "Aura Home Goods", tagline: "Sustainable Living, Elevated", description: "A curated e-commerce platform for eco-friendly goods...", icon: "🌱" },
    { name: "Veridian Farms", tagline: "Nourishing the Future", description: "Modern, regenerative agriculture producing high-quality organic produce...", icon: "🧑‍🌾" },
    { name: "Pinnacle Investments", tagline: "Strategic Growth Partners", description: "Investing in innovative startups...", icon: "📈" },
  ],
  values: [
    { title: "Integrity", icon: "🤝", description: "Operating with unwavering honesty, transparency, and ethical standards..." },
    { title: "Innovation", icon: "✨", description: "Continuously seeking creative solutions and pioneering new approaches..." },
    { title: "Sustainability", icon: "🌎", description: "Prioritizing environmental stewardship and long-term societal well-being..." },
    { title: "Empowerment", icon: "🌟", description: "Fostering growth and success for our employees, partners, and the communities we serve." },
  ]
};

const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.3 } },
  };

  return (
    <motion.div
      // Using hex codes for background and text colors
      className="min-h-screen bg-[#fcfaf7] text-[#333333] font-sans" 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <HeroSection mission={companyData.mission} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        
        <StoryTimeline story={companyData.story} />
        
        <PortfolioSection ventures={companyData.ventures} />
        
        <ValuesGrid values={companyData.values} />

      </div>
    </motion.div>
  );
};

export default AboutUs;