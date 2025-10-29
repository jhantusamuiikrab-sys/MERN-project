import React from 'react';
import { motion } from 'framer-motion';
// Icons for visual appeal
import { Shield, Lock, Cookie, Users, Mail, Globe } from 'lucide-react';

// --- Framer Motion Variants ---

// Parent container variant for staggered children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Item variant for subtle fade and lift
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

// Card variant for interactive hover effect
const cardVariants = {
    hover: { scale: 1.02, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)", transition: { duration: 0.2 } },
};

// Hero title animation
const titleVariants = {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 120, damping: 10, delay: 0.1 } },
};

// Component to display a standard policy section block
const PolicyBlock = ({ title, icon: Icon, children, delay = 0 }) => (
    <motion.div
        className="p-6 md:p-8 bg-gray-800 rounded-xl shadow-2xl border border-gray-700/50"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ delay: delay }}
    >
        <div className="flex items-center mb-4 border-b border-indigo-500/20 pb-2">
            <Icon className="w-8 h-8 text-indigo-400 mr-3" />
            <h2 className="text-3xl font-bold text-white">{title}</h2>
        </div>
        <div className="text-gray-300 leading-relaxed space-y-4">
            {children}
        </div>
    </motion.div>
);


// Main Application Component
const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-gray-900 font-sans antialiased text-gray-100">

            {/* Simulated Header Navigation */}
            {/* <header className="sticky top-0 z-10 bg-gray-900/95 backdrop-blur-sm shadow-lg border-b border-indigo-500/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl font-extrabold text-indigo-400 tracking-wider"
                    >
                        i-KRAB e-sol
                    </motion.div>
                </div>
            </header> */}

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

                {/* Hero / Title Section */}
                <motion.div
                    className="text-center mb-12 md:mb-16"
                    variants={titleVariants}
                    initial="initial"
                    animate="animate"
                >
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-500">
                        PRIVACY POLICY
                    </h1>
                    <p className="mt-4 text-xl text-gray-400 max-w-4xl mx-auto">
                        In this Privacy Policy you will find how I-KRAB (hence by referred to as "we" or "us”) uses and protects any information that you provide to I-KRAB when you use our website. We are committed towards ensuring that your privacy is protected. Without any prior information we may update our privacy policy. You should check this page regularly to make sure that you are updated with any changes.
                    </p>
                </motion.div>


                {/* Policy Sections Grid */}
                <motion.div
                    className="grid grid-cols-1 gap-8 mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <PolicyBlock title="1. What we collect" icon={Users}>
                        <p>
                            Personal information means any information that may be used to identify an individual, including, first and last name, email address, postal or other physical address, other contact information, title, occupation, industry, personal interests, and other information when needed to provide a service or product or carry out a transaction you have requested.
                        </p>
                    </PolicyBlock>

                    <PolicyBlock title="2. Internal record keeping" icon={Lock} delay={0.1}>
                        <p>
                            We may use the information to improve our products and services. We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided. From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax or mail. We may use the information to customize the website according to your interests.
                        </p>
                    </PolicyBlock>

                    <PolicyBlock title="3. Confidentiality" icon={Shield} delay={0.2}>
                        <p>
                            I-KRAB do not transfer or share your information except as provided below:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>We may also send your personal information to other companies or people if, We have users' consent to share the information.</li>
                            <li>We may share user's personally identifiable information with our resellers and partners, so that such resellers and partners may use such information to market I-KRAB's products and services, and to market their own products and services.</li>
                            <li>We may engage certain trusted third parties to perform function and provide services to us, including without limitation, hosting and management services, customer relationship services, database storage and management services, fulfilling orders, sending email, processing credit card payments or other functions necessary to our business; and I-KRAB may share your personally identifiable information with these third parties, but only to the extent necessary to perform these functions and provide such services, and only pursuant to binding contractual obligations requiring such third parties to maintain confidentiality of your data.</li>
                            <li>We may also reveal a user's identity or relevant information if I-KRAB knows or believes that user is harming or interfering with other our users, anyone else, or violating the Agreement or infringing any of the I-KRAB's legal rights.</li>
                            <li>I-KRAB may also reveal user's personal information when required to do so by law, or if we have a good-faith belief that such action is necessary to comply with a court order or subpoena, to cooperate with investigations by law enforcement or regulatory authorities or to participate or cooperate with a judicial proceeding, or in urgent circumstances, to protect personal safety, the public or our websites; to protect the property and rights of I-KRAB or a third party, the safety of the public or any person; to prevent or stop any illegal, unethical or legally actionable activity.</li>
                            <li>In the event of a merger, consolidation or reorganization involving I-KRAB, acquisition of I-KRAB by another company, or other similar transaction, your personal information will, in most instances, be transferred to the control of the third party that is part of that transaction.</li>
                        </ul>
                    </PolicyBlock>

                    <PolicyBlock title="4. Security" icon={Lock} delay={0.3}>
                        <p>
                            We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.
                        </p>
                    </PolicyBlock>

                    <PolicyBlock title="5. How we use cookies" icon={Cookie} delay={0.4}>
                        <p>
                            A cookie is a small file which asks permission to be placed on your computer's hard drive. Once you agree, the file is added and the cookie helps analyze web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences. We may use traffic log cookies to identify which pages are being used. This helps us analyze data about webpage traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system. Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us. You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.
                        </p>
                    </PolicyBlock>

                    <PolicyBlock title="6. Links to other websites" icon={Globe} delay={0.5}>
                        <p>
                            Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question.
                        </p>
                    </PolicyBlock>

                    <PolicyBlock title="7. Controlling your personal information" icon={Mail} delay={0.6}>
                        <p>
                            You may choose to restrict the collection or use of your personal information in the following ways:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Whenever you are asked to fill in a form on the website, look for the box that you can click to indicate that you do not want the information to be used by anybody for direct marketing purposes.</li>
                            <li>If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by writing to or emailing us at bose@ikrabesol.in.</li>
                            <li>We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen.</li>
                            <li>You may request details of personal information which we hold about you as governed by the laws of India. A small fee may be payable. If you would like a copy of the information held on you please write to I-KRAB, 4/3 Poddar Nagar, Kolkata - 700068.</li>
                            <li>If you believe that any information we are holding on you is incorrect or incomplete, please write to or email us as soon as possible, at the above address. We will promptly correct any information found to be incorrect.</li>
                        </ul>
                    </PolicyBlock>
                </motion.div>


                {/* Footer Section */}
                {/* <motion.div
                    className="mt-16 pt-8 border-t border-gray-700/50 text-center"
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <p className="text-gray-500 text-sm">HOME • ABOUT US • CAREER • CONTACT US • PRIVACY POLICY</p>
                    <p className="text-gray-600 text-xs mt-2">Follow Us: [Social Media Icons/Links Placeholder]</p>
                </motion.div> */}

            </main>
        </div>
    );
};

export {PrivacyPolicy};
