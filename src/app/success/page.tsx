'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [showShipping, setShowShipping] = useState(false);
  const [shippingLoading, setShippingLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (sessionId) {
      setShowShipping(true);
    }
  }, [sessionId]);

  const handleShippingPayment = async () => {
    setShippingLoading(true);
    setError('');
    try {
      const res = await fetch('/api/create-shipping-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError('Unable to start shipping payment.');
      }
    } catch {
      setError('Unable to start shipping payment.');
    } finally {
      setShippingLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-white">
      <div className="max-w-lg p-8 rounded-xl shadow-md text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">Thank You!</h1>
        <p className="text-lg text-neutral-700 mb-6">Your payment was successful. We appreciate your trust in our service and will be in touch soon.</p>
        {showShipping && (
          <div className="mt-6">
            <button
              onClick={handleShippingPayment}
              disabled={shippingLoading}
              className="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-dark transition-colors"
            >
              {shippingLoading ? 'Redirecting...' : 'Pay One-Time Shipping Fee'}
            </button>
            {error && <div className="text-red-600 mt-2">{error}</div>}
          </div>
        )}
        <a href="/" className="inline-block bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-dark transition-colors mt-6">Return Home</a>
      </div>
    </section>
  );
} 