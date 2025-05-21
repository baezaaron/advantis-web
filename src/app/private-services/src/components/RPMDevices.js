import React from 'react';

const RPMDevices = () => {
  const devices = [
    {
      name: 'Blood Pressure Monitor',
      description: 'Track your blood pressure readings automatically and share them with your healthcare provider in real-time.',
      icon: '🫀'
    },
    {
      name: 'Pulse Oximeter',
      description: 'Monitor your blood oxygen levels and heart rate to ensure optimal respiratory health.',
      icon: '💓'
    },
    {
      name: 'Glucometer',
      description: 'Keep track of your blood glucose levels with easy-to-use digital monitoring.',
      icon: '🩸'
    },
    {
      name: 'Smart Scale',
      description: 'Monitor your weight and body composition changes over time.',
      icon: '⚖️'
    },
    {
      name: 'Digital Thermometer',
      description: 'Track your body temperature with precise digital readings.',
      icon: '🌡️'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            RPM Devices for Better Health Monitoring
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Our comprehensive suite of medical devices helps you track vital health metrics from the comfort of your home.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {devices.map((device, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{device.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {device.name}
                </h3>
                <p className="text-gray-600">
                  {device.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RPMDevices; 