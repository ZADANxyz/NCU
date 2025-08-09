import React from "react";
import HeroSection from "./home/sections/HeroSection";
import HeroDividerSection from "./home/sections/HeroDividerSection";
import DegreesOfferedSection from "./home/sections/DegreesOfferedSection";
import ReviewsSection from "./home/sections/ReviewsSection";
import AboutSection from "./home/sections/AboutSection";
import MapSection from "./home/sections/MapSection";
import { usePageTitle } from "@/hooks/usePageTitle";

const Index = () => {
  usePageTitle("Home");

  return (
    <>
      <HeroSection />
      <HeroDividerSection />
      <DegreesOfferedSection />
      <ReviewsSection />
      <AboutSection />
      <MapSection />
    </>
  );
};

export default Index;