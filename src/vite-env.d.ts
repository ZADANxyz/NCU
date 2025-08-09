/// <reference types="vite/client" />

interface Window {
  hbspt?: {
    forms: {
      create: (options: {
        region: string;
        portalId: string;
        formId: string;
        target: string;
        [key: string]: any;
      }) => void;
    };
  };
}