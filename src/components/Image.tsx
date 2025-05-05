'use client';

import { useState } from 'react';
import NextImage, { ImageProps as NextImageProps } from 'next/image';

interface ImageProps extends Omit<NextImageProps, 'onError'> {
  fallbackSrc?: string;
}

export default function Image({ src, alt, fallbackSrc, ...props }: ImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [error, setError] = useState(false);

  const handleError = () => {
    if (!error) {
      setError(true);
      if (fallbackSrc) {
        setImgSrc(fallbackSrc);
      }
    }
  };

  if (error && !fallbackSrc) {
    // Render placeholder div with the same dimensions
    return (
      <div 
        className="bg-neutral-200 flex items-center justify-center text-neutral-500 text-sm text-center p-2"
        style={{ 
          width: props.width ? `${props.width}px` : '100%',
          height: props.height ? `${props.height}px` : '100%',
        }}
      >
        {alt || 'Image not available'}
      </div>
    );
  }

  return (
    <NextImage
      src={imgSrc}
      alt={alt}
      onError={handleError}
      {...props}
    />
  );
} 