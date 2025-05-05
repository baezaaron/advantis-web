import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import Button from '@/components/Button';
import { HeartPulseIcon, TechIcon, SupportIcon, EducationIcon } from '@/components/icons';
import CustomImage from '@/components/Image';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      {/* Mission Section with Image */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] items-center gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
                Our Mission
              </h2>
              <p className="text-xl md:text-2xl text-neutral-700 mb-8 leading-relaxed">
              Advantis is rethinking how healthcare is delivered — starting with the basics: daily vitals. By using real-time data, we help providers catch issues early, make smarter decisions, and keep patients healthier at home. It's about shifting from reactive care to proactive care — and using technology to make that shift seamless.
              </p>
              <Button href="/about" variant="outline" className="px-8">
                Learn About Our Approach
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full h-64 md:h-80 lg:h-96 xl:h-[500px]">
                <CustomImage
                  src="/images/caretaking.jpg"
                  alt="Caretaker"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="section bg-neutral-100" id="services">
        <div className="container">
          <div className="section-header">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              What We Do
            </h2>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
              Our comprehensive approach combines cutting-edge technology with compassionate
              care to address the unique needs of each patient.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <ServiceCard
              title="Remote Patient Monitoring"
              description="Continuous monitoring of vital signs and health metrics from the comfort of home, with real-time alerts for healthcare providers."
              icon={<HeartPulseIcon className="h-7 w-7 text-accent" />}
              link="/services#remote-patient-monitoring"
            />

            <ServiceCard
              title="Advanced Primary Care Management"
              description="Proactive care coordination and personalized treatment plans to keep patients healthier longer."
              icon={<SupportIcon className="h-7 w-7 text-accent" />}
              link="/services#advanced-primary-care-management"
            />

            <ServiceCard
              title="Preventative Care"
              description="Education, screenings, and lifestyle programs designed to prevent illness and detect health issues early."
              icon={
                <svg className="h-7 w-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l8 4v6c0 5-3 9-8 11-5-2-8-6-8-11V6l8-4z" />
                </svg>
              }
              link="/services#preventative-care"
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary relative overflow-hidden" id="contact">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to transform patient care?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Get in touch to discover how Advantis can extend your care beyond the 
            four walls of your facility.
            </p>
            <Button href="/contact" size="lg" variant="secondary" className="px-10 py-4">
              Get Started Today
            </Button>
          </div>
        </div>

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
      </section>
    </>
  );
}
