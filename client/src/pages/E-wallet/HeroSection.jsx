import { motion } from 'framer-motion';

const primaryColor = "#cfa866";

// --- Framer Motion Animation Variants ---
const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="text-center py-20 px-4 md:py-32 relative" // Added 'relative' here
        style={{
          backgroundImage:
            "url('https://blog.facilitapay.com/wp-content/uploads/2025/02/digital-wallet-concept-that-controls-usage-with-blockchain-smart-contacts-scaled.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Black Overlay */}
        <div
          className="absolute inset-0 bg-black opacity-60" // Adjust opacity as needed (e.g., opacity-25, opacity-75)
        ></div>
        <motion.header
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10" // Added z-10 to ensure header content is above the overlay
        >
          <p
            className="text-lg font-semibold mb-3"
            style={{ color: primaryColor }}
          >
            The Future of Finance is Here
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            {" "}
            {/* Changed text-gray-900 to text-white for better contrast */}
            <span style={{ color: primaryColor }}>One Wallet</span>.
            <br className="sm:hidden" />
            <span className="relative inline-block">
              All Your Payments.
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute bottom-0 left-0 h-1"
                style={{ backgroundColor: primaryColor }}
              ></motion.div>
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-xl text-gray-200 mb-8">
            {" "}
            {/* Changed text-gray-500 to text-gray-200 for better contrast */}
            Stop juggling multiple apps. Our revolutionary e-wallet lets you
            perform **all your diverse payments** from a **single, secure
            interface**.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg transition duration-300 cursor-pointer"
            style={{
              backgroundColor: primaryColor,
              boxShadow: `0 10px 15px -3px ${primaryColor}40`,
            }}
          >
            Get Started Today
          </motion.button>
        </motion.header>
      </section>
    </>
  );
}

export default HeroSection;
