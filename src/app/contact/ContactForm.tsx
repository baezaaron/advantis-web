"use client";
import { useState, useEffect } from 'react';
import { MedicalIcon, SupportIcon } from '@/components/icons';
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';
const RecaptchaWidget = dynamic(
  () => import('@/components/RecaptchaWidget'),
  { ssr: false, loading: () => null }
);

export default function ContactForm() {
  const searchParams = useSearchParams();
  const emailFromQuery = searchParams?.get('email') || '';
  const [formData, setFormData] = useState({
    name: '',
    email: emailFromQuery,
    phone: '',
    serviceType: '',
    message: '',
    howDidYouFindUs: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (emailFromQuery) {
      setFormData((prev) => ({ ...prev, email: emailFromQuery }));
    }
  }, [emailFromQuery]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Integration with Formspree
      const response = await fetch('https://formspree.io/f/xyzwkdrz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          serviceType: '',
          message: '',
          howDidYouFindUs: '',
        });
      } else {
        setError('There was an error submitting the form.');
      }
    } catch (err) {
      setError('There was an error submitting the form.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-md">
      <h2 className="text-2xl font-heading font-bold text-primary mb-6">
        Send Us a Message
      </h2>
      {isSubmitted ? (
        <div className="bg-green-50 text-green-700 p-4 rounded-lg">
          <p className="font-medium">Thank you for reaching out!</p>
          <p className="mt-2">Your message has been received, and a member of our team will contact you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                Your Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                Email Address*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>
          <div>
            <label htmlFor="howDidYouFindUs" className="block text-sm font-medium text-neutral-700 mb-1">
              How did you find us?
            </label>
            <select
              id="howDidYouFindUs"
              name="howDidYouFindUs"
              value={formData.howDidYouFindUs}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-accent"
              required
            >
              <option value="" disabled>Select an option</option>
              <option value="Google Search">Google Search</option>
              <option value="Social Media">Social Media</option>
              <option value="Referral">Referral</option>
              <option value="Event/Conference">Event/Conference</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(555) 123-4567"
                className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label htmlFor="Service Type" className="block text-sm font-medium text-neutral-700 mb-1">
                Service Type
              </label>
              <input
                type="text"
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                placeholder="Provider or Patient"
                className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
              Your Message*
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we help you?"
              required
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          {error && (
            <div className="text-red-600 text-sm">{error}</div>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-accent hover:bg-accent/90 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 disabled:opacity-70"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          <div className="mt-4">
            <RecaptchaWidget siteKey="6LepWCorAAAAACKOTeqIfRkulqMHijMDkpvqm8fO" />
          </div>
          <p className="text-xs text-neutral-500 mt-4">
            By submitting this form, you agree to our <a href="/privacy-policy" className="text-accent hover:underline">privacy policy</a>.
          </p>
        </form>
      )}
    </div>
  );
} 