import React from 'react';

function DiscountBanner() {
  return (
    <div className="w-full bg-primary-600 py-4 px-4 flex items-center justify-center relative overflow-hidden">
      <div className="whitespace-nowrap animate-marquee text-gray-100 font-semibold text-sm flex items-center gap-4">
        <span>🎉 Get 10% OFF when you choose the Premium Annual Plan! Only $89/month, billed annually. Save $132!</span>
        <a
          href="#pricing"
          className="ml-4 underline text-yellow-200 hover:text-yellow-300 font-bold"
        >
          Claim Your Discount
        </a>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: inline-block;
          min-width: 100%;
          animation: marquee 50s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default DiscountBanner; 