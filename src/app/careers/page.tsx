import type { Metadata } from 'next';
import CareersClientSection from './CareersClientSection';

export const metadata: Metadata = {
  title: 'Careers at Advantis | Value-Based Care & Extension-of-Care',
  description: 'Join Advantis and help transform healthcare. Explore careers in value-based care, extension-of-care services, and healthcare innovation for FQHCs, health plans, and health systems.',
  keywords: [
    'careers at Advantis',
    'healthcare careers',
    'value-based care jobs',
    'extension-of-care careers',
    'join Advantis',
    'healthcare technology jobs',
    'health tech jobs',
    'FQHC careers',
    'health plan careers',
    'health system careers'
  ],
  openGraph: {
    title: 'Careers at Advantis | Value-Based Care & Extension-of-Care',
    description: 'Join Advantis and help transform healthcare. Explore careers in value-based care, extension-of-care services, and healthcare innovation for FQHCs, health plans, and health systems.',
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
    title: 'Careers at Advantis | Value-Based Care & Extension-of-Care',
    description: 'Join Advantis and help transform healthcare. Explore careers in value-based care, extension-of-care services, and healthcare innovation for FQHCs, health plans, and health systems.',
    images: ['/images/og-advantis.png'],
    site: '@advantis',
  },
};

export default function CareersPage() {
  return <CareersClientSection />;
} 