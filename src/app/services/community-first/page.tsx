import { HeartPulseIcon, SupportIcon } from '@/components/icons';
import Button from '@/components/Button';
import FadeInSection from '@/components/FadeInSection';
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
  title: 'Community Health Centers | Supporting Community Health Centers | Advantis',
  description: 'Learn how Advantis helps community health centers improve UDS scores, increase patient engagement, and create revenue growth opportunities with no upfront costs.',
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
    title: 'Community Health Centers | Supporting Community Health Centers | Advantis',
    description: 'Learn how Advantis helps community health centers improve UDS scores, increase patient engagement, and create revenue growth opportunities with no upfront costs.',
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
    title: 'Community Health Centers | Supporting Community Health Centers | Advantis',
    description: 'Learn how Advantis helps community health centers improve UDS scores, increase patient engagement, and create revenue growth opportunities with no upfront costs.',
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

      {/* Our Solution */}
      <FadeInSection>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Supporting Community Health Centers
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Advantis Care serves as a <span className="font-semibold text-primary">clinical and administrative extension-of-care platform</span> for community health centers. 
                We provide full-service RPM, CCM, SDOH navigation, and care coordination—handling all clinical and administrative execution 
                while your center bills for eligible CPT codes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Improve UDS Scores */}
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <ChartIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Improve UDS and HEDIS Scores</h3>
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
                  Through our high-touch case management, we help centers 
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
      </FadeInSection>

      {/* How We Help */}
      <FadeInSection>
        <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
              How We Support Your Center
            </h2>
            <p className="text-lg text-neutral-700 text-center mb-12 max-w-2xl mx-auto">
              As your extension-of-care partner, we handle the complete clinical and administrative execution 
              while you focus on what you do best, serving your community.
            </p>
          
            <div className="space-y-8">
              {/* SDOH Navigation - Featured First */}
              <div className="bg-white rounded-lg p-8 md:p-10 shadow-lg">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-shrink-0">
                    <svg className="h-16 w-16 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                      SDOH Navigation & Resource Mobilization
                    </h3>
                    <p className="text-lg text-gray-700 mb-4">
                      We incorporate structured SDOH screening using validated assessments such as <span className="font-semibold">PRAPARE</span>, 
                      then assist in mobilizing transportation, food, utilities, housing, and other community resources to reduce barriers to care.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Structured PRAPARE screening and assessment</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Transportation assistance coordination</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Food security and nutrition resources</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Housing and utilities support</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Community resource connections and follow-up</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* RPM + CCM Combined */}
              <div className="bg-white rounded-lg p-8 md:p-10 shadow-lg">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-shrink-0">
                    <HeartPulseIcon className="h-16 w-16 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                      Remote Patient Monitoring & Chronic Care Management
                    </h3>
                    <p className="text-lg text-gray-700 mb-4">
                      Full-service RPM and CCM operation including device provisioning, patient onboarding, daily monitoring, 
                      clinical review of physiological data, nurse-led interactions, and complete documentation. All handled by our team.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">RPM Services</h4>
                        <ul className="space-y-2 text-gray-700 text-sm">
                          <li className="flex items-start">
                            <svg className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Device provisioning and setup</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Daily monitoring of vital signs</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Real-time alerts and interventions</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">CCM Services</h4>
                        <ul className="space-y-2 text-gray-700 text-sm">
                          <li className="flex items-start">
                            <svg className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Chronic condition management</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Nurse-led patient interactions</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Clinical documentation and reporting</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Care Coordination */}
              <div className="bg-white rounded-lg p-8 md:p-10 shadow-lg">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-shrink-0">
                    <SupportIcon className="h-16 w-16 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                      Care Coordination & Administrative Support
                    </h3>
                    <p className="text-lg text-gray-700 mb-4">
                      Our nursing team supports Annual Wellness Visits, chronic condition reviews, medication reconciliation, 
                      appointment scheduling, and care-gap closure.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Annual Wellness Visit (AWV) support and preparation</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Appointment scheduling and coordination</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Medication reconciliation and adherence management</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Care-gap closure and preventive care coordination</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Chronic condition reviews and care plan updates</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> 
          </div>
        </div>
        </section>
      </FadeInSection>

      {/* No Upfront Costs */}
      <FadeInSection>
        <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-6">
              Start With No Upfront Costs
            </h2>
            <p className="text-lg text-primary-700 mb-8">
              We understand the financial pressures facing community health centers. As your extension-of-care partner, 
              we operate on a revenue share model with <span className="font-semibold">no upfront costs or out-of-pocket fees</span>. 
            </p>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-primary-800 mb-4">Our Extension-of-Care Model</h3>
              <ul className="text-left text-lg text-primary-700 space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  <span><span className="font-semibold">No upfront investment required</span>—we handle all device provisioning and setup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  <span><span className="font-semibold">Complete clinical execution</span>—we handle monitoring, interventions, and documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  <span><span className="font-semibold">No additional staffing needed</span>—our team serves as your extension</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  <span><span className="font-semibold">Immediate implementation</span>—seamless onboarding and interoperable with all major EHRs</span>
                </li>
              </ul>
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
            Ready to Partner With Us?
          </h2>
          <p className="text-white/90 mb-8">
            Partner with Advantis and help us ensure that community health centers 
            can continue serving their communities without having to remove essential services or shut down.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg" variant="secondary">
              Contact Us Today
            </Button>
            <Button href="/contact" size="lg" variant="outline">
              Learn About Our Services
            </Button>
          </div>
        </div>
        </section>
      </FadeInSection>
    </>
  );
}
