import React from 'react';
import { motion } from 'framer-motion';

// --- Icon Definitions (Simulated Lucide React Imports) ---
// Necessary SVG definitions for the perk cards.
const Gem = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3 12 8 18 3 21 7 12 22 3 7Z"/></svg>;
const Clock = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const DollarSign = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>;
const Coffee = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 6H3c-1.1 0-2 .9-2 2v8a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V8a2 2 0 0 0-2-2z"/><path d="M19 18a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2"/><path d="M7 6V2"/></svg>;

// --- Animation Variants ---
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

// --- Data ---
const perks = [
    { title: "Competitive Salary", icon: DollarSign, description: "Highly attractive compensation packages that reflect your expertise." },
    { title: "Flexible Work Hours", icon: Clock, description: "Manage your time and energy with flexible start and end times." },
    { title: "Diverse Projects", icon: Gem, description: "Work across IT, Real Estate, Fashion, and E-commerce—never a dull moment!" },
    { title: "Learning Allowance", icon: Coffee, description: "Dedicated budget for courses, conferences, and skill development." },
];

// --- Sub-Component (Perk Card) ---
const PerkCard = ({ title, description, icon: Icon }) => (
    <motion.div
        className="p-6 bg-[#1b2e4e] rounded-xl shadow-lg border-t-4 border-[#cfa866]"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
    >
        <Icon className="w-10 h-10 text-[#cfa866] mb-4" />
        <h3 className="text-xl font-semibold text-[#cfa866] mb-2">{title}</h3>
        <p className="text-[#cfa866]">{description}</p>
    </motion.div>
);

// --- Main Component: Perks Section Only ---
export default function CareerBenefits() {
    return (
        <div className="min-h-screen bg-white font-inter">
            {/* Tailwind utility classes for font 'Inter' */}
            <style>{`
                .font-inter { font-family: 'Inter', sans-serif; }
            `}</style>
            
            {/* 4. PERKS & BENEFITS SECTION */}
            <motion.section
                className="py-20 bg-white"
                initial="hidden"
                whileInView="visible" // Animation triggers on scroll
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2 className="text-4xl font-extrabold text-[#1b2e4e] text-center mb-4" variants={itemVariants}>
                        The Benefits Package
                    </motion.h2>
                    <motion.p className="text-xl text-[#1b2e4e] text-center mb-12 max-w-3xl mx-auto" variants={itemVariants}>
                        We invest in our people—with competitive pay, flexibility, and a focus on continuous growth.
                    </motion.p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {perks.map((perk, index) => (
                            <PerkCard key={index} {...perk} />
                        ))}
                    </div>
                </div>
            </motion.section>
        </div>
    );
}

export {CareerBenefits};