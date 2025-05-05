'use client';

import { useEffect } from 'react';

export default function GlobalError({
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
    <html lang="en">
      <body>
        <div className="min-h-screen flex items-center justify-center bg-neutral-100">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-lg w-full text-center">
            <h1 className="text-4xl font-bold text-primary mb-6">Something went wrong</h1>
            <p className="text-lg text-neutral-700 mb-8">
              We're sorry, but there was a critical error in the application.
            </p>
            <button
              onClick={() => reset()}
              className="bg-accent hover:bg-accent/90 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
} 