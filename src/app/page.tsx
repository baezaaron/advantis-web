import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import Button from '@/components/Button';
import FadeInSection from '@/components/FadeInSection';
import { HeartPulseIcon, SupportIcon, TechIcon, UsersIcon } from '@/components/icons';

const services = [
  {
    title: 'Member engagement',
    description: 'Persistent, respectful outreach designed to reach members who are often missed by traditional workflows and move each interaction toward a clear next step.',
    icon: <UsersIcon className="h-7 w-7" />,
  },
  {
    title: 'HRSN screening and navigation',
    description: 'Structured screening, eligibility support, resource navigation, and follow-up across food, housing, transportation, utilities, and other health-related social needs.',
    icon: <HeartPulseIcon className="h-7 w-7" />,
  },
  {
    title: 'Service coordination and fulfillment',
    description: 'Coordination with community and enhanced-service partners, with follow-through that goes beyond making a referral to determine whether support was actually delivered.',
    icon: <SupportIcon className="h-7 w-7" />,
  },
  {
    title: 'Quality, data, and network operations',
    description: 'Standardized workflows, quality assurance, service-event documentation, and operational reporting that help partners understand capacity, completion, barriers, and next actions.',
    icon: <TechIcon className="h-7 w-7" />,
  },
];

const measures = [
  { label: 'Reach', detail: 'Attempts, contacts, consent, and engagement by population' },
  { label: 'Identify', detail: 'Screenings completed, needs identified, and eligibility status' },
  { label: 'Fulfill', detail: 'Referrals accepted, services initiated, services completed, and time to completion' },
  { label: 'Learn', detail: 'Unresolved barriers, repeat needs, quality findings, capacity gaps, and outcome trends' },
];

const audiences = [
  {
    title: 'Health plans and accountable organizations',
    description: 'Member engagement, social-care operations, and structured reporting that support program responsibilities, quality priorities, and accountable service delivery.',
  },
  {
    title: 'Care networks and coordinating organizations',
    description: 'Scalable engagement, navigation, quality assurance, and operating capacity that help networks move members through consistent end-to-end workflows.',
  },
  {
    title: 'Community and service-delivery partners',
    description: 'Operational support that improves member handoffs, service visibility, documentation, and coordination across a fragmented delivery environment.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Define the population and workflow',
    description: 'We align on the population, program requirements, responsibilities, escalation paths, data exchange, and measures of success.',
  },
  {
    number: '02',
    title: 'Engage and assess',
    description: 'Our teams conduct persistent outreach, build trust, identify needs, and establish the next appropriate action.',
  },
  {
    number: '03',
    title: 'Navigate and coordinate',
    description: 'We connect members to available services and work with partners to reduce administrative and practical barriers.',
  },
  {
    number: '04',
    title: 'Verify and report',
    description: 'We follow the journey through completion or a documented handoff, then return structured service-event data and actionable operational insights.',
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <FadeInSection>
        <section className="section bg-white" aria-labelledby="mission-heading">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent mb-4">Our mission in action</p>
              <h2 id="mission-heading" className="text-3xl md:text-5xl font-bold mb-6">Making social care work in practice</h2>
              <p className="text-lg md:text-xl text-neutral-700 leading-relaxed">
                Identifying a social need is only the beginning. Members still have to be reached, eligibility must be understood, services must be coordinated, and outcomes must be documented. Advantis operates across that gap. We combine high-touch engagement, disciplined workflows, community partnerships, and operational data so whole-person care can move from intention to completion.
              </p>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section id="what-we-do" className="section bg-neutral-100 scroll-mt-20" aria-labelledby="services-heading">
          <div className="container">
            <div className="section-header">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent mb-4">What we do</p>
              <h2 id="services-heading" className="text-3xl md:text-5xl font-bold mb-5">The operating layer between need and resolution</h2>
              <p className="text-lg text-neutral-700">Advantis supports the full member journey while working within the platforms, benefit structures, and partner networks already in place.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} link="/services/" />
              ))}
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
        <section id="who-we-serve" className="section bg-white scroll-mt-20" aria-labelledby="audience-heading">
          <div className="container">
            <div className="section-header">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent mb-4">Who we serve</p>
              <h2 id="audience-heading" className="text-3xl md:text-5xl font-bold mb-5">Built for organizations accountable to members</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {audiences.map((audience) => (
                <article key={audience.title} className="rounded-xl border border-neutral-200 bg-neutral-50 p-7">
                  <h3 className="text-xl font-bold mb-4">{audience.title}</h3>
                  <p className="text-neutral-700">{audience.description}</p>
                </article>
              ))}
            </div>
            <p className="max-w-4xl mx-auto mt-9 text-center text-lg text-neutral-700">
              Our operating model is designed to adapt across populations facing barriers to care, services, and benefit utilization.
            </p>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section id="how-it-works" className="section bg-neutral-100 scroll-mt-20" aria-labelledby="process-heading">
          <div className="container">
            <div className="section-header">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent mb-4">How it works</p>
              <h2 id="process-heading" className="text-3xl md:text-5xl font-bold mb-5">A disciplined path from outreach to insight</h2>
            </div>
            <ol className="grid md:grid-cols-2 gap-6">
              {steps.map((step) => (
                <li key={step.number} className="bg-white rounded-xl border border-neutral-200 p-7 flex gap-5">
                  <span className="text-2xl font-bold text-accent" aria-hidden="true">{step.number}</span>
                  <div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-neutral-700">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </FadeInSection>

      <section className="py-20 md:py-28 bg-primary text-white">
        <div className="container text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Build a more accountable member journey</h2>
          <p className="text-lg md:text-xl text-white/85 mb-9">Talk with Advantis about strengthening engagement, navigation, service coordination, and social-care operations for the populations you serve.</p>
          <Button href="/contact/?interest=partnerships#contact-form" size="lg" variant="secondary">Start a Partnership Conversation</Button>
        </div>
      </section>
    </>
  );
}
