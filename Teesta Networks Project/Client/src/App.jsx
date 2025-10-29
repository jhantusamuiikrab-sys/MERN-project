import React from 'react'
import Home from '../src/pages/Home'
import Header from '../src/components/Header' 
import Footer from '../src/components/Footer'
import About from "../src/pages/AboutUs";
import Contact from "../src/pages/ContactUs";
import Seooptimization from "../src/pages/SEOOptimization";
import WebDevelopment from "../src/pages/WebDevelopmentPage";
import CRM from "../src/pages/crmPage";
import Bulksms from "../src/pages/BulkSms";
import SocialMedia from "../src/pages/SocialMediaMarketingPage";
import GoogleAdss from "../src/pages/GoogleAds";
import Graphic from "../src/pages/Graphics";
import EWalletLandingPage from "../src/pages/EWallet"
import MainSzutraFlow from "../src/pages/SzutraMain"
import {MainRealEstateFlow} from "../src/pages/RealEstateMain"
import {MainCareerFlow} from "../src/pages/CareerMain" 
import { Routes, Route  } from 'react-router-dom'
import { FloatingWhatsAppButton } from './components/Whatsapp'
import {TorshaFlow} from "../src/pages/TorshaPlus"
import {PrivacyPolicy} from "../src/pages/PrivacyPolicy"

function App() { 
  return (
    <>       
    <Header/>    
        <Routes>
          <Route path="/" element={<Home />} />          
          <Route path="/contact" element={<Contact />} />  
          <Route path="/about" element={<About />} />
          <Route path="/Bulk-SMS" element={<Bulksms />} />
          <Route path="/crm" element={<CRM />} />
          <Route path="/social-media" element={<SocialMedia />} />
          <Route path="/google-ads" element={<GoogleAdss />} />
          <Route path="/graphic" element={<Graphic />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/seo-optimization" element={<Seooptimization />} />
          <Route path="/ewallet" element={<EWalletLandingPage />} />
          <Route path="/szutra" element={<MainSzutraFlow />} />
          <Route path="/realestate" element={<MainRealEstateFlow />} />
          <Route path="/career" element={<MainCareerFlow />} />
          <Route path="/ecommerce" element={<TorshaFlow />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>    
      <FloatingWhatsAppButton/>  
   <Footer/>
    </>
  )
}

export default App
