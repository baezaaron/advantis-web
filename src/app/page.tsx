import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import Button from '@/components/Button';
import FadeInSection from '@/components/FadeInSection';
import { HeartPulseIcon, TechIcon, UsersIcon } from '@/components/icons';

const pillars = [
  {
    title: 'Engage',
    description: 'Persistent, respectful outreach that reaches members traditional workflows miss and identifies what they need.',
    icon: <UsersIcon className="h-7 w-7" />,
  },
  {
    title: 'Support',
    description: 'Help delivered by our team or coordinated with the right partner, clearing the barriers in between.',
    icon: <HeartPulseIcon className="h-7 w-7" />,
  },
  {
    title: 'Confirm',
    description: 'Follow-through, quality review, and reporting that show whether support was actually delivered.',
    icon: <TechIcon className="h-7 w-7" />,
  },
];

const audiences = [
  { title: 'Health plans', description: 'Accountable member engagement and social-care operations.' },
  { title: 'Care networks', description: 'Consistent, scalable workflows from screening to completion.' },
  { title: 'Community partners', description: 'Better handoffs, visibility, and coordination.' },
  { title: 'Employers', description: 'Practical support for employees facing barriers outside work.' },
];

const steps = [
  { title: 'Reach', description: 'Engage the member and build trust.' },
  { title: 'Identify', description: 'Pinpoint the need, from care gaps to social barriers.' },
  { title: 'Support', description: 'Deliver help directly or through a trusted partner.' },
  { title: 'Confirm', description: 'Verify the loop is closed and report results.' },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <FadeInSection>
        <section className="section bg-white" aria-labelledby="problem-heading">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent mb-4">The problem</p>
              <h2 id="problem-heading" className="text-3xl md:text-5xl font-bold mb-6">A referral is not a resolution</h2>
              <p className="text-lg md:text-xl text-neutral-700 leading-relaxed">
                Identifying a need is only the beginning. Too often, members are never reached, follow-up stalls, and no one knows whether the need was met. Advantis closes that loop.
              </p>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section id="how-it-works" className="section bg-neutral-100 scroll-mt-20" aria-labelledby="process-heading">
          <div className="container">
            <div className="section-header">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent mb-4">How it works</p>
              <h2 id="process-heading" className="text-3xl md:text-5xl font-bold">How we close the loop</h2>
            </div>
            <div className="relative">
            <div className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-0.5 bg-accent/30" aria-hidden="true"></div>
            <ol className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <li key={step.title} className="relative text-center">
                  <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-xl font-bold text-primary" aria-hidden="true">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-neutral-700">{step.description}</p>
                </li>
              ))}
            </ol>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section id="what-we-do" className="section bg-white scroll-mt-20" aria-labelledby="services-heading">
          <div className="container">
            <div className="section-header">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent mb-4">What we do</p>
              <h2 id="services-heading" className="text-3xl md:text-5xl font-bold">Three things, done all the way through</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {pillars.map((pillar) => (
                <ServiceCard key={pillar.title} {...pillar} link="/services/" />
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="section bg-primary text-white" aria-labelledby="difference-heading">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent mb-4">What makes us different</p>
              <h2 id="difference-heading" className="text-3xl md:text-5xl font-bold text-white mb-6">We bring the community relationships</h2>
              <p className="text-lg md:text-xl text-white/85 leading-relaxed">
                Tools alone don&apos;t create trust. Advantis builds and manages relationships with community-based organizations, giving providers a dependable path from identified need to delivered support.
              </p>
            </div>
            <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-center" aria-hidden="true">
              <span className="rounded-full border border-white/25 bg-white/10 px-6 py-3 font-semibold">Providers &amp; plans</span>
              <span className="text-accent text-2xl rotate-90 md:rotate-0">→</span>
              <span className="rounded-full bg-accent px-6 py-3 font-bold text-primary">Advantis</span>
              <span className="text-accent text-2xl rotate-90 md:rotate-0">→</span>
              <span className="rounded-full border border-white/25 bg-white/10 px-6 py-3 font-semibold">Trusted community partners</span>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section id="who-we-serve" className="section bg-white scroll-mt-20" aria-labelledby="audience-heading">
          <div className="container">
            <div className="section-header">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent mb-4">Who we serve</p>
              <h2 id="audience-heading" className="text-3xl md:text-5xl font-bold">Built for organizations accountable to people</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {audiences.map((audience) => (
                <article key={audience.title} className="rounded-xl border border-neutral-200 bg-neutral-50 p-7">
                  <h3 className="text-xl font-bold mb-3">{audience.title}</h3>
                  <p className="text-neutral-700">{audience.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      <section className="py-20 md:py-28 bg-primary text-white">
        <div className="container text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Let&apos;s close the loop for your members</h2>
          <p className="text-lg md:text-xl text-white/85 mb-9">Tell us about the population you serve, and we&apos;ll show you how Advantis can help.</p>
          <Button href="/contact/?interest=partnerships#contact-form" size="lg" variant="secondary">Start a Partnership Conversation</Button>
        </div>
      </section>
    </>
  );
}
