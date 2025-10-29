import { motion } from "framer-motion"
const primaryColor = "#cfa866";

// ENHANCED FEATURE CARD VARIANT
const featureVariants = {
  hidden: { opacity: 0, y: 50, rotate: -2, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotate: 0, // Removes the rotation for a smooth appearance
    scale: 1,
    transition: {
      delay: i * 0.2, // Faster stagger delay for high-level feel
      duration: 0.7,
      type: "spring",
      stiffness: 80,
      damping: 10,
    },
  }),
};

const iconTransition = {
  repeat: Infinity,
  duration: 2,
  ease: "easeInOut",
};
// --- Updated Dummy Icons (Now accept and apply primary color) ---
const WalletIcon = ({ primaryColor }) => (
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={iconTransition}
    className="text-5xl"
    style={{ color: primaryColor }} // Apply gold color
  >
    💰
  </motion.div>
);
const MultiPaymentIcon = ({ primaryColor }) => (
  <motion.div
    animate={{ rotate: [0, 10, -10, 0] }}
    transition={iconTransition}
    className="text-5xl"
    style={{ color: primaryColor }} // Apply gold color
  >
    💳
  </motion.div>
);
const SecurityIcon = ({ primaryColor }) => (
  <motion.div
    animate={{ scale: [1, 1.1, 1] }}
    transition={iconTransition}
    className="text-5xl"
    style={{ color: primaryColor }} // Apply gold color
  >
    🔒
  </motion.div>
);

function Card() {
  const features = [
    {
      title: "One Wallet, Infinite Payments",
      description:
        "Link all your cards and accounts. Use a single unified balance to pay anywhere—online, in-store, or P2P.",
      icon: <WalletIcon primaryColor={primaryColor} />,
    },
    {
      title: "Seamless Transactions",
      description:
        "Forget switching apps. Our platform intelligently handles different payment protocols from one intuitive interface.",
      icon: <MultiPaymentIcon primaryColor={primaryColor} />,
    },
    {
      title: "Top-Tier Security",
      description:
        "Your financial safety is our priority. We employ advanced encryption and multi-factor authentication for every transaction.",
      icon: <SecurityIcon primaryColor={primaryColor} />,
    },
  ];
  return (
    <>
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h3 className="text-4xl font-extrabold text-center text-gray-900 mb-16">
            Why UnifiedPay is the{" "}
            <span style={{ color: primaryColor }}>Premium Choice</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={featureVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                // New Professional & Gold-Accented Styling
                className="p-8 rounded-2xl bg-white border border-gray-200 shadow-xl cursor-pointer
                           transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-transparent"
                whileHover={{
                  // Subtle hover scale and shadow glow
                  scale: 1.02,
                  boxShadow: `0 15px 30px -5px ${primaryColor}80`,
                }}
              >
                {/* Icon Block - Gold Ring Effect */}
                <motion.div
                  className="flex justify-center items-center h-20 w-20 mb-6 rounded-full mx-auto"
                  style={{ border: `3px solid ${primaryColor}70` }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {feature.icon}
                </motion.div>

                {/* Content */}
                <h4
                  className="text-2xl font-bold mb-3 text-center"
                  style={{ color: primaryColor }}
                >
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Card;
