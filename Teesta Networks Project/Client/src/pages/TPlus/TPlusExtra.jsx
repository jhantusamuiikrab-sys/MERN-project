import React, { useState, useEffect, useRef } from 'react';

import { ShoppingCart, Heart } from 'lucide-react';



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



// Product Card Component

const ProductCard = ({ product, delay }) => {

    // Placeholder image URL for a clean, premium product shot

    const imageUrl = `https://placehold.co/400x500/${BLUE_PRIMARY.substring(1)}/${GOLDEN_ACCENT.substring(1)}?text=${encodeURIComponent(product.name.replace(/\s/g, '+'))}`;



    return (

        <AnimatedSection delay={delay} className="w-full">

            <div

                className="group relative bg-gray-900 overflow-hidden rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"

            >

                {/* Product Image */}

                <div className="relative overflow-hidden">

                    <img

                        src={imageUrl}

                        alt={product.name}

                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"

                        loading="lazy"

                    />



                    {/* Hover Overlay Buttons */}

                    <div className="absolute inset-0 bg-black/50 flex justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">

                        <button

                            className="p-3 m-2 rounded-full text-white transition-all duration-300 transform hover:scale-110"

                            style={{ backgroundColor: GOLDEN_ACCENT }}

                            title="Add to Cart"

                        >

                            <ShoppingCart className="w-5 h-5" />

                        </button>

                        <button

                            className="p-3 m-2 rounded-full text-white bg-gray-800 transition-all duration-300 transform hover:scale-110"

                            title="Add to Wishlist"

                        >

                            <Heart className="w-5 h-5" />

                        </button>

                    </div>

                </div>



                {/* Product Info */}

                <div className="p-5 text-center">

                    <h3 className="text-xl font-medium mb-1 text-white truncate">{product.name}</h3>

                    <p className="text-sm uppercase tracking-wider text-gray-400 mb-2">{product.category}</p>

                    <p className="text-2xl font-bold" style={{ color: GOLDEN_ACCENT }}>

                        ${product.price.toFixed(2)}

                    </p>

                </div>

            </div>

        </AnimatedSection>

    );

};





// --- Featured Products Showcase Section (The Requested Section) ---

const FeaturedProductsSection = () => {

    const featuredProducts = [

        { name: "Infinity Watch", price: 499.99, category: "Accessories" },

        { name: "Zenith Headset", price: 199.00, category: "Electronics" },

        { name: "Aurora Wallet", price: 79.50, category: "Leather Goods" },

        { name: "Quantum Sphere", price: 1250.00, category: "Home Tech" },

        { name: "Lunar Desk Lamp", price: 89.99, category: "Lighting" },

        { name: "Apex Backpack", price: 149.00, category: "Travel" },

    ];



    return (

        <section className="py-24 px-4 sm:px-8 lg:px-16" style={{ backgroundColor: 'White' }}>

            <div className="max-w-7xl mx-auto">

                {/* Section Header with Animation */}

                <AnimatedSection delay={0} className="text-center mb-16">

                    <p className="text-lg font-medium tracking-widest uppercase mb-3" style={{ color: BLUE_PRIMARY }}>

                        Hand-Picked

                    </p>

                    <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1b2e4e]">

                        Our Latest Arrivals

                    </h2>

                </AnimatedSection>



                {/* Products Grid with Staggered Animation */}

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">

                    {featuredProducts.map((product, index) => (

                        <ProductCard

                            key={product.name}

                            product={product}

                            delay={index * 0.5 + 1} // Staggered delay for each card

                        />

                    ))}

                </div>



                {/* Call to Action Button */}

                <AnimatedSection delay={featuredProducts.length * 0.5 + 1} className="text-center mt-16">

                    <button

                        className="font-bold py-4 px-12 rounded-full shadow-lg transition-all duration-300 transform hover:scale-[1.03] text-lg focus-ring-hidden border-2"

                        style={{

                            borderColor: GOLDEN_ACCENT,

                            color: GOLDEN_ACCENT,

                            backgroundColor: BLUE_PRIMARY

                        }}

                    >

                        Explore The Full Collection

                    </button>

                </AnimatedSection>

            </div>

        </section>

    );

};





// --- Main App Component ---

const TPlusThird = () => {



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

                <FeaturedProductsSection />

            </main>

        </div>

    );

};



export { TPlusThird };