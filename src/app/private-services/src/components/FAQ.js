import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: 'Is the RPM device easy to use?',
    answer: 'Yes! Our RPM device is designed with user-friendliness in mind. It features a simple interface and clear instructions. Most patients can start using it within minutes of unboxing.',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Absolutely. We believe in flexibility and transparency. You can cancel your subscription at any time without any hidden fees or penalties.',
  },
  {
    question: 'Is my health data secure?',
    answer: 'Yes, we take data security very seriously. All health data is encrypted, stored securely, and protected in compliance with HIPAA regulations. We never share your data with third parties without your explicit consent.',
  },
  {
    question: 'What happens if the device detects an issue?',
    answer: 'If the device detects any concerning changes in your vital signs, our monitoring system will immediately alert our healthcare team. They will review the data and contact you if necessary, providing guidance or arranging for medical attention if required.',
  },
  {
    question: 'Do I need technical knowledge to use the service?',
    answer: 'No technical knowledge is required. The device is designed to be plug-and-play, and our support team is available to help you with any questions or issues you might have.',
  },
  {
    question: 'What conditions can be monitored?',
    answer: 'Our RPM service can monitor various conditions including diabetes, hypertension, heart disease, COPD, and other chronic conditions. Contact us to discuss your specific needs.',
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Find answers to common questions about our RPM service.
          </p>
        </div>

        <div className="mt-12">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg"
              >
                <button
                  className="w-full px-6 py-4 text-left focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-gray-900">
                      {faq.question}
                    </h3>
                    <ChevronDownIcon
                      className={`h-5 w-5 text-gray-500 transform transition-transform ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-500">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ; 