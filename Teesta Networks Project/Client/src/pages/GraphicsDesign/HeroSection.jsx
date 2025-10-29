import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import abctGraphicsimg from '../../assets/Images/abstract_graphic_design.webp'
export default function GraphicHeroLanding() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <div className="min-h-screen bg-white text-[#1b2e4e] font-[Inter] overflow-hidden">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <motion.h1
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-6xl font-extrabold leading-tight text-[#1b2e4e]"
          >
            Future of your <br />{" "}
            <span className="text-[#cfa866]">business today.</span>
          </motion.h1>
          <motion.p
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mt-6 text-slate-600 max-w-md"
          >
            Where we elevate your business with innovative strategies and expert
            solutions. As a full-service business agency.
          </motion.p>
          <motion.div
            className="flex gap-8 mt-10"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <div>
              <div className="text-3xl font-bold text-slate-900">2000+</div>
              <div className="text-slate-500 text-sm">Your protection</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900">7001+</div>
              <div className="text-slate-500 text-sm">Provide tailored</div>
            </div>
          </motion.div>
        </div>

        {/* Right image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src={abctGraphicsimg}
            alt="abstract orange"
            className="object-cover w-200 h-100"
          />
        </motion.div>
      </section>
      {/* STAT CARDS */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6 mt-8">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          className="p-6 bg-white rounded-2xl shadow-md"
        >
          <div className="text-[#cfa866] font-bold text-2xl">721+ 1000+</div>
          <div className="font-semibold text-lg mt-2">
            Growth is our priority.
          </div>
          <p className="text-sm text-slate-600 mt-1">
            We help companies of all sizes optimize their operations.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          custom={2}
          className="p-6 bg-[#cfa866] text-white rounded-2xl shadow-md relative overflow-hidden"
        >
          <div className="absolute top-4 right-4 text-white/60">
            <FiArrowUpRight />
          </div>
          <div className="font-semibold text-lg">
            We are here to help your business
          </div>
          <p className="text-sm mt-2 opacity-90">
            As a full-service business agency, we specialize in helping
            companies of all sizes optimize their operations.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          custom={3}
          className="p-6 bg-white rounded-2xl shadow-md"
        >
          <div className="font-semibold text-lg text-slate-900">
            Build the future of your business
          </div>
          <p className="text-sm text-slate-600 mt-2">
            As a full-service business agency, we specialize in helping
            companies of all sizes optimize their operations.
          </p>
        </motion.div>
      </section>

      {/* CTA SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-extrabold text-slate-900">
            Helping <span className="text-[#cfa866]">businesses thrive</span>{" "}
            in a digital-first world
          </h2>
          <p className="text-slate-600 mt-4 text-sm">
            As a full-service business agency, we specialize in helping
            companies of all sizes optimize their operations.
          </p>
          <button className="mt-8 px-6 py-3 bg-slate-900 text-white rounded-full text-sm hover:bg-[#cfa866] transition-all duration-300">
            Read More
          </button>
        </motion.div>
      </section>
    </div>
  );
}