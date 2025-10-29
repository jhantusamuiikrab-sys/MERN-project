import React, { useState } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const LOGO_CONTENT_ID = "./Teestalogo.png";

// ----------------------------------------------------------------------
// --- NAVIGATION DATA ---
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
// --- FRAMER MOTION VARIANTS ---
// ----------------------------------------------------------------------
const mobileMenuVariants = {
  hidden: { y: "-100%", opacity: 0, transition: { duration: 0.3 } },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
  exit: { y: "-100%", opacity: 0, transition: { duration: 0.3 } },
};

const submenuVariants = {
  hidden: { opacity: 0, height: 0, transition: { duration: 0.2 } },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.3, staggerChildren: 0.05 },
  },
  exit: { opacity: 0, height: 0, transition: { duration: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

// ----------------------------------------------------------------------
// --- MOBILE SUBMENU (Recursive) ---
// ----------------------------------------------------------------------
const MobileSubmenu = ({ item, onLinkClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (item.submenu) {
    return (
      <div className="w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full py-2 text-[#1b2e4e] hover:text-[#cfa866] transition"
        >
          <span>{item.name}</span>
          <ChevronDown
            size={16}
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
              className="mt-2 flex flex-col space-y-2 overflow-hidden pl-4"
            >
              {item.submenu.map((subItem) => (
                <MobileSubmenu
                  key={subItem.name}
                  item={subItem}
                  onLinkClick={onLinkClick}
                />
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
      onClick={() => onLinkClick()}
      className="text-left text-[#1b2e4e] hover:text-[#cfa866] transition block py-2"
    >
      {item.name}
    </Link>
  );
};

// ----------------------------------------------------------------------
// --- DESKTOP SUBMENU (Recursive) ---
// ----------------------------------------------------------------------
const DesktopSubmenu = ({ item, level = 1, closeAll }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasSubmenu = item.submenu && item.submenu.length > 0;

  if (!hasSubmenu) {
    return (
      <motion.div variants={level > 1 ? itemVariants : {}}>
        <Link
          to={item.href}
          onClick={() => closeAll()} // Auto collapse dropdown
          className={`block text-left w-full ${
            level === 1
              ? "font-medium text-lg text-[#1b2e4e] hover:text-[#cfa866]"
              : "px-4 py-3 text-[#1b2e4e] hover:bg-[#cfa866]/10 hover:text-[#cfa866]"
          }`}
        >
          {item.name}
        </Link>
      </motion.div>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <motion.div variants={level > 1 ? itemVariants : {}}>
        <button
          className={`flex items-center justify-between text-[#1b2e4e] w-full transition-colors ${
            level === 1
              ? "font-medium text-lg hover:text-[#cfa866] py-0"
              : `hover:bg-[#cfa866]/10 px-4 py-3 ${
                  isOpen ? "bg-[#cfa866]/10 text-[#cfa866]" : ""
                }`
          }`}
        >
          {item.name}
          {level === 1 ? (
            <ChevronDown size={16} className="ml-1" />
          ) : (
            <ChevronRight size={14} className="ml-2" />
          )}
        </button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={submenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`absolute z-20 ${
              level === 1 ? "top-full left-0 pt-4" : "left-full top-0 ml-1"
            }`}
          >
            <div className="bg-white border shadow-lg rounded-lg w-52 min-w-[200px]">
              {item.submenu.map((subItem) => (
                <DesktopSubmenu
                  key={subItem.name}
                  item={subItem}
                  level={level + 1}
                  closeAll={closeAll}
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
// --- MAIN HEADER ---
// ----------------------------------------------------------------------
export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const closeAllMenus = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50 fixed">
      <div className="max-w-7xl mx-auto px-2 flex justify-between items-center">
        <motion.img
          src={LOGO_CONTENT_ID}
          alt="Teesta Logo"
          className="w-80 h-16 m-2 cursor-pointer object-contain rounded-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05, rotate: 2 }}
        />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-12 items-center mx-26">
          {navItems.map((item) =>
            !item.submenu ? (
              <Link
                key={item.name}
                to={item.href}
                onClick={closeAllMenus}
                className="font-medium text-lg text-[#1b2e4e] hover:text-[#cfa866]"
              >
                {item.name}
              </Link>
            ) : (
              <DesktopSubmenu
                key={item.name}
                item={item}
                level={1}
                closeAll={closeAllMenus}
              />
            )
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#1b2e4e]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
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
                    onClick={closeAllMenus}
                    className="text-[#1b2e4e] hover:text-[#cfa866] transition py-2"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <MobileSubmenu
                    key={item.name}
                    item={item}
                    onLinkClick={closeAllMenus}
                  />
                )
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
  