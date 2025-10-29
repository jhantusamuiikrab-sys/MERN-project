import { useRef } from 'react';
import { motion, useInView} from 'framer-motion';
import { AnimatedSection, fadeInUp, staggerContainer } from './SeoAnimate';
const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
);

const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);

const SearchIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
);

const BarChartIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="20" x2="12" y2="10"></line>
        <line x1="18" y1="20" x2="18" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="16"></line>
    </svg>
);

const CodeIcon = ({ className }) => (
     <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
);

const PenToolIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 19 7-7 3 3-7 7-3-3z"></path>
        <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
        <path d="m2 2 7.586 7.586"></path>
        <circle cx="11" cy="11" r="2"></circle>
    </svg>
);

export const SEOServiceSection = () => {
    const services = [
        {
            icon: <SearchIcon className="h-12 w-12 text-cyan-400 mb-4" />,
            title: "Keyword Research & Strategy",
            description: "We identify high-value keywords to attract your target audience and drive qualified traffic to your site."
        },
        {
            icon: <CodeIcon className="h-12 w-12 text-cyan-400 mb-4" />,
            title: "On-Page & Technical SEO",
            description: "Optimizing your website's structure, content, and code to be perfectly understood by search engines."
        },
        {
            icon: <BarChartIcon className="h-12 w-12 text-cyan-400 mb-4" />,
            title: "Link Building & Authority",
            description: "Building a high-quality backlink profile to establish your website as an authority in your industry."
        },
        {
            icon: <PenToolIcon className="h-12 w-12 text-cyan-400 mb-4" />,
            title: "Content Marketing",
            description: "Creating engaging, valuable content that attracts, informs, and converts your audience while boosting SEO."
        }
    ];

    return (
        <AnimatedSection id="services" className="bg-gray-900">
            <div className="container mx-auto">
                <motion.div variants={fadeInUp} className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#cfa866]">Our SEO Services</h2>
                    <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Comprehensive solutions to climb the SERPs and grow your business.</p>
                    <div className="mt-4 h-1 w-24 bg-cyan-400 mx-auto rounded-full"></div>
                </motion.div>
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={staggerContainer}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-cyan-400 transition-all duration-300 transform hover:-translate-y-2 group"
                            variants={fadeInUp}
                        >
                            <div className="flex justify-center items-center h-20 w-20 rounded-full bg-gray-700 group-hover:bg-cyan-400/20 transition-all duration-300 mx-auto">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#cfa866] mt-6 text-center">{service.title}</h3>
                            <p className="text-gray-400 mt-2 text-center">{service.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </AnimatedSection>
    );
};
