
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

// Shared glassy button base
const glassyButtonBase =
  "block w-full font-bold py-2 px-6 transition text-center text-lg cursor-pointer relative overflow-hidden group rounded-[0.38rem] font-roboto";

// Gold styling for dark mode
const glassyGoldButtonClassDark =
  "glassy-gold text-gold dark:text-gold bg-[#b19528]/10 border-2 border-gold !font-bold !text-[1.55rem] min-h-[3.7rem] flex items-center justify-center gap-3 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gold hover:bg-gradient-to-r hover:from-yellow-300/30 hover:to-yellow-200/40 hover:text-gold active:text-yellow-500";

// Blue styling for light mode
const glassyBlueButtonClassLight =
  "glassy-gold text-blue-800 dark:text-gold bg-blue-100/10 border-2 border-blue-700 !font-bold !text-[1.55rem] min-h-[3.7rem] flex items-center justify-center gap-3 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 dark:focus-visible:ring-gold hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-300 hover:text-blue-800 active:text-blue-900";

// Inline styles for hovered effects
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
const goldGlassHoverStyleDark = {
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

const APPLY_LINK = "/apply";

const HUBSPOT_PORTAL_ID = "242249646";
const HUBSPOT_FORM_ID = "fa0ae292-5a40-456b-9fda-506cf235517f";
const HUBSPOT_REGION = "na2";

const ContactTabBlock = () => {
  const formRef = useRef<HTMLDivElement>(null);
  // Dark mode detection
  const [isDark, setIsDark] = React.useState(false);
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    const handler = () => setIsDark(document.documentElement.classList.contains("dark"));
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

  useEffect(() => {
    // Extra step: Iframed HubSpot form cannot receive Tailwind from parent, so we apply some aggressive style overrides:
    if (!formRef.current) return;
    // Use mutation observer in case HubSpot reloads the form
    const applyForceDarkStyles = () => {
      // Try to grab iframe (Hubspot v2 embeds use shadow DOM, might take time)
      const frame = formRef.current!.querySelector("iframe");
      if (frame && isDark) {
        try {
          const doc = (frame as HTMLIFrameElement).contentDocument;
          if (doc) {
            // For normal embeds, directly set style
            doc.body.style.background = "transparent";
            doc.body.style.color = "#fff";
            Array.from(doc.querySelectorAll("*")).forEach((el) => {
              (el as HTMLElement).style.color = "#fff";
              (el as HTMLElement).style.background = "transparent";
              // Also change input text
              if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
                el.style.color = "#fff";
                el.style.background = "#232232";
                el.style.borderColor = "#B19528";
              }
              // Buttons get gold bg
              if (el instanceof HTMLButtonElement) {
                el.style.background =
                  "linear-gradient(120deg,rgba(177,149,40,0.58) 0%,rgba(230,215,169,0.78) 46%,rgba(217,194,117,0.84) 100%)";
                el.style.color = "#181818";
                el.style.borderColor = "#B19528";
              }
              // Links
              if (el instanceof HTMLAnchorElement) {
                el.style.color = "#fff";
              }
            });
          }
        } catch (_e) {
          // Can't access iframe due to CORS, fallback below (won't help for iframe)
        }
      }
    };
    const obs = new MutationObserver(() => applyForceDarkStyles());
    obs.observe(formRef.current, { childList: true, subtree: true });
    setTimeout(applyForceDarkStyles, 900);
    return () => obs.disconnect();
  }, [isDark]);

  // Choose correct button styles based on dark mode
  const buttonClassName =
    glassyButtonBase +
    " " +
    (isDark ? glassyGoldButtonClassDark : glassyBlueButtonClassLight);

  const buttonStyle = isDark ? goldGlassHoverStyleDark : blueGlassGlossHoverStyle;

  return (
    <div className="w-full flex flex-col items-center font-roboto">
      <div className="glass glossy rounded-[0.38rem] border-2 border-gold shadow-lg px-4 md:px-6 py-7 md:py-8 w-full max-w-md bg-white/95 dark:bg-[#232232]/92 mx-auto font-roboto">
        <h3
          className="text-[2.25rem] md:text-[2.56rem] font-bold mb-4 text-center tracking-tight font-roboto transition-colors"
          style={{
            color: isDark ? "#fff" : "#1a1a1a",
            lineHeight: 1.09,
            fontFamily: "Roboto, Arial, sans-serif",
            fontWeight: 700,
            letterSpacing: 0.1,
          }}
        >
          <span className="dark:text-white text-[#1a1a1a] transition-colors">Contact Us:</span>
        </h3>
        <div className="pb-2" />
        {/* Phone Number Button */}
        <div className="flex justify-center mb-7">
          <a
            href="tel:+16159482212"
            className={buttonClassName}
            style={buttonStyle}
          >
            <span className="inline-flex items-center justify-center">
              <Phone
                size={40}
                className={"inline-block mr-2 " + (isDark ? "text-gold" : "text-blue-700") + " group-hover:text-gold transition-colors"}
                aria-hidden="true"
              />
              <span
                className="font-bold dark:text-gold"
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
            {/* Gold or blue glass gloss */}
            <span
              className="absolute inset-0 opacity-0 transition-all duration-200 pointer-events-none group-hover:opacity-100"
              aria-hidden="true"
              style={
                isDark
                  ? {
                      zIndex: 3,
                      background:
                        "linear-gradient(110deg,rgba(177,149,40,0.27) 0%,rgba(228,214,128,0.45) 60%,rgba(178,160,66,0.18) 100%)",
                      boxShadow: "0 8px 30px 0 rgba(177,149,40,0.19)",
                      borderRadius: "inherit",
                    }
                  : {
                      zIndex: 3,
                      background:
                        "linear-gradient(110deg,rgba(51,128,255,0.45) 0%,rgba(41,100,210,0.67) 60%,rgba(27,55,130,0.18) 100%)",
                      boxShadow: "0 8px 30px 0 rgba(51,132,245,0.17)",
                      borderRadius: "inherit",
                    }
              }
            ></span>
          </a>
        </div>
        {/* HubSpot Form */}
        <div
          id="hubspot-form-block"
          ref={formRef}
          className="w-full mb-2 dark:text-white dark:[&_input]:text-white dark:[&_label]:text-white dark:[&_button]:text-[#232232] dark:[&_button]:bg-gold dark:[&_button]:border-gold dark:[&_a]:text-white"
        ></div>
      </div>
      <div className="w-full max-w-md flex flex-col items-center mt-7 rounded-[0.38rem] font-roboto">
        <a
          href={APPLY_LINK}
          className={
            glassyButtonBase +
            " " +
            (isDark
              ? "glassy-gold text-gold bg-[#b19528]/10 border-2 border-gold dark:!text-gold"
              : "glassy-gold text-blue-800 bg-blue-100/10 border-2 border-blue-700")
          }
          style={buttonStyle}
        >
          <span className="relative z-20 dark:text-gold" style={{ position: "relative" }}>
            Apply Today!
          </span>
          <span
            className="absolute inset-0 opacity-0 transition-all duration-200 pointer-events-none group-hover:opacity-100"
            aria-hidden="true"
            style={
              isDark
                ? {
                    zIndex: 3,
                    background:
                      "linear-gradient(110deg,rgba(177,149,40,0.27) 0%,rgba(228,214,128,0.45) 60%,rgba(178,160,66,0.18) 100%)",
                    boxShadow: "0 8px 30px 0 rgba(177,149,40,0.19)",
                    borderRadius: "inherit",
                  }
                : {
                    zIndex: 3,
                    background:
                      "linear-gradient(110deg,rgba(51,128,255,0.45) 0%,rgba(41,100,210,0.67) 60%,rgba(27,55,130,0.18) 100%)",
                    boxShadow: "0 8px 30px 0 rgba(51,132,245,0.17)",
                    borderRadius: "inherit",
                  }
            }
          ></span>
        </a>
        <div className="text-[12.5px] md:text-[13.5px] font-medium text-center mt-3 whitespace-nowrap overflow-hidden text-ellipsis max-w-xs font-roboto transition-colors"
          style={{
            color: isDark ? "#fff" : "#444"
          }}
        >
          We&apos;re here to help—reach out and let&apos;s connect!
        </div>
      </div>
      {/* Extra CSS for Hubspot embed in dark mode */}
      <style>
        {`
        .dark #hubspot-form-block * {
          color: #fff !important;
          background: transparent !important;
          border-color: #B19528 !important;
        }
        .dark #hubspot-form-block input,
        .dark #hubspot-form-block textarea {
          color: #fff !important;
          background: #232232 !important;
          border-color: #B19528 !important;
        }
        .dark #hubspot-form-block button {
          background: linear-gradient(120deg,rgba(177,149,40,0.59) 0%,rgba(230,215,169,0.78) 46%,rgba(217,194,117,0.82) 100%) !important;
          color: #181818 !important;
          border-color: #B19528 !important;
        }
        .dark #hubspot-form-block a {
          color: #fff !important;
        }
        `}
      </style>
    </div>
  );
};

export default ContactTabBlock;

