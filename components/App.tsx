import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import SmartDiagnostics from './components/SmartDiagnostics';
import SystemVisualizer from './components/SystemVisualizer';
import InquiryForm from './components/InquiryForm';
import AIAssistant from './components/AIAssistant';
import Logo from './components/Logo';
import { GAS_SAFE_ID, BRAND_NAME, PHONE_NUMBER } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-brand-primary">
      <Navigation />
      <main>
        <Hero />
        
        {/* Accreditation Ticker - High Performance Engineering */}
        <section id="expertise" className="bg-slate-50 py-12 border-y border-slate-100 relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-8 md:gap-16">
             <div className="flex items-center gap-3 group cursor-default">
               <div className="w-2 h-2 bg-brand-thermal rounded-full animate-pulse"></div>
               <span className="font-display font-bold text-xl uppercase tracking-tighter text-slate-900 group-hover:text-brand-thermal transition-colors">Vaillant Advanced Partner</span>
             </div>
             <div className="flex items-center gap-3 group cursor-default">
               <div className="w-2 h-2 bg-brand-safety rounded-full animate-pulse"></div>
               <span className="font-display font-bold text-xl uppercase tracking-tighter text-slate-900 group-hover:text-brand-safety transition-colors">Glowworm Expert Installer</span>
             </div>
             <div className="flex items-center gap-3 group cursor-default">
               <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
               <span className="font-display font-bold text-xl uppercase tracking-tighter text-slate-400">Gas Safe {GAS_SAFE_ID}</span>
             </div>
          </div>
        </section>

        <Services />

        {/* Thermal Intelligence Gallery - Industry Standout Section */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-brand-thermal font-bold uppercase tracking-widest text-sm mb-4">Thermal Engineering</h2>
                <h3 className="text-4xl lg:text-6xl font-display font-black text-brand-primary tracking-tighter leading-[0.9]">
                  Digital Flow <br /><span className="text-slate-400">Simulation.</span>
                </h3>
              </div>
              <p className="text-xl text-slate-500 leading-relaxed">
                We utilize high-resolution <span className="text-brand-primary font-bold">thermal mapping</span> and digital flow analysis to optimize your heating infrastructure. Every project begins with <span className="text-brand-thermal font-bold italic">Digital Flow Simulation</span> to ensure 100% thermal efficiency before a single pipe is fitted.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Thermal Mapping Visual 1 */}
              <div className="relative group rounded-[3rem] overflow-hidden aspect-[4/5] bg-slate-950 shadow-2xl transition-all duration-700 hover:shadow-brand-thermal/20">
                <img 
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800" 
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-110 transition-transform duration-1000"
                  alt="Thermal system mapping"
                />
                <div className="absolute inset-0 thermal-overlay opacity-30 group-hover:opacity-70 transition-opacity" />
                <div className="absolute bottom-8 left-8 right-8">
                   <p className="text-brand-thermal font-mono text-[10px] uppercase tracking-widest mb-2">Sim_Matrix_01</p>
                   <h4 className="text-white font-bold text-xl">Flow Dynamics</h4>
                </div>
              </div>

              {/* Thermal Mapping Visual 2 */}
              <div className="relative group rounded-[3rem] overflow-hidden aspect-[4/5] bg-slate-950 shadow-2xl mt-12 transition-all duration-700 hover:shadow-brand-thermal/20">
                <img 
                  src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800" 
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-110 transition-transform duration-1000"
                  alt="Digital boiler interface"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-thermal/40 to-transparent opacity-0 group-hover:opacity-60 transition-opacity" />
                <div className="absolute bottom-8 left-8 right-8">
                   <p className="text-brand-thermal font-mono text-[10px] uppercase tracking-widest mb-2">Logic_Control_V2</p>
                   <h4 className="text-white font-bold text-xl">Smart Integration</h4>
                </div>
              </div>

              {/* Thermal Mapping Visual 3 */}
              <div className="relative group rounded-[3rem] overflow-hidden aspect-[4/5] bg-slate-950 shadow-2xl transition-all duration-700 hover:shadow-brand-thermal/20">
                <img 
                  src="https://images.unsplash.com/photo-1581092341315-f48123284687?auto=format&fit=crop&q=80&w=800" 
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-110 transition-transform duration-1000"
                  alt="Pipework engineering"
                />
                <div className="absolute inset-0 thermal-overlay opacity-30 group-hover:opacity-70 transition-opacity" />
                <div className="absolute bottom-8 left-8 right-8">
                   <p className="text-brand-thermal font-mono text-[10px] uppercase tracking-widest mb-2">Infrastructure_X</p>
                   <h4 className="text-white font-bold text-xl">Precision Pipework</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SmartDiagnostics />
        <SystemVisualizer />
        <InquiryForm />
        
        <footer className="bg-slate-950 text-white py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <Logo light className="mb-8" />
                <p className="text-slate-400 max-w-sm mb-6 text-sm leading-relaxed font-medium">
                  The South Coast authority in thermal performance and engineering intelligence. Specialized Vaillant & Glow-worm partners for 33+ years.
                </p>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-thermal/20 hover:border-brand-thermal transition-all cursor-pointer">
                    <span className="text-xs font-bold">VS</span>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-safety/20 hover:border-brand-safety transition-all cursor-pointer">
                    <span className="text-xs font-bold">GW</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-brand-thermal mb-4 uppercase tracking-[0.2em] text-[10px]">Technical</h4>
                  <ul className="space-y-3 text-slate-400 text-sm font-medium">
                    <li className="hover:text-white transition-colors cursor-pointer">Thermal Diagnostics</li>
                    <li className="hover:text-white transition-colors cursor-pointer">Flow Optimization</li>
                    <li className="hover:text-white transition-colors cursor-pointer">System Audits</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-brand-safety mb-4 uppercase tracking-[0.2em] text-[10px]">Dispatch</h4>
                  <ul className="space-y-3 text-slate-400 text-sm font-medium">
                    <li><a href={`tel:${PHONE_NUMBER}`} className="hover:text-white transition-colors font-bold text-white text-lg">{PHONE_NUMBER}</a></li>
                    <li className="text-[10px] uppercase tracking-widest text-slate-500">PO & SO Postcodes</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-500 text-[10px] uppercase tracking-[0.3em] font-black">&copy; {new Date().getFullYear()} {BRAND_NAME}. ALL SYSTEMS OPERATIONAL.</p>
              <div className="flex gap-8">
                <span className="text-[10px] text-slate-600 uppercase font-bold tracking-widest">ISO 9001 COMPLIANT LOGIC</span>
              </div>
            </div>
          </div>
        </footer>
      </main>
      <AIAssistant />
    </div>
  );
};

export default App;