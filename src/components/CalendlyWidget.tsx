import React, { useEffect } from 'react';

declare global {
  interface Window {
    Calendly: any;
  }
}

const CalendlyWidget: React.FC = () => {
  useEffect(() => {
    // Load Calendly CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    document.head.appendChild(link);

    // Load Calendly JS
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => {
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url: 'https://calendly.com/d/cscf-yp5-k6t',
          text: 'Schedule time with me',
          color: '#0069ff',
          textColor: '#ffffff'
        });
      }
    };
    document.body.appendChild(script);

    // Cleanup function to remove the script and link when component unmounts
    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  // This component doesn't render anything visible itself
  return null;
};

export default CalendlyWidget;