import React, { useEffect } from "react";
import { useHubspotForm } from "@/hooks/useHubspotForm";

interface ContactHubspotFormProps {
  isDark: boolean;
  portalId: string;
  formId: string;
  region: string;
  targetId: string;
}

const ContactHubspotForm: React.FC<ContactHubspotFormProps> = ({ isDark, portalId, formId, region, targetId }) => {
  const hubspotLoaded = useHubspotForm();

  useEffect(() => {
    if (hubspotLoaded && window.hbspt) {
      const container = document.querySelector(`#${targetId}`);
      if (container) {
        container.innerHTML = ''; // Clear previous form if it exists
      }
      
      window.hbspt.forms.create({
        region,
        portalId,
        formId,
        target: `#${targetId}`,
      });
    }
  }, [hubspotLoaded, portalId, formId, region, targetId]);

  // Inject style to force HubSpot form dark mode text to white
  useEffect(() => {
    const styleId = 'hubspot-darkmode-style';
    if (isDark) {
      let styleTag = document.getElementById(styleId);
      if (!styleTag) {
        styleTag = document.createElement("style");
        styleTag.id = styleId;
        styleTag.innerHTML = `
          .hubspot-form-dark-mode .hs-form-field label,
          .hubspot-form-dark-mode .hs-form-required,
          .hubspot-form-dark-mode .hs-richtext,
          .hubspot-form-dark-mode .hs-error-msg {
            color: #fff !important;
          }
          .hubspot-form-dark-mode input, 
          .hubspot-form-dark-mode textarea, 
          .hubspot-form-dark-mode select {
            background: rgba(35, 34, 50, 0.8) !important;
            color: #fff !important;
            border: 1px solid #666 !important;
          }
          .hubspot-form-dark-mode .hs-button.primary, 
          .hubspot-form-dark-mode input[type=submit] {
            background: #b19528 !important;
            border-color: #b19528 !important;
            color: #232232 !important;
          }
        `;
        document.head.appendChild(styleTag);
      }
    }
  }, [isDark]);

  return (
    <div
      id={targetId}
      className={
        "w-full mb-2 transition-colors" +
        (isDark ? " hubspot-form-dark-mode" : "")
      }
    ></div>
  );
};

export default ContactHubspotForm;