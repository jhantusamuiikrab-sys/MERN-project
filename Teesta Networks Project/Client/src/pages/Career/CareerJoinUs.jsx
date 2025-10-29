import React from 'react';
import { motion } from 'framer-motion';

// --- Icon Definitions (Simulated Lucide React Imports) ---
// These SVG definitions are necessary for the value cards.
const Briefcase = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>;
const Zap = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
const Users = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;


// --- Animation Variants (Required for Framer Motion effects) ---
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.1,
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

const cardInView = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", bounce: 0.4, duration: 0.8 }
    }
};

// --- Main Component ---
export default function CareerJoin() {
    return (
        <div className="min-h-screen bg-[#cfa866] font-inter">
            {/* Tailwind utility classes for font 'Inter' */}
            <style>{`
                .font-inter { font-family: 'Inter', sans-serif; }
            `}</style>
            
            {/* WHY JOIN US - Culture & Mission Section */}
            <motion.section
                className="py-20 bg-[#cfa866]"
                initial="offscreen"
                whileInView="onscreen" // Triggers animation when section is in view
                viewport={{ once: true, amount: 0.3 }} // Animation runs only once
                variants={containerVariants}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2 className="text-4xl font-extrabold text-[#1b2e4e] text-center mb-4" variants={itemVariants}>
                        Why Our Team is Unique
                    </motion.h2>
                    <motion.p className="text-xl text-[#1b2e4e] text-center mb-12 max-w-3xl mx-auto" variants={itemVariants}>
                        We are a fusion of technology and business, giving you unmatched exposure to diverse industries.
                    </motion.p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Value Proposition Card 1: Cross-Industry Exposure */}
                        <motion.div className="text-center p-8 bg-blue-50 rounded-2xl shadow-md border-b-4 border-blue-500" variants={cardInView}>
                            <Users className="w-12 h-12 text-[#1b2e4e] mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-[#1b2e4e] mb-2">Cross-Industry Exposure</h3>
                            <p className="text-[#1b2e4e]">Work on projects ranging from **CRM software** and **Google Ads** to **Real Estate** and **Designer Clothes** e-commerce.</p>
                        </motion.div>

                        {/* Value Proposition Card 2: Innovation */}
                        <motion.div className="text-center p-8 bg-teal-50 rounded-2xl shadow-md border-b-4 border-teal-500" variants={cardInView}>
                            <Zap className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-[#1b2e4e] mb-2">Innovation at Scale</h3>
                            <p className="text-[#1b2e4e]">Be at the forefront of digital transformation, creating highly engaging solutions in a fast-paced, high-energy environment.</p>
                        </motion.div>

                        {/* Value Proposition Card 3: Entrepreneurial Spirit */}
                        <motion.div className="text-center p-8 bg-purple-50 rounded-2xl shadow-md border-b-4 border-purple-500" variants={cardInView}>
                            <Briefcase className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-[#1b2e4e] mb-2">Entrepreneurial Spirit</h3>
                            <p className="text-[#1b2e4e]">We encourage ownership. Your ideas directly contribute to new business lines and overall company success.</p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
        </div>
    );
}

export{CareerJoin};
