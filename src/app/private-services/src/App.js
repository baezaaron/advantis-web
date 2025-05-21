import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import PreventativeCare from './components/PreventativeCare';
import Testimonials from './components/Testimonials';
import RPMDevices from './components/RPMDevices';
import FAQ from './components/FAQ';
import LeadCapture from './components/LeadCapture';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is the RPM device easy to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Our RPM device is designed with user-friendliness in mind. It features a simple interface and clear instructions. Most patients can start using it within minutes of unboxing."
      }
    },
    {
      "@type": "Question",
      "name": "Can I cancel my subscription anytime?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We believe in flexibility and transparency. You can cancel your subscription at any time without any hidden fees or penalties."
      }
    },
    {
      "@type": "Question",
      "name": "Is my health data secure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we take data security very seriously. All health data is encrypted, stored securely, and protected in compliance with HIPAA regulations. We never share your data with third parties without your explicit consent."
      }
    }
  ]
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Federal RPM",
  "url": "https://yourbrand.com/rpm",
  "logo": "https://yourbrand.com/logo.png",
  "contactPoint": [{
    "@type": "ContactPoint",
    "telephone": "+1-800-555-1234",
    "contactType": "customer service"
  }]
};

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Affordable Remote Patient Monitoring for Seniors & Chronic Care | Your Brand</title>
        <meta name="description" content="Track your health at home with 24/7 remote patient monitoring. Easy setup, real nurses, and peace of mind for chronic conditions and seniors." />
        <meta name="keywords" content="remote patient monitoring, RPM for seniors, at-home health tracking, chronic care, affordable RPM, diabetes monitoring, hypertension monitoring, remote health monitoring for elderly, best RPM service, HIPAA compliant RPM, RPM for chronic conditions" />
        <link rel="canonical" href="https://yourbrand.com/rpm" />
        {/* FAQ Schema */}
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        {/* Organization Schema */}
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      </Helmet>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <Hero />
        
        {/* How It Works Section */}
        <HowItWorks />
        
        {/* Benefits Section */}
        <Benefits />

        {/* RPM Devices Section */}
        <RPMDevices />

        {/* Preventative Care Section */}
        <PreventativeCare />
        
        {/* Testimonials Section (gray) */}
        <div className="bg-gray-50">
          <Testimonials />
        </div>
        
        {/* FAQ Section (white) */}
        <div className="bg-white">
          <FAQ />
        </div>
        
        {/* Lead Capture Form (gray) */}
        <div className="bg-gray-50">
          <LeadCapture />
        </div>
      </div>
    </HelmetProvider>
  );
}

export default App; 