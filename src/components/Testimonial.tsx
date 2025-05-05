import React from 'react';
import Image from 'next/image';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  image?: string;
}

export default function Testimonial({ quote, name, title, image }: TestimonialProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 relative border border-neutral-200 h-full flex flex-col">
      {/* Quote mark */}
      <svg
        className="absolute text-accent/10 h-24 w-24 -top-6 -left-6"
        fill="currentColor"
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
      </svg>
      
      <div className="relative flex-grow">
        {/* Testimonial content */}
        <p className="text-neutral-700 italic mb-6 leading-relaxed">{quote}</p>
        
        {/* Author */}
        <div className="flex items-center mt-4">
          {image ? (
            <div className="flex-shrink-0 mr-4">
              <div className="relative h-14 w-14 rounded-full overflow-hidden">
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ) : (
            <div className="h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center text-accent mr-4">
              <span className="text-lg font-bold">{name.charAt(0)}</span>
            </div>
          )}
          
          <div>
            <h4 className="font-bold text-primary">{name}</h4>
            <p className="text-sm text-neutral-500">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 