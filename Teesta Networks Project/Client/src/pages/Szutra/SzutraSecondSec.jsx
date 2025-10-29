import React, { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SzutraSecondSec = () => {
  const scrollRef = useRef(null);

  const categories = [
    {
      name: "SATCHEL BAGS",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvDI1iyAZe03cH394XgHmvbR5Xk66sgxX9I_dkQfL_dDmZh6ak5ygnpf6H9pu2XD-Q9I&usqp=CAU",
      link: "https://www.szutra.com/",
    },
    {
      name: "CLUTCH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaQWkw1IxyboRSOAhpD6TBlTyv6wtlgjMc3VuRKND3OkWyLokn6Yi2qVM_PPKFYyxrylc&usqp=CAU",
      link: "https://www.szutra.com/",
    },
    {
      name: "PERFUMES",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKkeb3eLI-jPuJItYA0G1J83fOviM5QyiIqQ&s",
      link: "https://www.szutra.com/",
    },
    {
      name: "SLING BAGS",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjbGP9Ju7qUwUiiGzpwiSMwccbCTFZd5IS0A&s",
      link: "https://www.szutra.com/",
    },
    {
      name: "TOTE BAGS",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqiR8aKNRTwyhHBzoNOILH7ubEwvqgDtA9CQ&s",
      link: "https://www.szutra.com/",
    },
    {
      name: "BANARASI SAREE",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsoW846fpP_uq3q8AMZgfNiEmbzaa_Oc76Pg&s", // Valid URL used here
      link: "https://www.szutra.com/",
    },
  ];

  const scroll = (direction) => {
    const scrollAmount = 400;
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Inline style to hide scrollbar
  const hideScrollbar = {
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.style.scrollbarWidth = "none";
  }, []);

  return (
    <div className="relative w-full bg-[#FFFFFF] py-10 overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8" style={{ color: "#1b2e4e" }}>Shop By Category</h2>

      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#1b2e4e] shadow-lg rounded-full p-3 z-10 hover:bg-gray-100 transition"
      >
        <ChevronLeft className="w-6 h-6 text-[#cfa866]" />
      </button>

      {/* Scrollable List - Key change here */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth space-x-6 px-10"
        style={{
          ...hideScrollbar,
        }}
        onWheel={(e) => {
          // Check if there is significant horizontal scroll data
          if (Math.abs(e.deltaX) > 0) {
            // If deltaX exists, let the browser handle it natively by NOT preventing default
            // This relies on the overflow-x-auto and scroll-smooth classes
            return;
          }
          
          // If only deltaY is present (i.e., a regular mouse wheel scroll), 
          // we map it to a smooth horizontal scroll.
          e.preventDefault();
          scrollRef.current.scrollBy({
            left: e.deltaY * 2, // Scroll speed adjusted to be more responsive
            behavior: "smooth"
          });
        }}
      >
        {categories.map((cat, i) => (
          <a
            key={i}
            href={cat.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-72 cursor-pointer group"
          >
            <div className="p-4 rounded-2xl bg-[#cfa866] overflow-hidden shadow-md group-hover:shadow-lg transition duration-300">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-80 object-contain object-center rounded-4xl"
              />
            </div>
            <p className="text-center mt-3 text-lg font-medium tracking-wide text-[#1b2e4e]">
              {cat.name}
            </p>
          </a>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#1b2e4e] shadow-lg rounded-full p-3 z-10 hover:bg-gray-100 transition"
      >
        <ChevronRight className="w-6 h-6 text-[#cfa866]" />
      </button>
    </div>
  );
}

export { SzutraSecondSec };