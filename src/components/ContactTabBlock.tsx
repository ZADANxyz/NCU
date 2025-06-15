
import React, { useRef, useEffect } from "react";

const NCU_PHONE = (
  <div className="mt-3 mb-1 flex items-center justify-center text-base font-bold text-[#b19528]">
    <svg width={18} height={18} className="inline-block mr-2" fill="none" stroke="currentColor">
      <path d="M6.85 2.15A6.59 6.59 0 0 1 11.7 7m-4.85-4.85L3.5 3.5a2 2 0 0 0-.5 2.43A16.11 16.11 0 0 0 14.07 15c.58.25 1.24 0 1.53-.55l1.2-2.14a1 1 0 0 0-.29-1.27l-2.39-1.91a1 1 0 0 0-1.11-.1l-2.2.91a13.01 13.01 0 0 1-4.26-4.26l.91-2.2a1 1 0 0 0-.1-1.11l-1.91-2.39a1 1 0 0 0-1.27-.29z" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <span>
      <a href="tel:+18883177463" className="hover:underline" style={{ color: "#b19528" }}>
        (888) 317-7463
      </a>
    </span>
  </div>
);

const APPLY_LINK = "https://ncu.education/apply";

const HUBSPOT_PORTAL_ID = "242249646";
const HUBSPOT_FORM_ID = "fa0ae292-5a40-456b-9fda-506cf235517f";
const HUBSPOT_REGION = "na2";

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
            target: "#hubspot-form-block"
          });
        }
      };
      document.body.appendChild(script);
    } else {
      window.hbspt.forms.create({
        region: HUBSPOT_REGION,
        portalId: HUBSPOT_PORTAL_ID,
        formId: HUBSPOT_FORM_ID,
        target: "#hubspot-form-block"
      });
    }
  }, []);

  return (
    <div className="glass glossy rounded-xl border-2 border-gold shadow-lg px-4 md:px-6 py-6 md:py-8 w-full max-w-md bg-white/90 dark:bg-[#232232]/80">
      <h3 className="text-xl md:text-2xl font-bold golden mb-2 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
        Contact Us
      </h3>
      {NCU_PHONE}
      <div id="hubspot-form-block" ref={formRef} className="w-full mb-3"></div>
      <a
        href={APPLY_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-[#B19528] hover:bg-[#947f23] text-white font-bold rounded-md py-2 px-6 mt-2 shadow-gold transition text-center text-lg"
      >
        Apply Now
      </a>
      <div className="text-xs text-[#444] mt-4 leading-snug font-medium text-center">
        We’re here to answer your questions. Reach out today and let’s connect!
      </div>
    </div>
  );
};

export default ContactTabBlock;
