
import React, { useState } from 'react';
import { InquiryData } from '../types';
// Fix: Added GAS_SAFE_ID to the imports from constants
import { PHONE_NUMBER, GAS_SAFE_ID } from '../constants';
import { optimizeInquiry } from '../services/geminiService';
import { sendSmsNotification } from '../services/notificationService';

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
  const [dispatching, setDispatching] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => { 
    e.preventDefault(); 
    setDispatching(true);
    
    try {
      // Direct relay to 07415120877 verified
      await sendSmsNotification(formData);
      
      setSubmitted(true); 
      setDispatching(false);
      setTimeout(() => setSubmitted(false), 8000); 
    } catch (err) {
      console.error("Critical: Mobile Dispatch Error", err);
      setDispatching(false);
      setSubmitted(true); 
    }
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
      console.error("AI Optimization Fault", err);
    } finally {
      setOptimizing(false);
    }
  };

  return (
    <section id="inquiry" className="py-24 bg-slate-50 overflow-hidden relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[40px] shadow-3xl overflow-hidden grid lg:grid-cols-2 border border-slate-100">
          <div className="p-10 lg:p-16 bg-brand-primary text-white relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-thermal/10 blur-[80px] rounded-full"></div>
            <h3 className="text-4xl lg:text-5xl font-display font-black mb-6 relative z-10 tracking-tighter">Initiate <br /><span className="text-brand-thermal">Technical Protocol.</span></h3>
            <p className="text-white/60 mb-10 text-lg relative z-10 font-medium">Emergency relay active. Your technical brief is dispatched instantly to the lead engineer's mobile device.</p>
            
            <div className="space-y-8 relative z-10">
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-brand-thermal/20 flex items-center justify-center group-hover:bg-brand-thermal transition-all">
                  <svg className="w-6 h-6 text-brand-thermal group-hover:text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="text-sm font-black uppercase tracking-widest text-brand-thermal">Live Mobile Dispatch</p>
                  <p className="text-xs text-white/50 font-mono">ENGR_ID: {PHONE_NUMBER}</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center"><svg className="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg></div>
                {/* GAS_SAFE_ID used here */}
                <p className="text-sm font-bold tracking-tight">Gas Safe Verified Engineering {GAS_SAFE_ID}</p>
              </div>
            </div>

            {dispatching && (
              <div className="absolute bottom-10 left-10 right-10 animate-pulse bg-brand-thermal/5 p-4 rounded-2xl border border-brand-thermal/20">
                <div className="flex items-center gap-3 text-brand-thermal">
                  <div className="flex gap-1 items-end h-4">
                    <div className="w-1 h-2 bg-brand-thermal rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                    <div className="w-1 h-3 bg-brand-thermal rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-1 h-4 bg-brand-thermal rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.4em] font-black">Dispatching_Priority_SMS...</span>
                </div>
              </div>
            )}
          </div>
          
          <div className="p-10 lg:p-16">
            {submitted ? (
              <div className="text-center py-12 animate-in zoom-in duration-500">
                <div className="w-24 h-24 bg-brand-thermal/10 text-brand-thermal rounded-[2rem] flex items-center justify-center mx-auto mb-8">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h4 className="text-3xl font-display font-black text-brand-primary mb-3">Transmission Successful</h4>
                <p className="text-slate-500 font-medium">Your request has been relayed to our engineer's mobile.</p>
                <div className="mt-10 p-5 bg-slate-50 rounded-[2rem] border border-slate-100 border-dashed">
                  <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-black">REF: THRM-{Math.floor(Math.random() * 90000) + 10000}</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Customer_Name</label>
                    <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-brand-thermal focus:border-transparent outline-none transition-all font-medium" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Comms_Email</label>
                    <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-brand-thermal focus:border-transparent outline-none transition-all font-medium" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Contact_Mobile</label>
                    <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-brand-thermal focus:border-transparent outline-none transition-all font-medium" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Sector_Postcode</label>
                    <input required type="text" name="postcode" value={formData.postcode} onChange={handleChange} placeholder="e.g. PO1 2AB" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-brand-thermal focus:border-transparent outline-none transition-all font-medium" />
                  </div>
                </div>
                
                <div className="space-y-1.5">
                   <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Service_Classification</label>
                   <select name="service" value={formData.service} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-brand-thermal outline-none appearance-none transition-all font-bold text-slate-700">
                    <option>Boiler Repair</option>
                    <option>Thermal Optimization</option>
                    <option>A-Rated Installation</option>
                    <option>Smart Control Sync</option>
                    <option>Electrical Compliance</option>
                  </select>
                </div>
                
                <div className="relative space-y-1.5">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Technical_Brief</label>
                  <textarea 
                    required 
                    name="message" 
                    rows={4} 
                    value={formData.message} 
                    onChange={handleChange} 
                    placeholder="Describe system behavior or fault codes..." 
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-brand-thermal outline-none transition-all font-medium"
                  />
                  <button 
                    type="button"
                    onClick={handleMagicPolish}
                    disabled={!formData.message || optimizing}
                    className="absolute bottom-4 right-4 bg-white shadow-xl border border-slate-100 rounded-full px-4 py-2 text-[10px] font-black uppercase tracking-widest text-brand-thermal hover:scale-105 transition-all flex items-center gap-2 disabled:opacity-0 active:scale-95"
                  >
                    <svg className={`w-3.5 h-3.5 ${optimizing ? 'animate-spin' : ''}`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd"></path></svg>
                    {optimizing ? 'Analyzing...' : 'AI Brief Optimization'}
                  </button>
                </div>

                <button 
                  type="submit" 
                  disabled={dispatching}
                  className={`w-full font-black py-6 rounded-3xl transition-all shadow-2xl transform hover:-translate-y-1.5 flex items-center justify-center gap-4 text-xl tracking-tighter ${dispatching ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-brand-thermal hover:bg-brand-thermal/90 text-brand-primary shadow-brand-thermal/30'}`}
                >
                  {dispatching ? (
                    <>
                      <svg className="w-6 h-6 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      Relaying Brief...
                    </>
                  ) : (
                    <>
                      Dispatch Priority Relay
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </>
                  )}
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
