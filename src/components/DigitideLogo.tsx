import React from 'react';

interface DigitideLogoProps {
  className?: string;
  size?: number | string;
}

export default function DigitideLogo({ className = 'w-10 h-10', size }: DigitideLogoProps) {
  const widthHeight = size || undefined;

  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={widthHeight ? { width: widthHeight, height: widthHeight } : undefined}
      id="digitide-gorgeous-svg-logo"
    >
      <defs>
        {/* Main "D" Outer Blue Gradient */}
        <linearGradient id="logo-d-grad" x1="20" y1="10" x2="110" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0a3580" />
          <stop offset="35%" stopColor="#0052cc" />
          <stop offset="70%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>

        {/* Major Wave Body Gradient */}
        <linearGradient id="logo-wave-grad" x1="25" y1="80" x2="80" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#05153a" />
          <stop offset="40%" stopColor="#0842a8" />
          <stop offset="80%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>

        {/* Glow & Highlight Gradient */}
        <linearGradient id="logo-highlight-grad" x1="30" y1="80" x2="70" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
      </defs>

      {/* Floating digital pixels at the top-left (the pixelated tail of the "D") */}
      {/* Scattered layout matching the upload */}
      <rect x="18" y="20" width="3.5" height="3.5" fill="#094cb0" rx="0.5" />
      <rect x="23" y="25" width="5.5" height="5.5" fill="#0052cc" rx="0.8" />
      <rect x="36" y="21" width="4.5" height="4.5" fill="#06b6d4" rx="0.8" />
      <rect x="31" y="16" width="3" height="3" fill="#0ea5e9" rx="0.5" />

      <rect x="33" y="32" width="4" height="4" fill="#0ea5e9" rx="0.6" />
      <rect x="42" y="27" width="5" height="5" fill="#0052cc" rx="0.9" />
      <rect x="45" y="33" width="6.5" height="6.5" fill="#0ea5e9" rx="1" />
      <rect x="37" y="39" width="4.5" height="4.5" fill="#06b6d4" rx="0.8" />

      {/* The majestic Letter "D" outer curve that wraps back */}
      {/* Loops around the right with high fidelity */}
      <path
        d="M 42 18 
           C 48 18, 54 18, 62 18 
           C 88 18, 108 34, 108 58 
           C 108 81, 88 98, 62 98 
           C 51 98, 41 95, 33 88 
           C 40 85, 48 83, 56 83
           C 74 83, 89 74, 94 58
           C 98 46, 92 32, 76 28
           C 66 26, 52 28, 48 28
           C 45 28, 46 25, 48 22"
        fill="url(#logo-d-grad)"
      />

      {/* Core Ocean Wave swelling inside the 'D' */}
      <path
        d="M 28 88 
           C 28 88, 30 75, 35 66 
           C 41 53, 54 44, 69 44
           C 76 44, 82 48, 80 57
           C 78 65, 69 68, 58 64
           C 46 60, 42 70, 36 78
           C 31 84, 28 88, 28 88 Z"
        fill="url(#logo-wave-grad)"
      />

      {/* Layered Highlights inside the Wave (the crest curves) */}
      <path
        d="M 28 88
           C 33 80, 46 72, 60 72
           C 74 72, 81 64, 78 57
           C 76 52, 70 48, 63 48
           C 51 48, 40 56, 34 68
           C 29 77, 28 88, 28 88 Z"
        fill="url(#logo-highlight-grad)"
        opacity="0.3"
      />

      {/* Sweeping foam lines at the bottom left */}
      <path
        d="M 28 88 C 34 82, 45 81, 56 82 C 67 83, 76 81, 81 78"
        stroke="#ffffff"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M 28 78 C 34 74, 43 72, 53 74 C 63 76, 71 73, 75 70"
        stroke="#0ea5e9"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M 28 68 C 35 63, 48 64, 58 67 M 40 55 C 50 51, 62 52, 69 57"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}
