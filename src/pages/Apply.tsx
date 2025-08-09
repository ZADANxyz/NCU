import React, { useEffect, useState } from "react";
import HeroDividerSection from "./home/sections/HeroDividerSection";
import DegreesOfferedSection from "./home/sections/DegreesOfferedSection";
import ReviewsSection from "./home/sections/ReviewsSection";
import AboutSectionalSUBPAGE from "./home/sections/AboutSectionalSUBPAGE";
import ContactAboutForm from "@/components/ContactAboutForm";
import MapSection from "./home/sections/MapSection";
import { usePageTitle } from "@/hooks/usePageTitle";

const Apply = () => {
  usePageTitle("Apply");
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
    const styleId = 'hubspot-darkmode-style';
    if (isDark) {
      let styleTag = document.getElementById(styleId);
      if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.id = styleId;
        styleTag.innerHTML = `
          .hubspot-form-dark-mode .hs-form-field label,
          .hubspot-form-dark-mode .hs-form-required,
          .hubspot-form-dark-mode .hs-richtext,
          .hubspot-form-dark-mode .hs-error-msg {
            color: #fff !important;
          }
          .hubspot-form-dark-mode input, 
          .hubspot-form-dark-mode textarea, 
          .hubspot-form-dark-mode select {
            background: rgba(35, 34, 50, 0.8) !important;
            color: #fff !important;
            border: 1px solid #666 !important;
          }
          .hubspot-form-dark-mode .hs-button.primary, 
          .hubspot-form-dark-mode input[type=submit] {
            background: #b19528 !important;
            border-color: #b19528 !important;
            color: #232232 !important;
          }
        `;
        document.head.appendChild(styleTag);
      }
    }
  }, [isDark]);

  return (
    <>
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
          <div className={`bg-white dark:bg-[#242836] rounded-2xl border-2 border-[#B19528]/30 p-8 shadow-lg ${isDark ? 'hubspot-form-dark-mode' : ''}`}>
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
    </>
  );
};

export default Apply;