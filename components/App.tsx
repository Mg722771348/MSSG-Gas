
import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import InquiryForm from './components/InquiryForm';
import AIAssistant from './components/AIAssistant';
import Logo from './components/Logo';
import { GAS_SAFE_ID, BRAND_NAME, PHONE_NUMBER } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-brand-primary">
      <Navigation />
      <main>
        <Hero />
        <section id="expertise" className="bg-white py-12 border-b border-slate-100 relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60">
             <span className="font-display font-bold text-xl uppercase tracking-tighter border-b-2 border-emerald-500 pb-1">Vaillant Accredited</span>
             <span className="font-display font-bold text-xl uppercase tracking-tighter border-b-2 border-amber-500 pb-1">Glowworm Partner</span>
             <span className="font-display font-bold text-xl uppercase tracking-tighter border-b-2 border-brand-safety pb-1">Gas Safe {GAS_SAFE_ID}</span>
          </div>
        </section>
        <Services />
        <InquiryForm />
        <footer className="bg-slate-950 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <Logo light className="mb-8" />
                <p className="text-slate-400 max-w-sm mb-6 text-sm leading-relaxed">
                  Premier Gas & Electrical services serving the South Coast. Specialists in sustainable energy and precision engineering.
                </p>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-500 transition-colors cursor-pointer">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-xs">Legal</h4>
                  <ul className="space-y-2 text-slate-400 text-sm">
                    <li>Gas Safe Registered: {GAS_SAFE_ID}</li>
                    <li>Insurance: Liability Fully Covered</li>
                    <li>Accreditation: NVQ Level 3</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-xs">Contact</h4>
                  <ul className="space-y-2 text-slate-400 text-sm">
                    <li><a href={`tel:${PHONE_NUMBER}`} className="hover:text-emerald-400 transition-colors">{PHONE_NUMBER}</a></li>
                    <li>Serving Portsmouth & Southampton</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-500 text-xs">&copy; {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.</p>
              <div className="flex gap-6 text-xs text-slate-500">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
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
