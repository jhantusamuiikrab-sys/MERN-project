import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import itsolution from "../../assets/Images/ITSoltuionbaneer.jpg";
import digitalmarket from "../../assets/Images/Dmarketing_1.jpg";
import realestate from "../../assets/Images/Realestate.webp";
import mobilewallet from "../../assets/Images/pafpaybanner.webp";
import szutra from "../../assets/Images/szutrabanner.webp";
import ecommerce from "../../assets/Images/Ecommercebanner.webp";

const businesses = [
  {
    id: "itsolution",
    title: "IT Solutions",
    description:
      "Our energy division powers millions of homes and industries with innovation and sustainability at the core.",
    image: itsolution,
    link: "#",
  },
  {
    id: "digitalmarketing",
    title: "Digital Marketing",
    description:
      "Reliance is the largest producer of petrochemicals in the country and amongst the top 10 in the world. Our petrochemicals business creates polymers, elastomers, and advanced materials that bring joy to millions.",
    image: digitalmarket,
    link: "#",
  },
  {
    id: "realestate",
    title: "Real Estate Marketing",
    description:
      "Our retail business connects consumers to a wide range of products across India through digital innovation.",
    image: realestate,
    link: "https://510earth.com",
  },
  {
    id: "mobileewallet",
    title: "Mobile E-Wallet",
    description:
      "Digital Services - Jio connects the nation with world-class digital infrastructure and affordable connectivity.",
    image: mobilewallet,
    link: "https://pafpay.com",
  },
  {
    id: "szutra",
    title: "Szutra",
    description:
      "We are pioneering renewable and sustainable energy solutions to secure the future of the planet.",
    image: szutra,
    link: "https://szutra.com",
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    description:
      "Our media and entertainment ventures bring joy and information to millions of households every day.",
    image: ecommerce,
    link: "https://torshaplus.com",
  },
];

export default function BusinessSection() {
  const [active, setActive] = useState("itsolution");
  const selected = businesses.find((b) => b.id === active) || businesses[0];

  return (
    <div className="relative flex flex-col md:flex-row h-screen text-white font-sans overflow-hidden">
      {/* Background Transition with AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selected.id}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `url(${selected.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </motion.div>
      </AnimatePresence>

      {/* LEFT SECTION */}
      <motion.div
        key={selected.id + "-content"}
        className="flex-1 relative z-10 flex flex-col justify-center px-6 py-10 md:px-16 text-white order-2 md:order-1"
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 40, opacity: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.p
          className="uppercase tracking-widest text-sm mb-2 text-indigo-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Our Businesses
        </motion.p>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight drop-shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {selected.title}
        </motion.h1>

        <motion.p
          className="max-w-2xl text-base sm:text-lg leading-relaxed mb-6 text-gray-200 drop-shadow-md"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {selected.description}
        </motion.p>

        <motion.a
          href={selected.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 sm:px-8 sm:py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 w-fit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Read More →
        </motion.a>
      </motion.div>

      {/* RIGHT MENU */}
      <motion.div
        className="relative z-10 w-full md:w-80 bg-black/60 backdrop-blur-sm flex md:flex-col flex-row overflow-x-auto justify-start md:justify-center order-1 md:order-2 border-b md:border-b-0 md:border-l border-white/20"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {businesses.map((item) => (
          <motion.div
            key={item.id}
            onMouseEnter={() => setActive(item.id)}
            onTouchStart={() => setActive(item.id)}
            onClick={() => setActive(item.id)}
            className={`px-4 py-3 md:px-6 md:py-4 border-r md:border-r-0 md:border-b border-white/20 cursor-pointer flex-none min-w-[120px] md:min-w-0 text-center md:text-left transition-all duration-300 ${
              active === item.id
                ? "bg-white/20 text-white font-semibold scale-[1.02]"
                : "hover:bg-white/10 text-gray-300"
            }`}
            whileHover={{ scale: active === item.id ? 1.05 : 1.03 }}
          >
            <span className="text-sm md:text-base whitespace-nowrap">
              {item.title.toUpperCase()}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
