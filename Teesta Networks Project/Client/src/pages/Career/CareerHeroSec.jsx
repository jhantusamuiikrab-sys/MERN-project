import React from 'react';
import { motion } from 'framer-motion';

// --- Animation Variants (Required for Framer Motion effects) ---
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: 'spring', stiffness: 100 }
    }
};

const textReveal = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

// --- Main Component: Hero Section Only ---
export default function CareerHero() {
    // Placeholder video URL (Replace with your actual video or keep for stylistic demo)
    const backgroundVideoUrl = "https://assets.mixkit.co/videos/preview/mixkit-cyber-city-with-neon-lights-26867-large.mp4";

    return (
        <div className="min-h-screen bg-gray-50 font-inter">
            {/* Tailwind utility classes for font 'Inter' */}
            <style>{`
                .font-inter { font-family: 'Inter', sans-serif; }
            `}</style>
            
            {/* HERO SECTION */}
            <div className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background Video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute z-0 w-full h-full object-cover"
                    src={backgroundVideoUrl}
                    poster="https://placehold.co/1920x1080/0d9488/white?text=Tech+Background"
                    onError={(e) => { e.target.style.display = 'none'; console.log("Video failed to load, using poster image."); }}
                >
                    Your browser does not support the video tag.
                </video>

                {/* Dark Overlay for Readability */}
                <div className="absolute inset-0 z-10 bg-gray-900 bg-opacity-70"></div>

                {/* Content with Framer Motion animations */}
                <motion.div
                    className="relative z-20 text-center max-w-4xl p-6"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.h1
                        className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4"
                        variants={textReveal}
                    >
                        Pioneering the Future. <span className="text-[#cfa866] block sm:inline-block" style={{ color: "#cfa866" }}>Join Our Team.</span>
                    </motion.h1>
                    <motion.p
                        className="text-xl text-gray-300 mb-10 mt-4 max-w-2xl mx-auto"
                        variants={textReveal}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        We are an IT powerhouse blending digital solutions, real estate, and e-commerce. Find your next challenge where technology meets opportunity.
                    </motion.p>
                    <motion.button
                        className="bg-[#cfa866] hover:bg-[#cfa866] text-[#1b2e4e] font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 text-lg transform hover:scale-105"
                        variants={itemVariants}
                        transition={{ delay: 1 }}
                        whileTap={{ scale: 0.95 }}
                        // onClick={() => console.log('Button clicked: Navigate to openings section.')}
                        onClick={() => document.getElementById('openings').scrollIntoView({ behavior: 'smooth' })}
                    >
                        Explore Open Roles
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
}

export{CareerHero};
