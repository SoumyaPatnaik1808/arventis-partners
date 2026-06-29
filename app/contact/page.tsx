'use client';

import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Globe, Compass, MessageSquare, ArrowUpRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

// Custom component to reveal text word-by-word with a calming stagger
function RevealHeading({ children, className = "" }: { children: string; className?: string }) {
  const words = children.split(' ');
  return (
    <span className={`reveal-text flex flex-wrap gap-x-2 gap-y-1 ${className}`}>
      {words.map((word, idx) => (
        <span key={idx} className="reveal-text-line inline-block overflow-hidden">
          <span
            className="reveal-text-word"
            style={{ transitionDelay: `${idx * 0.04}s` }}
          >
            {word}
          </span>
        </span>
      ))}
    </span>
  );
}

export default function ContactPage() {
  const [reachOutFor, setReachOutFor] = useState<'Legal' | 'Consulting' | 'Both'>('Both');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeOffice, setActiveOffice] = useState<'hyderabad' | 'lucknow' | 'cuttack' | 'shimla'>('hyderabad');

  const offices = [
    {
      id: 'hyderabad',
      city: 'Hyderabad',
      title: 'Hyderabad Office',
      address: [
        'House No 8-3-A/413, Krishna Nagar,',
        'Yusufguda, Hyderabad, Telangana'
      ],
      phone: '+91 (40) 6600 0000',
      mapSrc: 'https://maps.google.com/maps?q=Krishna%20Nagar,%20Yusufguda,%20Hyderabad&t=&z=15&ie=UTF8&iwloc=&output=embed',
      googleMapsUrl: 'https://maps.google.com/?q=Krishna+Nagar,+Yusufguda,+Hyderabad'
    },
    {
      id: 'lucknow',
      city: 'Lucknow',
      title: 'Lucknow Office',
      address: [
        '110, First Floor Durgma Tower,',
        'Lalbagh, Lucknow, Uttar Pradesh'
      ],
      phone: '+91 (522) 4000 000',
      mapSrc: 'https://maps.google.com/maps?q=Durgma%20Tower,%20Lalbagh,%20Lucknow&t=&z=15&ie=UTF8&iwloc=&output=embed',
      googleMapsUrl: 'https://maps.google.com/?q=Durgma+Tower,+Lalbagh,+Lucknow'
    },
    {
      id: 'cuttack',
      city: 'Cuttack',
      title: 'Cuttack Office',
      address: [
        'Plot No C/71, Sector 8,',
        'CDA, Cuttack, Odisha'
      ],
      phone: '+91 (671) 2000 000',
      mapSrc: 'https://maps.google.com/maps?q=Sector%208,%20CDA,%20Cuttack&t=&z=15&ie=UTF8&iwloc=&output=embed',
      googleMapsUrl: 'https://maps.google.com/?q=Sector+8,+CDA,+Cuttack'
    },
    {
      id: 'shimla',
      city: 'Shimla',
      title: 'Shimla Office',
      address: [
        'Anoop Sood Building, Paras Dass Gardan,',
        'Near CPRI, Shimla - 171001, Himachal Pradesh'
      ],
      phone: '+91 (177) 2000 000',
      mapSrc: 'https://maps.google.com/maps?q=CPRI,%20Shimla&t=&z=15&ie=UTF8&iwloc=&output=embed',
      googleMapsUrl: 'https://maps.google.com/?q=CPRI,+Shimla'
    }
  ];

  const currentOffice = offices.find((o) => o.id === activeOffice) || offices[0];

  // Intersection Observer for scroll-triggered entrance animations
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const revealElements = document.querySelectorAll('.scroll-fade-up, .reveal-text');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('scroll-fade-up')) {
              entry.target.classList.add('scroll-fade-up-active');
            } else if (entry.target.classList.contains('reveal-text')) {
              entry.target.classList.add('reveal-text-active');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="relative w-full overflow-hidden bg-primary-navy text-white">
      
      {/* Shared Navigation Bar */}
      <Navbar />

      {/* 1. HERO HEADER */}
      <section className="relative w-full  pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-16 border-b border-white/5">
        <div className="max-w-7xl mx-auto relative z-10">
       
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-normal text-white mb-6">
            <RevealHeading>LET'S GET IN TOUCH!</RevealHeading>
          </h1>
          <p className="scroll-fade-up font-sans text-sm sm:text-base md:text-lg text-white/70 font-light leading-relaxed max-w-3xl transition-delay-300">
            Whether you need legal counsel, strategic advisory, or both — tell us what you are working on and we will route it to the right partner.
          </p>
        </div>
      </section>

      {/* 2. SPLIT LAYOUT: FORM & DETAILS */}
      <section className="relative w-full bg-bg-warm py-20 md:py-28 px-6 md:px-16 text-primary-navy">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Left 7 Columns: Contact Form */}
            <div className="lg:col-span-7">
              <div className="scroll-fade-up p-8 sm:p-10 md:p-12 bg-white/70 backdrop-blur-xl border border-white/80 rounded-[2px] shadow-xl hover:shadow-2xl hover:-translate-y-1.5 hover:border-primary-gold/40 transition-all duration-500 ease-out group relative overflow-hidden space-y-8">
                {/* Mouse entrance ambient glow accent */}
                <div className="absolute -top-24 -right-24 w-56 h-56 bg-primary-gold/15 rounded-full blur-3xl group-hover:bg-primary-gold/25 group-hover:scale-125 transition-all duration-700 pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-56 h-56 bg-primary-navy/10 rounded-full blur-3xl group-hover:bg-primary-navy/15 transition-all duration-700 pointer-events-none" />
                
                {isSubmitted ? (
                  <div className="relative z-10 text-center py-12 space-y-4 bg-white/40 backdrop-blur-md border border-primary-navy/10 p-8 rounded-[1px]">
                    <div className="w-16 h-16 bg-primary-navy/5 border border-primary-navy rounded-full flex items-center justify-center mx-auto text-primary-navy mb-6 animate-pulse">
                      <Compass className="w-8 h-8 text-primary-gold" />
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl text-primary-navy font-light">Mandate Received</h3>
                    <p className="font-sans text-xs md:text-sm text-primary-navy/70 max-w-md mx-auto leading-relaxed">
                      Thank you. Your inquiry has been secured. It will be routed directly to Suman Thakur (Legal) or Anshuman Mohanty (Consulting) based on your classification parameters.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 inline-flex justify-center bg-transparent hover:bg-primary-navy hover:text-white text-primary-navy text-xs font-semibold tracking-widest uppercase border border-primary-navy/20 px-6 py-3 transition-all duration-300 hover-target"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl text-primary-navy font-light tracking-tight mb-2">
                        Submit Secure Enquiry
                      </h3>
                      <p className="font-sans text-[10px] md:text-xs text-primary-navy/60 leading-relaxed font-light mb-6">
                        All communications are processed under strict NDA protocols.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-sans text-[10px] tracking-[0.2em] uppercase text-primary-navy/60 mb-2 font-semibold">
                          Name
                        </label>
                        <input
                          required
                          type="text"
                          className="w-full bg-white/60 backdrop-blur-sm border border-primary-navy/15 px-4 py-3 text-xs md:text-sm text-primary-navy placeholder:text-primary-navy/35 focus:bg-white focus:outline-none focus:border-primary-gold focus:shadow-sm transition-all duration-300 font-sans"
                          placeholder="Your name or entity"
                        />
                      </div>

                      <div>
                        <label className="block font-sans text-[10px] tracking-[0.2em] uppercase text-primary-navy/60 mb-2 font-semibold">
                          Organisation <span className="text-primary-navy/40 font-normal">(Optional)</span>
                        </label>
                        <input
                          type="text"
                          className="w-full bg-white/60 backdrop-blur-sm border border-primary-navy/15 px-4 py-3 text-xs md:text-sm text-primary-navy placeholder:text-primary-navy/35 focus:bg-white focus:outline-none focus:border-primary-gold focus:shadow-sm transition-all duration-300 font-sans"
                          placeholder="Organisation name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-sans text-[10px] tracking-[0.2em] uppercase text-primary-navy/60 mb-2 font-semibold">
                          Email address
                        </label>
                        <input
                          required
                          type="email"
                          className="w-full bg-white/60 backdrop-blur-sm border border-primary-navy/15 px-4 py-3 text-xs md:text-sm text-primary-navy placeholder:text-primary-navy/35 focus:bg-white focus:outline-none focus:border-primary-gold focus:shadow-sm transition-all duration-300 font-sans"
                          placeholder="email@domain.com"
                        />
                      </div>

                      <div>
                        <label className="block font-sans text-[10px] tracking-[0.2em] uppercase text-primary-navy/60 mb-2 font-semibold">
                          Phone number
                        </label>
                        <input
                          required
                          type="tel"
                          className="w-full bg-white/60 backdrop-blur-sm border border-primary-navy/15 px-4 py-3 text-xs md:text-sm text-primary-navy placeholder:text-primary-navy/35 focus:bg-white focus:outline-none focus:border-primary-gold focus:shadow-sm transition-all duration-300 font-sans"
                          placeholder="+91 99000 00000"
                        />
                      </div>
                    </div>

                    {/* Radio Cards for Reach Out Objective */}
                    <div>
                      <label className="block font-sans text-[10px] tracking-[0.2em] uppercase text-primary-navy/60 mb-3 font-semibold">
                        I am reaching out for
                      </label>
                      <div className="flex gap-2 sm:gap-3">
                        {(['Legal', 'Consulting', 'Both'] as const).map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => setReachOutFor(option)}
                            className={`flex-1 text-center py-3 text-[10px] md:text-xs font-semibold tracking-wider uppercase border transition-all duration-300 ${
                              reachOutFor === option
                                ? 'bg-primary-navy border-primary-navy text-white font-bold shadow-md'
                                : 'bg-white/50 border-primary-navy/15 text-primary-navy/70 hover:text-primary-navy hover:border-primary-navy/45 hover:bg-white'
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block font-sans text-[10px] tracking-[0.2em] uppercase text-primary-navy/60 mb-2 font-semibold">
                        Message
                      </label>
                      <textarea
                        required
                        rows={4}
                        className="w-full bg-white/60 backdrop-blur-sm border border-primary-navy/15 px-4 py-3 text-xs md:text-sm text-primary-navy placeholder:text-primary-navy/35 focus:bg-white focus:outline-none focus:border-primary-gold focus:shadow-sm transition-all duration-300 font-sans resize-none"
                        placeholder="Please describe the parameters of your enquiry..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary-navy hover:bg-primary-gold-dark text-white text-xs font-semibold tracking-[0.2em] uppercase py-4 transition-all duration-300 hover-target shadow-lg hover:shadow-xl"
                    >
                      Start the Conversation
                    </button>
                  </form>
                )}

              </div>
            </div>

            {/* Right 5 Columns: Offices & Direct Contacts */}
            <div className="lg:col-span-5 space-y-12">
              
              {/* Office Details */}
              <div className="scroll-fade-up space-y-6">
                <span className="font-sans text-[10px] tracking-[0.25em] text-primary-navy/40 uppercase font-bold block">
                  OFFICE LOCATIONS & PRACTICE PRESENCE
                </span>
                
                <div className="space-y-4">
                  {offices.map((off) => (
                    <div key={off.id} className="flex items-start gap-3.5 p-3.5 bg-white/5 border border-primary-navy/10 rounded-[1px]">
                      <MapPin className="w-4 h-4 text-primary-gold flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-serif text-sm font-semibold text-primary-navy">{off.title}</h4>
                        <p className="font-sans text-xs text-primary-navy/75 leading-relaxed font-light mt-0.5">
                          {off.address.join(' ')}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-primary-navy/10 space-y-2">
                  <span className="font-sans text-[9px] tracking-[0.2em] text-primary-navy/40 uppercase font-bold block">
                    PRACTICE FOOTPRINT CITIES
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Delhi', 'Mumbai', 'Pune', 'Shimla', 'Chandigarh', 'Kolkata', 'Hyderabad', 'Lucknow', 'Cuttack'].map((city, idx) => (
                      <span key={idx} className="bg-primary-navy/5 border border-primary-navy/10 px-2 py-0.5 text-[9px] font-semibold text-primary-navy uppercase tracking-wider">
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Direct Contacts */}
              <div className="scroll-fade-up space-y-6">
                <span className="font-sans text-[10px] tracking-[0.25em] text-primary-navy/40 uppercase font-bold block">
                  DIRECT PARTNER CONTACT
                </span>
                
                <div className="space-y-6">
                  {/* Anshuman Mohanty */}
                  <div className="border border-primary-navy/10 p-6 rounded-[1px] space-y-4 bg-white/10 hover:border-primary-navy/20 transition-all duration-300">
                    <div>
                      <span className="font-sans text-[9px] tracking-[0.2em] text-primary-gold font-bold uppercase">
                        STRATEGY CONSULTING
                      </span>
                      <h4 className="font-serif text-lg font-medium text-primary-navy mt-1">
                        Anshuman Mohanty
                      </h4>
                    </div>
                    <div className="space-y-2 font-sans text-xs md:text-sm text-primary-navy/80 font-light">
                      <a href="tel:+919439503900" className="flex items-center gap-3 hover:text-primary-gold transition-colors duration-300">
                        <Phone className="w-4 h-4 text-primary-gold flex-shrink-0" />
                        <span>+91 94395 03900</span>
                      </a>
                      <a href="mailto:mohantyanshuman21@gmail.com" className="flex items-center gap-3 hover:text-primary-gold transition-colors duration-300">
                        <Mail className="w-4 h-4 text-primary-gold flex-shrink-0" />
                        <span>mohantyanshuman21@gmail.com</span>
                      </a>
                    </div>
                  </div>

                  {/* Suman Thakur */}
                  <div className="border border-primary-navy/10 p-6 rounded-[1px] space-y-4 bg-white/10 hover:border-primary-navy/20 transition-all duration-300">
                    <div>
                      <span className="font-sans text-[9px] tracking-[0.2em] text-primary-gold font-bold uppercase">
                        LEGAL PRACTICE
                      </span>
                      <h4 className="font-serif text-lg font-medium text-primary-navy mt-1">
                        Suman Thakur
                      </h4>
                    </div>
                    <div className="flex items-start gap-3 font-sans text-xs md:text-sm text-primary-navy/55 leading-relaxed font-light italic">
                      <Mail className="w-4 h-4 text-primary-gold flex-shrink-0 mt-[3px]" />
                      <span>Direct channel secure access to be confirmed.</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. OFFICE LOCATIONS MAP SECTION */}
      <section className="relative w-full bg-white py-20 px-6 md:px-16 border-t border-white/10 text-white">
        <div className="max-w-7xl mx-auto space-y-8 scroll-fade-up">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-primary-gold font-bold block mb-3">
                GLOBAL PRESENCE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-black">
                Our Office Locations
              </h2>
            </div>

            {/* City Selection Tabs (matching reference UI) */}
            <div className="flex items-center gap-2 bg-primary-navy/5 p-1.5 border border-primary-navy/15 rounded-[2px] self-start md:self-auto">
              {offices.map((office) => (
                <button
                  key={office.id}
                  onClick={() => setActiveOffice(office.id as any)}
                  className={`px-6 py-2.5 text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                    activeOffice === office.id
                      ? 'bg-primary-gold text-primary-navy shadow-md font-bold'
                      : 'text-primary-navy/70 hover:text-primary-navy hover:bg-primary-navy/10'
                  }`}
                >
                  {office.city}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Map & Floating Overlay Card Container */}
          <div className="relative w-full h-[520px] md:h-[580px] overflow-hidden rounded-[2px] border border-white/15 shadow-2xl bg-[#081226]">
            {/* Styled Map iframe */}
            <iframe
              key={currentOffice.id}
              title={`${currentOffice.city} Office Map`}
              src={currentOffice.mapSrc}
              className="w-full h-full border-0 filter contrast-[1.05] saturate-[0.85] grayscale-[0.2]"
              loading="lazy"
            />

            {/* Floating Info Card Overlay (Matching reference screenshot layout) */}
            <div className="absolute top-4 left-4 right-4 md:top-8 md:left-8 md:right-auto z-20 md:w-96 bg-[#081226]/95 backdrop-blur-md border border-primary-gold/30 text-white p-6 sm:p-8 shadow-2xl space-y-6">
              <div>
                <h3 className="font-serif text-3xl font-light tracking-tight text-white mb-4">
                  {currentOffice.city}
                </h3>
                <div className="space-y-1.5 font-sans text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                  {currentOffice.address.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-4">
                <p className="font-sans text-xs text-white/80">
                  <span className="text-primary-gold font-medium">Voice:</span> {currentOffice.phone}
                </p>

                <a
                  href={currentOffice.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase text-primary-gold hover:text-white transition-colors duration-300 group"
                >
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Shared Footer */}
      <Footer />

    </div>
  );
}
