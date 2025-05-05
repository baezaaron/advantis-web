import { HeartPulseIcon, SupportIcon } from '@/components/icons';
import Button from '@/components/Button';

// Inline shield icon for Preventative Care
function ShieldIcon({ className = 'h-8 w-8' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M12 2l8 4v6c0 5-3 9-8 11-5-2-8-6-8-11V6l8-4z" />
    </svg>
  );
}

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
                  Continuous monitoring of vital signs and health metrics from the comfort of home, with real-time alerts.
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
                  Preventative Care
                </h3>
                <p className="text-lg text-neutral-700">
                  Education, screenings, and lifestyle programs designed to prevent illness and detect developing comorbidities.
                </p>
              </div>
              <ShieldIcon className="h-16 w-16 text-accent" />
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
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
    </>
  );
} 