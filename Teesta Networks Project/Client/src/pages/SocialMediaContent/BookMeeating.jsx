
import { motion, AnimatePresence } from 'framer-motion';

const bookMeetingVariants = {
  initial: { x: 100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: 1.5, ease: "easeOut" },
  },
};

/* ---------------- BOOK MEETING FLOATING TAB ---------------- */
export const BookMeetingTab = ({ onOpen }) => (
  <motion.div
    variants={bookMeetingVariants}
    initial="initial"
    animate="animate"
    className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50 pointer-events-none"
  >
    <button
      onClick={onOpen}
      className="inline-block px-3 py-6 bg-[#cfa866] text-gray-900 font-extrabold text-sm uppercase tracking-widest rounded-l-xl shadow-2xl transition duration-300 hover:bg-yellow-400 hover:shadow-yellow-500/50 pointer-events-auto cursor-pointer"
      style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
    >
      Book Meeting
    </button>
  </motion.div>
);

/* ---------------- ANIMATED MODAL FORM ---------------- */
export const AnimatedMeetingForm = ({ isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.7, y: 80, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.8, y: 50, opacity: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 15 }}
          className="relative bg-gray-900 border border-[#cfa866] text-white rounded-2xl shadow-2xl p-8 w-full max-w-lg overflow-hidden"
        >
          {/* Magical Glow */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-orange-400/10 via-yellow-500/10 to-transparent blur-2xl"
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-white/70 hover:text-[#cfa866] text-xl cursor-pointer"
          >
            ✕
          </button>

          {/* Form Title */}
          <h2 className="text-3xl font-bold mb-6 text-center text-[#cfa866] relative z-10">
            Book a Meeting
          </h2>

          {/* Form Fields */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Meeting booked successfully!");
              onClose();
            }}
            className="relative z-10 space-y-5"
          >
            <div className="flex flex-col gap-2">
              <label className="text-sm text-white/70">Full Name</label>
              <input type="text" required className="bg-transparent border-b-2 border-white/40 focus:border-[#cfa866] outline-none p-2" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-white/70">Email</label>
              <input type="email" required className="bg-transparent border-b-2 border-white/40 focus:border-[#cfa866] outline-none p-2" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-white/70">Preferred Date</label>
              <input type="date" required className="bg-transparent border-b-2 border-white/40 focus:border-[#cfa866] outline-none p-2" />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 mt-4 bg-[#cfa866] text-gray-900 font-bold rounded-xl shadow-lg hover:bg-orange-300 transition cursor-pointer"
            >
              Submit
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);