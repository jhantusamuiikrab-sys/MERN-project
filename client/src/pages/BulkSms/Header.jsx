import {
  motion
} from "framer-motion";

export const Header = () => (
  <header className="absolute top-0 left-0 w-full z-10 py-4 px-6 md:px-12">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="text-2xl font-extrabold text-white tracking-widest">
        SMS<span className="text-[#cfa866]">BLAST</span>
      </div>
      <motion.button
        className="px-4 py-2 bg-white text-[#cfa866] font-bold rounded-full shadow-lg hover:shadow-xl transition duration-300 cursor-pointer"
        whileHover={{
          scale: 1.05,
          boxShadow: "0 8px 15px rgba(194, 217, 65, 0.5)",
        }}
        whileTap={{ scale: 0.95 }}
      >
        Contact Sales
      </motion.button>
    </div>
  </header>
);