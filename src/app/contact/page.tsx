import type { Metadata } from 'next';
import { MedicalIcon, SupportIcon } from '@/components/icons';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Advantis | Remote Patient Monitoring & Senior Care Questions',
  description: 'Contact Advantis for questions about remote patient monitoring (RPM), senior care at home, and alternatives to nursing homes. Get support and learn more today.',
  keywords: [
    'contact Advantis',
    'remote patient monitoring',
    'RPM support',
    'senior care questions',
    'alternatives to nursing homes',
    'home health technology',
    'RPM as a service',
    'HIPAA compliant RPM'
  ],
  openGraph: {
    title: 'Contact Advantis | Remote Patient Monitoring & Senior Care Questions',
    description: 'Contact Advantis for questions about remote patient monitoring (RPM), senior care at home, and alternatives to nursing homes. Get support and learn more today.',
    url: 'https://advantis.care/contact',
    siteName: 'Advantis',
    images: [
      {
        url: '/images/og-advantis.png',
        width: 1200,
        height: 630,
        alt: 'Contact Advantis Remote Patient Monitoring',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Advantis | Remote Patient Monitoring & Senior Care Questions',
    description: 'Contact Advantis for questions about remote patient monitoring (RPM), senior care at home, and alternatives to nursing homes. Get support and learn more today.',
    images: ['/images/og-advantis.png'],
    site: '@advantis',
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary text-white py-20 md:py-28 page-header">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="page-title text-white">
              Contact Us
            </h1>
            <p className="page-subtitle text-white/90">
              Have questions or ready to get started? Reach out to our team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                Get In Touch
              </h2>
              <p className="text-neutral-700 mb-8">
                Whether you're a healthcare provider looking to expand your services, a potential partner, or a patient seeking more information, we'd love to hear from you.
              </p>

              <div className="space-y-8">
                <ContactInfo
                  icon={<SupportIcon className="h-6 w-6" />}
                  title="Customer Support"
                  description="For general inquiries and patient support"
                  value="info@advantis.care"
                  link="mailto:info@advantis.care"
                />

                <ContactInfo
                  icon={<MedicalIcon className="h-6 w-6" />}
                  title="Partnerships"
                  description="For healthcare providers and business inquiries"
                  value="info@advantis.care"
                  link="mailto:info@advantis.care"
                />

                <ContactInfo
                  icon={
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  }
                  title="Office Location"
                  description="Headquarters"
                  value="181 7th Ave, New York, NY 10011"
                  link="https://maps.google.com"
                />

                <ContactInfo
                  icon={
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  }
                  title="Phone"
                  description="Monday-Friday, 9am-9pm EST"
                  value="(212) 470-6966"
                  link="tel:+12124706966"
                />
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold text-primary mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <SocialLink
                    href="https://twitter.com"
                    icon={
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    }
                  />
                  <SocialLink
                    href="https://facebook.com"
                    icon={
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    }
                  />
                  <SocialLink
                    href="https://linkedin.com"
                    icon={
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    }
                  />
                  <SocialLink
                    href="https://instagram.com"
                    icon={
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    }
                  />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
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
  link
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  value: string;
  link?: string;
}) {
  return (
    <div className="flex">
      <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
        {icon}
      </div>
      <div className="ml-5">
        <h3 className="text-lg font-heading font-semibold text-primary">{title}</h3>
        <p className="text-neutral-500 text-sm mb-1">{description}</p>
        {link ? (
          <a href={link} className="text-accent hover:underline">
            {value}
          </a>
        ) : (
          <p className="text-neutral-800">{value}</p>
        )}
      </div>
    </div>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="h-10 w-10 rounded-full bg-neutral-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
    >
      {icon}
    </a>
  );
} 