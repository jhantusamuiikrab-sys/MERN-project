import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// --- Configuration Constants ---
const CARD_WIDTH_PX = 384; // Corresponds to Tailwind 'w-96'
const CARD_GAP_PX = 24;    // Corresponds to Tailwind 'gap-6'
const CARD_FULL_SIZE = CARD_WIDTH_PX + CARD_GAP_PX;
const AUTO_ROTATE_INTERVAL_MS = 4000; // Auto-rotate every 4 seconds

// --- Testimonial Data ---
const testimonialsData = [
  {
    id: 1,
    name: 'Dr. Mark K. Sellam',
    company: 'Pursuit Of Happiness',
    avatar: 'https://images.unsplash.com/photo-1507003211169-e695d52e1b1a?auto=format&fit=crop&q=80&w=250&h=250&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
    image: 'https://images.unsplash.com/photo-1549040375-81216dd1ed78?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Our traffic is up by twenty percent',
    review: "SmartShee team went out of their way to understand our mission and tailor their approach to meet our goals. As a result, within only 3 months, our traffic is up by 20% and the quality has improved beyond expectation.",
    service: 'Organic SEO',
    rating: 5,
  },
  {
    id: 2,
    name: 'Fabiana Diaz',
    company: 'The Logo Boutique',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29329?auto=format&fit=crop&q=80&w=250&h=250&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHxlbnwwfHx8fHw%3D',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Good quality PPC campaign',
    review: "We are a 100% online business and SmartShee keeps giving us new clients!!! We recommend the company for anybody looking for good quality PPC campaign management.",
    service: 'PPC Advertising',
    rating: 4,
  },
  {
    id: 3,
    name: 'Bill O\'Donovan',
    company: 'Williamsburg Charter Sails',
    avatar: 'https://images.unsplash.com/photo-1531427186611-ad02f06b90fc?auto=format&fit=crop&q=80&w=250&h=250&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D',
    image: 'https://images.unsplash.com/photo-1447069387553-45fde8465306?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Excellent customer services and expertise',
    review: "Joe K convinced me that a delistioned Landing Page for Google Ads would help a lot. His team took the time to get it right and put up with numerous reasons that I requested. Excellent customer service and expertise!",
    service: 'Website Design',
    rating: 5,
  },
  {
    id: 4,
    name: 'Sarah Chen',
    company: 'Global Innovators',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=250&h=250&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4cd085?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Highly Recommended for SEO',
    review: "The SEO strategies implemented by the team were outstanding. We saw a significant increase in organic traffic and conversions within a few months. Professional, efficient, and truly knowledgeable!",
    service: 'Organic SEO',
    rating: 5,
  },
  {
    id: 5,
    name: 'John Doe',
    company: 'Creative Solutions',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=250&h=250&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHxlbnwwfHx8fHw%3D',
    image: 'https://images.unsplash.com/photo-1517245386707-bb7ee47596c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Fantastic Web Design Services',
    review: "Our new website looks incredible and functions perfectly. The design team captured our vision perfectly and delivered a stunning product on time and within budget. We couldn't be happier!",
    service: 'Website Design',
    rating: 5,
  },
];

// --- Testimonial Card Component ---
// --- Testimonial Card Component (The part that needs the fix) ---
const TestimonialCard = ({ testimonial }) => {
  // Your fixed color class definitions
  const DARK_PRIMARY_TEXT = "text-[#101828]"; 
  const ACCENT_COLOR_CLASSES = "bg-[#cfa866]"; 
  
  // Calculate a truncated review to prevent huge cards, while displaying the full review if it's short.
  const MAX_REVIEW_LENGTH = 200;
  const reviewText = testimonial.review.length > MAX_REVIEW_LENGTH 
    ? testimonial.review.substring(0, MAX_REVIEW_LENGTH) + '...'
    : testimonial.review;

  return (
    // Card width remains w-96
    <div className="flex-shrink-0 w-96 shadow-2xl rounded-lg overflow-hidden border border-gray-700">
      {/* Image Placeholder Area (Fixed height h-64 is already good) */}
      <div 
        className="h-64 relative bg-cover bg-center" 
        style={{ backgroundImage: `url(${testimonial.image})` }}
      >
        {/* Dark overlay for text visibility */}
        <div className="absolute inset-0 bg-dark-primary/40 backdrop-brightness-75"></div>
        
        {/* Avatar and Name Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 flex items-end">
          <img 
            src={testimonial.avatar} 
            alt={testimonial.name} 
            className="w-16 h-16 rounded-full border-4 border-white object-cover" 
          />
          <div className="ml-3 z-10">
            <p className="font-bold text-white text-lg drop-shadow-md">{testimonial.name}</p>
            <p className="text-sm text-gray-200 drop-shadow-md">{testimonial.company}</p>
          </div>
        </div>
      </div>

      {/* REVIEW TEXT BOX - FIX APPLIED HERE */}
      <div className={`p-5 ${ACCENT_COLOR_CLASSES} min-h-40 flex flex-col justify-start`}>
        <h4 className={`font-semibold text-lg mb-2 ${DARK_PRIMARY_TEXT}`}>{testimonial.title}</h4>
        <p className={`text-sm ${DARK_PRIMARY_TEXT}/90`}>"{reviewText}"</p>
      </div>
    </div>
  );
};

// --- Main Testimonial Carousel Component ---
const TestimonialCarousel = () => {
  const constraintsRef = useRef(null); // Reference to the visible container
  const carouselContentRef = useRef(null); // Reference to the draggable content
  const x = useMotionValue(0); // Framer Motion value for horizontal position
  const springX = useSpring(x, { stiffness: 300, damping: 30 }); // Smooth spring animation
  
  const [dragBounds, setDragBounds] = useState({ left: 0, right: 0 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [currentFilter, setCurrentFilter] = useState('All'); // For service tabs
  
  const filteredTestimonials = currentFilter === 'All' 
    ? testimonialsData 
    : testimonialsData.filter(t => t.service === currentFilter);

  // --- Calculate Drag Constraints ---
  useEffect(() => {
    const calculateConstraints = () => {
      if (constraintsRef.current && carouselContentRef.current) {
        const carouselContentWidth = carouselContentRef.current.scrollWidth;
        const containerWidth = constraintsRef.current.offsetWidth;
        
        // If content fits, no drag needed. Otherwise, calculate max left drag.
        const newLeftBound = containerWidth - carouselContentWidth;
        setDragBounds({ left: Math.min(0, newLeftBound), right: 0 });

        // Reset x position if constraints change significantly
        const currentX = x.get();
        if (currentX < newLeftBound) {
            springX.start(newLeftBound);
            x.set(newLeftBound); // Also update direct motion value
        } else if (currentX > 0) {
            springX.start(0);
            x.set(0);
        }
      }
    };

    // Recalculate on mount and on window resize
    calculateConstraints();
    window.addEventListener('resize', calculateConstraints);
    return () => window.removeEventListener('resize', calculateConstraints);
  }, [filteredTestimonials.length, springX]); // Recalculate if number of testimonials changes due to filter

  // --- Snap to Card Logic ---
  const handleDragEnd = useCallback((event, info) => {
    setIsDragging(false);
    
    const currentX = x.get();
    
    // Determine the closest card index based on current scroll position
    // We adjust by half a card width to determine which card is "most visible"
    const offsetCurrentX = Math.abs(currentX);
    let newIndex = Math.round(offsetCurrentX / CARD_FULL_SIZE);
    
    // Ensure index is within the bounds of filtered testimonials
    newIndex = Math.max(0, Math.min(newIndex, filteredTestimonials.length - 1));
    
    // Calculate the target X position to align the new card
    const targetX = -newIndex * CARD_FULL_SIZE;

    // Constrain the targetX within the calculated dragBounds
    const finalTargetX = Math.max(dragBounds.left, Math.min(dragBounds.right, targetX));
    
    springX.start(finalTargetX);
    setCurrentIndex(newIndex);
  }, [x, springX, filteredTestimonials.length, dragBounds]);


  // --- Auto-Rotation Logic ---
  useEffect(() => {
    if (isDragging || filteredTestimonials.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const nextIndex = (prevIndex + 1) % filteredTestimonials.length;
        
        const targetX = -nextIndex * CARD_FULL_SIZE;
        // Ensure the target position respects the drag boundaries
        const finalTargetX = Math.max(dragBounds.left, Math.min(dragBounds.right, targetX));

        springX.start(finalTargetX);
        return nextIndex;
      });
    }, AUTO_ROTATE_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [filteredTestimonials.length, springX, isDragging, dragBounds]);


  // --- JSX RENDER ---
  return (
    <div className="bg-[#101828] py-16"> {/* Using your specified color #101828 directly */}
      
      {/* HEADER SECTION */}
      <header className="text-center mb-10 text-white"> 
        <h2 className="text-4xl font-bold">Our clients love working with us</h2>
        <p className="mt-2 text-gray-400">Filter by service or attribute to see what's important to you.</p>

        {/* SERVICE TABS */}
        <div className="flex flex-wrap justify-center mt-6 gap-3 px-4 sm:px-8 cursor-pointer">
          {['All', 'PPC Advertising', 'Organic SEO', 'Website Design'].map(tab => ( // Simplified tabs for example
             <button 
                key={tab} 
                onClick={() => {
                    setCurrentFilter(tab);
                    setCurrentIndex(0); // Reset to first card on filter change
                    springX.start(0); // Snap to the beginning
                }}
                className={`px-4 py-2 text-sm font-medium border rounded-full transition cursor-pointer
                           ${currentFilter === tab 
                              ? 'bg-[#cfa866] text-dark-primary border-amber-500 ' 
                              : 'bg-gray-800 hover:bg-gray-700 text-gray-200 border-gray-700 '
                           }`}
             >
                {tab}
             </button>
          ))}
        </div>
      </header>

      {/* CAROUSEL CONTAINER (The visible area) */}
      <div 
        ref={constraintsRef} 
        className="overflow-hidden cursor-grab px-4 sm:px-8 select-none" // Added select-none to prevent text selection during drag
      >
        
        {/* DRAGGABLE CONTENT (The moving part) */}
        <motion.div
          ref={carouselContentRef}
          style={{ x: springX }}
          drag="x"
          dragConstraints={dragBounds}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
          className="flex gap-6 p-4 w-fit" // w-fit allows the content to define its own width
        >
          {filteredTestimonials.length > 0 ? (
            filteredTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))
          ) : (
            <div className="text-white text-center w-full py-10">No testimonials found for this filter.</div>
          )}
        </motion.div>

      </div>
       {/* Simple Indicators */}
      {filteredTestimonials.length > 0 && (
        <div className="flex justify-center mt-6 space-x-2">
          {filteredTestimonials.map((_, index) => (
            <div 
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-amber-500 w-6' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TestimonialCarousel;