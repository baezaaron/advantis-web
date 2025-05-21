import React, { useState } from 'react';

function LeadCapture() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    plan: 'basic',
    about: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Custom handler to show thank you message after Formspree submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
        } else {
          alert('There was a problem submitting your form. Please try again.');
        }
      })
      .catch(() => {
        alert('There was a problem submitting your form. Please try again.');
      });
  };

  return (
    <div id="contact-form" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Start Your Health Journey Today
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Fill out the form below to begin your journey today. No credit card required.
            </p>
          </div>

          {submitted ? (
            <div className="mt-12 text-center bg-green-50 border border-green-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-green-700 mb-2">Thank you!</h3>
              <p className="text-lg text-green-800">Someone from our team will reach out to you shortly to discuss your needs and next steps.</p>
            </div>
          ) : (
            <form
              action="https://formspree.io/f/xjkwzrdz"
              method="POST"
              className="mt-12 space-y-6"
              onSubmit={handleSubmit}
            >
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>

              <div>
                <label htmlFor="plan" className="block text-sm font-medium text-gray-700">
                  Select Plan of Interest
                </label>
                <select
                  name="plan"
                  id="plan"
                  required
                  value={formData.plan}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                >
                  <option value="basic">Basic Plan - $49/month</option>
                  <option value="premium-month">Premium (Month-to-Month) - $99/month</option>
                  <option value="premium-annual">Premium (Annual) - $89/month (billed annually)</option>
                </select>
              </div>

              <div>
                <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                  About You (optional)
                </label>
                <textarea
                  name="about"
                  id="about"
                  rows={4}
                  value={formData.about}
                  onChange={handleChange}
                  placeholder="Tell us about your health condition, medications, or anything you'd like us to know."
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Get Started
                </button>
              </div>

              <p className="text-center text-sm text-gray-500">
                By signing up, you agree to our{' '}
                <a href="/terms" className="font-medium text-primary-600 hover:text-primary-500">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="/privacy" className="font-medium text-primary-600 hover:text-primary-500">
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default LeadCapture; 