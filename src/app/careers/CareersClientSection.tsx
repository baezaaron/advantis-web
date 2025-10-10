"use client";
import Button from '@/components/Button';
import { HeartPulseIcon, UsersIcon, StarIcon } from '@/components/icons';
import { useState } from 'react';

export default function CareersClientSection() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-semibold text-primary mb-6">
              Join Our Team
            </h1>
            <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
              At Advantis, we're on a mission to transform healthcare through innovative technology and compassionate care. We're looking for talented individuals who want to make a real impact on patient outcomes and help make quality healthcare accessible to all. If you're passionate about making a difference, please apply below or explore our Healthcare Advocacy Program. Feel free to also reach out to <a href="mailto:info@advantis.care" className="underline text-primary">info@advantis.care</a> to discuss how you could be a part of the Advantis team.
            </p>
          </div>
        </div>
      </section>


      {/* Modal for Application Form */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white max-w-2xl w-full p-8 rounded-lg shadow-lg relative animate-fadeIn">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-neutral-500 hover:text-accent text-2xl font-bold focus:outline-none"
              aria-label="Close form"
            >
              ×
            </button>
            <h3 className="text-2xl font-semibold text-primary mb-4 text-center">Apply to Advantis</h3>
            <form action="https://formspree.io/f/xkgbrjlw" method="POST" encType="multipart/form-data" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-left font-medium text-primary mb-1">Name<span className="text-accent">*</span></label>
                  <input type="text" id="name" name="name" required className="w-full border border-neutral-300 rounded px-4 py-2 focus:outline-accent" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-left font-medium text-primary mb-1">Email<span className="text-accent">*</span></label>
                  <input type="email" id="email" name="email" required className="w-full border border-neutral-300 rounded px-4 py-2 focus:outline-accent" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-left font-medium text-primary mb-1">Phone Number<span className="text-accent">*</span></label>
                  <input type="tel" id="phone" name="phone" required className="w-full border border-neutral-300 rounded px-4 py-2 focus:outline-accent" />
                </div>
                <div>
                  <label htmlFor="state" className="block text-left font-medium text-primary mb-1">State<span className="text-accent">*</span></label>
                  <input type="text" id="state" name="state" required className="w-full border border-neutral-300 rounded px-4 py-2 focus:outline-accent" />
                </div>
                <div>
                  <label htmlFor="city" className="block text-left font-medium text-primary mb-1">City<span className="text-accent">*</span></label>
                  <input type="text" id="city" name="city" required className="w-full border border-neutral-300 rounded px-4 py-2 focus:outline-accent" />
                </div>
              </div>
              <button type="submit" className="mt-4 bg-accent text-white font-semibold px-8 py-3 rounded-lg hover:bg-accent/90 transition-colors">Submit Application</button>
            </form>
            <div className="text-xs text-neutral-500 mt-2 text-center">*Feel free to send over your resume to <a href="mailto:info@advantis.care" className="underline text-primary">info@advantis.care</a></div>
          </div>
        </div>
      )}
    </>
  );
} 