import React from 'react';

// Elegant rotating background Mandala
export const Mandala = ({ className = '', size = 500, color = 'currentColor', opacity = 0.05 }) => (
  <svg
    className={`animate-spin-slow pointer-events-none select-none ${className}`}
    width={size}
    height={size}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ opacity }}
  >
    {/* Outer ring */}
    <circle cx="100" cy="100" r="95" stroke={color} strokeWidth="0.5" strokeDasharray="3 3" />
    <circle cx="100" cy="100" r="90" stroke={color} strokeWidth="0.25" />
    
    {/* Ray lines */}
    {Array.from({ length: 24 }).map((_, i) => {
      const angle = (i * 360) / 24;
      return (
        <line
          key={i}
          x1="100"
          y1="100"
          x2={100 + 90 * Math.cos((angle * Math.PI) / 180)}
          y2={100 + 90 * Math.sin((angle * Math.PI) / 180)}
          stroke={color}
          strokeWidth="0.15"
        />
      );
    })}

    {/* Concentric rings */}
    <circle cx="100" cy="100" r="70" stroke={color} strokeWidth="0.5" />
    <circle cx="100" cy="100" r="50" stroke={color} strokeWidth="0.75" strokeDasharray="1 2" />
    <circle cx="100" cy="100" r="30" stroke={color} strokeWidth="0.5" />
    <circle cx="100" cy="100" r="15" stroke={color} strokeWidth="1" />

    {/* Petals */}
    {Array.from({ length: 12 }).map((_, i) => {
      const angle = (i * 360) / 12;
      const rad = (angle * Math.PI) / 180;
      const x = 100 + 40 * Math.cos(rad);
      const y = 100 + 40 * Math.sin(rad);
      return (
        <circle
          key={i}
          cx={x}
          cy={y}
          r="10"
          stroke={color}
          strokeWidth="0.3"
        />
      );
    })}

    {/* Star shape center */}
    <path
      d="M100 80 L105 95 L120 100 L105 105 L100 120 L95 105 L80 100 L95 95 Z"
      fill={color}
      opacity="0.5"
    />
  </svg>
);

// Auspicious Kalash symbol
export const Kalash = ({ className = '', size = 48, color = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Coconut */}
    <path d="M50 15 L38 35 L62 35 Z" fill={color} opacity="0.3" />
    <path d="M50 10 L35 38 L65 38 Z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
    
    {/* Mango Leaves */}
    <path d="M30 38 C25 25, 45 35, 42 38" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M70 38 C75 25, 55 35, 58 38" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M50 38 C50 20, 40 32, 45 38" stroke={color} strokeWidth="1.5" />
    <path d="M50 38 C50 20, 60 32, 55 38" stroke={color} strokeWidth="1.5" />
    
    {/* Pot (Kalash) body */}
    <path
      d="M32 38 H68 L74 46 C78 52, 78 70, 68 80 C58 90, 42 90, 32 80 C22 70, 22 52, 26 46 Z"
      stroke={color}
      strokeWidth="2"
      strokeLinejoin="round"
    />
    
    {/* Swastika / Auspicious mark on Kalash */}
    <path
      d="M44 54 H56 M50 48 V60 M44 48 V54 M56 54 V60"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.7"
    />
    
    {/* Neck band */}
    <path d="M30 42 H70" stroke={color} strokeWidth="2" />
  </svg>
);

// Blooming Lotus symbol
export const Lotus = ({ className = '', size = 48, color = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Central petal */}
    <path d="M50 20 C42 40, 42 70, 50 80 C58 70, 58 40, 50 20 Z" stroke={color} strokeWidth="2" fill={color} fillOpacity="0.1" />
    
    {/* Left petals */}
    <path d="M50 40 C30 35, 20 60, 45 80 C32 65, 38 48, 50 40 Z" stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.05" />
    <path d="M50 55 C15 50, 10 75, 42 82 C22 73, 28 62, 50 55 Z" stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.02" />
    
    {/* Right petals */}
    <path d="M50 40 C70 35, 80 60, 55 80 C68 65, 62 48, 50 40 Z" stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.05" />
    <path d="M50 55 C85 50, 90 75, 58 82 C78 73, 72 62, 50 55 Z" stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.02" />
    
    {/* Base leaves */}
    <path d="M25 80 C35 85, 65 85, 75 80 C60 76, 40 76, 25 80 Z" stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.2" />
  </svg>
);

// Traditional Temple Border / Divider
export const TempleDivider = ({ className = '', color = 'currentColor', height = 24 }) => (
  <div className={`w-full overflow-hidden flex items-center justify-center pointer-events-none select-none ${className}`} style={{ height }}>
    <svg width="100%" height="100%" viewBox="0 0 1200 24" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 12 H1200 M600 2 L590 12 L600 22 L610 12 Z M400 12 C400 2, 420 2, 420 12 C420 22, 440 22, 440 12 M800 12 C800 2, 820 2, 820 12 C820 22, 840 22, 840 12 M200 12 C200 6, 210 6, 210 12 C210 18, 220 18, 220 12 M1000 12 C1000 6, 1010 6, 1010 12 C1010 18, 1020 18, 1020 12"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.3"
      />
      {/* Repeating small temple spires */}
      {Array.from({ length: 40 }).map((_, i) => {
        const x = (i * 30) + 15;
        if (x === 600 || x === 415 || x === 815) return null; // skip centers
        return (
          <path
            key={i}
            d={`M${x - 6} 12 L${x} 6 L${x + 6} 12`}
            stroke={color}
            strokeWidth="0.75"
            opacity="0.25"
          />
        );
      })}
    </svg>
  </div>
);

// Kundali Grid (Vedic Chart Outline)
export const KundaliIcon = ({ className = '', size = 48, color = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Outer boundary */}
    <rect x="5" y="5" width="90" height="90" stroke={color} strokeWidth="2" />
    
    {/* Diagonals */}
    <line x1="5" y1="5" x2="95" y2="95" stroke={color} strokeWidth="1.5" />
    <line x1="95" y1="5" x2="5" y2="95" stroke={color} strokeWidth="1.5" />
    
    {/* Inner Diamond */}
    <path d="M50 5 L95 50 L50 95 L5 50 Z" stroke={color} strokeWidth="1.5" />
    
    {/* Subtle central dot */}
    <circle cx="50" cy="50" r="2" fill={color} />
  </svg>
);

// Vaastu Purush Compass Symbol
export const VaastuCompass = ({ className = '', size = 48, color = 'currentColor' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="50" cy="50" r="42" stroke={color} strokeWidth="2" />
    <circle cx="50" cy="50" r="36" stroke={color} strokeWidth="0.5" strokeDasharray="2 2" />
    
    {/* Direction indicators */}
    <line x1="50" y1="8" x2="50" y2="92" stroke={color} strokeWidth="1.5" />
    <line x1="8" y1="50" x2="92" y2="50" stroke={color} strokeWidth="1.5" />
    
    {/* Diagonal direction indicators */}
    <line x1="20" y1="20" x2="80" y2="80" stroke={color} strokeWidth="0.75" strokeDasharray="4 2" />
    <line x1="80" y1="20" x2="20" y2="80" stroke={color} strokeWidth="0.75" strokeDasharray="4 2" />
    
    {/* North arrow pointer */}
    <path d="M50 15 L54 35 L50 30 L46 35 Z" fill={color} />
    
    {/* Center circle */}
    <circle cx="50" cy="50" r="6" stroke={color} strokeWidth="1.5" fill="#EDE7DA" />
    
    {/* Traditional letters for N E S W */}
    <text x="47" y="14" fill={color} fontSize="8" fontFamily="sans-serif" fontWeight="bold">N</text>
    <text x="86" y="53" fill={color} fontSize="8" fontFamily="sans-serif" fontWeight="bold">E</text>
    <text x="48" y="91" fill={color} fontSize="8" fontFamily="sans-serif" fontWeight="bold">S</text>
    <text x="10" y="53" fill={color} fontSize="8" fontFamily="sans-serif" fontWeight="bold">W</text>
  </svg>
);
