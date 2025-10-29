import {
  motion,
  useInView
} from "framer-motion";
import { useState, useEffect, useRef } from "react";
const stats = [
  { value: "99.9%", label: "Uptime & Reliability" },
  { value: "5M+", label: "Messages Sent Monthly" },
  { value: "75%", label: "Average Open Rate" },
  { value: "10K+", label: "Happy Clients" },
];
const StatItem = ({ value, label }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const targetNumber = parseFloat(value.replace(/[^0-9.]/g, ""));
  const isPercentage = value.includes("%");
  const isK = value.includes("K");
  const isM = value.includes("M");

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = targetNumber;
      const duration = 2000;
      let startTime = null;

      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        const currentValue = start + percentage * (end - start);

        let formattedValue;
        if (isK || isM) {
          formattedValue = Math.round(currentValue);
        } else {
          formattedValue = currentValue.toFixed(1);
        }

        setDisplayValue(formattedValue);

        if (percentage < 1) {
          window.requestAnimationFrame(step);
        } else {
          setDisplayValue(
            targetNumber.toFixed(isPercentage ? 1 : 0) +
              (isPercentage ? "%" : isM ? "M+" : isK ? "K+" : "")
          );
        }
      };

      window.requestAnimationFrame(step);
    }
  }, [isInView, targetNumber, isPercentage, isM, isK]);

  return (
    <div ref={ref} className="text-center p-4">
      <motion.h3
        className="text-5xl font-extrabold text-[#cfa866] mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {displayValue}
      </motion.h3>
      <motion.p
        className="text-gray-300 text-lg font-medium uppercase tracking-wider"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {label}
      </motion.p>
    </div>
  );
};

export const StatsSection = () => (
  <section className="py-20 md:py-28 bg-gray-800">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <motion.h2
        className="text-4xl font-extrabold text-white text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        The Numbers Speak for Themselves
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 ">
        {stats.map((stat, index) => (
          <StatItem key={index} value={stat.value} label={stat.label} />
        ))}
      </div>
    </div>
  </section>
);