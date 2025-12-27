
import React, { useState } from 'react';
import { InquiryData } from '../types';
import { PHONE_NUMBER } from '../constants';
import { optimizeInquiry } from '../services/geminiService';

const InquiryForm: React.FC = () => {
  const [formData, setFormData] = useState<InquiryData>({ 
    name: '', 
    email: '', 
    phone: '', 
    postcode: '', 
    service: 'Boiler Repair', 
    message: '' 
  });
  const [submitted, setSubmitted] = useState(false);
  const [optimizing, setOptimizing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => { 
    e.preventDefault(); 
    setSubmitted(true); 
    setTimeout(() => setSubmitted(false), 5000); 
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => { 
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value })); 
  };

  const handleMagicPolish = async () => {
    if (!formData.message.trim() || optimizing) return;
    setOptimizing(true);
    try {
      const polished = await optimizeInquiry(formData.message);
      if (polished) {
        setFormData(prev => ({ ...prev, message: polished }));
      }
    } catch (err) {
      console.error("Failed to polish message", err);
    } finally {
      setOptimizing(false);
    }
  };

  return (
    <section id="inquiry" className="py-24 bg-slate-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden grid lg:grid-cols-2">
          <div className="p-10 lg:p-16 bg-brand-primary text-white relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full"></div>
            <h3 className="text-4xl font-display font-bold mb-6 relative z-10">Request Your Assessment</h3>
            <p className="text-white/60 mb-10 text-lg relative z-10">Operating across Portsmouth and Southampton.</p>
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"><svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg></div>
                <p className="text-sm font-medium">Fully Gas Safe Registered Engineer</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"><svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg></div>
                <p className="text-sm font-medium">Parts & Labour Warranties Included</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"><svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg></div>
                <p className="text-sm font-medium">Transparent, Fixed-Price Diagnostics</p>
              </div>
            </div>
          </div>
          <div className="p-10 lg:p-16">
            {submitted ? (
              <div className="text-center py-12 animate-in zoom-in duration-300">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h4 className="text-3xl font-display font-bold text-brand-primary mb-2">Inquiry Received</h4>
                <p className="text-slate-500">Our engineer will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" />
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" />
                  <input required type="text" name="postcode" value={formData.postcode} onChange={handleChange} placeholder="Postcode (e.g. PO1 2AB)" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" />
                </div>
                <select name="service" value={formData.service} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none transition-all appearance-none">
                  <option>Boiler Repair</option>
                  <option>New Boiler Installation</option>
                  <option>Annual Service</option>
                  <option>Smart Control Setup</option>
                  <option>Electrical Work</option>
                </select>
                
                <div className="relative">
                  <textarea 
                    required 
                    name="message" 
                    rows={4} 
                    value={formData.message} 
                    onChange={handleChange} 
                    placeholder="Tell us about your boiler issue or project..." 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                  />
                  <button 
                    type="button"
                    onClick={handleMagicPolish}
                    disabled={!formData.message || optimizing}
                    className="absolute bottom-4 right-4 bg-white shadow-md border border-slate-100 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-emerald-600 hover:text-emerald-500 hover:scale-105 transition-all flex items-center gap-1.5 disabled:opacity-0"
                  >
                    <svg className={`w-3 h-3 ${optimizing ? 'animate-spin' : ''}`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd"></path></svg>
                    {optimizing ? 'Polishing...' : 'AI Magic Polish'}
                  </button>
                </div>

                <button type="submit" className="w-full bg-brand-accent hover:bg-amber-500 text-brand-primary font-black py-5 rounded-2xl transition-all shadow-xl shadow-amber-500/20 transform hover:-translate-y-1">
                  Send Inquiry Now
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;
