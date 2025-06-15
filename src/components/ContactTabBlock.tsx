
import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

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

const NCU_PHONE_NUMBER = "(615) 948-2212";
const APPLY_LINK = "/apply";
const HUBSPOT_PORTAL_ID = "242249646";
const HUBSPOT_FORM_ID = "fa0ae292-5a40-456b-9fda-506cf235517f";
const HUBSPOT_REGION = "na2";

// Glassy blue effect for Apply button hover
const glassyBlue =
  "linear-gradient(120deg,rgba(51,132,245,0.34) 18%,rgba(91,167,253,0.18) 55%,rgba(132,180,241,0.22) 100%)";

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
      {/* Contact title and phone section */}
      <div className="w-full max-w-md mb-2">
        <div
          className="rounded-t-xl glass glossy flex flex-col items-center px-5 py-5 border-2 border-gold border-b-0 shadow-md"
          style={{
            background: "linear-gradient(112deg,rgba(255,229,87,0.14) 0%,rgba(255,255,255,0.26) 100%)",
          }}
        >
          <h3 className="text-[2.23rem] md:text-[2.38rem] font-black mb-2 text-center tracking-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              lineHeight: 1.08,
              color: "#000",
              letterSpacing: "-0.02em"
            }}
          >
            Contact Us:
          </h3>
          <div
            className={cn(
              "flex items-center justify-center font-extrabold px-3 py-2 rounded-lg shadow-lg backdrop-blur-md border border-blue-400/60 dark:border-blue-300/50 glass glossy text-[1.65rem] md:text-[1.9rem] mb-2",
              "mt-2 mb-3"
            )}
            style={{
              color: "#003370",
              background: "linear-gradient(115deg,rgba(81,128,255,0.23) 0%,rgba(41,100,210,0.25) 100%)",
              boxShadow: "0 2px 10px 0 rgba(51,120,210,0.10)",
              textShadow: "0 1px 7px rgba(27,45,95,0.07)",
              letterSpacing: "0.5px",
            }}
          >
            <svg width={25} height={25} className="inline-block mr-2 text-blue-400" fill="none" stroke="currentColor">
              <path d="M6.85 2.15A6.59 6.59 0 0 1 11.7 7m-4.85-4.85L3.5 3.5a2 2 0 0 0-.5 2.43A16.11 16.11 0 0 0 14.07 15c.58.25 1.24 0 1.53-.55l1.2-2.14a1 1 0 0 0-.29-1.27l-2.39-1.91a1 1 0 0 0-1.11-.1l-2.2.91a13.01 13.01 0 0 1-4.26-4.26l.91-2.2a1 1 0 0 0-.1-1.11l-1.91-2.39a1 1 0 0 0-1.27-.29z" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>
              <a href="tel:+16159482212" className="hover:underline"
                style={{
                  color: "#003370",
                  fontWeight: 800,
                  fontSize: "1.15em",
                  letterSpacing: "0.4px"
                }}
              >
                {NCU_PHONE_NUMBER}
              </a>
            </span>
          </div>
        </div>
      </div>
      {/* The contact form itself (middle section) */}
      <div className="w-full max-w-md bg-white/80 dark:bg-[#232232]/85 border-x-2 border-gold border-b-0 px-4 py-7 md:px-7 rounded-none shadow-lg" style={{ marginBottom: 0 }}>
        <div id="hubspot-form-block" ref={formRef} className="w-full mb-4"></div>
      </div>
      {/* Apply Today button (bottom section) */}
      <div className="w-full max-w-md rounded-b-xl border-2 border-gold border-t-0 px-4 md:px-7 py-6 bg-transparent flex flex-col items-center shadow-lg" style={{
        background: "linear-gradient(115deg,rgba(81,128,255,0.14) 0%,rgba(41,100,210,0.10) 100%)"
      }}>
        <a
          href={APPLY_LINK}
          className={cn(
            "block w-full text-lg font-bold text-blue-900 dark:text-blue-300 rounded-lg py-2 px-6 text-center shadow-md outline-none transition-all duration-200 border border-blue-800 cursor-pointer",
            "bg-blue-100/30 hover:shadow-xl glass glossy",
          )}
          style={{
            background: glassyBlue,
            border: "2px solid #2563eb",
            color: "#003370",
            boxShadow: "0 4px 20px 0 rgba(51,132,245,0.14)",
            textShadow: "0 1px 7px rgba(51,100,190,0.12)",
          }}
          onMouseOver={e => {
            (e.currentTarget.style.background =
              "linear-gradient(120deg,rgba(51,132,245,0.44) 18%,rgba(91,167,253,0.25) 55%,rgba(132,180,241,0.34) 100%)");
            (e.currentTarget.style.color = "#fff");
          }}
          onMouseOut={e => {
            (e.currentTarget.style.background = glassyBlue);
            (e.currentTarget.style.color = "#003370");
          }}
        >
          Apply Today!
        </a>
        <div className="text-[10px] text-[#444] font-medium text-center mt-2 whitespace-nowrap overflow-hidden text-ellipsis max-w-xs">
          We're here to help—reach out and let's connect!
        </div>
      </div>
    </div>
  );
};

export default ContactTabBlock;
