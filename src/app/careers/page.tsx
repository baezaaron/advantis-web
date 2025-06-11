import type { Metadata } from 'next';
import CareersClientSection from './CareersClientSection';

export const metadata: Metadata = {
  title: 'Careers at Advantis | Healthcare & Remote Patient Monitoring Jobs',
  description: 'Join Advantis and help transform healthcare. Explore careers in remote patient monitoring (RPM), healthcare technology, and senior care innovation.',
  keywords: [
    'careers at Advantis',
    'healthcare careers',
    'RPM jobs',
    'remote patient monitoring careers',
    'join Advantis',
    'senior care jobs',
    'health tech jobs',
    'RPM as a service',
    'best RPM company',
    'HIPAA compliant RPM'
  ],
  openGraph: {
    title: 'Careers at Advantis | Healthcare & Remote Patient Monitoring Jobs',
    description: 'Join Advantis and help transform healthcare. Explore careers in remote patient monitoring (RPM), healthcare technology, and senior care innovation.',
    url: 'https://advantis.care/careers',
    siteName: 'Advantis',
    images: [
      {
        url: '/images/og-advantis.png',
        width: 1200,
        height: 630,
        alt: 'Careers at Advantis',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers at Advantis | Healthcare & Remote Patient Monitoring Jobs',
    description: 'Join Advantis and help transform healthcare. Explore careers in remote patient monitoring (RPM), healthcare technology, and senior care innovation.',
    images: ['/images/og-advantis.png'],
    site: '@advantis',
  },
};

export default function CareersPage() {
  return <CareersClientSection />;
} 