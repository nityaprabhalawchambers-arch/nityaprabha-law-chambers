import React from 'react';
import { AlertTriangle, Scale } from 'lucide-react';

export default function Terms() {
  return (
    <div className="bg-[#030712] text-[#BABDC0] pt-28 pb-20 overflow-hidden">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="border-b border-gold/20 pb-6 space-y-3 font-sans">
          <span className="font-mono text-[10px] text-gold uppercase tracking-widest block font-bold">Bar Council Compliant</span>
          <h1 className="font-display text-3xl font-extrabold gold-gradient-text sm:text-4xl uppercase tracking-wide">Disclaimers &amp; Terms of Use</h1>
          <p className="text-[10px] font-mono text-[#A2A6A5] uppercase tracking-widest">Effective Date: July 20, 2026</p>
        </div>

        <div className="mt-8 font-sans text-xs sm:text-sm leading-relaxed text-[#BABDC0] text-justify space-y-6">
          <div className="flex items-start space-x-3 rounded-2xl border border-red-500/30 bg-red-950/25 p-5 text-red-400 font-sans shadow-xl backdrop-blur-md">
            <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5 text-red-400" />
            <p className="text-xs">
              <strong>Mandatory BCI Notice:</strong> Nityaprabha Law Chambers is prohibited from advertising or soliciting under Rule 36 of the Bar Council of India Rules. By continuing to navigate this site, you explicitly confirm that you have accepted our Access Verification disclaimer on your own initiative.
            </p>
          </div>

          <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider border-l-2 border-gold pl-3 pt-2">
            1. No Advocate-Client Relationship
          </h3>
          <p className="font-sans">
            The content, briefings, checklists, and guides hosted on www.nityaprabhalaw.com are designed purely for general educational and informational purposes. They do not constitute formal legal counsel. 
          </p>
          <p className="font-sans">
            Submitting a screening query, requesting a downloadable playbook, or messaging our preliminary WhatsApp channel does NOT construct or imply a formal attorney-client relationship. A formal retainer or advocate relationship is established exclusively upon completion of a conflict clearance search, partner screening, and signing a written Retainer Agreement.
          </p>

          <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider border-l-2 border-gold pl-3 pt-2">
            2. Intellectual Property Rights
          </h3>
          <p className="font-sans">
            The design, layout, legal checklists, stat roadmaps, custom illustrations, logos, and written legal commentary constitute the exclusive intellectual property of Nityaprabha Law Chambers. Copying, distributing, or republishing our original guides without prior written permission is strictly prohibited and protected under the Copyright Act, 1957.
          </p>

          <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider border-l-2 border-gold pl-3 pt-2">
            3. Limitation of Liability
          </h3>
          <p className="font-sans">
            While we take rigorous measures to verify that all legislative acts, rules, and precedents cited are accurate and fresh, the regulatory space in India changes rapidly. Nityaprabha Law Chambers holds no liability for any reliance placed on the general summaries of this website. For specific, privileged legal advice, please book a secure screening call to engage counsel.
          </p>
        </div>
      </div>
    </div>
  );
}
