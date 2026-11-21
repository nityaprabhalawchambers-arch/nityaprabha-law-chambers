import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Phone, Mail, ArrowRight, ShieldCheck, Briefcase, Users, Scale as DisputeIcon, Compass, ChevronRight, Globe, Gavel } from 'lucide-react';
import { ActivePage } from '../types';
import { PRACTICE_AREAS } from '../data';
import Logo from './Logo';

interface NavbarProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  setActivePracticeId: (id: string | null) => void;
  onOpenConsultation: () => void;
}

export default function Navbar({
  activePage,
  setActivePage,
  setActivePracticeId,
  onOpenConsultation
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setIsDropdownOpen(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleNavClick = (page: ActivePage) => {
    setActivePage(page);
    setActivePracticeId(null);
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = page;
  };

  const handlePracticeClick = (id: string) => {
    setActivePage('practices');
    setActivePracticeId(id);
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = `practices/${id}`;
  };

  const groups = [
    { id: 'founders-brands', label: 'Founders & Brands', icon: Briefcase, desc: 'IP, Trademarks, Patents & Anti-Counterfeiting' },
    { id: 'disputes', label: 'Disputes & Litigation', icon: DisputeIcon, desc: 'Commercial Disputes & Appellate Advocacy' },
    { id: 'individuals-families', label: 'Individuals & Families', icon: Users, desc: 'Property, Family & Negotiable Instruments' },
    { id: 'cross-cutting', label: 'Cross-cutting Advisory', icon: Compass, desc: 'Corporate Advisory, Contracts & Risk Audit' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Glass Contact Bar */}
      <div className="bg-[#030712]/95 border-b border-gold/15 backdrop-blur-md py-1.5 px-4 sm:px-6 lg:px-8 font-mono text-[10px] text-[#BABDC0] transition-all">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-4">
            <a
              href="tel:+918287066868"
              className="inline-flex items-center gap-1.5 text-gold hover:text-white transition duration-200"
            >
              <Phone className="h-3 w-3 text-gold shrink-0" />
              <span className="font-bold tracking-wide">+91 82870 66868</span>
            </a>
            <span className="text-gold/40">|</span>
            <a
              href="mailto:nityaprabhalawchambers@gmail.com"
              className="inline-flex items-center gap-1.5 text-[#BABDC0] hover:text-gold transition duration-200 hidden sm:inline-flex"
            >
              <Mail className="h-3 w-3 text-gold shrink-0" />
              <span>nityaprabhalawchambers@gmail.com</span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-3 text-[9px] uppercase tracking-widest text-[#A2A6A5]">
            <span className="inline-flex items-center gap-1 text-gold">
              <ShieldCheck className="h-3 w-3 text-gold" />
              Bar Council of India Rule 36 Compliant
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'glass-nav py-2'
            : 'bg-[#030712]/90 backdrop-blur-xl border-b border-gold/15 py-2.5'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-12 items-center justify-between">
            {/* Brand Logo */}
            <div
              onClick={() => handleNavClick('home')}
              className="cursor-pointer transition-transform duration-300 hover:scale-[1.02] flex items-center"
            >
              <Logo variant="full" size="md" />
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden items-center space-x-1 lg:space-x-2 md:flex">
              <button
                onClick={() => handleNavClick('home')}
                className={`relative px-3 py-2 text-xs font-mono uppercase tracking-widest transition-all duration-200 cursor-pointer flex items-center ${
                  activePage === 'home'
                    ? 'text-gold font-bold'
                    : 'text-[#BABDC0] hover:text-gold font-medium'
                }`}
              >
                <span>Home</span>
                {activePage === 'home' && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-gold-light via-gold to-gold-dark rounded-full shadow-sm shadow-gold/50"
                  />
                )}
              </button>

              {/* Practice Areas Dropdown Container */}
              <div ref={dropdownRef} className="relative">
                <div className="inline-flex items-center rounded-xl transition-all">
                  <button
                    onClick={() => handleNavClick('practices')}
                    className={`relative px-3 py-2 text-xs font-mono uppercase tracking-widest transition-all duration-200 cursor-pointer flex items-center ${
                      activePage === 'practices'
                        ? 'text-gold font-bold'
                        : 'text-[#BABDC0] hover:text-gold font-medium'
                    }`}
                  >
                    <span>Practices</span>
                    {activePage === 'practices' && (
                      <motion.div
                        layoutId="activeNavTab"
                        className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-gold-light via-gold to-gold-dark rounded-full shadow-sm shadow-gold/50"
                      />
                    )}
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsDropdownOpen((prev) => !prev);
                    }}
                    title="Toggle Practice Categories Menu"
                    className="p-1.5 text-[#BABDC0] hover:text-gold transition-colors duration-200 cursor-pointer rounded-lg hover:bg-white/5 -ml-1"
                  >
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180 text-gold' : ''}`} />
                  </button>
                </div>

                {/* Sleek Compact Dropdown Panel */}
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 top-full z-50 mt-3 w-80 rounded-2xl glass-panel p-4 shadow-2xl gold-border-glow bg-[#040914]/98 backdrop-blur-2xl border border-gold/30"
                    >
                      <div className="text-[10px] font-mono uppercase tracking-widest text-gold/90 mb-2 px-2 font-bold border-b border-gold/15 pb-2 flex items-center justify-between">
                        <span>Practice Categories</span>
                        <span className="text-[9px] text-[#A2A6A5] font-normal">16 Disciplines</span>
                      </div>

                      <div className="space-y-1.5">
                        {groups.map((grp) => {
                          const IconComponent = grp.icon;
                          const count = PRACTICE_AREAS.filter((p) => p.group === grp.id).length;
                          return (
                            <button
                              key={grp.id}
                              onClick={() => {
                                handleNavClick('practices');
                              }}
                              className="flex items-center justify-between w-full p-2.5 rounded-xl bg-black/40 hover:bg-gold/10 border border-gold/15 hover:border-gold/40 text-left transition-all duration-200 group/item cursor-pointer"
                            >
                              <div className="flex items-center space-x-2.5">
                                <div className="p-1.5 rounded-lg bg-gold/10 border border-gold/30 text-gold group-hover/item:bg-gold group-hover/item:text-deep-bg transition duration-200 shrink-0">
                                  <IconComponent className="h-4 w-4" />
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-xs font-mono font-medium text-white group-hover/item:text-gold uppercase tracking-wider leading-tight">
                                    {grp.label}
                                  </span>
                                  <span className="text-[9px] text-[#A2A6A5] line-clamp-1 mt-0.5">
                                    {grp.desc}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-center space-x-1 shrink-0">
                                <span className="text-[9px] font-mono text-gold/70 group-hover/item:text-gold font-bold px-1.5 py-0.5 rounded bg-gold/10 border border-gold/20">
                                  {count}
                                </span>
                                <ChevronRight className="h-3.5 w-3.5 text-gold/50 group-hover/item:text-gold group-hover/item:translate-x-0.5 transition duration-200" />
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      <div className="mt-3 pt-2.5 border-t border-gold/15 text-center">
                        <button
                          onClick={() => {
                            handleNavClick('practices');
                          }}
                          className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-light via-gold to-gold-dark py-2.5 font-mono text-[10px] font-bold uppercase tracking-wider text-deep-bg shadow-md shadow-gold/10 hover:shadow-gold/30 transition cursor-pointer"
                        >
                          <span>Explore All 16 Disciplines</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* International Desk Tab */}
              <button
                onClick={() => handleNavClick('international-desk')}
                className={`relative px-3 py-2 text-xs font-mono uppercase tracking-widest transition-all duration-200 cursor-pointer flex items-center space-x-1.5 ${
                  activePage === 'international-desk'
                    ? 'text-gold font-bold'
                    : 'text-[#BABDC0] hover:text-gold font-medium'
                }`}
              >
                <Globe className="h-3.5 w-3.5 text-gold" />
                <span>International Desk</span>
                {activePage === 'international-desk' && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-gold-light via-gold to-gold-dark rounded-full shadow-sm shadow-gold/50"
                  />
                )}
              </button>

              {/* Case Registry Tab */}
              <button
                onClick={() => handleNavClick('case-registry')}
                className={`relative px-3 py-2 text-xs font-mono uppercase tracking-widest transition-all duration-200 cursor-pointer flex items-center space-x-1.5 ${
                  activePage === 'case-registry'
                    ? 'text-gold font-bold'
                    : 'text-[#BABDC0] hover:text-gold font-medium'
                }`}
              >
                <span>Case Registry</span>
                {activePage === 'case-registry' && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-gold-light via-gold to-gold-dark rounded-full shadow-sm shadow-gold/50"
                  />
                )}
              </button>

              <button
                onClick={() => handleNavClick('about')}
                className={`relative px-3 py-2 text-xs font-mono uppercase tracking-widest transition-all duration-200 cursor-pointer flex items-center ${
                  activePage === 'about'
                    ? 'text-gold font-bold'
                    : 'text-[#BABDC0] hover:text-gold font-medium'
                }`}
              >
                <span>About</span>
                {activePage === 'about' && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-gold-light via-gold to-gold-dark rounded-full shadow-sm shadow-gold/50"
                  />
                )}
              </button>

              <button
                onClick={() => handleNavClick('resources')}
                className={`relative px-3 py-2 text-xs font-mono uppercase tracking-widest transition-all duration-200 cursor-pointer flex items-center ${
                  activePage === 'resources'
                    ? 'text-gold font-bold'
                    : 'text-[#BABDC0] hover:text-gold font-medium'
                }`}
              >
                <span>Diagnostics</span>
                {activePage === 'resources' && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-gold-light via-gold to-gold-dark rounded-full shadow-sm shadow-gold/50"
                  />
                )}
              </button>

              <button
                onClick={() => handleNavClick('blog')}
                className={`relative px-3 py-2 text-xs font-mono uppercase tracking-widest transition-all duration-200 cursor-pointer flex items-center ${
                  activePage === 'blog'
                    ? 'text-gold font-bold'
                    : 'text-[#BABDC0] hover:text-gold font-medium'
                }`}
              >
                <span>Briefings</span>
                {activePage === 'blog' && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-gold-light via-gold to-gold-dark rounded-full shadow-sm shadow-gold/50"
                  />
                )}
              </button>

              <button
                onClick={() => handleNavClick('contact')}
                className={`relative px-3 py-2 text-xs font-mono uppercase tracking-widest transition-all duration-200 cursor-pointer flex items-center ${
                  activePage === 'contact'
                    ? 'text-gold font-bold'
                    : 'text-[#BABDC0] hover:text-gold font-medium'
                }`}
              >
                <span>Contact</span>
                {activePage === 'contact' && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-gold-light via-gold to-gold-dark rounded-full shadow-sm shadow-gold/50"
                  />
                )}
              </button>
            </div>

            {/* Direct Contact Action Button */}
            <div className="hidden items-center space-x-2 md:flex">
              <a
                href="tel:+918287066868"
                className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-gold-light via-gold to-gold-dark px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-wider text-deep-bg transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-gold/20 hover:shadow-gold/40 flex items-center gap-1.5"
              >
                <Phone className="h-3.5 w-3.5 text-deep-bg shrink-0" />
                <span>+91 82870 66868</span>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center rounded-xl glass-card p-2.5 text-[#BABDC0] hover:text-gold transition border border-gold/30"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-b border-gold/20 bg-[#030712]/95 backdrop-blur-2xl md:hidden"
            >
              <div className="space-y-1 px-4 pt-2 pb-6">
                <button
                  onClick={() => handleNavClick('home')}
                  className={`block w-full py-3 text-left font-mono text-xs uppercase tracking-widest ${
                    activePage === 'home' ? 'text-gold font-medium' : 'text-[#BABDC0]'
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => handleNavClick('international-desk')}
                  className={`flex items-center space-x-2 w-full py-3 text-left font-mono text-xs uppercase tracking-widest ${
                    activePage === 'international-desk' ? 'text-gold font-medium' : 'text-[#BABDC0]'
                  }`}
                >
                  <Globe className="h-3.5 w-3.5 text-gold" />
                  <span>International Desk (NRI &amp; FDI)</span>
                </button>
                <button
                  onClick={() => handleNavClick('case-registry')}
                  className={`block w-full py-3 text-left font-mono text-xs uppercase tracking-widest ${
                    activePage === 'case-registry' ? 'text-gold font-medium' : 'text-[#BABDC0]'
                  }`}
                >
                  Case Registry (Representative Matters)
                </button>
                <button
                  onClick={() => handleNavClick('about')}
                  className={`block w-full py-3 text-left font-mono text-xs uppercase tracking-widest ${
                    activePage === 'about' ? 'text-gold font-medium' : 'text-[#BABDC0]'
                  }`}
                >
                  About Firm &amp; Partners
                </button>
                <button
                  onClick={() => {
                    setActivePage('practices');
                    setActivePracticeId(null);
                    setIsMobileMenuOpen(false);
                    window.location.hash = 'practices';
                  }}
                  className={`block w-full py-3 text-left font-mono text-xs uppercase tracking-widest ${
                    activePage === 'practices' ? 'text-gold font-medium' : 'text-[#BABDC0]'
                  }`}
                >
                  Practice Areas
                </button>
                <div className="pl-4 border-l border-gold/15 space-y-2 py-1">
                  {PRACTICE_AREAS.slice(0, 6).map((p) => (
                    <button
                      key={p.id}
                      onClick={() => handlePracticeClick(p.id)}
                      className="block w-full text-left text-xs text-[#BABDC0] hover:text-gold py-1"
                    >
                      • {p.title}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => handleNavClick('resources')}
                  className={`block w-full py-3 text-left font-mono text-xs uppercase tracking-widest ${
                    activePage === 'resources' ? 'text-gold font-medium' : 'text-[#BABDC0]'
                  }`}
                >
                  Diagnostics &amp; Guides
                </button>
                <button
                  onClick={() => handleNavClick('blog')}
                  className={`block w-full py-3 text-left font-mono text-xs uppercase tracking-widest ${
                    activePage === 'blog' ? 'text-gold font-medium' : 'text-[#BABDC0]'
                  }`}
                >
                  Statutory Briefings
                </button>
                <button
                  onClick={() => handleNavClick('contact')}
                  className={`block w-full py-3 text-left font-mono text-xs uppercase tracking-widest ${
                    activePage === 'contact' ? 'text-gold font-medium' : 'text-[#BABDC0]'
                  }`}
                >
                  Contact Chambers
                </button>

                <div className="pt-4 border-t border-gold/15">
                  <a
                    href="tel:+918287066868"
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-light via-gold to-gold-dark py-3 font-mono text-xs font-bold uppercase text-deep-bg"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Call +91 82870 66868</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
