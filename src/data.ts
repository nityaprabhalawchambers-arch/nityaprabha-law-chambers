import { PracticeArea, BlogPost, FAQItem, ResourceItem, PartnerBio, RepresentativeMatter, InternationalDeskCapability } from './types';

export const MANAGING_PARTNER: PartnerBio = {
  id: 'kapil-dev-vishwakarma',
  name: 'Advocate Kapil Dev Vishwakarma',
  title: 'Managing Partner',
  roleBadge: 'Managing Partner & Head of IPR',
  specialization: 'Intellectual Property Rights (IPR), Patent & Trademark Prosecution, Brand Protection & High-Stakes Litigation',
  portrait: '/assets/kapil-dev-vishwakarma.jpg',
  education: 'LL.B (Hons.), Faculty of Law, University of Delhi',
  admissions: 'Bar Council of Delhi (Enrollment No. D/1842/2009)',
  experience: '6+ Years of Practice before the Supreme Court of India & High Court of Delhi',
  phone: '+91 82870 66868',
  email: 'nityaprabhalawchambers@gmail.com',
  summary: '"Advocacy is more than a commercial practice; it is a dedicated service to justice and the rule of law." Under the leadership of Advocate Kapil Dev Vishwakarma, Nityaprabha Law Chambers represents client interests with discipline, technical excellence, and strict ethical standards, delivering authoritative counsel across intellectual property rights and complex appellate litigation.',
  memberships: [
    'Supreme Court Bar Association (SCBA)',
    'Delhi High Court Bar Association (DHCBA)',
    'International Association for the Protection of Intellectual Property (AIPPI)',
    'Licensing Executives Society India (LESI)'
  ],
  qualifications: [
    'Specialized Counsel for landmark patent, trademark, and copyright disputes',
    'Adviser to multinational corporations and premier institutions on global IP monetization & anti-counterfeiting',
    'Seasoned litigator with 6+ years of active practice across High Courts and the Supreme Court of India'
  ],
  keyForums: [
    'Supreme Court of India',
    'High Court of Delhi — Intellectual Property Division (IPD)',
    'Trade Marks Registry & CGPDTM',
    'National Company Law Appellate Tribunal (NCLAT)'
  ],
  notableMatters: [
    'Obtained landmark ex-parte ad-interim injunction against rogue e-commerce counterfeiters across 14 platforms.',
    'Overturned Section 9/11 trademark refusal for premier tech consortium under the doctrine of acquired distinctiveness.',
    'Represented pharmaceutical innovator in Section 3(d) pre-grant patent opposition defense.'
  ]
};

export const EQUITY_PARTNER: PartnerBio = {
  id: 'kunal-murari',
  name: 'Advocate Kunal Murari',
  title: 'Equity Partner',
  roleBadge: 'Equity Partner — Corporate, International & Tax Advisory',
  specialization: 'Corporate Law, International Laws & Cross-Border Transactions, Direct & Indirect Taxation',
  portrait: '/assets/kunal-murari.jpg',
  education: 'LL.B, Faculty of Law, University of Delhi | B.Com (Hons.), Shri Ram College of Commerce (SRCC)',
  admissions: 'Bar Council of Delhi',
  experience: 'Specialized Practice in Corporate Structuring, M&A, International Trade & Regulatory Taxation',
  phone: '+91 82870 66868',
  email: 'adv.kunalmurari@gmail.com',
  summary: '"Modern commerce demands law chambers that understand financial reality, regulatory architecture, and global trade dynamics." Leading corporate advisory at Nityaprabha Law Chambers, Advocate Kunal Murari structures high-value corporate deals, cross-border transactions, and defends complex tax disputes with analytical rigor.',
  memberships: [
    'Delhi High Court Bar Association (DHCBA)',
    'International Bar Association (IBA) - Corporate & Tax Section',
    'All India Federation of Tax Practitioners (AIFTP)',
    'Supreme Court SCBA Counsel Forum'
  ],
  qualifications: [
    'Adviser to cross-border enterprises, tech startups, and venture funds on corporate governance, M&A, and FEMA compliance',
    'Expert strategist in direct & indirect taxation, transfer pricing, and appellate tax dispute resolution',
    'Dual-background in premier finance (SRCC) and law (Faculty of Law, DU), bridging commercial strategy and statutory defense'
  ],
  keyForums: [
    'Supreme Court of India',
    'High Court of Delhi — Commercial & Tax Benches',
    'National Company Law Tribunal (NCLT New Delhi)',
    'Income Tax Appellate Tribunal (ITAT Delhi)',
    'Singapore International Arbitration Centre (SIAC) Counsel Desk'
  ],
  notableMatters: [
    'Structured $14M cross-border technology acquisition with multi-tier FEMA and transfer pricing safeguards.',
    'Defended startup board in contested shareholder oppression action before NCLT, securing full founder equity rights.',
    'Resolved multi-crore transfer pricing adjustment appeal before ITAT with complete penalty waiver.'
  ]
};

export const PARTNERS: PartnerBio[] = [MANAGING_PARTNER, EQUITY_PARTNER];

// Backwards-compatibility alias
export const FOUNDER_BIO = MANAGING_PARTNER;

export const REPRESENTATIVE_MATTERS: RepresentativeMatter[] = [
  {
    id: 'mat-01',
    discipline: 'IPR & Patents',
    forum: 'High Court of Delhi (Intellectual Property Division)',
    matterSummary: 'Multi-platform anti-counterfeiting injunction for consumer lifestyle brand.',
    statutoryContext: 'Trade Marks Act 1999, Section 29 & 135; Commercial Courts Act 2015',
    outcome: 'Obtained dynamic John Doe ex-parte injunction ordering immediate digital takedown across 14 major Indian e-commerce portals and custom border alerts.',
    leadCounsel: 'Advocate Kapil Dev Vishwakarma'
  },
  {
    id: 'mat-02',
    discipline: 'Corporate & Tax',
    forum: 'National Company Law Tribunal (NCLT New Delhi)',
    matterSummary: 'Defense of institutional founders in hostile buyout attempt under disputed term-sheet covenants.',
    statutoryContext: 'Companies Act 2013, Section 241/242; Insolvency and Bankruptcy Code (IBC)',
    outcome: 'Tribunal ruled entirely in favor of founders, preserving multi-class share vesting equity and securing full pre-money valuation rights.',
    leadCounsel: 'Advocate Kunal Murari'
  },
  {
    id: 'mat-03',
    discipline: 'International & Cross-Border',
    forum: 'Singapore International Arbitration Centre (SIAC) / Delhi Seat',
    matterSummary: 'Cross-border joint venture supply agreement breach involving foreign manufacturing conglomerate.',
    statutoryContext: 'Arbitration and Conciliation Act 1996 (Part II Enforcement); FEMA Regulations',
    outcome: 'Successfully defended Indian entity, negotiating favorable mediated settlement with zero foreign penalty liability and preserving manufacturing rights.',
    leadCounsel: 'Advocate Kunal Murari'
  },
  {
    id: 'mat-04',
    discipline: 'IPR & Patents',
    forum: 'Trade Marks Registry & CGPDTM Delhi',
    matterSummary: 'Resolution of complex Section 9(1)(b) descriptiveness refusal for AI enterprise platform.',
    statutoryContext: 'Trade Marks Act 1999, Section 9(1) Proviso (Acquired Distinctiveness)',
    outcome: 'Overturned examination refusal on comprehensive documentary evidence of commercial use, obtaining advertisement in Trade Marks Journal.',
    leadCounsel: 'Advocate Kapil Dev Vishwakarma'
  },
  {
    id: 'mat-05',
    discipline: 'Corporate & Tax',
    forum: 'Income Tax Appellate Tribunal (ITAT Delhi Bench)',
    matterSummary: 'Transfer pricing dispute concerning cross-border software licensing royalty adjustments.',
    statutoryContext: 'Income Tax Act 1961, Section 92CA; DTAA Article 12',
    outcome: 'Tribunal struck down Transfer Pricing Officer’s artificial markups, confirming client’s arm’s length pricing methodology.',
    leadCounsel: 'Advocate Kunal Murari'
  },
  {
    id: 'mat-06',
    discipline: 'Commercial Disputes',
    forum: 'Supreme Court of India',
    matterSummary: 'Special Leave Petition (SLP) challenging arbitrary disqualification in high-capital public tender.',
    statutoryContext: 'Constitution of India, Article 136 & 226; Judicial Review of Public Procurement',
    outcome: 'Apex Court stayed tender award, directing respondent authority to re-evaluate petitioner bid on technical merit.',
    leadCounsel: 'Advocate Kapil Dev Vishwakarma'
  }
];

export const INTERNATIONAL_DESK_CAPABILITIES: InternationalDeskCapability[] = [
  {
    id: 'nri-estate',
    title: 'NRI Estate & Ancestral Property Advisory',
    focus: 'Non-Resident Indians in USA, UK, Canada, UAE & Australia',
    description: 'Complete legal representation for non-resident Indians managing agricultural, residential, or commercial inherited properties across Delhi NCR, Punjab, and Haryana. Handling title verification, partition suits, mutation, illegal possession evacuation, and repatriating sale proceeds under RBI FEMA guidelines.',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=800',
    applicableLaws: ['Transfer of Property Act 1882', 'FEMA (Remittance of Assets) Regulations', 'Indian Succession Act 1925'],
    keyForums: ['High Court of Delhi', 'Financial Commissioner / Divisional Revenue Courts', 'Civil District Courts']
  },
  {
    id: 'cross-border-fdi',
    title: 'Cross-Border FDI & Corporate Market Entry',
    focus: 'Foreign Corporations, Funds & International Joint Ventures',
    description: 'Advising overseas entities entering the Indian jurisdiction through wholly-owned subsidiaries (WOS), joint ventures, and liaison offices. Structuring shareholding patterns, filing RBI FIRMS & single-master form (SMF) declarations, and securing DPIIT clearances.',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800',
    applicableLaws: ['Foreign Exchange Management Act (FEMA 1999)', 'Companies Act 2013', 'DPIIT FDI Policy 2026'],
    keyForums: ['Reserve Bank of India (FMD)', 'Registrar of Companies (RoC)', 'NCLT']
  },
  {
    id: 'international-arbitration',
    title: 'International Commercial Arbitration & Foreign Award Enforcement',
    focus: 'Cross-Border Supply Contracts & Commercial Breach Disputes',
    description: 'Advocacy and advisory in international arbitrations governed by SIAC, LCIA, ICC, or DIAC rules. Filing petitions under Section 9 (Interim Relief) and Section 48 (Enforcement of New York Convention Awards) before the High Courts of India.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800',
    applicableLaws: ['Arbitration and Conciliation Act 1996 (Part II)', 'New York Convention 1958', 'Commercial Courts Act 2015'],
    keyForums: ['Supreme Court of India', 'Delhi High Court (Commercial Division)', 'SIAC / LCIA Tribunals']
  },
  {
    id: 'dtaa-taxation',
    title: 'International Tax & DTAA Relief Structuring',
    focus: 'Multi-Jurisdictional Tax Compliance & Expatriate Wealth',
    description: 'Strategic planning under Double Tax Avoidance Agreements (DTAA) to eliminate double withholding on cross-border royalties, technical fees, and capital gains. Handling advance rulings and appeals regarding Permanent Establishment (PE) exposure.',
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=800',
    applicableLaws: ['Income Tax Act 1961 (Section 90/91)', 'OECD Model Tax Convention', 'BEPS Multilateral Instrument (MLI)'],
    keyForums: ['Income Tax Appellate Tribunal (ITAT)', 'Authority for Advance Rulings (AAR)', 'High Court Tax Benches']
  }
];

export const INTERNATIONAL_HUBS = [
  {
    city: 'New Delhi',
    region: 'India & South Asia',
    role: 'Principal Chambers Seat & Apex Court Counsel',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=600',
    statute: 'Supreme Court of India & Delhi High Court Commercial Div.'
  },
  {
    city: 'Singapore',
    region: 'Asia-Pacific',
    role: 'SIAC Arbitral Seat & Regional HQ Transactions',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=600',
    statute: 'SIAC Rules & UNCITRAL Model Law'
  },
  {
    city: 'London',
    region: 'United Kingdom & Europe',
    role: 'LCIA Seat & Cross-Border Corporate Advisory',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=600',
    statute: 'English Common Law & India-UK Bilateral Desk'
  },
  {
    city: 'Dubai',
    region: 'UAE & Middle East',
    role: 'DIFC Gateway & NRI Wealth Heritage Desk',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=600',
    statute: 'DIFC Court Enforcement & CEPA Bilateral Framework'
  }
];

export const METRICS = [
  { value: '1,400+', label: 'Total Matters Handled', desc: 'Across Supreme Court, High Courts, and Arbitral Tribunals' },
  { value: '6+', label: 'Years of Practice', desc: 'Providing consistent legal advocacy and regulatory counsel' },
  { value: '99%', label: 'Filing Success Rate', desc: 'For uncontested trademark and patent prosecutions' },
  { value: '24 Hr', label: 'Response Commitment', desc: 'Guaranteed conflict-screening and intake turnaround' }
];

export const CLIENT_LOGOS = [
  { name: 'Chambers & Partners', type: 'peer-recognition' },
  { name: 'Legal 500 Asia Pacific', type: 'peer-recognition' },
  { name: 'IFLR 1000', type: 'peer-recognition' },
  { name: 'Bar Council of Delhi', type: 'membership' },
  { name: 'Supreme Court of India', type: 'venue' }
];

export const INDUSTRIES_SERVED = [
  { name: 'Technology & E-commerce', desc: 'IP audits, licensing, DPDP Act compliance' },
  { name: 'Healthcare & Pharma', desc: 'Patent prosecution, drug regulation' },
  { name: 'Real Estate & Infrastructure', desc: 'RERA compliance, title due diligence' },
  { name: 'Creators & Media House', desc: 'Copyright enforcement, licensing, contract terms' },
  { name: 'Startups & SMEs', desc: 'Founder agreements, equity pool scaling, seed funding advisory' }
];

export const PROCESS_TIMELINE = [
  {
    step: '01',
    title: 'Secure Intake Screening',
    desc: 'Submission of conflict-screening details under absolute confidentiality to ensure no active conflicts of interest.'
  },
  {
    step: '02',
    title: 'Conflict Clearance Audit',
    desc: 'Our compliance officer runs database searches to clear representing your interests with strict ethical compliance.'
  },
  {
    step: '03',
    title: 'Privileged Strategy Formulation',
    desc: 'Partners review the statutory background, precedent cases, and outline a custom legal strategy.'
  },
  {
    step: '04',
    title: 'Diligent Execution',
    desc: 'Filing pleadings, representing before judicial forums, or executing contract/IP audits with precision.'
  }
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'intellectual-property',
    title: 'Intellectual Property Law',
    group: 'founders-brands',
    shortDesc: 'Strategic monetization, audit, prosecution, and enforcement of IP portfolios globally.',
    fullDesc: 'Protecting intellectual property requires a proactive commercial and legal strategy. Nityaprabha Law Chambers designs comprehensive IP portfolios, performing clearance searches and advising on the valuation and licensing of intangible assets.',
    painPointNarrative: 'Competitors copying brand names or proprietary tech. Businesses lose critical market share and brand equity due to delayed or inadequate IP protection.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=85&w=1600',
    forums: ['Supreme Court of India', 'Delhi High Court (IPD)', 'Trade Marks Registry', 'Patent Office'],
    statutoryRoadmap: [
      { step: '01', title: 'IP Portfolio Audit', description: 'Reviewing all unregistered assets, logos, proprietary code, and packaging.' },
      { step: '02', title: 'Clearance Searches', description: 'Performing prior art and trademark registry clearances to avoid infringement claims.' },
      { step: '03', title: 'Strategic Protection', description: 'Filing structured patent, trademark, and copyright applications.' }
    ],
    faq: [
      { question: 'How can I enforce my IP rights against an online infringer?', answer: 'We secure John Doe/Anton Piller orders and coordinate with e-commerce platforms and enforcement agencies for rapid take-downs and civil seizures.' },
      { question: 'Does registering IP in India protect it globally?', answer: 'No, IP is territorial. However, we utilize international treaty pathways like the Madrid Protocol for trademarks and PCT for patents to file in multiple countries.' }
    ],
    ctaText: 'Request Secure Portfolio Audit',
    trustSignals: ['Chambers Asia IP ranking badges', 'De-identified injunction listings', 'Global filing capabilities']
  },
  {
    id: 'trademark-registration',
    title: 'Trademark Registration & Prosecution',
    group: 'founders-brands',
    shortDesc: 'Complete protection for brand names, logos, and slogans under the Trade Marks Act 1999.',
    fullDesc: 'Securing Distinct Brand Identity in India\'s Competitive Markets. A business\'s brand identity is its most valuable commercial asset. In a crowded marketplace, trademark registration provides the definitive legal framework to protect your brand name, logo, and slogans from copycats. Nityaprabha Law Chambers provides professional, end-to-end guidance through the Trademark Registry, helping clients move from trademark search to final registration with speed and precision.',
    painPointNarrative: 'Registry objections and conflicting brand filings. Brand dilution from close competitors causing public confusion.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
    heroImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=85&w=1600',
    forums: ['Trade Marks Registry (Delhi/Mumbai)', 'Delhi High Court (IPD)', 'Appellate Benches'],
    statutoryRoadmap: [
      { step: '01', title: 'Search & Classification', description: 'We analyze distinctiveness and classify under the NICE class system (1 to 45).' },
      { step: '02', title: 'Application Filing', description: 'Drafting precise specifications and submitting to the Trademark Registry.' },
      { step: '03', title: 'Objection & Opposition handling', description: 'Drafting legal arguments against Section 9 or 11 objections and defending before the Registrar.' }
    ],
    faq: [
      { question: 'What are the risks of using an AI-generated brand name?', answer: 'AI tools often combine existing marks, leading to high risks of trademark conflicts (Section 11) or lack of distinctiveness objections (Section 9).' },
      { question: 'How long does trademark registration take in India?', answer: 'With prompt replies to objections, registration can take 8 to 12 months, but the TM symbol can be used immediately upon filing.' }
    ],
    ctaText: 'Initiate Trademark Clearance Search',
    trustSignals: ['99% filing success metrics', 'MSME fee rebate guidance', 'Over 800+ marks secured']
  },
  {
    id: 'copyright',
    title: 'Copyright Law',
    group: 'founders-brands',
    shortDesc: 'Protecting original literary, artistic, dramatic, musical, and proprietary software code.',
    fullDesc: 'Protecting Creative Assets and Proprietary Code. Copyright law protects your original literary, artistic, and software creations from unauthorized exploitation and digital piracy. Nityaprabha Law Chambers advises creators, tech developers, and media entities on securing and licensing their copyrights under the Copyright Act 1957. The firm drafts robust licensing agreements, advises on fair use guidelines, and represents clients in infringement and digital piracy disputes.',
    painPointNarrative: 'Digital piracy, unauthorized content distribution, and theft of proprietary software source code.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800',
    heroImage: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=85&w=1600',
    statutoryRoadmap: [
      { step: '01', title: 'Source Audit', description: 'Assessing author credentials, original development timelines, and code ownership.' },
      { step: '02', title: 'Filing at Copyright Office', description: 'Preparing Statement of Particulars and submitting source extracts under security seals.' },
      { step: '03', title: 'Dispute Resolution', description: 'Representing clients in case of objections by competitors or registry notices.' }
    ],
    faq: [
      { question: 'Who owns the copyright for short-form social media videos?', answer: 'Under the Copyright Act, ownership lies with the creator unless created under a contract of service, where the employer holds the initial title.' },
      { question: 'Is software source code copyrightable in India?', answer: 'Yes, source code is copyrightable as "literary work" under the Copyright Act 1957. We file specific modules to keep core secrets safe.' }
    ],
    ctaText: 'Arrange Copyright Consultation Brief',
    trustSignals: ['Listings of registered software copyrights', 'Precedent litigation history', 'IP rights protection expert']
  },
  {
    id: 'patent-support',
    title: 'Patent Support & Analysis',
    group: 'founders-brands',
    shortDesc: 'Rigorous prior art searches, patentability assessments, and secure specification drafting.',
    fullDesc: 'Meticulous Patent Analysis and Prosecution. Securing patent protection requires deep scientific understanding and rigorous legal analysis. Nityaprabha Law Chambers provides essential technical support for patent applications, performing exhaustive prior art searches and drafting clear, legally defensible patent claims. The firm\'s IP advocates help tech innovators and manufacturers protect their proprietary technologies, ensuring compliance with the Indian Patents Act 1970.',
    painPointNarrative: 'Complex filing processes, high rejection rates due to prior art, and lack of technical precision in claims.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    heroImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=85&w=1600',
    forums: ['Patent Office (CGPDTM)', 'High Court Intellectual Property Division (IPD)'],
    statutoryRoadmap: [
      { step: '01', title: 'Patentability Search', description: 'Exhaustive global database searches covering patent and non-patent literature.' },
      { step: '02', title: 'Specification Drafting', description: 'Drafting precise provisional or complete specifications focusing on inventive step.' },
      { step: '03', title: 'Prosecution & Responses', description: 'Answering First Examination Reports (FER) and attending technical hearings.' }
    ],
    faq: [
      { question: 'How do I perform a prior art search to assess patentability?', answer: 'We map your invention\'s novel features against databases like EPO, USPTO, and Indian Patent Office using advanced semantic algorithms.' },
      { question: 'What is Section 3(k) under the Indian Patent Act?', answer: 'It excludes computer programs per se, business methods, and algorithms from patentability. We guide software firms to frame patent claims around hardware-integrated solutions.' }
    ],
    ctaText: 'Confirm Patentability Brief',
    trustSignals: ['Specialized tech & PhD advisors', 'Expertise in PCT filings', 'Strict scientific integrity standard']
  },
  {
    id: 'brand-protection',
    title: 'Brand Protection & Anti-Counterfeiting',
    group: 'founders-brands',
    shortDesc: 'Active surveillance and rapid digital take-downs of counterfeit items and copycats.',
    fullDesc: 'Active Defense Against Counterfeits and Online Infringement. Counterfeit products and digital brand dilution can quickly damage a business\'s reputation and lead to significant financial losses. Nityaprabha Law Chambers designs proactive brand protection strategies to identify and stop infringement across e-commerce platforms and physical supply chains. The firm\'s brand protection lawyers coordinate with enforcement agencies to execute civil seizures, secure injunctive relief (including "John Doe" or "Anton Piller" orders), and stop unauthorized domain name use and online brand impersonation.',
    painPointNarrative: 'Widespread counterfeiting across e-commerce marketplaces and offline supply hubs diluting brand trust.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    heroImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=85&w=1600',
    forums: ['Delhi High Court (Original Side)', 'Customs Border Enforcement', 'Cyber Crime Cells'],
    statutoryRoadmap: [
      { step: '01', title: 'Market Surveillance', description: 'Active digital monitoring and on-ground intelligence gathering in supply corridors.' },
      { step: '02', title: 'Registry Alert Setup', description: 'Interfacing with Custom authorities to seize fake imports at borders.' },
      { step: '03', title: 'Injunction Actions', description: 'Securing rapid ex-parte injunctions to freeze rogue seller accounts and seize stocks.' }
    ],
    faq: [
      { question: 'Can I secure a "John Doe" order to stop unknown infringers?', answer: 'Yes, known as Ashok Kumar orders in India, they allow us to stop unknown distributors, web hosts, and logistics providers without naming them.' },
      { question: 'How does customs register branding?', answer: 'We register your trademark with India Customs, enabling them to inspect and seize counterfeit shipments entering major ports.' }
    ],
    ctaText: 'Initiate Brand Enforcement Action',
    trustSignals: ['Coordination with local enforcement', 'Border control integrations', 'Multi-city seizure network']
  },
  {
    id: 'commercial-litigation',
    title: 'Commercial Litigation',
    group: 'disputes',
    shortDesc: 'Advocacy in high-stakes contract, shareholder, and joint venture disputes before commercial courts.',
    fullDesc: 'High-stakes commercial disputes require a strategic and thorough litigation approach. The litigation department at Nityaprabha Law Chambers represents corporate entities and private individuals across diverse civil and commercial disputes, from contract violations to partnership disagreements. The firm\'s trial advocates combine an in-depth understanding of the Code of Civil Procedure with commercial awareness. They focus on drafting clear pleadings, compiling strong evidence, and delivering persuasive oral arguments to protect the client\'s interests in all major courts and tribunals.',
    painPointNarrative: 'Ongoing corporate disputes causing operational halts, financial losses, and board deadlocks.',
    image: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&q=80&w=800',
    heroImage: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&q=85&w=1600',
    forums: ['Supreme Court of India', 'Delhi High Court (Commercial Division)', 'Commercial District Courts'],
    statutoryRoadmap: [
      { step: '01', title: 'Case Audit', description: 'Rigorous review of commercial contracts, communication records, and liabilities.' },
      { step: '02', title: 'Pleading Design', description: 'Drafting precise Plaints or Written Statements under the Commercial Courts Act.' },
      { step: '03', title: 'Advocacy & Trials', description: 'Securing urgent interim reliefs and representing in trial proceedings.' }
    ],
    faq: [
      { question: 'How long does commercial litigation take in High Courts?', answer: 'Commercial courts are mandated to expedite trials, aiming for a 6 to 18-month resolution range under the Commercial Courts Act 2015.' },
      { question: 'Is arbitration mandatory before commercial litigation?', answer: 'Under Section 12A of the Act, pre-institution mediation is mandatory unless urgent interim relief is requested.' }
    ],
    ctaText: 'Connect with Litigation Counsel',
    trustSignals: ['Notable commercial recoveries', 'High Court panel listings', 'Precedent judgments cited']
  },
  {
    id: 'civil-litigation',
    title: 'Civil Litigation & Appellate Advocacy',
    group: 'disputes',
    shortDesc: 'Defending interests in civil suits, writ petitions, and appeals before High Courts and Supreme Court.',
    fullDesc: 'Upholding Your Fundamental Rights Through Appellate Advocacy. Arbitrary regulatory enforcement or violations of fundamental rights require immediate representation before High Courts and the Supreme Court of India. Nityaprabha Law Chambers represents clients in high-stakes civil and constitutional matters, drafting clear writ petitions to challenge unlawful administrative actions. The firm\'s appellate advocates provide highly skilled representation, ensuring that your rights are protected at every stage.',
    painPointNarrative: 'Arbitrary government actions, regulatory fines, or lower court orders infringing fundamental or contractual rights.',
    image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800',
    heroImage: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=85&w=1600',
    forums: ['Supreme Court of India', 'High Court of Delhi', 'District & Sessions Courts'],
    statutoryRoadmap: [
      { step: '01', title: 'Grounds Analysis', description: 'Evaluating constitutional grounds, procedural lapses, or errors in law.' },
      { step: '02', title: 'Writ/Appeal Drafting', description: 'Drafting comprehensive writ petitions under Article 226 or Article 32 of the Constitution.' },
      { step: '03', title: 'Appellate Hearings', description: 'Oral arguments before Senior Division Benches and securing stay orders.' }
    ],
    faq: [
      { question: 'How do I challenge an arbitrary regulatory order via a Writ?', answer: 'A Writ Petition can be filed in the High Court on grounds of violation of natural justice, jurisdictional error, or breach of constitutional rights.' },
      { question: 'What is the role of Supreme Court in civil appeals?', answer: 'The Supreme Court reviews cases involving substantial questions of law or public interest via Special Leave Petitions (SLPs).' }
    ],
    ctaText: 'Connect with Appellate Advocates',
    trustSignals: ['Supreme Court bar standing', 'Over 30+ landmark writs filed', 'Constitutional precedent database']
  },
  {
    id: 'family-law',
    title: 'Family & Matrimonial Law',
    group: 'individuals-families',
    shortDesc: 'Empathetic representation in mutual consent divorce, custody, and matrimonial disputes.',
    fullDesc: 'Empathetic and Empathetic Family Law Representation. Navigating matrimonial disputes and child custody arrangements requires both sensitive handling and strong legal protection. Nityaprabha Law Chambers provides compassionate, highly confidential legal services, helping clients resolve divorce, maintenance, and custody matters through structured mediation and court representation. The firm\'s family law advocates focus on securing fair resolutions that protect the well-being of all involved parties, ensuring absolute privacy throughout the process.',
    painPointNarrative: 'High emotional distress, assets division concerns, and child custody uncertainty during marital separations.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=85&w=1600',
    statutoryRoadmap: [
      { step: '01', title: 'Confidential Consultation', description: 'Meeting in secure private chambers to capture individual family circumstances.' },
      { step: '02', title: 'Mediation & Terms', description: 'Exploring amicable settlement pathways and drafting comprehensive terms of separation.' },
      { step: '03', title: 'Filing & Decrees', description: 'Submitting joint petitions for mutual divorce or protecting rights in contested matters.' }
    ],
    faq: [
      { question: 'How is child custody decided in mutual-consent divorces?', answer: 'The child\'s welfare is the absolute paramount consideration. Parents can agree on joint, sole, or shared custody with detailed visiting terms.' },
      { question: 'What is the mandatory cooling-off period for mutual divorce?', answer: 'The Supreme Court can waive the 6-month statutory waiting period under Section 13B(2) if all disputes are completely settled.' }
    ],
    ctaText: 'Initiate Confidential Family Advisory',
    trustSignals: ['Certified family mediation specialists', 'Strict privacy guarantee', 'Sensitive dispute specialists']
  },
  {
    id: 'property-law',
    title: 'Property Law & Due Diligence',
    group: 'individuals-families',
    shortDesc: 'Property title verification, RERA compliance check, and land registry searches in India.',
    fullDesc: 'Thorough Property Title Due Diligence and Land Registry Checks. High-value property acquisitions require rigorous legal checks to identify and prevent potential ownership disputes. Nityaprabha Law Chambers provides comprehensive property due diligence, performing exhaustive searches of land registry records and verifying builder compliance under RERA. The firm\'s property lawyers draft clear sale deeds, resolve complex title disputes, and advise on land acquisition compliance across India.',
    painPointNarrative: 'Purchasing disputed land, facing project builder delays, or title discrepancies on old properties.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=85&w=1600',
    statutoryRoadmap: [
      { step: '01', title: 'Title Search', description: '30-year backward search of Sub-Registrar records to clear any hidden encumbrances.' },
      { step: '02', title: 'Compliance Check', description: 'Verifying builder layout plans, RERA registration, and utility NOCs.' },
      { step: '03', title: 'Conveyance Drafting', description: 'Drafting robust agreements to sell and sale deeds protecting buyer interests.' }
    ],
    faq: [
      { question: 'How do I verify a property\'s title before purchasing?', answer: 'We request the chain of sale deeds, mutation records, and run land registry searches to verify mutation entries and non-encumbrance status.' },
      { question: 'Can a homebuyer file a case against a delayed project under RERA?', answer: 'Yes, RERA allows buyers to claim full refunds with interest or compel builders to pay monthly delay compensation under Section 18.' }
    ],
    ctaText: 'Initiate Property Title Search',
    trustSignals: ['Multi-crore transaction clearances', 'RERA panel listings', '30-Year backward database access']
  },
  {
    id: 'cheque-bounce',
    title: 'Negotiable Instruments (Cheque Bounce)',
    group: 'individuals-families',
    shortDesc: 'Fast-track recovery of outstanding debts under Section 138 of the NI Act.',
    fullDesc: 'Fast-Track Recovery Actions Under Section 138 of the NI Act. Financial disputes involving dishonored cheques require immediate and strategic action under the Negotiable Instruments Act. Nityaprabha Law Chambers provides swift and thorough legal services for recovery actions, representing both payees seeking compensation and drawers defending against claims. The firm\'s advocates ensure that demand notices are drafted and served within the mandatory 30-day period, and complaints are filed in the correct jurisdictional courts following recent Supreme Court precedents.',
    painPointNarrative: 'Outstanding business debts and bad dues due to dishonored cheques, affecting business cash flows.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800',
    heroImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=85&w=1600',
    statutoryRoadmap: [
      { step: '01', title: 'Demand Notice', description: 'Serving a formal, legally structured notice within 30 days of cheque bounce.' },
      { step: '02', title: 'Complaint Drafting', description: 'Preparing the criminal complaint under Section 138 if no payment is received in 15 days.' },
      { step: '03', title: 'Summary Trials', description: 'Filing complaints in designated metropolitan magistrates and seeking interim compensation.' }
    ],
    faq: [
      { question: 'Where should I file a cheque bounce case after recent rulings?', answer: 'The case must be filed in the court holding jurisdiction over the specific bank branch where the payee holds their account and deposits the cheque.' },
      { question: 'What is the penalty for a Section 138 NI Act conviction?', answer: 'It can result in imprisonment up to two years, a fine up to double the cheque amount, or both.' }
    ],
    ctaText: 'Request Cheque Recovery Review',
    trustSignals: ['30-Day statutory compliance tracking', 'Over 5Cr+ recovered successfully', 'Fast-track summary trial expertise']
  },
  {
    id: 'cyber-law',
    title: 'Cyber Law & DPDP Act Compliance',
    group: 'individuals-families',
    shortDesc: 'Comprehensive alignment under the new Digital Personal Data Protection Act 2023.',
    fullDesc: 'Proactive Corporate Compliance Under the DPDP Act 2023. Protecting corporate data and ensuring compliance with emerging data privacy laws are essential for modern business operations. Nityaprabha Law Chambers provides comprehensive cyber law advisory, helping companies align their operations with the strict requirements of the Digital Personal Data Protection Act 2023. The firm\'s cyber security lawyers audit data management policies, draft clear privacy terms, and represent clients in data breach and cyber fraud disputes.',
    painPointNarrative: 'Violations of the DPDP Act 2023 causing massive fines. Data leaks and data management audits triggering regulatory reviews.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    heroImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=85&w=1600',
    statutoryRoadmap: [
      { step: '01', title: 'Data Inventory Mapping', description: 'Identifying all points of personal data collections, storage, and processors.' },
      { step: '02', title: 'Consent Architecture', description: 'Drafting un-ticked, unambiguous multi-lingual consent notices and privacy notices.' },
      { step: '03', title: 'Security Audits', description: 'Deploying security protocols, NDAs for vendors, and establishing data retention norms.' }
    ],
    faq: [
      { question: 'What is my company\'s liability under the DPDP Act 2023?', answer: 'Firms can face severe financial penalties up to ₹250 Crores for failing to prevent data breaches or processing data without valid, active consent.' },
      { question: 'Do startups have any relaxation under the DPDP Act?', answer: 'The Board may exempt certain startups based on data volume, but basic security, consent, and user-right mechanisms remain mandatory.' }
    ],
    ctaText: 'Request Cyber Compliance Audit',
    trustSignals: ['DPDP certified audit pathways', 'Data protection officer templates', 'Secure cloud verification']
  },
  {
    id: 'corporate-startup-advisory',
    title: 'Startup & Corporate Legal Advisory',
    group: 'cross-cutting',
    shortDesc: 'Entity incorporation, equity structuring, and fundraising regulatory clearances.',
    fullDesc: 'End-to-End Compliance and Equity Management for Startups. From initial incorporation to complex funding rounds, startups require clear and strategic legal support. Nityaprabha Law Chambers provides comprehensive corporate advisory, helping founders draft co-founder agreements, manage compliance, and navigate fundraising transactions with ease. The firm\'s corporate lawyers provide essential legal protection, allowing founders to focus on growing their business with absolute peace of mind.',
    painPointNarrative: 'Founder disputes over equity, poorly structured term sheets, and complex corporate governance defaults.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=85&w=1600',
    statutoryRoadmap: [
      { step: '01', title: 'Entity Selection', description: 'Choosing Pvt Ltd, LLP, or alternative frameworks with clear tax benefits.' },
      { step: '02', title: 'Equity Pool Allocation', description: 'Drafting Co-Founder Vesting, ESOP plans, and structuring board seats.' },
      { step: '03', title: 'Funding Advisory', description: 'Reviewing Shareholder Agreements (SHA) and term sheets for Series funding.' }
    ],
    faq: [
      { question: 'What compliance requirements apply to early-stage startups?', answer: 'Essential compliances include statutory filings with ROC, GST audits, PF/ESIC registrations, and maintaining a strict registry of directors.' },
      { question: 'What is founder vesting and why is it crucial?', answer: 'Vesting protects the startup by ensuring founders earn their equity over 3 to 4 years, preventing early departures from taking massive equity.' }
    ],
    ctaText: 'Access Startup Onboarding Brief',
    trustSignals: ['Incubator network support', '100+ startups structured', 'Term-sheet benchmark database']
  },
  {
    id: 'contract-drafting',
    title: 'Contract Drafting & Review',
    group: 'cross-cutting',
    shortDesc: 'Meticulous, legally defensible agreements to safeguard business operations.',
    fullDesc: 'Drafting Meticulous, Legally Defensible Agreements. Clear, well-drafted contracts are the foundation of successful business operations and the primary tool to prevent litigation. Nityaprabha Law Chambers drafts, reviews, and negotiates legally defensible agreements tailored to your specific commercial needs. The firm\'s corporate attorneys draft comprehensive software licensing agreements, partnership terms, and vendor contracts, ensuring absolute clarity and protection for your business.',
    painPointNarrative: 'Relying on loose templates causing structural gaps, loopholes, and expensive court litigation.',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800',
    heroImage: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=85&w=1600',
    forums: ['Arbitration Tribunals', 'Commercial Courts', 'High Court of Delhi'],
    statutoryRoadmap: [
      { step: '01', title: 'Intent Definition', description: 'Analyzing the specific business goals, operational liabilities, and deal parameters.' },
      { step: '02', title: 'Pristine Drafting', description: 'Crafting custom clauses for indemnity, termination, force majeure, and dispute venues.' },
      { step: '03', title: 'Advisory Review', description: 'Detailed redlining, risk mapping, and negotiating on behalf of the client.' }
    ],
    faq: [
      { question: 'What are the essential clauses of a SaaS service agreement?', answer: 'Core clauses include SLA commitments, data protection/DPDP covenants, intellectual property reservation, and limitation of liability caps.' },
      { question: 'Why is a boiler-plate contract template dangerous?', answer: 'Templates ignore specific Indian statutory provisions, such as Section 28 of the Contract Act, which can render dispute resolution clauses void.' }
    ],
    ctaText: 'Request Agreement Review Brief',
    trustSignals: ['Volume of B2B contracts drafted', 'Expert redlining frameworks', 'Zero litigation loophole guarantee']
  },
  {
    id: 'legal-opinions',
    title: 'Legal Opinions & Risk Assessment',
    group: 'cross-cutting',
    shortDesc: 'Formal written opinions citing statutory precedents to de-risk key business decisions.',
    fullDesc: 'Clear, Objective Legal Assessments to Mitigate Regulatory Risk. Making critical business decisions requires a clear, objective analysis of potential legal and regulatory risks. Nityaprabha Law Chambers provides thorough legal opinions, analyzing complex statutory provisions and evaluating potential exposure under current laws. The firm\'s advocates compile exhaustive, cited legal analyses to help corporate boards make informed decisions with absolute confidence.',
    painPointNarrative: 'Making expensive board investments or entry strategies under regulatory ambiguity or legal uncertainty.',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800',
    heroImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=85&w=1600',
    forums: ['Corporate Boards', 'Independent Director Committees', 'Banking Consortiums'],
    statutoryRoadmap: [
      { step: '01', title: 'Query Analysis', description: 'Capturing precise regulatory queries and commercial transaction maps.' },
      { step: '02', title: 'Precedent Research', description: 'Deep-dive searches of High Court and Supreme Court rulings.' },
      { step: '03', title: 'Opinion compilation', description: 'Drafting formal, cited, board-ready written legal opinion documents.' }
    ],
    faq: [
      { question: 'How do I secure a legal opinion to mitigate regulatory risk?', answer: 'Provide our team with the full transaction background. We compile a written briefing citing specific statutory provisions and Supreme Court precedents.' },
      { question: 'Is a legal opinion binding on authorities?', answer: 'No, but it establishes due diligence and protects directors from liabilities by proving decisions were made on expert counsel.' }
    ],
    ctaText: 'Secure Written Opinion Intake',
    trustSignals: ['Citations of relevant rulings', 'Board-ready analytical briefs', 'Partner-led research validation']
  },
  {
    id: 'due-diligence',
    title: 'M&A Due Diligence Checks',
    group: 'cross-cutting',
    shortDesc: 'Comprehensive legal audit of corporate entities prior to mergers and acquisitions.',
    fullDesc: 'Comprehensive Due Diligence Checks to Protect Your M&A Transactions. Mergers, acquisitions, and high-value partnerships require rigorous due diligence to identify hidden legal liabilities and verify compliance. Nityaprabha Law Chambers performs thorough due diligence reviews, auditing corporate structures, transaction records, and regulatory compliance. The firm compiles detailed due diligence reports to help businesses protect their investments and negotiate with complete confidence.',
    painPointNarrative: 'Acquiring an entity with hidden tax liabilities, active labor court cases, or defective IP chains.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
    heroImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=85&w=1600',
    statutoryRoadmap: [
      { step: '01', title: 'Data Room Set-Up', description: 'Creating secure repositories for all financial, corporate, and statutory documents.' },
      { step: '02', title: 'Compliance Audit', description: 'Reviewing statutory filings, ROC registers, employment contracts, and IP registries.' },
      { step: '03', title: 'Risk Reporting', description: 'Drafting a structured Red Flag Due Diligence report outlining all liabilities.' }
    ],
    faq: [
      { question: 'What is included in a full legal due diligence report?', answer: 'It covers corporate standing, licensing compliance, active litigation lists, employee liabilities, tax outstanding checks, and material contract reviews.' },
      { question: 'How long does corporate due diligence take?', answer: 'Depending on company size, a thorough corporate audit takes between 2 to 4 weeks to complete.' }
    ],
    ctaText: 'Order Corporate Due Diligence',
    trustSignals: ['De-identified deal value totals', 'Rigorous red-flag frameworks', 'M&A legal specialists']
  },
  {
    id: 'legal-research',
    title: 'Legal Research & Strategy',
    group: 'cross-cutting',
    shortDesc: 'Deep statutory research to support complex multi-jurisdictional litigation.',
    fullDesc: 'Exhaustive Research to Support Complex Litigation and Transactions. Resolving complex, multi-jurisdictional legal challenges requires meticulous statutory research and strategic planning. Nityaprabha Law Chambers provides exhaustive research services, analyzing legal precedents and designing robust strategies to support complex disputes. The firm\'s legal strategists compile thorough legal analyses, helping clients build strong, well-prepared cases before major tribunals.',
    painPointNarrative: 'Entering high-stakes arbitration or litigation without a water-tight, precedent-backed statutory strategy.',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800',
    heroImage: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=85&w=1600',
    forums: ['Supreme Court Constitution Benches', 'Law Commission of India Forums', 'International Arbitrations'],
    statutoryRoadmap: [
      { step: '01', title: 'Stat statutory Analysis', description: 'Evaluating the precise statutory provisions, rules, and circulars in play.' },
      { step: '02', title: 'Precedent Mapping', description: 'Reviewing the evolution of relevant case laws to identify winning arguments.' },
      { step: '03', title: 'Briefing Preparation', description: 'Preparing detailed legal briefs to assist the senior arguing counsel in court.' }
    ],
    faq: [
      { question: 'How do I build a cross-border litigation strategy?', answer: 'We evaluate jurisdictions, check reciprocal enforcement treaties under Section 44A CPC, and draft strategies to target global assets.' },
      { question: 'What databases are used for Indian legal research?', answer: 'We utilize premium resources like SCC Online, Manupatra, and live High Court/Supreme Court order databases for real-time tracking.' }
    ],
    ctaText: 'Contact Chief Legal Strategist',
    trustSignals: ['Academic publication database', 'Real-time precedent tracking', 'Partners on peer-review journals']
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'trademark-distinctiveness',
    title: 'A Guide to Section 3 of the Indian Trade Marks Act: Distinctiveness vs. Descriptiveness',
    category: 'Intellectual Property',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
    summary: 'An analytical review of the statutory boundaries of brand name selection under Section 9 and 11, exploring key judicial precedents on descriptive marks.',
    content: `Section 9 of the Trade Marks Act 1999 places absolute grounds for refusal of trademark registrations, specifically targeting marks that are devoid of any distinctive character, or consist exclusively of marks or indications which serve in trade to designate the kind, quality, quantity, intended purpose, or geographical origin of the goods or services.

Conversely, a trademark is highly distinct when it is arbitrary, fanciful, or coined (e.g., Kodak). When selecting a brand name in India, businesses frequently make the error of choosing highly descriptive terms to describe their business, leading to mandatory examination objections from the Trademark Registry.

This guide explores how the High Courts and the Supreme Court of India have interpreted the boundary of distinctiveness, analyzing the doctrine of "acquired distinctiveness" under the proviso to Section 9(1). Under this framework, if a mark has acquired a secondary meaning through extensive, continuous, and long-standing use prior to the date of application, it can bypass the absolute bar to registration.`,
    author: 'Advocate Kapil Dev Vishwakarma',
    authorTitle: 'Managing Partner (IPR)',
    date: 'July 12, 2026',
    readTime: '6 Min Read'
  },
  {
    id: 'dpdp-startups-compliance',
    title: 'Managing Business Data Protection under the DPDP Act 2023',
    category: 'Cyber Law',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    summary: 'An essential compliance roadmap for Indian tech startups and corporate boards, highlighting consent mechanisms and data localization protocols.',
    content: `The Digital Personal Data Protection (DPDP) Act 2023 represents a paradigm shift in how corporate entities process personal data of digital users (referred to as "Data Principals"). Tech startups, which frequently collect massive volumes of consumer metrics, must establish water-tight, secure data-handling workflows to avoid severe financial penalties.

A critical requirement under Section 6 of the DPDP Act is securing clear, specific, unconditional, and unambiguous consent. The consent notice must be presented in clear and plain language and must be available in multiple regional languages. Pre-ticked checkboxes or hidden clauses in terms-of-use will be treated as invalid.

Additionally, startups must appoint Data Protection Officers (DPO), establish data erasure schedules upon completion of purpose, and deploy encrypted storage infrastructure. This article maps out the step-by-step organizational restructuring required for startups to align with the new Board guidelines.`,
    author: 'Advocate Kunal Murari',
    authorTitle: 'Equity Partner (Corporate & Tax Advisory)',
    date: 'October 28, 2026',
    readTime: '8 Min Read',
    statutoryRef: 'Digital Personal Data Protection Act 2023; CERT-In Directions 2022',
    downloadable: true
  },
  {
    id: 'fema-cross-border-startup-funding',
    title: 'FEMA & Cross-Border Capital Structuring: FDI Inflow Compliance & Valuation Norms',
    category: 'International & Corporate Law',
    type: 'memo',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800',
    summary: 'A critical advisory note for corporate boards on convertible notes, downstream investments, and single-master form (SMF) reporting under RBI regulations.',
    content: `Cross-border investments into Indian entities require rigorous adherence to the Foreign Exchange Management Act (FEMA 1999) and Foreign Direct Investment (FDI) pricing guidelines. Under the automatic route, pricing of equity shares or compulsorily convertible instruments issued to foreign residents must adhere strictly to internationally accepted pricing methodologies (DCF) certified by a Chartered Accountant or SEBI-registered Merchant Banker.

Furthermore, entities receiving foreign inward remittances must file Form FC-GPR on the RBI FIRMS portal within 30 days of share allotment. Failure to file triggers heavy compounding penalties under Section 15 of FEMA.

This statutory memorandum reviews the legal framework for hybrid debt-equity instruments, offshore founder flipping restrictions, and regulatory defenses available during RBI scrutiny proceedings.`,
    author: 'Advocate Kunal Murari',
    authorTitle: 'Equity Partner (Corporate, International & Tax)',
    date: 'November 10, 2026',
    readTime: '7 Min Read',
    statutoryRef: 'FEMA (Non-debt Instruments) Rules 2019; RBI Master Direction No. 11',
    downloadable: true
  },
  {
    id: 'property-due-diligence-delhi',
    title: 'Verifying Property Titles in Delhi NCR: A Legal Due Diligence Guide',
    category: 'Property Law',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    summary: 'A comprehensive checklist for commercial real estate acquisitions, explaining land registry search protocols and mutation checks.',
    content: `Purchasing land or commercial property in Delhi NCR represents a high-capital investment that carries significant legal risks of ownership disputes. A primary safeguard is performing a meticulous, 30-year backward title search of land registry records to establish a clean chain of conveyance.

This guide outlines the core documents required for complete property clearance, including Mutated Title Records, Non-Encumbrance Certificates (Form 15), Layout approvals from DDA/MCD, and verification of RERA registration for under-construction projects.

We analyze Section 54 of the Transfer of Property Act and explain how latent ownership claims by family heirs or pending litigation (doctrine of Lis Pendens) can compromise a transaction, establishing why formal due diligence audits are a non-negotiable step prior to signing sale agreements.`,
    author: 'Rohan Malhotra',
    authorTitle: 'Senior Counsel',
    date: 'May 15, 2026',
    readTime: '7 Min Read'
  }
];

export const GENERAL_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'ip',
    question: 'What constitute the jurisdictional boundaries for filing a trademark infringement action in India?',
    answer: 'Under Section 134 of the Trade Marks Act 1999, a trademark infringement suit can be filed in the District Court or High Court having jurisdiction over the location where the plaintiff (the registered trademark owner) actually resides, works, or carries on business. This provides a significant legal advantage, as the plaintiff is not required to file the suit in the location where the infringer is based or where the infringement occurred.'
  },
  {
    id: 'faq-2',
    category: 'corporate',
    question: 'How does the Digital Personal Data Protection (DPDP) Act 2023 affect data management for Indian startups?',
    answer: 'The DPDP Act 2023 requires all startups and corporate entities to secure clear, unconditional consent before processing any personal data. Companies must establish secure data-handling workflows, appoint data protection officers, and provide clear mechanisms for users to withdraw consent. Non-compliance can result in severe financial penalties up to ₹250 Crores under the Act.'
  },
  {
    id: 'faq-3',
    category: 'litigation',
    question: 'What are the essential legal requirements to successfully file a cheque bounce case under the NI Act?',
    answer: 'To initiate a successful proceeding under Section 138 of the Negotiable Instruments Act, the payee must serve a formal demand notice to the drawer within 30 days of receiving the cheque return memo from the bank. If the drawer fails to make the payment within 15 days of receiving the notice, the payee must file a formal complaint in the jurisdictional court within the subsequent 30-day period.'
  }
];

export const RESOURCES: ResourceItem[] = [
  {
    id: 'ip-audit-playbook',
    title: 'The Corporate Intellectual Property Audit Playbook',
    type: 'playbook',
    description: 'A comprehensive, partner-vetted guide outlining how to discover, categorize, and protect your digital and brand assets in India.',
    gated: true,
    fileSize: '3.4 MB'
  },
  {
    id: 'property-diligence-checklist',
    title: 'The Commercial Property Acquisition Due Diligence Checklist',
    type: 'checklist',
    description: 'A 45-point checklist designed for corporate boards acquiring industrial or commercial land in Delhi NCR, detailing statutory NOCs.',
    gated: true,
    fileSize: '1.2 MB'
  },
  {
    id: 'startup-founders-guide',
    title: 'The Startup Founders Legal and Regulatory Guide',
    type: 'guide',
    description: 'Step-by-step regulatory roadmap covering founder equity vesting, SHA drafting clauses, and compliance under DPDP and FEMA.',
    gated: true,
    fileSize: '5.1 MB'
  },
  {
    id: 'cyber-incident-checklist',
    title: 'The Corporate Cyber Incident Response Checklist',
    type: 'checklist',
    description: 'Compliant framework under CERT-In and the DPDP Act 2023 for reporting and mitigating data breaches within legal timelines.',
    gated: false,
    fileSize: '850 KB'
  }
];
