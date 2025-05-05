// Creating a new client-only component for reCAPTCHA
'use client';
import { useState, useEffect } from 'react';

declare global {
  interface Window {
    grecaptcha?: any;
  }
}

interface RecaptchaWidgetProps {
  siteKey: string;
}

export default function RecaptchaWidget({ siteKey }: RecaptchaWidgetProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (!window.grecaptcha) {
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  }, []);

  if (!isClient) {
    return null;
  }

  return <div className="g-recaptcha" data-sitekey={siteKey}></div>;
} 