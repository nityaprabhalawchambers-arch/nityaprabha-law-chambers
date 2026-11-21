import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Scale, Shield, Award, Users, BookOpen, Clock, Calendar, Check, ArrowRight,
  ArrowUpRight, ExternalLink, ChevronRight, HelpCircle, MessageSquare, AlertCircle, Sparkles, Phone, Mail,
  Globe, Gavel, Download, CheckCircle2, ChevronDown
} from 'lucide-react';
import {
  PRACTICE_AREAS, METRICS, CLIENT_LOGOS, INDUSTRIES_SERVED, PROCESS_TIMELINE,
  BLOG_POSTS, GENERAL_FAQS, FOUNDER_BIO, PARTNERS, MANAGING_PARTNER, EQUITY_PARTNER,
  REPRESENTATIVE_MATTERS, INTERNATIONAL_DESK_CAPABILITIES, INTERNATIONAL_HUBS
} from '../data';
import { ActivePage } from '../types';
import Logo from '../components/Logo';
import StatutoryDiagnostics from '../components/StatutoryDiagnostics';
import { downloadVCard } from '../utils/vcard';

interface HomeProps {
  setActivePage: (page: ActivePage) => void;
  setActivePracticeId: (id: string | null) => void;
  onOpenConsultation: () => void;
}

export default function Home({
  setActivePage,
  setActivePracticeId,
  onOpenConsultation
}: HomeProps) {
  const [activeGroup, setActiveGroup] = useState<string>('all');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [showAllPracticesMobile, setShowAllPracticesMobile] = useState<boolean>(false);

  const handlePracticeClick = (id: string) => {
    setActivePage('practices');
    setActivePracticeId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = `practices/${id}`;
  };

  const filteredPractices = activeGroup === 'all'
    ? PRACTICE_AREAS
    : PRACTICE_AREAS.filter(p => p.group === activeGroup);

  const groups = [
    { id: 'all', label: 'All 16 Disciplines' },
    { id: 'founders-brands', label: 'Founders & Brands' },
    { id: 'individuals-families', label: 'Individuals & Families' },
    { id: 'disputes', label: 'Disputes & Litigation' },
    { id: 'cross-cutting', label: 'Cross-cutting Advisory' }
  ];

  return (
    <div className="bg-[#030712] text-[#BABDC0] overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-40 md:pb-32">
        {/* Editorial Architectural Background & Vignette (Properly Visible & Dignified) */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=85&w=1920"
            alt="Supreme Court and Classical Law Library Hall"
            className="w-full h-full object-cover object-center opacity-35 sm:opacity-25 filter contrast-110 brightness-95 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/95 via-[#030712]/82 to-[#030712]/60 sm:to-[#030712]/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-[#030712]/80" />
        </div>

        {/* Subtle Background Art / Gradients */}
        <div className="pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-gold/10 blur-3xl animate-pulse" />
        <div className="pointer-events-none absolute top-1/3 -right-20 h-[500px] w-[500px] rounded-full bg-gold-dark/10 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Content Column */}
            <div className="space-y-8 lg:col-span-7">
              {/* Trust Badges Above-the-fold */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full glass-card px-4 py-1.5 text-[10px] font-mono uppercase tracking-widest text-gold border border-gold/30 shadow-lg shadow-gold/10">
                  <Shield className="h-3.5 w-3.5 text-gold" />
                  Bar Council Registered
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full glass-card px-4 py-1.5 text-[10px] font-mono uppercase tracking-widest text-[#A2A6A5] border border-gold/20">
                  <Award className="h-3.5 w-3.5 text-gold" />
                  Supreme Court SCBA Counsel
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full glass-card px-4 py-1.5 text-[10px] font-mono uppercase tracking-widest text-gold border border-gold/25">
                  <Globe className="h-3.5 w-3.5 text-gold" />
                  Cross-Border &amp; NRI Desk
                </span>
              </div>

              {/* Headings */}
              <div className="space-y-4">
                <h1 className="font-display text-4xl font-extrabold leading-tight tracking-[0.06em] text-white sm:text-5xl lg:text-6xl uppercase">
                  Nityaprabha <br />
                  <span className="gold-gradient-text">Law Chambers</span>
                </h1>
                <p className="font-serif text-xl italic text-gold-light/90">
                  Comprehensive Legal Advocacy, Cross-Border Advisory &amp; High-Stakes Litigation
                </p>
                <p className="text-xs sm:text-sm leading-relaxed text-[#BABDC0] max-w-2xl font-sans">
                  Under the dual stewardship of <strong>Advocate Kapil Dev Vishwakarma</strong> (Managing Partner, IPR Specialist, Enr: D/1842/2009) and <strong>Advocate Kunal Murari</strong> (Equity Partner, SRCC &amp; DU Law, Corporate, International &amp; Tax Advisory), our chambers represents institutional conglomerates, venture founders, and Non-Resident Indians before the Supreme Court of India, High Courts, and International Arbitral Tribunals.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-light via-gold to-gold-dark px-7 py-4 font-mono text-xs font-bold uppercase tracking-widest text-deep-bg transition hover:scale-[1.02] hover:shadow-xl hover:shadow-gold/30 shadow-lg shadow-gold/20 cursor-pointer"
                >
                  <MessageSquare className="h-4 w-4" />
                  Request Conflict Check
                </button>
                <button
                  onClick={() => {
                    setActivePage('practices');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="flex items-center justify-center gap-2 rounded-xl border border-gold/40 bg-black/40 backdrop-blur-md px-7 py-4 font-mono text-xs font-bold uppercase tracking-widest text-gold hover:text-white hover:border-gold hover:bg-gold/10 transition-all cursor-pointer shadow-lg"
                >
                  <Scale className="h-4 w-4" />
                  Explore 16 Disciplines
                </button>
              </div>

              {/* Bottom Micro Metrics Bar */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gold/20">
                {METRICS.slice(0, 3).map((m, idx) => (
                  <div key={idx} className="space-y-1">
                    <span className="block font-display text-2xl font-bold gold-gradient-text sm:text-3xl">
                      {m.value}
                    </span>
                    <span className="block font-mono text-[9px] uppercase tracking-wider text-[#A2A6A5]">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Chambers Spotlight Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl glass-panel gold-border-glow shadow-2xl gold-flare-top overflow-hidden">
                {/* Visual Header Image Banner */}
                <div className="relative h-44 w-full overflow-hidden border-b border-gold/20">
                  <img
                    src="https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?auto=format&fit=crop&q=85&w=800"
                    alt="Scales of Justice & Law Chambers"
                    className="w-full h-full object-cover object-center filter brightness-90 contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/50 to-transparent" />
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-black/70 backdrop-blur-md px-3 py-1 font-mono text-[9px] uppercase tracking-widest text-gold border border-gold/30 font-bold">
                      <Scale className="h-3 w-3 text-gold" />
                      Supreme Court SCBA Counsel
                    </span>
                    <span className="rounded-full bg-gold/20 backdrop-blur-md px-3 py-1 font-mono text-[9px] text-gold uppercase border border-gold/40 font-bold">
                      New Delhi Seat
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-6 z-10">
                    <span className="font-mono text-[10px] text-gold uppercase tracking-widest font-bold block">
                      Institutional Advocacy
                    </span>
                    <h3 className="font-display text-lg font-bold text-white uppercase tracking-wide">
                      Chambers Stewardship
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-7 space-y-5 relative z-10">
                  <p className="text-xs leading-relaxed text-[#BABDC0] text-justify font-sans">
                    Nityaprabha Law Chambers rejects standard generic drafts. Every dispute is structured with precedent-backed statutory rigour, combining commercial business acumen with aggressive appellate courtroom advocacy.
                  </p>

                  <div className="space-y-3 pt-1 font-sans">
                    <div className="flex items-start space-x-3 text-xs text-[#BABDC0]">
                      <Check className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                      <span><strong>Managing Partner:</strong> Advocate Kapil Dev Vishwakarma (Enr: D/1842/2009) — 6+ yrs high-stakes IPR, Patent &amp; Trademark litigation.</span>
                    </div>
                    <div className="flex items-start space-x-3 text-xs text-[#BABDC0]">
                      <Check className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                      <span><strong>Equity Partner:</strong> Advocate Kunal Murari (SRCC &amp; DU Law) — Corporate Structuring, Cross-Border M&amp;A, International Laws &amp; Taxation.</span>
                    </div>
                    <div className="flex items-start space-x-3 text-xs text-[#BABDC0]">
                      <Check className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                      <span><strong>Key Judicial Forums:</strong> Supreme Court of India, Delhi High Court (IPD &amp; Commercial), NCLT, ITAT, SIAC arbitration.</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-gold/20 flex items-center justify-between">
                    <button
                      onClick={() => {
                        setActivePage('about');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="font-mono text-[10px] uppercase tracking-widest text-gold hover:text-white transition flex items-center gap-1 cursor-pointer font-bold"
                    >
                      Read Firm Credentials
                      <ChevronRight className="h-3.5 w-3.5" />
                    </button>
                    <button
                      onClick={() => {
                        setActivePage('case-registry');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="font-mono text-[10px] uppercase tracking-widest text-[#A2A6A5] hover:text-gold transition flex items-center gap-1 cursor-pointer"
                    >
                      Case Registry
                      <ChevronRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRACTICE AREAS SECTION */}
      <section className="py-14 md:py-24 border-t border-gold/20 bg-deep-bg relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 mb-8 md:mb-16">
            <span className="font-mono text-[10px] uppercase tracking-widest text-gold font-bold">
              Full-Spectrum Legal Services
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold gold-gradient-text uppercase tracking-wide">
              16 Specialized Legal Disciplines
            </h2>
            <p className="max-w-2xl mx-auto text-xs leading-relaxed text-[#BABDC0] font-sans">
              From patent prosecution to cross-border capital repatriation, our chambers delivers precision counsel across four core institutional categories.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 pt-4 sm:pt-6">
              {groups.map((grp) => (
                <button
                  key={grp.id}
                  onClick={() => setActiveGroup(grp.id)}
                  className={`rounded-xl px-3.5 sm:px-4 py-2 font-mono text-[10px] uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                    activeGroup === grp.id
                      ? 'bg-gradient-to-r from-gold-light via-gold to-gold-dark text-deep-bg font-bold shadow-md shadow-gold/20'
                      : 'border border-gold/20 glass-card text-[#BABDC0] hover:text-white hover:border-gold/50'
                  }`}
                >
                  {grp.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredPractices.map((p, idx) => (
              <div
                key={p.id}
                onClick={() => handlePracticeClick(p.id)}
                className={`group relative flex flex-col justify-between rounded-2xl glass-card glass-card-hover shadow-xl cursor-pointer overflow-hidden border border-gold/20 transition-all duration-300 ${
                  !showAllPracticesMobile && activeGroup === 'all' && idx >= 4 ? 'hidden sm:flex' : 'flex'
                }`}
              >
                {/* Dedicated Practice Photo Header (Visually Crisp & Distinct) */}
                {p.image && (
                  <div className="relative h-32 w-full overflow-hidden bg-black/60 shrink-0">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center filter brightness-90 contrast-110 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-transparent to-black/25" />
                    <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-black/75 backdrop-blur-md border border-gold/30 text-[9px] font-mono uppercase tracking-wider text-gold font-bold">
                      Rule 36
                    </div>
                    <div className="absolute bottom-2.5 left-3 flex h-8 w-8 items-center justify-center rounded-lg bg-black/85 border border-gold/40 text-gold shadow-md backdrop-blur-md">
                      <Scale className="h-4 w-4" />
                    </div>
                  </div>
                )}

                <div className="p-5 flex flex-col justify-between flex-grow space-y-3">
                  <div>
                    <h3 className="font-display text-sm font-bold text-white tracking-wide uppercase group-hover:text-gold transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-[#BABDC0] line-clamp-2 font-sans mt-1">
                      {p.shortDesc}
                    </p>

                    {/* Forum Tag */}
                    {p.forums && p.forums.length > 0 && (
                      <div className="pt-2">
                        <span className="text-[9px] font-mono text-gold/80 block line-clamp-1">
                          Forum: {p.forums[0]}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="pt-2 flex items-center text-[10px] font-mono uppercase tracking-widest text-gold group-hover:text-white transition-colors">
                    View Statutory Roadmap
                    <ChevronRight className="ml-1 h-3.5 w-3.5 transform group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile "Show All 16 Disciplines" Toggle */}
          {activeGroup === 'all' && filteredPractices.length > 4 && (
            <div className="sm:hidden mt-6 text-center">
              <button
                onClick={() => setShowAllPracticesMobile(!showAllPracticesMobile)}
                className="w-full flex items-center justify-center space-x-2 rounded-xl border border-gold/40 bg-gold/10 py-3.5 px-4 font-mono text-xs uppercase tracking-wider text-gold hover:bg-gold/20 transition cursor-pointer"
              >
                <span>{showAllPracticesMobile ? 'Show Fewer Disciplines' : `View All ${filteredPractices.length} Practice Disciplines`}</span>
                <ChevronDown className={`h-4 w-4 transform transition-transform ${showAllPracticesMobile ? 'rotate-180' : ''}`} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 4. INTERNATIONAL & CROSS-BORDER LEGAL DESK (FEATURE SECTION) */}
      <section className="py-24 border-t border-gold/20 bg-gradient-to-b from-[#030712] via-[#081022] to-[#030712] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-gold/10 blur-[130px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1.5 text-xs font-mono uppercase tracking-widest text-gold backdrop-blur-md">
                <Globe className="h-3.5 w-3.5" />
                <span>Global Multi-Jurisdictional Practice</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15]">
                International Legal Desk &amp; NRI Advisory
              </h2>

              <p className="text-xs sm:text-sm text-[#BABDC0] leading-relaxed">
                Led by <strong>Advocate Kunal Murari</strong> (Equity Partner, SRCC &amp; Faculty of Law, University of Delhi), our dedicated International Legal Desk handles multi-million dollar cross-border corporate investments, international commercial arbitration (SIAC / LCIA), foreign currency regulatory compliance under FEMA, and complex ancestral estate repatriation for Non-Resident Indians across North America, Europe, Singapore, and the Middle East.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {INTERNATIONAL_DESK_CAPABILITIES.slice(0, 4).map((cap) => (
                  <div key={cap.id} className="relative rounded-xl overflow-hidden border border-gold/20 p-4 space-y-1.5 group bg-black/40">
                    {cap.image && (
                      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                        <img
                          src={cap.image}
                          alt={cap.title}
                          className="w-full h-full object-cover opacity-35 filter brightness-85 contrast-110 group-hover:scale-105 group-hover:opacity-50 transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/85 to-transparent" />
                      </div>
                    )}
                    <div className="relative z-10 space-y-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-gold font-bold">{cap.focus}</span>
                      <h4 className="text-xs font-serif font-bold text-white">{cap.title}</h4>
                      <p className="text-[11px] text-[#A2A6A5] line-clamp-2">{cap.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => {
                    setActivePage('international-desk');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center space-x-2 rounded-xl bg-gradient-to-r from-gold-light via-gold to-gold-dark px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-deep-bg shadow-xl shadow-gold/20 hover:brightness-110 transition cursor-pointer"
                >
                  <span>Explore International Desk</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  onClick={() => downloadVCard(EQUITY_PARTNER)}
                  className="inline-flex items-center space-x-2 rounded-xl border border-gold/40 bg-black/40 px-5 py-3.5 font-mono text-xs uppercase tracking-wider text-gold hover:bg-gold/10 transition cursor-pointer"
                >
                  <Download className="h-4 w-4" />
                  <span>Save Counsel VCard (.vcf)</span>
                </button>
              </div>
            </div>

            {/* Counsel Mini Bio Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md rounded-2xl border border-gold/30 bg-[#070B14]/90 p-6 shadow-2xl relative overflow-hidden">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={EQUITY_PARTNER.portrait}
                    alt={EQUITY_PARTNER.name}
                    className="h-20 w-20 rounded-xl object-cover object-top border border-gold/40"
                  />
                  <div>
                    <h3 className="font-serif text-lg font-bold text-white">{EQUITY_PARTNER.name}</h3>
                    <span className="text-xs font-mono text-gold font-semibold uppercase">{EQUITY_PARTNER.roleBadge}</span>
                    <div className="text-[10px] text-[#A2A6A5] mt-0.5">{EQUITY_PARTNER.education}</div>
                  </div>
                </div>

                <p className="text-xs text-[#BABDC0] leading-relaxed italic border-l-2 border-gold pl-3 py-1 bg-black/30 rounded-r">
                  "{EQUITY_PARTNER.summary}"
                </p>

                <div className="mt-4 pt-4 border-t border-gold/15 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#A2A6A5] block">
                    Key International Forums:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {EQUITY_PARTNER.keyForums.map((f, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-gold/10 border border-gold/25 text-gold">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Global Gateway Hubs with City Imagery */}
          <div className="mt-16 pt-12 border-t border-gold/20 space-y-6">
            <div className="text-center space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-widest text-gold font-bold">
                Transnational Arbitral &amp; Corporate Network
              </span>
              <h3 className="font-display text-xl font-bold text-white uppercase tracking-wider">
                Cross-Border Jurisdictional Gateway
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {INTERNATIONAL_HUBS.map((hub, idx) => (
                <div key={idx} className="relative rounded-2xl overflow-hidden border border-gold/25 group h-44 flex flex-col justify-end p-4 shadow-xl">
                  <img
                    src={hub.image}
                    alt={hub.city}
                    className="absolute inset-0 w-full h-full object-cover filter brightness-90 contrast-110 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/60 to-transparent" />
                  <div className="relative z-10 space-y-1">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-gold font-bold block">
                      {hub.region}
                    </span>
                    <h4 className="font-display text-base font-bold text-white uppercase tracking-wide">
                      {hub.city}
                    </h4>
                    <p className="text-[10px] text-[#C4C7C8] line-clamp-1 font-sans">
                      {hub.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. REPRESENTATIVE MATTERS & CASE REGISTRY (RULE 36 SHOWCASE) */}
      <section className="py-24 border-t border-gold/20 bg-black/40 relative">
        <div className="pointer-events-none absolute -bottom-1/4 left-1/4 h-[450px] w-[450px] rounded-full bg-gold/10 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-gold font-bold">
                Precedents &amp; Statutory Outcomes
              </span>
              <h2 className="font-display text-3xl font-extrabold gold-gradient-text sm:text-4xl uppercase tracking-wide mt-1">
                Representative Case Registry
              </h2>
              <p className="max-w-2xl text-xs leading-relaxed text-[#BABDC0] font-sans mt-2">
                Published strictly in compliance with Bar Council of India Rule 36 for institutional informational purposes. All client identities and proprietary terms are fully de-identified.
              </p>
            </div>

            <button
              onClick={() => {
                setActivePage('case-registry');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center space-x-2 rounded-xl border border-gold/40 bg-black/40 px-5 py-3 font-mono text-xs uppercase tracking-wider text-gold hover:bg-gold/10 transition cursor-pointer self-start md:self-auto shrink-0"
            >
              <span>View Full Case Registry</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 font-sans">
            {REPRESENTATIVE_MATTERS.slice(0, 3).map((cs) => (
              <div
                key={cs.id}
                className="flex flex-col justify-between rounded-2xl glass-card glass-card-hover p-6 space-y-4 shadow-xl border border-gold/20 gold-flare-top"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-gold/20 pb-3">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-gold font-bold">
                      {cs.discipline}
                    </span>
                    <span className="inline-flex rounded-full bg-gold/15 px-3 py-1 font-mono text-[9px] text-[#BABDC0] border border-gold/30 font-bold">
                      {cs.forum}
                    </span>
                  </div>
                  <h4 className="font-display text-sm font-bold text-white uppercase tracking-wide leading-snug">
                    {cs.matterSummary}
                  </h4>
                  <div className="text-[11px] font-mono text-[#A2A6A5] bg-black/40 p-2 rounded border border-gold/15">
                    <strong className="text-gold">Statute:</strong> {cs.statutoryContext}
                  </div>
                </div>
                <div className="rounded-xl bg-black/40 p-4 border border-gold/15 text-xs text-[#BABDC0] leading-relaxed backdrop-blur-md">
                  <strong className="text-gold font-mono text-[10px] uppercase tracking-wider block mb-1">Judicial Outcome:</strong> {cs.outcome}
                  <div className="mt-3 pt-2 border-t border-gold/15 text-[10px] font-mono text-[#A2A6A5] flex items-center justify-between">
                    <span>Lead Counsel: {cs.leadCounsel}</span>
                    <CheckCircle2 className="h-3 w-3 text-gold" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PARTNERS & LEADERSHIP PROFILE SECTION */}
      <section className="py-24 relative border-t border-gold/15 bg-gradient-to-b from-[#030712] via-[#050A16] to-[#030712] overflow-hidden">
        {/* Chambers Law Library Background (Warm & Dignified Archival View) */}
        <div className="pointer-events-none absolute inset-0 z-0 opacity-30 sm:opacity-22 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=85&w=1920"
            alt="Law Library & Archival Statutes"
            className="w-full h-full object-cover object-center filter contrast-110 brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#030712]/70 to-[#030712]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="font-mono text-[10px] uppercase tracking-widest text-gold font-bold">
              Chambers Leadership &amp; Partners
            </span>
            <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl uppercase tracking-wide">
              Advocating Justice with Scholarship, Discipline &amp; Precision
            </h2>
            <p className="text-xs sm:text-sm text-[#BABDC0] leading-relaxed">
              Under the stewardship of Advocate Kapil Dev Vishwakarma and Advocate Kunal Murari, Nityaprabha Law Chambers unites deep statutory scholarship with forward-thinking commercial strategy to protect client rights before the Supreme Court, High Courts, and regulatory authorities.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {PARTNERS.map((partner) => (
              <div
                key={partner.id}
                className="rounded-3xl glass-panel p-6 sm:p-8 gold-border-glow shadow-2xl gold-flare-top flex flex-col justify-between space-y-6"
              >
                <div className="space-y-6">
                  {/* Photo & Identity Header */}
                  <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                    <div className="relative rounded-2xl overflow-hidden border border-gold/40 p-1.5 glass-panel shrink-0 shadow-xl w-48 h-56 sm:w-44 sm:h-52">
                      <img
                        src={partner.portrait}
                        alt={partner.name}
                        referrerPolicy="no-referrer"
                        className="rounded-xl object-cover object-top w-full h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/70 via-transparent to-transparent pointer-events-none" />
                    </div>

                    <div className="space-y-2 text-center sm:text-left">
                      <span className="inline-block rounded-full bg-gold/15 border border-gold/30 px-3 py-1 font-mono text-[9px] uppercase tracking-widest text-gold font-bold">
                        {partner.roleBadge}
                      </span>
                      <h3 className="font-display text-xl font-bold uppercase gold-gradient-text tracking-wider">
                        {partner.name}
                      </h3>
                      <p className="text-xs text-[#BABDC0] font-medium leading-snug">
                        {partner.specialization}
                      </p>
                      <div className="pt-2 text-[11px] text-[#8E9296] space-y-1 font-mono">
                        <p>• {partner.education}</p>
                        <p>• {partner.admissions}</p>
                        <p>• {partner.experience}</p>
                      </div>
                    </div>
                  </div>

                  {/* Partner Quote */}
                  <blockquote className="font-serif text-xs sm:text-sm italic text-white/90 border-l-2 border-gold pl-4 leading-relaxed glass-card p-4 rounded-r-xl">
                    {partner.summary}
                  </blockquote>

                  {/* Key Capabilities */}
                  <div className="space-y-2.5 pt-2">
                    <h4 className="font-mono text-[10px] uppercase tracking-wider text-gold font-bold">
                      Key Competencies &amp; Focus
                    </h4>
                    <div className="space-y-2 text-xs text-[#BABDC0]">
                      {partner.qualifications.map((q, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <Check className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                          <span className="leading-snug">{q}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Judicial Forums */}
                  {partner.keyForums && (
                    <div className="pt-2">
                      <h4 className="font-mono text-[9px] uppercase tracking-wider text-gold/80 font-bold mb-1.5">
                        Key Judicial Forums
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {partner.keyForums.map((f, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded text-[9px] font-mono bg-gold/10 border border-gold/25 text-gold"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Memberships */}
                  <div className="pt-2">
                    <h4 className="font-mono text-[9px] uppercase tracking-wider text-gold/80 font-bold mb-2">
                      Bar Standing &amp; Memberships
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {partner.memberships.map((m, idx) => (
                        <span
                          key={idx}
                          className="inline-flex rounded-lg bg-black/40 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-[#A0A4A8] border border-gold/15"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card CTA with VCard Download */}
                <div className="pt-4 border-t border-gold/20 flex flex-col sm:flex-row gap-2.5">
                  <button
                    onClick={onOpenConsultation}
                    className="flex-1 rounded-xl bg-gradient-to-r from-gold-light via-gold to-gold-dark py-3 font-mono text-[10px] font-bold uppercase tracking-widest text-deep-bg transition hover:scale-[1.01] hover:shadow-lg hover:shadow-gold/30 shadow-md shadow-gold/15 cursor-pointer text-center"
                  >
                    Request Partner Callback
                  </button>
                  <button
                    onClick={() => downloadVCard(partner)}
                    className="inline-flex items-center justify-center space-x-1.5 rounded-xl border border-gold/40 bg-black/40 px-4 py-3 font-mono text-[10px] uppercase tracking-wider text-gold hover:bg-gold/10 transition cursor-pointer"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Save VCard</span>
                  </button>
                  <button
                    onClick={() => {
                      setActivePage('about');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="rounded-xl border border-gold/30 bg-black/20 backdrop-blur-md px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-[#BABDC0] hover:text-white hover:border-gold transition-all cursor-pointer text-center"
                  >
                    Credentials
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE US */}
      <section className="py-24 relative overflow-hidden border-y border-gold/20 bg-black/30">
        <div className="pointer-events-none absolute -top-1/4 right-0 h-[450px] w-[450px] rounded-full bg-gold/10 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Texts */}
            <div className="space-y-6 lg:col-span-5">
              <span className="font-mono text-[10px] uppercase tracking-widest text-gold font-bold">
                Uncompromising Professional Values
              </span>
              <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl uppercase tracking-wide">
                Uncompromising Dedication to Professional Integrity
              </h2>
              <p className="text-xs leading-relaxed text-[#BABDC0]">
                Legal challenges require a thorough and proactive representation. Nityaprabha Law Chambers is built on three core values: absolute client confidentiality, analytical precision, and strict adherence to professional ethics.
              </p>
              <p className="text-xs leading-relaxed text-[#BABDC0]">
                We avoid generic templates, instead performing meticulous statutory analysis and due diligence for every dispute and transaction. In an era of rapid technological and regulatory change, our legal counsel remains committed to keeping client operations compliant and secure.
              </p>
              <div className="pt-4">
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-gold-light via-gold to-gold-dark px-6 py-3 font-mono text-[10px] font-bold uppercase tracking-widest text-deep-bg transition hover:scale-[1.02] hover:shadow-lg hover:shadow-gold/30 shadow-md shadow-gold/15 cursor-pointer"
                >
                  Book Secure Screening Call
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Right Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-7">
              <div className="rounded-2xl glass-card glass-card-hover p-6 space-y-3 shadow-xl border border-gold/20">
                <span className="font-mono text-[10px] uppercase tracking-widest text-gold font-bold">01. Absolute Privilege</span>
                <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">Confidentiality Guarded</h4>
                <p className="text-xs leading-relaxed text-[#BABDC0] font-sans">
                  Grounded strictly under the Indian Evidence Act and the DPDP Act 2023. Client case profiles are completely de-identified.
                </p>
              </div>
              <div className="rounded-2xl glass-card glass-card-hover p-6 space-y-3 shadow-xl border border-gold/20">
                <span className="font-mono text-[10px] uppercase tracking-widest text-gold font-bold">02. Analytical Depth</span>
                <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">Precedent-backed Strategy</h4>
                <p className="text-xs leading-relaxed text-[#BABDC0] font-sans">
                  No cookie-cutter templates. We run historical searches on SCC Online and Manupatra for every defense draft.
                </p>
              </div>
              <div className="rounded-2xl glass-card glass-card-hover p-6 space-y-3 shadow-xl border border-gold/20">
                <span className="font-mono text-[10px] uppercase tracking-widest text-gold font-bold">03. Direct Access</span>
                <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">Partner-led Representation</h4>
                <p className="text-xs leading-relaxed text-[#BABDC0] font-sans">
                  Your case details are overseen and validated by a senior partner, not generic junior legal assistants.
                </p>
              </div>
              <div className="rounded-2xl glass-card glass-card-hover p-6 space-y-3 shadow-xl border border-gold/20">
                <span className="font-mono text-[10px] uppercase tracking-widest text-gold font-bold">04. Clear Timelines</span>
                <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">Conflict Search Speed</h4>
                <p className="text-xs leading-relaxed text-[#BABDC0] font-sans">
                  Fast-track conflict-clearance screening completed within 24 business hours to protect client privileges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PROCESS TIMELINE */}
      <section className="py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 mb-16">
            <span className="font-mono text-[10px] uppercase tracking-widest text-gold font-bold">
              Step-by-step Compliance Pathway
            </span>
            <h2 className="font-display text-3xl font-extrabold gold-gradient-text sm:text-4xl uppercase tracking-wide">
              Confidential Intake &amp; Conflict Clearance
            </h2>
            <p className="max-w-2xl mx-auto text-xs leading-relaxed text-[#BABDC0] font-sans">
              To protect both our existing corporate retainers and your individual interests, Nityaprabha Law Chambers follows a strict, legally compliant on-boarding protocol.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4 relative font-sans">
            <div className="absolute top-[25px] left-12 right-12 hidden h-0.5 bg-gold/20 md:block z-0" />

            {PROCESS_TIMELINE.map((item, index) => (
              <div key={index} className="space-y-4 relative z-10 glass-card glass-card-hover rounded-2xl p-6 shadow-xl border border-gold/20">
                <div className="flex h-12 w-12 items-center justify-center rounded-full glass-panel border-2 border-gold font-mono text-sm font-bold text-gold shadow-lg shadow-gold/30">
                  {item.step}
                </div>
                <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider">
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed text-[#BABDC0] font-sans">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. INDUSTRIES SERVED */}
      <section className="py-24 border-y border-gold/20 bg-black/30 relative">
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-gold/10 blur-3xl animate-pulse" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 mb-16">
            <span className="font-mono text-[10px] uppercase tracking-widest text-gold font-bold">
              Commercial Sector Alignments
            </span>
            <h2 className="font-display text-3xl font-extrabold gold-gradient-text sm:text-4xl uppercase tracking-wide">
              Sectors &amp; Industries Served
            </h2>
            <p className="max-w-2xl mx-auto text-xs leading-relaxed text-[#BABDC0] font-sans">
              To bridge the cognitive gap between statutory concepts and business operations, we customize our practice briefs according to specific client realities.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 font-sans">
            {INDUSTRIES_SERVED.map((ind, idx) => {
              const industryImages = [
                'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600',
                'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=600',
                'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600',
                'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=600',
                'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600'
              ];
              return (
                <div
                  key={idx}
                  className="group relative rounded-2xl glass-card glass-card-hover p-6 shadow-xl border border-gold/20 overflow-hidden cursor-default min-h-[170px] flex flex-col justify-end"
                >
                  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <img
                      src={industryImages[idx % industryImages.length]}
                      alt={ind.name}
                      className="w-full h-full object-cover filter brightness-90 contrast-110 opacity-40 group-hover:scale-110 group-hover:opacity-60 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/75 to-transparent" />
                  </div>
                  <div className="relative z-10 space-y-2">
                    <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider group-hover:text-gold transition-colors">
                      {ind.name}
                    </h4>
                    <p className="text-xs text-[#BABDC0] leading-relaxed font-sans">
                      {ind.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. EXPERT FAQs SECTION */}
      <section className="py-24 relative">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 relative z-10">
          <div className="text-center space-y-4 mb-16">
            <span className="font-mono text-[10px] uppercase tracking-widest text-gold font-bold">
              Technical Domain FAQs
            </span>
            <h2 className="font-display text-3xl font-extrabold gold-gradient-text sm:text-4xl uppercase tracking-wide">
              Frequently Asked Legal Inquiries
            </h2>
            <p className="text-xs leading-relaxed text-[#BABDC0] font-sans">
              Answering complex legal and regulatory questions regarding statutory boundaries and procedural prerequisites under Indian law.
            </p>
          </div>

          <div className="space-y-4 font-sans">
            {GENERAL_FAQS.map((f, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={f.id}
                  className="rounded-2xl glass-card overflow-hidden shadow-xl border border-gold/20 transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between p-5 text-left text-xs sm:text-sm font-display font-bold text-white uppercase tracking-wider transition hover:text-gold cursor-pointer"
                  >
                    <span>{f.question}</span>
                    <span className="ml-4 font-mono text-gold font-bold text-base">{isOpen ? '−' : '+'}</span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border-t border-gold/15 bg-black/40 p-5 text-xs sm:text-sm leading-relaxed text-[#BABDC0] backdrop-blur-md"
                      >
                        {f.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. STATUTORY COMPLIANCE & RISK DIAGNOSTICS */}
      <section className="py-16 sm:py-20 border-t border-gold/20 bg-gradient-to-b from-[#030712] via-[#050B18] to-[#030712] relative">
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gold/5 blur-[140px]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <StatutoryDiagnostics onOpenConsultation={onOpenConsultation} />
        </div>
      </section>

      {/* 12. PRIVILEGED INTAKE & CONTACT CTA BLOCK */}
      <section className="py-20 border-t border-gold/20 bg-gradient-to-b from-[#030712] via-[#080E1C] to-[#030712]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="rounded-3xl glass-panel p-8 md:p-12 relative overflow-hidden shadow-2xl gold-border-glow gold-flare-top">
            <div className="absolute top-0 right-0 h-48 w-48 bg-gold/10 blur-3xl rounded-full" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
              <div className="space-y-4 font-sans">
                <span className="font-mono text-[9px] uppercase tracking-widest text-gold font-bold">
                  Privileged Consultation Intake
                </span>
                <h3 className="font-display text-2xl font-extrabold gold-gradient-text md:text-3xl uppercase tracking-wide">
                  Initiate a Secure &amp; Confidential Review
                </h3>
                <p className="text-xs leading-relaxed text-[#BABDC0]">
                  Get connected directly with Advocate Kapil Dev Vishwakarma (Managing Partner), Advocate Kunal Murari (Equity Partner), or our senior legal associates regarding IPR prosecution, corporate structuring, international transactions, or dispute strategy. Your inquiry is privileged and confidential.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href="tel:+918287066868"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-light via-gold to-gold-dark px-6 py-3.5 font-mono text-[10px] font-bold uppercase tracking-widest text-deep-bg transition hover:scale-[1.02] hover:shadow-lg hover:shadow-gold/30 shadow-md shadow-gold/15 cursor-pointer"
                  >
                    <Phone className="h-4 w-4 text-deep-bg shrink-0" />
                    <span>Call +91 82870 66868</span>
                  </a>
                  <a
                    href="mailto:nityaprabhalawchambers@gmail.com"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-gold/40 bg-black/40 backdrop-blur-md px-6 py-3.5 font-mono text-[10px] font-bold uppercase tracking-widest text-gold hover:text-white hover:border-gold hover:bg-gold/10 transition-all cursor-pointer shadow-lg"
                  >
                    <Mail className="h-4 w-4 text-gold shrink-0" />
                    <span>Email Chambers</span>
                  </a>
                </div>
              </div>

              {/* Quick Legal Notice */}
              <div className="rounded-2xl bg-black/40 p-6 border border-gold/20 space-y-3.5 font-sans backdrop-blur-md shadow-inner">
                <h4 className="font-mono text-[10px] uppercase tracking-wider text-gold font-bold">
                  Privilege Notice &amp; Screening
                </h4>
                <div className="space-y-2 text-[11px] leading-relaxed text-[#BABDC0]">
                  <p>
                    • <strong>Screening Mandatory:</strong> Every query must bypass the conflict-search checker prior to partner callbacks.
                  </p>
                  <p>
                    • <strong>Bar Standing Validated:</strong> Advocate Kapil Dev Vishwakarma (Enr: D/1842/2009) &amp; Advocate Kunal Murari are advocates in verified good standing with the Bar Council of Delhi.
                  </p>
                  <p>
                    • <strong>Data Localization:</strong> Fully processed inside Indian secure server centers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
