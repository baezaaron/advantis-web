export default function SuccessPage() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-white">
      <div className="max-w-lg p-8 rounded-xl shadow-md text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">Thank You!</h1>
        <p className="text-lg text-neutral-700 mb-6">Your payment was successful. We appreciate your trust in our service and will be in touch soon.</p>
        <a href="/" className="inline-block bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-dark transition-colors">Return Home</a>
      </div>
    </section>
  );
} 