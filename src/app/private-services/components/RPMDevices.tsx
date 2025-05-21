export default function RPMDevices() {
  const devices = [
    {
      name: 'Blood Pressure Monitor',
      description: 'Bluetooth blood pressure monitor that automatically syncs readings to your care team.',
      features: [
        'Automatic data transmission',
        'Irregular heartbeat detection',
        'Memory for multiple users',
        'Large, easy-to-read display',
      ],
      image: '/images/beurer-BC57.jpg',
    },
    {
      name: 'Pulse Oximeter',
      description: 'Track your blood oxygen levels and heart rate with our easy-to-use bluetooth pulse oximeter.',
      features: [
        'Instant readings',
        'Battery powered',
        'Compact and portable',
        'Automatic data sync',
      ],
      image: '/images/beurer-P060.jpg',
    },
    {
      name: 'Glucose Monitor',
      description: 'Bluetooth glucose monitor that automatically syncs readings to your care team.',
      features: [
        'Real-time blood sugar level monitoring',
        'Improved A1C and trend tracking',
        'Refillable test strips',
        'Automatic data sync',
      ],
      image: '/images/OhCare-Lite.jpg',
    },
  ];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Monitoring Devices
          </h2>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
            We provide state-of-the-art monitoring devices that are easy to use and automatically sync with our system.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {devices.map((device, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="flex justify-center items-center" style={{ minHeight: '256px', height: '256px' }}>
                <img
                  src={device.image}
                  alt={device.name}
                  className="object-contain h-56 w-auto"
                  style={{ maxHeight: '224px' }}
                />
              </div>
              <div className="p-6 flex flex-col flex-1 text-left">
                <h3 className="text-xl font-bold text-primary mb-3">
                  {device.name}
                </h3>
                <p className="text-neutral-700 mb-4">
                  {device.description}
                </p>
                <ul className="space-y-2">
                  {device.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-neutral-700">
                      <svg className="h-5 w-5 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 