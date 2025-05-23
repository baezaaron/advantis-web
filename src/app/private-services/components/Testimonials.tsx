export default function Testimonials() {
  const testimonials = [
    {
      quote: "The peace of mind I get from knowing someone is monitoring my health 24/7 is priceless. The nurses are always responsive and caring.",
      author: "Sarah M.",
      role: "Diabetes Patient",
      image: "/images/older-woman.png"
    },
    {
      quote: "Since starting remote monitoring, I've been able to show my specialists my blood pressure, glucose, and oxygen levels. The devices are so easy to use.",
      author: "Nelson L.",
      role: "Hypertension, Diabetes, and CHF Patient",
      image: "/images/nelson.jpg"
    },
    {
      quote: "As a family caregiver, this service has been a game-changer. I can focus on my work knowing my mother is being monitored professionally.",
      author: "Michelle R.",
      role: "Family Caregiver",
      image: "/images/daughter.png"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our patients have to say about their experience with remote monitoring.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="font-bold text-primary">{testimonial.author}</div>
                  <div className="text-sm text-neutral-600">{testimonial.role}</div>
                </div>
              </div>
              <blockquote className="text-neutral-700 italic text-left">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 