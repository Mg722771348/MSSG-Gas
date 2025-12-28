import React, { useState, useEffect } from 'react';
import Logo from '../Logo';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Contact', href: '#inquiry' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="hover:opacity-90 transition-opacity">
          <Logo light={!isScrolled && !mobileMenuOpen} className="scale-90 md:scale-100 origin-left" />
        </a>
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((item) => (
            <a key={item.name} href={item.href} className={`text-sm font-bold uppercase tracking-widest transition-all hover:text-emerald-500 ${isScrolled ? 'text-brand-primary' : 'text-white'}`}>{item.name}</a>
          ))}
          <a href="#inquiry" className="bg-emerald-500 hover:bg-emerald-400 text-brand-primary px-6 py-3 rounded-full text-sm font-black uppercase tracking-tighter transition-all shadow-xl hover:shadow-emerald-500/40 transform hover:-translate-y-1">Instant Quote</a>
        </div>
        <button aria-label="Toggle Menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`md:hidden p-2 rounded-xl transition-colors ${isScrolled ? 'text-brand-primary' : 'text-white'}`}>
          {mobileMenuOpen ? <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg> : <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="px-6 py-8 space-y-6">
            {navLinks.map((item) => (
              <a key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)} className="block text-2xl font-display font-black text-brand-primary border-b border-slate-100 pb-4">{item.name}</a>
            ))}
            <a href="#inquiry" onClick={() => setMobileMenuOpen(false)} className="block w-full bg-emerald-500 text-center py-5 rounded-2xl font-black text-xl text-brand-primary shadow-xl shadow-emerald-500/20">Get Expert Quote</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;