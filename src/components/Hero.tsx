import React from 'react';
import Button from './Button';
import CustomImage from '@/components/Image';

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0 bg-primary">
        {/* Gradient overlay for visual interest */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 py-16 md:py-24">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight drop-shadow-md">
            <span className="bg-gradient-to-r from-white to-accent/90 bg-clip-text text-transparent">Extend Your Care</span>
          </h1>
          <p className="text-2xl md:text-3xl mb-10 text-white/90 font-light">
            A high-touch clinical and administrative extension-of-care service for FQHCs, health systems, IPAs, and health plans
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/contact" size="lg" variant="secondary" className="px-8 py-4 text-base">
              Get in Touch
            </Button>
            <Button href="/about" variant="outline" size="lg" className="px-8 py-4 text-base border-white text-white hover:bg-white/10">
              Learn More
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