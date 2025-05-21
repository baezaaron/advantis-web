import React from 'react';

function Hero() {
  return (
    <div className="relative bg-white overflow-hidden py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-stretch gap-8">
        {/* Text Section */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Monitor Your Health</span>
            <span className="block text-primary-600">from Home with Ease</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl">
            24/7 Remote Patient Monitoring for Chronic Conditions. Take control of your health journey with our easy-to-use monitoring solution.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-start">
            <div className="rounded-md shadow">
              <a
                href="#contact-form"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10"
              >
                Start Your Journey Today
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="#benefits"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 md:py-4 md:text-lg md:px-10"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        {/* Image Section */}
        <div className="flex-1 flex items-center justify-center">
          <img
            className="w-full max-w-md h-full object-cover rounded-xl shadow-xl border-4 border-blue"
            src="/images/hero-image.jpeg"
            alt="Person using RPM device at home"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero; 