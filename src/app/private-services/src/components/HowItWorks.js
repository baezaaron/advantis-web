import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const steps = [
  {
    id: 1,
    title: 'Sign Up',
    description: 'Choose your plan and create an account in minutes.',
    icon: CheckCircleIcon,
  },
  {
    id: 2,
    title: 'Receive Your Device(s)',
    description: 'We ship your RPM device(s) directly to your doorstep.',
    icon: CheckCircleIcon,
  },
  {
    id: 3,
    title: 'Monitor & Connect',
    description: 'Track your vitals and stay connected with healthcare professionals.',
    icon: CheckCircleIcon,
  },
];

function HowItWorks() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Getting started with remote patient monitoring is simple and straightforward.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.id}
                className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <step.icon
                      className="h-8 w-8 text-primary-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks; 