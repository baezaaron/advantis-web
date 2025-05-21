'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function ServicesDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-lg font-medium text-neutral-700 hover:text-accent transition-colors duration-200"
      >
        <span>Services</span>
        <svg
          className={`h-4 w-4 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1" role="menu" aria-orientation="vertical">
            <Link
              href="/services"
              className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-accent transition-colors duration-200"
              role="menuitem"
              onClick={() => setIsOpen(false)}
            >
              For Providers
            </Link>
            <Link
              href="/private-services"
              className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-accent transition-colors duration-200"
              role="menuitem"
              onClick={() => setIsOpen(false)}
            >
              Private Services
            </Link>
          </div>
        </div>
      )}
    </div>
  );
} 