'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import CustomImage from '@/components/Image';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 md:px-6 flex items-center h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center flex-none">
          <CustomImage
            src="/images/Advantis-Logo-200.png"
            alt="Advantis Logo"
            width={300}
            height={75}
            className="object-contain"
            priority
          />
        </Link>

        {/* Centered navigation links */}
        <div className="flex-1 flex justify-center space-x-8 text-lg font-medium text-neutral-700">
          <Link href="/">Home</Link>
          <Link href="/about/">About</Link>
          <Link href="/services/">Services</Link>
          <Link href="/resources/">Resources</Link>
          <Link href="/careers/">Careers</Link>
        </div>

        {/* Contact button */}
        <div className="flex-none">
          <Link
            href="/contact/"
            className="bg-accent text-white font-medium px-6 py-2 rounded-lg hover:bg-accent/90 transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>
      </div>
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