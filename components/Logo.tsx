import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-14", light = false }) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="relative group">
        <div className={`relative w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-500 overflow-hidden ${light ? 'bg-white' : 'bg-brand-primary'}`}>
          <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 15C30.67 15 15 30.67 15 50C15 69.33 30.67 85 50 85C69.33 85 85 69.33 85 50" stroke={light ? "#0f172a" : "#10b981"} strokeWidth="8" strokeLinecap="round" className="opacity-20" />
            <path d="M85 50C85 30.67 69.33 15 50 15C30.67 15 15 30.67 15 50" stroke={light ? "#0f172a" : "#10b981"} strokeWidth="8" strokeLinecap="round" />
            <path d="M35 55L50 40L65 55V70H35V55Z" fill={light ? "#0f172a" : "#10b981"} />
            <circle cx="50" cy="40" r="4" fill="#fff" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className={`font-display font-black text-2xl leading-none tracking-tighter ${light ? 'text-white' : 'text-brand-primary'}`}>MSSG</h1>
        <div className="flex items-center gap-2">
          <span className={`text-[10px] uppercase font-bold tracking-[0.25em] ${light ? 'text-emerald-400' : 'text-emerald-600'}`}>Efficiency</span>
          <span className={`w-1 h-1 rounded-full ${light ? 'bg-white/30' : 'bg-slate-300'}`}></span>
          <span className={`text-[10px] uppercase font-bold tracking-[0.1em] ${light ? 'text-white/60' : 'text-brand-secondary'}`}>Group</span>
        </div>
      </div>
    </div>
  );
};

export default Logo;