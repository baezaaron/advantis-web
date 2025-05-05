export default function Loading() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="container px-4 md:px-6 py-16 text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-accent border-opacity-50"></div>
        <h2 className="text-2xl font-bold text-primary mt-8">Loading...</h2>
        <p className="text-lg text-neutral-600 max-w-md mx-auto mt-4">
          Please wait while we prepare your content.
        </p>
      </div>
    </div>
  );
} 