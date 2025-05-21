import React, { useState } from 'react';
import { CheckCircleIcon, ShieldCheckIcon } from '@heroicons/react/24/solid';

const abHeadlines = [
  'Your Health. Your Home. Your Monitoring.',
  'Affordable Remote Patient Monitoring Starts Here',
  'Stay Connected to Care — Anytime, Anywhere',
  'Join Thousands Taking Control of Their Health from Home',
];

const abCtas = [
  'Get Started — Risk Free',
  'Save $120 – Join Now',
  'Start Monitoring My Health',
  'Claim 10% Off – Annual Plan',
];

const valueProps = [
  'Track your vitals. Talk to a nurse. Stay ahead of chronic conditions — without leaving your home.',
  'RPM that actually works: Simple setup, affordable pricing, and real-time peace of mind.',
];

function PricingComparison() {
  // For demo, just use the first headline, CTA, and value prop
  const [headlineIndex] = useState(0);
  const [ctaIndex] = useState(0);
  const [annualCtaIndex] = useState(3); // "Claim 10% Off – Annual Plan"
  const [valuePropIndex] = useState(0);

  return (
    <div className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* A/B Test Headline */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
          {abHeadlines[headlineIndex]}
        </h1>
        {/* Value Proposition */}
        <p className="text-lg text-gray-600 mb-8">
          {valueProps[valuePropIndex]}
        </p>
        {/* Trust Badges */}
        <div className="flex justify-center gap-4 mb-8">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-semibold">
            <ShieldCheckIcon className="h-4 w-4 mr-1 text-green-500" /> HIPAA-compliant
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-semibold">
            30-Day Guarantee
          </span>
        </div>
        {/* Pricing Table */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 items-stretch">
          {/* Basic Plan */}
          <div className="flex flex-col border rounded-2xl bg-white shadow-lg p-8 relative items-center h-full">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Basic</h2>
            <div className="flex items-end justify-center mb-2">
              <span className="text-4xl font-extrabold text-gray-900">$49</span>
              <span className="ml-1 text-lg text-gray-500">/month</span>
            </div>
            <div className="text-sm text-gray-500 mb-4">Best for individuals who need basic health monitoring.</div>
            <ul className="mb-6 space-y-2 text-left">
              <li className="flex items-center"><CheckCircleIcon className="h-5 w-5 text-primary-600 mr-2" />RPM device included</li>
              <li className="flex items-center"><CheckCircleIcon className="h-5 w-5 text-primary-600 mr-2" />Monthly health reports</li>
              <li className="flex items-center"><CheckCircleIcon className="h-5 w-5 text-primary-600 mr-2" />Basic support</li>
              <li className="flex items-center"><CheckCircleIcon className="h-5 w-5 text-primary-600 mr-2" />Mobile app access</li>
              <li className="flex items-center"><CheckCircleIcon className="h-5 w-5 text-primary-600 mr-2" />Data storage for 6 months</li>
            </ul>
            <a
              href="#contact-form"
              className="w-full py-3 px-4 rounded-md bg-primary-600 text-white font-semibold text-base hover:bg-primary-700 transition mt-auto flex justify-center items-center text-center"
            >
              Get Started
            </a>
          </div>
          {/* Premium Plan (Month-to-Month) */}
          <div className="flex flex-col border rounded-2xl bg-white shadow-lg p-8 relative items-center h-full">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Premium (Month-to-Month)</h2>
            <div className="flex items-end justify-center mb-2">
              <span className="text-4xl font-extrabold text-gray-900">$99</span>
              <span className="ml-1 text-lg text-gray-500">/month</span>
            </div>
            <div className="text-sm text-gray-500 mb-4">Total annual cost: $1,200</div>
            <ul className="mb-6 space-y-2 text-left">
              <li className="flex items-center"><CheckCircleIcon className="h-5 w-5 text-primary-600 mr-2" />Everything in Basic</li>
              <li className="flex items-center"><CheckCircleIcon className="h-5 w-5 text-primary-600 mr-2" />24/7 Nurse Access</li>
              <li className="flex items-center"><CheckCircleIcon className="h-5 w-5 text-primary-600 mr-2" />Free Device Setup</li>
              <li className="flex items-center"><CheckCircleIcon className="h-5 w-5 text-primary-600 mr-2" />30-Day Money-Back Guarantee</li>
            </ul>
            <a
              href="#contact-form"
              className="w-full py-3 px-4 rounded-md bg-primary-600 text-white font-semibold text-base hover:bg-primary-700 transition mt-auto flex justify-center items-center text-center"
            >
              {abCtas[ctaIndex]}
            </a>
          </div>
          {/* Premium Plan (Annual) */}
          <div className="flex flex-col border-2 border-primary-600 rounded-2xl bg-white shadow-xl p-8 relative items-center h-full">
            {/* Most Popular Badge */}
            <span className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 bg-primary-600 text-white text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
              Most Popular
            </span>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Premium (Annual)</h2>
            <div className="flex items-end justify-center mb-2">
              <span className="text-4xl font-extrabold text-gray-900">$89</span>
              <span className="ml-1 text-lg text-gray-500">/month</span>
            </div>
            <div className="text-sm text-gray-500 mb-1">Billed annually: $1,068/year</div>
            <div className="text-sm text-green-600 font-semibold mb-4">Save $132</div>
            <ul className="mb-6 space-y-2 text-left">
              <li className="flex items-center"><CheckCircleIcon className="h-5 w-5 text-primary-600 mr-2" />Everything in Basic</li>
              <li className="flex items-center"><CheckCircleIcon className="h-5 w-5 text-primary-600 mr-2" />24/7 Nurse Access</li>
              <li className="flex items-center"><CheckCircleIcon className="h-5 w-5 text-primary-600 mr-2" />Free Device Setup</li>
              <li className="flex items-center"><CheckCircleIcon className="h-5 w-5 text-primary-600 mr-2" />30-Day Money-Back Guarantee</li>
            </ul>
            <a
              href="#contact-form"
              className="w-full py-3 px-4 rounded-md bg-primary-700 text-white font-semibold text-base hover:bg-primary-800 transition mt-auto flex justify-center items-center text-center"
            >
              {abCtas[annualCtaIndex]}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingComparison; 