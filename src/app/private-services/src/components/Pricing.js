import React from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';

const plans = [
  {
    name: 'Basic',
    price: 49,
    description: 'Perfect for individuals who need basic health monitoring.',
    features: [
      'RPM device included',
      'Monthly health reports',
      'Basic support',
      'Mobile app access',
      'Data storage for 6 months',
    ],
  },
  {
    name: 'Premium',
    price: 99,
    description: 'Ideal for those who need comprehensive monitoring and support.',
    features: [
      'Everything in Basic',
      '24/7 support',
      'Priority alerts',
      'Extended data storage',
      'Family member access',
      'Monthly health consultations',
    ],
    featured: true,
  },
];

function Pricing() {
  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Choose the plan that best fits your needs. All plans include our RPM device.
          </p>
        </div>

        <div className="mt-16 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 bg-white border rounded-2xl shadow-sm flex flex-col ${
                plan.featured ? 'border-primary-500' : 'border-gray-200'
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2">
                  <span className="inline-flex rounded-full bg-primary-600 px-4 py-1 text-sm font-semibold text-white">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                <p className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-extrabold tracking-tight">${plan.price}</span>
                  <span className="ml-1 text-xl font-semibold">/month</span>
                </p>
                <p className="mt-6 text-gray-500">{plan.description}</p>

                <ul className="mt-6 space-y-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex">
                      <CheckIcon
                        className="flex-shrink-0 w-6 h-6 text-primary-500"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <a
                  href="#signup"
                  className={`block w-full rounded-md border border-transparent px-6 py-3 text-center font-medium ${
                    plan.featured
                      ? 'bg-primary-600 text-white hover:bg-primary-700'
                      : 'bg-primary-50 text-primary-700 hover:bg-primary-100'
                  }`}
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing; 