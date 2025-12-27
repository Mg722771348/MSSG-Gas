
import React, { useState } from 'react';
import { getDiagnosticInfo } from '../services/geminiService';

const SmartDiagnostics: React.FC = () => {
  const [brand, setBrand] = useState<'Vaillant' | 'Glow-worm'>('Vaillant');
  const [code, setCode] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLookup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim()) return;
    setLoading(true);
    try {
      const info = await getDiagnosticInfo(brand, code);
      setResult(info || 'No information found.');
    } catch (err) {
      setResult('Failed to retrieve diagnostic info. Please contact us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="diagnostics" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[40px] p-8 lg:p-16 shadow-3xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                AI Diagnostic Tool
              </div>
              <h2 className="text-4xl lg:text-6xl font-display font-black text-white mb-6 tracking-tighter">
                Smart Error Code <br /><span className="text-emerald-400">Lookup.</span>
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Got a flashing light or an 'F' code on your boiler? Our AI assistant can help you understand what's wrong before you call.
              </p>
              
              <form onSubmit={handleLookup} className="space-y-4">
                <div className="flex gap-4 p-1 bg-white/5 rounded-2xl w-fit border border-white/10">
                  <button 
                    type="button"
                    onClick={() => setBrand('Vaillant')}
                    className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${brand === 'Vaillant' ? 'bg-emerald-500 text-brand-primary shadow-lg shadow-emerald-500/20' : 'text-white/60 hover:text-white'}`}
                  >
                    Vaillant
                  </button>
                  <button 
                    type="button"
                    onClick={() => setBrand('Glow-worm')}
                    className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${brand === 'Glow-worm' ? 'bg-amber-500 text-brand-primary shadow-lg shadow-amber-500/20' : 'text-white/60 hover:text-white'}`}
                  >
                    Glow-worm
                  </button>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="text" 
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="e.g. F28, F75, F1"
                    className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 outline-none focus:border-emerald-500 transition-colors"
                  />
                  <button 
                    type="submit"
                    disabled={loading}
                    className="bg-emerald-500 hover:bg-emerald-400 text-brand-primary font-black px-8 py-4 rounded-2xl transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {loading ? 'Analyzing...' : 'Lookup Code'}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  </button>
                </div>
              </form>
            </div>

            <div className="min-h-[200px] flex items-center justify-center">
              {result ? (
                <div className="w-full bg-white/5 border border-white/10 p-8 rounded-[32px] animate-in fade-in slide-in-from-right-4">
                  <h4 className="text-emerald-400 font-bold uppercase tracking-widest text-xs mb-4">AI Result</h4>
                  <div className="text-white text-lg leading-relaxed prose prose-invert">
                    {result.split('\n').map((line, i) => <p key={i} className="mb-2">{line}</p>)}
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/10 flex gap-4">
                    <a href="#inquiry" className="text-xs font-bold text-white hover:text-emerald-400 flex items-center gap-2">
                      Request Repair
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </a>
                  </div>
                </div>
              ) : (
                <div className="text-center text-slate-500 border-2 border-dashed border-white/5 rounded-[32px] p-12 w-full">
                  <svg className="w-12 h-12 mx-auto mb-4 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                  <p>Enter an error code to see <br />AI insights instantly.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartDiagnostics;
