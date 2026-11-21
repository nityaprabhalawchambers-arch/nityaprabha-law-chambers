import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, User, ArrowLeft, ArrowRight, BookOpen, ShieldCheck, Mail, Check, FileText } from 'lucide-react';
import { BLOG_POSTS, MANAGING_PARTNER, EQUITY_PARTNER } from '../data';

export default function Blog() {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handlePostClick = (id: string) => {
    setSelectedPostId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const activePost = BLOG_POSTS.find((p) => p.id === selectedPostId);

  const getAuthorPortrait = (author: string) => {
    if (author.includes('Kapil Dev')) return MANAGING_PARTNER.portrait;
    if (author.includes('Kunal Murari')) return EQUITY_PARTNER.portrait;
    return null;
  };

  return (
    <div className="bg-[#030712] text-[#BABDC0] pt-28 pb-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {!activePost ? (
            /* BLOG LISTING VIEW */
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-12"
            >
              {/* Header */}
              <div className="text-center space-y-4 max-w-3xl mx-auto font-sans">
                <span className="font-mono text-[10px] uppercase tracking-widest text-gold font-bold">
                  Intellectual Authority &amp; Statutory Memos
                </span>
                <h1 className="font-display text-3xl font-extrabold gold-gradient-text sm:text-4xl uppercase tracking-wide">
                  Regulatory Briefings &amp; Statutory Memos
                </h1>
                <p className="text-xs sm:text-sm leading-relaxed text-[#BABDC0]">
                  Partner-authored treatises and statutory memos analyzing emerging High Court precedents, digital privacy liabilities, and cross-border commercial dynamics in India.
                </p>
              </div>

              {/* Grid Lists */}
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3 font-sans">
                {BLOG_POSTS.map((post) => {
                  const portrait = getAuthorPortrait(post.author);
                  return (
                    <article
                      key={post.id}
                      onClick={() => handlePostClick(post.id)}
                      className="flex flex-col justify-between rounded-2xl glass-card glass-card-hover overflow-hidden shadow-xl cursor-pointer group border border-gold/20"
                    >
                      {/* Post Thumbnail Banner */}
                      {post.image && (
                        <div className="relative h-44 w-full overflow-hidden border-b border-gold/20">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover filter brightness-80 contrast-110 group-hover:scale-105 group-hover:brightness-95 transition-all duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
                          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[9px] font-mono uppercase tracking-widest bg-black/75 border border-gold/30 text-gold font-bold backdrop-blur-sm">
                            {post.category}
                          </span>
                        </div>
                      )}

                      <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-[#A2A6A5] border-b border-gold/15 pb-2">
                            <span className="text-gold font-bold">{post.category}</span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3 text-gold" />
                              {post.readTime}
                            </span>
                          </div>
                          <h3 className="font-display text-sm font-bold text-white group-hover:text-gold transition duration-200 uppercase tracking-wider leading-tight">
                            {post.title}
                          </h3>
                          <p className="text-xs leading-relaxed text-[#BABDC0] line-clamp-3 font-sans">
                            {post.summary}
                          </p>
                        </div>

                        <div className="mt-4 flex items-center justify-between border-t border-gold/20 pt-4">
                          <div className="flex items-center space-x-2.5 text-xs text-[#BABDC0] font-sans">
                            {portrait ? (
                              <img
                                src={portrait}
                                alt={post.author}
                                className="h-7 w-7 rounded-full object-cover object-top border border-gold/40"
                              />
                            ) : (
                              <User className="h-3.5 w-3.5 text-gold" />
                            )}
                            <span className="font-bold text-white text-[11px]">{post.author}</span>
                          </div>
                          <span className="font-mono text-[9px] text-[#A2A6A5]">
                            {post.date}
                          </span>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              {/* Newsletter section */}
              <div className="max-w-4xl mx-auto rounded-3xl glass-panel p-8 md:p-12 relative overflow-hidden mt-16 text-center space-y-6 gold-border-glow shadow-2xl font-sans gold-flare-top">
                <span className="font-mono text-[10px] uppercase tracking-widest text-gold font-bold">
                  Quarterly Regulatory Briefings
                </span>
                <h3 className="font-display text-2xl gold-gradient-text font-extrabold uppercase tracking-wide">
                  Subscribe to India Law Updates
                </h3>
                <p className="text-xs text-[#BABDC0] max-w-lg mx-auto font-sans">
                  Receive authoritative briefs directly in your inbox. No promotional marketing, strictly de-identified case reviews and legislative developments.
                </p>

                {subscribed ? (
                  <div className="rounded-lg bg-deep-bg p-4 border border-gold/30 text-xs text-gold font-bold max-w-sm mx-auto">
                    Briefings subscription approved successfully.
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                    <input
                      type="email"
                      required
                      placeholder="Corporate Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="rounded-lg border border-gold/25 bg-deep-bg px-4 py-2.5 text-xs text-white placeholder-[#A2A6A5] focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition flex-1 font-sans"
                    />
                    <button
                      type="submit"
                      className="rounded-lg bg-gradient-to-r from-gold-light via-gold to-gold-dark px-6 py-2.5 font-mono text-[10px] font-bold uppercase tracking-widest text-deep-bg transition hover:scale-[1.02] hover:shadow-lg hover:shadow-gold/25 shadow-md shadow-gold/10 shrink-0 cursor-pointer"
                    >
                      Subscribe
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          ) : (
            /* BLOG ARTICLE DETAIL VIEW */
            <motion.article
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="max-w-3xl mx-auto space-y-8 font-sans"
            >
              <button
                onClick={() => setSelectedPostId(null)}
                className="inline-flex items-center gap-2 rounded-lg border border-gold/25 px-4 py-2 font-mono text-[9px] uppercase tracking-widest hover:text-white hover:border-gold transition-all duration-300 text-[#BABDC0] cursor-pointer"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Back to Briefings
              </button>

              {/* Header information */}
              <div className="space-y-4 border-b border-gold/15 pb-6">
                <span className="font-mono text-[10px] text-gold font-bold uppercase tracking-widest block">
                  {activePost.category} Analysis
                </span>
                <h1 className="font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl uppercase tracking-wide">
                  {activePost.title}
                </h1>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 text-xs font-mono text-[#A2A6A5]">
                  <div className="flex items-center space-x-3 font-sans">
                    {getAuthorPortrait(activePost.author) ? (
                      <img
                        src={getAuthorPortrait(activePost.author)!}
                        alt={activePost.author}
                        className="h-11 w-11 shrink-0 rounded-full object-cover object-top border border-gold/40 shadow-md"
                      />
                    ) : (
                      <div className="h-10 w-10 shrink-0 rounded-full bg-deep-bg border border-gold/30 flex items-center justify-center font-display font-bold text-gold text-sm">
                        NLC
                      </div>
                    )}
                    <div>
                      <span className="block text-white font-bold">{activePost.author}</span>
                      <span className="block text-[9px] uppercase tracking-widest text-gold font-semibold">{activePost.authorTitle}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6 text-[9px] uppercase tracking-widest font-bold">
                    <span>Published: {activePost.date}</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-gold" />
                      {activePost.readTime}
                    </span>
                  </div>
                </div>
              </div>

              {/* Featured Article Header Image */}
              {activePost.image && (
                <div className="relative rounded-3xl overflow-hidden border border-gold/30 shadow-2xl h-64 sm:h-80 w-full group">
                  <img
                    src={activePost.image}
                    alt={activePost.title}
                    className="w-full h-full object-cover filter brightness-85 contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
                </div>
              )}

              {/* Main Article Content */}
              <div className="font-sans text-sm sm:text-base leading-relaxed text-[#BABDC0] whitespace-pre-line text-justify space-y-6">
                {activePost.content}
              </div>

              {/* Author footer accreditation */}
              <div className="rounded-xl border border-gold/15 bg-deep-card p-6 flex gap-4 items-start mt-12 gold-border-glow shadow-md">
                <div className="h-12 w-12 shrink-0 rounded-full bg-deep-bg border border-gold/30 flex items-center justify-center font-display font-bold text-gold text-base">
                  NLC
                </div>
                <div className="space-y-1.5 font-sans">
                  <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white">Dual-Verification &amp; Ethical Editorial Workflow</h4>
                  <p className="text-xs leading-relaxed text-[#BABDC0]">
                    This legal briefing has been compiled and reviewed under the supervision of Advocate Kapil Dev Vishwakarma, Managing Partner (Enrollment No. D/1842/2009) and Advocate Kunal Murari, Equity Partner of Nityaprabha Law Chambers. Cites specific provisions of the Indian Acts for educational use. Visiting this briefing does not form a formal counsel retainership.
                  </p>
                </div>
              </div>
            </motion.article>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
