'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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

export default function ServicesPage() {
  // Scroll animations observer
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

  return (
    <div className="relative w-full overflow-hidden bg-primary-navy text-white">
      {/* Shared Navigation Bar */}
      <Navbar />

      {/* HERO BANNER: LET'S GET IN TOUCH */}
      <section className="relative w-full bg-[#081226] pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-16 border-b border-white/10 text-white">
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-normal text-white mb-6">
            <RevealHeading>SERVICES</RevealHeading>
          </h1>
          
        </div>
      </section>

      {/* 1. TWIN HERO BANNER (Standalone Luxury Cards with margins from everywhere) */}
      <section className="relative w-full py-16 md:py-24 px-6 md:px-16 bg-bg-warm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Card 1: Arventis Consulting */}
          <div className="group relative bg-[#081226] border border-white/15 rounded-[2px] p-8 sm:p-12 md:p-16 flex flex-col justify-center overflow-hidden shadow-2xl hover:shadow-primary-gold/20 hover:border-primary-gold/40 transition-all duration-500 min-h-[420px] md:min-h-[480px]">
            {/* Background Image Layer */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-[0.15] pointer-events-none z-0 group-hover:scale-105 transition-transform duration-700 ease-out" 
              style={{ backgroundImage: "url('/Buisness-bg.jpg')" }}
            />

            <div className="relative z-10 space-y-6 scroll-fade-up my-auto">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wider leading-tight text-white mb-2">
                <RevealHeading>ARVENTIS</RevealHeading>
                <RevealHeading>CONSULTING</RevealHeading>
              </h2>
              <p className="font-sans text-xs sm:text-sm md:text-base text-white/75 font-light leading-relaxed max-w-lg">
                Senior strategy advisory engineered for execution. From growth planning, sales transformation, and operating model design to AI integration and cross-border market expansion.
              </p>
              <div className="pt-4">
                <Link
                  href="/services/consulting"
                  className="inline-flex items-center gap-3 bg-primary-gold hover:bg-white text-primary-navy font-bold text-xs tracking-[0.2em] uppercase px-8 py-4 transition-all duration-300 hover-target shadow-xl"
                >
                  <span>EXPLORE CONSULTING</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Arventis Legal */}
          <div className="group relative bg-[#c5a880] border border-[#c5a880]/40 rounded-[2px] p-8 sm:p-12 md:p-16 flex flex-col justify-center overflow-hidden shadow-2xl hover:shadow-white/20 transition-all duration-500 min-h-[420px] md:min-h-[480px]">
            {/* Background Image Layer */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-[0.15] pointer-events-none z-0 group-hover:scale-105 transition-transform duration-700 ease-out" 
              style={{ backgroundImage: "url('/legal-bg.jpg')" }}
            />

            <div className="relative z-10 space-y-6 scroll-fade-up my-auto">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wider leading-tight text-primary-navy mb-2">
                <RevealHeading className="text-primary-navy">ARVENTIS</RevealHeading>
                <RevealHeading className="text-primary-navy">LEGAL</RevealHeading>
              </h2>
              <p className="font-sans text-xs sm:text-sm md:text-base text-primary-navy/85 font-light leading-relaxed max-w-lg">
                Courtroom credibility and senior advocacy across trial courts, high courts, arbitral tribunals, and the Supreme Court of India. Covering litigation, corporate compliance, and constitutional law.
              </p>
              <div className="pt-4">
                <Link
                  href="/services/legal"
                  className="inline-flex items-center gap-3 bg-primary-navy hover:bg-white text-white hover:text-primary-navy font-bold text-xs tracking-[0.2em] uppercase px-8 py-4 transition-all duration-300 hover-target shadow-xl"
                >
                  <span>EXPLORE LEGAL</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. INDUSTRIES WE ARE IN SECTION */}
      <section className="relative w-full bg-bg-warm py-24 md:py-32 px-6 md:px-16 text-primary-navy">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-fade-up">
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-tight text-primary-navy mb-12">
              INDUSTRIES WE ARE IN
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {/* Card 1: BFSI */}
              <div className="group relative h-[340px] overflow-hidden rounded-[1px] border border-primary-navy/10 flex flex-col justify-between p-6 shadow-md hover:shadow-2xl hover:border-primary-gold/50 transition-all duration-500">
                <div 
                  className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-110 filter brightness-95 group-hover:brightness-105 transition-all duration-700 ease-out z-0" 
                  style={{ backgroundImage: "url('/bfsi_bg.png')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081226]/95 via-[#081226]/40 to-black/20 group-hover:from-[#081226]/90 group-hover:via-[#081226]/30 transition-colors duration-500 z-10" />
                
                <div className="relative z-20 flex flex-col h-full justify-between">
                  <span className="font-serif text-base text-primary-gold font-bold block drop-shadow-md">01</span>
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg font-medium text-white tracking-wide uppercase leading-tight drop-shadow-md">
                      BFSI
                    </h3>
                    <p className="font-sans text-[11px] text-white/90 leading-normal font-normal drop-shadow-sm">
                      banking, financial services, and insurance
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Government */}
              <div className="group relative h-[340px] overflow-hidden rounded-[1px] border border-primary-navy/10 flex flex-col justify-between p-6 shadow-md hover:shadow-2xl hover:border-primary-gold/50 transition-all duration-500">
                <div 
                  className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-110 filter brightness-95 group-hover:brightness-105 transition-all duration-700 ease-out z-0" 
                  style={{ backgroundImage: "url('/gov_bg.png')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081226]/95 via-[#081226]/40 to-black/20 group-hover:from-[#081226]/90 group-hover:via-[#081226]/30 transition-colors duration-500 z-10" />
                
                <div className="relative z-20 flex flex-col h-full justify-between">
                  <span className="font-serif text-base text-primary-gold font-bold block drop-shadow-md">02</span>
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg font-medium text-white tracking-wide uppercase leading-tight drop-shadow-md">
                      Government
                    </h3>
                    <p className="font-sans text-[11px] text-white/90 leading-normal font-normal drop-shadow-sm">
                      and public sector — India and GCC
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: EdTech */}
              <div className="group relative h-[340px] overflow-hidden rounded-[1px] border border-primary-navy/10 flex flex-col justify-between p-6 shadow-md hover:shadow-2xl hover:border-primary-gold/50 transition-all duration-500">
                <div 
                  className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-110 filter brightness-95 group-hover:brightness-105 transition-all duration-700 ease-out z-0" 
                  style={{ backgroundImage: "url('/edtech_bg.png')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081226]/95 via-[#081226]/40 to-black/20 group-hover:from-[#081226]/90 group-hover:via-[#081226]/30 transition-colors duration-500 z-10" />
                
                <div className="relative z-20 flex flex-col h-full justify-between">
                  <span className="font-serif text-base text-primary-gold font-bold block drop-shadow-md">03</span>
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg font-medium text-white tracking-wide uppercase leading-tight drop-shadow-md">
                      EdTech
                    </h3>
                    <p className="font-sans text-[11px] text-white/90 leading-normal font-normal drop-shadow-sm">
                      educational technology solutions
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4: Manufacturing */}
              <div className="group relative h-[340px] overflow-hidden rounded-[1px] border border-primary-navy/10 flex flex-col justify-between p-6 shadow-md hover:shadow-2xl hover:border-primary-gold/50 transition-all duration-500">
                <div 
                  className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-110 filter brightness-95 group-hover:brightness-105 transition-all duration-700 ease-out z-0" 
                  style={{ backgroundImage: "url('/manufacturing_bg.png')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081226]/95 via-[#081226]/40 to-black/20 group-hover:from-[#081226]/90 group-hover:via-[#081226]/30 transition-colors duration-500 z-10" />
                
                <div className="relative z-20 flex flex-col h-full justify-between">
                  <span className="font-serif text-base text-primary-gold font-bold block drop-shadow-md">04</span>
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg font-medium text-white tracking-wide uppercase leading-tight drop-shadow-md">
                      Manufacturing
                    </h3>
                    <p className="font-sans text-[11px] text-white/90 leading-normal font-normal drop-shadow-sm">
                      and specialty chemicals
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 5: Consumer */}
              <div className="group relative h-[340px] overflow-hidden rounded-[1px] border border-primary-navy/10 flex flex-col justify-between p-6 shadow-md hover:shadow-2xl hover:border-primary-gold/50 transition-all duration-500">
                <div 
                  className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-110 filter brightness-95 group-hover:brightness-105 transition-all duration-700 ease-out z-0" 
                  style={{ backgroundImage: "url('/consumer_bg.png')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081226]/95 via-[#081226]/40 to-black/20 group-hover:from-[#081226]/90 group-hover:via-[#081226]/30 transition-colors duration-500 z-10" />
                
                <div className="relative z-20 flex flex-col h-full justify-between">
                  <span className="font-serif text-base text-primary-gold font-bold block drop-shadow-md">05</span>
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg font-medium text-white tracking-wide uppercase leading-tight drop-shadow-md">
                      Consumer & D2C
                    </h3>
                    <p className="font-sans text-[11px] text-white/90 leading-normal font-normal drop-shadow-sm">
                      direct-to-consumer and retail
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 6: Professional Services */}
              <div className="group relative h-[340px] overflow-hidden rounded-[1px] border border-primary-navy/10 flex flex-col justify-between p-6 shadow-md hover:shadow-2xl hover:border-primary-gold/50 transition-all duration-500">
                <div 
                  className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-110 filter brightness-95 group-hover:brightness-105 transition-all duration-700 ease-out z-0" 
                  style={{ backgroundImage: "url('/prof_services_bg.png')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081226]/95 via-[#081226]/40 to-black/20 group-hover:from-[#081226]/90 group-hover:via-[#081226]/30 transition-colors duration-500 z-10" />
                
                <div className="relative z-20 flex flex-col h-full justify-between">
                  <span className="font-serif text-base text-primary-gold font-bold block drop-shadow-md">06</span>
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg font-medium text-white tracking-wide uppercase leading-tight drop-shadow-md">
                      Professional Services
                    </h3>
                    <p className="font-sans text-[11px] text-white/90 leading-normal font-normal drop-shadow-sm">
                      consulting and advisory practices
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OPERATIONAL FLOW SECTION */}
      <section className="relative w-full bg-white py-24 md:py-32 px-6 md:px-16 text-primary-navy border-t border-primary-navy/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="scroll-fade-up font-sans text-xs tracking-[0.25em] text-primary-gold uppercase font-bold mb-4 block">
              OPERATIONAL FLOW
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight leading-tight text-primary-navy">
              <RevealHeading>THREE STEPS. ONE ACCOUNTABLE TEAM.</RevealHeading>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {/* Step 1 Card */}
            <div className="group relative overflow-hidden scroll-fade-up bg-bg-warm border border-primary-navy/5 p-8 md:p-10 shadow-md hover:shadow-xl hover:translate-y-[-4px] transition-all duration-500 flex flex-col items-start">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-20 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none z-20" />
              <div className="relative z-10 w-8 h-8 bg-primary-navy text-white font-serif flex items-center justify-center text-sm font-semibold mb-6">
                01
              </div>
              <h3 className="relative z-10 font-serif text-xl font-semibold mb-3 tracking-wide text-primary-navy">
                Assessment
              </h3>
              <p className="relative z-10 font-sans text-xs md:text-sm text-primary-navy/70 leading-relaxed font-light">
                Surgical dissection of vulnerabilities, counter-party positions, and jurisdictional liabilities on the target field.
              </p>
            </div>

            {/* Step 2 Card */}
            <div className="group relative overflow-hidden scroll-fade-up bg-bg-warm border border-primary-navy/5 p-8 md:p-10 shadow-md hover:shadow-xl hover:translate-y-[-4px] transition-all duration-500 flex flex-col items-start transition-delay-100">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-20 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none z-20" />
              <div className="relative z-10 w-8 h-8 bg-primary-gold text-primary-navy font-serif flex items-center justify-center text-sm font-semibold mb-6">
                02
              </div>
              <h3 className="relative z-10 font-serif text-xl font-semibold mb-3 tracking-wide text-primary-navy">
                Strategy
              </h3>
              <p className="relative z-10 font-sans text-xs md:text-sm text-primary-navy/70 leading-relaxed font-light">
                Architecting tactical blueprints designed to neutralize threats, resolve claims, and secure high-value legal advantages.
              </p>
            </div>

            {/* Step 3 Card */}
            <div className="group relative overflow-hidden scroll-fade-up bg-bg-warm border border-primary-navy/5 p-8 md:p-10 shadow-md hover:shadow-xl hover:translate-y-[-4px] transition-all duration-500 flex flex-col items-start transition-delay-200">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-20 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none z-20" />
              <div className="relative z-10 w-8 h-8 bg-accent-red text-white font-serif flex items-center justify-center text-sm font-semibold mb-6">
                03
              </div>
              <h3 className="relative z-10 font-serif text-xl font-semibold mb-3 tracking-wide text-primary-navy">
                Execution
              </h3>
              <p className="relative z-10 font-sans text-xs md:text-sm text-primary-navy/70 leading-relaxed font-light">
                Unwavering advocacy and precise coordination of resources to deliver the defined mandate under secure frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
}
