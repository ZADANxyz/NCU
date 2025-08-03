import React from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

import HeroDividerSection from "../home/sections/HeroDividerSection";
import DegreesOfferedSection from "../home/sections/DegreesOfferedSection";
import ReviewsSection from "../home/sections/ReviewsSection";
import AboutSectionalSUBPAGE from "../home/sections/AboutSectionalSUBPAGE";
import ContactAboutForm from "@/components/ContactAboutForm";
import MapSection from "../home/sections/MapSection";
import FooterSection from "../home/sections/FooterSection";

const CourseCatalogue = () => {
  const handleDownload = () => {
    // Placeholder for PDF download functionality
    console.log("Download Course Catalogue PDF");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 pt-16">
        {/* PDF Section */}
        <section className="w-full py-2 bg-background">
          <div className="w-full px-3 sm:px-6 md:px-[52px]">
            {/* Download Button */}
            <div className="flex justify-end mb-4">
              <Button 
                onClick={handleDownload} 
                className="flex items-center gap-2 bg-[#046BD2] hover:bg-[#046BD2]/90 dark:bg-[#B19528] dark:hover:bg-[#B19528]/90 text-white font-roboto"
              >
                <Download size={20} />
                Download PDF
              </Button>
            </div>

            {/* PDF Embed */}
            <div className="w-full flex justify-center">
              <iframe 
                src="https://drive.google.com/file/d/11esqJo0l33FKi_qLzVKbi3VxIX3wbWwJ/preview?usp=drive_web&embedded=true" 
                width="100%" 
                height="50000px" 
                allow="autoplay"
                style={{ border: "none", display: "block" }}
                title="Course Catalogue PDF"
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
        <FooterSection />
      </main>
    </div>
  );
};

export default CourseCatalogue;