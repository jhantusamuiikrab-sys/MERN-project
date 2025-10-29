import React from 'react';
import { motion } from 'framer-motion';

// --- Icon Definitions (Simulated Lucide React Imports) ---
// These SVG definitions are necessary for the job cards.
const Briefcase = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>;
const Zap = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
const LineChart = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m18 11-6-6-8 8"/></svg>;
const Globe = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>;
const ShoppingBag = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" x2="21" y1="6" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>;
const DollarSign = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>;

// --- Data ---
const jobOpenings = [
    { title: "Full Stack Developer (Web & CRM)", location: "Remote/Hybrid", type: "IT Solutions", icon: Globe },
    { title: "Digital Marketing & SEO Specialist", location: "Mumbai, IN", type: "Digital Marketing", icon: LineChart },
    { title: "Senior Graphic Designer", location: "Remote", type: "Design", icon: Zap },
    { title: "Real Estate Sales Executive", location: "On-site", type: "Business & Sales", icon: Briefcase },
    { title: "E-commerce Operations Manager", location: "On-site", type: "E-commerce", icon: ShoppingBag },
    { title: "Multi-Recharge Platform Specialist", location: "Hybrid", type: "FinTech", icon: DollarSign },
];

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

const cardInView = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", bounce: 0.4, duration: 0.8 }
    }
};

// --- Sub-Component (Job Card) ---
const JobCard = ({ title, location, type, icon: Icon }) => (
    <motion.div
        className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-[1.02] border border-gray-100 cursor-pointer"
        variants={cardInView}
        whileHover={{ y: -5 }}
    >
        <div className="flex items-start justify-between">
            <Icon className="w-8 h-8 text-[#1b2e4e]" />
            <span className="text-xs font-medium text-white bg-blue-600 px-3 py-1 rounded-full">{type}</span>
        </div>
        <h3 className="mt-4 text-xl font-bold text-[#1b2e4e]">{title}</h3>
        <p className="mt-2 text-[#1b2e4e] text-sm">{location}</p>
        <a
            href={`/jobs/${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-sm font-semibold text-[#1b2e4e] hover:text-[#1b2e4e] transition duration-150 flex items-center"
        >
            View Details &rarr;
        </a>
    </motion.div>
);

// --- Main Component: Current Openings Section Only ---
export default function CareerCurrentOpening() {
    return (
        <div className="min-h-screen bg-[#cfa866] font-inter">
            {/* Tailwind utility classes for font 'Inter' */}
            <style>{`
                .font-inter { font-family: 'Inter', sans-serif; }
            `}</style>
            
            {/* 3. OPEN POSITIONS SECTION */}
            <motion.section
                id="openings"
                className="py-20 bg-[#1b2e4e]"
                initial="hidden"
                whileInView="visible" 
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2 className="text-4xl font-extrabold text-[#cfa866] text-center mb-4" variants={itemVariants}>
                        Current Openings
                    </motion.h2>
                    <motion.p className="text-xl text-[#cfa866] text-center mb-12 max-w-3xl mx-auto" variants={itemVariants}>
                        Explore roles across our **IT Solutions**, **E-commerce**, and **Real Estate** verticals.
                    </motion.p>
                    <motion.div className="grid md:grid-cols-3 gap-8" variants={containerVariants}>
                        {jobOpenings.map((job, index) => (
                            <JobCard key={index} {...job} />
                        ))}
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
}

export{CareerCurrentOpening}
