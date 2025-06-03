import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import PreventativeCare from './components/PreventativeCare';
import Testimonials from './components/Testimonials';
import RPMDevices from './components/RPMDevices';
import PricingComparison from './components/PricingComparison';
import FAQ from './components/FAQ';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Private Remote Patient Monitoring & Senior Care | Advantis',
  description: 'Private RPM and home health monitoring for seniors and chronic care. The best alternative to nursing homes: 24/7 remote monitoring, real nurses, and peace of mind for families.',
  keywords: [
    'private remote patient monitoring',
    'RPM',
    'alternatives to nursing homes',
    'senior care at home',
    'private RPM',
    'chronic care',
    'elderly health monitoring',
    'RPM as a service',
    'home health technology',
    'telehealth',
    'proactive care',
    'best RPM service',
    'HIPAA compliant RPM'
  ],
  openGraph: {
    title: 'Private Remote Patient Monitoring & Senior Care | Advantis',
    description: 'Private RPM and home health monitoring for seniors and chronic care. The best alternative to nursing homes: 24/7 remote monitoring, real nurses, and peace of mind for families.',
    url: 'https://advantis.care/private-services',
    siteName: 'Advantis',
    images: [
      {
        url: '/images/Advantis-Logo-200.png',
        width: 1200,
        height: 630,
        alt: 'Advantis Private Remote Patient Monitoring',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Private Remote Patient Monitoring & Senior Care | Advantis',
    description: 'Private RPM and home health monitoring for seniors and chronic care. The best alternative to nursing homes: 24/7 remote monitoring, real nurses, and peace of mind for families.',
    images: ['/images/Advantis-Logo-200.png'],
    site: '@advantis',
  },
};

export default function PrivateServicesPage() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <Benefits />
      <PreventativeCare />
      <Testimonials />
      <RPMDevices />
      <PricingComparison />
      <FAQ />
      
      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/90 mb-8">
            Join thousands of patients who are taking control of their health with our remote monitoring service.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary font-medium px-8 py-3 rounded-lg hover:bg-neutral-100 transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
} 