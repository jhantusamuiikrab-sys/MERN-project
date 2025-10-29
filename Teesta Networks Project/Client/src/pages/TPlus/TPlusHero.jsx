import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';

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
// --- Hero Section --- 
const HeroSection = () => {
    // Using a reliable placeholder URL for a guaranteed image display in the sandbox environment
    const dynamicBackgroundUrl = "TorshaPlusBanner.png";
    return (
        <div
            // UPDATED: Use flex-col, justify-end, and add vertical padding to position content
            className="relative h-screen flex flex-col justify-end overflow-hidden px-4 py-8 sm:px-8 lg:px-16 lg:pb-16"
            style={{ backgroundColor: BLUE_PRIMARY }}
        >
            {/* Background Image/Overlay (Simulated Video/Texture) */}
            <div
                className="absolute inset-0 bg-cover bg-center animate-pulse-slow"
                style={{ backgroundImage: `url(${dynamicBackgroundUrl})` }}
            >
                {/* Dark overlay for text visibility and modern aesthetic */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/100"></div>
            </div>

            {/* Content Wrapper (now aligned to the bottom) */}
            <div className="relative z-10 max-w-5xl mx-auto w-full">

                {/* Text Block - centered horizontally */}
                <div className="text-center mb-12">
                    <AnimatedSection delay={0}>
                        {/* <h1 className="text-5xl sm:text-7xl lg:text-9xl font-extrabold text-white tracking-tighter leading-tight">
                            DISCOVER <span className="block lg:inline-block" style={{ color: GOLDEN_ACCENT }}>WHAT'S NEXT.</span>
                        </h1> */}
                    </AnimatedSection>

                    {/* <AnimatedSection delay={1} className="mt-4">
                        <p className="text-lg sm:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
                            Curated selections, instant delivery. Your essentials, upgraded.
                        </p>
                    </AnimatedSection> */}
                </div>
                {/* Button Block - positioned at the bottom */}
                <AnimatedSection delay={2} className="text-center">
                    <a
                        href="https://torshaplus.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center text-white font-medium py-2 px-4 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 text-base focus-ring-hidden"
                        style={{
                            backgroundColor: GOLDEN_ACCENT,
                            boxShadow: `0 4px 8px -2px ${GOLDEN_ACCENT}80, 0 1px 3px -1px ${GOLDEN_ACCENT}80`,
                            textDecoration: 'none',
                        }}
                    >
                        Start Shopping <ChevronRight className="w-4 h-4 ml-1" />
                    </a>
                </AnimatedSection>
            </div>
        </div>
    );
};

// --- Main App Component ---
const TPlusHero = () => {

    // Sets the document background and font on initial load
    useEffect(() => {
        document.body.style.backgroundColor = BLUE_PRIMARY;
        document.body.style.fontFamily = 'Inter, sans-serif';
    }, []);

    // Global styles including the custom animation for the background video
    const globalStyles = `
        /* Global focus ring removal */
        .focus-ring-hidden:focus {
            box-shadow: none;
            outline: none;
        }

        /* Custom Keyframes for the Hero animation (simulating video movement) */
        @keyframes pulse-slow {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.85; transform: scale(1.03); }
        }
        
        /* Custom utility class to apply the animation (replacing Tailwind's 'animate-pulse-slow') */
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
                <HeroSection />
            </main>
        </div>
    );
};

export { TPlusHero };
