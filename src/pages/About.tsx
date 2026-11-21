import React from 'react';
import { motion } from 'motion/react';
import { Shield, BookOpen, Compass, Award, CheckCircle, Scale, Download, Phone, Mail, CheckCircle2 } from 'lucide-react';
import { FOUNDER_BIO, METRICS, PARTNERS, MANAGING_PARTNER, EQUITY_PARTNER } from '../data';
import { downloadVCard } from '../utils/vcard';

interface AboutProps {
  onOpenConsultation: () => void;
}

export default function About({ onOpenConsultation }: AboutProps) {
  const pillars = [
    {
      title: 'Intellectual Capital',
      desc: 'Our advocates combine meticulous statutory research with decades of practical trial experience. We don\'t guess or rely on outdated drafts; we track Supreme Court precedents daily on Manupatra and SCC Online to compile winning strategies.',
      icon: BookOpen
    },
    {
      title: 'Absolute Confidentiality',
      desc: 'Advocate-client privilege is sacrosanct. We maintain strict digital encryption on our local servers and require absolute conflict checks for every incoming query prior to discussing any material case parameters.',
      icon: Shield
    },
    {
      title: 'Proactive Risk Mitigation',
      desc: 'The best litigation is the one that was resolved or prevented entirely at the drafting stage. We review shareholder contracts, RERA deeds, and IP filings to eliminate loopholes, ensuring our clients operate with absolute peace of mind.',
      icon: Compass
    }
  ];

  return (
    <div className="bg-[#030712] text-[#BABDC0] pt-28 pb-20 overflow-hidden">
      {/* Editorial Title */}
      <section className="relative overflow-hidden py-20 border-b border-gold/20">
        {/* Architectural Background */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1920"
            alt="Supreme Court & Classical Law Chambers"
            className="w-full h-full object-cover object-center opacity-18 filter grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#030712]/90 to-[#030712]" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gold/10 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="font-mono text-[10px] uppercase tracking-widest text-gold font-bold">
            Institutional Heritage
          </span>
          <h1 className="font-display text-4xl font-extrabold text-white md:text-5xl uppercase tracking-wide">
            A Foundation of Intellectual Capital <br className="hidden md:block" />
            <span className="gold-gradient-text">&amp; Legal Stewardship</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm leading-relaxed text-[#BABDC0] font-sans">
            Nityaprabha Law Chambers was established with a singular mission: to deliver elite, full-service legal advocacy and strategic corporate advisory that meets the highest standards of professional excellence.
          </p>
        </div>
      </section>

      {/* Narrative & Pillars */}
      <section className="py-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 font-sans">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display text-2xl font-bold gold-gradient-text uppercase tracking-wider">
              Rejecting Cookie-Cutter Strategies
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-[#BABDC0] text-justify font-sans">
              Based in New Delhi, Nityaprabha Law Chambers represents multinational corporations, emerging tech startups, cross-border investors, and private individuals in complex, high-stakes matters before various High Courts and the Supreme Court of India. Every dispute is analyzed through a meticulous, multi-disciplinary lens, and every contract is crafted to protect the client's commercial interests.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed text-[#BABDC0] text-justify font-sans">
              Our firm actively resists the standard "marketing" playbook of generic law portals. Our growth is fueled strictly by referability, intellectual authority, and high-quality results. We believe that premium legal services should be transparent, accessible, and run by elite specialists.
            </p>

            {/* Icons / Pillars */}
            <div className="space-y-6 pt-6 font-sans">
              {pillars.map((pil, idx) => {
                const IconComponent = pil.icon;
                return (
                  <div key={idx} className="flex gap-4 rounded-2xl glass-card glass-card-hover p-5 border border-gold/20 shadow-xl">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-black/40 border border-gold/30 text-gold shadow-md">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">{pil.title}</h4>
                      <p className="text-xs leading-relaxed text-[#BABDC0] font-sans">{pil.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Metrics & Qualifications Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Visual Chambers Research Card */}
            <div className="relative rounded-3xl overflow-hidden border border-gold/30 shadow-2xl h-52 group">
              <img
                src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800"
                alt="Law Chambers Research Desk & Legal Briefs"
                className="w-full h-full object-cover filter brightness-85 contrast-110 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/50 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 z-10">
                <span className="font-mono text-[9px] uppercase tracking-widest text-gold font-bold block">
                  New Delhi Chambers
                </span>
                <h4 className="font-display text-base font-bold text-white uppercase tracking-wider">
                  Intellectual Rigour &amp; Research Desk
                </h4>
              </div>
            </div>

            <div className="space-y-8 rounded-3xl glass-panel p-6 md:p-8 gold-border-glow shadow-2xl gold-flare-top">
            <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider border-b border-gold/20 pb-3">
              Verified Experience Metrics
            </h3>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-6">
              {METRICS.map((m, idx) => (
                <div key={idx} className="space-y-1 p-3 rounded-xl bg-black/30 border border-gold/15">
                  <span className="block font-display text-3xl font-extrabold gold-gradient-text">
                    {m.value}
                  </span>
                  <span className="block font-mono text-[9px] uppercase tracking-widest text-gold font-bold">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Standout achievements list */}
            <div className="space-y-4 pt-4 border-t border-gold/20">
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-gold font-bold">Representative Capabilities</h4>
              <div className="space-y-3.5 text-xs text-[#BABDC0] font-sans">
                {FOUNDER_BIO.qualifications.map((q, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5">
                    <CheckCircle className="h-4.5 w-4.5 shrink-0 text-gold mt-0.5" />
                    <span>{q}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 text-center">
              <button
                onClick={onOpenConsultation}
                className="w-full rounded-xl bg-gradient-to-r from-gold-light via-gold to-gold-dark py-3.5 font-mono text-[10px] font-bold uppercase tracking-widest text-deep-bg transition hover:scale-[1.01] hover:shadow-lg hover:shadow-gold/30 shadow-md shadow-gold/15 cursor-pointer"
              >
                Submit Conflict Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Chambers Leadership / Partners Section */}
      <section className="py-20 border-t border-gold/20 bg-black/20 relative overflow-hidden">
        {/* Archival Law Library Background */}
        <div className="pointer-events-none absolute inset-0 z-0 opacity-12 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=1920"
            alt="Law Library & Archival Statutes"
            className="w-full h-full object-cover object-center filter grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-transparent to-[#030712]" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-gold font-bold">
              Chambers Leadership &amp; Equity Partners
            </span>
            <h2 className="font-display text-3xl font-extrabold text-white md:text-4xl uppercase tracking-wider">
              Legal Stewardship &amp; Strategic Advocacy
            </h2>
            <p className="text-xs sm:text-sm text-[#BABDC0] leading-relaxed">
              Nityaprabha Law Chambers operates under the direct leadership of Advocate Kapil Dev Vishwakarma and Advocate Kunal Murari, ensuring every corporate advisory mandate and court briefing receives senior partner oversight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {PARTNERS.map((p) => (
              <div
                key={p.id}
                className="rounded-3xl glass-panel p-6 sm:p-8 gold-border-glow shadow-2xl gold-flare-top flex flex-col justify-between space-y-6"
              >
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
                    <div className="relative rounded-2xl overflow-hidden border border-gold/40 p-1.5 glass-panel shrink-0 shadow-xl w-44 h-52">
                      <img
                        src={p.portrait}
                        alt={p.name}
                        referrerPolicy="no-referrer"
                        className="rounded-xl object-cover w-full h-full"
                      />
                    </div>
                    <div className="space-y-2 text-center sm:text-left">
                      <span className="inline-block rounded-full bg-gold/15 border border-gold/30 px-3 py-1 font-mono text-[9px] uppercase tracking-widest text-gold font-bold">
                        {p.roleBadge}
                      </span>
                      <h3 className="font-display text-xl font-bold uppercase gold-gradient-text tracking-wider">
                        {p.name}
                      </h3>
                      <p className="text-xs text-[#BABDC0] font-medium leading-snug">
                        {p.specialization}
                      </p>
                      <div className="pt-2 text-[11px] text-[#8E9296] space-y-1 font-mono">
                        <p>• {p.education}</p>
                        <p>• {p.admissions}</p>
                        <p>• {p.experience}</p>
                      </div>
                    </div>
                  </div>

                  <blockquote className="font-serif text-xs italic text-white/90 border-l-2 border-gold pl-4 leading-relaxed glass-card p-4 rounded-r-xl">
                    {p.summary}
                  </blockquote>

                  <div className="space-y-2">
                    <h4 className="font-mono text-[10px] uppercase tracking-wider text-gold font-bold">
                      Core Disciplines &amp; Key Focus
                    </h4>
                    <div className="space-y-2 text-xs text-[#BABDC0]">
                      {p.qualifications.map((q, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                          <span className="leading-snug">{q}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Forums Badge List */}
                  {p.keyForums && (
                    <div className="pt-1">
                      <h4 className="font-mono text-[9px] uppercase tracking-wider text-gold/80 font-bold mb-1.5">
                        Key Judicial Forums
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {p.keyForums.map((f, idx) => (
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
                </div>

                <div className="pt-4 border-t border-gold/15 flex flex-col sm:flex-row gap-2.5">
                  <button
                    onClick={onOpenConsultation}
                    className="flex-1 rounded-xl bg-gradient-to-r from-gold-light via-gold to-gold-dark py-3 font-mono text-[10px] font-bold uppercase tracking-widest text-deep-bg transition hover:scale-[1.01] hover:shadow-lg hover:shadow-gold/30 shadow-md shadow-gold/15 cursor-pointer text-center"
                  >
                    Consult with {p.name.split(' ')[1] || 'Partner'}
                  </button>
                  <button
                    onClick={() => downloadVCard(p)}
                    className="inline-flex items-center justify-center space-x-1.5 rounded-xl border border-gold/40 bg-black/40 px-4 py-3 font-mono text-[10px] uppercase tracking-wider text-gold hover:bg-gold/10 transition cursor-pointer"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Save VCard</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Memberships Section */}
      <section className="py-16 border-y border-gold/20 bg-black/30 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h3 className="font-display text-2xl font-bold gold-gradient-text uppercase tracking-wider">Bar Admissions &amp; Memberships</h3>
          <p className="max-w-2xl mx-auto text-xs text-[#BABDC0] font-sans">
            Advocate Kapil Dev Vishwakarma and Advocate Kunal Murari are advocates in good standing registered with the Bar Council of Delhi under the Advocates Act, 1961. We maintain affiliations with premier judicial and international legal bodies.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Supreme Court Bar Association (SCBA)',
              'Delhi High Court Bar Association (DHCBA)',
              'International Association for the Protection of Intellectual Property (AIPPI)',
              'Licensing Executives Society India (LESI)',
              'International Bar Association (IBA) - Corporate & Tax Section',
              'All India Federation of Tax Practitioners (AIFTP)'
            ].map((m, idx) => (
              <span
                key={idx}
                className="inline-flex rounded-xl glass-card px-4 py-2 font-mono text-[9px] uppercase tracking-widest text-[#BABDC0] border border-gold/20 shadow-sm"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
