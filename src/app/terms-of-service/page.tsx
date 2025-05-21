import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Advantis Remote Patient Monitoring',
  description: 'Review the Advantis terms of service: guidelines for using our remote patient monitoring (RPM) and healthcare support services. Learn your rights and responsibilities.',
  keywords: [
    'terms of service',
    'Advantis terms',
    'RPM service terms',
    'healthcare service agreement',
    'remote patient monitoring',
    'RPM',
    'senior care terms',
    'HIPAA compliant RPM',
    'RPM as a service'
  ],
  openGraph: {
    title: 'Terms of Service | Advantis Remote Patient Monitoring',
    description: 'Review the Advantis terms of service: guidelines for using our remote patient monitoring (RPM) and healthcare support services. Learn your rights and responsibilities.',
    url: 'https://advantis.care/terms-of-service',
    siteName: 'Advantis',
    images: [
      {
        url: '/images/og-advantis.png',
        width: 1200,
        height: 630,
        alt: 'Advantis Terms of Service',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | Advantis Remote Patient Monitoring',
    description: 'Review the Advantis terms of service: guidelines for using our remote patient monitoring (RPM) and healthcare support services. Learn your rights and responsibilities.',
    images: ['/images/og-advantis.png'],
    site: '@advantis',
  },
};

export default function TermsOfServicePage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary text-white py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-white/90">
              Guidelines for using Advantis services
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="lead text-lg text-neutral-700 mb-8">
              Please read these Terms of Service ("Terms") carefully before using the Advantis website 
              or any services offered by Advantis.
            </p>

            <h2>Acceptance of Terms</h2>
            <p>
              By accessing or using our services, you agree to be bound by these Terms. If you do not 
              agree to these Terms, please do not use our services.
            </p>

            <h2>Description of Services</h2>
            <p>
              Advantis provides technology-enabled healthcare support services for patients at home. 
              Our services may include, but are not limited to, remote patient monitoring, telehealth 
              consultations, and in-home support coordination.
            </p>

            <h2>User Responsibilities</h2>
            <p>
              When using our services, you agree to:
            </p>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Use our services only for lawful purposes</li>
              <li>Not interfere with or disrupt our services or servers</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>

            <h2>Intellectual Property</h2>
            <p>
              All content, features, and functionality of our website and services, including but not 
              limited to text, graphics, logos, icons, images, audio clips, and software, are the 
              exclusive property of Advantis or its licensors and are protected by copyright, trademark, 
              and other intellectual property laws.
            </p>

            <h2>Disclaimer of Warranties</h2>
            <p>
              Our services are provided "as is" and "as available" without any warranties of any kind, 
              either express or implied. We do not guarantee that our services will be uninterrupted, 
              secure, or error-free.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Advantis shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages, or any loss of profits or 
              revenues, whether incurred directly or indirectly.
            </p>

            <h2>Healthcare Disclaimer</h2>
            <p>
              Advantis is not a healthcare provider. Our services are designed to support, not replace, 
              the relationship that exists between you and your healthcare provider. The information 
              provided through our services is not intended to be a substitute for professional medical 
              advice, diagnosis, or treatment.
            </p>

            <h2>Modifications to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will provide notice of significant 
              changes by posting the updated Terms on our website. Your continued use of our services 
              after such modifications constitutes your acceptance of the revised Terms.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of 
              California, without regard to its conflict of law provisions.
            </p>

            <h2>Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> legal@advantis.com<br />
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