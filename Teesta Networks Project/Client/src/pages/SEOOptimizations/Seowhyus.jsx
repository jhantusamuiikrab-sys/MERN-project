import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView} from 'framer-motion';
import { AnimatedSection, fadeInUp } from './SeoAnimate';

export const SEOWhyUsSection = () => {
    const stats = [
        { value: 98, label: "Client Satisfaction" },
        { value: 150, label: "Projects Completed" },
        { value: 8, label: "Years of Experience" }
    ];
    
    const AnimatedCounter = ({ to, duration = 2 }) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true, amount: 0.5 });
        const controls = useAnimation();
        
        useEffect(() => {
            if (isInView) {
                controls.start({
                    value: to,
                    transition: { duration, ease: "easeOut" }
                });
            }
        }, [isInView, to, controls]);

        return (
            <motion.span ref={ref} initial={{ value: 0 }}>
                {isInView ? <Counter from={0} to={to} /> : 0}
            </motion.span>
        );
    };

    const Counter = ({ from, to }) => {
        const [count, setCount] = useState(from);

        useEffect(() => {
            const controls = {
                stop: () => {}
            };
            const animateValue = (start, end, duration) => {
                let startTimestamp = null;
                const step = (timestamp) => {
                    if (!startTimestamp) startTimestamp = timestamp;
                    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                    setCount(Math.floor(progress * (end - start) + start));
                    if (progress < 1) {
                        controls.stop = requestAnimationFrame(step);
                    }
                };
                controls.stop = requestAnimationFrame(step);
            };

            animateValue(from, to, 2000); // 2 second animation

            return () => cancelAnimationFrame(controls.stop);
        }, [from, to]);
        
        return <span>{count}</span>
    }
    return (
        <AnimatedSection id="why-us" className="bg-black text-[#cfa866]">
            <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
                <motion.div variants={fadeInUp}>
                    <img 
                      src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Marketing team collaborating" 
                      className="rounded-2xl shadow-2xl w-full h-auto object-cover" 
                      onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/000000/FFFFFF?text=Team+Image'; }}
                    />
                </motion.div>
                <motion.div variants={fadeInUp}>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose <span className="text-cyan-400">SEO</span> Vantage?</h2>
                    <p className="text-gray-400 mb-6 text-lg">We are not just another agency; we are your growth partners. Our approach is rooted in transparency, expertise, and a relentless pursuit of results that matter to your bottom line.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                        {stats.map(stat => (
                            <div key={stat.label}>
                                <h3 className="text-5xl font-bold text-cyan-400">
                                   <AnimatedCounter to={stat.value} />%
                                </h3>
                                <p className="text-gray-400 mt-2">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </AnimatedSection>
    );
};
