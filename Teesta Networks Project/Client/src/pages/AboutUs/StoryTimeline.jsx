// src/components/StoryTimeline.jsx
import React from 'react';
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80 } },
};

const StoryTimeline = ({ story }) => {
  return (
    <section className="relative">
      <h2 className="text-4xl font-bold text-center mb-12 text-[#333333]">Our Journey of Growth</h2>
      
      {/* Central Timeline Line: Use hex code with opacity */}
      <div className="absolute left-1/2 w-0.5 bg-[#cfa866]/30 h-full transform -translate-x-1/2 hidden md:block"></div> 
      
      <div className="space-y-16">
        {story.map((item, index) => (
          <motion.div
            key={index}
            className={`flex items-center w-full ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
          >
            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
              {/* Use hex code for border */}
              <div className="p-6 bg-white rounded-lg shadow-lg border-l-4 border-[#cfa866]"> 
                <p className="text-sm font-light text-gray-500">{item.year}</p>
                {/* Use darker hex code for title */}
                <h3 className="text-xl font-bold text-[#a5864e] mt-1">{item.title}</h3> 
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
            </div>
            
            {/* Timeline Dot: Use hex code for dot and light background hex for ring */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#cfa866] rounded-full z-10 ring-8 ring-[#fcfaf7]"></div> 
          
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StoryTimeline;