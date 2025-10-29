import React from 'react'
import {TrendingUp, Target, DollarSign, Layers } from 'lucide-react';
import { motion } from 'framer-motion'; 

const PRIMARY_GOLD = '#cfa866'; 

const ServiceCard = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      className={`bg-white p-6 rounded-xl shadow-2xl border-t-4 border-[${PRIMARY_GOLD}] hover:shadow-[${PRIMARY_GOLD}]/50 transition duration-300`}
      variants={serviceCardVariants}
      transition={{ delay: delay * 0.1 }}
    >
      <div className={`flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-[${PRIMARY_GOLD}]`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const serviceCardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    }
  }
};

const services = [
  {
    icon: <Target className="w-8 h-8 text-white" />,
    title: "Search Campaign Mastery",
    description: "Target high-intent customers with expertly structured keywords and compelling ad copy that drives immediate conversions.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-white" />,
    title: "Remarketing & Display Ads",
    description: "Re-engage site visitors and build brand awareness across the web with stunning, animated display and remarketing campaigns.",
  },
  {
    icon: <DollarSign className="w-8 h-8 text-white" />,
    title: "Shopping Feed Optimization",
    description: "Maximize ROI on e-commerce sales by optimizing your Google Shopping feeds and managing high-volume product campaigns.",
  },
  {
    icon: <Layers className="w-8 h-8 text-white" />,
    title: "Full-Funnel Strategy",
    description: "We don't just manage ads—we build a holistic strategy from awareness to final purchase, ensuring sustainable growth.",
  },
];
function Services() {
  return (
    <>
       <section className="py-24 bg-gray-50" 
        style={{
            backgroundImage: "url('https://www.adlab.cl/wp-content/uploads/2020/05/IMAGEN-FONDO-GOGOLE-ADS.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-4xl font-extrabold text-center text-gray-900 mb-4"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              Our Core Google Ads Services
            </motion.h2>
            <motion.p
              className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2 }}
            >
              Targeting success requires specialized skills. We provide an unfair advantage in the auction.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
            >
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} delay={index} />
              ))}
            </motion.div>
          </div>
        </section>
    </>
  )
}

export default Services