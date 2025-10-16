
import {
  motion,
  useAnimation,
  useInView
} from "framer-motion";
import { useEffect, useRef } from "react";


const useScrollAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return { ref, controls };
};

export const CtaSection = () => {
  const { ref, controls } = useScrollAnimation();

  return (
    <motion.section
      ref={ref}
      className="py-20 md:py-28 bg-[#cfa866] overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        },
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative">
        {/* Animated Background Element */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500  rounded-full mix-blend-multiply opacity-20 blur-3xl"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.h2
          className="text-5xl font-extrabold text-white mb-4 relative z-10"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 150 }}
        >
          Ready to See Exponential ROI?
        </motion.h2>
        <motion.p
          className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Book a free consultation and let our SMS specialists design a campaign
          tailored for your success.
        </motion.p>
        <motion.button
          className="relative z-10 px-10 py-4 bg-white text-[#cfa866] text-xl font-bold rounded-full shadow-2xl transition duration-300 transform hover:bg-gray-100 hover:scale-[1.03] active:scale-95 cursor-pointer"
          whileHover={{ boxShadow: "0 10px 25px rgba(255,255,255,0.4)" }}
          whileTap={{ scale: 0.95 }}
        >
          Request Your Free Demo
        </motion.button>
      </div>
    </motion.section>
  );
};