import React from "react";
import HeaderMenuDEGREES from "@/components/HeaderMenuDEGREES";
import DegreesOfferedSection from "@/pages/home/sections/DegreesOfferedSection";
import ReviewsSection from "@/pages/home/sections/ReviewsSection";
import AboutSectionalSUBPAGE from "@/pages/home/sections/AboutSectionalSUBPAGE";
import ContactAboutForm from "@/components/ContactAboutForm";
import MapSection from "@/pages/home/sections/MapSection";
import FooterSection from "@/pages/home/sections/FooterSection";
import HeroDividerSection from "@/pages/home/sections/HeroDividerSection";

const HERO_IMAGE = "/lovable-uploads/72bef9f3-0c46-4484-b7cb-1af7990b8c18.png";

const ChristianLeadership = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeaderMenuDEGREES currentDegreeLevel="associate" />
      
      {/* PDF Embed Section */}
      <section className="w-full bg-background dark:bg-background py-16 px-3 sm:px-6 md:px-[52px]">
        <div className="w-full">
          <div className="flex justify-end mb-4">
            <a
              href="https://placeholder-pdf-url.com/christian-leadership"
              download
              className="inline-flex items-center px-4 py-2 bg-[#046BD2] text-white rounded-md hover:bg-[#035a9f] transition-colors"
            >
              Download PDF
            </a>
          </div>
          <div className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://placeholder-pdf-url.com/christian-leadership"
              className="w-full h-[800px] border-0"
              title="Associate of Christian Leadership Course Information"
            />
          </div>
        </div>
      </section>
      
      <HeroDividerSection />
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
      
      <FooterSection />
    </div>
  );
};

export default ChristianLeadership;