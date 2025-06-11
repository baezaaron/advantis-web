'use client';
import { useState, useRef } from 'react';

const plans = [
  {
    name: 'Monthly',
    price: '$99',
    period: 'per month for 12 months',
    features: [
      '24/7 nurse monitoring',
      'All devices free',
      'Remote device monitoring',
      'Monthly reports',
      'Shared data with your family',
      'FSA, HSA, and HRA eligible',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Annual',
    price: '$89',
    period: 'per month (billed annually)',
    features: [
      '24/7 nurse monitoring',
      'All devices free',
      'Remote device monitoring',
      'Priority phone support',
      'Monthly reports',
      'FSA, HSA, and HRA eligible',
    ],
    cta: 'Go Annual & Save',
    popular: true,
  },
] as const;

type PlanName = typeof plans[number]['name'];

const diagnosesList = [
  'Hypertension',
  'Diabetes',
  'COPD',
  'CHF',
  'Obesity',
  "Alzheimer's",
  'Dementia',
];

const paymentMethods = [
  'Flexible Spending Account',
  'Health Savings Account',
  'Health Reimbursement Account',
  'Out-of-Pocket',
];

const TOS_TEXT = `
TERMS OF SERVICE
Effective Date: 2025-05-22
Last Updated: 2025-05-22

These Terms of Service (“Terms”) are entered into between you (“you,” “User,” or “Patient”) and Advantis Care Corporation (“Advantis,” “Company,” “we,” “us,” or “our”), a New York corporation, and govern your access to and use of our remote patient monitoring services, software, applications, equipment, platforms, and any related support or services (collectively, the “Services”). PLEASE READ THESE TERMS CAREFULLY. BY ACCESSING OR USING OUR SERVICES, YOU AGREE TO BE BOUND BY THESE TERMS, OUR PRIVACY POLICY, AND ANY ADDITIONAL TERMS INCORPORATED BY REFERENCE. IF YOU DO NOT AGREE TO THESE TERMS, DO NOT USE THE SERVICES.

1. MEDICAL DISCLAIMER: Advantis Care Corporation provides non-emergency, remote patient monitoring services using licensed nurses, medical assistants, and related support personnel. The Services are not intended to provide emergency or urgent care, nor are they a substitute for in-person diagnosis, treatment, or professional medical advice. YOU ACKNOWLEDGE THAT ADVANTIS CARE CORPORATION DOES NOT PROVIDE PRIMARY MEDICAL CARE, AND THAT YOU SHOULD CONTACT YOUR PRIMARY CARE PHYSICIAN OR CALL 911 IN THE EVENT OF A MEDICAL EMERGENCY.

2. ELIGIBILITY: You must be at least 18 years old, or a legal guardian must enroll and consent on behalf of a minor, to access the Services. By using the Services, you represent and warrant that all information provided is truthful, accurate, and complete, and that you have the legal capacity to enter into these Terms.

3. USE OF LICENSED PERSONNEL: As part of the Services, Advantis Care Corporation may assign licensed registered nurses, licensed practical nurses, or medical assistants (“Clinical Personnel”) to monitor your health data and assist in care coordination. These individuals act under protocols compliant with state law and are not responsible for diagnosis or prescribing. Their role is limited to support and monitoring in connection with the Services. You acknowledge and agree that Advantis Care Corporation is not acting as your healthcare provider, and the Services do not create a provider-patient relationship.

4. SERVICES & LIMITATIONS: The Services may include remote physiological monitoring devices, communication with Clinical Personnel, tracking of vital signs, trend analysis, reminders, and alerts. The Services are provided for informational and monitoring purposes only and should not be used as a replacement for physician visits, diagnostic testing, or emergency interventions. Advantis Care Corporation does not guarantee any specific health outcome or clinical result.

5. PAYMENT & SUBSCRIPTIONS: By enrolling in the Services, you agree to pay all applicable fees according to your selected payment plan, whether monthly or annually. Pricing is currently: Monthly Plan – $110/month; Annual Plan – $99/month, billed annually in advance. Fees are subject to change with 30 days' notice. Payment is accepted via credit card, debit card, FSA, HSA, HRA, or other accepted payment methods. You authorize us to automatically charge your payment method on file for recurring billing. A 30-day money-back guarantee is available to first-time users. After the initial period, refunds are discretionary and handled on a case-by-case basis.

6. DATA COLLECTION, ANONYMIZATION & AI DEVELOPMENT: You acknowledge that as part of your use of the Services, Advantis Care Corporation will collect health-related data including but not limited to biometric readings, device usage, communication logs, adherence data, and service interactions. You grant Advantis Care Corporation a perpetual, irrevocable, non-exclusive, royalty-free license to (a) use your data internally for quality improvement, service delivery, and analytics; (b) de-identify and aggregate such data in accordance with HIPAA and applicable law; and (c) use such anonymized data to train, refine, and develop machine learning models, algorithms, and artificial intelligence tools aimed at enhancing patient care, operational efficiency, and clinical insights. Advantis Care Corporation will not sell, share, or license any personally identifiable health data without your explicit consent, unless required by law.

7. PRIVACY & HIPAA COMPLIANCE: Advantis Care Corporation complies with the Health Insurance Portability and Accountability Act of 1996 (HIPAA), as amended, and other applicable privacy laws. All Protected Health Information (PHI) is stored securely using HIPAA-compliant infrastructure. Access to PHI is limited to authorized personnel with a legitimate need to know. While we use industry-standard safeguards, no system is completely secure, and you acknowledge that data transmission over the internet carries inherent risks.

8. YOUR RESPONSIBILITIES: You are responsible for ensuring the accuracy of the information you provide and for maintaining the functionality and security of any monitoring devices issued to you. You agree to notify us promptly of any issues, adverse events, or significant health changes. You agree not to misuse the Services, share access with unauthorized individuals, or attempt to reverse-engineer any aspect of our platform.

9. LIMITATION OF LIABILITY: TO THE FULLEST EXTENT PERMITTED BY LAW, ADVANTIS CARE CORPORATION, ITS OFFICERS, DIRECTORS, EMPLOYEES, CONTRACTORS, LICENSORS, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, EXEMPLARY, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF DATA, LOSS OF PROFITS, MEDICAL COMPLICATIONS, OR DEATH ARISING OUT OF OR RELATING TO YOUR USE OF THE SERVICES. OUR TOTAL LIABILITY TO YOU FOR ANY CLAIMS UNDER THESE TERMS SHALL NOT EXCEED THE TOTAL AMOUNT PAID BY YOU TO ADVANTIS CARE CORPORATION IN THE TWELVE (12) MONTHS PRIOR TO THE EVENT GIVING RISE TO LIABILITY.

10. ASSUMPTION OF RISK: You understand that remote health monitoring, while beneficial, has limitations and may not detect all adverse health events. You assume full responsibility for your health management and acknowledge that the Services do not replace medical judgment or regular consultation with your licensed healthcare provider.

11. INDEMNIFICATION: You agree to indemnify, defend, and hold harmless Advantis Care Corporation and its affiliates from and against any claims, losses, liabilities, damages, judgments, penalties, costs, or expenses (including reasonable attorneys' fees) arising out of or relating to (a) your use or misuse of the Services; (b) your violation of these Terms or applicable law; or (c) your negligence, misconduct, or misrepresentation.

12. MODIFICATIONS TO THE TERMS: We reserve the right to update or modify these Terms at any time, at our sole discretion. If material changes are made, we will provide notice via email or through the platform. Continued use of the Services after such changes constitutes your acceptance of the updated Terms.

13. TERMINATION: We reserve the right to suspend or terminate your access to the Services at any time, for any reason, including but not limited to violations of these Terms or suspected fraudulent, abusive, or harmful conduct. You may terminate your use of the Services by providing written notice to us. Upon termination, your access will cease, and any outstanding fees will become immediately due.

14. DISPUTE RESOLUTION AND GOVERNING LAW: These Terms shall be governed by and construed in accordance with the laws of the State of New York, without regard to conflict of law principles. Any disputes arising from these Terms or your use of the Services shall be subject to the exclusive jurisdiction of the state and federal courts located in New York County, New York. You waive any objection to venue or personal jurisdiction.

15. ENTIRE AGREEMENT & SEVERABILITY: These Terms, together with our Privacy Policy and any signed consents or service agreements, constitute the entire agreement between you and Advantis Care Corporation. If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.

16. CONTACT INFORMATION:
    For questions, concerns, or legal notices, please contact:
    Advantis Care Corporation
    Email: support@advantis.care
    Mailing Address: 3078 Heath Avenue, Bronx, NY 10463

BY USING OUR SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREED TO THESE TERMS OF SERVICE.
---

ADVANTIS CARE CORPORATION PRIVACY POLICY
Effective Date: 2025-05-22
Last Updated: 2025-05-22

Advantis Care Corporation (“Advantis,” “we,” “our,” or “us”) respects your privacy and is committed to safeguarding the privacy and security of your information. This Privacy Policy (“Policy”) explains how we collect, use, disclose, retain, protect, and share your information, including Protected Health Information (“PHI”) as defined under the Health Insurance Portability and Accountability Act of 1996 (“HIPAA”), when you use our remote patient monitoring services, website, mobile applications, hardware devices, communication platforms, and all other related services (“Services”).

This Policy applies to all users of our Services, including patients, providers, caregivers, and any other individuals interacting with Advantis Care Corporation. If you do not agree with this Policy, you must not access or use our Services.

This Policy is intended to comply with all applicable federal and New York State privacy and consumer protection laws, including but not limited to HIPAA, the HITECH Act, the FTC Act, and relevant New York regulations such as the SHIELD Act.

---

1. INFORMATION WE COLLECT

We may collect the following types of information when you interact with our Services:

a. Personal Identifiable Information (PII):**

Full name
Date of birth
Address, phone number, email
Government-issued identifiers (e.g., Social Security number, where required for insurance verification)
Insurance and billing details
Emergency contact information
Account credentials

b. Protected Health Information (PHI):**

Vital signs (e.g., heart rate, blood pressure, glucose levels)
Medical history, medications, diagnoses
Treatment and care management plans
Data transmitted from medical devices (e.g., Bluetooth or cellular-enabled monitors)
Communications between you and our medical team

c. Technical and Device Information:**

IP address, browser type, device identifiers
Log data, timestamps, and usage patterns
App usage and behavioral analytics
Cookies and tracking pixels (where permitted by law)

d. Location Data (only if authorized):**

Approximate or precise location via app permissions


2. HOW WE USE YOUR INFORMATION

We use your information to:

Provide, manage, and enhance our healthcare and monitoring Services
Facilitate care coordination between patients, nurses, MAs, and other medical professionals
Verify identity, eligibility, and billing with insurance providers
Communicate with you and your care team via secure channels
Monitor health data and trigger alerts or escalations as clinically necessary
Develop internal analytics, AI features, and predictive algorithms
Improve the quality, usability, and safety of our Services
Satisfy legal, regulatory, and compliance requirements
Conduct research, innovation, and product development, using anonymized or aggregated data
Enforce our Terms of Service and comply with legal obligations

3. LEGAL BASIS FOR PROCESSING

We collect and process information under the following legal bases, as required by HIPAA and other applicable laws:

Your Consent: For certain uses of your data, particularly where required under New York law or for marketing, we will request your consent.
Performance of a Contract: To provide the Services you signed up for.
Legal Obligations: To comply with applicable health regulations, insurance mandates, or judicial processes.
Legitimate Interests: For internal operations, analytics, and safety of the Services.
Public Health and Research: Where applicable, under HIPAA de-identification standards.

4. HOW WE SHARE YOUR INFORMATION

We do not sell your personally identifiable information. However, we may share your information under the following circumstances:

a. With Your Healthcare Team:**
We share PHI with physicians, nurses, medical assistants, and authorized third-party providers involved in your care.

b. With Business Associates and Service Providers:**
We partner with third-party vendors (e.g., cloud providers, call centers, device manufacturers) under HIPAA-compliant Business Associate Agreements (BAAs). These parties are only permitted to use your information as needed to deliver contracted services to Advantis.

c. With Insurance Providers and Payers:**
We may disclose necessary information for billing, reimbursement, and eligibility determination under applicable insurance contracts.

d. For Legal and Regulatory Reasons:**
We may disclose your information to governmental authorities, regulatory bodies, or in response to legal process (e.g., subpoenas) where required by law.

e. In the Event of a Business Transfer:**
If Advantis is involved in a merger, acquisition, or asset sale, your data may be transferred, provided that the successor entity maintains appropriate privacy safeguards.

f. De-Identified and Aggregated Data:**
We reserve the right to use and commercially license, sell, or otherwise share **fully de-identified data** in accordance with HIPAA's Safe Harbor or Expert Determination methodologies. Such data may be used for research, AI development, public health, commercial partnerships, and statistical purposes. This data will **not** contain information that could reasonably be used to identify you.

5. DE-IDENTIFICATION AND MONETIZATION

Advantis may create and use datasets derived from PHI that have been de-identified in accordance with 45 CFR §164.514. Once de-identified, the data is no longer considered PHI under HIPAA. We may:

Use such data for internal training of artificial intelligence or machine learning models
Share or license de-identified data to third parties for research, development, or commercial purposes
Combine de-identified data with other datasets for analytics, trend analysis, and benchmarking

All such activities will be subject to rigorous safeguards, audit controls, and oversight to ensure compliance with applicable de-identification standards and consumer protection obligations.

6. DATA RETENTION

We retain PHI for a minimum of six (6) years in compliance with HIPAA, or longer if required by other state or federal laws, unless otherwise requested by you and permitted by law.
Anonymized data may be retained indefinitely for research, modeling, and business development purposes.

7. YOUR RIGHTS UNDER HIPAA AND NEW YORK LAW

You have the right to:

Request access to your PHI
Request corrections to incomplete or inaccurate information
Request restrictions on certain uses and disclosures
Receive an accounting of disclosures
Request a copy of this Privacy Policy
Receive notification in the event of a breach of your unsecured PHI
File a complaint with us or with the U.S. Department of Health and Human Services

To exercise any of these rights, contact us using the information provided below.

8. DATA SECURITY

We use technical, administrative, and physical safeguards to protect your data, including:

AES-256 encryption of data in transit and at rest
Role-based access controls
Multi-factor authentication
Secure cloud hosting under HIPAA-compliant infrastructure
Routine monitoring, audits, and penetration testing

Despite these measures, no system is completely secure. By using our Services, you acknowledge and accept this risk.

9. CHILDREN'S PRIVACY

Our Services are not directed to children under the age of 13. We do not knowingly collect information from children without verifiable parental consent. If you believe a child has submitted data without consent, please contact us immediately.

10. CROSS-BORDER TRANSFERS

Our Services are currently intended for use by individuals located in the United States. If data is processed outside the U.S. by subcontractors or vendors, we ensure compliance through appropriate contractual and technical safeguards.

11. THIRD-PARTY SERVICES AND LINKS

Our Services may contain links to external websites or integrations with third-party platforms. We are not responsible for the privacy practices of those entities. You are encouraged to review their respective privacy policies.

12. POLICY UPDATES

We may update this Privacy Policy periodically. When we do, we will revise the “Last Updated” date at the top. For material changes, we will provide advance notice via the website, mobile app, or email. Continued use of our Services constitutes acceptance of the revised policy.

13. CONTACT US

If you have questions or requests regarding this Policy, or would like to file a privacy complaint, please contact:

Advantis Care Corporation
Attn: Privacy Officer
Email: [privacy@advantis.care](mailto:privacy@advantis.care)
Mailing Address: 3078 Heath Avenue, Bronx, NY 10463
Phone: 212-470-6966

You may also file a complaint with the U.S. Department of Health and Human Services – Office for Civil Rights.
`;

// Add mapping from plan name to price ID
const priceIds: Record<PlanName, string> = {
  Monthly: 'price_1RRwtRLcEb1KUprYp0r2vJrK',
  Annual: 'price_1RRwsALcEb1KUprYLpMmMg6E',
};

const productIds: Record<PlanName, string> = {
  Monthly: 'prod_SMgFYqOqwyFou3',
  Annual: 'prod_SMgEphjfCY2PZL',
};

export default function PricingComparison() {
  const [showSurvey, setShowSurvey] = useState<PlanName | null>(null);
  const [showTOS, setShowTOS] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    address: '',
    doctor: '',
    insurance: '',
    diagnoses: [] as string[],
    payment: '',
  });
  const [formError, setFormError] = useState('');
  const [formLoading, setFormLoading] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const tosRef = useRef<HTMLDivElement>(null);
  const [tosScrolled, setTosScrolled] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [otherDiagnosis, setOtherDiagnosis] = useState('');

  // Handle survey form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (name === 'diagnoses' && type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => {
        const diagnoses = checked
          ? [...prev.diagnoses, value]
          : prev.diagnoses.filter((d) => d !== value);
        return { ...prev, diagnoses };
      });
    } else if (name === 'otherDiagnosis') {
      setOtherDiagnosis(value);
      setFormData((prev) => {
        // Remove any previous 'other' value
        const filtered = prev.diagnoses.filter((d) => !d.startsWith('Other:'));
        // Only add if not empty
        return value
          ? { ...prev, diagnoses: [...filtered, `Other: ${value}`] }
          : { ...prev, diagnoses: filtered };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Handle survey form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    setFormLoading(true);
    // Basic validation
    if (!formData.name || !formData.age || !formData.email || !formData.address || !formData.doctor || !formData.insurance || formData.diagnoses.length === 0 || !formData.payment) {
      setFormError('Please fill out all fields.');
      setFormLoading(false);
      return;
    }
    try {
      const res = await fetch('https://formspree.io/f/manozpeo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          plan: showSurvey,
        }),
      });
      if (res.ok) {
        setFormSuccess(true);
        setShowTOS(true);
      } else {
        setFormError('Submission failed. Please try again.');
      }
    } catch {
      setFormError('Submission failed. Please try again.');
    } finally {
      setFormLoading(false);
    }
  };

  // Handle TOS scroll
  const handleTosScroll = () => {
    if (tosRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = tosRef.current;
      if (scrollTop + clientHeight >= scrollHeight - 10) {
        setTosScrolled(true);
      }
    }
  };

  // Reset modal state
  const closeAll = () => {
    setShowSurvey(null);
    setShowTOS(false);
    setFormSuccess(false);
    setFormData({
      name: '',
      age: '',
      email: '',
      address: '',
      doctor: '',
      insurance: '',
      diagnoses: [],
      payment: '',
    });
    setFormError('');
    setTosScrolled(false);
    setOtherDiagnosis('');
  };

  // Stripe payment redirect after TOS acceptance
  const handleStripeRedirect = async () => {
    setPaymentLoading(true);
    try {
      // Lookup the priceId for the selected product
      const res = await fetch('/api/get-price-id', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId: productIds[showSurvey!] }),
      });
      const data = await res.json();
      if (!data.priceId) {
        alert('Unable to find a recurring price for this plan.');
        setPaymentLoading(false);
        return;
      }
      // Now create checkout session, passing customerEmail
      const checkoutRes = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId: data.priceId, customerEmail: formData.email }),
      });
      const checkoutData = await checkoutRes.json();
      if (checkoutData.url) {
        window.location.href = checkoutData.url;
      } else {
        alert('Unable to start checkout.');
      }
    } catch (err) {
      alert('Error connecting to payment gateway.');
    } finally {
      setPaymentLoading(false);
      closeAll();
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
            Choose the plan that fits your needs. No hidden fees. 60-day money-back guarantee.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl shadow-md p-8 flex flex-col items-center border transition-transform duration-300 hover:scale-105 ${
                plan.popular ? 'border-accent shadow-lg z-10 scale-105 ring-2 ring-accent' : 'border-neutral-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-4 py-1 rounded-full shadow">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-primary mb-2">{plan.name}</h3>
              <div className="flex items-end mb-4">
                <span className="text-4xl font-extrabold text-primary">{plan.price}</span>
                <span className="text-base text-neutral-600 ml-2">{plan.period}</span>
              </div>
              {/* FSA/HSA/HRA Badge */}
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                  FSA, HSA, and HRA eligible
                </span>
              </div>
              <ul className="mb-8 space-y-2 w-full">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-neutral-700">
                    <svg className="h-5 w-5 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setShowSurvey(plan.name)}
                className={`w-full text-center py-3 rounded-lg font-semibold transition-colors duration-200 text-lg shadow ${
                  plan.popular
                    ? 'bg-accent text-white hover:bg-accent-dark'
                    : 'bg-primary text-white hover:bg-primary-dark'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center">
          <div className="flex items-center gap-4 mb-2">
            <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-neutral-700 font-medium">60-day money-back guarantee; cancel with 30 day notice</span>
          </div>
          <div className="flex items-center gap-4">
            <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-neutral-700 font-medium">No hidden fees or contracts</span>
          </div>
        </div>
        {/* Global FSA/HSA/HRA Badge */}
        <div className="flex flex-col items-center mt-8">
          <div className="flex items-center gap-2 bg-blue-50 text-blue-900 px-4 py-2 rounded-lg font-medium shadow">
            <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01" />
            </svg>
            FSA, HSA, and HRA eligible — use your Flexible Spending, Health Savings, or Health Reimbursement Account!
          </div>
        </div>
        {/* Survey Modal */}
        {showSurvey && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full relative">
              <button className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-700 text-2xl" onClick={closeAll}>&times;</button>
              <h2 className="text-2xl font-bold mb-4 text-primary">Sign Up for {showSurvey} Plan</h2>
              {!formSuccess ? (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <input name="name" type="text" placeholder="Full Name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-accent" required />
                  <input name="age" type="number" placeholder="Age" value={formData.age} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-accent" required min={0} />
                  <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-accent" required />
                  <input name="address" type="text" placeholder="Address" value={formData.address} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-accent" required />
                  <input name="doctor" type="text" placeholder="Primary Care Doctor's Name" value={formData.doctor} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-accent" required />
                  <input name="insurance" type="text" placeholder="Insurance Carrier" value={formData.insurance} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-accent" required />
                  <div>
                    <label className="block mb-1 font-medium text-neutral-700">Diagnoses</label>
                    <div className="grid grid-cols-2 gap-2">
                      {diagnosesList.map((diag) => (
                        <label key={diag} className="flex items-center gap-2 text-neutral-700">
                          <input
                            type="checkbox"
                            name="diagnoses"
                            value={diag}
                            checked={formData.diagnoses.includes(diag)}
                            onChange={handleChange}
                          />
                          {diag}
                        </label>
                      ))}
                      {/* Other diagnosis as a text input */}
                      <div className="flex items-center gap-2 text-neutral-700">
                        <input
                          type="text"
                          name="otherDiagnosis"
                          value={otherDiagnosis}
                          onChange={handleChange}
                          placeholder="Other"
                          className="w-full px-3 py-2 rounded border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                          style={{ minHeight: '2.25rem' }}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block mb-1 font-medium text-neutral-700">Payment Method</label>
                    <select
                      name="payment"
                      value={formData.payment}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-accent"
                      required
                    >
                      <option value="">Select payment method</option>
                      {paymentMethods.map((pm) => (
                        <option key={pm} value={pm}>{pm}</option>
                      ))}
                    </select>
                  </div>
                  {formError && <div className="text-red-600 text-sm">{formError}</div>}
                  <button type="submit" disabled={formLoading} className="w-full bg-accent text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 disabled:opacity-70">
                    {formLoading ? 'Submitting...' : 'Continue'}
                  </button>
                </form>
              ) : null}
              {/* Terms of Service Popup */}
              {showTOS && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full relative">
                    <h3 className="text-xl font-bold mb-4 text-primary">Terms of Service and Privacy Policy</h3>
                    <div
                      ref={tosRef}
                      onScroll={handleTosScroll}
                      className="overflow-y-auto max-h-60 border border-neutral-200 rounded-lg p-4 mb-4 text-neutral-700 text-sm"
                      style={{ minHeight: '150px' }}
                    >
                      {TOS_TEXT.split('\n').map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                    <button
                      className={`w-full bg-accent text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 ${tosScrolled ? '' : 'opacity-60 cursor-not-allowed'}`}
                      disabled={!tosScrolled || paymentLoading}
                      onClick={handleStripeRedirect}
                    >
                      {paymentLoading ? 'Redirecting to Payment...' : 'Accept & Continue to Payment'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 