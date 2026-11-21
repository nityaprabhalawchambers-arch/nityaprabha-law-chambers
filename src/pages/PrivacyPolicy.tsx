import React from 'react';
import { ShieldCheck, Scale, FileText } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#030712] text-[#BABDC0] pt-28 pb-20 overflow-hidden">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="border-b border-gold/20 pb-6 space-y-3 font-sans">
          <span className="font-mono text-[10px] text-gold uppercase tracking-widest block font-bold">DPDP Act 2023 Compliant</span>
          <h1 className="font-display text-3xl font-extrabold gold-gradient-text sm:text-4xl uppercase tracking-wide">Data Protection &amp; Privacy Policy</h1>
          <p className="text-[10px] font-mono text-[#A2A6A5] uppercase tracking-widest">Last Updated: July 20, 2026</p>
        </div>

        <div className="mt-8 font-sans text-xs sm:text-sm leading-relaxed text-[#BABDC0] text-justify space-y-6">
          <div className="flex items-start space-x-3 rounded-2xl glass-card p-5 border border-gold/20 gold-border-glow shadow-xl">
            <ShieldCheck className="h-5 w-5 text-green-400 shrink-0 mt-0.5" />
            <p className="font-sans">
              <strong>Data Controller Statement:</strong> Nityaprabha Law Chambers is the Sole Data Fiduciary of all personal data collected through www.nityaprabhalaw.com. All servers, data storage nodes, and cloud processing clusters are hosted locally within the territory of India in accordance with national data localization rules.
            </p>
          </div>

          <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider border-l-2 border-gold pl-3 pt-2">
            1. Scope of Personal Data Collected
          </h3>
          <p className="font-sans">
            When you interact with our Access Verification Panel, request downloadable checklists, or submit details to our conflict-clearance screening forms, we collect basic identifiers:
          </p>
          <ul className="list-disc pl-5 space-y-2 font-sans">
            <li><strong>Identifiers:</strong> Full Name, Corporate Email Address, and Secure Telephone Numbers.</li>
            <li><strong>Operational Parameters:</strong> Legal sector, names of involved or adverse parties (mandatory for BCI conflict searches), and urgency indicators.</li>
            <li><strong>Technical Credentials:</strong> Device IPs, consent timestamps, and cookie consent records.</li>
          </ul>

          <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider border-l-2 border-gold pl-3 pt-2">
            2. Ground of Processing (Consent-First Framework)
          </h3>
          <p className="font-sans">
            Under Section 6 of the Digital Personal Data Protection (DPDP) Act 2023, Nityaprabha Law Chambers operates under an explicit, un-ticked, and revocable consent mechanism. We process personal details solely for the purposes of performing mandatory conflict clearance audits and contacting you via secure phone/email to set up professional callbacks.
          </p>
          <p className="font-sans">
            We will never sell, lease, or transmit your identifiers to commercial aggregators or third-party marketing companies. All data transactions are encrypted using TLS 1.3.
          </p>

          <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider border-l-2 border-gold pl-3 pt-2">
            3. Data Erasure &amp; User Rights
          </h3>
          <p className="font-sans">
            You hold statutory rights to withdraw consent, request complete erasure of your logged inquiry, or correct outstanding contact records.
          </p>
          <p className="font-sans">
            To file an erasure request, please submit a formal email to our compliance desk: <a href="mailto:nityaprabhalawchambers@gmail.com" className="text-gold font-bold hover:underline">nityaprabhalawchambers@gmail.com</a>. Our data protection officers will execute deletion routines within 7 business days, save for records required to be preserved under statutory bar council regulations.
          </p>
        </div>
      </div>
    </div>
  );
}
