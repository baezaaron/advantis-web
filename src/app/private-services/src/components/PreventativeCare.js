import React from 'react';
import { HeartIcon } from '@heroicons/react/24/solid';

function PreventativeCare() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary-100">
            <HeartIcon className="h-8 w-8 text-primary-600" aria-hidden="true" />
          </span>
        </div>
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-2">
          The Power of Preventative Care
        </h2>
        <h3 className="text-xl text-primary-700 font-semibold mb-4">
          Why Continuous Monitoring Beats Traditional Checkups
        </h3>
        <p className="text-lg text-gray-600 mb-10">
          Traditional checkups only capture your health at a single point in time. With Remote Patient Monitoring, your vital signs are tracked every day, providing a complete picture of your health. This allows for early detection of issues, more personalized care, and peace of mind—helping you stay healthier, longer.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="flex items-center justify-center bg-primary-50 rounded-xl px-8 py-8 shadow-lg min-w-[260px] min-h-[120px] text-center">
            <span className="text-primary-700 font-bold text-lg">Detect health changes before symptoms appear</span>
          </div>
          <div className="flex items-center justify-center bg-primary-50 rounded-xl px-8 py-8 shadow-lg min-w-[260px] min-h-[150px] text-center">
            <span className="text-primary-700 font-bold text-lg">Avoid unnecessary hospital visits</span>
          </div>
          <div className="flex items-center justify-center bg-primary-50 rounded-xl px-8 py-8 shadow-lg min-w-[260px] min-h-[120px] text-center">
            <span className="text-primary-700 font-bold text-lg">Get personalized feedback based on real data</span>
          </div>
          <div className="flex items-center justify-center bg-primary-50 rounded-xl px-8 py-8 shadow-lg min-w-[260px] min-h-[120px] text-center">
            <span className="text-primary-700 font-bold text-lg">Empower yourself with knowledge about your health</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreventativeCare; 