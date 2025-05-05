'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import CustomImage from '@/components/Image';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 md:px-6 flex items-center h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center flex-none">
          {/* Dramatically larger logo container */}
          <div className="relative h-10 md:h-14 lg:h-20 w-32 md:w-48 lg:w-64">
            <CustomImage
              src="/images/Advantis-Logo-200.png"
              alt="Advantis Logo"
              fill
              sizes="(max-width: 640px) 96px, (max-width: 1024px) 128px, 160px"
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Centered navigation links (hidden on mobile) */}
        <div className="hidden md:flex flex-1 justify-center space-x-8 text-lg font-medium text-neutral-700">
          <Link href="/">Home</Link>
          <Link href="/about/">About</Link>
          <Link href="/services/">Services</Link>
          <Link href="/resources/">Resources</Link>
          <Link href="/careers/">Careers</Link>
        </div>

        {/* Contact button */}
        <div className="flex-none hidden md:block">
          <Link
            href="/contact/"
            className="bg-accent text-white font-medium px-6 py-2 rounded-lg hover:bg-accent/90 transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden ml-4 p-2 text-neutral-700"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link href="/" className="block text-neutral-700 py-2">Home</Link>
            <Link href="/about/" className="block text-neutral-700 py-2">About</Link>
            <Link href="/services/" className="block text-neutral-700 py-2">Services</Link>
            <Link href="/resources/" className="block text-neutral-700 py-2">Resources</Link>
            <Link href="/careers/" className="block text-neutral-700 py-2">Careers</Link>
            <Link href="/contact/" className="block bg-accent text-white text-center rounded-md py-2 mt-2">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

// Desktop Navigation Link
function NavLink({ 
  href, 
  children,
  isScrolled 
}: { 
  href: string; 
  children: React.ReactNode;
  isScrolled: boolean;
}) {
  return (
    <Link 
      href={href}
      className={`font-medium hover:text-accent transition-colors duration-200 ${
        isScrolled ? 'text-primary' : 'text-white'
      } py-2 flex items-center`}
    >
      {children}
    </Link>
  );
}

// Mobile Navigation Link
function MobileNavLink({ 
  href, 
  onClick, 
  children 
}: { 
  href: string; 
  onClick: () => void;
  children: React.ReactNode 
}) {
  return (
    <Link 
      href={href}
      className="text-primary font-medium block hover:text-accent transition-colors duration-200 py-2 px-4"
      onClick={onClick}
    >
      {children}
    </Link>
  );
} 