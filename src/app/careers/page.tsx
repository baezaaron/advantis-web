import type { Metadata } from 'next';

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
  return (
    <section className="pt-28 pb-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-primary mb-6">
            Join Our Team
          </h1>
          <p className="text-lg text-neutral-700 mb-4 leading-relaxed">
          At Advantis, we're on a mission to transform healthcare through innovative technology and compassionate care. We're looking for talented individuals who share our passion for improving patient outcomes and making quality healthcare accessible to all.
          </p>
          <p className="text-lg text-primary font-medium">
            Please reach out to us at <a href="mailto:info@advantis.care" className="underline">info@advantis.care</a>
          </p>
        </div>
      </div>
    </section>
  );
} 