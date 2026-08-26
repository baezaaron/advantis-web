import Button from '@/components/Button';
import FadeInSection from '@/components/FadeInSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Advantis Care | Building Accountable Social Care Infrastructure',
  description: 'Advantis was founded to close the gap between identifying a member’s needs and ensuring meaningful support reaches them.',
  alternates: { canonical: '/about/' },
  openGraph: {
    title: 'About Advantis Care | Building Accountable Social Care Infrastructure',
    description: 'Advantis was founded to close the gap between identifying a member’s needs and ensuring meaningful support reaches them.',
    url: '/about/',
    type: 'website',
  },
};

const values = [
  { title: 'Impact before activity', description: 'We measure success by meaningful progress for members, not the volume of tasks completed.' },
  { title: 'Member dignity', description: 'Every interaction should respect the member’s circumstances, choices, time, and trust.' },
  { title: 'Accountability', description: 'We take ownership of follow-through, documentation, and honest reporting.' },
  { title: 'Operational excellence', description: 'Reliable systems, training, supervision, and quality controls make impact scalable.' },
  { title: 'Partnership', description: 'Social care requires coordinated work across plans, networks, providers, and communities.' },
  { title: 'Learning through data', description: 'We use frontline information to improve decisions, workflows, and outcomes.' },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-primary text-white py-20 md:py-28 page-header">
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <h1 className="page-title">Built for impact. Designed for accountability.</h1>
            <p className="page-subtitle">Advantis exists to make sure people do not fall through the space between healthcare, social services, and the practical realities of daily life.</p>
          </div>
        </div>
      </section>

      <FadeInSection>
        <section className="section bg-neutral-50" aria-labelledby="story-heading">
          <div className="container">
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-sm border border-neutral-200 border-l-4 border-l-accent">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent mb-4">Our story</p>
              <h2 id="story-heading" className="text-3xl md:text-4xl font-bold mb-7">Closing the space between need and meaningful support</h2>
              <div className="space-y-6 text-lg text-neutral-700">
                <p>Advantis began with a simple conviction: preventable hardship should not persist because systems fail to connect. For people navigating healthcare, benefits, and social services, identifying a need is rarely enough. Someone must reach the member, earn trust, coordinate the next step, work across fragmented organizations, and remain accountable until there is a meaningful outcome.</p>
                <p>That is the work Advantis was built to do. Today, we partner with health plans, care networks, and community providers to operate member engagement, HRSN screening, navigation, service coordination, quality assurance, and structured reporting. We combine human follow-through with disciplined operations and useful data so partners can see not only what was attempted, but what was completed and where the system still breaks down.</p>
                <p>Our long-term ambition is to help build a more integrated social-care system for populations with complex health and social needs, one in which member engagement, provider capacity, service fulfillment, data, and accountability work as a coordinated whole. The goal has never been activity for its own sake. It is measurable impact in the lives of the people these programs are intended to serve.</p>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="section bg-primary text-white">
          <div className="container grid md:grid-cols-2 gap-6">
            <article className="rounded-xl border border-white/15 bg-white/10 p-8">
              <p className="text-accent font-semibold uppercase tracking-[0.14em] mb-3">Mission</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Make whole-person care measurable, scalable, and dependable, so more people receive the support they need to live healthier lives.</h2>
            </article>
            <article className="rounded-xl border border-white/15 bg-white/10 p-8">
              <p className="text-accent font-semibold uppercase tracking-[0.14em] mb-3">Vision</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white">A healthcare system in which social care is not a fragmented referral, but an accountable part of how populations are served.</h2>
            </article>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="section bg-white" aria-labelledby="values-heading">
          <div className="container">
            <div className="section-header">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent mb-4">How we work</p>
              <h2 id="values-heading" className="text-3xl md:text-5xl font-bold">Our values</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value) => (
                <article key={value.title} className="rounded-xl border border-neutral-200 bg-neutral-50 p-7">
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-neutral-700">{value.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      <section className="py-20 md:py-28 bg-primary text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Help build a more accountable social-care system</h2>
          <p className="text-lg md:text-xl text-white/85 mb-9">Partner with Advantis to strengthen member engagement, navigation, service coordination, and operational visibility.</p>
          <Button href="/contact/?interest=partnerships#contact-form" size="lg" variant="secondary">Talk to Our Team</Button>
        </div>
      </section>
    </>
  );
}
