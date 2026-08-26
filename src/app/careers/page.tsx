import type { Metadata } from 'next';
import CareersClientSection from './CareersClientSection';

export const metadata: Metadata = {
  title: 'Careers at Advantis | Social Care Operations',
  description: 'Build systems that help people receive support through accountable member engagement, navigation, and social-care operations.',
  keywords: [
    'careers at Advantis',
    'healthcare careers',
    'social care jobs',
    'member engagement careers',
    'join Advantis',
    'healthcare technology jobs',
    'care operations careers',
    'healthcare operations careers'
  ],
  openGraph: {
    title: 'Careers at Advantis | Social Care Operations',
    description: 'Build systems that help people receive support through accountable member engagement, navigation, and social-care operations.',
    url: 'https://advantis.care/careers/',
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
    title: 'Careers at Advantis | Social Care Operations',
    description: 'Build systems that help people receive support through accountable member engagement, navigation, and social-care operations.',
    images: ['/images/og-advantis.png'],
    site: '@advantis',
  },
  alternates: { canonical: '/careers/' },
};

export default function CareersPage() {
  return <CareersClientSection />;
}
