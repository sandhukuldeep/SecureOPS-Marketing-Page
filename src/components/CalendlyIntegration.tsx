import React, { useEffect } from 'react';

declare global {
  interface Window {
    Calendly: any;
  }
}

// Initialize Calendly scripts
const initCalendly = () => {
  // Check if Calendly script is already loaded
  if (window.Calendly) return;

  // Load Calendly CSS
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://assets.calendly.com/assets/external/widget.css';
  document.head.appendChild(link);

  // Load Calendly JS
  const script = document.createElement('script');
  script.src = 'https://assets.calendly.com/assets/external/widget.js';
  script.async = true;
  document.body.appendChild(script);
};

// Open Calendly popup
export const openCalendlyPopup = () => {
  if (window.Calendly) {
    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/mphamilton/30min'
    });
  }
};

const CalendlyIntegration: React.FC = () => {
  useEffect(() => {
    initCalendly();
    
    // No cleanup needed as we want Calendly to be available throughout the app
  }, []);

  return null; // This component doesn't render anything visible
};

export default CalendlyIntegration;
