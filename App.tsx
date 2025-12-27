import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import SmartDiagnostics from './components/SmartDiagnostics';
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
        <SmartDiagnostics />
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