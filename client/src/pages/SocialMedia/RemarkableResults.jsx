import React, { useState } from "react";
import { motion } from "framer-motion";

/* ---------------- DATA ---------------- */
const resultsData = [
  // 🏠 HOME SERVICES
  {
    title: "BrightClean Solutions",
    imageSrc: "/images/brightclean.png",
    stats: [
      { percentage: "320%", description: "Increase in leads" },
      { percentage: "190%", description: "Boost in bookings" },
    ],
    category: "Home Services",
  },
  {
    title: "EcoAir Duct Cleaning",
    imageSrc: "/images/ecoair.png",
    stats: [
      { percentage: "450%", description: "ROAS improvement" },
      { percentage: "270%", description: "Traffic growth" },
    ],
    category: "Home Services",
  },
  {
    title: "ProRoof Masters",
    imageSrc: "/images/proroof.png",
    stats: [
      { percentage: "380%", description: "Increase in conversions" },
      { percentage: "215%", description: "Revenue growth" },
    ],
    category: "Home Services",
  },

  // 🏥 MEDICAL
  {
    title: "SmileCraft Dental",
    imageSrc: "/images/smilecraft.png",
    stats: [
      { percentage: "260%", description: "New patient inquiries" },
      { percentage: "410%", description: "Conversion rate" },
    ],
    category: "Medical",
  },
  {
    title: "VisionPlus Eye Care",
    imageSrc: "/images/visionplus.png",
    stats: [
      { percentage: "312%", description: "Organic traffic increase" },
      { percentage: "220%", description: "Lead growth" },
    ],
    category: "Medical",
  },
  {
    title: "FitLife Clinic",
    imageSrc: "/images/fitlife.png",
    stats: [
      { percentage: "430%", description: "Appointment bookings" },
      { percentage: "195%", description: "Engagement increase" },
    ],
    category: "Medical",
  },

  // ⚖️ LEGAL
  {
    title: "JusticePro Attorneys",
    imageSrc: "/images/justicepro.png",
    stats: [
      { percentage: "580%", description: "Organic leads" },
      { percentage: "210%", description: "Conversion improvement" },
    ],
    category: "Legal",
  },
  {
    title: "LawTrust Group",
    imageSrc: "/images/lawtrust.png",
    stats: [
      { percentage: "320%", description: "Increase in calls" },
      { percentage: "180%", description: "Traffic growth" },
    ],
    category: "Legal",
  },
  {
    title: "DefendRight Firm",
    imageSrc: "/images/defendright.png",
    stats: [
      { percentage: "290%", description: "Consultation requests" },
      { percentage: "145%", description: "Website conversions" },
    ],
    category: "Legal",
  },

  // 🚗 AUTOMOTIVE
  {
    title: "Colt Exhaust",
    imageSrc: "/images/colt-exhaust-mockup.png",
    stats: [
      { percentage: "2043%", description: "Increase in ROAS" },
      { percentage: "1491%", description: "Increase in RRC" },
    ],
    category: "Automotive",
  },
  {
    title: "Springfield Hyundai",
    imageSrc: "/images/springfield-hyundai-mockup.png",
    stats: [
      { percentage: "34%", description: "Increase in organic search traffic" },
      { percentage: "614%", description: "Increase in conversions" },
    ],
    category: "Automotive",
  },
  {
    title: "AutoTech Motors",
    imageSrc: "/images/autotech.png",
    stats: [
      { percentage: "230%", description: "Leads boost" },
      { percentage: "510%", description: "Ad performance" },
    ],
    category: "Automotive",
  },

  // 🏢 B2B
  {
    title: "SupplyChain Pro",
    imageSrc: "/images/supplychainpro.png",
    stats: [
      { percentage: "420%", description: "Lead generation growth" },
      { percentage: "300%", description: "Conversion boost" },
    ],
    category: "B2B",
  },
  {
    title: "BizLink Connect",
    imageSrc: "/images/bizlink.png",
    stats: [
      { percentage: "260%", description: "Organic reach" },
      { percentage: "190%", description: "Client retention" },
    ],
    category: "B2B",
  },
  {
    title: "TradeEdge Solutions",
    imageSrc: "/images/tradeedge.png",
    stats: [
      { percentage: "310%", description: "Pipeline growth" },
      { percentage: "205%", description: "Lead conversion" },
    ],
    category: "B2B",
  },

  // 🛍️ RETAIL
  {
    title: "UrbanThreads",
    imageSrc: "/images/urbanthreads.png",
    stats: [
      { percentage: "520%", description: "Sales increase" },
      { percentage: "430%", description: "Customer retention" },
    ],
    category: "Retail",
  },
  {
    title: "ShopSmart",
    imageSrc: "/images/shopsmart.png",
    stats: [
      { percentage: "290%", description: "Ad click growth" },
      { percentage: "210%", description: "Conversion lift" },
    ],
    category: "Retail",
  },
  {
    title: "StyleBay",
    imageSrc: "/images/stylebay.png",
    stats: [
      { percentage: "410%", description: "ROAS improvement" },
      { percentage: "285%", description: "Online orders" },
    ],
    category: "Retail",
  },

  // ⚙️ INDUSTRIAL
  {
    title: "UPSW",
    imageSrc: "/images/upsw-mockup.png",
    stats: [
      { percentage: "121%", description: "Increase in ROAS" },
      { percentage: "205%", description: "Increase in RRC" },
    ],
    category: "Industrial",
  },
  {
    title: "IronTech Systems",
    imageSrc: "/images/irontech.png",
    stats: [
      { percentage: "340%", description: "Lead growth" },
      { percentage: "220%", description: "Website traffic" },
    ],
    category: "Industrial",
  },
  {
    title: "MechaCorp",
    imageSrc: "/images/mechacorp.png",
    stats: [
      { percentage: "450%", description: "Conversion improvement" },
      { percentage: "310%", description: "Ad engagement" },
    ],
    category: "Industrial",
  },

  // 🧰 SMALL BUSINESS
  {
    title: "Baker’s Choice",
    imageSrc: "/images/bakerschoice.png",
    stats: [
      { percentage: "370%", description: "Revenue growth" },
      { percentage: "240%", description: "Customer retention" },
    ],
    category: "Small Business",
  },
  {
    title: "PetCare Plus",
    imageSrc: "/images/petcare.png",
    stats: [
      { percentage: "290%", description: "Social engagement" },
      { percentage: "210%", description: "Booking rate" },
    ],
    category: "Small Business",
  },
  {
    title: "CraftHive",
    imageSrc: "/images/crafthive.png",
    stats: [
      { percentage: "410%", description: "Online traffic" },
      { percentage: "270%", description: "Conversion lift" },
    ],
    category: "Small Business",
  },
];

/* ---------------- COMPONENTS ---------------- */

const categories = [
  "Home Services",
  "Medical",
  "Legal",
  "Automotive",
  "B2B",
  "Retail",
  "Industrial",
  "Small Business",
];

/* ---------------- VARIANTS ---------------- */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 19,
      damping: 24,
      delay: custom * 0.06, // wave effect per card
    },
  }),
};

/* ---------------- ResultCard ---------------- */
const ResultCard = ({ result, index }) => (
  <motion.div
    className="bg-[#1A1A1A] text-[#EDEDED] shadow-xl rounded-xl overflow-hidden flex flex-col border border-[#CFA866]/30 transition-all duration-300"
    variants={cardVariants}
    custom={index}
    initial="hidden"
    animate="visible"
    whileHover={{
      scale: 1.05,
      boxShadow: "0 25px 50px -12px rgba(207,168,102,0.4)",
      borderColor: "#CFA866",
    }}
  >
    <div className="p-5 text-center">
      <h3 className="text-xl font-bold text-[#CFA866]">{result.title}</h3>
    </div>

    <div className="relative bg-[#0F0F0F] aspect-[3/2] flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-tr from-[#CFA866]/40 to-[#E5BB73]/50 flex items-center justify-center">
        <p className="text-[#EDEDED] font-semibold italic text-sm px-4">
          [3D Website Mockup Placeholder]
        </p>
      </div>
    </div>

    <div className="flex justify-around py-6 px-4 border-t border-[#2A2A2A]">
      {result.stats.map((stat, i) => (
        <div key={i} className="text-center">
          <p className="text-3xl font-extrabold text-[#CFA866] leading-none">
            {stat.percentage}
          </p>
          <p className="text-sm text-[#9A9A9A] mt-1 uppercase">
            {stat.description}
          </p>
        </div>
      ))}
    </div>
  </motion.div>
);

/* ---------------- MAIN COMPONENT ---------------- */
const RemarkableResults = () => {
  const [activeCategory, setActiveCategory] = useState("Automotive");

  const filteredResults = resultsData.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section className="py-20 bg-[#0F0F0F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 text-[#CFA866]">
          Remarkable Results
        </h2>

        {/* Category Buttons */}
        <div className="flex justify-center flex-wrap gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-sm font-semibold rounded-full border-2 transition-all duration-300 focus:outline-none cursor-pointer ${
                cat === activeCategory
                  ? "bg-[#CFA866] border-[#CFA866] text-[#0F0F0F] shadow-lg shadow-[#CFA866]/40 scale-105"
                  : "bg-transparent border-[#3A3A3A] text-[#9A9A9A] hover:border-[#CFA866] hover:text-[#EDEDED]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <motion.div
          key={activeCategory}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={  containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredResults.length > 0 ? (
            filteredResults.map((res, i) => (
              <ResultCard key={res.title} result={res} index={i} />
            ))
          ) : (
            <div className="col-span-full text-center text-[#9A9A9A] py-10 text-lg">
              No results available for{" "}
              <span className="text-[#CFA866] font-semibold">{activeCategory}</span>.
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default RemarkableResults;
