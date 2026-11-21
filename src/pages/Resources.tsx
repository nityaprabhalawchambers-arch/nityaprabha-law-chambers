import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Download, Lock, CheckCircle2, X, Shield, ArrowRight, Loader } from 'lucide-react';
import { RESOURCES } from '../data';
import { ResourceItem } from '../types';
import StatutoryDiagnostics from '../components/StatutoryDiagnostics';

export default function Resources() {
  const [selectedResource, setSelectedPost] = useState<ResourceItem | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [unlockedIds, setUnlockedIds] = useState<string[]>([]);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [localDownloadNotice, setLocalDownloadNotice] = useState<string | null>(null);

  const handleDownloadClick = (res: ResourceItem) => {
    if (!res.gated || unlockedIds.includes(res.id)) {
      triggerDownload(res);
    } else {
      setSelectedPost(res);
      setDownloadSuccess(false);
    }
  };

  const triggerDownload = (res: ResourceItem) => {
    setIsDownloading(true);
    setLocalDownloadNotice(null);
    setTimeout(() => {
      setIsDownloading(false);
      setDownloadSuccess(true);
      if (res.gated && !unlockedIds.includes(res.id)) {
        setUnlockedIds([...unlockedIds, res.id]);
      }
      setLocalDownloadNotice(`File "${res.title}" downloaded successfully.`);
    }, 1200);
  };

  const handleGateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && selectedResource) {
      triggerDownload(selectedResource);
    }
  };

  return (
    <div className="bg-[#030712] text-[#BABDC0] pt-28 pb-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Interactive Diagnostics Console */}
        <section>
          <StatutoryDiagnostics />
        </section>

        {/* Educational Guides Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto font-sans pt-8 border-t border-gold/15">
          <span className="font-mono text-[10px] uppercase tracking-widest text-gold font-bold">
            Compliance Audits &amp; Playbooks
          </span>
          <h1 className="font-display text-3xl font-extrabold gold-gradient-text sm:text-4xl uppercase tracking-wide">
            Educational Downloadable Resources
          </h1>
          <p className="text-xs sm:text-sm leading-relaxed text-[#BABDC0] font-sans">
            Access our partner-vetted statutory checklists and organizational compliance guides, designed to help startups, brands, and property buyers de-risk high-stakes transactions.
          </p>
          
          {localDownloadNotice && (
            <div className="mt-4 inline-flex items-center gap-2 rounded-xl bg-green-950/40 border border-green-500/30 px-4 py-2 text-xs text-green-400 font-sans shadow-md backdrop-blur-md">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-green-400" />
              <span>{localDownloadNotice}</span>
            </div>
          )}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 font-sans">
          {RESOURCES.map((res, idx) => {
            const isUnlocked = unlockedIds.includes(res.id);
            const resourceImages: Record<string, string> = {
              'ip-audit-playbook': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
              'property-diligence-checklist': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
              'startup-founders-guide': 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
              'cyber-incident-checklist': 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
            };
            const bannerImg = resourceImages[res.id] || 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800';

            return (
              <div
                key={res.id}
                className="flex flex-col justify-between rounded-2xl glass-card glass-card-hover overflow-hidden shadow-xl border border-gold/20 group"
              >
                {/* Resource Top Image Banner */}
                <div className="relative h-44 w-full overflow-hidden border-b border-gold/20">
                  <img
                    src={bannerImg}
                    alt={res.title}
                    className="w-full h-full object-cover filter brightness-85 contrast-110 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
                  <div className="absolute top-3 left-4 right-4 flex items-center justify-between z-10">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-gold bg-black/75 px-3 py-1 rounded-lg border border-gold/30 shadow-sm font-bold backdrop-blur-md">
                      {res.type}
                    </span>
                    <span className="font-mono text-[10px] text-white/90 bg-black/75 px-2 py-0.5 rounded border border-gold/20 backdrop-blur-sm">
                      {res.fileSize}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                  <div className="space-y-3">
                    <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider group-hover:text-gold transition-colors">
                      {res.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-[#BABDC0] font-sans">
                      {res.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-gold/20 pt-4">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-gold font-bold flex items-center gap-1.5">
                      {res.gated && !isUnlocked ? (
                        <>
                          <Lock className="h-3 w-3 text-gold" />
                          Corporate Email Required
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="h-3 w-3 text-green-400" />
                          Open Download
                        </>
                      )}
                    </span>
                    <button
                      onClick={() => handleDownloadClick(res)}
                      className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-gold-light via-gold to-gold-dark px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-widest text-deep-bg transition hover:scale-[1.02] hover:shadow-lg hover:shadow-gold/30 shadow-md shadow-gold/15 cursor-pointer"
                    >
                      <Download className="h-3.5 w-3.5" />
                      Download File
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for email-gated files */}
        <AnimatePresence>
          {selectedResource && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#030712]/90 p-4 backdrop-blur-xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                className="w-full max-w-md rounded-2xl glass-panel p-6 shadow-2xl relative gold-border-glow gold-flare-top overflow-hidden"
              >
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-4 right-4 text-[#A2A6A5] hover:text-white transition cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>

                {!downloadSuccess ? (
                  <form onSubmit={handleGateSubmit} className="space-y-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-black/40 text-gold border border-gold/30 shadow-md">
                      <Lock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-white uppercase tracking-wider">
                        Access Chambers Document
                      </h3>
                      <p className="text-xs text-[#BABDC0] mt-1 font-sans">
                        Please provide your institutional email address to unlock <strong>{selectedResource.title}</strong>.
                      </p>
                    </div>

                    <div className="space-y-3 pt-2 font-sans">
                      <div>
                        <label className="block text-[10px] font-mono uppercase tracking-wider text-gold mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Advocate / General Counsel Name"
                          className="w-full rounded-xl border border-gold/25 bg-black/40 px-3.5 py-2.5 text-xs text-white placeholder-[#7F8489] focus:border-gold focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono uppercase tracking-wider text-gold mb-1">
                          Corporate / Work Email
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="legal@enterprise.com"
                          className="w-full rounded-xl border border-gold/25 bg-black/40 px-3.5 py-2.5 text-xs text-white placeholder-[#7F8489] focus:border-gold focus:outline-none"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isDownloading}
                      className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-light via-gold to-gold-dark py-3 font-mono text-xs font-bold uppercase tracking-wider text-deep-bg transition hover:brightness-110 shadow-lg shadow-gold/20 cursor-pointer disabled:opacity-50 mt-4"
                    >
                      {isDownloading ? (
                        <>
                          <Loader className="h-4 w-4 animate-spin" />
                          <span>Authorizing Credentials...</span>
                        </>
                      ) : (
                        <>
                          <span>Download Statutory Guide</span>
                          <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-6 space-y-4">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-950/40 text-green-400 border border-green-500/25">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">Verify Approved &amp; Dispatched</h4>
                      <p className="text-xs text-[#BABDC0]">
                        Your file <strong>{selectedResource.title}</strong> ({selectedResource.fileSize}) is fully unlocked.
                      </p>
                    </div>

                    <div className="pt-4 flex gap-3">
                      <button
                        onClick={() => setSelectedPost(null)}
                        className="flex-1 rounded-lg border border-gold/25 py-2.5 font-mono text-[9px] uppercase tracking-widest hover:text-white hover:border-gold transition-all cursor-pointer text-[#BABDC0]"
                      >
                        Close Portal
                      </button>
                      <button
                        onClick={() => {
                          setSelectedPost(null);
                          setLocalDownloadNotice(`File "${selectedResource.title}" initiated download.`);
                        }}
                        className="flex-1 rounded-lg bg-gradient-to-r from-gold-light via-gold to-gold-dark py-2.5 font-mono text-[9px] font-bold uppercase tracking-widest text-deep-bg transition hover:scale-[1.01] hover:shadow-lg hover:shadow-gold/25 cursor-pointer shadow-md text-center"
                      >
                        Launch PDF File
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
