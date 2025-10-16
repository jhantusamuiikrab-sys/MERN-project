import {
  motion
} from "framer-motion";

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
      duration: 0.5,
      ease: [0.2, 0.7, 0.4, 1],
    },
  },
};

export const HeroSection = () => (
  <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-gray-900 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <video
        src="/bulkSms.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gray-900/70 backdrop-brightness-50"></div>
    </div>
    <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-0">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight tracking-tighter"
          variants={itemVariants}
        >
          Activate Your Growth with
          <motion.span
            className="block text-[#cfa866] mt-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
          >
            Bulk SMS Marketing.
          </motion.span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          High-volume, personalized messaging designed for scale, speed, and
          unbeatable ROI. Stop shouting, start connecting.
        </motion.p>
        <motion.div
          className="flex justify-center space-x-4"
          variants={itemVariants}
        >
          <motion.button
            className="px-8 py-3 bg-[#cfa866] text-white text-lg font-semibold rounded-full shadow-2xl hover:bg-yellow-500 transition duration-300 transform hover:-translate-y-1 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Sending Now
          </motion.button>
          <motion.button
            className="px-8 py-3 bg-gray-700 text-gray-200 text-lg font-semibold rounded-full shadow-lg hover:bg-gray-600 transition duration-300 transform hover:-translate-y-1 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Pricing
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Animated Phone Illustration */}
      <motion.div
        className="mt-16 mx-auto w-full max-w-xl"
        initial={{ y: 50, opacity: 0, rotateX: 15 }}
        animate={{ y: 0, opacity: 1, rotateX: 0 }}
        transition={{ delay: 0.8, duration: 1, type: "spring", stiffness: 50 }}
      >
        <div className="relative bg-gray-800 p-2 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-gray-700">
          <div className="h-64 bg-white rounded-2xl overflow-hidden flex flex-col p-4">
            <motion.div
              className="mb-2 bg-[#cfa866] text-white p-2 rounded-lg self-end max-w-[80%]"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.5, type: "tween" }}
            >
              Welcome! Your bulk campaign is ready to launch.
            </motion.div>
            <motion.div
              className="mb-2 bg-gray-200 p-2 rounded-lg self-start max-w-[80%]"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.8, type: "tween" }}
            >
              Great! Estimated reach: 500k users.
            </motion.div>
            <motion.div
              className="bg-[#cfa866] text-white p-2 rounded-lg self-end max-w-[80%]"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 2.1, type: "tween" }}
            >
              Run time: 5 minutes. ✅
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);