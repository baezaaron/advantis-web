import Button from '@/components/Button';
import CustomImage from '@/components/Image';
import FadeInSection from '@/components/FadeInSection';
import type { Metadata } from 'next';

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary text-white py-20 md:py-28 page-header">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="page-title">
              About Advantis
            </h1>
            <p className="page-subtitle">
            Bringing data-driven care to the people who need it most.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <FadeInSection>
        <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
            Our Why
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8 rounded-full"></div>
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-10 rounded-lg shadow-md border border-neutral-200 border-l-4 border-accent">
            <p className="text-neutral-700 mb-6 text-lg text-center">
            Founded in 2023, Advantis was born from a simple but overlooked truth: while technology continues to evolve, our nation's health continues to decline. In nearly every part of our lives, data drives better decisions, yet healthcare remains disconnected, reactive, and inefficient. We set out to change that.
            </p>
            <p className="text-neutral-700 mb-6 text-lg text-center">
            We noticed that while many companies were eager to solve this problem, they often placed the burden of innovation on already overworked providers and their clinical teams. The solution needs to start at the foundation. Beginning with the patient. Today, patients tend to be left to fend for themselves post discharge. Leaving them overwhelmed and frustrated.      </p>
            <p className="text-neutral-700 text-lg text-center">
            However, with Advantis, health systems and centers are plugging the gap. Patients are no longer left to fall between the cracks. By leveraging data and remote patient monitoring, we bring continuity, insight, and accountability to care delivered at home. It's time to take a more proactive, qualitative approach, because real healthcare happens between appointments.
            </p>
          </div>
        </div>
        </section>
      </FadeInSection>
      
      {/* Our Values */}
      <FadeInSection>
        <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Values
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-neutral-700">
              These core principles guide everything we do at Advantis.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ValueCard 
              title="Patient-Centered Care"
              description="We place patients at the center of every decision, ensuring our solutions address their unique needs and preferences."
              icon="person"
            />
            
            <ValueCard 
              title="Innovation"
              description="We continuously explore new technologies and approaches to solve healthcare challenges and improve patient experiences."
              icon="lightbulb"
            />
            
            <ValueCard 
              title="Accessibility"
              description="We believe quality healthcare should be accessible to everyone, regardless of location, mobility, or socioeconomic status."
              icon="globe"
            />
            
            <ValueCard 
              title="Collaboration"
              description="We work closely with community health centers, health systems, IPAs, and value based care centers to create tailored solutions."
              icon="team"
            />
            
            <ValueCard 
              title="Empathy"
              description="We approach every interaction with compassion and understanding, recognizing the human element in healthcare."
              icon="heart"
            />
            
            <ValueCard 
              title="Integrity"
              description="We uphold the highest standards of privacy, security, and ethical conduct in all our operations."
              icon="shield"
            />
          </div>
        </div>
        </section>
      </FadeInSection>
      
      {/* CTA Section */}
      <FadeInSection>
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary to-blue-900 text-white relative overflow-hidden">
        {/* Add decorative elements */}
        <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-white/5"></div>
        <div className="absolute right-40 top-20 w-40 h-40 rounded-full bg-white/5"></div>
        <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-white/5"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white drop-shadow-sm">
              Join the Advantis Community
            </h2>
            <div className="w-20 h-1 bg-white/50 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl mb-10 text-white/90">
              Whether you're a healthcare provider looking to expand your services or a patient seeking better care options, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg" variant="secondary" className="px-8 py-4">
                Contact Us
              </Button>
              <Button href="/resources" size="lg" variant="outline" className="px-8 py-4 border-white text-white hover:bg-white/10">
                Explore Resources
              </Button>
            </div>
          </div>
        </div>
        </section>
      </FadeInSection>
    </>
  );
}

// Value Card Component with Icon
function ValueCard({ 
  title, 
  description, 
  icon 
}: { 
  title: string; 
  description: string;
  icon: string;
}) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md border border-neutral-200 transition-transform hover:-translate-y-1">
      <div className="mb-5 w-12 h-12 flex items-center justify-center bg-accent/10 text-accent rounded-full mx-auto">
        {renderIcon(icon)}
      </div>
      <h3 className="text-xl font-bold text-primary mb-3 text-center">{title}</h3>
      <p className="text-neutral-600 text-center">{description}</p>
    </div>
  );
}

// Helper function to render icons
function renderIcon(icon: string) {
  switch(icon) {
    case 'person':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      );
    case 'lightbulb':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      );
    case 'globe':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case 'team':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      );
    case 'heart':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      );
    case 'shield':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    default:
      return null;
  }
}

export const metadata: Metadata = {
  title: 'About Advantis | Remote Patient Monitoring & Healthcare Innovation',
  description: 'Learn about Advantis: our mission to provide remote patient monitoring (RPM), innovative healthcare, and alternatives to nursing homes for seniors and families.',
  keywords: [
    'about Advantis',
    'remote patient monitoring',
    'RPM',
    'healthcare innovation',
    'alternatives to nursing homes',
    'senior care at home',
    'chronic care',
    'elderly health monitoring',
    'proactive care',
    'best RPM service',
    'HIPAA compliant RPM'
  ],
  openGraph: {
    title: 'About Advantis | Remote Patient Monitoring & Healthcare Innovation',
    description: 'Learn about Advantis: our mission to provide remote patient monitoring (RPM), innovative healthcare, and alternatives to nursing homes for seniors and families.',
    url: 'https://advantis.care/about',
    siteName: 'Advantis',
    images: [
      {
        url: '/images/og-advantis.png',
        width: 1200,
        height: 630,
        alt: 'About Advantis Remote Patient Monitoring',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Advantis | Remote Patient Monitoring & Healthcare Innovation',
    description: 'Learn about Advantis: our mission to provide remote patient monitoring (RPM), innovative healthcare, and alternatives to nursing homes for seniors and families.',
    images: ['/images/og-advantis.png'],
    site: '@advantis',
  },
}; 