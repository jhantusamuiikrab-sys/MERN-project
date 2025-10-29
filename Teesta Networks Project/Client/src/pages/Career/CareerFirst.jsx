import React from 'react';
import { motion } from 'framer-motion';
// Icons from Lucide React (simulated import for single-file environment)
const Briefcase = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>;
const Zap = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
const Users = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const LineChart = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m18 11-6-6-8 8"/></svg>;
const Globe = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>;
const ShoppingBag = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" x2="21" y1="6" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>;
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

const cardInView = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", bounce: 0.4, duration: 0.8 }
    }
};

// --- Data ---
const jobOpenings = [
    { title: "Full Stack Developer (Web & CRM)", location: "Remote/Hybrid", type: "IT Solutions", icon: Globe },
    { title: "Digital Marketing & SEO Specialist", location: "Mumbai, IN", type: "Digital Marketing", icon: LineChart },
    { title: "Senior Graphic Designer", location: "Remote", type: "Design", icon: Zap },
    { title: "Real Estate Sales Executive", location: "On-site", type: "Business & Sales", icon: Briefcase },
    { title: "E-commerce Operations Manager", location: "On-site", type: "E-commerce", icon: ShoppingBag },
    { title: "Multi-Recharge Platform Specialist", location: "Hybrid", type: "FinTech", icon: DollarSign },
];

const perks = [
    { title: "Competitive Salary", icon: DollarSign, description: "Highly attractive compensation packages that reflect your expertise." },
    { title: "Flexible Work Hours", icon: Clock, description: "Manage your time and energy with flexible start and end times." },
    { title: "Diverse Projects", icon: Gem, description: "Work across IT, Real Estate, Fashion, and E-commerce—never a dull moment!" },
    { title: "Learning Allowance", icon: Coffee, description: "Dedicated budget for courses, conferences, and skill development." },
];

// --- Main Component ---
export default function Career() {
    // Placeholder video URL (Replace with your actual video or keep for stylistic demo)
    const backgroundVideoUrl = "https://assets.mixkit.co/videos/preview/mixkit-cyber-city-with-neon-lights-26867-large.mp4";

    const JobCard = ({ title, location, type, icon: Icon }) => (
        <motion.div
            className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-[1.02] border border-gray-100 cursor-pointer"
            variants={cardInView}
            whileHover={{ y: -5 }}
        >
            <div className="flex items-start justify-between">
                <Icon className="w-8 h-8 text-teal-600" />
                <span className="text-xs font-medium text-white bg-blue-600 px-3 py-1 rounded-full">{type}</span>
            </div>
            <h3 className="mt-4 text-xl font-bold text-gray-800">{title}</h3>
            <p className="mt-2 text-gray-500 text-sm">{location}</p>
            <button className="mt-4 text-sm font-semibold text-teal-600 hover:text-teal-800 transition duration-150 flex items-center">
                View Details &rarr;
            </button>
        </motion.div>
    );

    const PerkCard = ({ title, description, icon: Icon }) => (
        <motion.div
            className="p-6 bg-white rounded-xl shadow-lg border-t-4 border-teal-500"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <Icon className="w-10 h-10 text-teal-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </motion.div>
    );

    return (
        <div className="min-h-screen bg-gray-50 font-inter">
            {/* Tailwind utility classes for font 'Inter' */}
            <style>{`
                .font-inter { font-family: 'Inter', sans-serif; }
            `}</style>
            
            {/* 1. HERO SECTION - Background Video Effect */}
            <div className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background Video (Muted, Looping, Full Cover) */}
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

                {/* Dark Overlay for Readability and Aesthetic */}
                <div className="absolute inset-0 z-10 bg-gray-900 bg-opacity-70"></div>

                {/* Content */}
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
                        Pioneering the Future. <span className="text-teal-400 block sm:inline-block">Join Our Team.</span>
                    </motion.h1>
                    <motion.p
                        className="text-xl text-gray-300 mb-10 mt-4 max-w-2xl mx-auto"
                        variants={textReveal}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        We are an IT powerhouse blending digital solutions, real estate, and e-commerce. Find your next challenge where technology meets opportunity.
                    </motion.p>
                    <motion.button
                        className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 text-lg transform hover:scale-105"
                        variants={itemVariants}
                        transition={{ delay: 1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => document.getElementById('openings').scrollIntoView({ behavior: 'smooth' })}
                    >
                        Explore Open Roles
                    </motion.button>
                </motion.div>
            </div>

            {/* 2. WHY JOIN US - Culture & Mission */}
            <motion.section
                className="py-20 bg-white"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2 className="text-4xl font-extrabold text-gray-900 text-center mb-4" variants={itemVariants}>
                        Why Our Team is Unique
                    </motion.h2>
                    <motion.p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto" variants={itemVariants}>
                        We are a fusion of technology and business, giving you unmatched exposure to diverse industries.
                    </motion.p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Value Proposition Cards */}
                        <motion.div className="text-center p-8 bg-blue-50 rounded-2xl shadow-md border-b-4 border-blue-500" variants={cardInView}>
                            <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Cross-Industry Exposure</h3>
                            <p className="text-gray-600">Work on projects ranging from **CRM software** and **Google Ads** to **Real Estate** and **Designer Clothes** e-commerce.</p>
                        </motion.div>

                        <motion.div className="text-center p-8 bg-teal-50 rounded-2xl shadow-md border-b-4 border-teal-500" variants={cardInView}>
                            <Zap className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Innovation at Scale</h3>
                            <p className="text-gray-600">Be at the forefront of digital transformation, creating highly engaging solutions in a fast-paced, high-energy environment.</p>
                        </motion.div>

                        <motion.div className="text-center p-8 bg-purple-50 rounded-2xl shadow-md border-b-4 border-purple-500" variants={cardInView}>
                            <Briefcase className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Entrepreneurial Spirit</h3>
                            <p className="text-gray-600">We encourage ownership. Your ideas directly contribute to new business lines and overall company success.</p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* 3. OPEN POSITIONS */}
            <motion.section
                id="openings"
                className="py-20 bg-gray-100"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2 className="text-4xl font-extrabold text-gray-900 text-center mb-4" variants={itemVariants}>
                        Current Openings
                    </motion.h2>
                    <motion.p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto" variants={itemVariants}>
                        Explore roles across our **IT Solutions**, **E-commerce**, and **Real Estate** verticals.
                    </motion.p>
                    <motion.div className="grid md:grid-cols-3 gap-8" variants={containerVariants}>
                        {jobOpenings.map((job, index) => (
                            <JobCard key={index} {...job} />
                        ))}
                    </motion.div>
                </div>
            </motion.section>
            
            {/* 4. PERKS & BENEFITS */}
            <motion.section
                className="py-20 bg-white"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2 className="text-4xl font-extrabold text-gray-900 text-center mb-4" variants={itemVariants}>
                        The Benefits Package
                    </motion.h2>
                    <motion.p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto" variants={itemVariants}>
                        We invest in our people—with competitive pay, flexibility, and a focus on continuous growth.
                    </motion.p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {perks.map((perk, index) => (
                            <PerkCard key={index} {...perk} />
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* 5. CTA Footer */}
            <motion.footer
                className="bg-gray-800 p-12 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
            >
                <h3 className="text-3xl font-bold text-white mb-4">Ready to Build the Future?</h3>
                <p className="text-gray-300 mb-6">Send your resume and a cover letter explaining which role you are interested in.</p>
                <a
                    href="mailto:careers@yourcompany.com"
                    className="bg-teal-500 hover:bg-teal-400 text-gray-900 font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 inline-block text-lg"
                >
                    Apply Now
                </a>
                <p className="mt-8 text-sm text-gray-500">Your Company Name &copy; 2025</p>
            </motion.footer>
        </div>
    );
}
export {Career};

