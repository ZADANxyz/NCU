import React, { useEffect, useState } from "react";

import HeroDividerSection from "./home/sections/HeroDividerSection";
import DegreesOfferedSection from "./home/sections/DegreesOfferedSection";
import ReviewsSection from "./home/sections/ReviewsSection";
import AboutSectionalSUBPAGE from "./home/sections/AboutSectionalSUBPAGE";
import ContactAboutForm from "@/components/ContactAboutForm";
import MapSection from "./home/sections/MapSection";
import FooterSection from "./home/sections/FooterSection";

const Apply = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    setIsDark(document.documentElement.classList.contains('dark'));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Load HubSpot form script
    const script = document.createElement('script');
    script.src = 'https://js-na2.hsforms.net/forms/embed/v2.js';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://js-na2.hsforms.net/forms/embed/v2.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  useEffect(() => {
    const styleId = 'hubspot-darkmode-style-apply';
    if (isDark) {
      let styleTag = document.getElementById(styleId);
      if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.id = styleId;
        styleTag.innerHTML = `
          .hs-form-iframe, .hs-form-frame {
            background-color: transparent !important;
          }
          body.dark .hs-form-field label,
          body.dark .hs-form-field .hs-form-required,
          body.dark .hs-richtext,
          body.dark .hs-error-msg {
            color: #fff !important;
          }
        `;
        document.head.appendChild(styleTag);
      }
    } else {
      const styleTag = document.getElementById(styleId);
      if (styleTag) {
        styleTag.remove();
      }
    }
    return () => {
      const styleTag = document.getElementById(styleId);
      if (styleTag) {
        styleTag.remove();
      }
    };
  }, [isDark]);

  return (
    <div className="min-h-screen bg-background">
      <main className="flex-1">
        {/* Application Section */}
        <section className="w-full py-16 bg-background">
          <div className="w-full px-6 sm:px-8 md:px-[60px]">
            {/* Header with Logo and University Info */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-8 w-full">
              {/* Logo - Large and pinned to left with proper aspect ratio */}
              <div className="flex-shrink-0">
                <img
                  src="/lovable-uploads/430b0ab3-bc47-4326-b653-b105734db3a4.png"
                  alt="New Covenant University Seal"
                  className="w-auto h-36 md:h-44 lg:h-52 max-w-none"
                  style={{ aspectRatio: 'auto' }}
                />
              </div>
              
              {/* University Info - Centered */}
              <div className="flex-1 flex flex-col items-center text-center justify-center pt-4">
                <div className="text-base md:text-lg lg:text-xl xl:text-2xl font-roboto font-normal text-[#333] dark:text-gray-200 mb-4">
                  NEW COVENANT UNIVERSITY • ST. AUGUSTINE, FLORIDA • PHONE: 615-948-2212
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-roboto font-bold text-[#181818] dark:text-white mb-4">
                    Application for Admission
                  </h1>
                  <p className="text-xs md:text-sm lg:text-base xl:text-lg font-roboto font-bold text-[#333] dark:text-gray-200 uppercase tracking-wide">
                    PLEASE TYPE OR PRINT CLEARLY USING THE SPACE PROVIDED:
                  </p>
                </div>
              </div>
            </div>

            {/* HubSpot Application Form */}
            <div className="bg-white dark:bg-[#242836] rounded-2xl border-2 border-[#B19528]/30 p-8 shadow-lg">
              <div 
                className="hs-form-frame" 
                data-region="na2" 
                data-form-id="3105fcaf-cce4-45de-90a4-89705caec011" 
                data-portal-id="242249646"
              ></div>
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