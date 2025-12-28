
import React, { useState, useEffect } from 'react';
import { generateSystemImage } from '../services/geminiService';

const SystemVisualizer: React.FC = () => {
  const [prompt, setPrompt] = useState('A modern utility room featuring a wall-mounted Vaillant ecoTEC boiler with neat copper pipework and a Hive smart thermostat.');
  const [imageSize, setImageSize] = useState<'1K' | '2K' | '4K'>('1K');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [hasKey, setHasKey] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    checkKeyStatus();
  }, []);

  const checkKeyStatus = async () => {
    try {
      const status = await window.aistudio.hasSelectedApiKey();
      setHasKey(status);
    } catch (e) {
      console.warn("AI Studio key manager unavailable");
    }
  };

  const handleOpenKeySelector = async () => {
    try {
      await window.aistudio.openSelectKey();
      // Assume success as per Gemini guidelines to avoid race condition
      setHasKey(true);
    } catch (e) {
      console.error("Failed to open key selector");
    }
  };

  const handleGenerate = async () => {
    if (!prompt.trim() || loading) return;
    setLoading(true);
    setError(null);
    try {
      const url = await generateSystemImage(prompt, imageSize);
      setImageUrl(url);
    } catch (err: any) {
      console.error(err);
      if (err.message?.includes("Requested entity was not found")) {
        setHasKey(false);
        setError("API Key session expired. Please select your key again.");
      } else {
        setError("Failed to generate image. Please ensure your prompt is clear.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="visualizer" className="py-24 bg-slate-900 overflow-hidden relative border-y border-white/5">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-warning/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/5 text-emerald-400 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-white/10">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              Pro Visualizer (Nano Banana Pro)
            </div>
            <h2 className="text-4xl lg:text-6xl font-display font-black text-white mb-6 tracking-tighter">
              Visualize Your <br /><span className="text-emerald-400 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Future Plant Room.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Use our cutting-edge AI to generate high-fidelity concepts of your new boiler installation. 
              <span className="block mt-2 text-sm text-slate-500 italic">Requires a paid Google Cloud project API key.</span>
            </p>

            <div className="space-y-6 bg-white/5 p-8 rounded-[32px] border border-white/10 backdrop-blur-sm">
              {!hasKey ? (
                <div className="text-center space-y-4 py-4">
                  <p className="text-white text-sm">To use high-quality image generation (1K-4K), you must select your own API key.</p>
                  <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noopener noreferrer" className="text-emerald-400 text-xs hover:underline block mb-4">Learn about Gemini API billing</a>
                  <button 
                    onClick={handleOpenKeySelector}
                    className="w-full bg-emerald-500 hover:bg-emerald-400 text-brand-primary font-black py-4 rounded-2xl transition-all shadow-xl shadow-emerald-500/20"
                  >
                    Select API Key to Unlock
                  </button>
                </div>
              ) : (
                <>
                  <div className="space-y-2">
                    <label className="text-white/60 text-xs font-bold uppercase tracking-widest">Generation Prompt</label>
                    <textarea 
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="Describe your ideal installation..."
                      className="w-full bg-slate-950 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 outline-none focus:border-emerald-500 transition-colors h-32 resize-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-white/60 text-xs font-bold uppercase tracking-widest">Image Resolution</label>
                    <div className="grid grid-cols-3 gap-3">
                      {(['1K', '2K', '4K'] as const).map((size) => (
                        <button
                          key={size}
                          onClick={() => setImageSize(size)}
                          className={`py-3 rounded-xl font-bold text-sm transition-all border ${imageSize === size ? 'bg-emerald-500 border-emerald-500 text-brand-primary' : 'bg-white/5 border-white/10 text-white/60 hover:text-white'}`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={handleGenerate}
                    disabled={loading}
                    className="w-full bg-white hover:bg-slate-200 text-brand-primary font-black py-5 rounded-2xl transition-all shadow-xl flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Designing...
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        Generate Vision
                      </>
                    )}
                  </button>
                  {error && <p className="text-red-400 text-xs text-center font-medium mt-2">{error}</p>}
                </>
              )}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-slate-950 rounded-[40px] overflow-hidden border border-white/10 shadow-3xl relative flex items-center justify-center transition-colors">
              {imageUrl ? (
                <img src={imageUrl} alt="AI Generated Installation" className="w-full h-full object-cover animate-in fade-in zoom-in-95 duration-700" />
              ) : (
                <div className="text-center px-12">
                   <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-emerald-500/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11l-8 8-4-4m0-4l8 8 4-4m-12-8l8 8 4-4" /></svg>
                   </div>
                   <p className="text-slate-500 text-sm">Select your API key and provide a description to see your project visualised.</p>
                </div>
              )}
              
              {loading && (
                <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center">
                   <div className="relative w-24 h-24 mb-6">
                      <div className="absolute inset-0 border-4 border-emerald-500/20 rounded-full"></div>
                      <div className="absolute inset-0 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                   </div>
                   <h4 className="text-white font-bold text-xl mb-2">Generating Masterpiece</h4>
                   <p className="text-emerald-400/80 text-sm font-medium animate-pulse">Our AI is rendering your system specs...</p>
                </div>
              )}
            </div>
            
            {imageUrl && !loading && (
              <div className="absolute top-6 right-6 bg-brand-primary/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 text-white font-black text-xs">
                PRO RENDER: {imageSize}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemVisualizer;
