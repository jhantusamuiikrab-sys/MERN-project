import React, { useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { TrendingUp, Zap, Clock, ShoppingBag, Gift } from 'lucide-react'; 

// Define Color Constants
const GOLDEN_ACCENT = '#cfa866';
const BLUE_PRIMARY = '#1b2e4e';

const TPlusThird = () => {
  const products = [
    { icon: TrendingUp, title: "Infinity Watch", price: 499.99, category: "Accessories" },
    { icon: Zap, title: "Zenith Headset", price: 199.00, category: "Electronics" },
    { icon: Clock, title: "Aurora Wallet", price: 79.50, category: "Leather Good" },
    { icon: ShoppingBag, title: "Quantum Sphere", price: 1250.00, category: "Home Tech" },
    { icon: Gift, title: "Lunar Desk Lamp", price: 89.99, category: "Lighting" },
  ];

  const [hovered, setHovered] = React.useState(null);

  // 👁️ Create reference to the section for intersection observer
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 }); // triggers when 50% visible
  const controls = useAnimation();

  // 👇 Replay wave animation every time it enters view
  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden"); // reset when out of view
    }
  }, [isInView, controls]);

  // Wave animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 60, opacity: 0, scale: 0.9 },
    visible: (index) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 14,
        delay: index * 0.08, // 👈 wave effect delay based on index
      },
    }),
  };

  return (
    <section ref={ref} className="bg-[#1b2e4e] py-16 md:py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={controls}
          variants={{
            hidden: { y: -50, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
          }}
          className="text-4xl md:text-5xl font-extrabold text-[#ffffff] text-center mb-12 md:mb-16 leading-tight"
        >
          Our Featured Products
        </motion.h2>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8" 
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              animate={{
                scale: hovered === index ? 1.1 : hovered !== null ? 0.9 : 1,
                opacity: hovered === index ? 1 : hovered !== null ? 0.6 : 1,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className={`relative flex flex-col items-center text-center p-6 md:p-8 rounded-2xl shadow-lg border-2 transition-colors duration-300 ${
                hovered === index
                  ? "bg-orange-500/20 border-[#cfa866] shadow-orange-400/50"
                  : "bg-gray-900 border-transparent"
              }`}
            >
              {/* Icon */}
              <motion.div
                animate={{
                  color: hovered === index ? GOLDEN_ACCENT : "#cfa866",
                  scale: hovered === index ? 1.2 : 1,
                }}
                transition={{ type: "spring", stiffness: 150 }}
                className="mb-4 z-10"
              >
                <product.icon size={40} />
              </motion.div>

              {/* Text: Title (MODIFIED for blue hover) */}
              <motion.h3 
                animate={{ color: hovered === index ? GOLDEN_ACCENT : "white" }}
                transition={{ duration: 0.3 }}
                className="text-xl font-bold mb-1 z-10"
              >
                {product.title}
              </motion.h3>
              
              {/* Category */}
              <p className="text-sm uppercase tracking-wider mb-2 z-10" style={{ color: GOLDEN_ACCENT }}>
                {product.category}
              </p>
              
              {/* Price (MODIFIED for blue hover) */}
              <motion.p 
                animate={{ color: hovered === index ? GOLDEN_ACCENT : "white" }}
                transition={{ duration: 0.3 }}
                className="text-2xl font-extrabold z-10"
              >
                ${product.price.toFixed(2)}
              </motion.p>

              {/* Glow effect when hovered */}
              {hovered === index && (
                <motion.div
                  layoutId="glow"
                  className="absolute inset-0 bg-blue-400/10 blur-2xl rounded-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export {TPlusThird};