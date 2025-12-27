import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-14", light = false }) => {
  return (
    <div className={`flex items-center gap-4 transition-all duration-500 group select-none ${className}`}>
      <div className="relative">
        {/* Subtle Outer Pulse Animation */}
        <div className={`absolute -inset-3 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-1000 animate-pulse-glow pointer-events-none ${light ? 'bg-white/20' : 'bg-emerald-500/20'}`}></div>
        
        {/* Logo Container */}
        <div className={`relative w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-500 overflow-hidden group-hover:scale-105 group-active:scale-95 border border-transparent ${light ? 'bg-white group-hover:border-white/20' : 'bg-brand-primary group-hover:border-emerald-500/30'}`}>
          <svg viewBox="0 0 100 100" className="w-10 h-10 transition-transform duration-700 group-hover:rotate-[360deg] ease-in-out" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Background Circle */}
            <path 
              d="M50 15C30.67 15 15 30.67 15 50C15 69.33 30.67 85 50 85C69.33 85 85 69.33 85 50" 
              stroke={light ? "#0f172a" : "#10b981"} 
              strokeWidth="6" 
              strokeLinecap="round" 
              className="opacity-10 transition-colors duration-500" 
            />
            {/* Active Circle Segment */}
            <path 
              d="M85 50C85 30.67 69.33 15 50 15C30.67 15 15 30.67 15 50" 
              stroke={light ? "#0f172a" : "#10b981"} 
              strokeWidth="6" 
              strokeLinecap="round" 
              className="transition-colors duration-500"
            />
            {/* House/Boiler Icon */}
            <path 
              d="M35 55L50 40L65 55V70H35V55Z" 
              fill={light ? "#0f172a" : "#10b981"} 
              className="transition-colors duration-500"
            />
            {/* Accent Dot */}
            <circle cx="50" cy="40" r="3" fill={light ? "#10b981" : "#fff"} className="transition-all duration-500" />
          </svg>
          
          {/* Scanning Line Effect on Hover */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-[1.5s] ease-linear pointer-events-none"></div>
        </div>
      </div>
      
      {/* Textual Branding */}
      <div className="flex flex-col">
        <h1 className={`font-display font-black text-2xl leading-none tracking-tighter transition-colors duration-500 ${light ? 'text-white' : 'text-brand-primary'}`}>
          MSSG
        </h1>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className={`text-[10px] uppercase font-black tracking-[0.2em] transition-colors duration-500 ${light ? 'text-emerald-400' : 'text-emerald-600'}`}>
            Efficiency
          </span>
          <span className={`w-1 h-1 rounded-full transition-colors duration-500 ${light ? 'bg-white/20' : 'bg-slate-300'}`}></span>
          <span className={`text-[10px] uppercase font-bold tracking-[0.1em] transition-colors duration-500 ${light ? 'text-white/40' : 'text-brand-secondary'}`}>
            Group
          </span>
        </div>
      </div>
    </div>
  );
};

export default Logo;