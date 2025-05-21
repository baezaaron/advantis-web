export default function PricingComparison() {
  const plans = [
    {
      name: 'Basic',
      price: '$49',
      period: 'per month',
      features: [
        'Remote device monitoring',
        'Device setup and configuration assistance',
        'Monthly health reports',

      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Premium',
      price: '$99',
      period: 'per month',
      features: [
        'Everything in Basic',
        '24/7 nurse monitoring',
        'Priority phone support',
 
      ],
      cta: 'Start Premium',
      popular: false,
    },
    {
      name: 'Premium Annual',
      price: '$89',
      period: 'per month (billed annually)',
      features: [
        '10% off monthly subscription',
        '24/7 nurse monitoring',
        'Priority phone support',
  
      ],
      cta: 'Go Annual & Save',
      popular: true,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
            Choose the plan that fits your needs. No hidden fees. 30-day money-back guarantee.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-xl shadow-sm p-8 flex flex-col items-center border transition-transform duration-300 hover:scale-105 ${
                plan.popular ? 'border-accent shadow-lg z-10 scale-105' : 'border-neutral-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-4 py-1 rounded-full shadow">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-primary mb-2">{plan.name}</h3>
              <div className="flex items-end mb-4">
                <span className="text-4xl font-extrabold text-primary">{plan.price}</span>
                <span className="text-base text-neutral-600 ml-2">{plan.period}</span>
              </div>
              <ul className="mb-8 space-y-2 w-full">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-neutral-700">
                    <svg className="h-5 w-5 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className={`w-full text-center py-3 rounded-lg font-semibold transition-colors duration-200 ${
                  plan.popular
                    ? 'bg-accent text-white hover:bg-accent-dark'
                    : 'bg-primary text-white hover:bg-primary-dark'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center">
          <div className="flex items-center gap-4 mb-2">
            <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-neutral-700 font-medium">30-day money-back guarantee</span>
          </div>
          <div className="flex items-center gap-4">
            <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-neutral-700 font-medium">No hidden fees or contracts</span>
          </div>
        </div>
      </div>
    </section>
  );
} 