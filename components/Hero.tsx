import React from 'react';
import { PHONE_NUMBER } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-slate-950" aria-labelledby="hero-heading">
      {/* Background Ambience - Dark Engineering Theme */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-brand-thermal/5 blur-[180px] rounded-full -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-brand-safety/5 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/4" />
        <div className="absolute inset-0 blueprint-grid opacity-20" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Content Column */}
          <div className="lg:col-span-6 space-y-10">
            <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full shadow-2xl backdrop-blur-md">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-thermal opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-thermal"></span>
              </div>
              <span className="text-white/80 text-[10px] font-mono font-black uppercase tracking-[0.3em]">System_Status: Optimal</span>
            </div>
            
            <div className="space-y-6">
              <h1 id="hero-heading" className="text-7xl md:text-8xl lg:text-9xl font-display font-black text-white leading-[0.85] tracking-tighter">
                Engineered <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-thermal via-brand-thermal to-brand-safety">Performance.</span>
              </h1>
              <p className="text-2xl text-slate-400 max-w-lg leading-relaxed font-medium">
                South Coast's technical authority in <span className="text-brand-thermal font-bold">Thermal Intelligence</span> and high-fidelity heating system diagnostics.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6 pt-4">
              <a href="#inquiry" className="group bg-white hover:bg-brand-thermal text-brand-primary px-10 py-5 rounded-[2rem] font-black text-xl transition-all shadow-3xl flex items-center gap-4 hover:-translate-y-1">
                Run Diagnostics
                <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
              <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-5 bg-white/5 border border-white/10 px-10 py-5 rounded-[2rem] hover:bg-white/10 transition-all group shadow-xl backdrop-blur-md">
                <div className="text-left">
                  <p className="text-[10px] text-brand-thermal uppercase font-black tracking-widest leading-none mb-1">Live Engineer</p>
                  <p className="text-xl text-white font-bold">{PHONE_NUMBER}</p>
                </div>
              </a>
            </div>
          </div>

          {/* Visualization Column - Thermal/Diagnostic focus */}
          <div className="lg:col-span-6 relative h-[700px] mt-12 lg:mt-0 flex items-center justify-center">
            {/* Main Visual: Boiler with Thermal Heatmap Overlays */}
            <div className="absolute top-0 right-0 w-[90%] aspect-[4/5] rounded-[4rem] overflow-hidden shadow-3xl border border-white/10 group z-10 bg-slate-900">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200" 
                alt="Boiler system technical diagnostic" 
                className="absolute inset-0 object-cover w-full h-full transform transition-transform duration-[8s] group-hover:scale-110 opacity-40 grayscale group-hover:grayscale-0"
              />
              {/* Thermal Glow Overlay */}
              <div className="absolute inset-0 thermal-overlay opacity-60 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-thermal/20 via-transparent to-brand-safety/10 pointer-events-none" />
              
              {/* Diagnostic Scanning Line */}
              <div className="absolute inset-0 w-full h-1 bg-brand-thermal/30 blur-sm animate-scan z-20 pointer-events-none" />

              {/* Pulsing Data Nodes */}
              <div className="absolute top-1/3 left-1/4 data-node w-4 h-4 bg-brand-thermal rounded-full shadow-[0_0_15px_#38bdf8] z-30">
                 <div className="absolute left-6 top-0 bg-brand-primary/80 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-[10px] text-white font-mono whitespace-nowrap">Flow_Temp: 68°C</div>
              </div>
              <div className="absolute bottom-1/4 right-1/3 data-node w-4 h-4 bg-brand-safety rounded-full shadow-[0_0_15px_#f97316] z-30" style={{animationDelay: '0.5s'}}>
                 <div className="absolute right-6 top-0 bg-brand-primary/80 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-[10px] text-white font-mono whitespace-nowrap">Modulation: 98.4%</div>
              </div>

              <div className="absolute top-10 left-10 bg-brand-primary/60 backdrop-blur-xl px-6 py-4 rounded-3xl border border-white/20">
                <p className="text-brand-thermal text-[10px] uppercase font-mono tracking-widest mb-1 font-bold">Analysis_Active</p>
                <h4 className="text-white font-display font-black text-2xl uppercase">Vaillant_X-Series</h4>
              </div>
            </div>

            {/* Floating Metric Card */}
            <div className="absolute -bottom-10 -left-10 w-[60%] glass-card p-8 rounded-[3rem] border border-white/20 shadow-3xl z-40 transform hover:-rotate-2 transition-transform duration-700">
               <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-brand-safety/10 rounded-2xl flex items-center justify-center text-brand-safety">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <div>
                    <p className="text-brand-primary font-black text-xl leading-none">Efficiency Peak</p>
                    <p className="text-brand-secondary text-xs uppercase tracking-widest font-bold mt-1">A++ Performance Verified</p>
                  </div>
               </div>
               <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="w-[98%] h-full bg-gradient-to-r from-brand-thermal to-brand-accent animate-pulse"></div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;