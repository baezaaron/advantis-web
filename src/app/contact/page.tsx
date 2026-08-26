import type { Metadata } from 'next';
import { MedicalIcon, SupportIcon } from '@/components/icons';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Partner With Advantis | Social Care Operations',
  description: 'Talk with Advantis about member engagement, HRSN navigation, service coordination, and accountable social-care operations.',
  alternates: { canonical: '/contact/' },
  openGraph: {
    title: 'Partner With Advantis | Social Care Operations',
    description: 'Talk with Advantis about member engagement, HRSN navigation, service coordination, and accountable social-care operations.',
    url: '/contact/',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-primary text-white py-20 md:py-28 page-header">
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <h1 className="page-title">Partner With Advantis</h1>
            <p className="page-subtitle">Tell us about the population, operating challenge, or social-care program you are working to improve. We welcome conversations with health plans, care networks, community providers, and organizations building more accountable systems of support.</p>
          </div>
        </div>
      </section>

      <section id="contact-form" className="section bg-neutral-50 scroll-mt-20">
        <div className="container">
          <div className="grid lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-12 lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent mb-4">Start a conversation</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Let’s make the member journey more accountable</h2>
              <p className="text-lg text-neutral-700 mb-9">Share your goals, population, current workflow, and the barriers you want to address. Our team will follow up to understand the opportunity and identify a practical next step.</p>

              <div className="space-y-5">
                <ContactInfo
                  icon={<MedicalIcon className="h-6 w-6" />}
                  title="Partnerships"
                  description="For plans, networks, providers, and collaborators"
                  value="abaez@advantis.care"
                  link="mailto:abaez@advantis.care"
                />
                <ContactInfo
                  icon={<SupportIcon className="h-6 w-6" />}
                  title="General inquiries"
                  description="For general information and support"
                  value="info@advantis.care"
                  link="mailto:info@advantis.care"
                />
                <ContactInfo
                  title="Phone"
                  description="Monday through Friday, 9 a.m. to 9 p.m. Eastern"
                  value="(212) 470-6966"
                  link="tel:+12124706966"
                />
                <ContactInfo
                  title="Office"
                  description="New York headquarters"
                  value="181 7th Ave, New York, NY 10011"
                />
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactInfo({
  icon,
  title,
  description,
  value,
  link,
}: {
  icon?: React.ReactNode;
  title: string;
  description: string;
  value: string;
  link?: string;
}) {
  return (
    <div className="flex gap-4 rounded-xl border border-neutral-200 bg-white p-5">
      {icon && (
        <div className="h-11 w-11 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
          {icon}
        </div>
      )}
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-neutral-500 mb-1">{description}</p>
        {link ? <a href={link} className="text-accent hover:underline">{value}</a> : <p className="text-neutral-800">{value}</p>}
      </div>
    </div>
  );
}
