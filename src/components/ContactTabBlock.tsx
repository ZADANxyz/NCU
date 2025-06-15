
import React, { useRef, useEffect } from "react";
import { Phone } from "lucide-react";

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (args: Record<string, any>) => void;
      };
    };
  }
}

const glassyBlueButtonClass =
  "block w-full font-bold py-2 px-6 transition text-center text-lg cursor-pointer glassy-gold relative text-blue-800 dark:text-blue-300 bg-blue-100/10 backdrop-blur-md shadow-lg overflow-hidden group rounded-[0.38rem] font-roboto";
const blueGlassGlossHoverStyle = {
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

const NCU_PHONE = (
  <a
    href="tel:+16159482212"
    className={
      glassyBlueButtonClass +
      " flex items-center justify-center !font-bold !text-[1.32rem] min-h-[3.4rem] gap-3 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-300 hover:text-blue-800 active:text-blue-900 border-2 border-blue-700"
    }
    style={{
      ...blueGlassGlossHoverStyle,
      position: "relative",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <span className="inline-flex items-center justify-center">
      <Phone size={36} className="inline-block mr-2 text-blue-700 group-hover:text-blue-800 transition-colors" aria-hidden="true" />
      <span className="font-bold" style={{ fontSize: "1.32rem", color: "#1e3a8a", display: "inline-block", verticalAlign: "middle" }}>
        (615) 948-2212
      </span>
    </span>
    <span
      className="absolute inset-0 opacity-0 transition-all duration-200 pointer-events-none group-hover:opacity-100"
      aria-hidden="true"
      style={{
        zIndex: 3,
        background:
          "linear-gradient(110deg,rgba(51,128,255,0.45) 0%,rgba(41,100,210,0.67) 60%,rgba(27,55,130,0.18) 100%)",
        boxShadow: "0 8px 30px 0 rgba(51,132,245,0.17)",
        borderRadius: "inherit",
      }}
    ></span>
  </a>
);

const APPLY_LINK = "/apply";

const HUBSPOT_PORTAL_ID = "242249646";
const HUBSPOT_FORM_ID = "fa0ae292-5a40-456b-9fda-506cf235517f";
const HUBSPOT_REGION = "na2";

const ContactTabBlock = () => {
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

  return (
    <div className="w-full flex flex-col items-center font-roboto">
      <div className="glass glossy rounded-[0.38rem] border-2 border-gold shadow-lg px-4 md:px-6 py-7 md:py-8 w-full max-w-md bg-white/95 dark:bg-[#232232]/92 mx-auto font-roboto">
        <h3 className="text-[2.09rem] md:text-[2.35rem] font-bold mb-3.5 text-center tracking-tight font-roboto" style={{ color: "#1a1a1a", lineHeight: 1.09, fontFamily: "Roboto, Arial, sans-serif" }}>
          Contact Us:
        </h3>
        <div className="pb-2">{NCU_PHONE}</div>
        <div className="w-full h-2" />
        <div id="hubspot-form-block" ref={formRef} className="w-full mb-2"></div>
      </div>
      <div className="w-full max-w-md flex flex-col items-center mt-7 rounded-[0.38rem] font-roboto">
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
          <span
            className="absolute inset-0 opacity-0 transition-all duration-200 pointer-events-none group-hover:opacity-100"
            aria-hidden="true"
            style={{
              zIndex: 3,
              background:
                "linear-gradient(110deg,rgba(51,128,255,0.45) 0%,rgba(41,100,210,0.67) 60%,rgba(27,55,130,0.18) 100%)",
              boxShadow: "0 8px 30px 0 rgba(51,132,245,0.17)",
              borderRadius: "inherit",
            }}
          ></span>
        </a>
        <div className="text-[10px] md:text-[11px] text-[#444] font-medium text-center mt-2 whitespace-nowrap overflow-hidden text-ellipsis max-w-xs font-roboto">
          We're here to help—reach out and let's connect!
        </div>
      </div>
    </div>
  );
};

export default ContactTabBlock;
