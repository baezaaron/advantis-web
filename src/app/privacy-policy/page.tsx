import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Advantis Extension-of-Care Services',
  description: 'Read the Advantis privacy policy: how we protect patient data, ensure HIPAA compliance, and safeguard your information in our extension-of-care platform services.',
  keywords: [
    'privacy policy',
    'patient data protection',
    'HIPAA compliance',
    'Advantis privacy',
    'extension-of-care services',
    'value-based care',
    'healthcare privacy',
    'data security',
    'healthcare data protection'
  ],
  openGraph: {
    title: 'Privacy Policy | Advantis Extension-of-Care Services',
    description: 'Read the Advantis privacy policy: how we protect patient data, ensure HIPAA compliance, and safeguard your information in our extension-of-care platform services.',
    url: 'https://advantis.care/privacy-policy',
    siteName: 'Advantis',
    images: [
      {
        url: '/images/og-advantis.png',
        width: 1200,
        height: 630,
        alt: 'Advantis Privacy Policy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Advantis Extension-of-Care Services',
    description: 'Read the Advantis privacy policy: how we protect patient data, ensure HIPAA compliance, and safeguard your information in our extension-of-care platform services.',
    images: ['/images/og-advantis.png'],
    site: '@advantis',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary text-white py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-white/90">
              How we collect, use, and protect your information
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="lead text-lg text-neutral-700 mb-8">
              At Advantis, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, such as when you fill out a form,
              send us an email, or interact with our services. This may include:
            </p>
            <ul>
              <li>Personal identifiers (name, email address, phone number)</li>
              <li>Professional information (organization name, job title)</li>
              <li>Correspondence you send to us</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>
              We may use the information we collect for various purposes, including:
            </p>
            <ul>
              <li>Providing and improving our services</li>
              <li>Communicating with you about our services</li>
              <li>Responding to your inquiries and requests</li>
              <li>Analyzing usage of our website and services</li>
              <li>Protecting our rights and interests</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personally identifiable information to 
              outside parties except in the following circumstances:
            </p>
            <ul>
              <li>With service providers who assist us in operating our website and business</li>
              <li>When required by law or to protect our rights</li>
              <li>In the event of a merger, acquisition, or sale of all or a portion of our assets</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement reasonable security measures to protect your personal information from 
              unauthorized access, use, or disclosure. However, no data transmission over the Internet 
              or electronic storage is 100% secure, so we cannot guarantee absolute security.
            </p>

            <h2>Your Choices</h2>
            <p>
              You may choose not to provide certain information to us, although this may limit your ability 
              to use some features of our services. You can also opt out of receiving marketing communications 
              from us by following the unsubscribe instructions included in these messages.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by 
              posting the new Privacy Policy on this page and updating the effective date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> privacy@advantis.com<br />
              <strong>Address:</strong> 123 Healthcare Avenue, Suite 456, San Francisco, CA 94107
            </p>

            <p className="text-sm text-neutral-500 mt-8">
              Last updated: May 1, 2023
            </p>
          </div>
        </div>
      </section>
    </>
  );
} 