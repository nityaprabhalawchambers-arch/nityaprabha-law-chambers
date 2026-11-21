import React from 'react';
import logoImg from '../assets/logo.jpg';

export type LogoVariant = 'full' | 'horizontal' | 'stacked' | 'monogram' | 'icon';
export type LogoSize = 'sm' | 'md' | 'lg' | 'xl';

interface LogoProps {
  variant?: LogoVariant;
  size?: LogoSize;
  className?: string;
  showTagline?: boolean;
}

export default function Logo({
  variant = 'stacked',
  size = 'md',
  className = '',
}: LogoProps) {
  // Height sizing for image logo depending on location & size prop
  const logoHeights = {
    sm: 'h-9',
    md: 'h-12',
    lg: 'h-24',
    xl: 'h-44 sm:h-56'
  };

  const iconHeights = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-16',
    xl: 'h-28'
  };

  return (
    <div className={`inline-flex items-center justify-center select-none group ${className}`}>
      {variant === 'icon' || variant === 'monogram' ? (
        /* ICON/FAVICON ONLY - CROPPED ACCORDINGLY */
        <div className={`relative overflow-hidden rounded-lg ${iconHeights[size]} aspect-square flex items-center justify-center border border-gold/30 shadow-lg shadow-gold/10`}>
          <img
            src={logoImg}
            alt="Nityaprabha Law Chambers Emblem"
            className="w-[220%] max-w-none -mt-[35%] transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ) : (
        /* FULL ASSET IMAGE LOGO - EXACT USER UPLOADED FILE */
        <div className="relative inline-flex items-center justify-center">
          <img
            src={logoImg}
            alt="Nityaprabha Law Chambers Logo"
            className={`${logoHeights[size]} w-auto object-contain rounded-md transition-all duration-300 group-hover:brightness-110 group-hover:scale-[1.01]`}
          />
        </div>
      )}
    </div>
  );
}
