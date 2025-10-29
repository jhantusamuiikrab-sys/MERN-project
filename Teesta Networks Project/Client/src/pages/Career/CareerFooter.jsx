import React from 'react';
import { motion } from 'framer-motion';

// --- Main Component: CTA Footer Only ---
export default function CareerFooter() {
    const currentYear = new Date().getFullYear();
    return (
        <div className="pt-10 flex items-center justify-center bg-[#cfa866] font-inter">
            {/* Tailwind utility classes for font 'Inter' */}
            <style>{`
                .font-inter { font-family: 'Inter', sans-serif; }
            `}</style>
            
            {/* 5. CTA Footer */}
            <motion.footer
                className="bg-[#1b2e4e] w-full p-12 text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
            >
                <h3 className="text-4xl font-extrabold text-[#cfa866] mb-4">Ready to Build the Future?</h3>
                <p className="text-[#cfa866] mb-8 max-w-2xl mx-auto text-lg">
                    Don't see your perfect fit yet? Send us your resume anyway. We're always looking for talented individuals to join our diverse ventures!
                </p>
                <a
                    href="mailto:careers@yourcompany.com"
                    className="bg-[#cfa866] hover:bg-[#cfa866] text-[#1b2e4e] font-bold py-4 px-10 rounded-full transition duration-300 transform hover:scale-105 inline-block text-xl shadow-lg"
                    // Add a slight button press animation
                    whileTap={{ scale: 0.98 }}
                >
                    Apply Now
                </a>
                <p className="mt-12 text-sm text-[#cfa866]">Teesta Networks &copy; {currentYear} | Where Technology Meets Opportunity</p>
            </motion.footer>
        </div>
    );
}

export{CareerFooter};
