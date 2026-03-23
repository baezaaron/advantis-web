import Button from '@/components/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Program Update | Advantis',
  description:
    'Advantis has refocused on health plans and health systems. Learn about our current member engagement and care completion services.',
  robots: { index: false, follow: true },
};

export default function CommunityFirstRedirectPage() {
  return (
    <section className="bg-neutral-50 min-h-[60vh] py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6 max-w-2xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">Program focus update</h1>
        <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
          Our Community First Initiative for community health centers is no longer an active offering. Advantis now partners primarily with{' '}
          <strong className="text-primary">health plans</strong> and <strong className="text-primary">health systems</strong> on member engagement,
          preventive screening completion, resource navigation, care-gap closure, and Medicare RPM/CCM when in scope.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/services/" variant="primary" size="lg">
            View current services
          </Button>
          <Button href="/contact/" variant="outline" size="lg">
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
}
