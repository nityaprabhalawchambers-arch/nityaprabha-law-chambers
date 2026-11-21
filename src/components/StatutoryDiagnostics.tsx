import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, CheckCircle, AlertTriangle, Scale, ArrowRight, RefreshCw, Lock, Sparkles, BookOpen, Download } from 'lucide-react';

interface StatutoryDiagnosticsProps {
  onOpenConsultation?: () => void;
}

export default function StatutoryDiagnostics({ onOpenConsultation }: StatutoryDiagnosticsProps) {
  const [activeTab, setActiveTab] = useState<'dpdp' | 'trademark'>('dpdp');

  // DPDP Calculator State
  const [dpdpScale, setDpdpScale] = useState<'startup' | 'enterprise' | 'sdf'>('startup');
  const [dpdpChildData, setDpdpChildData] = useState<boolean>(false);
  const [dpdpConsentTier, setDpdpConsentTier] = useState<'full' | 'partial' | 'none'>('partial');
  const [dpdpCrossBorder, setDpdpCrossBorder] = useState<'none' | 'whitelisted' | 'unmapped'>('unmapped');
  const [dpdpDpoStatus, setDpdpDpoStatus] = useState<boolean>(false);

  // Trademark Diagnostic State
  const [markType, setMarkType] = useState<'fanciful' | 'arbitrary' | 'suggestive' | 'descriptive' | 'generic'>('suggestive');
  const [priorUseYears, setPriorUseYears] = useState<'none' | 'recent' | 'established'>('recent');
  const [priorArtClearance, setPriorArtClearance] = useState<'cleared' | 'conflicts' | 'unsearched'>('unsearched');

  // DPDP Calculation
  const calculateDpdpRisk = () => {
    let penaltyCap = '₹50 Crores';
    let riskLevel: 'Low' | 'Moderate' | 'High' | 'Severe' = 'Moderate';
    let riskColor = 'text-amber-400';
    let bgColor = 'bg-amber-500/10 border-amber-500/30';

    if (dpdpChildData || dpdpScale === 'sdf') {
      penaltyCap = '₹200 - ₹250 Crores';
      riskLevel = 'Severe';
      riskColor = 'text-red-400';
      bgColor = 'bg-red-500/10 border-red-500/30';
    } else if (dpdpConsentTier === 'none' || dpdpCrossBorder === 'unmapped') {
      penaltyCap = '₹100 - ₹150 Crores';
      riskLevel = 'High';
      riskColor = 'text-orange-400';
      bgColor = 'bg-orange-500/10 border-orange-500/30';
    } else if (dpdpConsentTier === 'full' && dpdpDpoStatus) {
      penaltyCap = '< ₹10 Crores';
      riskLevel = 'Low';
      riskColor = 'text-emerald-400';
      bgColor = 'bg-emerald-500/10 border-emerald-500/30';
    }

    return { penaltyCap, riskLevel, riskColor, bgColor };
  };

  // Trademark Calculation
  const calculateTrademarkProspects = () => {
    let registrationProbability = '65% - 75% (Moderate)';
    let riskColor = 'text-amber-400';
    let statGrounds = 'Potential Section 9(1)(b) Objection for laudatory/descriptive nuance.';

    if (markType === 'fanciful' || markType === 'arbitrary') {
      if (priorArtClearance === 'cleared') {
        registrationProbability = '92% - 98% (High Likelihood)';
        riskColor = 'text-emerald-400';
        statGrounds = 'Clean inherently distinctive mark under Section 9; minimal prior-art obstacle under Section 11.';
      } else if (priorArtClearance === 'conflicts') {
        registrationProbability = '45% - 55% (Section 11 Risk)';
        riskColor = 'text-orange-400';
        statGrounds = 'Likely opposition under Section 11(1) due to identical/deceptively similar prior register entries.';
      } else {
        registrationProbability = '80% - 85% (Strong)';
        riskColor = 'text-emerald-400';
        statGrounds = 'Inherently strong mark. Requires preliminary Section 11 trademark registry clearance search.';
      }
    } else if (markType === 'generic') {
      registrationProbability = '< 15% (Extremely Low)';
      riskColor = 'text-red-400';
      statGrounds = 'Barred under Section 9(1)(c) as customary in the current language or established practices of trade.';
    } else if (markType === 'descriptive') {
      if (priorUseYears === 'established') {
        registrationProbability = '70% - 80% (Acquired Distinctiveness)';
        riskColor = 'text-amber-400';
        statGrounds = 'Maintainable under Section 9(1) Proviso via substantial prior use documentary affidavit (Rule 25).';
      } else {
        registrationProbability = '25% - 35% (High Section 9 Risk)';
        riskColor = 'text-red-400';
        statGrounds = 'High probability of Section 9(1)(b) refusal without substantial continuous commercial sales turnover evidence.';
      }
    }

    return { registrationProbability, riskColor, statGrounds };
  };

  const dpdpRisk = calculateDpdpRisk();
  const tmRisk = calculateTrademarkProspects();

  return (
    <div className="rounded-2xl border border-gold/30 bg-[#070B14]/95 p-6 md:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
      {/* Background ambient gold gradient */}
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-gold/15 gap-4">
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-gold mb-1">
            <Scale className="h-4 w-4" />
            <span>Chambers Statutory Self-Assessment Console</span>
          </div>
          <h2 className="text-xl md:text-2xl font-serif font-bold text-white">
            Algorithmic Statutory Compliance & Risk Diagnostics
          </h2>
          <p className="text-xs text-[#A2A6A5] mt-1 max-w-2xl">
            Interactive analytical diagnostic built on the Digital Personal Data Protection Act 2023 and the Trade Marks Act 1999 to evaluate institutional exposure prior to formal chambers briefing.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center p-1 rounded-xl bg-black/60 border border-gold/20 shrink-0">
          <button
            onClick={() => setActiveTab('dpdp')}
            className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'dpdp'
                ? 'bg-gold text-deep-bg font-bold shadow-md shadow-gold/20'
                : 'text-[#BABDC0] hover:text-white'
            }`}
          >
            DPDP 2023 Penalty Audit
          </button>
          <button
            onClick={() => setActiveTab('trademark')}
            className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'trademark'
                ? 'bg-gold text-deep-bg font-bold shadow-md shadow-gold/20'
                : 'text-[#BABDC0] hover:text-white'
            }`}
          >
            Trademark § 9/11 Diagnostic
          </button>
        </div>
      </div>

      {/* Content Panels */}
      <div className="mt-6">
        <AnimatePresence mode="wait">
          {activeTab === 'dpdp' ? (
            <motion.div
              key="dpdp-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8"
            >
              {/* Inputs Column */}
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-gold mb-2">
                    1. Data Fiduciary Classification & Processing Scale
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'startup', label: 'Tech Startup / Seed Stage' },
                      { id: 'enterprise', label: 'Commercial Enterprise / Mid-Market' },
                      { id: 'sdf', label: 'Significant Data Fiduciary (SDF)' }
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setDpdpScale(item.id as any)}
                        className={`p-3 rounded-xl border text-left text-xs transition cursor-pointer flex flex-col justify-between ${
                          dpdpScale === item.id
                            ? 'bg-gold/15 border-gold text-white font-semibold'
                            : 'bg-black/40 border-gold/15 text-[#A2A6A5] hover:border-gold/40'
                        }`}
                      >
                        <span>{item.label}</span>
                        {dpdpScale === item.id && <CheckCircle className="h-3.5 w-3.5 text-gold mt-2 self-end" />}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-gold mb-2">
                    2. Processing of Children / Minor or Biometric Data
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setDpdpChildData(false)}
                      className={`p-3 rounded-xl border text-xs text-left cursor-pointer transition ${
                        !dpdpChildData
                          ? 'bg-gold/15 border-gold text-white font-semibold'
                          : 'bg-black/40 border-gold/15 text-[#A2A6A5]'
                      }`}
                    >
                      <span>No Children or Biometric Data</span>
                      <p className="text-[10px] text-[#A2A6A5] mt-1">Standard adult consumer or B2B dataset</p>
                    </button>
                    <button
                      onClick={() => setDpdpChildData(true)}
                      className={`p-3 rounded-xl border text-xs text-left cursor-pointer transition ${
                        dpdpChildData
                          ? 'bg-red-500/20 border-red-500 text-white font-semibold'
                          : 'bg-black/40 border-gold/15 text-[#A2A6A5]'
                      }`}
                    >
                      <span className="text-red-400">Yes (DPDP Section 9 Heightened Covenants)</span>
                      <p className="text-[10px] text-[#A2A6A5] mt-1">Behavioral tracking / targeted advertising prohibited</p>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-gold mb-2">
                    3. Notice & Consent Architecture (Schedule 1 Standard)
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'full', label: 'Itemized & Multilingual Notice (22 8th-Sched Languages)' },
                      { id: 'partial', label: 'Standard English Terms & Bundled Consent Checkbox' },
                      { id: 'none', label: 'Legacy Pre-DPDP Consent or Dark-Pattern Opt-Out' }
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setDpdpConsentTier(item.id as any)}
                        className={`p-3 rounded-xl border text-left text-xs transition cursor-pointer ${
                          dpdpConsentTier === item.id
                            ? 'bg-gold/15 border-gold text-white font-semibold'
                            : 'bg-black/40 border-gold/15 text-[#A2A6A5] hover:border-gold/40'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-gold mb-2">
                    4. Cross-Border Personal Data Outflow
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'none', label: '100% Domestic Indian Server Hosting' },
                      { id: 'whitelisted', label: 'Contractually Guarded Cloud (AWS/Azure/GCP)' },
                      { id: 'unmapped', label: 'Third-Party SaaS Transfers Without SCCs' }
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setDpdpCrossBorder(item.id as any)}
                        className={`p-3 rounded-xl border text-left text-xs transition cursor-pointer ${
                          dpdpCrossBorder === item.id
                            ? 'bg-gold/15 border-gold text-white font-semibold'
                            : 'bg-black/40 border-gold/15 text-[#A2A6A5] hover:border-gold/40'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Diagnostic Output Column */}
              <div className="lg:col-span-5 flex flex-col justify-between rounded-xl bg-black/60 border border-gold/25 p-6 backdrop-blur-md">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-gold/15">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#A2A6A5]">
                      Statutory Risk Exposure
                    </span>
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider border ${dpdpRisk.bgColor} ${dpdpRisk.riskColor}`}>
                      {dpdpRisk.riskLevel} Exposure
                    </span>
                  </div>

                  <div className="my-5">
                    <div className="text-[11px] font-mono uppercase text-[#A2A6A5]">
                      Maximum Section 33 Statutory Penalty Cap
                    </div>
                    <div className="text-3xl font-serif font-bold text-white mt-1">
                      {dpdpRisk.penaltyCap}
                    </div>
                    <p className="text-[11px] text-[#A2A6A5] mt-1 leading-relaxed">
                      Assessed pursuant to Schedule 1 of the Digital Personal Data Protection Act, 2023 under jurisdiction of the Data Protection Board of India (DPBI).
                    </p>
                  </div>

                  <div className="space-y-2.5 py-4 border-t border-gold/15 text-xs">
                    <div className="font-mono text-[11px] uppercase text-gold font-semibold">
                      Chambers Statutory Audit Directives:
                    </div>
                    <div className="flex items-start space-x-2 text-[#BABDC0]">
                      <span className="text-gold font-bold">•</span>
                      <span>De-bundle consent notices from Master Terms of Service.</span>
                    </div>
                    <div className="flex items-start space-x-2 text-[#BABDC0]">
                      <span className="text-gold font-bold">•</span>
                      <span>Institute verifiable parental consent protocol for users under 18.</span>
                    </div>
                    <div className="flex items-start space-x-2 text-[#BABDC0]">
                      <span className="text-gold font-bold">•</span>
                      <span>Appoint resident Data Protection Officer (DPO) and register with DPBI.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gold/15">
                  <button
                    onClick={onOpenConsultation}
                    className="w-full flex items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-gold-light via-gold to-gold-dark py-3 font-mono text-xs font-bold uppercase tracking-wider text-deep-bg shadow-md shadow-gold/20 hover:brightness-110 transition cursor-pointer"
                  >
                    <span>Request Institutional Data Audit</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <p className="text-[9px] text-center text-[#7F8489] mt-2 font-mono">
                    Strictly confidential conflict check conducted prior to document exchange.
                  </p>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="tm-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8"
            >
              {/* TM Inputs */}
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-gold mb-2">
                    1. Spectrum of Distinctiveness (Abercrombie Standard)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      { id: 'fanciful', label: 'Fanciful / Coined', sub: 'Invented word (e.g. Kodak, Xerox)' },
                      { id: 'arbitrary', label: 'Arbitrary Word', sub: 'Common word unrelated to product (e.g. Apple)' },
                      { id: 'suggestive', label: 'Suggestive Mark', sub: 'Requires imagination (e.g. Netflix, Airbus)' },
                      { id: 'descriptive', label: 'Descriptive Mark', sub: 'Describes quality or function (e.g. FastCourier)' },
                      { id: 'generic', label: 'Generic Term', sub: 'Common industry noun (e.g. Smartphone)' }
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setMarkType(item.id as any)}
                        className={`p-3 rounded-xl border text-left text-xs transition cursor-pointer ${
                          markType === item.id
                            ? 'bg-gold/15 border-gold text-white font-semibold'
                            : 'bg-black/40 border-gold/15 text-[#A2A6A5] hover:border-gold/40'
                        }`}
                      >
                        <div className="font-medium text-white">{item.label}</div>
                        <div className="text-[9px] text-[#A2A6A5] mt-1">{item.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-gold mb-2">
                    2. Commercial Use History in Indian Commerce
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'none', label: 'Proposed to be Used', sub: 'No prior commercial sales turnover' },
                      { id: 'recent', label: '1 to 3 Years Use', sub: 'Invoices & digital presence established' },
                      { id: 'established', label: '5+ Years Continuous Use', sub: 'Substantial market revenue & brand recognition' }
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setPriorUseYears(item.id as any)}
                        className={`p-3 rounded-xl border text-left text-xs transition cursor-pointer ${
                          priorUseYears === item.id
                            ? 'bg-gold/15 border-gold text-white font-semibold'
                            : 'bg-black/40 border-gold/15 text-[#A2A6A5] hover:border-gold/40'
                        }`}
                      >
                        <div className="font-medium text-white">{item.label}</div>
                        <div className="text-[9px] text-[#A2A6A5] mt-1">{item.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-gold mb-2">
                    3. Prior-Art & Phonetic Clearance Status
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'cleared', label: 'Official IP India Clearance Clean', sub: 'No identical/similar marks in Class' },
                      { id: 'conflicts', label: 'Phonetically Similar Marks Registered', sub: 'Risk of Section 11 opposition' },
                      { id: 'unsearched', label: 'Unverified / No Search Conducted', sub: 'Registry status unknown' }
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setPriorArtClearance(item.id as any)}
                        className={`p-3 rounded-xl border text-left text-xs transition cursor-pointer ${
                          priorArtClearance === item.id
                            ? 'bg-gold/15 border-gold text-white font-semibold'
                            : 'bg-black/40 border-gold/15 text-[#A2A6A5] hover:border-gold/40'
                        }`}
                      >
                        <div className="font-medium text-white">{item.label}</div>
                        <div className="text-[9px] text-[#A2A6A5] mt-1">{item.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* TM Output */}
              <div className="lg:col-span-5 flex flex-col justify-between rounded-xl bg-black/60 border border-gold/25 p-6 backdrop-blur-md">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-gold/15">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#A2A6A5]">
                      Prosecution Prognosis
                    </span>
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider border bg-gold/10 border-gold/30 text-gold`}>
                      Trade Marks Act 1999
                    </span>
                  </div>

                  <div className="my-5">
                    <div className="text-[11px] font-mono uppercase text-[#A2A6A5]">
                      Registration Likelihood Probability
                    </div>
                    <div className={`text-2xl font-serif font-bold mt-1 ${tmRisk.riskColor}`}>
                      {tmRisk.registrationProbability}
                    </div>
                    <p className="text-[11px] text-[#BABDC0] mt-2 leading-relaxed bg-black/40 p-3 rounded-lg border border-gold/15">
                      {tmRisk.statGrounds}
                    </p>
                  </div>

                  <div className="space-y-2.5 py-4 border-t border-gold/15 text-xs">
                    <div className="font-mono text-[11px] uppercase text-gold font-semibold">
                      Chambers Prosecution Directives:
                    </div>
                    <div className="flex items-start space-x-2 text-[#BABDC0]">
                      <span className="text-gold font-bold">•</span>
                      <span>Conduct comprehensive multi-class cross-search across Nice Classification.</span>
                    </div>
                    <div className="flex items-start space-x-2 text-[#BABDC0]">
                      <span className="text-gold font-bold">•</span>
                      <span>Draft Rule 25 User Affidavit with certified CA turnover certificates if claiming prior use.</span>
                    </div>
                    <div className="flex items-start space-x-2 text-[#BABDC0]">
                      <span className="text-gold font-bold">•</span>
                      <span>Structure Paris Convention & Madrid Protocol priorities for global filing.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gold/15">
                  <button
                    onClick={onOpenConsultation}
                    className="w-full flex items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-gold-light via-gold to-gold-dark py-3 font-mono text-xs font-bold uppercase tracking-wider text-deep-bg shadow-md shadow-gold/20 hover:brightness-110 transition cursor-pointer"
                  >
                    <span>Schedule Formal IP Search & Filing</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <p className="text-[9px] text-center text-[#7F8489] mt-2 font-mono">
                    Lead Counsel: Advocate Kapil Dev Vishwakarma (Enr: D/1842/2009)
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
