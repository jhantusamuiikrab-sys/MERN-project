import React, { useState, useEffect, useRef } from 'react';
import { Truck, Gem, Lock } from 'lucide-react'; // Changed icons for clarity

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


// --- Value Proposition Section (The new, clean fourth section) ---
const ValuePropositionSection = () => {

    const valueProps = [
        {
            icon: Truck,
            title: "WORLDWIDE DELIVERY",
            description: "Seamless logistics to every corner of the globe.",
            delay: 0
        },
        {
            icon: Gem,
            title: "PREMIUM QUALITY",
            description: "Hand-selected products curated for lasting excellence.",
            delay: 1
        },
        {
            icon: Lock,
            title: "SECURE CHECKOUT",
            description: "Industry-leading encryption protects your privacy.",
            delay: 2
        },
    ];

    return (
        <section className="py-20 px-4 sm:px-8 lg:px-16" style={{ backgroundColor: 'White' }}>
            <div className="max-w-7xl mx-auto text-center">

                <AnimatedSection delay={0.5}>
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1b2e4e] mb-4">
                        <span style={{ color: BLUE_PRIMARY }}>ELEVATE</span> YOUR EXPERIENCE
                    </h2>
                    <p className="text-xl text-[#1b2e4e] mb-16 max-w-3xl mx-auto">
                        We are committed to exceptional quality and unparalleled service in every transaction.
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {valueProps.map((prop, index) => (
                        <AnimatedSection
                            key={index}
                            delay={prop.delay + 3}
                            className="p-6 rounded-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
                        >
                            <div
                                className="p-8 rounded-xl h-full"
                                style={{ backgroundColor: BLUE_PRIMARY }}
                            >
                                <prop.icon
                                    className="w-12 h-12 mx-auto mb-6"
                                    style={{ color: GOLDEN_ACCENT }}
                                    strokeWidth={1.5}
                                />
                                <h3
                                    className="text-2xl font-bold mb-3 text-center"
                                    style={{ color: GOLDEN_ACCENT }}
                                >
                                    {prop.title}
                                </h3>
                                <p
                                    className="text-lg text-center"
                                    style={{ color: GOLDEN_ACCENT }}
                                >
                                    {prop.description}
                                </p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

            </div>
        </section>
    );
};


// --- Main App Component ---
const TPlusForth = () => {

    // Sets the document background and font on initial load
    useEffect(() => {
        document.body.style.backgroundColor = BLUE_PRIMARY;
        document.body.style.fontFamily = 'Inter, sans-serif';
    }, []);

    // Global styles including the custom animation 
    const globalStyles = `
        /* Global focus ring removal */
        .focus-ring-hidden:focus {
            box-shadow: none;
            outline: none;
        }

        /* Custom Keyframes for the animation (kept for potential future use) */
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
                <ValuePropositionSection />
            </main>
        </div>
    );
};

export { TPlusForth };
