import React from 'react';

const testimonials = [
  {
    content: "Since using this RPM service, I feel more in control of my health. The device is easy to use, and the support team is always available when I need them.",
    author: "Jane D.",
    role: "Diabetes Patient",
  },
  {
    content: "The peace of mind I get from knowing my health is being monitored 24/7 is priceless. It's like having a doctor at home without the hassle of constant visits.",
    author: "Michael R.",
    role: "COPD Patient",
  },
  {
    content: "As someone with multiple chronic conditions, this service has been a game-changer. The early alerts have helped prevent several potential complications.",
    author: "Sarah M.",
    role: "Multiple Conditions",
  }
];

function Testimonials() {
  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Patients Say
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Don't just take our word for it - hear from our satisfied patients.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4">
                  <h4 className="text-lg font-medium text-gray-900">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials; 