import Button from '@/components/Button';
import FadeInSection from '@/components/FadeInSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Extension-of-Care Platform for Healthcare Organizations | Advantis',
  description: 'Advantis Care provides value-based extension-of-care solutions for FQHCs, health plans, and health systems. Integrated RPM, CCM, SDOH navigation, and preventive care support.',
  keywords: [
    'FQHC services',
    'health plan services',
    'health system services',
    'extension of care platform',
    'remote patient monitoring',
    'chronic care management',
    'SDOH navigation',
    'RPM for health centers',
    'healthcare extension services',
    'population health management',
    'value-based care'
  ],
  openGraph: {
    title: 'Our Services | Extension-of-Care Platform for Healthcare Organizations | Advantis',
    description: 'Advantis Care provides extension-of-care solutions for FQHCs, health plans, and health systems. Integrated RPM, CCM, SDOH navigation, and preventive care support.',
    url: 'https://advantis.care/services',
    siteName: 'Advantis',
    images: [
      {
        url: '/images/og-advantis.png',
        width: 1200,
        height: 630,
        alt: 'Advantis Care Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Services | Extension-of-Care Platform for Healthcare Organizations | Advantis',
    description: 'Advantis Care provides extension-of-care solutions for FQHCs, health plans, and health systems. Integrated RPM, CCM, SDOH navigation, and preventive care support.',
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
          <p className="page-subtitle">Extension-of-care solutions tailored to your organization</p>
        </div>
      </section>
    
      <FadeInSection>
        <section className="pt-28 pb-12 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Solutions for Every Partner Type
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              Our value-based platform adapts to meet the unique needs of FQHCs, health plans, and health systems
            </p>
          </div>

          <div className="space-y-12 mt-12">
            {/* FQHCs & CHCs Section */}
            <div id="fqhcs" className="scroll-mt-20 bg-white rounded-lg p-8 md:p-12 shadow-lg border border-neutral-200">
              <div className="flex items-start gap-6 mb-6">
                <svg className="h-12 w-12 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-primary mb-4">
                    For Community Health Centers
                  </h3>
                  <p className="text-lg text-neutral-700 mb-6">
                    Extension of care services including high-touch case management assisting with SDOH naviagation and care coordination. Along with a full-service RPM and CCM operation with device provisioning, patient onboarding, daily monitoring, and clinical documentation. 
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-primary mb-3">What We Provide</h4>
                      <ul className="space-y-2 text-neutral-700">
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Full-service RPM + CCM operation</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Device provisioning and patient onboarding</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Daily monitoring and clinical review</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>SDOH screening aligned with recognized models (e.g., PRAPARE) and navigation</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>AWV support and care-gap closure</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Benefits</h4>
                      <ul className="space-y-2 text-neutral-700">
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>No upfront costs or out-of-pocket fees</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Improved UDS and HEDIS scores</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Improvement in grant funding opportunities</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>New revenue streams</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Lower no-show rates</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>No additional staffing required</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Health Plans Section */}
            <div id="health-plans" className="scroll-mt-20 bg-white rounded-lg p-8 md:p-12 shadow-lg border border-neutral-200">
              <div className="flex items-start gap-6 mb-6">
                <svg className="h-12 w-12 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-primary mb-4">
                    For Health Plans
                  </h3>
                  <p className="text-lg text-neutral-700 mb-6">
                    PMPM model providing high-frequency engagement, RPM + CCM for members, SDOH assessments, and preventive-care coordination tied to HEDIS, STAR ratings, and risk adjustment accuracy.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-primary mb-3">What We Provide</h4>
                      <ul className="space-y-2 text-neutral-700">
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>High-frequency member engagement</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>RPM + CCM for chronic conditions</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>SDOH assessments and navigation</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>AWV and HRA completion</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Preventive-care coordination</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Benefits</h4>
                      <ul className="space-y-2 text-neutral-700">
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>HEDIS and STAR ratings improvement</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Risk adjustment accuracy</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Reduced avoidable utilization</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>LArger cost savings</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Higher engagement rates</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Health Systems & IPAs Section */}
            <div id="health-systems" className="scroll-mt-20 bg-white rounded-lg p-8 md:p-12 shadow-lg border border-neutral-200">
              <div className="flex items-start gap-6 mb-6">
                <svg className="h-12 w-12 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-primary mb-4">
                    For Health Systems & IPAs
                  </h3>
                  <p className="text-lg text-neutral-700 mb-6">
                    PMPM arrangements for chronic care support, RPM deployment, HEDIS/SDOH workforce augmentation, and post-discharge stabilization to reduce readmissions.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-primary mb-3">What We Provide</h4>
                      <ul className="space-y-2 text-neutral-700">
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Chronic care support and RPM deployment</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>HEDIS/SDOH workforce augmentation</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Post-discharge stabilization</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Population health extension</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Structured data insights</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Benefits</h4>
                      <ul className="space-y-2 text-neutral-700">
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Reduced readmissions</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Immediate capacity expansion</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Value-based contract support</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>No internal hiring required</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Longitudinal patient data</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Community Health Centers Section */}
            <div id="community-health-centers" className="scroll-mt-20 bg-white rounded-lg p-8 md:p-12 shadow-lg border border-neutral-200">
              <div className="flex items-start gap-6 mb-6">
                <svg className="h-12 w-12 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-primary mb-4">
                    Community First Initiative
                  </h3>
                  <p className="text-lg text-neutral-700 mb-6">
                    Supporting community health centers with no upfront costs. Improve UDS scores, increase patient engagement, and create revenue growth opportunities.
                  </p>
                  <Button href="/services/community-first" size="md" variant="primary">
                    Learn More About Our Community Health Center Program
                  </Button>
                </div>
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