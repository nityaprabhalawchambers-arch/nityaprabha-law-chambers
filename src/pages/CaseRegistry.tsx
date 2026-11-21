import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Scale, ShieldCheck, Filter, ArrowRight, CheckCircle2, Building, Gavel, Search, ExternalLink } from 'lucide-react';
import { REPRESENTATIVE_MATTERS } from '../data';
import { RepresentativeMatter } from '../types';

interface CaseRegistryProps {
  onOpenConsultation: () => void;
}

export default function CaseRegistry({ onOpenConsultation }: CaseRegistryProps) {
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const disciplines = [
    { id: 'all', label: 'All Matters' },
    { id: 'IPR & Patents', label: 'IPR & Patents' },
    { id: 'Corporate & Tax', label: 'Corporate & Tax' },
    { id: 'International & Cross-Border', label: 'Cross-Border & FDI' },
    { id: 'Commercial Disputes', label: 'Commercial Disputes' }
  ];

  const filteredMatters = REPRESENTATIVE_MATTERS.filter((matter) => {
    const matchesDiscipline = selectedDiscipline === 'all' || matter.discipline === selectedDiscipline;
    const matchesSearch =
      matter.matterSummary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      matter.forum.toLowerCase().includes(searchQuery.toLowerCase()) ||
      matter.statutoryContext.toLowerCase().includes(searchQuery.toLowerCase()) ||
      matter.leadCounsel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDiscipline && matchesSearch;
  });

  return (
    <div className="pt-24 pb-20">
      {/* Hero Header */}
      <section className="relative overflow-hidden py-16 md:py-24 border-b border-gold/15 bg-gradient-to-b from-[#030712] via-[#070B14] to-deep-bg">
        {/* Judicial Courtroom & Law Chambers Background */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&q=80&w=1920"
            alt="Supreme Court and High Court Judicial Facade"
            className="w-full h-full object-cover object-center opacity-18 filter grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/92 to-[#030712]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-[#030712]/90" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1.5 text-xs font-mono uppercase tracking-widest text-gold mb-6 backdrop-blur-md">
              <Gavel className="h-3.5 w-3.5" />
              <span>Chambers Tribunal Precedents & Jurisprudence</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.1]">
              Representative Matters & Case Registry
            </h1>

            <p className="mt-6 text-base md:text-lg text-[#BABDC0] leading-relaxed font-sans">
              A curated index of representative proceedings and statutory outcomes adjudicated across the Supreme Court of India, High Court of Delhi, National Company Law Tribunal, and International Arbitral Tribunals.
            </p>

            {/* BCI Mandatory Disclosure Box */}
            <div className="mt-8 rounded-xl border border-gold/25 bg-black/50 p-4 backdrop-blur-md flex items-start space-x-3 text-xs text-[#A2A6A5]">
              <ShieldCheck className="h-5 w-5 text-gold shrink-0 mt-0.5" />
              <div className="space-y-1">
                <div className="font-mono uppercase tracking-wider text-gold font-bold text-[10px]">
                  Bar Council of India Rule 36 Compliance Disclosure
                </div>
                <p className="leading-relaxed">
                  In strict conformity with Bar Council of India guidelines, all client identities, commercially proprietary terms, and ongoing non-public details have been de-identified. Past outcomes do not guarantee future statutory results, and this registry is maintained exclusively for factual informational reference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-8 bg-[#050A16] border-b border-gold/15 sticky top-20 z-20 backdrop-blur-md bg-opacity-90">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Discipline Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-black/60 border border-gold/20">
              {disciplines.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setSelectedDiscipline(d.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                    selectedDiscipline === d.id
                      ? 'bg-gold text-deep-bg font-bold shadow-md shadow-gold/20'
                      : 'text-[#BABDC0] hover:text-white'
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-72">
              <Search className="h-4 w-4 text-gold absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search forum, statute, or outcome..."
                className="w-full rounded-xl border border-gold/25 bg-black/60 pl-9 pr-4 py-2 text-xs text-white placeholder-[#7F8489] focus:border-gold focus:outline-none font-mono"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Matters Grid */}
      <section className="py-16 bg-deep-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filteredMatters.length === 0 ? (
            <div className="text-center py-16 border border-gold/15 rounded-2xl bg-black/30">
              <Scale className="h-10 w-10 text-gold/40 mx-auto mb-3" />
              <h3 className="text-lg font-serif text-white">No matching matters found</h3>
              <p className="text-xs text-[#A2A6A5] mt-1 font-mono">Try adjusting your discipline filter or search query</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMatters.map((matter) => (
                <motion.div
                  key={matter.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="rounded-2xl border border-gold/20 bg-[#070B14] p-6 shadow-xl hover:border-gold/50 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Header Badges */}
                    <div className="flex items-center justify-between pb-3 border-b border-gold/15 text-[10px] font-mono">
                      <span className="px-2 py-0.5 rounded bg-gold/10 border border-gold/25 text-gold font-bold">
                        {matter.discipline}
                      </span>
                      <span className="text-[#A2A6A5]">{matter.forum}</span>
                    </div>

                    {/* Summary */}
                    <h3 className="text-base font-serif font-bold text-white mt-4 group-hover:text-gold transition">
                      {matter.matterSummary}
                    </h3>

                    {/* Statutory Context */}
                    <div className="mt-3 rounded-lg bg-black/50 p-2.5 border border-gold/15 text-xs text-[#A2A6A5] font-mono">
                      <span className="text-gold font-semibold">Statutory Reference: </span>
                      {matter.statutoryContext}
                    </div>

                    {/* Outcome */}
                    <div className="mt-4 text-xs text-[#BABDC0] leading-relaxed">
                      <strong className="text-white">Statutory Outcome: </strong>
                      {matter.outcome}
                    </div>
                  </div>

                  {/* Footer with Lead Counsel */}
                  <div className="mt-6 pt-4 border-t border-gold/15 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-gold" />
                      <span className="text-gold text-[11px] font-semibold">{matter.leadCounsel}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Bottom Consultation CTA */}
          <div className="mt-16 rounded-2xl border border-gold/30 bg-gradient-to-r from-[#030712] via-[#0B1220] to-[#030712] p-8 md:p-12 text-center relative overflow-hidden">
            <div className="max-w-2xl mx-auto space-y-4">
              <Scale className="h-8 w-8 text-gold mx-auto" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white">
                Require Representation Before These Forums?
              </h2>
              <p className="text-xs md:text-sm text-[#BABDC0] leading-relaxed">
                Connect directly with Advocate Kapil Dev Vishwakarma and Advocate Kunal Murari to conduct a confidential conflict screening and review trial readiness.
              </p>
              <div className="pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="rounded-xl bg-gradient-to-r from-gold-light via-gold to-gold-dark px-8 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-deep-bg shadow-xl shadow-gold/20 hover:brightness-110 transition cursor-pointer"
                >
                  Schedule Case Review & Conflict Check
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
