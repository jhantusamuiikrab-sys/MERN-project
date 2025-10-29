import { motion } from "framer-motion";

const primaryColorDark = "#b38d52"; // Slightly darker for hover

const imageSectionVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const textSectionVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
function HowItWorks() {
  return (
    <>
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="lg:flex lg:items-center lg:gap-12">
            {/* Image Handler Section */}
            <motion.div
              className="lg:w-1/2 mb-12 lg:mb-0 relative"
              variants={imageSectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="aspect-w-16 aspect-h-9 sm:aspect-h-7 lg:aspect-none rounded-2xl overflow-hidden shadow-2xl relative">
                {/* Placeholder Image - Replace with your actual image */}
                <img
                  src="https://www.nucleiotechnologies.com/wp-content/uploads/2022/01/money-2.png"
                  alt="UnifiedPay e-wallet managing multiple payments"
                  className="w-full h-full object-cover"
                />
                {/* Optional: Overlay or additional visual elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-30"></div>
                <div className="absolute bottom-6 left-6 p-4 bg-black bg-opacity-60 rounded-lg text-white text-sm">
                  <p>Manage all your finances in one place.</p>
                </div>
              </div>
              <motion.div
                className="absolute -bottom-4 -right-4 w-48 h-48 rounded-full opacity-20 blur-3xl"
                style={{ backgroundColor: primaryColor }}
                animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              className="lg:w-1/2"
              variants={textSectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <h3 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                Simplify Your Financial Life
                <br />
                <span
                  className="relative inline-block mt-2"
                  style={{ color: primaryColor }}
                >
                  with UnifiedPay
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="absolute bottom-0 left-0 h-1 bg-opacity-70"
                    style={{ backgroundColor: primaryColor }}
                  ></motion.div>
                </span>
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Our innovative e-wallet system is engineered to consolidate your
                financial world. Imagine having a single, intelligent hub for
                all your transactions, subscriptions, and payments.
              </p>
              <ul className="space-y-4 text-gray-700 mb-8">
                <li className="flex items-start">
                  <span
                    className="mr-3 text-xl"
                    style={{ color: primaryColor }}
                  >
                    ✔
                  </span>
                  <div>
                    <strong className="block text-gray-900">
                      Universal Compatibility:
                    </strong>{" "}
                    Connect bank accounts, credit cards, debit cards, and
                    various digital payment methods.
                  </div>
                </li>
                <li className="flex items-start">
                  <span
                    className="mr-3 text-xl"
                    style={{ color: primaryColor }}
                  >
                    ✔
                  </span>
                  <div>
                    <strong className="block text-gray-900">
                      Smart Payment Routing:
                    </strong>{" "}
                    Automatically select the best payment method for each
                    transaction, or choose your preference.
                  </div>
                </li>
                <li className="flex items-start">
                  <span
                    className="mr-3 text-xl"
                    style={{ color: primaryColor }}
                  >
                    ✔
                  </span>
                  <div>
                    <strong className="block text-gray-900">
                      Real-time Insights:
                    </strong>{" "}
                    Gain a clear overview of your spending across all linked
                    accounts with detailed analytics.
                  </div>
                </li>
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg transition duration-300 cursor-pointer"
                style={{
                  backgroundColor: primaryColor,
                  "&:hover": { backgroundColor: primaryColorDark },
                }}
              >
                Learn More About Our System
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HowItWorks;
