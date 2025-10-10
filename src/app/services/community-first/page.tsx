import { HeartPulseIcon, SupportIcon } from '@/components/icons';
import Button from '@/components/Button';
import type { Metadata } from 'next';

// Inline icons for Community First Initiative
function CommunityIcon({ className = 'h-8 w-8' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

function ChartIcon({ className = 'h-8 w-8' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}

function DollarIcon({ className = 'h-8 w-8' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: 'Community First Initiative | Supporting Community Health Centers | Advantis',
  description: 'Learn how Advantis Community First Initiative helps community health centers improve UDS scores, increase patient engagement, and create revenue growth opportunities with no upfront costs.',
  keywords: [
    'community health centers',
    'FQHC support',
    'UDS scores improvement',
    'patient engagement',
    'revenue growth',
    'One Big Beautiful Bill Act',
    'community health center services',
    'healthcare extension services',
    'ancillary services support',
    'no upfront costs healthcare'
  ],
  openGraph: {
    title: 'Community First Initiative | Supporting Community Health Centers | Advantis',
    description: 'Learn how Advantis Community First Initiative helps community health centers improve UDS scores, increase patient engagement, and create revenue growth opportunities with no upfront costs.',
    url: 'https://advantis.care/services/community-first',
    siteName: 'Advantis',
    images: [
      {
        url: '/images/og-advantis.png',
        width: 1200,
        height: 630,
        alt: 'Advantis Community First Initiative',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Community First Initiative | Supporting Community Health Centers | Advantis',
    description: 'Learn how Advantis Community First Initiative helps community health centers improve UDS scores, increase patient engagement, and create revenue growth opportunities with no upfront costs.',
    images: ['/images/og-advantis.png'],
    site: '@advantis',
  },
};

export default function CommunityFirstPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary text-white py-20 md:py-28 page-header">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h1 className="page-title">Community First Initiative</h1>
          <p className="page-subtitle">Supporting Community Health Centers Through Challenging Times</p>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-6">
              The Challenge Facing Community Health Centers
            </h2>
             <p className="text-lg text-red-700 mb-8">
               With the recent passing of the <strong>One Big Beautiful Bill Act</strong>, community health centers are facing unprecedented challenges. 
               These health centers serve the most vulnerable populations, yet they're being forced to cut essential services 
                 or close their doors due to financial pressures and regulatory changes.
             </p>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Our Community First Initiative
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Advantis Healthcare is committed to serving as an extension to community health centers, 
              providing high-quality care and support to help them not just survive, but thrive.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Improve UDS Scores */}
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <ChartIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Improve UDS Scores</h3>
              <p className="text-blue-700">
                Our comprehensive monitoring and care management services help centers achieve better 
                Uniform Data System (UDS) scores through improved patient outcomes and care quality metrics.
              </p>
            </div>

            {/* Increase Patient Engagement */}
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <CommunityIcon className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-3">Increase Patient Engagement</h3>
              <p className="text-green-700">
                Through our remote patient monitoring and proactive care programs, we help centers 
                build stronger relationships with their patients and improve overall engagement levels.
              </p>
            </div>

            {/* Create Revenue Growth */}
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <DollarIcon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-purple-800 mb-3">Create Revenue Growth</h3>
              <p className="text-purple-700">
                Our services create new revenue streams and opportunities for centers to expand 
                their offerings while maintaining financial stability and sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            How We Support Your Center
          </h2>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            {/* Remote Patient Monitoring */}
            <div className="bg-white rounded-lg p-8 shadow flex items-center justify-between">
              <div className="max-w-xl">
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  Remote Patient Monitoring (RPM)
                </h3>
                <p className="text-lg text-gray-700">
                  Provide continuous monitoring of your patients' vital signs and health metrics, 
                  enabling early intervention and improved outcomes.
                </p>
              </div>
              <HeartPulseIcon className="h-16 w-16 text-accent" />
            </div>

            {/* Care Management */}
            <div className="bg-white rounded-lg p-8 shadow flex items-center justify-between">
              <div className="max-w-xl">
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  Advanced Care Management (APCM)
                </h3>
                <p className="text-lg text-gray-700">
                  Comprehensive care coordination and treatment planning to help your patients 
                  stay healthier and reduce hospital readmissions.
                </p>
              </div>
              <SupportIcon className="h-16 w-16 text-accent" />
            </div>

            {/* Chronic Care Management */}
            <div className="bg-white rounded-lg p-8 shadow flex items-center justify-between">
              <div className="max-w-xl">
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  Chronic Care Management (CCM)
                </h3>
                <p className="text-lg text-gray-700">
                  Specialized programs for managing chronic conditions, helping patients 
                  maintain better health and reducing overall healthcare costs.
                </p>
              </div>
              <CommunityIcon className="h-16 w-16 text-accent" />
            </div>
          </div>
        </div>
      </section>

      {/* No Upfront Costs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-6">
              Start With No Upfront Costs
            </h2>
            <p className="text-lg text-primary-700 mb-8">
              We understand the financial pressures facing community health centers. That's why we've designed 
              our Community First Initiative to begin with no upfront costs, making it simple 
              for centers to get started and immediately serviceable.
            </p>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-primary-800 mb-4">Our Commitment to You</h3>
              <ul className="text-left text-lg text-primary-700 space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>No upfront investment required</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Immediate implementation and service delivery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Flexible payment options that work with your budget</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Dedicated support team to ensure your success</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-white/90 mb-8">
            Join the Community First Initiative and help us ensure that community health centers 
            can continue serving their communities without having to remove essential services or shut down.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg" variant="secondary">
              Contact Us Today
            </Button>
            <Button href="/services" size="lg" variant="outline">
              Learn About Our Services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
