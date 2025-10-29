import { motion } from 'framer-motion';
export const BulkSMSHeroSection = () => {
    return (
        <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    poster="https://placehold.co/1920x1080/000000/FFFFFF?text=Loading..."
                >
                    {/* Video Source: Coverr.co - a great source for free, high-quality background videos */}
                    <source src="/Bulk SMS.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
            </div>

            <div className="relative z-10 text-center px-4">
                <motion.h1 
                    className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 tracking-tight"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    Elevate Your <span className="text-[#cfa866]">Digital Presence</span>
                </motion.h1>
                <motion.p 
                    className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 mb-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    We craft data-driven SEO strategies that dominate search rankings, drive organic traffic, and deliver measurable results.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
                >
                    <a href="#services" className="bg-[#cfa866] hover:bg-[#cfa866] text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 hover:scale-110 shadow-2xl shadow-cyan-500/40">
                        Discover Our Services
                    </a>
                </motion.div>
            </div>
            
            <motion.div 
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: "reverse" }}
            >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </motion.div>
        </section>
    );
};

