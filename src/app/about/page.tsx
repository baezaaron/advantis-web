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
            However, with Advantis, health plans, health systems, and community health centers are plugging the gap. Patients are no longer left to fall between the cracks. By serving as an extension of care through care coordination, SDOH navigation, leveraging data and remote patient monitoring, we bring continuity, insight, and accountability to care delivered at home. It's time to take a more proactive, qualitative approach.
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
        <section className="py-20 md:py-28 bg-primary relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="white">
            <path d="M39.5,-65.6C50.9,-56.3,59.5,-44.7,65.4,-31.9C71.3,-19.1,74.4,-5.2,71.7,7.1C69,19.4,60.4,30.1,51.3,39.9C42.2,49.7,32.6,58.4,21.2,63.6C9.7,68.8,-3.5,70.4,-17.6,68.8C-31.7,67.1,-46.7,62.3,-58.1,52.6C-69.4,42.9,-77.1,28.3,-79.1,13C-81.1,-2.3,-77.3,-18.2,-69.3,-31.3C-61.3,-44.4,-49.1,-54.8,-36.2,-63.4C-23.3,-72,-11.7,-78.9,1.2,-80.8C14,-82.7,28,-74.8,39.5,-65.6Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full opacity-10">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="white">
            <path d="M45.3,-77.5C59.6,-69.9,72.8,-59.5,79.4,-45.8C86,-32.1,85.9,-16,83.1,-1.6C80.3,12.8,74.7,25.6,67.8,38.3C60.9,50.9,52.5,63.3,41,71C29.5,78.7,14.7,81.5,0.2,81.2C-14.4,80.9,-28.8,77.4,-41.6,70.1C-54.4,62.8,-65.7,51.8,-73.6,38.5C-81.5,25.2,-86.1,9.6,-85.9,-5.9C-85.7,-21.4,-80.8,-36.8,-71.2,-48.3C-61.7,-59.9,-47.5,-67.7,-33.5,-75.3C-19.5,-82.9,-5.7,-90.3,7.2,-89.6C20.1,-88.9,31,-85.1,45.3,-77.5Z" transform="translate(100 100)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to extend your reach?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Discover how Advantis Care can serve as your value-based extension-of-care service provider, 
              improving patient outcomes and generating new revenue streams, all without adding internal staff.
            </p>
            <Button href="/contact" size="lg" variant="secondary" className="px-10 py-4">
              Get Started Today
            </Button>
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