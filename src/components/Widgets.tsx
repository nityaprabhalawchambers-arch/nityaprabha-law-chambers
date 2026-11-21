import React, { useState } from 'react';
import { MessageSquare, Phone, X, Shield, ArrowRight, Check, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface WidgetsProps {
  onOpenConsultation: () => void;
}

export default function Widgets({ onOpenConsultation }: WidgetsProps) {
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  const [waAgreed, setWaAgreed] = useState(false);

  const handleWhatsAppRedirect = () => {
    if (waAgreed) {
      setShowWhatsAppModal(false);
      // Simulate/Open WhatsApp redirect
      window.open('https://wa.me/918287066868?text=I%20have%20reviewed%20the%20BCI%20disclaimer%20and%20would%20like%20to%20request%20a%20confidential%20conflict%20check%20for%20a%20legal%20matter.', '_blank');
    }
  };

  return (
    <>
      {/* Sticky Mobile/Tablet bottom navigation bar */}
      <div className="fixed bottom-0 left-0 right-0 z-30 glass-nav py-3 px-4 shadow-2xl md:hidden">
        <div className="flex items-center justify-between gap-3">
          <a
            href="tel:+918287066868"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-light via-gold to-gold-dark py-2.5 font-mono text-[11px] font-bold uppercase tracking-wider text-deep-bg transition hover:brightness-110 shadow-md shadow-gold/20"
          >
            <Phone className="h-3.5 w-3.5 text-deep-bg shrink-0" />
            <span>Call +91 82870 66868</span>
          </a>
          <button
            onClick={onOpenConsultation}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-light via-gold to-gold-dark py-2.5 font-mono text-[11px] font-bold uppercase tracking-wider text-deep-bg transition hover:brightness-110 shadow-md shadow-gold/20"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            Book Intake
          </button>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-20 right-6 z-30 md:bottom-6 md:right-6">
        <motion.button
          onClick={() => {
            setWaAgreed(false);
            setShowWhatsAppModal(true);
          }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="flex h-13 w-13 items-center justify-center rounded-full bg-gradient-to-tr from-[#1EBE5D] to-[#25D366] text-white shadow-xl shadow-[#25D366]/25 border border-white/20 transition-all hover:brightness-110 cursor-pointer"
          title="Secure WhatsApp Channel"
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.022-.08-.124-.184-.245-.244-.12-.06-1.136-.56-1.316-.62-.18-.06-.312-.1-.444.1-.132.2-.512.648-.628.78-.116.132-.232.148-.352.088-.12-.06-1.52-.56-2.016-1-1.04-1.12-1.352-1.568-1.552-1.92-.2-.352-.02-.544.1-.644.096-.08.184-.2.276-.3.092-.1.124-.168.188-.28.064-.112.032-.216-.016-.312-.048-.096-.444-1.072-.608-1.56-.16-.484-.336-.416-.46-.416-.124 0-.268-.008-.396-.008s-.336.048-.512.224c-.176.176-.672.656-.672 1.6s.48 1.856.548 1.952c.068.096.944 1.44 2.288 2.02.316.14.564.224.756.284.316.1.604.088.832.052.256-.036.78-.32 1.136-.628.356-.308.356-.572.356-.636M12 0c-6.627 0-12 5.373-12 12 0 2.115.548 4.103 1.512 5.836l-1.602 5.845 5.97-1.564c1.674.912 3.585 1.436 5.62 1.436 6.627 0 12-5.373 12-12s-5.373-12-12-12" />
          </svg>
        </motion.button>
      </div>

      {/* WhatsApp Regulatory Gatekeeper Modal */}
      <AnimatePresence>
        {showWhatsAppModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#030712]/90 p-4 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="w-full max-w-md rounded-2xl glass-panel p-6 shadow-2xl relative gold-border-glow gold-flare-top overflow-hidden"
            >
              <button
                onClick={() => setShowWhatsAppModal(false)}
                className="absolute top-4 right-4 text-[#A2A6A5] hover:text-white transition cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-950/40 text-gold mb-4 border border-gold/30 shadow-md shadow-gold/10">
                <AlertTriangle className="h-5 w-5" />
              </div>

              <h3 className="font-serif text-lg font-medium gold-gradient-text mb-2">
                Confidential Communication Warning
              </h3>
              <p className="text-xs leading-relaxed text-[#BABDC0] mb-4 text-justify">
                Please acknowledge that initiating a conversation on WhatsApp with Nityaprabha Law Chambers is solely for preliminary convenience.
              </p>

              <div className="rounded-xl bg-black/40 p-4 border border-gold/15 space-y-2 text-[10px] text-[#BABDC0] mb-5 backdrop-blur-md">
                <p>
                  • <strong>No Attorney-Client Privilege:</strong> Instant messaging does not establish a formal attorney-client relationship.
                </p>
                <p>
                  • <strong>Data Security Notice:</strong> Please do NOT share sensitive case documents or proof material via this channel until a formal conflict check is cleared.
                </p>
                <p>
                  • <strong>Compliance Checked:</strong> This gateway meets the guidelines of the Bar Council of India Rule 36 and DPDP Act 2023.
                </p>
              </div>

              {/* Checkbox agreement */}
              <div className="flex items-start space-x-2.5 mb-6">
                <button
                  onClick={() => setWaAgreed(!waAgreed)}
                  className={`mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded border transition-all cursor-pointer ${
                    waAgreed ? 'border-[#25D366] bg-[#25D366] text-white shadow-sm shadow-[#25D366]/30' : 'border-gold/30 bg-black/30'
                  }`}
                >
                  {waAgreed && <Check className="h-3 w-3 stroke-[3]" />}
                </button>
                <span className="text-[10px] leading-tight text-[#BABDC0] select-none">
                  I agree that messaging the firm does not form an attorney-client relationship, and I agree to the privacy disclaimers.
                </span>
              </div>

              {/* Redirect Action Button */}
              <button
                disabled={!waAgreed}
                onClick={handleWhatsAppRedirect}
                className={`flex w-full items-center justify-center gap-2 rounded-xl py-3 font-mono text-xs font-bold uppercase tracking-wider text-white transition-all cursor-pointer ${
                  waAgreed
                    ? 'bg-gradient-to-r from-[#1EBE5D] to-[#25D366] hover:brightness-110 shadow-lg shadow-[#25D366]/20'
                    : 'bg-[#1E293B]/50 text-[#BABDC0]/50 border border-white/5 cursor-not-allowed'
                }`}
              >
                Proceed to Secure WhatsApp Channel
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
