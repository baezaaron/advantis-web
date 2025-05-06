'use client';

import { useState } from 'react';
import Script from 'next/script';
import Link from 'next/link';
import CustomImage from '@/components/Image';

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Submit to Formspree
      const response = await fetch('https://formspree.io/f/xyzwkdrz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setError('There was an error submitting the form.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentYear = new Date().getFullYear();
  
  return (
    <>
      {/* Load Google reCAPTCHA */}
      <Script src="https://www.google.com/recaptcha/api.js" async defer />
      <footer className="bg-primary text-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Company Info + Contact Form */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-12 gap-10">
              {/* Company Info */}
              <div className="md:col-span-5">
                <Link href="/" className="inline-block mb-6">
                  <div className="relative h-14 w-48">
                    <CustomImage
                      src="/images/Advantis-Logo-White-200.png"
                      alt="Advantis Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </Link>
                <p className="text-neutral-300 mb-4">
                Our lives run on data — healthcare should too.
                </p>
                <div className="flex space-x-4 mb-6">
                  <a href="https://x.com/AdvantisCare" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors" aria-label="X">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </a>
                  <a href="https://linkedin.com/company/advantis-care" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors" aria-label="LinkedIn">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
                <div className="text-neutral-300">
                  <p className="mb-1">1221 Avenue of the Americas </p>
                  <p className="mb-1">Suite 13B</p>
                  <p className="mb-1">New York, NY 10020</p>
                  <p className="mb-4">United States</p>
                  <p className="mb-1">Phone: (212) 470-6966</p>
                  <p>Email: info@advantis.care</p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="md:col-span-7">
                <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1 text-neutral-300">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-accent text-white"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1 text-neutral-300">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-accent text-white"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1 text-neutral-300">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-accent text-white"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-accent hover:bg-accent/90 text-white font-medium px-5 py-2 rounded-lg transition-colors duration-200"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                  {/* Footer reCAPTCHA widget */}
                  <div className="mt-4">
                    <div className="g-recaptcha" data-sitekey="6LepWCorAAAAACKOTeqIfRkulqMHijMDkpvqm8fO"></div>
                  </div>
                  {error && (
                    <div className="text-red-400 text-sm">{error}</div>
                  )}
                </form>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-4">
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-neutral-300 hover:text-accent transition-colors">About Us</Link></li>
                <li><Link href="/careers" className="text-neutral-300 hover:text-accent transition-colors">Careers</Link></li>
                <li><Link href="/contact" className="text-neutral-300 hover:text-accent transition-colors">Contact Us</Link></li>
                <li><Link href="/resources" className="text-neutral-300 hover:text-accent transition-colors">Blog</Link></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-neutral-400">
            <p>© {currentYear} Advantis Care. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
} 