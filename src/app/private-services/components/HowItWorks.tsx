export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Easy Setup',
      description: 'Receive your monitoring device in the mail. Setup takes just minutes with our simple instructions.',
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Daily Monitoring',
      description: 'Take your readings daily. The device automatically sends your data to our monitoring center.',
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Professional Care',
      description: 'Our nurses review your readings and reach out if there are any concerns.',
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            How It Works
          </h2>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
            Getting started with remote patient monitoring is simple and straightforward.
            Here's what to expect:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-neutral-50 rounded-xl p-8 text-center relative"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  {step.number}
                </div>
              </div>
              
              <div className="text-accent mb-4 flex justify-center">
                {step.icon}
              </div>
              
              <h3 className="text-xl font-bold text-primary mb-3">
                {step.title}
              </h3>
              
              <p className="text-neutral-700">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 