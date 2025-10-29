import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

import logo from '../../assets/Images/logo.png'
import itsolution from '../../assets/Images/ITSoltuionbaneer.jpg'
import digitalmarket from '../../assets/Images/Dmarketing_1.jpg'
import realestate from '../../assets/Images/Realestate.webp'
import mobilewallet from '../../assets/Images/pafpaybanner.webp'
import szutra from '../../assets/Images/szutrabanner.webp'
import ecommerce from '../../assets/Images/Ecommercebanner.webp'

export default function DescWithImageSlider() {
  const slides = [
    {
      title: "IT Solutions",
      logo: logo, // replace with your logo path
      description:
        "IT Solutions",
      image: itsolution, // replace with actual image path
      link: "#",
    },
    {
      title: "Digital Marketing",
      logo: logo,
      description:
        "Digital Marketing",
      image: digitalmarket,
      link: "#",
    },
    {
      title: "Real Estate",
      logo: logo,
      description:
        "Real Estate",
      image: realestate,
      link: "https://510earth.com",
    },
    {
      title: "Mobile E-Wallet",
      logo: logo,
      description:
        "Mobile E-Wallet",
      image: mobilewallet,
      link: "https://pafpay.com",
    },
    {
      title: "Szutra",
      logo: logo,
      description:
        "Szutra",
      image: szutra,
      link: "https://szutra.com",
    },
    {
      title: "E-commerce",
      logo: logo,
      description:
        "Torsha Plus",
      image: ecommerce,
      link: "https://torshaplus.com",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="bg-[#fff8ef] p-6 md:p-10 rounded-lg shadow-md flex flex-col md:flex-row items-center overflow-hidden">
      {/* Left Content */}
      <div className="md:w-1/2 w-full md:pr-10 text-center md:text-left transition-all duration-500 ease-in-out">
        <div className="flex flex-col justify-center h-full">
          <img
            src={slides[current].logo}
            alt="logo"
            className="h-50 w-50 mx-auto md:mx-0 mb-4"
          />
          <p className="text-gray-800 text-lg leading-relaxed mb-6">
            {slides[current].description}
          </p>
          <a
            href={slides[current].link} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center border border-gray-400 text-gray-700 px-5 py-2 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 w-fit mx-auto md:mx-0"
          >
            read more <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Right Image Slider */}
      <div className="md:w-1/2 w-full relative overflow-hidden rounded-md mt-6 md:mt-0 h-96">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={slide.title}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Dots Navigation */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 w-3 rounded-full ${
                index === current ? "bg-white" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}