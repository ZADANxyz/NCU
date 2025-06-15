
import React from "react";
import HeroSection from "./home/sections/HeroSection";
import DegreesOfferedSection from "./home/sections/DegreesOfferedSection";
import VisionSection from "./home/sections/VisionSection";
import PortfolioSection from "./home/sections/PortfolioSection";
import TeamSection from "./home/sections/TeamSection";
import FoundingStorySection from "./home/sections/FoundingStorySection";
import SubscribeSection from "./home/sections/SubscribeSection";
import ReviewsSection from "./home/sections/ReviewsSection";

const Index = () => {
  return (
    <div className="bg-background min-h-screen pt-0">
      <main>
        <HeroSection />
        <DegreesOfferedSection />
        <ReviewsSection />
        <VisionSection />
        <PortfolioSection />
        <TeamSection />
        <FoundingStorySection />
        <SubscribeSection />
      </main>
    </div>
  );
};

export default Index;
