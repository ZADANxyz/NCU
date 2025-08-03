import React from "react";
import HeaderMenuDEGREES from "@/components/HeaderMenuDEGREES";
import HeroSection from "@/pages/home/sections/HeroSection";
import DegreesOfferedSection from "@/pages/home/sections/DegreesOfferedSection";
import ReviewsSection from "@/pages/home/sections/ReviewsSection";
import AboutSectionalSUBPAGE from "@/pages/home/sections/AboutSectionalSUBPAGE";
import ContactAndMapSection from "@/pages/home/sections/ContactAndMapSection";
import FooterSection from "@/pages/home/sections/FooterSection";

const Degrees = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeaderMenuDEGREES />
      <HeroSection />
      <DegreesOfferedSection />
      <ReviewsSection />
      <AboutSectionalSUBPAGE />
      <ContactAndMapSection />
      <FooterSection />
    </div>
  );
};

export default Degrees;