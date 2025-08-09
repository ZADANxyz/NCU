import React, { useEffect } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import DegreesOfferedSection from "./home/sections/DegreesOfferedSection";
import ReviewsSection from "./home/sections/ReviewsSection";
import AboutSectionalSUBPAGE from "./home/sections/AboutSectionalSUBPAGE";
import MapSection from "./home/sections/MapSection";
import { usePageTitle } from "@/hooks/usePageTitle";
import ContactHubspotForm from "@/components/ContactHubspotForm";

// HubSpot configuration
const HUBSPOT_PORTAL_ID = "242249646";
const HUBSPOT_FORM_ID = "fa0ae292-5a40-456b-9fda-506cf235517f";
const HUBSPOT_REGION = "na2";
const TARGET_ID = "hubspot-form-contact-page";

// Social media SVG icons
const TikTokIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-2.909 2.909 2.896 2.896 0 0 1-2.909-2.909 2.896 2.896 0 0 1 2.909-2.909c.301 0 .591.041.871.118V9.47a6.467 6.467 0 0 0-.871-.058A6.537 6.537 0 0 0 3 15.951a6.537 6.537 0 0 0 6.465 6.539 6.537 6.537 0 0 0 6.465-6.539V8.108a8.235 8.235 0 0 0 4.659 1.459V6.686Z"/>
  </svg>
);

const Contact = () => {
  usePageTitle("Contact");

  const [isDark, setIsDark] = React.useState(() =>
    typeof window !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    window.addEventListener("storage", handleStorageChange);
    const obs = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => {
      window.removeEventListener("storage", handleStorageChange);
      obs.disconnect();
    };
  }, []);

  return (
    <>
      {/* Header Image */}
      <div className="w-full h-[500px] md:h-[600px] lg:h-[700px] relative overflow-hidden">
        <img
          src="/lovable-uploads/72bef9f3-0c46-4484-b7cb-1af7990b8c18.png"
          alt="New Covenant University Campus"
          className="w-full h-full object-cover"
          loading="eager"
          style={{
            objectPosition: "center center",
          }}
        />
      </div>

      {/* Contact Section */}
      <section className="w-full bg-white dark:bg-[#242836] py-16 px-3 sm:px-6 md:px-[52px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left Column - Logo, Title, and HubSpot Form - 2/3 width */}
          <div className="w-full lg:w-2/3 flex flex-col">
            {/* NCU Logo and Title */}
            <div className="flex flex-col items-center mb-8">
              <img
                src="/ncu-seal.png"
                alt="New Covenant University Logo"
                className="w-40 h-40 mb-4 object-contain"
              />
              <h1 className="text-3xl md:text-4xl font-roboto font-bold text-[#181818] dark:text-white text-center">
                GET IN TOUCH WITH US TODAY!
              </h1>
            </div>

            {/* HubSpot Form */}
            <ContactHubspotForm
              isDark={isDark}
              portalId={HUBSPOT_PORTAL_ID}
              formId={HUBSPOT_FORM_ID}
              region={HUBSPOT_REGION}
              targetId={TARGET_ID}
            />
          </div>

          {/* Right Column - Contact Information - 1/3 width */}
          <div className="w-full lg:w-1/3 flex flex-col">
            <h2 className="text-xl md:text-2xl font-roboto font-bold text-[#181818] dark:text-white mb-6 text-center">
              NEED OTHER OPTIONS TO CONNECT?
            </h2>

            {/* Gold Contact Box */}
            <div className="bg-white dark:bg-white border-2 border-[#B19528] rounded-lg p-8 mb-6 text-center">
              {/* Phone Number */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#181818] mb-3">PHONE NUMBER:</h3>
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5 text-[#B19528]" />
                  <a
                    href="tel:+16159482212"
                    className="text-xl font-semibold text-[#B19528] hover:text-[#D4AF37] transition-colors"
                  >
                    (615) 948-2212
                  </a>
                </div>
              </div>

              {/* Email Address */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#181818] mb-3">EMAIL ADDRESS:</h3>
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5 text-[#B19528]" />
                  <a
                    href="mailto:ADMISSIONS@NCU.EDUCATION"
                    className="text-xl font-semibold text-[#B19528] hover:text-[#D4AF37] transition-colors"
                  >
                    ADMISSIONS@NCU.EDUCATION
                  </a>
                </div>
              </div>

              {/* Locations */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#181818] mb-3">LOCATIONS:</h3>
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-2 w-full justify-center">
                    <MapPin className="w-6 h-6 text-[#B19528]" />
                    <span className="text-xl font-semibold text-[#181818]">FREMONT, OHIO</span>
                  </div>
                  <div className="flex items-center gap-2 w-full justify-center">
                    <MapPin className="w-6 h-6 text-[#B19528]" />
                    <span className="text-xl font-semibold text-[#181818]">ORMAND BEACH, FL</span>
                  </div>
                  <div className="flex items-center gap-2 w-full justify-center">
                    <MapPin className="w-6 h-6 text-[#B19528]" />
                    <span className="text-xl font-semibold text-[#181818]">SPRINGFIELD, TN</span>
                  </div>
                  <div className="flex items-center gap-2 w-full justify-center">
                    <MapPin className="w-6 h-6 text-[#B19528]" />
                    <span className="text-xl font-semibold text-[#181818]">NASAU, BAHAMAS</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-bold text-[#181818] mb-4">SOCIAL MEDIA:</h3>
                <div className="flex justify-center gap-2">
                  <a
                    href="https://www.facebook.com/newcovenantu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#B19528] hover:bg-[#D4AF37] transition-colors rounded-full flex items-center justify-center text-white"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/newcovenantuniversity"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#B19528] hover:bg-[#D4AF37] transition-colors rounded-full flex items-center justify-center text-white"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href="https://x.com/NewCovenantU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#B19528] hover:bg-[#D4AF37] transition-colors rounded-full flex items-center justify-center text-white"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/@newcovenantuniversity808"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#B19528] hover:bg-[#D4AF37] transition-colors rounded-full flex items-center justify-center text-white"
              >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.tiktok.com/@newcovenantuniversity"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#B19528] hover:bg-[#D4AF37] transition-colors rounded-full flex items-center justify-center text-white"
                  >
                    <TikTokIcon />
                  </a>
                </div>
              </div>
            </div>

            {/* Apply Today Button - Full Width */}
            <div className="w-full">
              <Link
                to="/apply"
                className="group block font-bold py-3 px-8 transition text-center cursor-pointer relative shadow-lg overflow-hidden rounded border-2 border-blue-700 dark:border-[#B19528] text-blue-800 dark:text-[#B19528] bg-blue-100/10 dark:bg-[#B19528]/10 hover:bg-blue-200/20 dark:hover:bg-[#B19528]/20 font-roboto w-full h-12"
              >
                <span className="relative z-20">Apply Today!</span>
                <span
                  className="absolute inset-0 opacity-0 transition-all duration-200 pointer-events-none group-hover:opacity-100 dark:hidden"
                  aria-hidden="true"
                  style={{
                    zIndex: 3,
                    background: "linear-gradient(110deg,rgba(51,128,255,0.45) 0%,rgba(41,100,210,0.67) 60%,rgba(27,55,130,0.18) 100%)",
                    boxShadow: "0 8px 30px 0 rgba(51,132,245,0.17)",
                    borderRadius: "inherit",
                  }}
                />
                <span
                  className="absolute inset-0 opacity-0 transition-all duration-200 pointer-events-none group-hover:opacity-100 hidden dark:block"
                  aria-hidden="true"
                  style={{
                    zIndex: 3,
                    background: "linear-gradient(110deg,rgba(177,149,40,0.27) 0%,rgba(228,214,128,0.45) 60%,rgba(178,160,66,0.18) 100%)",
                    boxShadow: "0 8px 30px 0 rgba(177,149,40,0.19)",
                    borderRadius: "inherit",
                  }}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full flex justify-center">
        <div
          className="w-full"
          style={{
            maxWidth: "97vw",
            height: "1.1px",
            background: "linear-gradient(90deg,rgba(177,149,40,0.16) 0%, rgba(177,149,40,0.36) 3%, rgba(177,149,40,0.52) 12%, rgba(177,149,40,0.75) 29%, rgba(177,149,40,0.75) 71%, rgba(177,149,40,0.52) 88%, rgba(177,149,40,0.36) 97%, rgba(177,149,40,0.16) 100%)",
            boxShadow: "0 2px 9px 0 rgba(177,149,40,0.17) inset, 0 2px 2px 0 rgba(177,149,40,0.08)",
            borderRadius: 3,
            zIndex: 20,
            opacity: 0.99,
            margin: "0 auto",
          }}
        />
      </div>

      {/* Remaining Sections */}
      <DegreesOfferedSection />
      <ReviewsSection />
      <AboutSectionalSUBPAGE />
      <MapSection />
    </>
  );
};

export default Contact;