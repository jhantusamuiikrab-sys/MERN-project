import React from "react";
//import HeaderSlider from "./HomeContent/Slider";
// import OwnerMsg from "./Home Content/OwnerMsg";
import BusinessShowcase from "./HomeContent/BusinessShowcase";
import SustainabilitySlider from "./HomeContent/SustainabilitySlider";
import SubscribeSection from "./HomeContent/SubscribeSection";
import DescWithImageSlider from "./HomeContent/DescWithimage";
import { OurServices } from "./HomeContent/OurServices";
import {HmHeroSection} from './HomeContent/HomeHeroSection';


export default function Home() {
    return (
        <>
    {/* <HeaderSlider/> */}
    <HmHeroSection/>
    <DescWithImageSlider/>
    <OurServices/>    
    <BusinessShowcase/>
    <SustainabilitySlider/>
    <SubscribeSection/>    
    </>
    );
};