
import React from "react";
import HeroSection from "./home/sections/HeroSection";
import HeroDividerSection from "./home/sections/HeroDividerSection";
import DegreesOfferedSection from "./home/sections/DegreesOfferedSection";
import ReviewsSection from "./home/sections/ReviewsSection";
import AboutSection from "./home/sections/AboutSection";
import MapSection from "./home/sections/MapSection";
import FooterSection from "./home/sections/FooterSection";
import BackToTopButton from "./home/sections/BackToTopButton";

const Index = () => {
  return (
    <div className="bg-background min-h-screen pt-0">
      <main>
        <HeroSection />
        <HeroDividerSection />
        <DegreesOfferedSection />
        <ReviewsSection />
        <AboutSection />
        <MapSection />
      </main>
      <FooterSection />
      <BackToTopButton />
    </div>
  );
};

export default Index;
