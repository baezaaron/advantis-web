export default function CancelPage() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-white">
      <div className="max-w-lg p-8 rounded-xl shadow-md text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">Payment Cancelled</h1>
        <p className="text-lg text-neutral-700 mb-6">You have cancelled the payment process. If this was a mistake, you can try again or contact us for help.</p>
        <a href="/private-services" className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors">Back to Pricing</a>
      </div>
    </section>
  );
} 