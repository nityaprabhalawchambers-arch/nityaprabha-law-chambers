import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Scale, Globe, ExternalLink, Navigation } from 'lucide-react';
import InquiryForm from '../components/InquiryForm';

export default function Contact() {
  const offices = [
    {
      city: 'New Delhi (Main Chambers)',
      address: 'UG Floor, Barakhamba Road, Connaught Place, New Delhi, 110001',
      phone: '+91 82870 66868',
      email: 'nityaprabhalawchambers@gmail.com',
      hours: 'Mon - Fri: 09:30 AM - 18:30 PM (IST)',
      mapQuery: 'Barakhamba+Road+Connaught+Place+New+Delhi'
    },
    {
      city: 'Mumbai Desk',
      address: 'Naman Centre, G-Block, Bandra Kurla Complex, Mumbai, 400051',
      phone: '+91 82870 66868',
      email: 'nityaprabhalawchambers@gmail.com',
      hours: 'Mon - Fri: 09:30 AM - 18:30 PM (IST)',
      mapQuery: 'Bandra+Kurla+Complex+Mumbai'
    }
  ];

  return (
    <div className="bg-[#030712] text-[#BABDC0] pt-28 pb-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16 font-sans">
          <span className="font-mono text-[10px] uppercase tracking-widest text-gold font-bold">
            Secured Portal Desk
          </span>
          <h1 className="font-display text-3xl font-extrabold gold-gradient-text sm:text-4xl uppercase tracking-wide">
            Initiate a Secure Inquiry
          </h1>
          <p className="text-xs sm:text-sm leading-relaxed text-[#BABDC0] font-sans">
            Connect with Nityaprabha Law Chambers to arrange a confidential review of your litigation, intellectual property, or corporate advisory needs.
          </p>
        </div>

        {/* Dual Grid Layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          
          {/* Left Column: Inquiry Form & Legal notice */}
          <div className="lg:col-span-7 space-y-8 font-sans">
            {/* Regulatory Notice */}
            <div className="rounded-2xl glass-card p-6 space-y-3.5 text-justify gold-border-glow shadow-xl border border-gold/20">
              <h3 className="font-display text-xs font-bold uppercase tracking-wider gold-gradient-text flex items-center gap-2">
                <ShieldCheck className="h-4.5 w-4.5 text-gold shrink-0" />
                Informational Notice prior to submitting files
              </h3>
              <p className="text-xs leading-relaxed text-[#BABDC0] font-sans">
                Please review and acknowledge the parameters below before sending sensitive case documents. Communicating through this portal does not establish a formal advocate-client relationship. The firm processes all personal data in strict compliance with the Digital Personal Data Protection Act 2023.
              </p>
            </div>

            {/* Embedded intake form */}
            <InquiryForm embedded={true} />
          </div>

          {/* Right Column: Office coordinates (NAP) & maps */}
          <div className="lg:col-span-5 space-y-8 font-sans">
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white border-b border-gold/20 pb-3 flex items-center gap-2">
              <Globe className="h-5 w-5 text-gold" />
              Office Chambers Locations
            </h3>

            {/* Offices List */}
            <div className="space-y-6 font-sans">
              {offices.map((off, idx) => {
                const officeImages = [
                  'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=800', // New Delhi Connaught Place / Barakhamba
                  'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&q=80&w=800'  // Mumbai BKC
                ];
                return (
                  <div key={idx} className="rounded-2xl glass-card glass-card-hover overflow-hidden shadow-xl border border-gold/20 group">
                    <div className="relative h-32 w-full overflow-hidden border-b border-gold/15">
                      <img
                        src={officeImages[idx % officeImages.length]}
                        alt={off.city}
                        className="w-full h-full object-cover filter brightness-85 contrast-110 group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-transparent" />
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between z-10">
                        <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
                          {off.city}
                        </h4>
                        <a
                          href={`https://maps.google.com/?q=${off.mapQuery}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider bg-black/75 px-2.5 py-1 rounded border border-gold/30 text-gold hover:text-white transition backdrop-blur-sm"
                        >
                          <Navigation className="h-3 w-3" />
                          <span>Directions</span>
                        </a>
                      </div>
                    </div>

                    <div className="p-5 space-y-3 text-xs text-[#BABDC0]">
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                        <span className="font-sans">{off.address}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-4 w-4 text-gold shrink-0" />
                        <a href={`tel:${off.phone.replace(/\s+/g, '')}`} className="text-gold font-bold hover:underline transition">
                          {off.phone}
                        </a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="h-4 w-4 text-gold shrink-0" />
                        <a href={`mailto:${off.email}`} className="text-gold font-bold hover:underline transition">
                          {off.email}
                        </a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-4 w-4 text-gold shrink-0" />
                        <span className="font-mono text-[10px] uppercase tracking-wide text-[#A2A6A5]">{off.hours}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Interactive Map Container */}
            <div className="rounded-2xl glass-card p-6 text-center space-y-4 relative overflow-hidden gold-border-glow shadow-xl border border-gold/20">
              <div className="flex items-center justify-between border-b border-gold/15 pb-3">
                <div className="flex items-center space-x-2">
                  <Scale className="h-4 w-4 text-gold" />
                  <span className="font-display text-xs font-bold text-white uppercase tracking-wider">
                    New Delhi Chambers Proximity
                  </span>
                </div>
                <span className="text-[9px] font-mono text-gold bg-gold/10 px-2 py-0.5 rounded border border-gold/20">
                  Connaught Place
                </span>
              </div>
              <p className="text-xs text-[#BABDC0] text-left font-sans leading-relaxed">
                Situated at Barakhamba Road, Connaught Place, offering rapid physical access to the <strong>Supreme Court of India</strong> (7 mins), <strong>High Court of Delhi</strong> (10 mins), <strong>Patiala House Courts</strong>, and <strong>National Company Law Tribunal (NCLT)</strong>.
              </p>
              
              <div className="rounded-xl overflow-hidden border border-gold/30 h-44 relative bg-black/60 shadow-inner">
                <iframe
                  title="Chambers Location Map"
                  src="https://maps.google.com/maps?q=Barakhamba+Road+Connaught+Place+New+Delhi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter invert-[0.9] hue-rotate-[180deg] contrast-[1.2] opacity-80 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              </div>

              <div className="pt-2 text-center">
                <a
                  href="https://maps.google.com/?q=Barakhamba+Road+Connaught+Place+New+Delhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-gold-light via-gold to-gold-dark px-5 py-2.5 font-mono text-[10px] font-bold uppercase tracking-wider text-deep-bg shadow-md shadow-gold/20 hover:brightness-110 transition"
                >
                  <Navigation className="h-3.5 w-3.5" />
                  <span>Open Full Navigation Route</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
