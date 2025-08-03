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
        <section className="w-full py-8 bg-background">
          <div className="w-full px-3 sm:px-6 md:px-[52px]">
            {/* Download Button */}
            <div className="flex justify-end mb-8">
              <Button 
                onClick={handleDownload} 
                className="flex items-center gap-2 bg-[#046BD2] hover:bg-[#046BD2]/90 dark:bg-[#B19528] dark:hover:bg-[#B19528]/90 text-white font-roboto"
              >
                <Download size={20} />
                Download PDF
              </Button>
            </div>

            {/* PDF Placeholder */}
            <div className="w-full bg-card border border-border rounded-lg overflow-hidden shadow-lg">
              <div className="bg-muted px-6 py-4 border-b border-border">
                <p className="text-sm text-muted-foreground">
                  Course Catalogue - New Covenant University
                </p>
              </div>
              
              {/* PDF Embed Placeholder */}
              <div className="relative w-full" style={{ minHeight: "800px" }}>
                <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Download size={32} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      PDF Document Placeholder
                    </h3>
                    <p className="text-muted-foreground mb-4 max-w-md">
                      This is a placeholder for the Course Catalogue PDF. 
                      Replace this section with the actual PDF embed code.
                    </p>
                    <div className="bg-card border border-border rounded p-4 text-left max-w-lg mx-auto">
                      <code className="text-sm text-muted-foreground">
                        {`<!-- Replace with actual PDF embed -->
<iframe 
  src="path/to/course-catalogue.pdf"
  width="100%" 
  height="800px"
  style="border: none;"
>
</iframe>`}
                      </code>
                    </div>
                  </div>
                </div>
              </div>
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