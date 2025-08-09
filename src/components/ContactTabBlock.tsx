import React, { useEffect } from "react";
import { Phone } from "lucide-react";
import ContactPhoneButton from "./ContactPhoneButton";
import ContactHubspotForm from "./ContactHubspotForm";
import ContactApplyBlock from "./ContactApplyBlock";

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
const TARGET_ID = "hubspot-form-tab-block";

const ContactTabBlock = () => {
  const [isDark, setIsDark] = React.useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    const handler = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);

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
        <ContactPhoneButton
          isDark={isDark}
          glassyButtonBase={glassyButtonBase}
          goldButtonHover={goldButtonHover}
          blueButtonHover={blueButtonHover}
        />
        <ContactHubspotForm 
          isDark={isDark}
          portalId={HUBSPOT_PORTAL_ID}
          formId={HUBSPOT_FORM_ID}
          region={HUBSPOT_REGION}
          targetId={TARGET_ID}
        />
      </div>
      <ContactApplyBlock
        isDark={isDark}
        glassyButtonBase={glassyButtonBase}
        goldButtonHover={goldButtonHover}
        blueButtonHover={blueButtonHover}
      />
    </div>
  );
};

export default ContactTabBlock;