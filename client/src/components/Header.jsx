import React, { useState } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

// --- Data Structure for easier maintenance ---
const navItems = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  {
    name: "Services",
    submenu: [
      {
        name: "IT Solutions",
        submenu: [
          { name: "Web Development", href: "#webdev" },
          { name: "CRM Software", href: "#crm" },
        ],
      },
      {
        name: "Digital Marketing",
        submenu: [
          { name: "SEO Optimization", href: "#seo" },
          { name: "Social Media Marketing", href: "#smm" },
          { name: "Google Ads", href: "#ads" },
          { name: "Graphic Design", href: "#graphic" },
        ],
      },
      { name: "Real Estate Marketing", href: "#realestate" },
      { name: "Mobile E-Wallet", href: "#ewallet" },
      { name: "Szutra", href: "#szutra" },
      { name: "E-commerce", href: "#ecommerce" },
    ],
  },
  { name: "Contact", href: "#contact" },
];
// ---------------------------------------------

// Recursive Mobile Submenu Component
const MobileSubmenu = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  // If the item has a submenu, render the collapsible section
  if (item.submenu) {
    return (
      <div className="w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          // Use 'text-gray-700' for top level, 'text-gray-600' for nested
          className={`flex items-center justify-between w-full transition ${
            item.name === "Services" ? "text-gray-700 hover:text-blue-600" : "text-gray-600 hover:text-blue-600"
          }`}
        >
          <span>{item.name}</span>
          <ChevronDown
            size={item.name === "Services" ? 16 : 14}
            className={`ml-1 transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        {isOpen && (
          // Add padding for nested levels (pl-4 for 1st level, pl-8 for 2nd)
          <div className={`mt-2 flex flex-col space-y-2 ${item.name === "Services" ? "pl-4" : "pl-8"}`}>
            {item.submenu.map((subItem) => (
              <MobileSubmenu key={subItem.name} item={subItem} />
            ))}
          </div>
        )}
      </div>
    );
  }

  // If it's a regular link, render the anchor tag
  return (
    <a href={item.href} className="text-gray-600 hover:text-blue-600 transition block">
      {item.name}
    </a>
  );
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // mobile main menu visibility

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-26 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">Teesta Networks</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-12 items-center ">
          {navItems.map((item) => {
            // Regular links
            if (!item.submenu) {
              return (
                <a key={item.name} href={item.href} className="text-gray-700 hover:text-blue-600 transition">
                  {item.name}
                </a>
              );
            }

            // Services with dropdown
            return (
              <div key={item.name} className="relative group ">
                <button className="flex items-center text-gray-700 hover:text-blue-600 transition">
                  {item.name}
                  <ChevronDown size={16} className="ml-1" />
                </button>

                {/* 1st-level dropdown wrapper for hover area */}
                <div className="absolute left-0 top-full pt-6 hidden group-hover:block"> 
                  {/* FIX: Removed 'overflow-hidden' from this div so the nested menu can render outside. */}
                  <div className="bg-white border shadow-lg rounded-lg w-52"> 
                    {item.submenu.map((subItem) => {
                      // Submenu item with nested dropdown (IT Solutions, Digital Marketing)
                      if (subItem.submenu) {
                        return (
                          <div key={subItem.name} className="relative group/item">
                            <button className="flex items-center justify-between w-full px-4 py-2 hover:bg-blue-50 text-gray-700">
                              {subItem.name}
                              <ChevronRight size={14} className="ml-2" />
                            </button>
                            {/* 2nd-level submenu */}
                            <div className="absolute left-full top-4 hidden group-hover/item:block "> 
                                {/* The negative margin is kept for seamless hover activation */}
                                <div className="bg-white border shadow-lg rounded-lg w-52 -ml-4">
                                  {subItem.submenu.map((nestedItem) => (
                                    <a key={nestedItem.name} href={nestedItem.href} className="block px-4 py-3 hover:bg-blue-50 text-gray-700">
                                      {nestedItem.name}
                                    </a>
                                  ))}
                                </div>
                            </div>
                          </div>
                        );
                      }
                      
                      // Regular 1st-level link (Real Estate Marketing, etc.)
                      return (
                        <a key={subItem.name} href={subItem.href} className="block px-4 py-2 hover:bg-blue-50 text-gray-700">
                          {subItem.name}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu (unchanged, as it was already correct) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <nav className="flex flex-col p-4 space-y-2">
            {navItems.map((item) => (
              !item.submenu ? (
                // Regular links for mobile
                <a key={item.name} href={item.href} className="text-gray-700 hover:text-blue-600 transition">
                  {item.name}
                </a>
              ) : (
                // Services and its submenus use the recursive component
                <MobileSubmenu key={item.name} item={item} />
              )
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}