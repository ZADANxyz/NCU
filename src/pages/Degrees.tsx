import React from "react";
import DegreesOfferedSection from "@/pages/home/sections/DegreesOfferedSection";
import ReviewsSection from "@/pages/home/sections/ReviewsSection";
import AboutSectionalSUBPAGE from "@/pages/home/sections/AboutSectionalSUBPAGE";
import ContactAboutForm from "@/components/ContactAboutForm";
import MapSection from "@/pages/home/sections/MapSection";
import HeroDividerSection from "@/pages/home/sections/HeroDividerSection";
import { usePageTitle } from "@/hooks/usePageTitle";

const HERO_IMAGE = "/lovable-uploads/72bef9f3-0c46-4484-b7cb-1af7990b8c18.png";

const Degrees = () => {
  usePageTitle("Degrees");

  return (
    <>
      {/* Header Image Section */}
      <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="New Covenant University"
            className="w-full h-full object-cover"
            loading="eager"
            style={{
              objectPosition: "center center",
            }}
          />
        </div>
      </section>
      
      <DegreesOfferedSection />
      <ReviewsSection />
      <AboutSectionalSUBPAGE />
      
      {/* Divider */}
      <HeroDividerSection />
      
      {/* Contact Form Section */}
      <div className="w-full bg-white dark:bg-[#242836] py-16 px-3 sm:px-6 md:px-[52px]">
        <ContactAboutForm />
      </div>
      
      {/* Map Section */}
      <MapSection />
    </>
  );
};

export default Degrees;