export default function PreventativeCare() {
  const features = [
    {
      title: 'Daily Health Tracking',
      description: 'Monitor vital signs and health metrics daily to catch changes early.',
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: 'Medication Reminders',
      description: 'Never miss a dose with automated medication reminders and tracking.',
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Lifestyle Guidance',
      description: 'Receive personalized recommendations for diet, exercise, and daily activities.',
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Centered Social Proof */}
        <div className="text-center mb-16">
          <div className="text-6xl font-extrabold text-primary mb-2">100%</div>
          <div className="text-2xl md:text-3xl text-primary mb-2">
            of our patients feel better <span className="italic">supported</span>
          </div>
          <hr className="my-4 border-neutral-200 max-w-xs mx-auto" />
          <div className="uppercase text-xs tracking-widest text-neutral-500">Patient Surveys</div>
        </div>
        {/* Two-column layout: image left, features right */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center items-center">
            <div className="w-full max-w-md aspect-w-5 aspect-h-3 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/hero-image.jpeg"
                alt="Preventative care monitoring"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="text-accent mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-700">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 