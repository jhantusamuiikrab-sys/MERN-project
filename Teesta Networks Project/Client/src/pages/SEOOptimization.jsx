import { SEOHeroSection } from './SEOOptimizations/SeoHeroSection';
import {SEOServiceSection} from './SEOOptimizations/SeoServicesSection'
import {SEOWhyUsSection} from './SEOOptimizations/Seowhyus'
import {SEOProcessSection} from './SEOOptimizations/SeoProcessSction'
import{SEOContactSection} from './SEOOptimizations/SeoContactSection'
export default function Seooptimization() {
    return (
        <>  
            <SEOHeroSection />
            <SEOServiceSection />
            <SEOWhyUsSection/>
            <SEOProcessSection />
            <SEOContactSection/>            
        </>
    );
}