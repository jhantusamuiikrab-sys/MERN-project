
import HeroSection from "./E-wallet/HeroSection";
import Card from "./E-wallet/Card";

// --- Configuration ---
const primaryColor = "#cfa866";

// --- Component Definition ---
const EWalletLandingPage = () => {

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navbar (Simple Placeholder) */}
      <nav className="p-6">
        <h1 className="text-2xl font-bold" style={{ color: primaryColor }}>
          UnifiedPay
        </h1>
      </nav>

      {/* Hero Section */}
      <HeroSection />
      {/* ENHANCED FEATURES SECTION */}
      <Card/>

      {/* Professional "How It Works" Section with Image */}
      

    </div>
  );
};

export default EWalletLandingPage;
