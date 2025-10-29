import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const PRIMARY_GOLD = '#cfa866'; 
const LIGHTER_BRONZE = '#e3d7bf';

const stats = [
  { value: 650, unit: "+", label: "Happy Clients" },
  { value: 550, unit: "%", label: "Average ROI Increase" },
  { value: 98, unit: "%", label: "Client Retention Rate" },
];

const AnimatedStat = ({ value, unit, label, index }) => {
  const controls = useAnimation();
  const [displayedValue, setDisplayedValue] = useState(0);

  useEffect(() => {
    if (displayedValue < value) {
      const interval = setInterval(() => {
        setDisplayedValue(prev => {
          const step = Math.ceil(value / 50); // Increment quickly
          const next = prev + step;
          return next > value ? value : next;
        });
      }, 20); // Fast interval
      return () => clearInterval(interval);
    }
  }, [displayedValue, value]);

  return (
    <motion.div
      className="text-center p-4"
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.2 + index * 0.15, type: 'spring', stiffness: 100 }}
    >
      <div className={`text-5xl font-extrabold text-[${PRIMARY_GOLD}]`}>
        {displayedValue}
        <span className={`text-4xl text-[${LIGHTER_BRONZE}] ml-1`}>{unit}</span>
      </div>
      <p className="text-lg font-medium text-gray-600 mt-1">{label}</p>
    </motion.div>
  );
};
function GAnimatedNumbers() {
  return (
    <>
    <section className="py-16 bg-white border-b">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <AnimatedStat key={index} {...stat} index={index} />
              ))}
            </div>
          </div>
    </section>
    </>
  )
}
export default GAnimatedNumbers;