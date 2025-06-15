
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

// Glassy phone number display
const NCU_PHONE = (
  <div className="mt-3 mb-5 flex items-center justify-center text-[1.37rem] font-extrabold text-blue-700 glass glossy px-4 py-2 rounded-xl shadow-lg backdrop-blur-md border border-blue-400/60 dark:border-blue-300/50"
    style={{
      background: "linear-gradient(115deg,rgba(81,128,255,0.13) 0%,rgba(41,100,210,0.21) 100%)",
      boxShadow: "0 6px 28px 0 rgba(81,128,255,0.19)",
      textShadow: "0 1px 6px rgba(27,45,95,0.07)",
      letterSpacing: "1px",
    }}
  >
    <svg width={22} height={22} className="inline-block mr-2 text-blue-400" fill="none" stroke="currentColor">
      <path d="M6.85 2.15A6.59 6.59 0 0 1 11.7 7m-4.85-4.85L3.5 3.5a2 2 0 0 0-.5 2.43A16.11 16.11 0 0 0 14.07 15c.58.25 1.24 0 1.53-.55l1.2-2.14a1 1 0 0 0-.29-1.27l-2.39-1.91a1 1 0 0 0-1.11-.1l-2.2.91a13.01 13.01 0 0 1-4.26-4.26l.91-2.2a1 1 0 0 0-.1-1.11l-1.91-2.39a1 1 0 0 0-1.27-.29z" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <span>
      <a href="tel:+18883177463" className="hover:underline" style={{ color: "#2563eb", fontWeight: 900 }}>
        (888) 317-7463
      </a>
    </span>
  </div>
);

const APPLY_LINK = "/apply";

const HUBSPOT_PORTAL_ID = "242249646";
const HUBSPOT_FORM_ID = "fa0ae292-5a40-456b-9fda-506cf235517f";
const HUBSPOT_REGION = "na2";

// Blue glassy button styles for "Apply Today"
const glassyBlueButtonClass =
  "block w-full bg-blue-100/10 backdrop-blur-md border border-blue-800 shadow-lg shadow-blue-300/30 hover:bg-blue-500/30 hover:backdrop-blur-lg hover:shadow-xl hover:border-blue-600 text-blue-800 dark:text-blue-300 font-bold rounded-lg py-2 px-6 transition text-center text-lg cursor-pointer glassy-gold drop-shadow-[0_4px_20px_rgba(51,132,245,0.18)]";

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
        <h3 className="text-[2.1rem] md:text-[2.3rem] font-black golden mb-1 text-center tracking-tight" style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.1 }}>
          Contact Us:
        </h3>
        {NCU_PHONE}
        <div className="w-full h-2" /> {/* Space below phone */}
        <div id="hubspot-form-block" ref={formRef} className="w-full mb-3"></div>
      </div>
      {/* Apply Today button and text directly underneath, perfectly matching the contact card width */}
      <div className="w-full max-w-md flex flex-col items-center mt-7">
        <a
          href={APPLY_LINK}
          className={glassyBlueButtonClass}
          style={{
            boxShadow: "0 4px 20px 0 rgba(51,132,245,0.16)",
            border: "2px solid #2563eb",
            color: "#1e3a8a",
            background:
              "linear-gradient(120deg,rgba(51,132,245,0.34) 10%,rgba(91,167,253,0.18) 55%,rgba(132,180,241,0.22) 100%)",
            textShadow: "0 1px 4px rgba(51,100,190,0.08)",
          }}
        >
          Apply Today!
        </a>
        <div className="text-[9px] md:text-[10px] text-[#444] font-medium text-center mt-2 whitespace-nowrap overflow-hidden text-ellipsis max-w-xs">
          We're here to help—reach out and let's connect!
        </div>
      </div>
    </div>
  );
};

export default ContactTabBlock;
