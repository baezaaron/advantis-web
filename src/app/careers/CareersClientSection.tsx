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

      {/* Advocacy Program Section */}
      <section className="py-20 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Advantis Healthcare Advocacy Program
              </h2>
              <p className="text-xl text-neutral-700 leading-relaxed mb-8">
              Want to earn extra income while helping your community get healthier? Join the Advantis Healthcare Advocacy Program and start making a real difference — no medical background needed. Make a difference in your community while building a rewarding career. The Advocacy Program is a unique opportunity to earn income while helping your community access better healthcare through remote patient monitoring (RPM). As an advocate, you educate others, enroll patients, and act as a trusted liaison between Advantis and underserved populations. No healthcare experience is required.
              </p>
              <div className="text-center mb-12">
                <button
                  onClick={() => setShowForm(true)}
                  className="bg-accent text-white font-semibold px-10 py-4 rounded-lg hover:bg-accent/90 transition-colors text-lg shadow"
                >
                  Apply Now
                </button>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-12 mb-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold text-primary mb-4">What You'll Do</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <HeartPulseIcon className="h-6 w-6 text-accent mt-1 mr-3" />
                    <span>Educate community members about remote patient monitoring and its benefits</span>
                  </li>
                  <li className="flex items-start">
                    <UsersIcon className="h-6 w-6 text-accent mt-1 mr-3" />
                    <span>Connect patients with our innovative healthcare solutions</span>
                  </li>
                  <li className="flex items-start">
                    <StarIcon className="h-6 w-6 text-accent mt-1 mr-3" />
                    <span>Serve as a trusted liaison between Advantis and underserved populations</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold text-primary mb-4">Who We're Looking For</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-accent font-semibold mr-2">•</span>
                    <span>Community health-minded individuals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-semibold mr-2">•</span>
                    <span>Part-time job seekers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-semibold mr-2">•</span>
                    <span>Caregivers and healthcare professionals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-semibold mr-2">•</span>
                    <span>Community leaders</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-semibold mr-2">•</span>
                    <span>Bilingual professionals</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <blockquote className="italic text-lg text-neutral-700 border-l-4 border-accent pl-4">
                "I've already helped 12 patients get set up with RPM — including my own aunt. It feels great knowing they're being cared for every day, and I've made $600 in 2 weeks."
              </blockquote>
              <div className="mt-2 text-neutral-500 text-base">– Luis M., Advocate in New York City</div>
            </div>
          </div>
        </div>
      </section>

      {/* Compensation & Growth */}
      <div className="bg-white p-12 rounded-lg shadow-sm mb-16 max-w-4xl mx-auto">
        <div className="text-center mb-6">
          {/* Add a section intro here if needed, e.g. <p>...</p> */}
        </div>
        <div className="bg-primary text-white p-8 rounded-lg shadow-sm">
          <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2 text-center">
            Compensation & Growth Opportunities
          </h3>
          <div className="border-b-2 border-accent w-16 mx-auto mb-6"></div>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold text-white mb-3">Commission-Based Earnings</h4>
              <p className="text-white">Earn competitive commission for each successful patient enrollment</p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-3">Volume Bonuses</h4>
              <p className="text-white">Unlock additional bonuses as you reach enrollment milestones</p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-3">Leadership Path</h4>
              <p className="text-white">Grow into team leadership roles and expand your impact</p>
            </div>
          </div>
        </div>
      </div>

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