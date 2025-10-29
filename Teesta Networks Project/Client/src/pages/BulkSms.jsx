import {  useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Header } from "./BulkSms/Header";
import { BulkSMSHeroSection } from "./BulkSms/BlkSMSHeroSection";
import { FeaturesSection } from "./BulkSms/FeaturesSection";
import { StatsSection } from "./BulkSms/StatsSection";
import { CtaSection } from "./BulkSms/CtaSection";

export default function BulkSms() {
  useEffect(() => {
    document.body.style.fontFamily = "Inter, sans-serif";
    document.body.style.backgroundColor = "#f9fafb";
    document.body.style.margin = "0";
    document.body.style.padding = "0";
  }, []);

  return (
    <AnimatePresence mode="wait">
      <div className="min-h-screen antialiased">
        <Header />
        <BulkSMSHeroSection />
        <FeaturesSection />
        <StatsSection />
        <CtaSection />
      </div>
    </AnimatePresence>
  );
}
