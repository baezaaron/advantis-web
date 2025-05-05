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
      // Replace with your form submission logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
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
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors" aria-label="Facebook">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
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
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors" aria-label="Instagram">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
                <div className="text-neutral-300">
                  <p className="mb-1">1221 Avenue of the Americas </p>
                  <p className="mb-1">Suite 13B</p>
                  <p className="mb-1">New York, NY 10020</p>
                  <p className="mb-4">United States</p>
                  <p className="mb-1">Phone: (347) 524-2989</p>
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
            <div className="lg:col-span-4 grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-neutral-300 hover:text-accent transition-colors">About Us</Link></li>
                  <li><Link href="/team" className="text-neutral-300 hover:text-accent transition-colors">Our Team</Link></li>
                  <li><Link href="/careers" className="text-neutral-300 hover:text-accent transition-colors">Careers</Link></li>
                  <li><Link href="/contact" className="text-neutral-300 hover:text-accent transition-colors">Contact Us</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><Link href="/resources" className="text-neutral-300 hover:text-accent transition-colors">Blog</Link></li>
                  <li><Link href="/faqs" className="text-neutral-300 hover:text-accent transition-colors">FAQs</Link></li>
                  <li><Link href="/privacy" className="text-neutral-300 hover:text-accent transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="text-neutral-300 hover:text-accent transition-colors">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-neutral-400">
            <p>© {currentYear} Advantis Healthcare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
} 