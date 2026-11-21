import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldAlert, Scale, Clock, Phone, AlertCircle } from 'lucide-react';
import { ActivePage } from './types';
import { PRACTICE_AREAS } from './data';

// Components & Widgets
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BCIModal from './components/BCIModal';
import Widgets from './components/Widgets';
import InquiryForm from './components/InquiryForm';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import PracticeDetail from './pages/PracticeDetail';
import Blog from './pages/Blog';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import InternationalDesk from './pages/InternationalDesk';
import CaseRegistry from './pages/CaseRegistry';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [activePracticeId, setActivePracticeId] = useState<string | null>(null);
  const [bciVerified, setBciVerified] = useState(false);
  const [showConsultationModal, setShowConsultationModal] = useState(false);

  // Hash-based routing to support navigation, reloads, and back-buttons cleanly
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash) {
        setActivePage('home');
        setActivePracticeId(null);
        return;
      }

      if (hash.startsWith('practices/')) {
        const pId = hash.split('practices/')[1];
        setActivePage('practices');
        setActivePracticeId(pId);
      } else {
        const pages: ActivePage[] = [
          'home',
          'about',
          'practices',
          'blog',
          'resources',
          'contact',
          'privacy',
          'terms',
          'international-desk',
          'case-registry'
        ];
        if (pages.includes(hash as ActivePage)) {
          setActivePage(hash as ActivePage);
          setActivePracticeId(null);
        }
      }
    };

    // Parse on initial mount
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Dynamic SEO and Meta title update for Search Engine Optimization
  useEffect(() => {
    let title = 'Nityaprabha Law Chambers | Advocates & Legal Consultants | Supreme Court & Delhi High Court';
    let description = 'Nityaprabha Law Chambers is a premier Indian law firm led by Advocate Kapil Dev Vishwakarma (Managing Partner, IPR) and Advocate Kunal Murari (Equity Partner, Corporate & Tax Advisory) before the Supreme Court of India and High Courts.';

    if (activePage === 'about') {
      title = 'Chambers Leadership & Profile | Advocate Kapil Dev Vishwakarma & Advocate Kunal Murari';
      description = 'Meet the leadership of Nityaprabha Law Chambers: Advocate Kapil Dev Vishwakarma (Managing Partner, IPR, 6+ yrs) and Advocate Kunal Murari (Equity Partner, Corporate, International & Tax Advisory).';
    } else if (activePage === 'practices') {
      if (activePracticeId) {
        const practice = PRACTICE_AREAS.find((p) => p.id === activePracticeId);
        if (practice) {
          title = `${practice.title} | Practice Discipline | Nityaprabha Law Chambers`;
          description = practice.description;
        } else {
          title = '16 Specialized Practice Disciplines | Nityaprabha Law Chambers';
        }
      } else {
        title = '16 Specialized Practice Disciplines | Nityaprabha Law Chambers';
        description = 'Explore our 16 specialized legal disciplines spanning IPR, Corporate M&A, Commercial Litigation, Direct/Indirect Taxation, and International Arbitration.';
      }
    } else if (activePage === 'international-desk') {
      title = 'International Desk & Cross-Border Advisory | SIAC, LCIA, DIFC | Nityaprabha Law Chambers';
      description = 'Cross-border counsel and dispute advisory connecting New Delhi to Singapore (SIAC), London (LCIA), and Dubai (DIFC).';
    } else if (activePage === 'case-registry') {
      title = 'Judicial Case Registry & Matter Summaries | Nityaprabha Law Chambers';
      description = 'Verified case studies and representative statutory defense matters before the Supreme Court of India and High Courts.';
    } else if (activePage === 'blog') {
      title = 'Statutory Insights & Legal Briefings | Nityaprabha Law Chambers';
      description = 'Authoritative briefings and statutory analysis on Indian IPR, corporate law amendments, DPDP Act compliance, and tax precedents.';
    } else if (activePage === 'resources') {
      title = 'Legal Checklists & Advisory Frameworks | Nityaprabha Law Chambers';
      description = 'Downloadable practical guides, due diligence checklists, and statutory guides curated by Supreme Court and High Court advocates.';
    } else if (activePage === 'contact') {
      title = 'Contact Our Chambers | Connaught Place, New Delhi & BKC Mumbai';
      description = 'Schedule a privileged conflict screening and intake session at our Connaught Place (New Delhi) or BKC (Mumbai) offices.';
    } else if (activePage === 'privacy') {
      title = 'Privacy Policy & Confidentiality | Nityaprabha Law Chambers';
      description = 'Information governance and client confidentiality policies compliant with DPDP Act 2023.';
    } else if (activePage === 'terms') {
      title = 'Terms of Engagement & BCI Rule 36 Disclaimer | Nityaprabha Law Chambers';
      description = 'Regulatory disclaimer under Bar Council of India Rule 36 and standard terms of engagement.';
    }

    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }
  }, [activePage, activePracticeId]);

  const handlePageChange = (page: ActivePage) => {
    setActivePage(page);
    if (page !== 'practices') {
      setActivePracticeId(null);
      window.location.hash = page;
    } else if (!activePracticeId) {
      window.location.hash = 'practices';
    }
  };

  const handlePracticeChange = (id: string | null) => {
    setActivePracticeId(id);
    if (id) {
      window.location.hash = `practices/${id}`;
    } else {
      window.location.hash = 'practices';
    }
  };

  return (
    <div className="min-h-screen bg-deep-bg text-[#BABDC0] antialiased selection:bg-gold selection:text-deep-bg">
      {/* 1. MANDATORY BCI RULE 36 ENTRANCE GATEKEEPER */}
      <BCIModal onAccept={() => setBciVerified(true)} />

      {bciVerified && (
        <div className="flex flex-col min-h-screen">
          {/* 2. NAVIGATION BAR */}
          <Navbar
            activePage={activePage}
            setActivePage={handlePageChange}
            setActivePracticeId={handlePracticeChange}
            onOpenConsultation={() => setShowConsultationModal(true)}
          />

          {/* 3. DYNAMIC PAGES RENDERING (Staggered fade transitions) */}
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePage + (activePracticeId || '')}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                {activePage === 'home' && (
                  <Home
                    setActivePage={handlePageChange}
                    setActivePracticeId={handlePracticeChange}
                    onOpenConsultation={() => setShowConsultationModal(true)}
                  />
                )}
                {activePage === 'about' && (
                  <About onOpenConsultation={() => setShowConsultationModal(true)} />
                )}
                {activePage === 'practices' && (
                  <PracticeDetail
                    practiceId={activePracticeId}
                    setPracticeId={handlePracticeChange}
                    onOpenConsultation={() => setShowConsultationModal(true)}
                  />
                )}
                {activePage === 'international-desk' && (
                  <InternationalDesk onOpenConsultation={() => setShowConsultationModal(true)} />
                )}
                {activePage === 'case-registry' && (
                  <CaseRegistry onOpenConsultation={() => setShowConsultationModal(true)} />
                )}
                {activePage === 'blog' && <Blog />}
                {activePage === 'resources' && <Resources />}
                {activePage === 'contact' && <Contact />}
                {activePage === 'privacy' && <PrivacyPolicy />}
                {activePage === 'terms' && <Terms />}
              </motion.div>
            </AnimatePresence>
          </main>

          {/* 4. FOOTER */}
          <Footer
            setActivePage={handlePageChange}
            setActivePracticeId={handlePracticeChange}
          />

          {/* 5. FLOATING ACTION WIDGETS (WhatsApp anti-solicitation trigger, sticky bottom bar) */}
          <Widgets onOpenConsultation={() => setShowConsultationModal(true)} />

          {/* 6. CONVERSION MODAL: MULTI-STEP INTAKE AND CONFLICT SCREENING */}
          <AnimatePresence>
            {showConsultationModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#040914]/90 px-4 py-8 backdrop-blur-md overflow-y-auto">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 15 }}
                  className="relative w-full max-w-2xl rounded-xl border border-gold/25 bg-deep-card p-6 shadow-2xl md:p-8 gold-border-glow"
                >
                  <button
                    onClick={() => setShowConsultationModal(false)}
                    className="absolute top-4 right-4 text-[#A2A6A5] hover:text-white transition cursor-pointer"
                    title="Close"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  <div className="mb-4 flex items-center space-x-2">
                    <Scale className="h-5 w-5 text-gold" />
                    <span className="font-display text-xs font-bold uppercase tracking-widest text-white">
                      Secure Client Onboarding Portal
                    </span>
                  </div>

                  <InquiryForm
                    embedded={true}
                    onClose={() => setShowConsultationModal(false)}
                    preselectedPracticeId={activePracticeId}
                  />
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
