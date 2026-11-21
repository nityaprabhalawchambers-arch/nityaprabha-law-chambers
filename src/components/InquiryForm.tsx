import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, ArrowRight, ArrowLeft, CheckCircle2, AlertCircle, Sparkles, Loader, Check } from 'lucide-react';
import { ConsultationInquiry } from '../types';
import { PRACTICE_AREAS } from '../data';

interface InquiryFormProps {
  embedded?: boolean;
  onClose?: () => void;
  preselectedPracticeId?: string | null;
}

export default function InquiryForm({
  embedded = false,
  onClose,
  preselectedPracticeId = null
}: InquiryFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Partial<ConsultationInquiry>>({
    name: '',
    email: '',
    phone: '',
    company: '',
    practiceArea: preselectedPracticeId || 'intellectual-property',
    urgency: 'routine',
    details: '',
    conflictCheckAgreed: false,
    privacyAgreed: false
  });
  const [adverseParties, setAdverseParties] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateStep1 = () => {
    if (!formData.name?.trim()) return 'Please enter your name.';
    if (!formData.email?.trim()) return 'Please enter your corporate email.';
    if (!formData.details?.trim()) return 'Please provide a general description of the matter.';
    
    // Quick check for standard personal emails to remind them of corporate preference
    const emailStr = formData.email.toLowerCase();
    if (emailStr.endsWith('@gmail.com') || emailStr.endsWith('@yahoo.com') || emailStr.endsWith('@hotmail.com')) {
      // Show warning but don't hard block, or block if strict
    }
    return null;
  };

  const handleNext = () => {
    const err = validateStep1();
    if (err) {
      setError(err);
      return;
    }
    setError(null);
    setStep(2);
  };

  const handleBack = () => {
    setError(null);
    setStep(1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.conflictCheckAgreed || !formData.privacyAgreed) {
      setError('You must accept the conflict clearance search and privacy terms to submit.');
      return;
    }
    if (!adverseParties.trim()) {
      setError('Please list any adverse or involved parties for conflict clearance (or state "None" if purely advisory).');
      return;
    }

    setError(null);
    setIsSubmitting(true);

    // Simulate database write / conflict search processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsDone(true);
    }, 1500);
  };

  return (
    <div className={`w-full ${embedded ? '' : 'rounded-2xl glass-panel p-6 shadow-2xl md:p-8 gold-border-glow'}`}>
      <AnimatePresence mode="wait">
        {!isDone ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Step Indicators */}
            <div className="flex items-center justify-between border-b border-gold/20 pb-4">
              <div>
                <h3 className="font-display text-base font-bold gold-gradient-text tracking-wide">
                  {step === 1 ? 'Step 1: Context Intake' : 'Step 2: Conflict Clearance Search'}
                </h3>
                <p className="text-xs text-[#A2A6A5]">
                  {step === 1 ? 'Low-friction preliminary details' : 'Enter statutory parameters securely'}
                </p>
              </div>
              <div className="flex items-center space-x-2 font-mono text-xs">
                <span className={step === 1 ? 'text-gold font-bold px-2 py-0.5 rounded bg-gold/15 border border-gold/30' : 'text-[#A2A6A5]'}>01</span>
                <span className="text-gold/30">/</span>
                <span className={step === 2 ? 'text-gold font-bold px-2 py-0.5 rounded bg-gold/15 border border-gold/30' : 'text-[#A2A6A5]'}>02</span>
              </div>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center space-x-2 rounded-xl bg-red-950/40 p-3.5 border border-red-900/40 text-xs text-red-300 shadow-inner"
              >
                <AlertCircle className="h-4 w-4 shrink-0 text-red-400" />
                <span>{error}</span>
              </motion.div>
            )}

            {/* STEP 1: General Info */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-wider text-gold mb-2 font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Devendra Singh"
                      className="w-full rounded-xl glass-input px-4 py-3 text-xs placeholder-[#A2A6A5]/60 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-wider text-gold mb-2 font-medium">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. d.singh@company.com"
                      className="w-full rounded-xl glass-input px-4 py-3 text-xs placeholder-[#A2A6A5]/60 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-wider text-[#A2A6A5] mb-2 font-medium">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full rounded-xl glass-input px-4 py-3 text-xs placeholder-[#A2A6A5]/60 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-wider text-[#A2A6A5] mb-2 font-medium">
                      Corporate Entity / Startup Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="e.g. Apex Tech Private Limited"
                      className="w-full rounded-xl glass-input px-4 py-3 text-xs placeholder-[#A2A6A5]/60 transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-gold mb-2 font-medium">
                    Matter Overview / General Description *
                  </label>
                  <textarea
                    name="details"
                    required
                    rows={4}
                    value={formData.details}
                    onChange={handleInputChange}
                    placeholder="Provide a general summary of your query. Please do not share highly classified trade secrets or sensitive document content during this initial screening phase."
                    className="w-full rounded-xl glass-input px-4 py-3 text-xs placeholder-[#A2A6A5]/60 transition-all duration-300 resize-none leading-relaxed"
                  />
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-light via-gold to-gold-dark px-6 py-3 font-mono text-[11px] font-bold uppercase tracking-wider text-deep-bg transition hover:scale-[1.02] hover:shadow-lg hover:shadow-gold/30 shadow-md shadow-gold/15 cursor-pointer"
                  >
                    Continue to Conflict Search
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: Conflict Clearance & Compliance */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-4 font-sans"
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-wider text-gold mb-2 font-medium">
                      Legal Sector / Practice Focus *
                    </label>
                    <select
                      name="practiceArea"
                      value={formData.practiceArea}
                      onChange={handleInputChange}
                      className="w-full rounded-xl glass-input px-4 py-3 text-xs focus:border-gold transition cursor-pointer"
                    >
                      {PRACTICE_AREAS.map((p) => (
                        <option key={p.id} value={p.id} className="bg-[#040914] text-white">
                          {p.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-wider text-gold mb-2 font-medium">
                      Matter Urgency Level *
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {(['routine', 'urgent', 'critical'] as const).map((lvl) => (
                        <button
                          key={lvl}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, urgency: lvl }))}
                          className={`rounded-xl border py-2.5 font-mono text-[10px] uppercase tracking-wider transition-all cursor-pointer ${
                            formData.urgency === lvl
                              ? lvl === 'critical'
                                ? 'border-red-500/80 bg-red-950/40 text-red-400 font-bold shadow-md shadow-red-500/20'
                                : 'border-gold bg-gold/20 text-gold font-bold shadow-md shadow-gold/20'
                              : 'border-gold/20 hover:border-gold/50 bg-black/20 text-[#BABDC0]'
                          }`}
                        >
                          {lvl}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block font-mono text-[10px] uppercase tracking-wider text-gold font-medium">
                      Adverse or Involved Parties *
                    </label>
                    <span className="font-mono text-[9px] uppercase text-gold animate-pulse">Required for Conflict Search</span>
                  </div>
                  <input
                    type="text"
                    required
                    value={adverseParties}
                    onChange={(e) => setAdverseParties(e.target.value)}
                    placeholder="List competitor brand names, former partners, developers, or entities involved. (Type 'None' if purely advisory)."
                    className="w-full rounded-xl glass-input px-4 py-3 text-xs placeholder-[#A2A6A5]/60 transition"
                  />
                  <p className="mt-1 text-[10px] text-[#A2A6A5] leading-relaxed">
                    Under BCI rules, we must clear any potential active representation overlap prior to discussing legal strategy details.
                  </p>
                </div>

                {/* Consent checklist */}
                <div className="space-y-3 rounded-xl bg-black/40 p-4 border border-gold/20 backdrop-blur-md">
                  <div className="flex items-start space-x-3">
                    <button
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, conflictCheckAgreed: !prev.conflictCheckAgreed }))}
                      className={`mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded border transition-all cursor-pointer ${
                        formData.conflictCheckAgreed
                          ? 'border-gold bg-gold text-deep-bg shadow-sm shadow-gold/30'
                          : 'border-gold/30 hover:border-gold bg-black/30'
                      }`}
                    >
                      {formData.conflictCheckAgreed && <Check className="h-3 w-3 stroke-[3]" />}
                    </button>
                    <span className="text-[11px] leading-relaxed text-[#BABDC0] select-none">
                      <strong>Conflict Clearance Consent:</strong> I authorize the compliance team at Nityaprabha Law Chambers to run database checks on my company and adverse parties.
                    </span>
                  </div>

                  <div className="flex items-start space-x-3">
                    <button
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, privacyAgreed: !prev.privacyAgreed }))}
                      className={`mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded border transition-all cursor-pointer ${
                        formData.privacyAgreed
                          ? 'border-gold bg-gold text-deep-bg shadow-sm shadow-gold/30'
                          : 'border-gold/30 hover:border-gold bg-black/30'
                      }`}
                    >
                      {formData.privacyAgreed && <Check className="h-3 w-3 stroke-[3]" />}
                    </button>
                    <span className="text-[11px] leading-relaxed text-[#BABDC0] select-none">
                      <strong>Data Privacy & DPDP Consent:</strong> I agree to the processing of my corporate contact details securely within India in accordance with the DPDP Act 2023.
                    </span>
                  </div>
                </div>

                {/* Navigation and Submission Buttons */}
                <div className="flex items-center justify-between pt-4">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="inline-flex items-center gap-2 rounded-xl border border-gold/25 bg-black/20 backdrop-blur-md px-4 py-2.5 font-mono text-[10px] uppercase tracking-wider text-[#BABDC0] hover:text-white hover:border-gold transition cursor-pointer"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-light via-gold to-gold-dark px-6 py-3 font-mono text-[10px] font-bold uppercase tracking-wider text-deep-bg transition shadow-lg shadow-gold/20 cursor-pointer ${
                      isSubmitting ? 'opacity-80 cursor-wait' : 'hover:scale-[1.02]'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader className="h-3.5 w-3.5 animate-spin" />
                        Running Search...
                      </>
                    ) : (
                      <>
                        Submit for Conflict Search
                        <ArrowRight className="h-3.5 w-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            )}
          </form>
        ) : (
          /* STEP 3: SUCCESS STATE */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-8 text-center space-y-6"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-950/40 text-green-500 border border-green-500/20 shadow-lg shadow-green-500/5">
              <CheckCircle2 className="h-8 w-8" />
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-medium text-white tracking-wide">
                Inquiry Received & Logged Successfully
              </h3>
              <p className="text-xs font-mono uppercase tracking-[0.15em] text-[#D4AF37]">
                Nityaprabha Law Chambers | Compliance Division
              </p>
              <p className="max-w-md mx-auto text-xs leading-relaxed text-[#BABDC0] pt-2">
                Thank you for contacting Nityaprabha Law Chambers. Your professional inquiry has been securely logged in the firm's confidential database.
              </p>
            </div>

            {/* De-identified workflow transparency (from page 30) */}
            <div className="max-w-md mx-auto rounded-xl border border-[#A2A6A5]/10 bg-[#1E293B]/20 p-5 text-left space-y-4 text-xs">
              <h4 className="font-mono text-[10px] uppercase tracking-wider text-[#D4AF37] border-b border-[#A2A6A5]/10 pb-2">
                Next Operational Steps
              </h4>
              <div className="space-y-3 text-[#BABDC0]">
                <div className="flex items-start space-x-2.5">
                  <span className="font-mono text-[#D4AF37]">1.</span>
                  <div>
                    <span className="font-semibold text-white block">Conflict Clearance Review:</span>
                    The firm's compliance team will perform a formal database search to verify that representing your interests does not overlap with active cases.
                  </div>
                </div>
                <div className="flex items-start space-x-2.5">
                  <span className="font-mono text-[#D4AF37]">2.</span>
                  <div>
                    <span className="font-semibold text-white block">Senior Partner Review:</span>
                    An advocate specializing in your specific practice area will review the general details of your inquiry.
                  </div>
                </div>
                <div className="flex items-start space-x-2.5">
                  <span className="font-mono text-[#D4AF37]">3.</span>
                  <div>
                    <span className="font-semibold text-white block">Direct Follow-Up:</span>
                    The firm will contact you within 24 business hours via corporate email or secure telephone to arrange a formal, privileged consultation.
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact Callout */}
            <div className="rounded-xl glass-card p-4 border border-gold/30 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#BABDC0]">
              <span className="text-gold font-bold">For Urgent Assistance:</span>
              <div className="flex items-center space-x-3">
                <a href="tel:+918287066868" className="text-white font-bold hover:text-gold transition">
                  📞 +91 82870 66868
                </a>
                <span>|</span>
                <a href="mailto:nityaprabhalawchambers@gmail.com" className="text-gold hover:underline transition">
                  ✉️ nityaprabhalawchambers@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 pt-4">
              {onClose && (
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-lg border border-[#A2A6A5]/20 px-6 py-2.5 font-mono text-[11px] uppercase tracking-wider text-[#BABDC0] hover:text-white transition"
                >
                  Close Window
                </button>
              )}
              <button
                type="button"
                onClick={() => {
                  setStep(1);
                  setIsDone(false);
                  setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    practiceArea: preselectedPracticeId || 'intellectual-property',
                    urgency: 'routine',
                    details: '',
                    conflictCheckAgreed: false,
                    privacyAgreed: false
                  });
                  setAdverseParties('');
                }}
                className="rounded-lg bg-[#1E293B] border border-[#A2A6A5]/10 px-6 py-2.5 font-mono text-[11px] uppercase tracking-wider text-white hover:bg-[#1E293B]/80 transition"
              >
                Submit Another Case
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
