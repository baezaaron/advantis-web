'use client';

import { useEffect, useRef, useState, ReactNode, useCallback } from 'react';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import Button from '@/components/Button';
import { HeartPulseIcon, TechIcon, SupportIcon, EducationIcon } from '@/components/icons';
import CustomImage from '@/components/Image';
import FadeInSection from '@/components/FadeInSection';

// Professional medical icons for How It Works section
function SetupIcon({ className = 'h-16 w-16' }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
    </svg>
  );
}

function MonitorIcon({ className = 'h-16 w-16' }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  );
}

function AlertIcon({ className = 'h-16 w-16' }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
    </svg>
  );
}

function CareIcon({ className = 'h-16 w-16' }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

interface Step {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Initial Assessment & Setup',
    description: 'We work health centers to identify patients who would benefit from remote monitoring. Once identified, our services are prescribed and we begin the onboarding process.',
    icon: <SetupIcon />,
  },
  {
    number: '02',
    title: 'Onboarding',
    description: 'Our team onboards each patient individually. We review the selected patients\' care plans/records and determine which devices will be deployed directly to the patient.',
    icon: <MonitorIcon />,
  },
  {
    number: '03',
    title: 'Clinical Review & Alerts',
    description: 'Our licensed clinicians then reach out to the patient to walk through their care plan and build out their profile. They review all patient data daily. When readings fall outside normal parameters, we intervene and escalate when appropriate.',
    icon: <AlertIcon />,
  },
  {
    number: '04',
    title: 'Proactive Care & Outcomes',
    description: 'Through continuous monitoring and engagement, we reduce hospitalizations and ED visits, educate patients on their conditions, minimize leakage, and decrease the likelihood of worsening conditions. Resulting in a new stream of revenue and imrpoved UDS and HEDIS scores.',
    icon: <CareIcon />,
  },
];

// FAQ Section Component
function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const faqs = [
    {
      id: 'faq-cost',
      question: 'How much does it cost the center?',
      answer: 'Advantis offers flexible pricing models specific to the type of entity. For CHCs, there are no upfront costs or out of pocket fees.'
    },
    {
      id: 'faq-ehr',
      question: 'How do you integrate with our EHR?',
      answer: 'We integrate seamlessly with major EHR systems through secure, HIPAA-compliant APIs. Our team works directly with your IT department to ensure smooth integration, allowing patient data to flow automatically between systems. We support most major EHR platforms and can customize integration to meet your specific workflow needs.'
    },
    {
      id: 'faq-documentation',
      question: 'What documentation will be provided to demonstrate compliance with HRSA, CMS, and OIG guidance?',
      answer: 'We provide a comprehensive audit trail within our platform that is readily available for export and sharing. This includes detailed service logs, patient interaction records, clinical documentation, billing compliance reports.'
    },
    {
      id: 'faq-continuity',
      question: 'How is continuity of care ensured between Advantis\'s team and our primary care providers?',
      answer: 'We maintain open, continuous communication channels with your primary care team. All patient data, alerts, and interventions are shared in real-time through your EHR and direct communication protocols. Our clinicians coordinate closely with your providers, ensuring seamless handoffs and collaborative care planning.'
    },
    {
      id: 'faq-staffing',
      question: 'What staffing does a center need?',
      answer: 'No additional staffing is required. Advantis provides the clinical monitoring team, care coordinators, and support staff. Your center solely handles the billing process. We handle the day-to-day monitoring and intervention work.'
    },
    {
      id: 'faq-language',
      question: 'Is the service language-inclusive?',
      answer: 'Yes, we offer multilingual support to serve diverse patient populations. Our team is made up of multi-lingual clinicians, and we provide materials and communication in multiple languages. We work with you to identify the languages most needed in your community.'
    },
    {
      id: 'faq-financial',
      question: 'How does partnering with Advantis impact our long-term financial sustainability?',
      answer: 'Our partnership is designed to improve your financial health through new revenue streams, reduced leakage, and improved UDS/HEDIS scores. We help you capture billable services that might otherwise be missed, reduce emergency department utilization, and improve quality metrics that impact reimbursement.'
    },
    {
      id: 'faq-engagement',
      question: 'How do you ensure engagement among high-barrier patients (e.g., low literacy, poor tech access)?',
      answer: 'We use a multi-faceted approach including low-tech device options, phone-based support, in-person visits when needed, culturally competent communication, and simplified educational materials. Our team is trained to work with patients facing various barriers and adapts our approach to meet each patient where they are.'
    },
    {
      id: 'faq-scale',
      question: 'Can we scale the program down or up depending on performance and need?',
      answer: 'Absolutely. Our programs are designed to be flexible and scalable. You can adjust patient volume, add or remove services, and modify the scope of engagement based on your needs and performance metrics. We provide regular reporting to help you make informed decisions about scaling.'
    },
    {
      id: 'faq-devices',
      question: 'What types of remote monitoring devices do you provide?',
      answer: 'We provide a range of FDA-approved devices including blood pressure monitors, weight scales, glucometers, pulse oximeters, and more. Device selection is customized based on each patient\'s condition and care plan. All devices are user-friendly and include setup support.'
    },
  ];

  const handleToggle = useCallback((faqId: string) => {
    setOpenId((prevId) => {
      // If clicking the same FAQ that's open, close it
      if (prevId === faqId) {
        return null;
      }
      // Otherwise, open only the clicked FAQ (this automatically closes any previously open FAQ)
      return faqId;
    });
  }, []);

  // Split FAQs into two columns for staggered layout
  const leftColumn = faqs.filter((_, index) => index % 2 === 0);
  const rightColumn = faqs.filter((_, index) => index % 2 === 1);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 md:items-start">
      {/* Left Column */}
      <div className="flex flex-col gap-6 md:gap-8">
        {leftColumn.map((faq) => {
          const isItemOpen = openId === faq.id;
          
          return (
            <div
              key={faq.id}
              id={faq.id}
              className="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden transition-all duration-200 hover:shadow-md min-h-[80px]"
            >
              <button
                id={`${faq.id}-button`}
                className="w-full px-8 py-6 text-left flex justify-between items-start gap-4 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-inset"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleToggle(faq.id);
                }}
                aria-expanded={isItemOpen}
                aria-controls={`${faq.id}-content`}
                type="button"
              >
                <span className="text-base md:text-lg font-medium text-primary flex-1 pr-4 text-left">
                  {faq.question}
                </span>
                <svg
                  className={`h-5 w-5 text-accent flex-shrink-0 transform transition-transform duration-200 mt-1 ${
                    isItemOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                id={`${faq.id}-content`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isItemOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6 pt-0">
                  <p className="text-neutral-700 leading-relaxed text-left">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-6 md:gap-8">
        {rightColumn.map((faq) => {
          const isItemOpen = openId === faq.id;
          
          return (
            <div
              key={faq.id}
              id={faq.id}
              className="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden transition-all duration-200 hover:shadow-md min-h-[80px]"
            >
              <button
                id={`${faq.id}-button`}
                className="w-full px-8 py-6 text-left flex justify-between items-start gap-4 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-inset"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleToggle(faq.id);
                }}
                aria-expanded={isItemOpen}
                aria-controls={`${faq.id}-content`}
                type="button"
              >
                <span className="text-base md:text-lg font-medium text-primary flex-1 pr-4 text-left">
                  {faq.question}
                </span>
                <svg
                  className={`h-5 w-5 text-accent flex-shrink-0 transform transition-transform duration-200 mt-1 ${
                    isItemOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                id={`${faq.id}-content`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isItemOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6 pt-0">
                  <p className="text-neutral-700 leading-relaxed text-left">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function HowItWorksTimelineSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [stepOpacities, setStepOpacities] = useState<number[]>([0, 0, 0, 0]);
  const [lineProgress, setLineProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionTop = sectionRect.top + window.scrollY;
      const sectionHeight = sectionRect.height;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const viewportTop = scrollY;
      const viewportBottom = scrollY + windowHeight;
      const viewportCenter = scrollY + windowHeight / 2;

      // Update opacities - INCREASE as you scroll down
      const newOpacities = stepRefs.current.map((stepRef, index) => {
        if (!stepRef) return 0;

        const stepRect = stepRef.getBoundingClientRect();
        const stepTopRelative = stepRect.top; // Relative to viewport top
        const stepBottomRelative = stepRect.bottom; // Relative to viewport bottom
        const stepHeight = stepRect.height;
        
        // Start fading in as soon as step enters viewport (when top is visible)
        // Fully visible when step is 30% into viewport
        const fadeStartPoint = windowHeight; // When step top enters viewport
        const fadeEndPoint = windowHeight * 0.7; // Fully visible at 70% of viewport
        
        if (stepTopRelative <= fadeEndPoint && stepTopRelative >= -stepHeight) {
          // Step is well into viewport - fully visible
          return 1;
        } else if (stepTopRelative <= fadeStartPoint && stepTopRelative >= -stepHeight) {
          // Step is entering viewport - fade in smoothly
          const fadeRange = fadeStartPoint - fadeEndPoint;
          if (fadeRange <= 0) return 1;
          const progress = (fadeStartPoint - stepTopRelative) / fadeRange;
          return Math.min(1, Math.max(0, progress));
        } else {
          // Step hasn't entered viewport yet
          return 0;
        }
      });

      setStepOpacities(newOpacities);

      // Determine active step based on scroll position
      let closestStep = 0;
      let minDistance = Infinity;

      stepRefs.current.forEach((stepRef, index) => {
        if (!stepRef) return;
        const stepRect = stepRef.getBoundingClientRect();
        const stepCenterRelative = stepRect.top + stepRect.height / 2;
        const distance = Math.abs(stepCenterRelative - windowHeight / 2);
        
        if (distance < minDistance) {
          minDistance = distance;
          closestStep = index;
        }
      });

      setActiveStep(closestStep);

      // Calculate line progress - percentage of line that should be blue
      // The blue portion should extend to the center of the active step
      const activeStepRef = stepRefs.current[closestStep];
      if (activeStepRef && sectionRef.current) {
        const activeStepRect = activeStepRef.getBoundingClientRect();
        const activeStepTopRelative = activeStepRect.top - sectionRect.top; // Relative to section
        const activeStepCenterRelative = activeStepTopRelative + activeStepRect.height / 2;
        const progress = Math.min(1, Math.max(0, activeStepCenterRelative / sectionHeight));
        setLineProgress(progress);
      } else {
        setLineProgress(0);
      }
    };

    // Throttled scroll handler
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    // Initial call with a delay to ensure DOM is ready
    const timeoutId = setTimeout(handleScroll, 200);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Around the Clock Care
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              How It Works
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line - Gray Background */}
            <div 
              className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-neutral-300"
            />
            
            {/* Vertical Line - Blue Progress */}
            <div 
              ref={lineRef}
              className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 w-0.5 bg-accent transition-all duration-500 ease-out z-10"
              style={{ 
                height: `${Math.max(0, lineProgress * 100)}%`,
                minHeight: lineProgress > 0 ? '2px' : '0px',
              }}
            />

            {/* Steps */}
            <div className="space-y-24 md:space-y-40">
              {steps.map((step, index) => {
                const isEven = index % 2 === 0;
                const isLeft = isEven;
                
                return (
                  <div
                    key={index}
                    ref={(el) => {
                      if (el) stepRefs.current[index] = el;
                    }}
                    className="relative"
                  >
                    <div className={`flex flex-col md:flex-row items-start gap-6 md:gap-8 ${
                      isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}>
                      {/* Left/Right Content (Words + Number) */}
                      <div className={`flex-1 pl-16 md:pl-0 ${isLeft ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'} md:w-5/12`}>
                        <div className="transition-all duration-700" style={{ opacity: stepOpacities[index] }}>
                          {/* Large Step Number - With words */}
                          <div 
                            className={`text-[60px] md:text-[140px] font-bold mb-4 ${isLeft ? 'md:text-right' : 'md:text-left'} ${
                              index <= activeStep ? 'text-accent/15' : 'text-neutral-200'
                            }`}
                          >
                            {step.number}
                          </div>
                          
                          {/* Title */}
                          <h3 
                            className="text-xl md:text-3xl font-bold text-primary mb-3 md:mb-4"
                          >
                            {step.title}
                          </h3>
                          
                          {/* Description */}
                          <p 
                            className="text-base md:text-lg text-neutral-700 leading-relaxed"
                          >
                            {step.description}
                          </p>
                        </div>
                      </div>

                      {/* Center: Timeline Line Spacer - Hidden on mobile since line is absolute */}
                      <div className="hidden md:block relative z-10 flex-shrink-0 w-16 flex items-center justify-center">
                        {/* This space is for the line */}
                      </div>

                      {/* Right/Left Content (Icon) - Opposite side of words - Hidden on mobile */}
                      <div className={`hidden md:flex flex-1 ${isLeft ? 'md:text-left md:pl-8 md:justify-start' : 'md:text-right md:pr-8 md:justify-end'} md:w-5/12 items-center justify-center`}>
                        <div 
                          className="transition-opacity duration-700 inline-flex items-center justify-center"
                          style={{ opacity: stepOpacities[index] }}
                        >
                          {/* Professional Icon - Larger and centered with numbers */}
                          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full border-2 border-accent bg-accent/5 text-accent flex items-center justify-center p-4">
                            {step.icon}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      {/* Mission Section with Image */}
      <FadeInSection>
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
            {/* Left Side - Text Content */}
            <div className="order-2 lg:order-1">
              {/* Preamble */}
              <p className="text-base md:text-lg font-semibold text-accent uppercase tracking-wider mb-3">
                Our Mission
              </p>
              
              {/* Main Mission Statement */}
              <h2 className="text-1xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-primary mb-6 leading-tight">
                Extend quality healthcare in between visits to underserved communities through proactive, data-informed care
              </h2>
              
              {/* Body Text with Highlighted Portion */}
              <p className="text-base md:text-lg lg:text-xl text-neutral-700 mb-8 leading-relaxed">
                Advantis will serve as <span className="text-accent font-semibold">an extension of care</span> that improves patient engagement, reduces total costs, and enables more streamlined, coordinated care.
              </p>
              
              <Button href="/about" variant="outline" className="px-8">
                Learn About Our Approach
              </Button>
            </div>
            
            {/* Right Side - Image */}
            <div className="order-1 lg:order-2 flex items-center justify-center">
              <div className="relative w-full h-64 md:h-80 lg:h-96 xl:h-[500px] max-w-lg mx-auto">
                <CustomImage
                  src="/images/caretaking.jpg"
                  alt="Healthcare professionals providing compassionate care"
                  width={600}
                  height={500}
                  className="w-full h-full object-cover rounded-3xl shadow-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      </FadeInSection>
      
      {/* Services Section */}
      <FadeInSection>
      <section className="section bg-neutral-100" id="services">
        <div className="container">
          <div className="section-header">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              What We Do
            </h2>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
              Our comprehensive approach combines technology with compassionate
              care to address the unique needs of each patient.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <ServiceCard
              title="Remote Patient Monitoring"
              description="Continuous monitoring of vital signs and health metrics from the comfort of home, with real-time alerts managed by our clinicians."
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
              title="Chronic Care Management"
              description="Education, screenings, and care plans designed to prevent illness and detect health issues early."
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
      </FadeInSection>
      
      {/* How It Works Section */}
      <HowItWorksTimelineSection />
      
      {/* FAQ Section */}
      <FadeInSection>
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-12">
            Frequently Asked Questions
          </h2>
          
          <FAQSection />
        </div>
      </section>
      </FadeInSection>
      
      {/* CTA Section */}
      <FadeInSection>
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
      </FadeInSection>
    </>
  );
}
