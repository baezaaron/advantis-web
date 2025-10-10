'use client';

import { useState } from 'react';
import Link from 'next/link';
import ServicesDropdown from './ServicesDropdown';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <nav className="bg-white shadow fixed top-0 w-full z-50 h-16">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-full">
        {/* Logo */}
        <Link href="/" className="flex items-center h-full">
          <img
            src="/images/Advantis-Logo-200.png"
            alt="Advantis Logo"
            className="h-12 object-contain mt-1"
          />
        </Link>

        {/* Centered navigation links (hidden on mobile) */}
        <div className="hidden md:flex flex-1 justify-center space-x-8 text-lg font-medium text-neutral-700">
          <Link href="/">Home</Link>
          <Link href="/about/">About</Link>
          <ServicesDropdown />
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
          className="md:hidden absolute right-4 p-2 text-neutral-700"
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
            <MobileNavLink href="/" onClick={() => setMobileOpen(false)}>Home</MobileNavLink>
            <MobileNavLink href="/about/" onClick={() => setMobileOpen(false)}>About</MobileNavLink>
            <div className="py-2">
              <div className="text-neutral-700 font-medium mb-2">Services</div>
              <div className="pl-4 space-y-2">
                <MobileNavLink href="/services/" onClick={() => setMobileOpen(false)}>For Providers</MobileNavLink>
                <MobileNavLink href="/private-services/" onClick={() => setMobileOpen(false)}>Private Services</MobileNavLink>
                <MobileNavLink href="/services/community-first" onClick={() => setMobileOpen(false)}>Community First Initiative</MobileNavLink>
              </div>
            </div>
            <MobileNavLink href="/resources/" onClick={() => setMobileOpen(false)}>Resources</MobileNavLink>
            <MobileNavLink href="/careers/" onClick={() => setMobileOpen(false)}>Careers</MobileNavLink>
            <MobileNavLink href="/contact/" onClick={() => setMobileOpen(false)}>
              <span className="block bg-accent text-white text-center rounded-md py-2 mt-2">Contact Us</span>
            </MobileNavLink>
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