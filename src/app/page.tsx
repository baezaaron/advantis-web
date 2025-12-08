'use client';

import { useEffect, useRef, useState, ReactNode, useCallback } from 'react';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import Button from '@/components/Button';
import { HeartPulseIcon, TechIcon, SupportIcon, EducationIcon, UsersIcon } from '@/components/icons';
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
    title: 'Partnership Setup & Integration',
    description: 'We work with your organization to establish the partnership model, integrate with your EHR system, and identify high-risk, high-need patients who would benefit from our services.',
    icon: <SetupIcon />,
  },
  {
    number: '02',
    title: 'Patient Identification & Onboarding',
    description: 'Our team reviews patient records and care plans to determine appropriate services. We handle device provisioning, patient onboarding, and setup—all managed by our clinical and administrative staff.',
    icon: <MonitorIcon />,
  },
  {
    number: '03',
    title: 'Clinical Monitoring & Engagement',
    description: 'Our licensed clinicians review patient data daily, conduct nurse-led interactions, perform SDOH screenings, mobilize community resources, and assist in coordinating care. We intervene when readings fall outside normal parameters and escalate appropriately.',
    icon: <AlertIcon />,
  },
  {
    number: '04',
    title: 'Outcomes & Revenue Generation',
    description: 'Through continuous monitoring and high-frequency engagement, we reduce hospitalizations and ED visits, improve quality metrics (UDS, HEDIS, STAR ratings), and generate new revenue streams/cost savings. You receive structured data insights and documentation for billing.',
    icon: <CareIcon />,
  },
];

// FAQ Section Component
function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const faqs = [
    {
      id: 'faq-pricing',
      question: 'What are your pricing models?',
      answer: 'We offer flexible pricing models tailored to each partner type. For CHCs, there are no upfront costs or out of pocket fees. For health plans and health systems, we offer PMPM (per member per month) models or episodic bundled arrangements. Contact us to discuss which model works best for your organization.'
    },
    {
      id: 'faq-ehr',
      question: 'How do you integrate with our EHR?',
      answer: 'We integrate seamlessly with major EHR systems through secure, HIPAA-compliant APIs. Our team works directly with your IT department to ensure smooth integration, allowing patient data, alerts, and interventions to flow automatically between systems. We support most major EHR platforms and can customize integration to meet your specific workflow needs.'
    },
    {
      id: 'faq-staffing',
      question: 'What staffing does our organization need?',
      answer: 'No additional staffing is required. Advantis provides the complete clinical monitoring team, care coordinators, SDOH navigators, and administrative support staff. We handle device provisioning, patient onboarding, daily monitoring, clinical review, documentation, and patient engagement. For CHCs, your organization solely handles the billing process.'
    },
    {
      id: 'faq-platform',
      question: 'How does your platform replace multiple vendors?',
      answer: 'Advantis functions as a single, vertically-integrated engagement engine that combines remote patient monitoring, chronic care management, SDOH navigation (including PRAPARE screening), care coordination, preventive-care support, medication reconciliation, and appointment scheduling into one coordinated workflow. This eliminates the need to manage multiple fragmented vendors and creates a unified infrastructure for engaging high-risk patients.'
    },
    {
      id: 'faq-sdoh',
      question: 'What SDOH services do you provide?',
      answer: 'We incorporate structured SDOH screening aligned with recognized models (e.g., PRAPARE), then mobilize transportation, food, utilities, housing, and other community resources to reduce barriers to care. Our team conducts assessments, connects patients with appropriate resources, and tracks outcomes to support whole-person care delivery.'
    },
    {
      id: 'faq-data',
      question: 'What kind of data and analytics do you provide?',
      answer: 'We collect highly structured, high-frequency patient-level data across clinical, behavioral, and SDOH domains. This multi-dimensional dataset enables predictive modeling, early-intervention triggers, and population-risk stratification. We provide regular reporting and structured insights that support value-based contracts, quality metric improvement, and population health management.'
    },
    {
      id: 'faq-documentation',
      question: 'What documentation will be provided for compliance and billing?',
      answer: 'We provide a comprehensive audit trail within our platform that is readily available for export and sharing. This includes detailed service logs, patient interaction records, clinical documentation, billing compliance reports, and all necessary documentation for HRSA, CMS, and OIG compliance. All documentation is structured to support your billing processes.'
    },
    {
      id: 'faq-continuity',
      question: 'How is continuity of care ensured between your team and our providers?',
      answer: 'We maintain open, continuous communication channels with your primary care team. All patient data, alerts, and interventions are shared in real-time through your EHR and direct communication protocols. Our clinicians coordinate closely with your providers, ensuring seamless handoffs and collaborative care planning. We function as an extension of your care team, not a replacement.'
    },
    {
      id: 'faq-outcomes',
      question: 'What outcomes can we expect?',
      answer: 'Our platform is designed to improve patient outcomes, enhance quality performance (UDS, HEDIS, STAR ratings), and expand care capacity without increasing internal staffing. Typical outcomes include reduced hospitalizations and ED visits, improved medication adherence, better chronic disease management, reduced readmissions, and new revenue streams from billable services.'
    },
    {
      id: 'faq-scale',
      question: 'Can we scale the program based on performance and need?',
      answer: 'Absolutely. Our programs are designed to be flexible and scalable. You can adjust patient volume, add or remove services, and modify the scope of engagement based on your needs and performance metrics. We provide regular reporting to help you make informed decisions about scaling and can quickly adapt to your changing requirements.'
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
                A value-based extension-of-care service that improves patient outcomes and expands care capacity
              </h2>
              
              {/* Body Text with Highlighted Portion */}
              <p className="text-base md:text-lg lg:text-xl text-neutral-700 mb-8 leading-relaxed">
                Advantis Care integrates <span className="text-accent font-semibold">remote patient monitoring, chronic care management, SDOH navigation, care coordination, and preventive-care support</span> into a unified infrastructure designed to engage and stabilize high-risk, high-need patients at scale without requiring additional internal staffing.
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
              Our Integrated Platform
            </h2>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
              A unified infrastructure that combines remote monitoring, care management, SDOH navigation, and preventive care into one coordinated workflow.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <ServiceCard
              title="RPM + Chronic Care Management"
              description="Full-service operation including device provisioning, patient onboarding, daily monitoring, clinical review, and nurse-led interactions. All handled by our team."
              icon={<HeartPulseIcon className="h-7 w-7 text-accent" />}
              link="/services#remote-patient-monitoring"
            />

            <ServiceCard
              title="SDOH Navigation & Care Coordination"
              description=" Scheduling assistance, structured SDOH screening aligned with recognized models (e.g., PRAPARE), mobilization of transportation, food, utilities, housing, and community resources to reduce barriers to care."
              icon={<UsersIcon className="h-7 w-7 text-accent" />}
              link="/services#advanced-primary-care-management"
            />

            <ServiceCard
              title="Preventive Care & Care-Gap Closure"
              description="Annual Wellness Visit support, HRA completion, chronic condition reviews, medication reconciliation, appointment scheduling, and care-gap closure under your billing umbrella."
              icon={
                <svg className="h-7 w-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l8 4v6c0 5-3 9-8 11-5-2-8-6-8-11V6l8-4z" />
                </svg>
              }
              link="/services#preventative-care"
            />

            <ServiceCard
              title="Data & Analytics"
              description="Multi-dimensional data collection across clinical, behavioral, and SDOH domains enabling predictive modeling, early-intervention triggers, and population-risk stratification."
              icon={<TechIcon className="h-7 w-7 text-accent" />}
              link="/services"
            />
          </div>
        </div>
      </section>
      </FadeInSection>
      
      {/* Who We Serve Section */}
      <FadeInSection>
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Our Partners
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Who We Serve
            </h2>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
              We provide extension-of-care solutions tailored to the unique needs of each partner type
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* FQHCs/CHCs Card */}
            <div className="bg-neutral-50 rounded-lg p-8 shadow-sm border border-neutral-200 hover:shadow-md transition-shadow">
              <div className="mb-6">
                <svg className="h-12 w-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">
                Community Health Centers
              </h3>
              <p className="text-neutral-700 mb-4 leading-relaxed">
                Full-service RPM and CCM operation with device provisioning, patient onboarding, daily monitoring, and clinical documentation. High-touch case management assisting with SDOH navigation and care coordination.
              </p>
              <ul className="text-sm text-neutral-600 space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>No upfront costs or out-of-pocket fees</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Improved UDS and HEDIS scores</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>SDOH screening and navigation</span>
                </li>
              </ul>
              <Button href="/contact" variant="outline" size="sm" className="w-full">
                Learn More
              </Button>
            </div>

            {/* Health Plans Card */}
            <div className="bg-neutral-50 rounded-lg p-8 shadow-sm border border-neutral-200 hover:shadow-md transition-shadow">
              <div className="mb-6">
                <svg className="h-12 w-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">
                Health Plans
              </h3>
              <p className="text-neutral-700 mb-4 leading-relaxed">
                High-frequency engagement, RPM + CCM for members with chronic conditions, SDOH assessments, and preventive-care coordination tied to HEDIS, STAR ratings, and risk adjustment accuracy.
              </p>
              <ul className="text-sm text-neutral-600 space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>HEDIS and STAR ratings improvement</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>AWV and HRA completion</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Reduction in costs across the continuum of care</span>
                </li>
              </ul>
              <Button href="/contact" variant="outline" size="sm" className="w-full">
                Learn More
              </Button>
            </div>

            {/* Health Systems/IPAs Card */}
            <div className="bg-neutral-50 rounded-lg p-8 shadow-sm border border-neutral-200 hover:shadow-md transition-shadow">
              <div className="mb-6">
                <svg className="h-12 w-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">
                Health Systems & IPAs
              </h3>
              <p className="text-neutral-700 mb-4 leading-relaxed">
                Chronic care support, RPM deployment, HEDIS/SDOH workforce augmentation, and post-discharge stabilization to reduce readmissions.
              </p>
              <ul className="text-sm text-neutral-600 space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Post-discharge stabilization</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Reduced readmissions</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Value-based contract support</span>
                </li>
              </ul>
              <Button href="/contact" variant="outline" size="sm" className="w-full">
                Learn More
              </Button>
            </div>
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
              Ready to extend your reach?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Discover how Advantis Care can serve as your extension-of-care service provider, 
            improving patient outcomes and generating new revenue streams, all without adding internal staff.
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
