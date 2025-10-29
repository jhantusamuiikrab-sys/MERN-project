import React from 'react';
import { useInView } from 'react-intersection-observer'; 

// --- Service Item Component (Reusable) ---
const ServiceItem = ({ icon, title, description, delay }) => {
    const { ref, inView } = useInView({
        triggerOnce: true, 
        threshold: 0.1, 
    });

    // Replace the icon placeholder with a simple text indicator or use a proper icon library (like Heroicons)
    const IconPlaceholder = ({ text }) => (
        <div className="text-4xl text-[#1b2e4e] mb-4 p-3 rounded-full bg-[#1b2e4e]">
            {text}
        </div>
    );

    return (
        <div
            ref={ref}
            className={`flex flex-col items-center text-center p-6 border border-gray-200 rounded-xl shadow-lg bg-[#cfa866] transform hover:shadow-xl transition duration-300 ease-in-out
                        ${inView ? 'animate-slide-in' : 'opacity-0'}
            `}
            style={{ animationDelay: `${delay}ms` }}
        >
            <IconPlaceholder text={icon} />
            <h3 className="text-xl font-bold mb-2 text-[#1b2e4e]">{title}</h3>
            <p className="text-[#1b2e4e]">{description}</p>
        </div>
    );
};

// ---------------------------------------------
// --- Main Services Component ---
// ---------------------------------------------
const RealEstateThird = () => {
    // Data for the service items
    const services = [
        { 
            icon: '🔍', 
            title: 'Property Analysis', 
            description: 'In-depth market research and valuation to ensure maximum return on investment.', 
            delay: 0 
        },
        { 
            icon: '📝', 
            title: 'Legal & Documentation', 
            description: 'Comprehensive handling of all legal paperwork, ensuring a smooth and secure transaction.', 
            delay: 100 
        },
        { 
            icon: '🤝', 
            title: 'Trusted Builders', 
            description: 'Exclusive access to properties from the most reliable and reputed developers in India.', 
            delay: 200 
        },
        { 
            icon: '💼', 
            title: 'Consulting & Advisory', 
            description: 'Personalized investment advice tailored to your financial goals and long-term strategy.', 
            delay: 300 
        },
    ];

    return (
        // 🛑 IMPORTANT: Removed min-h-screen
        <div className="bg-gray-50 pt-16 pb-16"> 
            <section className="container mx-auto px-4 md:px-8">
                
                {/* Section Title matching the style of "QUICK LINKS" */}
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 tracking-widest text-[#1b2e4e]">
                    OUR CORE SERVICES
                </h2>
                
                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <ServiceItem 
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            delay={service.delay}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export { RealEstateThird };