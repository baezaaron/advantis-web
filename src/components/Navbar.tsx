'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <nav className="bg-white shadow fixed top-0 w-full z-50 h-16">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-full">
        {/* Logo */}
        <Link href="/" className="flex items-center h-full">
          <Image
            src="/images/Advantis-Logo-200.png"
            alt="Advantis Care"
            width={200}
            height={64}
            className="h-12 object-contain mt-1"
          />
        </Link>

        {/* Centered navigation links (hidden on mobile) */}
        <div className="hidden lg:flex flex-1 justify-center space-x-6 xl:space-x-8 text-base xl:text-lg font-medium text-neutral-700">
          <Link href="/">Home</Link>
          <Link href="/services/">What We Do</Link>
          <Link href="/#who-we-serve">Who We Serve</Link>
          <Link href="/about/">About</Link>
          <Link href="/careers/">Careers</Link>
        </div>

        {/* Contact button */}
        <div className="flex-none hidden lg:block">
          <Link
            href="/contact/"
            className="bg-accent text-white font-medium px-6 py-2 rounded-lg hover:bg-accent/90 transition-colors duration-200"
          >
            Talk to Our Team
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden absolute right-4 p-2 text-neutral-700"
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
        <div className="lg:hidden bg-white shadow-md">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <MobileNavLink href="/" onClick={() => setMobileOpen(false)}>Home</MobileNavLink>
            <MobileNavLink href="/services/" onClick={() => setMobileOpen(false)}>What We Do</MobileNavLink>
            <MobileNavLink href="/#who-we-serve" onClick={() => setMobileOpen(false)}>Who We Serve</MobileNavLink>
            <MobileNavLink href="/about/" onClick={() => setMobileOpen(false)}>About</MobileNavLink>
            <MobileNavLink href="/careers/" onClick={() => setMobileOpen(false)}>Careers</MobileNavLink>
            <MobileNavLink href="/contact/" onClick={() => setMobileOpen(false)}>
              <span className="block bg-accent text-white text-center rounded-md py-2 mt-2">Talk to Our Team</span>
            </MobileNavLink>
          </div>
        </div>
      )}
    </nav>
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
