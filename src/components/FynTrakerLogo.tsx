import { motion } from 'motion/react';

interface FynTrakerLogoProps {
  className?: string;
  iconOnly?: boolean;
  textSize?: string;
}

export default function FynTrakerLogo({ 
  className = "h-9", 
  iconOnly = false,
  textSize = "text-lg"
}: FynTrakerLogoProps) {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Precise high-fidelity SVG icon modeled after user upload */}
      <div className="relative w-9 h-9 flex-shrink-0">
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-full drop-shadow-[0_4px_12px_rgba(15,43,92,0.15)]"
        >
          {/* Main Dark Navy Blue track curved path */}
          <path
            d="M40 82V48C40 37 49 28 60 28H74"
            stroke="#103F7A"
            strokeWidth="15"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Accent Orange Arrow parallel track */}
          <path
            d="M58 68L80 46"
            stroke="#FF7E00"
            strokeWidth="12"
            strokeLinecap="round"
          />
          {/* Arrowhead */}
          <path
            d="M68 41L85 41L85 58"
            stroke="#FF7E00"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {!iconOnly && (
        <div className="flex flex-col items-start leading-[1.1] text-left">
          <span className={`${textSize} font-black font-display tracking-tight text-white`}>
            FynTraker <span className="text-[#FF7E00]">Hub</span>
          </span>
          <span className="text-[8px] font-black tracking-[0.15em] text-[#103F7A]/80 uppercase font-mono">
            TRACK YOUR PATH
          </span>
        </div>
      )}
    </div>
  );
}
