import React, { useState } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// --- Logo Content ID (Using the uploaded file) ---
const LOGO_CONTENT_ID = "./TeestaWhitelogo.png";

// ----------------------------------------------------------------------
// --- Data Structure (Unchanged) ---
// ----------------------------------------------------------------------
const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
        name: "Services",
        submenu: [
            {
                name: "IT Solutions",
                submenu: [
                    { name: "Web Development", href: "/web-development" },
                    { name: "CRM Software", href: "/crm" },
                    // 💥 A hypothetical third level for testing recursion 💥
                    {
                        name: "Consulting",
                        submenu: [
                            { name: "Cloud Strategy", href: "/cloud" },
                            { name: "Data Analysis", href: "/data" },
                        ],
                    },
                ],
            },
            {
                name: "Digital Marketing",
                submenu: [
                    { name: "SEO Optimization", href: "/seo-optimization" },
                    { name: "Social Media Marketing", href: "/social-media" },
                    { name: "Google Ads", href: "/google-ads" },
                    { name: "Graphic Design", href: "/graphic" },
                    { name: "Bulk SMS", href: "/bulk-sms" },
                ],
            },
            { name: "Real Estate", href: "/realestate" },
            { name: "E-Wallet", href: "/ewallet" },
            { name: "Szutra", href: "/szutra" },
            { name: "E-commerce", href: "/ecommerce" },
        ],
    },
    { name: "Contact", href: "/contact" },
];

// ----------------------------------------------------------------------
// --- FRAMER MOTION VARIANTS (UNCHANGED) ---
// ----------------------------------------------------------------------

// Variants for the main mobile menu (Slide in from the top)
const mobileMenuVariants = {
    hidden: { y: "-100%", opacity: 0, transition: { duration: 0.3 } },
    visible: { y: "0", opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
    exit: { y: "-100%", opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } }
};

// Variants for all Submenus (Desktop and Mobile)
const submenuVariants = {
    // Hidden state: start closed with 0 height and opacity
    hidden: { 
        opacity: 0, 
        height: 0, 
        transition: { 
            duration: 0.2, 
            when: "afterChildren" 
        } 
    },
    // Visible state: expands to auto height and full opacity
    visible: {
        opacity: 1,
        height: "auto",
        transition: {
            duration: 0.3,
            when: "beforeChildren",
            staggerChildren: 0.05,
        },
    },
    // Exit state
    exit: { opacity: 0, height: 0, transition: { duration: 0.2 } },
};

// Variants for items inside the submenus (Slide up/fade in)
const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
};

// ----------------------------------------------------------------------
// --- Animated Link Component (Unchanged) ---
// ----------------------------------------------------------------------
const AnimatedLink = ({ to, children, className }) => (
    <Link
        to={to}
        data-item={children}
        className={`animated-link ${className}`}
    >
        {children}
    </Link>
);

// ----------------------------------------------------------------------
// --- Mobile Submenu Component (Unchanged) ---
// ----------------------------------------------------------------------
const MobileSubmenu = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    if (item.submenu) {
        return (
            <div className="w-full">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`flex items-center justify-between w-full py-2 transition ${
                        item.name === "Services"
                            ? "text-[#1b2e4e] hover:text-[#cfa866]"
                            : "text-[#1b2e4e] hover:text-[#cfa866]"
                    }`}
                >
                    <span>{item.name}</span>
                    <ChevronDown
                        size={item.name === "Services" ? 16 : 14}
                        className={`ml-1 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                </button>

                <AnimatePresence initial={false}>
                    {isOpen && (
                        <motion.div
                            variants={submenuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className={`mt-2 flex flex-col space-y-2 overflow-hidden ${
                                item.name === "Services" ? "pl-4" : "pl-8"
                            }`}
                        >
                            {item.submenu.map((subItem) => (
                                // RECURSIVE CALL: Can handle unlimited levels
                                <MobileSubmenu key={subItem.name} item={subItem} />
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );
    }

    return (
        <Link
            to={item.href}
            className="text-[#1b2e4e] hover:text-[#cfa866] transition block py-2"
        >
            {item.name}
        </Link>
    );
};

// ----------------------------------------------------------------------
// --- Desktop Submenu Component (FIXED RECURSIVE IMPLEMENTATION) ---
// ----------------------------------------------------------------------

const DesktopSubmenu = ({ item, level = 1 }) => {
    const [isOpen, setIsOpen] = useState(false);
    const hasSubmenu = item.submenu && item.submenu.length > 0;
    const isTopLevelServices = item.name === 'Services' && level === 1;
    const shouldCascadeRight = level > 1; 

    const handleMouseEnter = () => setIsOpen(true);
    // Add a slight delay to allow smooth hover transition to the submenu
    const handleMouseLeave = () => setTimeout(() => setIsOpen(false), 100);

    // If it's a link (no submenu), render the link itself.
    if (!hasSubmenu) {
        return (
            <motion.div 
                key={item.name} 
                variants={level > 1 ? itemVariants : {}} 
                className={level === 1 ? 'relative' : ''}
            >
                <Link
                    to={item.href}
                    className={`block text-[#1b2e4e] transition-colors ${
                        level === 1 
                            ? "font-medium text-lg hover:text-[#cfa866]" 
                            : "px-4 py-3 hover:bg-[#cfa866]/10 hover:text-[#cfa866] w-full"
                    }`}
                >
                    {item.name}
                </Link>
            </motion.div>
        );
    }

    // If it has a submenu, render the button wrapper with hover logic.
    return (
        <div
            key={item.name}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* The item button/trigger. */}
            <motion.div variants={level > 1 ? itemVariants : {}}>
                <button
                    className={`flex items-center justify-between text-[#1b2e4e] w-full transition-colors ${
                        level === 1
                            ? "font-medium text-lg hover:text-[#cfa866] py-0" 
                            : `hover:bg-[#cfa866]/10 px-4 py-3 ${isOpen ? 'bg-[#cfa866]/10 text-[#cfa866]' : ''}` // Highlight parent when open
                    }`}
                >
                    {item.name}
                    {/* Chevron icon changes based on level */}
                    {level === 1 ? (
                        <ChevronDown size={16} className="ml-1" />
                    ) : (
                        <ChevronRight size={14} className="ml-2" />
                    )}
                </button>
            </motion.div>

            {/* Submenu Dropdown (Animated) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={submenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className={`absolute z-10 ${
                            // Positioning logic based on level and content:
                            level === 1 
                                ? isTopLevelServices 
                                    ? "right-0 top-full pt-6" 
                                    : "left-0 top-full pt-6"  
                                : shouldCascadeRight 
                                    ? "left-full top-0 ml-1 mt-[-4px]"
                                    : "right-full top-0 mr-1 mt-[-4px]" 
                        }`}
                    >
                        <div className="bg-white border shadow-lg rounded-lg w-52 min-w-[200px]">
                            {item.submenu.map((subItem) => (
                                // RECURSIVE CALL
                                <DesktopSubmenu
                                    key={subItem.name}
                                    item={subItem}
                                    level={level + 1}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// ----------------------------------------------------------------------
// --- Main Header Component (Updated with Animated Logo) ---
// ----------------------------------------------------------------------
export default function App() {
    const [isOpen, setIsOpen] = useState(false); // Mobile Menu State

    return (
        <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50 relative">
            <div className="max-w-7xl mx-auto px-2 flex justify-between items-center">
                
                {/* ANIMATED LOGO IMPLEMENTATION 
                  Replaced static <img> with motion.img and used LOGO_CONTENT_ID 
                */}
                <motion.img 
                    src={LOGO_CONTENT_ID}
                    alt="Teesta Logo"
                    className="w-16 h-16 m-2 cursor-pointer object-contain rounded-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05, rotate: 2 }} 
                />

                {/* Desktop Menu - Uses the recursive component */}
                <nav className="hidden md:flex space-x-12 items-center mx-16">
                    {navItems.map((item) =>
                        !item.submenu ? (
                            <AnimatedLink
                                key={item.name}
                                to={item.href}
                                className="font-medium text-lg"
                            >
                                {item.name}
                            </AnimatedLink>
                        ) : (
                            // Calls the recursive component
                            <DesktopSubmenu key={item.name} item={item} level={1} />
                        )
                    )}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-[#1b2e4e]"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu (Animated) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="md:hidden bg-white shadow-lg overflow-hidden absolute inset-x-0 top-full"
                        variants={mobileMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <nav className="flex flex-col p-4 space-y-2">
                            {navItems.map((item) =>
                                !item.submenu ? (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className="text-[#1b2e4e] hover:text-[#cfa866] transition py-2"
                                    >
                                        {item.name}
                                    </Link>
                                ) : (
                                    // MobileSubmenu is already recursive
                                    <MobileSubmenu key={item.name} item={item} />
                                )
                            )}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
