import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerData = [
    {
      title: "Who We Are",
      items: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Services",
      items: [
        { name: "Web Development", href: "/web-development" },
        { name: "CRM Software", href: "/crm" },
        { name: "Real Estate Marketing", href: "/realestate" },
        { name: "E-Wallet", href: "/ewallet" },
        { name: "Szutra", href: "/szutra" },
        { name: "E-commerce", href: "/ecommerce" },
      ],
    },
    {
      title: "Digital Marketing",
      items: [
        { name: "SEO Optimization", href: "/seo-optimization" },
        { name: "Social Media Marketing", href: "/social-media" },
        { name: "Google Ads", href: "/google-ads" },
        { name: "Graphic Design", href: "/graphic" },
        { name: "Bulk SMS", href: "/bulk-sms" },
      ],
    },
    {
      title: "Newsroom",
      items: [
        { name: "Press Release", href: "/press-release" },
        { name: "In The News", href: "/in-the-news" },
        { name: "Media Resources", href: "/media-resources" },
        { name: "Our Story", href: "/our-story" },
      ],
    },
    {
      title: "Careers",
      items: [
        { name: "Find A Job", href: "/career" },
        { name: "SOAR", href: "/soar" },
        { name: "Leadership Programs", href: "/leadership" },
        { name: "Tech Opportunities", href: "/tech" },
      ],
    },
  ];

  return (
    <footer className="bg-[#f8f8f5] text-[#1d1d1d] border-t border-gray-200">
      {/* Top section */}
      <div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {footerData.map((section, idx) => (
          <div key={idx}>
            <h3 className="font-semibold text-lg mb-4 text-[#cfa866] uppercase tracking-wide">
              {section.title}
            </h3>
            <ul className="space-y-3">
              {section.items.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.href}
                    className="block text-[#1b2e4e] hover:text-[#cfa866] transition-all duration-200 hover:translate-x-1"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300" />

      {/* Bottom bar */}
      <div className="bg-[#1b2e4e] text-[#cfa866] py-5 px-6 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          {/* Links */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 text-center md:text-left">
            <Link to="/terms" className="hover:underline">
              Terms of Use
            </Link>
            <span className="hidden sm:inline">|</span>
            <Link to="/disclaimer" className="hover:underline">
              Disclaimer
            </Link>
            <span className="hidden sm:inline">|</span>
            <Link to="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <span className="hidden sm:inline">|</span>
            <Link to="/sitemap" className="hover:underline">
              Sitemap
            </Link>
            <span className="hidden sm:inline">|</span>
            <Link to="/contact" className="hover:underline">
              Contact Us
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-center md:text-right mt-3 md:mt-0">
            © {currentYear} <span className="font-semibold">Teesta Networks Pvt. Ltd.</span> All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
