import React, { useState, useRef } from 'react';
import { motion, AnimatePresence,useInView ,useAnimation, } from 'framer-motion';
import { User, Mail, Phone, Menu, Code, Search, Target, MailOpen, Users } from 'lucide-react';
import RemarkableResults from './RemarkableResults';

/* ---------------- TYPEWRITER TEXT ---------------- */
const TypewriterText = ({ text, speed = 50, pause = 1500 }) => {
  const [displayedText, setDisplayedText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [loopIndex, setLoopIndex] = React.useState(0);

  React.useEffect(() => {
    let interval;

    if (!isDeleting && displayedText.length < text.length) {
      interval = setInterval(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
    } else if (isDeleting && displayedText.length > 0) {
      interval = setInterval(() => {
        setDisplayedText(text.slice(0, displayedText.length - 1));
      }, speed / 2);
    } else if (!isDeleting && displayedText.length === text.length) {
      setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setLoopIndex(loopIndex + 1);
    }

    return () => clearInterval(interval);
  }, [displayedText, isDeleting, text, speed, pause, loopIndex]);

  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-lg md:text-xl text-white/80 max-w-xl mx-auto font-light leading-relaxed"
    >
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="inline-block w-[2px] h-6 bg-orange-400 align-middle ml-1"
      />
    </motion.p>
  );
};

/* ---------------- ANIMATION VARIANTS ---------------- */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const formVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 20, delay: 1.0 },
  },
};

const bookMeetingVariants = {
  initial: { x: 100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: 1.5, ease: "easeOut" },
  },
};

const serviceItemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
};

/* ---------------- LEAD FORM ---------------- */
const LeadForm = () => {
  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert("Thank you! Your inquiry has been logged (check console for data).");
  };

  const InputField = ({ Icon, name, placeholder, type = 'text' }) => (
    <div className="flex items-center bg-transparent border-b-2 border-white/30 focus-within:border-orange-400 transition duration-300 px-2 py-1">
      <Icon className="w-5 h-5 text-white/70 mr-2" />
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={formData[name]}
        onChange={handleChange}
        className="w-full bg-transparent text-white placeholder-white/70 focus:outline-none"
        required
      />
    </div>
  );

  return (
    <motion.form
      variants={formVariants}
      initial="hidden"
      animate="visible"
      onSubmit={handleSubmit}
      className="relative z-10 w-full max-w-2xl mt-8 "
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:bg-black md:p-3 md:px-8 rounded-full ">
        <InputField Icon={User} name="fullName" placeholder="Full Name" />
        <InputField Icon={Mail} name="email" placeholder="Email Address" type="email" />
        <InputField Icon={Phone} name="phone" placeholder="Phone Number" type="tel" />
      </div>
      <div className="mt-6 md:mt-8 flex justify-center">
        <button
          type="submit"
          className="w-full md:w-auto px-10 py-3 bg-[#cfa866] text-gray-900 font-bold rounded-xl shadow-lg hover:bg-orange-300 transition duration-300 transform hover:scale-[1.02] cursor-pointer"
        >
          Get Started
        </button>
      </div>
    </motion.form>
  );
};

/* ---------------- BOOK MEETING FLOATING TAB ---------------- */
const BookMeetingTab = ({ onOpen }) => (
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
const AnimatedMeetingForm = ({ isOpen, onClose }) => (
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

/* ---------------- SERVICES SECTION ---------------- */


const ServicesSection = () => {
  const services = [
    { icon: Code, title: "Web Design", description: "Create a brand and communicate your value." },
    { icon: Search, title: "SEO", description: "Find new clients organically and grow a foundation for tomorrow." },
    { icon: Target, title: "PPC", description: "Put your business in front of the right people today." },
    { icon: MailOpen, title: "Email & SMS", description: "Get more out of your current website visitors." },
    { icon: Users, title: "Social Media", description: "Increase awareness by engaging with your audience." },
  ];

  const [hovered, setHovered] = React.useState(null);

  // 👁️ Create reference to the section for intersection observer
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 }); // triggers when 30% visible
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
    <section ref={ref} className="bg-gray-800 py-16 md:py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={controls}
          variants={{
            hidden: { y: -50, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
          }}
          className="text-4xl md:text-5xl font-extrabold text-white text-center mb-12 md:mb-16 leading-tight"
        >
          Results-driven Marketing
        </motion.h2>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
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
                  color: hovered === index ? "#fb923c" : "#ffffff",
                  scale: hovered === index ? 1.2 : 1,
                }}
                transition={{ type: "spring", stiffness: 150 }}
                className="mb-4 z-10"
              >
                <service.icon size={40} />
              </motion.div>

              {/* Text */}
              <h3 className="text-xl font-bold text-white mb-2 z-10">{service.title}</h3>
              <p className="text-white/70 z-10">{service.description}</p>

              {/* Glow effect when hovered */}
              {hovered === index && (
                <motion.div
                  layoutId="glow"
                  className="absolute inset-0 bg-orange-400/10 blur-2xl rounded-2xl"
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


/* ---------------- MAIN PAGE ---------------- */
export default function SocialMediaMarketingPage() {

  const [isMeetingOpen, setIsMeetingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 font-inter antialiased overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center p-4">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            src="/videoplayback.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/70 backdrop-brightness-50"></div>
        </div>

        {/* Floating Tab */}
        <BookMeetingTab onOpen={() => setIsMeetingOpen(true)} />

        {/* Main Content */}
        <div className="relative z-10 text-center flex flex-col items-center justify-center h-full pt-20">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-4xl">
            <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4">
              Award Winning
              <span className="block mt-1">Digital Marketing Agency</span>
            </motion.h2>

            <TypewriterText text="We are passionate about fostering growth and delivering measurable results for businesses of all sizes through innovative digital strategies." />
          </motion.div>

          <LeadForm />
        </div>
      </section>

      {/* --- SERVICES SECTION (NEW) --- */}
      <ServicesSection />

      {/* --- TRUST BADGES SECTION --- */}
      <div className="w-full max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-white text-3xl font-bold text-center mb-10">Trusted By The Industry's Best</h2>
        <div className="flex flex-wrap justify-center items-stretch gap-4 md:gap-6 lg:gap-8">
            {/* Trust Badge 1 */}
            <div className="flex border-2 border-white rounded-lg p-2 md:p-3 space-x-2 w-full max-w-[200px] sm:w-auto">
                <div className="flex items-center text-sm text-white font-bold inc-years pt-2">
                    9 YEARS
                </div>
            </div>
            {/* Trust Badge 2 */}
            <div className="flex flex-col border-2 border-white rounded-lg p-3 w-full max-w-[150px] sm:w-auto items-center justify-center text-center">
                <div className="text-white text-3xl font-black mb-1">
                    G
                </div>
                <div className="text-sm font-medium text-white leading-tight">
                    Google Partner
                </div>
                <div className="text-[0.6rem] font-bold text-yellow-400 mt-1 uppercase tracking-wider">
                    PREMIER 2025
                </div>
            </div>
            {/* Trust Badge 3 */}
            <div className="flex border-2 border-white rounded-lg w-full max-w-[200px] sm:w-auto">
                <div className="flex items-center text-sm text-white font-bold inc-years p-1">
                    2025
                </div>
                <div className="flex flex-col p-3 md:p-4 items-center justify-center text-center">
                    <svg viewBox="0 0 100 100" className="w-6 h-6 mb-1" fill="#fff">
                        <rect x="0" y="0" width="45" height="45" />
                        <rect x="55" y="0" width="45" height="45" />
                        <rect x="0" y="55" width="45" height="45" />
                        <rect x="55" y="55" width="45" height="45" />
                    </svg>
                    <div className="text-sm font-medium text-white leading-tight">
                        Microsoft Advertising
                    </div>
                    <div className="text-xl font-bold text-white mt-1">
                        Select Partner
                    </div>
                </div>
            </div>
            {/* Trust Badge 4 */}
            <div className="flex border-2 border-white rounded-lg p-3 w-full max-w-[150px] sm:w-auto items-center justify-center">
                <div className="flex flex-col items-center justify-center text-center">
                    <span className="text-white text-2xl font-black mb-1">
                        BBB
                    </span>
                    <div className="text-white text-xl font-bold leading-none">
                        A+
                    </div>
                    <div className="text-white text-sm leading-none mt-1">
                        rating.
                    </div>
                </div>
            </div>
            {/* Trust Badge 5 */}
            <div className="flex flex-col border-2 border-white rounded-lg p-3 w-full max-w-[150px] sm:w-auto items-center justify-center text-center">
                <div className="flex text-white text-2xl font-extrabold mb-1 items-center space-x-0.5">
                    <span className="text-4xl leading-none">&infin;</span> 
                    <span>Meta</span>
                </div>
                <div className="text-sm font-medium text-white leading-tight">
                    Business Partner
                </div>
            </div>
            {/* Trust Badge 6 */}
            <div className="flex flex-col border-2 border-white rounded-lg p-3 w-full max-w-[180px] sm:w-auto items-center justify-center text-center">
                 <div className="text-white text-lg font-black mb-1 flex items-center">
                     <span className="text-white font-bold text-2xl mr-1">amazon</span><span className="text-white text-xs">ads</span>
                </div>
                <div className="text-sm font-medium text-white leading-tight">
                    Verified partner
                </div>
            </div>
        </div>
    </div>
        
      {/* Animated Form Modal */}
      <AnimatedMeetingForm isOpen={isMeetingOpen} onClose={() => setIsMeetingOpen(false)} />
        <RemarkableResults/>
    </div>
  );
}