
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView} from "framer-motion";
// --- Framer Motion Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.2, 0.7, 0.4, 1],
    },
  },
};
const FeatureCard = ({ icon: Icon, title, description, delay }) => {
  const { ref, controls } = useScrollAnimation();
  return (
    <motion.div
      ref={ref}
      className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 hover:shadow-2xl transition duration-500 transform hover:-translate-y-2 cursor-pointer"
      variants={featureCardVariants}
      initial="hidden"
      animate={controls}
      custom={delay}
    >
      <Icon className="w-10 h-10 text-[#cfa866] mb-4 p-2 bg-indigo-100 rounded-full" />
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};
const featureCardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};
// --- Icon Components (using lucide-react philosophy) ---
const SendIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m22 2-7 19-3-9-9-3Z" />
    <path d="M22 2 11 13" />
  </svg>
);
const ZapIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);
const TargetIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);
const UserPlusIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <line x1="19" y1="8" x2="19" y2="14" />
  </svg>
);

const features = [
  {
    icon: SendIcon,
    title: "Ultra-High Deliverability",
    description:
      "Direct routing ensures your message hits the inbox, not the void. We guarantee industry-leading success rates.",
  },
  {
    icon: TargetIcon,
    title: "Precision Audience Targeting",
    description:
      "Segment your audience based on location, history, and behavior for campaigns that truly resonate.",
  },
  {
    icon: ZapIcon,
    title: "Blazing Fast Deployment",
    description:
      "Launch campaigns instantly. Our infrastructure handles millions of messages per hour with zero latency.",
  },
  {
    icon: UserPlusIcon,
    title: "API & CRM Integration",
    description:
      "Seamlessly connect our SMS gateway to your existing systems like Zapier, HubSpot, and custom CRMs.",
  },
];
const useScrollAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return { ref, controls };
};

export const FeaturesSection = () => {
  const { ref, controls } = useScrollAnimation();

  return (
    <motion.section
      ref={ref}
      className="py-20 md:py-28 bg-gray-50"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.h2
          className="text-4xl font-extrabold text-[#cfa866] text-center mb-4"
          variants={itemVariants}
        >
          Unleash the Power of Direct Messaging
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          We've engineered our platform for speed, scale, and the highest
          possible conversion rates.
        </motion.p>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
