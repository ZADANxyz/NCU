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

const glassyButtonBase =
  "block w-full font-bold py-2 px-6 transition text-center text-lg cursor-pointer relative shadow-lg overflow-hidden group rounded-[0.38rem] font-roboto min-h-[3.7rem] flex items-center justify-center gap-3";

const blueButtonStatic =
  "text-blue-800 dark:text-gold bg-blue-100/10 dark:bg-[#b19528]/10 border-2 border-blue-700 dark:border-gold";
const goldButtonStatic =
  "text-gold bg-gold/10 border-2 border-gold"; // gold text and light gold bg/border

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

const goldGlossySpan = {
  zIndex: 3,
  background:
    "linear-gradient(110deg,rgba(177,149,40,0.27) 0%,rgba(228,214,128,0.45) 60%,rgba(178,160,66,0.18) 100%)",
  boxShadow: "0 8px 30px 0 rgba(177,149,40,0.19)",
  borderRadius: "inherit",
};

const blueGlossySpan = {
  zIndex: 3,
  background:
    "linear-gradient(110deg,rgba(51,128,255,0.45) 0%,rgba(41,100,210,0.67) 60%,rgba(27,55,130,0.18) 100%)",
  boxShadow: "0 8px 30px 0 rgba(51,132,245,0.17)",
  borderRadius: "inherit",
};

const APPLY_LINK = "/apply";

const HUBSPOT_PORTAL_ID = "242249646";
const HUBSPOT_FORM_ID = "fa0ae292-5a40-456b-9fda-506cf235517f";
const HUBSPOT_REGION = "na2";

const ContactTabBlock = () => {
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
        #hubspot-form-block * {
          color: #fff !important;
        }
        #hubspot-form-block label, #hubspot-form-block .hs-form-required {
          color: #fff !important;
        }
        #hubspot-form-block input, #hubspot-form-block textarea, #hubspot-form-block select {
          background: #232232 !important;
          color: #fff !important;
        }
        #hubspot-form-block .hs-button.primary, #hubspot-form-block input[type=submit] {
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
    <div className="w-full flex flex-col items-center font-roboto">
      <div className="glass glossy rounded-[0.38rem] border-2 border-gold shadow-lg px-4 md:px-6 py-7 md:py-8 w-full max-w-md bg-white/95 dark:bg-[#232232]/92 mx-auto font-roboto">
        <h3
          className="text-[2.25rem] md:text-[2.56rem] font-bold mb-4 text-center tracking-tight font-roboto transition-colors text-[#1a1a1a] dark:text-white"
          style={{
            lineHeight: 1.09,
            fontFamily: "Roboto, Arial, sans-serif",
            fontWeight: 700,
            letterSpacing: 0.1,
            transition: "color 0.2s"
          }}
        >
          <span className="transition-colors">Contact Us:</span>
        </h3>
        <div className="pb-2" />
        {/* Phone Number - now always gold-based in dark mode */}
        <div className="flex justify-center mb-7">
          <a
            href="tel:+16159482212"
            className={
              glassyButtonBase +
              (
                isDark
                  ? " text-gold bg-gold/10 border-2 border-gold"
                  : " text-blue-800 bg-blue-100/10 border-2 border-blue-700"
              ) +
              " !font-bold !text-[1.55rem] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 dark:focus-visible:ring-gold active:text-blue-900"
            }
            style={isDark ? goldButtonHover : blueButtonHover}
          >
            <span className="inline-flex items-center justify-center">
              <Phone
                size={40}
                className={
                  "inline-block mr-2 " +
                  (isDark ? "text-gold" : "text-blue-700") +
                  " group-hover:text-gold"
                }
                aria-hidden="true"
              />
              <span
                className="font-bold"
                style={{
                  fontSize: "1.41rem",
                  color: isDark ? "#B19528" : "#1e3a8a",
                  display: "inline-block",
                  verticalAlign: "middle",
                  letterSpacing: "0.01em",
                }}
              >
                (615) 948-2212
              </span>
            </span>
            <span
              className="absolute inset-0 opacity-0 transition-all duration-200 pointer-events-none group-hover:opacity-100"
              aria-hidden="true"
              style={isDark ? goldGlossySpan : blueGlossySpan}
            ></span>
          </a>
        </div>
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
      </div>
      <div className="w-full max-w-md flex flex-col items-center mt-7 rounded-[0.38rem] font-roboto">
        <a
          href={APPLY_LINK}
          className={
            glassyButtonBase +
            (isDark
              ? " text-gold bg-gold/10 border-2 border-gold"
              : " text-blue-800 bg-blue-100/10 border-2 border-blue-700")
          }
          style={isDark ? goldButtonHover : blueButtonHover}
        >
          <span className="relative z-20" style={{ position: "relative", color: isDark ? "#B19528" : undefined }}>
            Apply Today!
          </span>
          <span
            className="absolute inset-0 opacity-0 transition-all duration-200 pointer-events-none group-hover:opacity-100"
            aria-hidden="true"
            style={isDark ? goldGlossySpan : blueGlossySpan}
          ></span>
        </a>
        <div
          className="text-[12.5px] md:text-[13.5px] font-medium text-center mt-3 whitespace-nowrap overflow-hidden text-ellipsis max-w-xs font-roboto transition-colors text-[#444] dark:text-white"
          style={{
            transition: "color 0.2s"
          }}
        >
          We&apos;re here to help—reach out and let&apos;s connect!
        </div>
      </div>
    </div>
  );
};

export default ContactTabBlock;
