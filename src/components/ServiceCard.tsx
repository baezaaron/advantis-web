import React from 'react';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link?: string;
}

export default function ServiceCard({ title, description, icon, link }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-all duration-300 border border-neutral-200 h-full flex flex-col">
      <div className="h-14 w-14 bg-accent/10 rounded-lg flex items-center justify-center text-accent mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-primary mb-4">{title}</h3>
      <p className="text-neutral-600 mb-6 flex-grow">{description}</p>
      
      {link && (
        <Link 
          href={link}
          className="inline-flex items-center text-accent font-medium hover:text-secondary transition-colors group"
        >
          Learn more
          <svg 
            className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M14 5l7 7m0 0l-7 7m7-7H3" 
            />
          </svg>
        </Link>
      )}
    </div>
  );
} 