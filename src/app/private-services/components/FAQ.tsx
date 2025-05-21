'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Is the RPM device easy to use?',
      answer: 'Yes! Our RPM device is designed with user-friendliness in mind. It features a simple interface and clear instructions. Most patients can start using it within minutes of unboxing.'
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Absolutely. We believe in flexibility and transparency. You can cancel your subscription at any time without any hidden fees or penalties.'
    },
    {
      question: 'Is my health data secure?',
      answer: 'Yes, we take data security very seriously. All health data is encrypted, stored securely, and protected in compliance with HIPAA regulations. We never share your data with third parties without your explicit consent.'
    },
    {
      question: 'How often do I need to take readings?',
      answer: 'The frequency of readings depends on your specific health needs and care plan. Typically, patients take readings once or twice daily, but your healthcare provider will determine the appropriate schedule for you.'
    },
    {
      question: 'What happens if there\'s an emergency?',
      answer: 'Our monitoring center is staffed 24/7 by trained healthcare professionals. If they detect any concerning readings, they will immediately contact you and, if necessary, your emergency contacts or local emergency services.'
    },
    {
      question: 'Do I need technical expertise to use the service?',
      answer: 'No technical expertise is required. Our devices are designed to be user-friendly, and our team provides comprehensive setup support. We also offer ongoing technical support whenever you need it.'
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
            Find answers to common questions about our remote patient monitoring service.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-neutral-200 last:border-0"
            >
              <button
                className="w-full py-6 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-primary">
                  {faq.question}
                </span>
                <svg
                  className={`h-6 w-6 text-accent transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-neutral-700">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 