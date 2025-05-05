'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import CustomImage from '@/components/Image';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

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
        
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Something went wrong</h1>
        <p className="text-lg text-neutral-600 max-w-md mx-auto mb-8 text-center">
          We apologize for the inconvenience. Please try again or contact our support team if the problem persists.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 text-center"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="border border-primary text-primary hover:bg-primary/5 font-medium px-6 py-3 rounded-lg transition-colors duration-200 text-center"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
} 