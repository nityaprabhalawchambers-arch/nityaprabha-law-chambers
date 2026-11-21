import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Scale, ShieldAlert, CheckCircle, ChevronDown, HelpCircle,
  ArrowRight, Compass, Shield, Users, Briefcase, FileText, LayoutGrid, Gavel
} from 'lucide-react';
import { PRACTICE_AREAS } from '../data';
import InquiryForm from '../components/InquiryForm';

interface PracticeDetailProps {
  practiceId: string | null;
  setPracticeId: (id: string | null) => void;
  onOpenConsultation: () => void;
}

export default function PracticeDetail({
  practiceId,
  setPracticeId,
  onOpenConsultation
}: PracticeDetailProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    setOpenFaqIndex(null);
  }, [practiceId]);

  // Find selected practice, default to first or overview
  const activePractice = PRACTICE_AREAS.find((p) => p.id === practiceId);

  const getGroupLabel = (group: string) => {
    switch (group) {
      case 'founders-brands':
        return 'Founders & Brands';
      case 'individuals-families':
        return 'Individuals & Families';
      case 'disputes':
        return 'Disputes & Litigation';
      case 'cross-cutting':
        return 'Cross-cutting Advisory';
      default:
        return 'General';
    }
  };

  return (
    <div className="bg-[#030712] text-[#BABDC0] pt-28 pb-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Dynamic Breadcrumbs */}
        <div className="flex flex-wrap items-center space-x-2 font-mono text-[9px] uppercase tracking-widest text-[#A2A6A5] border-b border-gold/20 pb-4">
          <button 
            onClick={() => { setPracticeId(null); window.location.hash = 'practices'; }} 
            className="hover:text-gold transition cursor-pointer"
          >
            Practices Console
          </button>
          <span>/</span>
          {activePractice ? (
            <>
              <span className="text-gold font-bold">{getGroupLabel(activePractice.group)}</span>
              <span>/</span>
              <span className="text-white font-extrabold">{activePractice.title}</span>
            </>
          ) : (
            <span className="text-white font-extrabold">All 16 Disciplines</span>
          )}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
          {/* Left Sidebar: Lists all 16 Practice Areas */}
          <aside className="lg:col-span-3 space-y-4 rounded-2xl glass-panel p-5 sticky top-28 gold-border-glow shadow-xl font-sans">
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-gold border-b border-gold/20 pb-2 flex items-center gap-2 font-bold">
              <LayoutGrid className="h-3.5 w-3.5 text-gold" />
              16 Legal Services
            </h3>
            <div className="space-y-1 max-h-[500px] overflow-y-auto pr-1">
              {PRACTICE_AREAS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setPracticeId(p.id);
                    window.location.hash = `practices/${p.id}`;
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`block w-full text-left rounded-xl px-3 py-2.5 text-xs transition-all duration-300 cursor-pointer ${
                    practiceId === p.id
                      ? 'bg-gradient-to-r from-gold-light via-gold to-gold-dark text-deep-bg font-bold shadow-md shadow-gold/25'
                      : 'text-[#BABDC0] hover:bg-white/5 hover:text-gold'
                  }`}
                >
                  {p.title}
                </button>
              ))}
            </div>
            {activePractice && (
              <button
                onClick={() => { setPracticeId(null); window.location.hash = 'practices'; }}
                className="w-full text-center rounded-xl border border-gold/30 bg-black/20 py-2.5 font-mono text-[9px] uppercase tracking-widest hover:border-gold hover:text-white text-[#BABDC0] transition-all cursor-pointer backdrop-blur-md"
              >
                View Console Overview
              </button>
            )}
          </aside>

          {/* Right Main Content Pane */}
          <main className="lg:col-span-9 space-y-10">
            {!activePractice ? (
              /* Practice Area Matrix Dashboard */
              <div className="space-y-8 font-sans">
                <div className="space-y-3">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-gold font-bold">
                    Practice Directory &amp; Console
                  </span>
                  <h1 className="font-display text-3xl font-extrabold gold-gradient-text sm:text-4xl uppercase tracking-wide">
                    16 Disciplines of Statutory Advocacy
                  </h1>
                  <p className="text-xs sm:text-sm text-[#BABDC0] max-w-2xl leading-relaxed">
                    Select any legal discipline to view procedural statutes, high-risk pain points, trial roadmaps, and initiate a conflict-search screening with our partners.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 pt-4">
                  {PRACTICE_AREAS.map((p) => (
                    <div
                      key={p.id}
                      onClick={() => {
                        setPracticeId(p.id);
                        window.location.hash = `practices/${p.id}`;
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="group relative rounded-2xl glass-card glass-card-hover p-6 border border-gold/20 shadow-xl cursor-pointer flex flex-col justify-between space-y-4 overflow-hidden min-h-[260px]"
                    >
                      {/* Thematic Background Image */}
                      {p.image && (
                        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                          <img
                            src={p.image}
                            alt={p.title}
                            className="w-full h-full object-cover opacity-18 filter grayscale contrast-125 group-hover:scale-110 group-hover:opacity-30 group-hover:grayscale-0 transition-all duration-700 ease-out"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/85 to-[#030712]/50" />
                        </div>
                      )}

                      <div className="space-y-3 relative z-10">
                        <div className="flex items-center justify-between border-b border-gold/15 pb-3">
                          <span className="text-[10px] font-mono text-gold font-bold uppercase tracking-wider">
                            {getGroupLabel(p.group)}
                          </span>
                          <span className="text-[9px] font-mono text-[#A2A6A5]">
                            Rule 36 Compliant
                          </span>
                        </div>
                        <h3 className="font-display text-base font-bold text-white group-hover:text-gold transition uppercase tracking-wide">
                          {p.title}
                        </h3>
                        <p className="text-xs text-[#BABDC0] leading-relaxed line-clamp-2">
                          {p.shortDesc}
                        </p>
                        {p.forums && p.forums.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {p.forums.slice(0, 2).map((f, idx) => (
                              <span key={idx} className="px-2 py-0.5 rounded text-[9px] font-mono bg-black/50 border border-gold/20 text-[#A2A6A5]">
                                {f}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="pt-3 border-t border-gold/15 flex items-center justify-between text-xs font-mono text-gold relative z-10">
                        <span>Examine Statutory Roadmap</span>
                        <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* Specific Practice Detail View */
              <motion.div
                key={activePractice.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-8 font-sans"
              >
                {/* Visual Editorial Hero Banner */}
                {(activePractice.heroImage || activePractice.image) && (
                  <div className="relative rounded-3xl overflow-hidden border border-gold/30 shadow-2xl h-60 sm:h-72 w-full group">
                    <img
                      src={activePractice.heroImage || activePractice.image}
                      alt={activePractice.title}
                      className="w-full h-full object-cover filter brightness-85 contrast-115 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/60 to-transparent" />
                    <div className="absolute top-4 left-5 right-5 flex items-center justify-between z-10">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-black/70 backdrop-blur-md px-3.5 py-1 text-[10px] font-mono uppercase tracking-widest text-gold border border-gold/30 font-bold">
                        <Scale className="h-3.5 w-3.5 text-gold" />
                        {getGroupLabel(activePractice.group)}
                      </span>
                      <span className="rounded-full bg-gold/20 backdrop-blur-md px-3 py-1 font-mono text-[9px] text-gold uppercase border border-gold/40 font-bold">
                        Bar Council Rule 36
                      </span>
                    </div>
                    <div className="absolute bottom-5 left-6 right-6 z-10 space-y-1">
                      <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-wide">
                        {activePractice.title}
                      </h2>
                      <p className="text-xs text-gold-light/90 max-w-xl font-serif italic line-clamp-1">
                        {activePractice.shortDesc}
                      </p>
                    </div>
                  </div>
                )}

                {/* Header Section */}
                <div className="space-y-3 border-b border-gold/20 pb-6">
                  <div className="flex items-center space-x-2 text-xs font-mono text-gold font-semibold uppercase tracking-wider">
                    <Scale className="h-4 w-4" />
                    <span>{getGroupLabel(activePractice.group)}</span>
                  </div>
                  <h1 className="font-display text-3xl font-extrabold gold-gradient-text sm:text-4xl uppercase tracking-wide">
                    {activePractice.title}
                  </h1>
                  <p className="text-xs leading-relaxed text-[#A2A6A5] font-sans">
                    Advocacy and advisory counsel under Indian legal acts. All files handled securely with absolute privilege.
                  </p>
                </div>

                {/* Adjudicating Forums Badges */}
                {activePractice.forums && activePractice.forums.length > 0 && (
                  <div className="rounded-2xl glass-card p-5 border border-gold/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xl">
                    <div className="space-y-0.5">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-gold font-bold flex items-center gap-1.5">
                        <Gavel className="h-3.5 w-3.5 text-gold" />
                        Judicial &amp; Regulatory Jurisdiction
                      </span>
                      <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider">Adjudicating Forums:</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {activePractice.forums.map((f, idx) => (
                        <span key={idx} className="px-3 py-1 rounded-lg font-mono text-[10px] bg-gold/10 border border-gold/30 text-gold font-semibold">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Main Copywriting Segment */}
                <div className="rounded-2xl glass-panel p-6 md:p-8 space-y-4 gold-border-glow shadow-xl font-sans gold-flare-top">
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Statutory Scope &amp; Advisory</h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-[#BABDC0] text-justify whitespace-pre-line font-sans">
                    {activePractice.fullDesc}
                  </p>
                </div>

                {/* Primary Client Pain Point */}
                <div className="rounded-2xl border border-red-500/30 bg-red-950/25 backdrop-blur-md p-6 flex gap-4 items-start font-sans shadow-lg">
                  <ShieldAlert className="h-6 w-6 text-red-400 mt-0.5 shrink-0" />
                  <div className="space-y-1.5">
                    <h4 className="font-display text-xs font-bold uppercase tracking-wider text-red-400">Primary Client Pain Points</h4>
                    <p className="text-xs leading-relaxed text-[#BABDC0] text-justify font-sans">
                      {activePractice.painPointNarrative}
                    </p>
                  </div>
                </div>

                {/* Case Process / Statutory Roadmap */}
                <div className="space-y-4 font-sans">
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                    <Compass className="h-4.5 w-4.5 text-gold" />
                    Procedural &amp; Statutory Roadmap
                  </h3>
                  <p className="text-xs text-[#BABDC0] font-sans">
                    We map out a clear, step-by-step compliant pipeline to de-risk litigation outcomes:
                  </p>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 pt-2">
                    {activePractice.statutoryRoadmap.map((item, index) => (
                      <div key={index} className="rounded-2xl glass-card glass-card-hover p-5 space-y-2 border border-gold/20 shadow-xl">
                        <div className="font-mono text-[10px] text-gold font-bold uppercase tracking-wider">{item.step}. {item.title}</div>
                        <p className="text-xs leading-relaxed text-[#BABDC0] font-sans">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Peer-Reviewed Credentials Badge List */}
                <div className="rounded-2xl glass-card p-5 flex flex-wrap items-center justify-between gap-4 font-sans border border-gold/20 shadow-xl">
                  <div className="space-y-1">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-gold font-bold">Validation Markers</span>
                    <span className="block font-display text-xs font-bold text-white uppercase tracking-wider">Factual trust credentials:</span>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {activePractice.trustSignals.map((ts, idx) => (
                      <span key={idx} className="inline-flex rounded-xl bg-black/40 border border-gold/30 px-3.5 py-1.5 font-mono text-[9px] uppercase tracking-widest text-gold font-bold backdrop-blur-md">
                        {ts}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Practice Area FAQ Accordions */}
                <div className="space-y-4 font-sans">
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
                    Technical Inquiries for this Practice
                  </h3>
                  <div className="space-y-3">
                    {activePractice.faq.map((fq, index) => {
                      const isOpen = openFaqIndex === index;
                      return (
                        <div key={index} className="rounded-2xl glass-card overflow-hidden border border-gold/20 shadow-xl">
                          <button
                            onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                            className="flex w-full items-center justify-between p-4 text-left text-xs font-display font-bold uppercase tracking-wider text-white transition hover:text-gold cursor-pointer"
                          >
                            <span>{fq.question}</span>
                            <span className="ml-4 font-mono text-gold font-bold">{isOpen ? '−' : '+'}</span>
                          </button>
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="border-t border-gold/15 p-4 text-xs leading-relaxed text-[#BABDC0] bg-black/40 font-sans backdrop-blur-md"
                              >
                                {fq.answer}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Embedded Multi-Step Onboarding Intake Block */}
                <div className="space-y-4 pt-6 border-t border-gold/20 font-sans">
                  <div className="space-y-1">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-gold font-bold">Intake Console</span>
                    <h3 className="font-display text-lg font-extrabold gold-gradient-text uppercase tracking-wide">
                      Initiate Conflict Clearance for {activePractice.title}
                    </h3>
                    <p className="text-xs text-[#BABDC0] font-sans">
                      Fill out the low-friction intake screen below to prompt a formal clearance callback from Advocate Kapil Dev Vishwakarma, Advocate Kunal Murari, or specializing partner.
                    </p>
                  </div>
                  <InquiryForm embedded={false} preselectedPracticeId={activePractice.id} />
                </div>
              </motion.div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
