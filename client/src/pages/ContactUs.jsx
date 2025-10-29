// src/components/ContactUs.jsx
import React from "react";
import { motion } from "framer-motion";

// --- Framer Motion Variants ---

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// --- Floating WhatsApp Button Component ---

// NOTE: Replace 'YOUR_PHONE_NUMBER' with your actual WhatsApp number (including country code, no +, no dashes).
// Example: 919876543210 (for India) or 15551234567 (for US)
const WHATSAPP_NUMBER = "YOUR_PHONE_NUMBER";
const PRE_FILLED_MESSAGE =
  "Hello Synergy Group, I'd like to inquire about your services.";

const FloatingWhatsAppButton = () => {
  // Function to construct the WhatsApp link
  const getWhatsAppLink = () => {
    const message = encodeURIComponent(PRE_FILLED_MESSAGE);
    // Use the wa.me link for direct chat
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  };

  // Animation for the floating button
  const floatVariants = {
    initial: { scale: 0, rotate: 180 },
    animate: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    // Subtle hover effect
    whileHover: {
      scale: 1.1,
      boxShadow: "0px 0px 15px rgba(37, 211, 102, 0.8)",
    },
  };

  return (
    <motion.a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50  rounded-full text-white shadow-xl cursor-pointer"
      variants={floatVariants}
      initial="initial"
      animate="animate"
      whileHover="whileHover"
    >
      {/* Simple WhatsApp Icon (using a unicode character for simplicity, you can use an SVG icon library like Heroicons instead) */}
      <span className="">
        <img
          src="https://static.vecteezy.com/system/resources/previews/024/398/617/original/whatsapp-logo-icon-isolated-on-transparent-background-free-png.png"
          alt=""
          className="w-30"
        />
      </span>
    </motion.a>
  );
};

// --- Main ContactUs Component ---

const ContactUs = () => {
  // Use the darker gold for button/focus state consistency
  const DARK_GOLD_HEX = "#a5864e";
  const PRIMARY_ACCENT_HEX = "#cfa866";

  return (
    <motion.div
      className="min-h-screen bg-[#fcfaf7] py-20 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Include the floating button at the top level */}
      <FloatingWhatsAppButton />

      <div className="max-w-7xl mx-auto">
        {/* Title & Subtitle (unchanged) */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h1 className="text-5xl font-extrabold text-[#333333] sm:text-6xl">
            Get in <span className="text-[#cfa866]">Touch</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            We're here to answer your questions and discuss how our collective
            ventures can support your goals.
          </p>
        </motion.div>

        {/* Contact Grid (unchanged logic) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Section 1: Contact Form */}
          <motion.div
            className="lg:col-span-2 bg-white p-8 sm:p-12 rounded-xl shadow-2xl"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold mb-6 text-[#a5864e]">
              Send Us a Message
            </h2>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  // Tailwind classes updated for focus color
                  className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-[${PRIMARY_ACCENT_HEX}] focus:border-[${PRIMARY_ACCENT_HEX}] border`}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  // Tailwind classes updated for focus color
                  className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-[${PRIMARY_ACCENT_HEX}] focus:border-[${PRIMARY_ACCENT_HEX}] border`}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  required
                  // Tailwind classes updated for focus color
                  className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-[${PRIMARY_ACCENT_HEX}] focus:border-[${PRIMARY_ACCENT_HEX}] border`}
                ></textarea>
              </div>

              <motion.button
                type="submit"
                // Tailwind classes updated for background and hover color
                className={`w-full inline-flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-[${PRIMARY_ACCENT_HEX}] hover:bg-[${DARK_GOLD_HEX}] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[${PRIMARY_ACCENT_HEX}] transition duration-200`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Submit Inquiry
              </motion.button>
            </form>
          </motion.div>

          {/* Section 2: Details and Address (unchanged logic) */}
          <div className="lg:col-span-1 space-y-8">
            {/* Contact Info Card */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-xl border-l-4 border-[#cfa866]"
              variants={itemVariants}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-[#a5864e] mb-4">
                Direct Contact
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  📧 <strong className="text-[#333333]">Email:</strong>
                  <br /> info@synergygroup.com
                </p>
                <p>
                  📞 <strong className="text-[#333333]">Phone:</strong>
                  <br /> +1 (555) 123-4567
                </p>
                <p>
                  🕒 <strong className="text-[#333333]">Hours:</strong>
                  <br /> Mon - Fri: 9:00 AM - 5:00 PM (EST)
                </p>
              </div>
            </motion.div>

            {/* Address Card */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-xl border-l-4 border-[#cfa866]"
              variants={itemVariants}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-[#a5864e] mb-4">
                Our Main Office
              </h3>
              <p className="text-gray-600">
                Synergy Group Headquarters
                <br />
                123 Global Lane, Suite 400
                <br />
                Business City, ST 90210
                <br />
                USA
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactUs;
