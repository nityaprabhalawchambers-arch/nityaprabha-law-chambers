import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check } from 'lucide-react';
import Logo from './Logo';

interface BCIModalProps {
  onAccept: () => void;
}

export default function BCIModal({ onAccept }: BCIModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [checkedAll, setCheckedAll] = useState(false);

  useEffect(() => {
    const isAccepted = localStorage.getItem('bci_rule36_accepted');
    if (!isAccepted) {
      setIsOpen(true);
    } else {
      onAccept();
    }
  }, [onAccept]);

  const handleAccept = () => {
    localStorage.setItem('bci_rule36_accepted', 'true');
    setIsOpen(false);
    onAccept();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#030712]/90 px-4 py-8 backdrop-blur-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="relative w-full max-w-3xl rounded-2xl glass-panel p-8 shadow-2xl md:p-12 gold-border-glow gold-flare-top overflow-hidden"
        >
          {/* Ambient Lighting Circle */}
          <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

          {/* Decorative Top Accent */}
          <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-transparent via-gold to-transparent" />

          {/* Logo / Crest */}
          <div className="relative z-10 mb-6 flex flex-col items-center text-center">
            <Logo variant="stacked" size="lg" showTagline={true} />
          </div>

          <div className="relative z-10 border-t border-gold/20 pt-6">
            <h2 className="text-center font-serif text-lg italic text-gold">
              Access Verification Panel
            </h2>
            <p className="mt-2 text-center text-sm text-[#BABDC0] font-sans">
              Please review and acknowledge the regulatory notice below to enter the informational portal of Nityaprabha Law Chambers.
            </p>
          </div>

          {/* Legal Scrollbox */}
          <div className="relative z-10 mt-6 h-60 overflow-y-auto rounded-xl border border-gold/20 bg-black/40 backdrop-blur-md p-5 text-justify text-xs leading-relaxed text-[#BABDC0] md:text-sm font-serif shadow-inner">
            <p className="font-medium text-white mb-3">
              In accordance with Rule 36 of the Bar Council of India Rules, 1975, this website (www.nityaprabhalaw.com) is constructed solely for the dissemination of basic informational resources regarding Nityaprabha Law Chambers.
            </p>
            <p className="mb-3">
              The user, by choosing to enter this platform, explicitly acknowledges and confirms the following parameters:
            </p>
            <ul className="space-y-3 pl-4 list-disc">
              <li>
                The user is seeking general information relating to Nityaprabha Law Chambers of their own accord and initiative, and no form of active solicitation, advertisement, or inducement has been initiated by the firm or its representatives.
              </li>
              <li>
                The information provided herein is offered purely for educational purposes and should not be interpreted as formal legal counsel or the establishment of an attorney-client relationship.
              </li>
              <li>
                The transmission of information or secure messages through this portal does not create an advocate-client relationship, and the firm shall not be held liable for any reliance placed on the general content of this platform.
              </li>
              <li>
                All content, structural layouts, and publications hosted on this website constitute the exclusive intellectual property of Nityaprabha Law Chambers.
              </li>
            </ul>
          </div>

          {/* Compliance Check */}
          <div className="relative z-10 mt-6 flex items-start space-x-3">
            <button
              onClick={() => setCheckedAll(!checkedAll)}
              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-all cursor-pointer ${
                checkedAll
                  ? 'border-gold bg-gold text-deep-bg shadow-md shadow-gold/30'
                  : 'border-gold/40 hover:border-gold bg-black/30'
              }`}
            >
              {checkedAll && <Check className="h-3.5 w-3.5 stroke-[3]" />}
            </button>
            <span className="text-xs text-[#BABDC0] select-none font-sans leading-relaxed">
              I have read the BCI Rule 36 disclaimer and confirm that I am visiting this platform solely for informational purposes on my own initiative.
            </span>
          </div>

          {/* Action Buttons */}
          <div className="relative z-10 mt-8 flex flex-col justify-stretch gap-4 sm:flex-row sm:justify-end">
            <button
              onClick={() => window.close()}
              className="rounded-xl border border-red-900/50 bg-red-950/20 px-6 py-3 font-mono text-[10px] uppercase tracking-wider text-red-400 transition hover:bg-red-950/40 cursor-pointer"
            >
              Decline & Leave
            </button>
            <button
              disabled={!checkedAll}
              onClick={handleAccept}
              className={`rounded-xl px-8 py-3 font-mono text-[10px] uppercase tracking-widest text-deep-bg transition-all duration-300 cursor-pointer ${
                checkedAll
                  ? 'bg-gradient-to-r from-gold-light via-gold to-gold-dark hover:brightness-110 shadow-lg shadow-gold/30 font-bold hover:scale-[1.02]'
                  : 'bg-[#1E293B]/60 text-[#BABDC0]/50 border border-white/5 cursor-not-allowed'
              }`}
            >
              Confirm, Accept & Enter
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
