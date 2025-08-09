import React, { useEffect } from 'react';

const FAVICON_URL = "/lovable-uploads/ncu-official-seal.png";

const DynamicFavicon = () => {
  useEffect(() => {
    // Remove any existing favicon links to prevent conflicts
    const existingLinks = document.querySelectorAll<HTMLLinkElement>("link[rel*='icon']");
    existingLinks.forEach(link => link.parentNode?.removeChild(link));

    // Create a new link element for the favicon
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png';
    link.href = FAVICON_URL;
    
    // Append the new link to the head of the document
    document.head.appendChild(link);

  }, []); // No dependency on theme

  return null; // This component doesn't render anything
};

export default DynamicFavicon;