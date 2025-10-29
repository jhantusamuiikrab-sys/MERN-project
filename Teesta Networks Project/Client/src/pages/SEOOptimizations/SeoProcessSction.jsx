import  { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { AnimatedSection, fadeInUp, staggerContainer } from './SeoAnimate';

export const SEOProcessSection = () => {
    const steps = [
        { number: "01", title: "Discovery & Audit", description: "We start by understanding your business and performing a deep SEO audit to find opportunities." },
        { number: "02", title: "Strategy & Planning", description: "A custom, data-backed SEO roadmap is crafted to align with your specific business goals." },
        { number: "03", title: "Execution & Optimization", description: "Our team implements the strategy, continuously optimizing for peak performance." },
        { number: "04", title: "Reporting & Analysis", description: "Receive transparent reports that track progress and show real, tangible ROI." },
    ];

    return (
         <AnimatedSection id="process" className="bg-gray-900">
            <div className="container mx-auto">
                <motion.div variants={fadeInUp} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#cfa866]">Our Proven Process</h2>
                    <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">A streamlined workflow for guaranteed SEO success.</p>
                    <div className="mt-4 h-1 w-24 bg-cyan-400 mx-auto rounded-full"></div>
                </motion.div>

                <div className="relative">
                     {/* Dotted line for desktop */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gray-700 transform -translate-y-1/2"></div>
                    
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
                        variants={staggerContainer}
                    >
                        {steps.map((step, index) => (
                             <motion.div
                                key={index}
                                className="relative text-center md:text-left"
                                variants={fadeInUp}
                            >
                                <div className="flex items-center justify-center md:justify-start mb-4">
                                     <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-800 border-2 border-cyan-400 text-cyan-400 text-2xl font-bold z-10">
                                        {step.number}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-[#cfa866] mt-4">{step.title}</h3>
                                <p className="text-gray-400 mt-2">{step.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </AnimatedSection>
    )
};