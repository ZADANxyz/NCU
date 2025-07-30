
import React, { useRef, useEffect } from "react";

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

interface ContactHubspotFormProps {
  isDark: boolean;
}

const ContactHubspotForm: React.FC<ContactHubspotFormProps> = ({ isDark }) => {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

  // Inject style to force HubSpot form dark mode text to white
  useEffect(() => {
    if (!isDark) return;
    let styleTag = document.getElementById("hubspot-darkmode-style");
    if (!styleTag) {
      styleTag = document.createElement("style");
      styleTag.id = "hubspot-darkmode-style";
      styleTag.innerHTML = `
        #hubspot-form-block label,
        #hubspot-form-block .hs-form-required,
        #hubspot-form-block .hs-form-field label,
        #hubspot-form-block .hs-richtext,
        #hubspot-form-block .hs-file-description {
          color: #fff !important;
        }
        #hubspot-form-block input, 
        #hubspot-form-block textarea, 
        #hubspot-form-block select {
          background: rgba(35, 34, 50, 0.8) !important;
          color: #fff !important;
          border: 1px solid #666 !important;
        }
        #hubspot-form-block .hs-button.primary, 
        #hubspot-form-block input[type=submit] {
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
    <div
      id="hubspot-form-block"
      ref={formRef}
      className={
        "w-full mb-2 transition-colors" +
        (isDark
          ? " dark:text-white dark:[&_input]:text-white dark:[&_label]:text-white dark:[&_button]:text-gold"
          : " text-black")
      }
    ></div>
  );
};

export default ContactHubspotForm;
