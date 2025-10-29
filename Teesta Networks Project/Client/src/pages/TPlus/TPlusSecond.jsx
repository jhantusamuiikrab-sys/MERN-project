import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, TrendingUp, Zap, Clock } from 'lucide-react';

// Define Color Constants
const GOLDEN_ACCENT = '#cfa866';
const BLUE_PRIMARY = '#1b2e4e';

// --- Simulated Animation/Motion Component (for scroll-based entry effects) ---
const AnimatedSection = ({ children, delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  // Use IntersectionObserver to check when element enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Apply a delay before making it visible for the staggered effect
          const timer = setTimeout(() => setIsVisible(true), delay * 100);
          observer.unobserve(entry.target); // Stop observing once visible
          return () => clearTimeout(timer);
        }
      },
      {
        threshold: 0.1 // Trigger when 10% of the element is visible
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);

  // CSS classes for the animation transition (slide up and fade in)
  const transitionClasses = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10';

  return (
    <div
      ref={elementRef}
      className={`${className} transition-all duration-700 ease-out ${transitionClasses}`}
    >
      {children}
    </div>
  );
};
// --- Sub-Components for organization ---

// Category Card Component
const CategoryCard = ({ title, description, icon: Icon, delay }) => {
  return (
    <AnimatedSection delay={delay} className="w-full">
      <div
        className="group relative flex flex-col items-center justify-center p-8 h-full rounded-2xl border-2 transition-all duration-500 ease-out overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl"
        style={{ borderColor: GOLDEN_ACCENT + '20', backgroundColor: BLUE_PRIMARY }}
      >
        {/* Accent Bar on Hover */}
        <div className="absolute top-0 left-0 h-1 w-full transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0" style={{ backgroundColor: GOLDEN_ACCENT }}></div>

        <Icon className="w-12 h-12 mb-4 transition-transform duration-300 group-hover:scale-110" style={{ color: GOLDEN_ACCENT }} strokeWidth={1.5} />
        <h3 className="text-2xl font-semibold mb-3 text-white transition-colors duration-300" style={{ color: GOLDEN_ACCENT }}>
          {title}
        </h3>
        <p className="text-center text-[#ffffff]">
          {description}
        </p>
        <a
          href="https://torshaplus.com/" // Replace '#' with the actual URL to view all products
          target="_blank" // Opens in a new tab
          rel="noopener noreferrer" // Security attribute for target="_blank"
          className="mt-6 text-sm font-medium transition-all duration-300 flex items-center justify-center mx-auto hover:text-gray-700"
          style={{ color: GOLDEN_ACCENT }}
        >
          View All
          <ChevronRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </AnimatedSection>
  );
};


// --- Featured Categories Section (The Requested Section) ---
const FeaturedCategoriesSection = () => {
  const categories = [
    { title: "Bestsellers", description: "See what everyone's loving right now. Our most popular and highly rated items.", icon: TrendingUp },
    { title: "New Arrivals", description: "Be the first to explore fresh inventory and the latest collections added daily.", icon: Zap },
    { title: "Limited Editions", description: "Exclusive items only available for a short time. Don't miss out on uniqueness.", icon: Clock },
  ];

  return (
    <section className="py-24 px-4 sm:px-8 lg:px-16 min-h-screen flex items-center" style={{ backgroundColor: 'White' }}>
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header with Animation */}
        <AnimatedSection delay={0} className="text-center mb-16">
          <p className="text-lg font-medium tracking-widest uppercase mb-3" style={{ color: BLUE_PRIMARY }}>
            Shop By Experience
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1b2e4e]">
            Curated for Your Needs
          </h2>
        </AnimatedSection>

        {/* Categories Grid with Staggered Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <CategoryCard
              key={cat.title}
              title={cat.title}
              description={cat.description}
              icon={cat.icon}
              delay={index + 1} // Staggered delay 
            />
          ))}
        </div>
      </div>
    </section>
  );
};


// --- Main App Component ---
const TPlusSecond = () => {
  // Sets the document background and font on initial load
  useEffect(() => {
    document.body.style.backgroundColor = BLUE_PRIMARY;
    document.body.style.fontFamily = 'Inter, sans-serif';
  }, []);

  // Global styles including the custom animation 
  // (Note: This is technically not used in this file but kept for completeness of the AnimatedSection component)
  const globalStyles = `
    /* Global focus ring removal */
    .focus-ring-hidden:focus {
        box-shadow: none;
        outline: none;
    }

    /* Custom Keyframes for the animation (if a previous component needed it) */
    @keyframes pulse-slow {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.85; transform: scale(1.03); }
    }
    
    /* Custom utility class to apply the animation */
    .animate-pulse-slow {
        animation: pulse-slow 10s ease-in-out infinite;
    }
  `;

  return (
    <div className="min-h-screen antialiased">
      {/* Load Tailwind CSS */}
      <script src="https://cdn.tailwindcss.com"></script>

      {/* Inject Styles using dangerouslySetInnerHTML for custom CSS/animations */}
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />

      <main>
        {/* Only the requested section is rendered */}
        <FeaturedCategoriesSection />
      </main>
    </div>
  );
};

export { TPlusSecond };
