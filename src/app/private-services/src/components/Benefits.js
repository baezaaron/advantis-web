import React from 'react';
import {
  ShieldCheckIcon,
  ClockIcon,
  HomeIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

const benefits = [
  {
    name: 'Continuous Monitoring',
    description: '24/7 health monitoring ensures you never miss important changes in your vital signs.',
    icon: ClockIcon,
  },
  {
    name: 'Early Detection',
    description: 'Identify potential health issues before they become serious problems.',
    icon: ChartBarIcon,
  },
  {
    name: 'At-Home Convenience',
    description: 'Monitor your health from the comfort of your own home, reducing unnecessary hospital visits.',
    icon: HomeIcon,
  },
  {
    name: 'Secure Data',
    description: 'Your health data is protected with enterprise-grade security and privacy measures.',
    icon: ShieldCheckIcon,
  },
];

function Benefits() {
  return (
    <div id="benefits" className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose Our RPM Service?
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Experience the benefits of professional health monitoring from the comfort of your home.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.name}
                className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <benefit.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">
                    {benefit.name}
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits; 