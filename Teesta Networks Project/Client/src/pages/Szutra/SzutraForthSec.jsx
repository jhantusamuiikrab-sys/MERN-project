import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SzutraForthSec = () => {
  const scrollRef = useRef(null);
  // Example product data
  const products = [
    {
      id: 1,
      name: "Twist Small Handle Clutch",
      currentPrice: "₹ 2,099",
      oldPrice: "₹ 3,499",
      discount: "1,400 OFF",
      image: "https://www.mirraclothing.com/wp-content/uploads/2021/06/6-36-1.jpg", // Example image URL
      link: "https://www.szutra.com/", // Replace with actual product link
    },
    {
      id: 2,
      name: "Bun Large Handle Clutch",
      currentPrice: "₹ 2,759",
      oldPrice: "₹ 5,599",
      discount: "1,840 OFF",
      image: "https://assets0.mirraw.com/images/12432985/KTS-8008-Purple_zoom.jpg?1714976847", // Example image URL
      link: "https://www.szutra.com/", // Replace with actual product link
    },
    {
      id: 3,
      name: "Twist Small Handle Clutch",
      currentPrice: "₹ 2,099",
      oldPrice: "₹ 3,499",
      discount: "1,400 OFF",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQUY-UqYM_fw3PmgNTxrwfjzaKrUQTYY1HcN1sbIQagK-Uzoam8xPMrjNzGrXezWlNrSU&usqp=CAU", // Example image URL
      link: "https://www.szutra.com/", // Replace with actual product link
    },
    {
      id: 4,
      name: "Updo Large Framed Clutch",
      currentPrice: "₹ 2,399",
      oldPrice: "₹ 3,999",
      discount: "1,600 OFF",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5K7gibxEzp4iYPYO8_ES244DbFE6PGdvtPeovExjBICMmR0GG3o1UCMc_3-eluJ4ZrCc&usqp=CAU", // Example image URL
      link: "https://www.szutra.com/", // Replace with actual product link
    },

    // Add more products as needed
    {
      id: 5,
      name: "Pearl Handle Clutch",
      currentPrice: "₹ 2,500",
      oldPrice: "₹ 4,000",
      discount: "1,500 OFF",
      image: "https://www.houseofvardha.in/cdn/shop/products/Teal_Blue_Golden_Zari_Kanjeevaram_Silk_Saree478-A.jpg?v=1744363132&width=1080",
      link: "https://www.szutra.com/",
    },
     {
      id: 6,
      name: "Pearl Handle Clutch",
      currentPrice: "₹ 2,500",
      oldPrice: "₹ 4,000",
      discount: "1,500 OFF",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdwdQpTYRxxai_nw73qo5MxrRsGMXjLjRW_4yRooXP5_jTKQJXal5yhpYngtdFLtZeU1Y&usqp=CAU",
      link: "https://www.szutra.com/",
    },
  ];

  const scroll = (direction) => {
    const scrollAmount = 350; // Adjust scroll amount as needed
    if (scrollRef.current) {
      if (direction === "left") {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="bg-[#FFFFF] py-10 relative">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-[#1b2e4e]">
        Trending Now
      </h2>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Left Scroll Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#1b2e4e] p-2 rounded-full shadow-md z-10 focus:outline-none hover:bg-gray-100 transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6 text-[#cfa866]" />
        </button>

        {/* Product Carousel */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide space-x-6 pb-4" // 'scrollbar-hide' for custom scrollbar hiding
        >
          {products.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-72 bg-[#1b2e4e] border border-gray-200 rounded-lg shadow-sm">
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-contain p-4" // object-contain to ensure full image is visible
                />
              </a>
              <div className="p-4 text-center">
                <h3 className="text-lg font-medium text-[#cfa866] mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  <span className="font-semibold text-[#cfa866]">{product.currentPrice}</span>{" "}
                  <span className="line-through text-[#cfa866]">{product.oldPrice}</span>{" "}
                  <span className="text-green-600 font-medium">{product.discount}</span>
                </p>
                {/* Removed "Add to Cart" button */}
              </div>
            </div>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#1b2e4e] p-2 rounded-full shadow-md z-10 focus:outline-none hover:bg-gray-100 transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6 text-[#cfa866]" />
        </button>
      </div>

      {/* Custom scrollbar-hide style if needed (or use a plugin) */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </div>
  );
};

export {SzutraForthSec};