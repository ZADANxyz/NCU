import { useEffect, useState } from 'react';

const SCRIPT_URL = 'https://js-na2.hsforms.net/forms/embed/v2.js';

// Keep track of script status globally to prevent multiple loads
let scriptLoading = false;
let scriptLoaded = false;
const subscribers: ((loaded: boolean) => void)[] = [];

const notifySubscribers = () => {
  subscribers.forEach(callback => callback(scriptLoaded));
};

const loadScript = () => {
  if (scriptLoaded || scriptLoading) return;

  scriptLoading = true;

  const script = document.createElement('script');
  script.src = SCRIPT_URL;
  script.async = true;
  script.defer = true;

  script.onload = () => {
    scriptLoaded = true;
    scriptLoading = false;
    notifySubscribers();
  };

  script.onerror = () => {
    scriptLoading = false;
    console.error("Failed to load HubSpot script.");
  };

  document.body.appendChild(script);
};

export const useHubspotForm = () => {
  const [loaded, setLoaded] = useState(scriptLoaded);

  useEffect(() => {
    if (scriptLoaded) {
      setLoaded(true);
      return;
    }

    subscribers.push(setLoaded);
    loadScript();

    return () => {
      const index = subscribers.indexOf(setLoaded);
      if (index > -1) {
        subscribers.splice(index, 1);
      }
    };
  }, []);

  return loaded;
};