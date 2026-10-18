import Button from '@/components/Button';
import FadeInSection from '@/components/FadeInSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social Care Operations & Member Engagement | Advantis Care',
  description: 'Explore Advantis member engagement, HRSN screening, navigation, service coordination, quality assurance, and social-care reporting capabilities.',
  alternates: { canonical: '/services/' },
  openGraph: {
    title: 'Social Care Operations & Member Engagement | Advantis Care',
    description: 'Explore Advantis member engagement, HRSN screening, navigation, service coordination, quality assurance, and social-care reporting capabilities.',
    url: '/services/',
    type: 'website',
  },
};

const capabilities = [
  {
    title: 'Member engagement',
    description: 'Reach members respectfully, build trust, and move each interaction toward a clear and documented next step.',
    items: [
      'Multichannel outreach and persistent follow-up',
      'Population-specific engagement workflows',
      'Scheduling, next-step coordination, and warm handoffs',
      'Escalation pathways for complex or urgent needs',
    ],
  },
  {
    title: 'HRSN screening and eligibility support',
    description: 'Create a consistent path from assessment through eligibility and program handoff.',
    items: [
      'Standardized HRSN assessments',
      'Consent and eligibility workflow support',
      'Documentation of identified needs and barriers',
      'Structured handoff into partner platforms and programs',
    ],
  },
  {
    title: 'Social-care navigation',
    description: 'Help members understand options, act on referrals, and make progress through practical barriers.',
    items: [
      'Resource identification and referral coordination',
      'Member education and application support',
      'Follow-up on referral status',
      'Documentation of unresolved barriers and next actions',
    ],
  },
  {
    title: 'Service and network coordination',
    description: 'A developing capability focused on making partner networks easier to operate and services easier to track.',
    items: [
      'Coordination across nutrition, housing, transportation, and care-management partners',
      'Provider capacity and service-status visibility',
      'Fulfillment confirmation and exception management',
      'Standardized operating expectations across partner organizations',
    ],
  },
  {
    title: 'Quality and operational intelligence',
    description: 'Turn frontline work into reliable records, quality controls, and practical information for program leadership.',
    items: [
      'Interaction and service-event records',
      'Quality review and corrective-action workflows',
      'Completion, turnaround-time, and capacity reporting',
      'Actionable analysis for program and network leadership',
    ],
  },
];

const measures = [
  { label: 'Reach', detail: 'Attempts, contacts, consent, and engagement by population' },
  { label: 'Identify', detail: 'Screenings completed, needs identified, and eligibility status' },
  { label: 'Fulfill', detail: 'Referrals accepted, services initiated, services completed, and time to completion' },
  { label: 'Learn', detail: 'Unresolved barriers, repeat needs, quality findings, capacity gaps, and outcome trends' },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-primary text-white py-20 md:py-28 page-header">
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent mb-5">What we do</p>
            <h1 className="page-title">Social-care operations built for follow-through</h1>
            <p className="page-subtitle">Advantis provides the people, workflows, quality controls, and operational visibility required to move members from outreach and assessment through navigation, service coordination, and documented completion.</p>
          </div>
        </div>
      </section>

      <FadeInSection>
        <section className="section bg-neutral-50">
          <div className="container">
            <div className="section-header">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent mb-4">Core capabilities</p>
              <h2 className="text-3xl md:text-5xl font-bold mb-5">The work required to close the loop</h2>
              <p className="text-base md:text-lg text-neutral-700 text-balance md:whitespace-nowrap">We work within your existing platforms, benefits, and partner networks.</p>
            </div>
            <div className="space-y-6 max-w-5xl mx-auto">
              {capabilities.map((capability, index) => (
                <article key={capability.title} className="bg-white rounded-xl border border-neutral-200 shadow-sm p-7 md:p-9">
                  <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] gap-6 md:gap-10">
                    <div>
                      <p className="text-accent font-semibold mb-3">0{index + 1}</p>
                      <h2 className="text-2xl md:text-3xl font-bold mb-4">{capability.title}</h2>
                      <p className="text-neutral-700">{capability.description}</p>
                    </div>
                    <ul className="space-y-3" aria-label={`${capability.title} capabilities`}>
                      {capability.items.map((item) => (
                        <li key={item} className="flex gap-3 text-neutral-700">
                          <span className="text-accent font-bold" aria-hidden="true">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="section bg-white" aria-labelledby="relationship-heading">
          <div className="container">
            <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-10 lg:gap-16 items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent mb-4">The relationship layer</p>
                <h2 id="relationship-heading" className="text-3xl md:text-5xl font-bold mb-6">Connecting providers, members, and community organizations</h2>
                <p className="text-lg text-neutral-700 leading-relaxed">Health systems can give providers tools, but tools alone do not create trusted community relationships or make it clear where a member should turn next. Advantis builds and manages relationships with community-based organizations and other local partners, giving providers a practical pathway from identified need to coordinated support.</p>
              </div>
              <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-8 shadow-sm">
                <h3 className="text-2xl font-bold mb-4">A more cared-for workforce</h3>
                <p className="text-neutral-700 leading-relaxed">For employers, social challenges outside the workplace can affect health, focus, attendance, and retention. By taking on the coordination and logistical work behind social care, Advantis helps organizations connect people to relevant support while giving leaders clearer visibility into what is working.</p>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="section bg-primary text-white" aria-labelledby="accountability-heading">
          <div className="container">
            <div className="section-header">
              <h2 id="accountability-heading" className="text-3xl md:text-5xl font-bold text-white mb-5">Accountability at every step</h2>
              <p className="text-lg text-white/80">Performance is measured across the member journey, not only at the point of referral.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {measures.map((measure, index) => (
                <div key={measure.label} className="rounded-xl border border-white/15 bg-white/10 p-6">
                  <p className="text-accent font-semibold mb-3">0{index + 1}</p>
                  <h3 className="text-2xl font-bold text-white mb-3">{measure.label}</h3>
                  <p className="text-white/80">{measure.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="section bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto rounded-2xl border border-accent/20 bg-accent/5 p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-5">Flexible structures aligned to program accountability</h2>
              <p className="text-lg text-neutral-700 mb-8">Advantis can support defined populations through implementation fees, episodic or bundled services, per-member arrangements, and performance-linked structures. Final pricing and accountability measures are established around population, workflow, service scope, data access, and volume.</p>
              <Button href="/contact/?interest=partnerships#contact-form" size="lg">Talk to Our Team</Button>
            </div>
          </div>
        </section>
      </FadeInSection>
    </>
  );
}
