import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import GphStaggeredAnimation from './GAnimation';
import UIUX from "../../assets/Images/ui-ux-design.png";
import Printpack from "../../assets/Images/Print-Package.jpg";
import BrandIdty from "../../assets/Images/brand-idtity.jpg";
const slides = [
  {
    title: 'Brand Identity',
    subtitle: 'Memorable logos, color systems and brand guidelines.',
    img: BrandIdty,
  },
  {
    title: 'Web & UI Design',
    subtitle: 'High-converting landing pages and polished UI systems.',
    img: UIUX,
  },
  {
    title: 'Print & Packaging',
    subtitle: 'Elegant prints, packaging mockups and promo collateral.',
    img: Printpack,
  },
];

export default function GraphicDesignLanding() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearTimeout(t);
  }, [index, paused]);

  const go = (dir) => {
    setIndex((i) => {
      const next = (i + dir + slides.length) % slides.length;
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-[#1b2e4e] antialiased">   
      {/* HERO + SLIDER */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
        <div className="space-y-6">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold leading-tight text-[#cfa866]"
          >
            Graphic design that turns heads — and converts.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-slate-600"
          >
            From brand identities to web UI and bespoke print — handcrafted visuals with strategy behind every pixel.
          </motion.p>
          <motion.div className="flex gap-4" initial={{ scale: 0.95 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }}>
            <button className="px-5 py-3 rounded-full bg-gradient-to-r from-[#cfa866] to-[#f0d9aa] text-[#1b2e4e] font-medium shadow hover:scale-105 transition transform">Start a project</button>
            {/* <button className="px-5 py-3 rounded-full bg-gradient-to-r from-[#2f4674] to-[#a8c2f0] text-[#cfa866] hover:scale-105 transition transform">View portfolio</button> */}
          </motion.div>
          <div className="mt-4 text-sm text-[#1b2e4e]">
            <strong>Trusted by</strong>
            <div className="flex items-center gap-4 mt-3">
              <div className="w-20 h-8 bg-gradient-to-r from-[#cfa866] to-[#f0d9aa] rounded flex items-center justify-center text-xs">Acme</div>
              <div className="w-20 h-8 bg-gradient-to-r from-[#cfa866] to-[#f0d9aa] rounded flex items-center justify-center text-xs">Groov</div>
              <div className="w-20 h-8 bg-gradient-to-r from-[#cfa866] to-[#f0d9aa] rounded flex items-center justify-center text-xs">Motive</div>
            </div>
          </div>
        </div>

        {/* Slider Card */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.6 }}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              className="h-80 md:h-96 w-full relative bg-gray-200"
            >
              <img src={slides[index].img} alt="slide" className="object-cover w-full h-full" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              <div className="absolute left-6 bottom-6 text-white max-w-xs">
                <div className="text-sm uppercase tracking-widest text-indigo-200">Featured</div>
                <div className="text-2xl font-bold leading-tight">{slides[index].title}</div>
                <div className="mt-2 text-sm text-indigo-100/90">{slides[index].subtitle}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <button onClick={() => go(-1)} className="p-2 rounded-full bg-white/90 shadow hover:scale-105 transition">
              <FiChevronLeft />
            </button>
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <button onClick={() => go(1)} className="p-2 rounded-full bg-white/90 shadow hover:scale-105 transition">
              <FiChevronRight />
            </button>
          </div>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((s, i) => (
              <button
                key={i}
                aria-label={`slide-${i}`}
                onClick={() => setIndex(i)}
                className={`w-10 h-2 rounded-full ${i === index ? 'bg-white' : 'bg-white/40'} transition-all`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <motion.h2 className="text-2xl font-bold mb-6 text-[#cfa866]" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          What we do
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Branding', desc: 'Logo systems, tone & visual language.' },
            { title: 'UI/UX', desc: 'Design systems, prototypes & micro-interactions.' },
            { title: 'Print', desc: 'Packaging, brochures & posters.' },
          ].map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.15 }}
              className="p-6 bg-white rounded-2xl shadow-md"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#cfa866] to-[#f0d9aa] flex items-center justify-center font-bold text-[#1b2e4e]">{i + 1}</div>
              <div className="mt-4 font-semibold text-lg text-[#cfa866]">{f.title}</div>
              <div className="mt-2 text-sm text-[#1b2e4e]">{f.desc}</div>
            </motion.div>
          ))}
        </div>
      </section>
    <GphStaggeredAnimation/>
      {/* PORTFOLIO GALLERY */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <motion.h3 className="text-2xl font-bold mb-6 text-[#cfa866]" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          Selected works
        </motion.h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.98, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.35 }}
              className="relative rounded-xl overflow-hidden shadow-sm bg-gray-100 h-40"
            >
              <img src={`https://picsum.photos/seed/gd${i}/800/600`} className="w-full h-full object-cover" alt={`work-${i}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                <div className="text-white text-sm">Project {i + 1}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          className="rounded-2xl p-8 bg-gradient-to-r from-[#cfa866] to-[#d8b46e] text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ scale: 0.98, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
        >
          <div>
            <div className="text-2xl font-bold text-[#1b2e4e]">Start your visual story today</div>
            <div className="text-sm opacity-90 mt-1 text-[#1b2e4e]">Tell us about your project and we’ll propose a creative direction.</div>
          </div>
          <div className="flex gap-3">
            <button className="px-5 py-3 rounded-full bg-white text-[#1b2e4e] font-semibold shadow">Request proposal</button>
            {/* <button className="px-5 py-3 rounded-full border border-white/40 text-white">Chat with us</button> */}
          </div>
        </motion.div>
      </section>     
    </div>
  );
}
