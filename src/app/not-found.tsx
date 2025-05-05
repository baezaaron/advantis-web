import Link from 'next/link';
import CustomImage from '@/components/Image';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white">
      <div className="container px-4 md:px-6 py-16 flex flex-col items-center">
        <div className="relative w-48 h-48 mb-8">
          <CustomImage 
            src="/images/Advantis-Logo-200.png"
            alt="Advantis Logo"
            fill
            className="object-contain"
          />
        </div>
        
        <h1 className="text-8xl md:text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-700 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-neutral-600 max-w-md mx-auto mb-8 text-center">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 text-center"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="border border-primary text-primary hover:bg-primary/5 font-medium px-6 py-3 rounded-lg transition-colors duration-200 text-center"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
} 