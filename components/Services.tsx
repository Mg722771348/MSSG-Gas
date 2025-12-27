import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-xs font-black uppercase tracking-widest mb-4">
            Our Expertise
          </div>
          <h3 className="text-4xl lg:text-6xl font-display font-black text-brand-primary mb-6 tracking-tighter">
            Specialist <span className="text-emerald-600">Engineering.</span>
          </h3>
          <p className="text-slate-500 max-w-3xl mx-auto text-xl leading-relaxed">
            From emergency repairs to precision installs, we provide the South Coast's most reliable <span className="text-brand-primary font-bold">Vaillant</span> and <span className="text-brand-primary font-bold">Glow-worm</span> services.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="group bg-white p-12 rounded-[40px] transition-all duration-500 hover:shadow-3xl hover:shadow-emerald-500/10 hover:-translate-y-3 border border-slate-100 flex flex-col h-full">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-500 mb-8 transition-all duration-500 transform group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white">
                {service.icon}
              </div>
              <h4 className="text-2xl font-display font-black text-brand-primary mb-4 transition-colors">
                {service.title}
              </h4>
              <p className="text-slate-500 leading-relaxed transition-colors text-lg flex-grow">
                {service.description}
              </p>
              <div className="mt-8 pt-8 border-t border-slate-50 opacity-0 group-hover:opacity-100 transition-opacity">
                <a href="#inquiry" className="text-emerald-600 font-bold text-sm flex items-center gap-2">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;