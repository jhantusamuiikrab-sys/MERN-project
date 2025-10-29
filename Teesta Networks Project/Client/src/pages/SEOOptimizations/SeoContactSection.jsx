import { motion} from 'framer-motion';
import { AnimatedSection, fadeInUp } from './SeoAnimate';

export const SEOContactSection = () => {
    return (
        <AnimatedSection id="contact" className="bg-black">
            <div className="container mx-auto">
                <motion.div variants={fadeInUp} className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#cfa866]">Ready to Dominate the Ranks?</h2>
                    <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Let's talk about your project. Fill out the form below to get a free consultation and SEO audit.</p>
                    <div className="mt-4 h-1 w-24 bg-cyan-400 mx-auto rounded-full"></div>
                </motion.div>

                <motion.div 
                    variants={fadeInUp}
                    className="max-w-2xl mx-auto bg-gray-900 p-8 sm:p-12 rounded-2xl border border-gray-700"
                >
                    <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <input type="text" placeholder="Your Name" className="bg-gray-800 text-white p-4 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
                            <input type="email" placeholder="Your Email" className="bg-gray-800 text-white p-4 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
                        </div>
                        <div className="mb-6">
                            <input type="text" placeholder="Your Website URL" className="w-full bg-gray-800 text-white p-4 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
                        </div>
                        <div className="mb-6">
                            <textarea placeholder="Tell us about your project..." rows="5" className="w-full bg-gray-800 text-white p-4 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"></textarea>
                        </div>
                        <div className="text-center">
                             <motion.button 
                                type="submit" 
                                className="bg-[#cfa866] hover:bg-[#cfa866] text-white font-bold py-3 px-10 rounded-lg text-lg w-full md:w-auto transition-all duration-300 shadow-lg shadow-cyan-500/30"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Send Message
                            </motion.button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </AnimatedSection>
    );
};
