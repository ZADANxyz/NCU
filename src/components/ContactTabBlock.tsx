
import React, { useRef, useEffect } from "react";

// TypeScript: declare the global hbspt from HubSpot
declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (args: Record<string, any>) => void;
      };
    };
  }
}

const NCU_PHONE = (
  <div
    className="mt-3 mb-6 flex items-center justify-center text-[1.6rem] font-extrabold glass glossy px-4 py-2 rounded-xl shadow-lg backdrop-blur-md border border-blue-400/60 dark:border-blue-300/50 text-blue-700"
    style={{
      background:
        "linear-gradient(115deg,rgba(81,128,255,0.16) 0%,rgba(41,100,210,0.28) 100%)",
      boxShadow: "0 6px 32px 0 rgba(81,128,255,0.18)",
      textShadow: "0 2px 10px rgba(27,45,95,0.10)",
      letterSpacing: "1px",
      fontSize: "1.6rem",
    }}
  >
    <svg width={25} height={25} className="inline-block mr-2 text-blue-400" fill="none" stroke="currentColor">
      <path d="M6.85 2.15A6.59 6.59 0 0 1 11.7 7m-4.85-4.85L3.5 3.5a2 2 0 0 0-.5 2.43A16.11 16.11 0 0 0 14.07 15c.58.25 1.24 0 1.53-.55l1.2-2.14a1 1 0 0 0-.29-1.27l-2.39-1.91a1 1 0 0 0-1.11-.1l-2.2.91a13.01 13.01 0 0 1-4.26-4.26l.91-2.2a1 1 0 0 0-.1-1.11l-1.91-2.39a1 1 0 0 0-1.27-.29z" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <span>
      <a href="tel:+16159482212" className="hover:underline" style={{ color: "#2563eb", fontWeight: 900 }}>
        (615) 948-2212
      </a>
    </span>
  </div>
);

const APPLY_LINK = "/apply";

const HUBSPOT_PORTAL_ID = "242249646";
const HUBSPOT_FORM_ID = "fa0ae292-5a40-456b-9fda-506cf235517f";
const HUBSPOT_REGION = "na2";

// Blue glassy button styles for "Apply Today!"
const glassyBlueButtonClass =
  "block w-full font-bold rounded-lg py-2 px-6 transition text-center text-lg cursor-pointer glassy-gold relative border-2 border-blue-700 text-blue-800 dark:text-blue-300 bg-blue-100/10 backdrop-blur-md shadow-lg hover:after:opacity-100 hover:text-white overflow-hidden";

const blueGlassGlossHoverStyle = {
  boxShadow: "0 4px 20px 0 rgba(51,132,245,0.16)",
  border: "2px solid #2563eb",
  color: "#1e3a8a",
  background:
    "linear-gradient(120deg,rgba(51,132,245,0.32) 10%,rgba(91,167,253,0.21) 58%,rgba(132,180,241,0.23) 100%)",
  textShadow: "0 1px 4px rgba(51,100,190,0.09)",
  position: "relative",
  zIndex: 1,
};

const ContactTabBlock = () => {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Prevent double-inject
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
            target: "#hubspot-form-block",
          });
        }
      };
      document.body.appendChild(script);
    } else if (window.hbspt) {
      window.hbspt.forms.create({
        region: HUBSPOT_REGION,
        portalId: HUBSPOT_PORTAL_ID,
        formId: HUBSPOT_FORM_ID,
        target: "#hubspot-form-block",
      });
    }
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Contact box with border */}
      <div className="glass glossy rounded-xl border-2 border-gold shadow-lg px-4 md:px-6 py-7 md:py-8 w-full max-w-md bg-white/90 dark:bg-[#232232]/80 mx-auto">
        <h3 className="text-[2.15rem] md:text-[2.45rem] font-black mb-1 text-center tracking-tight" style={{ fontFamily: "'Playfair Display', serif", color: "#181818", lineHeight: 1.09 }}>
          Contact Us:
        </h3>
        {NCU_PHONE}
        <div className="w-full h-2" />
        <div id="hubspot-form-block" ref={formRef} className="w-full mb-2"></div>
      </div>
      {/* Apply Today button and text directly underneath, perfectly matching the contact card width */}
      <div className="w-full max-w-md flex flex-col items-center mt-7">
        <a
          href={APPLY_LINK}
          className={glassyBlueButtonClass}
          style={blueGlassGlossHoverStyle}
        >
          <span
            className="relative z-20"
            style={{ position: "relative" }}
          >
            Apply Today!
          </span>
          {/* Blue glass/gloss overlay for hover */}
          <span
            className="absolute inset-0 transition-all duration-200 pointer-events-none opacity-0 hover:opacity-100"
            aria-hidden="true"
            style={{
              zIndex: 3,
              background:
                "linear-gradient(110deg,rgba(81,128,255,0.23) 0%,rgba(41,100,210,0.36) 60%,rgba(250,250,255,0.11) 100%)",
              boxShadow: "0 8px 26px 0 rgba(51,132,245,0.11)",
              borderRadius: "inherit",
            }}
          ></span>
        </a>
        <div className="text-[9px] md:text-[10px] text-[#444] font-medium text-center mt-2 whitespace-nowrap overflow-hidden text-ellipsis max-w-xs">
          We're here to help—reach out and let's connect!
        </div>
      </div>
    </div>
  );
};

export default ContactTabBlock;

