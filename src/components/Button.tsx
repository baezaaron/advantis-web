import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  // Base classes
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 text-center';
  
  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5',
    lg: 'px-6 py-3 text-lg',
  };
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-accent hover:bg-accent/90 text-white shadow-sm hover:shadow',
    secondary: 'bg-secondary hover:bg-secondary/90 text-white shadow-sm hover:shadow',
    outline: 'border-2 border-accent text-accent hover:bg-accent/10',
  };
  
  // Combine classes
  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className} ${
    disabled ? 'opacity-60 cursor-not-allowed' : ''
  }`;
  
  // Render as link if href is provided
  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }
  
  // Otherwise render as button
  return (
    <button 
      type={type} 
      className={combinedClasses} 
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
} 