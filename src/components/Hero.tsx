import React from 'react';
import Button from './Button';

export default function Hero() {
  return (
    <div className="relative min-h-[82vh] flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0 bg-primary">
        {/* Gradient overlay for visual interest */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 py-14 md:py-20">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-md">
            <span className="bg-gradient-to-r from-white to-accent/90 bg-clip-text text-transparent">From identified need to completed support</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl mb-8 text-white/90 font-light leading-relaxed">
            Advantis reaches members and resolves what stands in their way, from social drivers of health today to care gaps and coverage tomorrow. We make sure every loop is closed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/contact/?interest=partnerships#contact-form" size="lg" variant="secondary" className="px-8 py-4 text-base">
              Talk to Our Team
            </Button>
            <Button href="/services/" variant="outline" size="lg" className="px-8 py-4 text-base border-white text-white hover:bg-white/10">
              Explore What We Do
            </Button>
          </div>
        </div>
      </div>

      {/* Wave Shape */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M0 0L60 10C120 20 240 40 360 50C480 60 600 60 720 50C840 40 960 20 1080 15C1200 10 1320 20 1380 25L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" 
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}
