import React, { useRef, useEffect } from "react";
import ContactHubspotForm from "./ContactHubspotForm";
import ContactPhoneButton from "./ContactPhoneButton";

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (args: Record<string, any>) => void;
      };
    };
  }
}

const glassyButtonBase =
  "block w-full font-bold py-2 px-6 transition text-center text-lg cursor-pointer relative shadow-lg overflow-hidden group rounded-[0.38rem] font-roboto min-h-[3.7rem] flex items-center justify-center gap-3";

const blueButtonHover = {
  boxShadow: "0 4px 20px 0 rgba(51,132,245,0.18)",
  border: "2px solid #2563eb",
  color: "#1e3a8a",
  background:
    "linear-gradient(120deg,rgba(51,132,245,0.33) 0%,rgba(91,167,253,0.38) 46%,rgba(132,180,241,0.45) 100%)",
  textShadow: "0 1px 4px rgba(51,100,190,0.09)",
  zIndex: 1,
  borderRadius: "0.38rem",
  fontFamily: "Roboto, Arial, sans-serif"
};

const goldButtonHover = {
  boxShadow: "0 4px 20px 0 rgba(177,149,40,0.18)",
  border: "2px solid #B19528",
  color: "#B19528",
  background:
    "linear-gradient(120deg,rgba(177,149,40,0.38) 0%,rgba(230,215,169,0.48) 46%,rgba(217,194,117,0.44) 100%)",
  textShadow: "0 1px 4px rgba(200,180,80,0.13)",
  zIndex: 1,
  borderRadius: "0.38rem",
  fontFamily: "Roboto, Arial, sans-serif"
};

const HUBSPOT_PORTAL_ID = "242249646";
const HUBSPOT_FORM_ID = "fa0ae292-5a40-456b-9fda-506cf235517f";
const HUBSPOT_REGION = "na2";

const ContactAboutForm = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const [isDark, setIsDark] = React.useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    const handler = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);

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
            target: "#hubspot-form-block-about",
          });
        }
      };
      document.body.appendChild(script);
    } else if (window.hbspt) {
      window.hbspt.forms.create({
        region: HUBSPOT_REGION,
        portalId: HUBSPOT_PORTAL_ID,
        formId: HUBSPOT_FORM_ID,
        target: "#hubspot-form-block-about",
      });
    }
  }, []);

  return (
    <div className="w-full">
      {/* Contact Us Title */}
      <h3 className="text-4xl md:text-5xl font-roboto font-normal text-[#181818] dark:text-white mb-8 tracking-tight text-center">
        Contact Us:
      </h3>
      
      {/* Contact Form Box */}
      <div className="glass glossy rounded-[0.38rem] border-2 border-gold shadow-lg px-4 md:px-6 py-7 md:py-8 w-full bg-white/95 dark:bg-[#232232]/92 font-roboto mb-6">
        <ContactHubspotForm isDark={isDark} />
      </div>
      
      {/* Phone Button */}
      <div className="w-full">
        <ContactPhoneButton
          isDark={isDark}
          glassyButtonBase={glassyButtonBase}
          goldButtonHover={goldButtonHover}
          blueButtonHover={blueButtonHover}
        />
        <p className="text-center text-sm text-gray-600 dark:text-gray-300 mt-2 font-roboto">
          We're here to help, reach out and let's connect!
        </p>
      </div>
    </div>
  );
};

export default ContactAboutForm;