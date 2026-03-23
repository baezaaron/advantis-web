import Button from '@/components/Button';
import FadeInSection from '@/components/FadeInSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Patient Engagement & Care Completion | Advantis',
  description: 'Advantis partners with health plans and health systems on member engagement, preventive screening completion, resource navigation, care-gap closure, and Medicare RPM/CCM when in scope.',
  keywords: [
    'health plan services',
    'health system services',
    'care gap closure',
    'member engagement',
    'preventive screening outreach',
    'remote patient monitoring',
    'chronic care management',
    'SDOH navigation',
    'HEDIS support',
    'population health management',
    'value-based care'
  ],
  openGraph: {
    title: 'Our Services | Patient Engagement & Care Completion | Advantis',
    description: 'Advantis partners with health plans and health systems on member engagement, preventive screening completion, resource navigation, care-gap closure, and Medicare RPM/CCM when in scope.',
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
    title: 'Our Services | Patient Engagement & Care Completion | Advantis',
    description: 'Advantis partners with health plans and health systems on member engagement, preventive screening completion, resource navigation, care-gap closure, and Medicare RPM/CCM when in scope.',
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
          <p className="page-subtitle">Engagement and closed-loop completion programs for plans and systems</p>
        </div>
      </section>
    
      <FadeInSection>
        <section className="pt-28 pb-12 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              How We Partner
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              Advantis focuses on health plans and health systems that need accountable member engagement - persistent follow-up until screenings and gaps are actually closed (or clinically handed off) - with optional Medicare RPM and CCM when that fits your strategy.
            </p>
          </div>

          <div className="space-y-12 mt-12">
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
                    High-touch outreach and navigation that converts member demand into completed preventive care - aligned to your HEDIS and STAR priorities. We connect people to community resources when barriers appear. For Medicare-eligible members with chronic conditions, we can operate RPM and chronic care management end-to-end when you include it in program scope.
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
                          <span>Closed-loop gap and screening completion</span>
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
                          <span>Larger cost savings</span>
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
                    Augment your population health and care-management teams with dedicated outreach, gap-closure campaigns, discharge follow-up, and resource navigation. Add RPM/CCM operations for attributed Medicare populations when your medical groups need scalable clinical monitoring support.
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
            Contact us to design an engagement and completion program for your members and patients.
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