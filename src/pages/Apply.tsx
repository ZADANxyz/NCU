import React from "react";

import HeroDividerSection from "./home/sections/HeroDividerSection";
import DegreesOfferedSection from "./home/sections/DegreesOfferedSection";
import ReviewsSection from "./home/sections/ReviewsSection";
import AboutSectionalSUBPAGE from "./home/sections/AboutSectionalSUBPAGE";
import ContactAboutForm from "@/components/ContactAboutForm";
import MapSection from "./home/sections/MapSection";
import FooterSection from "./home/sections/FooterSection";

const Apply = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="flex-1">
        {/* Application Section */}
        <section className="w-full py-16 bg-background">
          <div className="w-full px-6 sm:px-8 md:px-[60px] max-w-7xl mx-auto">
            {/* Header with Logo and University Info */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 mb-8">
              {/* Logo */}
              <div className="flex-shrink-0">
                <img
                  src="/lovable-uploads/430b0ab3-bc47-4326-b653-b105734db3a4.png"
                  alt="New Covenant University Seal"
                  className="w-32 h-32 md:w-40 md:h-40"
                />
              </div>
              
              {/* University Info */}
              <div className="flex-1">
                <div className="text-lg md:text-xl font-roboto font-normal text-[#333] dark:text-gray-200 mb-4">
                  NEW COVENANT UNIVERSITY • ST. AUGUSTINE, FLORIDA • PHONE: 615-948-2212
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-roboto font-bold text-[#181818] dark:text-white mb-4">
                  Application for Admission
                </h1>
                <p className="text-lg md:text-xl font-roboto font-normal text-[#333] dark:text-gray-200 uppercase tracking-wide">
                  PLEASE TYPE OR PRINT CLEARLY USING THE SPACE PROVIDED:
                </p>
              </div>
            </div>

            {/* HubSpot Application Form */}
            <div className="bg-white dark:bg-[#242836] rounded-2xl border-2 border-[#B19528]/30 p-8 shadow-lg">
              <iframe
                title="HubSpot Application Form"
                src="https://share.hsforms.com/1fa0ae292-5a40-456b-9fda-506cf235517f"
                width="100%"
                height="800"
                frameBorder="0"
                className="w-full rounded-lg border-none"
                style={{ background: "transparent", minHeight: 800 }}
              />
            </div>
          </div>
        </section>

        {/* Divider */}
        <HeroDividerSection />

        {/* Footer Sections */}
        <DegreesOfferedSection />
        <ReviewsSection />
        <AboutSectionalSUBPAGE />
        
        {/* Another Divider */}
        <HeroDividerSection />
        
        {/* Contact Form Section */}
        <div className="w-full bg-white dark:bg-[#242836] py-16 px-3 sm:px-6 md:px-[52px]">
          <ContactAboutForm />
        </div>
        
        {/* Map Section */}
        <MapSection />
      </main>
      
      <FooterSection />
    </div>
  );
};

export default Apply;