import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import ContactHubspotForm from "@/components/ContactHubspotForm";
import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import DegreesOfferedSection from "./home/sections/DegreesOfferedSection";
import ReviewsSection from "./home/sections/ReviewsSection";
import AboutSection from "./home/sections/AboutSection";
import MapSection from "./home/sections/MapSection";
import FooterSection from "./home/sections/FooterSection";
import BackToTopButton from "./home/sections/BackToTopButton";

// HubSpot configuration
const HUBSPOT_PORTAL_ID = "242249646";
const HUBSPOT_FORM_ID = "fa0ae292-5a40-456b-9fda-506cf235517f";
const HUBSPOT_REGION = "na2";

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (args: Record<string, any>) => void;
      };
    };
  }
}

// Social media SVG icons
const TikTokIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-2.909 2.909 2.896 2.896 0 0 1-2.909-2.909 2.896 2.896 0 0 1 2.909-2.909c.301 0 .591.041.871.118V9.47a6.467 6.467 0 0 0-.871-.058A6.537 6.537 0 0 0 3 15.951a6.537 6.537 0 0 0 6.465 6.539 6.537 6.537 0 0 0 6.465-6.539V8.108a8.235 8.235 0 0 0 4.659 1.459V6.686Z"/>
  </svg>
);

const Contact = () => {
  const [isDark, setIsDark] = React.useState(() =>
    typeof window !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false
  );

  React.useEffect(() => {
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

  React.useEffect(() => {
    if (!window.hbspt) {
      const script = document.createElement("script");
      script.src = "//js-na2.hsforms.net/forms/embed/v2.js";
      script.async = true;
      script.onload = () => {
        if (window.hbspt) {
          window.hbspt.forms.create({
            region: HUBSPOT_REGION,
            portalId: HUBSPOT_PORTAL_ID,
            formId: HUBSPOT_FORM_ID,
            target: "#hubspot-form-contact",
          });
        }
      };
      document.body.appendChild(script);
    } else if (window.hbspt) {
      window.hbspt.forms.create({
        region: HUBSPOT_REGION,
        portalId: HUBSPOT_PORTAL_ID,
        formId: HUBSPOT_FORM_ID,
        target: "#hubspot-form-contact",
      });
    }
  }, []);

  // Inject dark mode styles for HubSpot form
  React.useEffect(() => {
    if (!isDark) return;
    let styleTag = document.getElementById("hubspot-darkmode-style-contact");
    if (!styleTag) {
      styleTag = document.createElement("style");
      styleTag.id = "hubspot-darkmode-style-contact";
      styleTag.innerHTML = `
        #hubspot-form-contact label,
        #hubspot-form-contact .hs-form-required,
        #hubspot-form-contact .hs-form-field label,
        #hubspot-form-contact .hs-richtext,
        #hubspot-form-contact .hs-file-description {
          color: #fff !important;
        }
        #hubspot-form-contact input, 
        #hubspot-form-contact textarea, 
        #hubspot-form-contact select {
          background: rgba(35, 34, 50, 0.8) !important;
          color: #fff !important;
          border: 1px solid #666 !important;
        }
        #hubspot-form-contact .hs-button.primary, 
        #hubspot-form-contact input[type=submit] {
          background: #b19528 !important;
          border-color: #b19528 !important;
          color: #232232 !important;
        }
      `;
      document.head.appendChild(styleTag);
    }
    return () => {
      styleTag?.remove();
    };
  }, [isDark]);

  return (
    <div className="bg-background min-h-screen">
      {/* Header Image */}
      <section className="w-full overflow-hidden">
        <AspectRatio ratio={16 / 9} className="w-full">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/lovable-uploads/c969fc67-71fc-40aa-b274-a122d07e40db.png')`,
            }}
          />
        </AspectRatio>
      </section>

      {/* Contact Section */}
      <section className="w-full bg-white dark:bg-[#242836] py-16 px-3 sm:px-6 md:px-[52px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left Column - Logo, Title, and HubSpot Form */}
          <div className="w-full lg:w-1/2 flex flex-col">
            {/* NCU Logo and Title */}
            <div className="flex flex-col items-center mb-8">
              <img
                src={isDark ? "/lovable-uploads/0b8ffb5b-2139-4853-890a-c2ee2ca521ac.png" : "/lovable-uploads/430b0ab3-bc47-4326-b653-b105734db3a4.png"}
                alt="New Covenant University Logo"
                className="w-24 h-24 mb-4"
              />
              <h1 className="text-3xl md:text-4xl font-roboto font-bold text-[#181818] dark:text-white text-center">
                GET IN TOUCH WITH US TODAY!
              </h1>
            </div>

            {/* HubSpot Form */}
            <div
              id="hubspot-form-contact"
              className={
                "w-full transition-colors" +
                (isDark
                  ? " dark:text-white dark:[&_input]:text-white dark:[&_label]:text-white dark:[&_button]:text-gold"
                  : " text-black")
              }
            />
          </div>

          {/* Right Column - Contact Information */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <h2 className="text-2xl md:text-3xl font-roboto font-bold text-[#181818] dark:text-white mb-6 text-center">
              NEED OTHER OPTIONS TO CONNECT?
            </h2>

            {/* Gold Contact Box */}
            <div className="bg-gradient-to-br from-[#B19528]/10 to-[#D4AF37]/5 border-2 border-[#B19528] rounded-lg p-6 mb-6">
              {/* Phone Number */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-[#181818] dark:text-white mb-2">PHONE NUMBER:</h3>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-[#B19528]" />
                  <a
                    href="tel:+16159482212"
                    className="text-lg font-semibold text-[#B19528] hover:text-[#D4AF37] transition-colors"
                  >
                    (615) 948-2212
                  </a>
                </div>
              </div>

              {/* Email Address */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-[#181818] dark:text-white mb-2">EMAIL ADDRESS:</h3>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-[#B19528]" />
                  <a
                    href="mailto:ADMISSIONS@NCU.EDUCATION"
                    className="text-lg font-semibold text-[#B19528] hover:text-[#D4AF37] transition-colors"
                  >
                    ADMISSIONS@NCU.EDUCATION
                  </a>
                </div>
              </div>

              {/* Locations */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-[#181818] dark:text-white mb-2">LOCATIONS:</h3>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#B19528]" />
                    <span className="text-lg font-semibold text-[#181818] dark:text-white">FREMONT, OH</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#B19528]" />
                    <span className="text-lg font-semibold text-[#181818] dark:text-white">ORMAND BEACH, FL</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#B19528]" />
                    <span className="text-lg font-semibold text-[#181818] dark:text-white">SPRINGFIELD, TN</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#B19528]" />
                    <span className="text-lg font-semibold text-[#181818] dark:text-white">NASAU, BAHAMAS</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-lg font-bold text-[#181818] dark:text-white mb-3">SOCIAL MEDIA:</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/newcovenantu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#B19528] hover:bg-[#D4AF37] transition-colors rounded-full flex items-center justify-center text-white"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/newcovenantuniversity"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#B19528] hover:bg-[#D4AF37] transition-colors rounded-full flex items-center justify-center text-white"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323C5.902 8.246 7.053 7.756 8.35 7.756s2.448.49 3.323 1.297c.898.898 1.388 2.049 1.388 3.346s-.49 2.448-1.297 3.323c-.898.898-2.049 1.388-3.346 1.388zm7.598 0c-1.297 0-2.448-.49-3.323-1.297c-.898-.898-1.388-2.049-1.388-3.346s.49-2.448 1.297-3.323c.898-.898 2.049-1.388 3.346-1.388s2.448.49 3.323 1.297c.898.898 1.388 2.049 1.388 3.346s-.49 2.448-1.297 3.323c-.898.898-2.049 1.388-3.346 1.388z"/>
                    </svg>
                  </a>
                  <a
                    href="https://x.com/NewCovenantU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#B19528] hover:bg-[#D4AF37] transition-colors rounded-full flex items-center justify-center text-white"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/@newcovenantuniversity808"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#B19528] hover:bg-[#D4AF37] transition-colors rounded-full flex items-center justify-center text-white"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.tiktok.com/@newcovenantuniversity"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#B19528] hover:bg-[#D4AF37] transition-colors rounded-full flex items-center justify-center text-white"
                  >
                    <TikTokIcon />
                  </a>
                </div>
              </div>
            </div>

            {/* Apply Today Button */}
            <div className="flex justify-center">
              <Link
                to="/apply"
                className="group block font-bold py-3 px-8 transition text-center cursor-pointer relative shadow-lg overflow-hidden rounded border-2 border-blue-700 dark:border-[#B19528] text-blue-800 dark:text-[#B19528] bg-blue-100/10 dark:bg-[#B19528]/10 hover:bg-blue-200/20 dark:hover:bg-[#B19528]/20 font-roboto min-w-[160px] h-12"
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
      <AboutSection />
      <MapSection />
      <FooterSection />
      <BackToTopButton />
    </div>
  );
};

export default Contact;