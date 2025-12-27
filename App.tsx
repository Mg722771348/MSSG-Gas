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
        
        <section id="expertise" className="bg-slate-50 py-12 border-y border-slate-100 relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-8 md:gap-16">
             <span className="font-display font-bold text-xl uppercase tracking-tighter text-emerald-600">Vaillant Accredited</span>
             <span className="font-display font-bold text-xl uppercase tracking-tighter text-orange-600">Glowworm Partner</span>
             <span className="font-display font-bold text-xl uppercase tracking-tighter text-slate-400">Gas Safe {GAS_SAFE_ID}</span>
          </div>
        </section>

        <Services />

        {/* Technical Specification Gallery */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">Design Precision</h2>
                <h3 className="text-4xl lg:text-6xl font-display font-black text-brand-primary tracking-tighter leading-none">Engineering <br /><span className="text-slate-400">Schematics.</span></h3>
              </div>
              <p className="text-xl text-slate-500 leading-relaxed">
                Clean designs, modular blueprints, and precision planning. Every installation starts with a rigorous technical drawing phase to ensure 100% system efficiency.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all group bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800" 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60" 
                  style={{ filter: 'sepia(1) hue-rotate(185deg) contrast(1.3) brightness(0.8)' }}
                  alt="System Architecture Drawing" 
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                   <p className="text-emerald-400 font-mono text-[10px] uppercase tracking-widest">Architectural_Plan_01</p>
                </div>
              </div>
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all group mt-8 bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800" 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60" 
                  style={{ filter: 'sepia(1) hue-rotate(185deg) contrast(1.3) brightness(0.8)' }}
                  alt="CAD Interface Design" 
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                   <p className="text-emerald-400 font-mono text-[10px] uppercase tracking-widest">CAD_Interface_A</p>
                </div>
              </div>
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all group bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1581092341315-f48123284687?auto=format&fit=crop&q=80&w=800" 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60" 
                  style={{ filter: 'sepia(1) hue-rotate(185deg) contrast(1.3) brightness(0.8)' }}
                  alt="Component Drafting" 
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                   <p className="text-emerald-400 font-mono text-[10px] uppercase tracking-widest">Detail_Schematic_C</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SmartDiagnostics />
        <SystemVisualizer />
        <InquiryForm />
        
        <footer className="bg-slate-950 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <Logo light className="mb-8" />
                <p className="text-slate-400 max-w-sm mb-6 text-sm leading-relaxed">
                  Premier Gas & Electrical services serving the South Coast. Specialists in sustainable energy and precision engineering for 33+ years.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-xs">Services</h4>
                  <ul className="space-y-2 text-slate-400 text-sm">
                    <li>Boiler Breakdown</li>
                    <li>Full Installations</li>
                    <li>Safety Certificates</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-xs">Contact</h4>
                  <ul className="space-y-2 text-slate-400 text-sm">
                    <li><a href={`tel:${PHONE_NUMBER}`} className="hover:text-emerald-400 transition-colors font-bold text-white">{PHONE_NUMBER}</a></li>
                    <li>Portsmouth & Southampton</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-500 text-xs">&copy; {new Date().getFullYear()} {BRAND_NAME}.</p>
            </div>
          </div>
        </footer>
      </main>
      <AIAssistant />
    </div>
  );
};

export default App;