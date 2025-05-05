import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="bg-gradient-to-br from-primary via-accent to-blue-900 text-white py-20 md:py-28 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/10 -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-white/10 -ml-40 -mb-40"></div>
      {/* Wave divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none rotate-180" style={{ height: '80px' }}>
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" className="block w-full h-full">
          <path d="M0,64L60,58.7C120,53,240,43,360,32C480,21,600,11,720,21.3C840,32,960,64,1080,80C1200,96,1320,96,1380,96L1440,96L1440,160L1380,160C1320,160,1200,160,1080,160C960,160,840,160,720,160C600,160,480,160,360,160C240,160,120,160,60,160L0,160Z" fill="currentColor" className="text-white" />
        </svg>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">{subtitle}</p>
      </div>
    </section>
  );
} 