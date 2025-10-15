import React, { useState, useRef } from 'react';
import { motion, AnimatePresence,useInView ,useAnimation, } from 'framer-motion';
import { User, Mail, Phone, Menu, Code, Search, Target, MailOpen, Users } from 'lucide-react';


/* ---------------- TYPEWRITER TEXT ---------------- */
export const TypewriterText = ({ text, speed = 50, pause = 1500 }) => {
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

export const formVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 20, delay: 1.0 },
  },
};

/* ---------------- LEAD FORM ---------------- */
export const LeadForm = () => {
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