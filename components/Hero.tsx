import React from 'react';
import { PHONE_NUMBER } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-white" aria-labelledby="hero-heading">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-emerald-500/5 blur-[180px] rounded-full -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-slate-900/5 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/4" />
        {/* Global Blueprint Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] blueprint-grid" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Content Column */}
          <div className="lg:col-span-6 space-y-10">
            <div className="inline-flex items-center gap-4 bg-brand-primary px-5 py-2.5 rounded-full shadow-2xl">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </div>
              <span className="text-white text-[10px] font-mono font-black uppercase tracking-[0.3em]">Phase_01: Technical Drawing</span>
            </div>
            
            <div className="space-y-6">
              <h1 id="hero-heading" className="text-7xl md:text-8xl lg:text-9xl font-display font-black text-brand-primary leading-[0.8] tracking-tighter">
                Precision <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">Planning.</span>
              </h1>
              <p className="text-2xl text-slate-500 max-w-lg leading-relaxed font-medium">
                High-tech <span className="text-brand-primary font-bold">schematics</span> for the South Coast's premier heating systems. Professional Vaillant & Glow-worm engineering.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6 pt-4">
              <a href="#inquiry" className="group bg-brand-primary hover:bg-slate-800 text-white px-10 py-5 rounded-[2rem] font-black text-xl transition-all shadow-3xl flex items-center gap-4 hover:-translate-y-1">
                Start Schematic
                <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
              <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-5 bg-white border-2 border-slate-100 px-10 py-5 rounded-[2rem] hover:bg-slate-50 transition-all hover:border-emerald-200 group shadow-xl">
                <div className="text-left">
                  <p className="text-[10px] text-emerald-600 uppercase font-black tracking-widest leading-none mb-1">Direct Line</p>
                  <p className="text-xl text-brand-primary font-bold">{PHONE_NUMBER}</p>
                </div>
              </a>
            </div>
          </div>

          {/* Visualization Column */}
          <div className="lg:col-span-6 relative h-[700px] mt-12 lg:mt-0 flex items-center justify-center">
            {/* Primary Blueprint */}
            <div className="absolute top-0 right-0 w-[85%] aspect-[4/5] rounded-[4rem] overflow-hidden shadow-3xl border border-slate-100 group z-10 hover:z-30 transition-all duration-1000 bg-slate-900">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200" 
                alt="Boiler system CAD schematic" 
                className="absolute inset-0 object-cover w-full h-full transform transition-transform duration-[6s] group-hover:scale-110 blueprint-fx opacity-60"
              />
              <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none"></div>
              
              <div className="absolute top-10 left-10 glass-card px-6 py-4 rounded-3xl border border-white/20">
                <p className="text-emerald-600 text-[10px] uppercase font-mono tracking-widest mb-1 font-bold">Revision_08</p>
                <h4 className="text-brand-primary font-display font-black text-2xl uppercase">System_X1</h4>
              </div>
              <div className="absolute bottom-10 right-10 bg-emerald-500 text-brand-primary px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-2xl">
                A++ Efficiency Core
              </div>
            </div>

            {/* Secondary Technical Detail */}
            <div className="absolute -bottom-8 -left-8 w-[65%] aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-3xl border-[8px] border-white group z-20 hover:scale-105 transition-all duration-1000 bg-white float-animation">
              <img 
                src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800" 
                alt="Engineering blueprint component" 
                className="absolute inset-0 object-cover w-full h-full transform transition-transform duration-[6s] group-hover:scale-110 blueprint-fx opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent opacity-40" />
              <div className="absolute bottom-10 left-10">
                 <p className="text-emerald-300 text-[10px] uppercase font-mono tracking-widest mb-1 font-bold">Component_Detail_B</p>
                 <h4 className="text-white font-black text-xl tracking-tight">Flow Dynamics</h4>
              </div>
            </div>

            {/* Decorative Dimensions */}
            <div className="absolute top-1/2 left-0 w-32 h-px bg-emerald-500/40 z-40 hidden lg:flex items-center justify-between">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
              <span className="text-[9px] font-mono text-emerald-600 -mt-5 font-bold">450.00mm</span>
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;