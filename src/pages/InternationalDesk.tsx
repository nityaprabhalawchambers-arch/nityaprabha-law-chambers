import React from 'react';
import { motion } from 'motion/react';
import { Globe, ShieldCheck, ArrowRight, FileText, CheckCircle2, Building, Scale, Award, Download, Phone, Mail } from 'lucide-react';
import { EQUITY_PARTNER, INTERNATIONAL_DESK_CAPABILITIES, REPRESENTATIVE_MATTERS, INTERNATIONAL_HUBS } from '../data';
import { downloadVCard } from '../utils/vcard';

interface InternationalDeskProps {
  onOpenConsultation: () => void;
}

export default function InternationalDesk({ onOpenConsultation }: InternationalDeskProps) {
  const crossBorderMatters = REPRESENTATIVE_MATTERS.filter(
    (m) => m.discipline === 'International & Cross-Border' || m.discipline === 'Corporate & Tax'
  );

  return (
    <div className="pt-24 pb-20">
      {/* Hero Header */}
      <section className="relative overflow-hidden py-16 md:py-24 border-b border-gold/15 bg-gradient-to-b from-[#030712] via-[#070B14] to-deep-bg">
        {/* International Skyline & Global Trade Background */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1920"
            alt="International Legal Desk & Cross-Border Trade"
            className="w-full h-full object-cover object-center opacity-18 filter grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/90 to-[#030712]/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-[#030712]/80" />
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1.5 text-xs font-mono uppercase tracking-widest text-gold mb-6 backdrop-blur-md">
              <Globe className="h-3.5 w-3.5" />
              <span>Global Practice & Cross-Border Advisory</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.1]">
              International & Cross-Border Legal Desk
            </h1>

            <p className="mt-6 text-base md:text-lg text-[#BABDC0] leading-relaxed font-sans">
              Anchored by Advocate Kunal Murari, our International Legal Desk provides high-stakes institutional advisory and dispute resolution for multinational corporations, foreign investors, global venture funds, and Non-Resident Indians (NRIs) navigating Indian regulatory, financial, and jurisdictional boundaries.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center space-x-2 rounded-xl bg-gradient-to-r from-gold-light via-gold to-gold-dark px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-deep-bg shadow-xl shadow-gold/20 hover:brightness-110 transition cursor-pointer"
              >
                <span>Initiate Cross-Border Briefing</span>
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
        </div>
      </section>

      {/* Desk Leadership Spotlight */}
      <section className="py-16 border-b border-gold/15 bg-[#050A16]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Portrait Column */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group w-full max-w-md">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-gold-dark via-gold to-gold-light opacity-30 blur-lg group-hover:opacity-60 transition duration-500" />
                <div className="relative rounded-2xl overflow-hidden border border-gold/30 bg-black/60 shadow-2xl">
                  <img
                    src={EQUITY_PARTNER.portrait}
                    alt={EQUITY_PARTNER.name}
                    className="w-full aspect-[4/5] object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#040914]/90 border border-gold/20 backdrop-blur-md">
                    <div className="font-serif text-lg font-bold text-white">{EQUITY_PARTNER.name}</div>
                    <div className="font-mono text-xs text-gold font-semibold uppercase tracking-wider">{EQUITY_PARTNER.roleBadge}</div>
                    <div className="text-[11px] text-[#A2A6A5] mt-1">{EQUITY_PARTNER.education}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Counsel Profile & Credentials */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-gold">
                <Scale className="h-4 w-4" />
                <span>Desk Lead & Equity Partner</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white">
                Bridging Elite Commercial Finance & Multi-Jurisdictional Advocacy
              </h2>

              <p className="text-sm md:text-base text-[#BABDC0] leading-relaxed">
                Advocate Kunal Murari combines academic pedigree from India's premier commerce institution, <strong>Shri Ram College of Commerce (SRCC)</strong>, with legal training from the <strong>Faculty of Law, University of Delhi</strong>. His practice synthesizes financial modeling, transfer pricing metrics, and statutory cross-border defense before high-level tribunals including SIAC, NCLT, ITAT, and the High Court of Delhi.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {EQUITY_PARTNER.qualifications.map((qual, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 p-3 rounded-xl bg-black/40 border border-gold/15">
                    <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                    <span className="text-xs text-[#BABDC0] leading-snug">{qual}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${EQUITY_PARTNER.phone}`}
                  className="inline-flex items-center space-x-2 text-xs font-mono text-gold hover:text-white transition"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span>{EQUITY_PARTNER.phone}</span>
                </a>
                <span className="text-gold/30">|</span>
                <a
                  href={`mailto:${EQUITY_PARTNER.email}`}
                  className="inline-flex items-center space-x-2 text-xs font-mono text-gold hover:text-white transition"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>{EQUITY_PARTNER.email}</span>
                </a>
                <span className="text-gold/30">|</span>
                <span className="text-xs font-mono text-[#A2A6A5]">
                  Bar Council of Delhi
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Practice Capabilities Grid */}
      <section className="py-20 bg-deep-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-gold">Institutional Competencies</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-2">
              Cross-Border & NRI Legal Architecture
            </h2>
            <p className="text-sm text-[#A2A6A5] mt-3">
              Comprehensive legal frameworks engineered to protect capital, resolve disputes across international arbitral institutions, and structure inward investments under Indian law.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {INTERNATIONAL_DESK_CAPABILITIES.map((cap) => (
              <div
                key={cap.id}
                className="rounded-2xl border border-gold/25 bg-[#070B14] shadow-xl hover:border-gold/50 transition-all duration-300 relative group overflow-hidden flex flex-col justify-between"
              >
                {/* Capability Header Image Banner */}
                {cap.image && (
                  <div className="relative h-44 w-full overflow-hidden border-b border-gold/20">
                    <img
                      src={cap.image}
                      alt={cap.title}
                      className="w-full h-full object-cover filter brightness-80 contrast-110 group-hover:scale-105 group-hover:brightness-90 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-[#070B14]/40 to-transparent" />
                    <span className="absolute top-3 left-4 px-2.5 py-1 rounded-md text-[9px] font-mono uppercase tracking-widest bg-black/75 border border-gold/30 text-gold font-bold backdrop-blur-sm">
                      {cap.focus}
                    </span>
                  </div>
                )}

                <div className="p-7 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-gold/15 mb-3">
                      <span className="text-xs font-mono uppercase tracking-wider text-gold font-semibold">
                        Institutional Capability
                      </span>
                      <div className="h-7 w-7 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-deep-bg transition">
                        <Globe className="h-3.5 w-3.5" />
                      </div>
                    </div>

                    <h3 className="text-xl font-serif font-bold text-white mb-2">
                      {cap.title}
                    </h3>

                    <p className="text-xs md:text-sm text-[#BABDC0] leading-relaxed">
                      {cap.description}
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-gold/15">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#A2A6A5] block mb-1.5">
                        Statutory Enactments &amp; Treaties:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {cap.applicableLaws.map((law, idx) => (
                          <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/60 border border-gold/20 text-[#BABDC0]">
                            {law}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#A2A6A5] block mb-1.5">
                        Key Jurisdictional Forums:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {cap.keyForums.map((forum, idx) => (
                          <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-gold/10 border border-gold/25 text-gold">
                            {forum}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Transnational Arbitral Hubs Showcase */}
          <div className="mt-20 pt-14 border-t border-gold/20 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">
                Transnational Arbitral &amp; Transactional Network
              </span>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">
                Global Jurisdictional Footprint
              </h3>
              <p className="text-xs text-[#BABDC0]">
                Coordinating multi-jurisdictional matters, international commercial arbitration enforcement, and overseas FDI inflows.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {INTERNATIONAL_HUBS.map((hub, idx) => (
                <div key={idx} className="relative rounded-2xl overflow-hidden border border-gold/25 group h-52 flex flex-col justify-end p-5 shadow-2xl">
                  <img
                    src={hub.image}
                    alt={hub.city}
                    className="absolute inset-0 w-full h-full object-cover filter brightness-70 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/60 to-transparent" />
                  <div className="relative z-10 space-y-1">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-gold font-bold block">
                      {hub.region}
                    </span>
                    <h4 className="font-display text-lg font-bold text-white uppercase tracking-wide">
                      {hub.city}
                    </h4>
                    <p className="text-[11px] text-[#C4C7C8] line-clamp-1 font-sans">
                      {hub.role}
                    </p>
                    <span className="text-[9px] font-mono text-gold/80 block line-clamp-1 pt-1 border-t border-gold/20">
                      {hub.statute}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Border Representative Matters */}
      <section className="py-16 bg-[#040813] border-t border-b border-gold/15">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-gold">De-Identified Track Record</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mt-1">
              Cross-Border Matters & Tribunal Precedents
            </h2>
            <p className="text-xs text-[#A2A6A5] mt-1 font-mono">
              Compliant with Bar Council of India Rule 36. Names and proprietary identifiers redacted to maintain client privilege.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {crossBorderMatters.map((matter) => (
              <div
                key={matter.id}
                className="rounded-xl border border-gold/20 bg-black/40 p-6 space-y-4 hover:border-gold/40 transition"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-gold font-bold">{matter.forum}</span>
                  <span className="text-[#A2A6A5]">{matter.discipline}</span>
                </div>

                <h4 className="text-base font-serif font-bold text-white">
                  {matter.matterSummary}
                </h4>

                <div className="text-xs text-[#A2A6A5] font-mono bg-black/60 p-2.5 rounded border border-gold/15">
                  <span className="text-gold">Statutory Context: </span>
                  {matter.statutoryContext}
                </div>

                <div className="text-xs text-[#BABDC0] leading-relaxed">
                  <strong className="text-white">Outcome: </strong>
                  {matter.outcome}
                </div>

                <div className="pt-2 border-t border-gold/15 text-[11px] font-mono text-gold flex items-center justify-between">
                  <span>Lead Counsel: {matter.leadCounsel}</span>
                  <CheckCircle2 className="h-3.5 w-3.5 text-gold" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Call to Action */}
      <section className="py-20 bg-deep-bg text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Scale className="h-10 w-10 text-gold mx-auto mb-4" />
          <h2 className="text-3xl font-serif font-bold text-white">
            Schedule a Confidential Cross-Border Conference
          </h2>
          <p className="text-sm text-[#BABDC0] mt-3 leading-relaxed">
            Whether structuring high-value FDI inflows, initiating international arbitration, or resolving ancestral estate succession for non-resident beneficiaries, our chambers operates with discretion, technical mastery, and rigorous statutory precision.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="rounded-xl bg-gradient-to-r from-gold-light via-gold to-gold-dark px-8 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-deep-bg shadow-xl shadow-gold/20 hover:brightness-110 transition cursor-pointer"
            >
              Initiate Chambers Conflict Check
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
