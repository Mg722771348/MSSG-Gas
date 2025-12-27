import React from 'react';
import { GAS_SAFE_ID, PHONE_NUMBER } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-white" aria-labelledby="hero-heading">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-primary/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/4" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-3 bg-slate-100 px-4 py-2 rounded-2xl">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-slate-600 text-xs font-black uppercase tracking-[0.2em]">Gas Safe Expert Engineering</span>
            </div>
            
            <div className="space-y-4">
              <h1 id="hero-heading" className="text-6xl md:text-7xl lg:text-8xl font-display font-black text-brand-primary leading-[0.85] tracking-tighter">
                Precision <br />
                <span className="text-emerald-600">Heating.</span>
              </h1>
              <p className="text-xl text-slate-500 max-w-lg leading-relaxed font-medium">
                South Coast boiler specialists. High-performance <span className="text-brand-primary font-bold">Vaillant ecoTEC plus</span> & <span className="text-brand-primary font-bold">Glow-worm Energy</span> installations with up to 10 year warranties.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#inquiry" className="bg-brand-primary hover:bg-slate-800 text-white px-8 py-4 rounded-2xl font-black text-lg transition-all shadow-xl flex items-center gap-3">
                Request Quote
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
              <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-4 bg-emerald-50 border border-emerald-100 px-8 py-4 rounded-2xl hover:bg-emerald-100 transition-all group">
                <div className="text-left">
                  <p className="text-[10px] text-emerald-600 uppercase font-black tracking-widest leading-none mb-1">Direct Line</p>
                  <p className="text-lg text-brand-primary font-bold">{PHONE_NUMBER}</p>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative h-[600px] mt-12 lg:mt-0">
            {/* Vaillant ecoTEC plus */}
            <div className="absolute top-0 right-0 w-4/5 aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group z-10 hover:z-30 transition-all duration-500 hover:scale-[1.02] bg-white">
              <img 
                src="https://www.vaillant.co.uk/downloads/images/ecotec-plus/ecotec-plus-combi-770x1024-1925341.jpg" 
                alt="Vaillant ecoTEC plus" 
                className="absolute inset-0 object-contain w-full h-full p-8 transform group-hover:scale-105 transition-transform duration-[2s]"
              />
              <div className="absolute bottom-10 left-10 z-20">
                <div className="bg-emerald-500 text-white px-4 py-1.5 rounded-full mb-4 inline-block shadow-lg">
                  <span className="text-[10px] font-black uppercase tracking-widest">Vaillant Approved</span>
                </div>
              </div>
            </div>

            {/* Glow-worm Energy */}
            <div className="absolute bottom-0 left-0 w-3/5 aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 group z-20 hover:scale-[1.05] transition-all duration-500 -translate-x-4 translate-y-8 bg-white">
              <img 
                src="https://www.glow-worm.co.uk/glow-worm/products/energy/energy-30c-combi-boiler-770x1024-517849.jpg" 
                alt="Glow-worm Energy" 
                className="absolute inset-0 object-contain w-full h-full p-6 transform group-hover:scale-105 transition-transform duration-[2s]"
              />
              <div className="absolute top-10 right-10 z-20 text-right">
                <div className="bg-orange-500 text-white px-4 py-1.5 rounded-full mb-4 inline-block shadow-lg">
                  <span className="text-[10px] font-black uppercase tracking-widest">Glow-worm Partner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;