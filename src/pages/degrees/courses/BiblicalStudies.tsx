import React from "react";
import HeaderMenuDEGREES from "@/components/HeaderMenuDEGREES";
import HeroSection from "@/pages/home/sections/HeroSection";
import DegreesOfferedSection from "@/pages/home/sections/DegreesOfferedSection";
import ReviewsSection from "@/pages/home/sections/ReviewsSection";
import AboutSectionalSUBPAGE from "@/pages/home/sections/AboutSectionalSUBPAGE";
import ContactAndMapSection from "@/pages/home/sections/ContactAndMapSection";
import FooterSection from "@/pages/home/sections/FooterSection";
import HeroDividerSection from "@/pages/home/sections/HeroDividerSection";

const BiblicalStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeaderMenuDEGREES currentDegreeLevel="associate" />
      <HeroSection />
      
      {/* PDF Embed Section */}
      <section className="w-full bg-background dark:bg-background py-12 px-6 sm:px-8 md:px-[60px]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-roboto font-normal text-[#181818] dark:text-white mb-8 text-center">
            Associate of Biblical Studies
          </h2>
          
          <div className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://placeholder-pdf-url.com/biblical-studies"
              className="w-full h-[800px] border-0"
              title="Associate of Biblical Studies Course Information"
            />
          </div>
        </div>
      </section>
      
      <HeroDividerSection />
      <DegreesOfferedSection />
      <ReviewsSection />
      <AboutSectionalSUBPAGE />
      <ContactAndMapSection />
      <FooterSection />
    </div>
  );
};

export default BiblicalStudies;