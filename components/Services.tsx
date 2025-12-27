
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">Core Expertise</h2>
          <h3 className="text-4xl lg:text-6xl font-display font-black text-brand-primary mb-6 tracking-tighter">Specialist Engineering</h3>
          <p className="text-slate-500 max-w-3xl mx-auto text-xl leading-relaxed">Specializing in <span className="text-brand-primary font-bold">Vaillant</span> and <span className="text-brand-primary font-bold">Glowworm</span> systems.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="group bg-slate-50 p-12 rounded-[40px] transition-all duration-500 hover:bg-brand-primary hover:shadow-3xl hover:shadow-emerald-500/10 hover:-translate-y-3 border border-slate-100">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-emerald-500 mb-8 shadow-xl group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 transform group-hover:rotate-12">{service.icon}</div>
              <h4 className="text-2xl font-display font-black text-brand-primary mb-4 group-hover:text-white transition-colors">{service.title}</h4>
              <p className="text-slate-500 leading-relaxed group-hover:text-white/60 transition-colors text-lg">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
