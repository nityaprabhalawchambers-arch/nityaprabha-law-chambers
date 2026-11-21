import React, { useState } from 'react';
import { Scale, Mail, Phone, MapPin, ArrowRight, Shield, Check, Globe, Gavel } from 'lucide-react';
import { ActivePage } from '../types';
import { PRACTICE_AREAS, MANAGING_PARTNER, EQUITY_PARTNER } from '../data';
import Logo from './Logo';

interface FooterProps {
  setActivePage: (page: ActivePage) => void;
  setActivePracticeId: (id: string | null) => void;
}

export default function Footer({ setActivePage, setActivePracticeId }: FooterProps) {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleNavClick = (page: ActivePage) => {
    setActivePage(page);
    setActivePracticeId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = page;
  };

  const handlePracticeClick = (id: string) => {
    setActivePage('practices');
    setActivePracticeId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = `practices/${id}`;
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && consent) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="relative bg-[#030712] pt-20 pb-8 text-[#BABDC0] border-t border-gold/20 overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 bg-gold/10 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute top-10 left-10 h-64 w-64 bg-gold/5 blur-3xl rounded-full" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Brand & Mission */}
          <div className="space-y-6">
            <div className="flex cursor-pointer items-center space-x-3 group" onClick={() => handleNavClick('home')}>
              <Logo variant="full" size="lg" showTagline={true} />
            </div>
            <p className="text-xs leading-relaxed text-[#BABDC0] font-sans">
              Delivering analytical precision, technical expertise, and absolute integrity before various High Courts and the Supreme Court of India. Established in Delhi, specializing in corporate strategy, cross-border M&amp;A, commercial litigation, and intellectual property prosecution.
            </p>
            <div className="space-y-2.5 pt-2 text-xs">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 shrink-0 text-gold mt-0.5" />
                <span>UG Floor, Barakhamba Road, Connaught Place, New Delhi, 110001</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                <a href="tel:+918287066868" className="text-gold font-bold hover:underline transition">+91 82870 66868</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                <a href="mailto:nityaprabhalawchambers@gmail.com" className="text-gold font-bold hover:underline transition">nityaprabhalawchambers@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Practice Areas sitemap */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-gold font-bold">Core Disciplines</h3>
            <div className="grid grid-cols-1 gap-2 pl-1">
              {PRACTICE_AREAS.slice(0, 7).map((p) => (
                <button
                  key={p.id}
                  onClick={() => handlePracticeClick(p.id)}
                  className="block text-left text-xs text-[#BABDC0] hover:text-gold hover:translate-x-1 transition-all duration-200 cursor-pointer"
                >
                  • {p.title}
                </button>
              ))}
              <button
                onClick={() => {
                  setActivePage('practices');
                  setActivePracticeId(null);
                  window.location.hash = 'practices';
                }}
                className="text-left text-xs font-mono uppercase tracking-wider text-gold hover:underline pt-1 cursor-pointer font-bold"
              >
                + View All 16 Disciplines
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-gold font-bold">Chambers Portals</h3>
            <div className="space-y-2.5 pl-1 text-xs">
              <button onClick={() => handleNavClick('home')} className="block text-left hover:text-gold transition cursor-pointer">Chambers Overview</button>
              <button onClick={() => handleNavClick('international-desk')} className="block text-left text-gold hover:text-white transition cursor-pointer font-semibold flex items-center gap-1.5">
                <Globe className="h-3.5 w-3.5" />
                <span>International &amp; NRI Desk</span>
              </button>
              <button onClick={() => handleNavClick('case-registry')} className="block text-left text-gold hover:text-white transition cursor-pointer font-semibold flex items-center gap-1.5">
                <Gavel className="h-3.5 w-3.5" />
                <span>Case Registry &amp; Precedents</span>
              </button>
              <button onClick={() => handleNavClick('about')} className="block text-left hover:text-gold transition cursor-pointer">Leadership &amp; Partners</button>
              <button onClick={() => handleNavClick('resources')} className="block text-left hover:text-gold transition cursor-pointer">Statutory Diagnostics &amp; Guides</button>
              <button onClick={() => handleNavClick('blog')} className="block text-left hover:text-gold transition cursor-pointer">Statutory Memos &amp; Briefings</button>
              <button onClick={() => handleNavClick('contact')} className="block text-left hover:text-gold transition cursor-pointer">Secure Client Inquiry</button>
              <button onClick={() => handleNavClick('privacy')} className="block text-left hover:text-gold transition cursor-pointer">Data Privacy Policy</button>
              <button onClick={() => handleNavClick('terms')} className="block text-left hover:text-gold transition cursor-pointer">Disclaimers &amp; Terms</button>
            </div>
          </div>

          {/* Newsletter / Briefings */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-gold font-bold">Institutional Briefings</h3>
            <p className="text-xs leading-relaxed font-sans">
              Subscribe to our partner-authored regulatory analyses addressing emerging data laws, IPR precedents, and cross-border statutory amendments.
            </p>
            {subscribed ? (
              <div className="rounded-xl glass-card p-4 border border-gold/40 text-center text-xs text-gold">
                <Check className="mx-auto h-5 w-5 mb-2 text-gold" />
                Subscription verified. Statutory alerts will be dispatched.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Corporate Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl glass-input px-4 py-3 text-xs placeholder-[#A2A6A5]/60"
                  />
                  <button
                    type="submit"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gold hover:text-white transition cursor-pointer"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex items-start space-x-2">
                  <button
                    type="button"
                    onClick={() => setConsent(!consent)}
                    className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-all cursor-pointer ${
                      consent ? 'border-gold bg-gold text-deep-bg shadow-sm shadow-gold/30' : 'border-gold/30 bg-black/30'
                    }`}
                  >
                    {consent && <Check className="h-3 w-3 stroke-[3]" />}
                  </button>
                  <span className="text-[10px] leading-tight text-[#BABDC0] select-none">
                    I consent to Nityaprabha Law Chambers storing my corporate email for receiving legal updates.
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Regulatory notices and bar council warning */}
        <div className="mt-16 border-t border-gold/15 pt-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="flex items-start space-x-3 rounded-2xl glass-card p-5 border border-gold/20 text-justify text-[10px] leading-relaxed text-[#BABDC0]">
              <Shield className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <div>
                <span className="font-semibold text-white">Bar Council of India Rule 36 Mandatory Compliance Notice: </span>
                This website is constructed solely for the dissemination of basic informational resources regarding Nityaprabha Law Chambers. Under Rule 36 of the Bar Council of India Rules, direct legal advertising or client solicitation of any form is strictly prohibited. The contents of this portal do not constitute legal advice and visiting this site does not establish an advocate-client relationship. All case summaries are de-identified to maintain client privilege in compliance with ethical guidelines and the Digital Personal Data Protection (DPDP) Act 2023.
              </div>
            </div>
            <div className="flex flex-col justify-between space-y-4 text-xs lg:items-end lg:space-y-0">
              <div className="text-[11px] font-mono text-gold text-right space-y-1">
                <div>Advocate Kapil Dev Vishwakarma (Managing Partner, Enr: D/1842/2009)</div>
                <div>Advocate Kunal Murari (Equity Partner, SRCC &amp; DU Law)</div>
              </div>
              <p className="text-[10px] text-[#A2A6A5] mt-2">
                &copy; 2026 Nityaprabha Law Chambers. All statutory rights reserved. Website designed under premium Indian compliance codes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
