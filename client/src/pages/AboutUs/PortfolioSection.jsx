// src/components/PortfolioSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
};

const PortfolioSection = ({ ventures }) => {
  return (
    <section>
      <h2 className="text-4xl font-bold text-center mb-12 text-[#333333]">Our Diverse Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {ventures.map((venture, index) => (
          <motion.div
            key={index}
            // Use hex code for border and shadow color
            className="bg-white p-8 rounded-xl shadow-2xl border-t-4 border-[#cfa866] hover:shadow-lg hover:shadow-[#cfa866]/30 transition-shadow duration-300"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Use hex code for icon color */}
            <div className="text-5xl mb-4 text-[#cfa866]">{venture.icon}</div> 
            <h3 className="text-2xl font-semibold mb-2 text-[#333333]">{venture.name}</h3>
            {/* Use darker hex code for tagline */}
            <p className="text-lg italic text-[#a5864e] mb-4">{venture.tagline}</p> 
            <p className="text-gray-600">{venture.description}</p>
            
            <motion.a 
                href="#" 
                // Use darker hex code for text and primary hex for hover
                className="mt-4 inline-block text-[#a5864e] hover:text-[#cfa866] font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Learn More &rarr;
            </motion.a>

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;