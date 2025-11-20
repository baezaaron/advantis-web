import { HeartPulseIcon, SupportIcon } from '@/components/icons';
import Button from '@/components/Button';
import FadeInSection from '@/components/FadeInSection';
import type { Metadata } from 'next';

// Inline shield icon for Preventative Care
function ShieldIcon({ className = 'h-8 w-8' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M12 2l8 4v6c0 5-3 9-8 11-5-2-8-6-8-11V6l8-4z" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: 'Our Services | Remote Patient Monitoring & Proactive Care | Advantis',
  description: 'Explore Advantis services: remote patient monitoring (RPM), advanced primary care, and preventative care. The best alternative to nursing homes and traditional care.',
  keywords: [
    'remote patient monitoring services',
    'RPM services',
    'alternatives to nursing homes',
    'proactive care',
    'senior care at home',
    'chronic care',
    'elderly health monitoring',
    'RPM as a service',
    'home health technology',
    'telehealth',
    'best RPM service',
    'HIPAA compliant RPM'
  ],
  openGraph: {
    title: 'Our Services | Remote Patient Monitoring & Proactive Care | Advantis',
    description: 'Explore Advantis services: remote patient monitoring (RPM), advanced primary care, and preventative care. The best alternative to nursing homes and traditional care.',
    url: 'https://advantis.care/services',
    siteName: 'Advantis',
    images: [
      {
        url: '/images/og-advantis.png',
        width: 1200,
        height: 630,
        alt: 'Advantis RPM Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Services | Remote Patient Monitoring & Proactive Care | Advantis',
    description: 'Explore Advantis services: remote patient monitoring (RPM), advanced primary care, and preventative care. The best alternative to nursing homes and traditional care.',
    images: ['/images/og-advantis.png'],
    site: '@advantis',
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary text-white py-20 md:py-28 page-header">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h1 className="page-title">Our Services</h1>
          <p className="page-subtitle">Explore our core services and specialities</p>
        </div>
      </section>
    
      <FadeInSection>
        <section className="pt-28 pb-12 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary text-center mb-12">
            Our Services & Specialities
          </h1>
          <div className="space-y-8 mt-12">
            {/* Remote Patient Monitoring */}
            <div id="remote-patient-monitoring" className="scroll-mt-20 bg-neutral-100 rounded-lg p-8 shadow flex items-center justify-between">
              <div className="max-w-xl">
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  Remote Patient Monitoring
                </h3>
                <p className="text-lg text-neutral-700">
                  24/7 monitoring of vital signs and health metrics from the comfort of the patient's home, with real-time alerts.
                </p>
              </div>
              <HeartPulseIcon className="h-16 w-16 text-accent" />
            </div>

            {/* Advanced Primary Care Management */}
            <div id="advanced-primary-care-management" className="scroll-mt-20 bg-neutral-100 rounded-lg p-8 shadow flex items-center justify-between">
              <div className="max-w-xl">
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  Advanced Primary Care Management
                </h3>
                <p className="text-lg text-neutral-700">
                  Proactive care coordination and personalized treatment plans to keep patients healthier longer.
                </p>
              </div>
              <SupportIcon className="h-16 w-16 text-accent" />
            </div>

            {/* Preventative Care */}
            <div id="preventative-care" className="scroll-mt-20 bg-neutral-100 rounded-lg p-8 shadow flex items-center justify-between">
              <div className="max-w-xl">
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  Chronic Care Management
                </h3>
                <p className="text-lg text-neutral-700">
                  Education, screenings, and care plans designed to prevent illness and detect developing comorbidities.
                </p>
              </div>
              <ShieldIcon className="h-16 w-16 text-accent" />
            </div>

            {/* Community First Initiative */}
            <div id="community-first-initiative" className="scroll-mt-20 bg-neutral-100 rounded-lg p-8 shadow flex items-center justify-between">
              <div className="max-w-xl">
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  Community First Initiative
                </h3>
                <p className="text-lg text-neutral-700 mb-4">
                  Supporting community health centers with no upfront costs. 
                  Improve UDS scores, increase patient engagement, and create revenue growth opportunities.
                </p>
                <Button href="/services/community-first" size="sm" variant="primary">
                  Learn More
                </Button>
              </div>
              <div className="flex items-center">
                <svg className="h-16 w-16 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        </section>
      </FadeInSection>
      {/* CTA Section */}
      <FadeInSection>
        <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to learn more?
          </h2>
          <p className="text-white/90 mb-8">
            Contact us today to see how our services can support your facility's goals.
          </p>
          <Button href="/contact" size="lg" variant="secondary">
            Contact Us
          </Button>
        </div>
        </section>
      </FadeInSection>
    </>
  );
} 