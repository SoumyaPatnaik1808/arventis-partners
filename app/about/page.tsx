'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Scale, Globe, Users, Award, BookOpen, Cpu, CheckCircle2, MapPin, ArrowUpRight } from 'lucide-react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
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

export default function AboutPage() {
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

  return (
    <div className="relative w-full overflow-hidden bg-white text-primary-navy min-h-screen">
      {/* Shared Navigation Bar */}
      <Navbar />

      {/* HERO BANNER: LET'S GET IN TOUCH */}
      <section className="relative w-full bg-[#081226] pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-16 border-b border-white/10 text-white">
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-normal text-white mb-6">
            <RevealHeading>ABOUT  US</RevealHeading>
          </h1>
        
        </div>
      </section>

      {/* 1. FIRM OVERVIEW HEADER */}
      <section className="relative w-full bg-white py-20 md:py-28 px-6 md:px-16 border-b border-primary-navy/10">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-primary-gold-dark font-bold">
              ARVENTIS PARTNERS
            </span>
            <span className="text-primary-navy/30">•</span>
            <span className="font-serif italic text-sm text-primary-navy/60">
              Judgment, Applied.
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight text-primary-navy mb-8 max-w-5xl">
            <RevealHeading>One firm. Two disciplines. No translation required.</RevealHeading>
          </h1>

          <div className="h-[1px] w-24 bg-primary-gold my-8" />

          <p className="scroll-fade-up font-sans text-base sm:text-lg md:text-xl text-primary-navy/70 font-light leading-relaxed max-w-3xl transition-delay-300">
            Elite legal authority and strategic management consulting united under a single engagement framework.
          </p>
        </div>
      </section>

      {/* 2. THE FIRM & WHY ONE FIRM (SPLIT LAYOUT) */}
      <section className="relative w-full bg-white py-24 md:py-32 px-6 md:px-16 text-primary-navy border-b border-primary-navy/10">
        <div className="max-w-7xl mx-auto relative z-10 space-y-24 md:space-y-32">
          
          {/* THE FIRM */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5 space-y-6 scroll-fade-up">
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-primary-gold-dark font-bold block">
                THE FIRM
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-[1.15] text-primary-navy">
                Built so clients never have to choose.
              </h2>
            </div>
            
            <div className="lg:col-span-7 space-y-6 font-sans text-sm sm:text-base md:text-lg text-primary-navy/75 leading-relaxed font-light scroll-fade-up transition-delay-200">
              <p className="text-primary-navy font-normal text-base sm:text-lg md:text-xl leading-snug">
                The businesses that grow fastest share one quality: their legal judgment and commercial strategy speak the same language from day one. Not after a deal closes. Not once a dispute has surfaced. From the first conversation.
              </p>
              <p>
                <strong className="text-primary-navy font-semibold">Arventis Partners</strong> is a partnership between <strong className="text-primary-navy font-semibold">Kumar Suman</strong>, an advocate with a decade of litigation and public interest law, and <strong className="text-primary-navy font-semibold">Anshuman Mohanty</strong>, a strategy and growth leader with eleven years of P&L ownership across India, the GCC, the UK, the US, and South Korea. We built a firm that refuses to separate legal precision from commercial ambition.
              </p>
              <p>
                Most firms ask clients to maintain two separate relationships: one with their lawyers, one with their strategists. Clients spend real time and money translating between the two, and real opportunities slip through the gap. At Arventis, those two relationships are one. The same rigour that goes into a courtroom filing goes into a market-entry plan. The same accountability that shapes a growth strategy shapes the legal guardrails around it.
              </p>
            </div>
          </div>

          {/* WHY ONE FIRM */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start pt-12 border-t border-primary-navy/10">
            <div className="lg:col-span-5 space-y-6 scroll-fade-up">
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-primary-gold-dark font-bold block">
                WHY ONE FIRM
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-[1.15] text-primary-navy">
                What happens when advice works in isolation.
              </h2>
            </div>
            
            <div className="lg:col-span-7 space-y-6 font-sans text-sm sm:text-base md:text-lg text-primary-navy/75 leading-relaxed font-light scroll-fade-up transition-delay-200">
              <p className="bg-slate-50 border-l-2 border-primary-gold p-6 text-primary-navy/90 font-serif italic text-base md:text-xl">
                "Legal counsel without commercial context produces advice that is technically correct and strategically blind. Strategy without legal grounding produces plans that collapse the moment they meet a regulator, a contract clause, or a dispute that was entirely foreseeable."
              </p>
              <p>
                At Arventis, every legal mandate carries an awareness of what it means for the client's broader commercial position. Every strategy engagement is shaped by someone who knows exactly where ambition needs a legal guardrail. This is not a referral between two firms. It is one team, one engagement model, and one point of accountability.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. GLOBAL REACH */}
      <section className="relative w-full bg-slate-50 py-24 md:py-32 px-6 md:px-16 text-primary-navy border-b border-primary-navy/10">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl mb-16 scroll-fade-up">
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-primary-gold-dark font-bold block mb-4">
              GLOBAL REACH
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-primary-navy mb-6">
              Local depth. International fluency.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div className="scroll-fade-up bg-white p-8 md:p-10 border border-primary-navy/10 rounded-[1px] space-y-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-primary-navy/5 border border-primary-navy/10 rounded-full flex items-center justify-center text-primary-gold-dark">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-light text-primary-navy">
                Legal Practice Scope
              </h3>
              <p className="font-sans text-xs sm:text-sm md:text-base text-primary-navy/75 leading-relaxed font-light">
                Our advocates practise across courts and regulatory bodies in Delhi, Himachal Pradesh, and at the national level, representing businesses, landowners, institutions, and individuals in high-stakes disputes and public interest matters. Our advocates cover litigation, arbitration, corporate advisory, employment, intellectual property, real estate, and constitutional law.
              </p>
            </div>

            <div className="scroll-fade-up bg-white p-8 md:p-10 border border-primary-navy/10 rounded-[1px] space-y-6 shadow-sm hover:shadow-md transition-all duration-300 transition-delay-200">
              <div className="w-12 h-12 bg-primary-navy/5 border border-primary-navy/10 rounded-full flex items-center justify-center text-primary-gold-dark">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-light text-primary-navy">
                Consulting Engagement Footprint
              </h3>
              <p className="font-sans text-xs sm:text-sm md:text-base text-primary-navy/75 leading-relaxed font-light">
                Our consulting practice has delivered engagements in India, Saudi Arabia, the UAE, Kuwait, the UK, the US, and South Korea, spanning government, BFSI, EdTech, manufacturing, and consumer businesses. We work with companies and startups across scale, from early-stage founders building their first commercial model to established mid-market businesses redesigning their operations for the next phase of growth.
              </p>
            </div>
          </div>

          <div className="mt-12 p-8 bg-primary-navy text-white text-center rounded-[1px] scroll-fade-up">
            <p className="font-sans text-sm sm:text-base md:text-lg font-light leading-relaxed tracking-wide max-w-4xl mx-auto">
              Whether you are a domestic business, a family managing an estate, or an international company entering India or the GCC, Arventis brings the same depth of preparation and the same standard of delivery.
            </p>
          </div>
        </div>
      </section>

      {/* 4. WHO WE WORK WITH */}
      <section className="relative w-full bg-white py-24 md:py-32 px-6 md:px-16 text-primary-navy border-b border-primary-navy/10">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl mb-16 scroll-fade-up">
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-primary-gold-dark font-bold block mb-4">
              CLIENT PROFILE & SECTORS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-primary-navy">
              Built for decision-makers under real pressure.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 scroll-fade-up">
              <div className="space-y-4">
                {[
                  'Founders and CXOs navigating regulatory complexity in India and internationally',
                  'Startups and growth-stage companies building commercial and legal infrastructure from the ground up',
                  'Mid-market companies entering new geographies or professionalising operations',
                  'Government-linked entities requiring both legal and strategic advisory',
                  'Family businesses planning succession or entering institutional capital markets',
                  'Landowners, communities, and individuals in high-stakes litigation and public interest matters',
                  'International clients entering India or the GCC who need local expertise with cross-border fluency'
                ].map((profile, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-5 bg-slate-50 border border-primary-navy/5 rounded-[1px] hover:border-primary-gold/40 transition-all duration-300">
                    <CheckCircle2 className="w-5 h-5 text-primary-gold-dark mt-0.5 flex-shrink-0" />
                    <span className="font-sans text-xs sm:text-sm md:text-base text-primary-navy/85 font-normal">
                      {profile}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 scroll-fade-up transition-delay-200">
              <div className="bg-primary-navy text-white p-8 rounded-[1px] space-y-6 shadow-xl">
                <span className="font-sans text-[10px] tracking-[0.25em] text-primary-gold uppercase font-bold block">
                  KEY SECTORS
                </span>
                <h3 className="font-serif text-2xl font-light">
                  Across India, the GCC, and Beyond.
                </h3>
                <div className="h-[1px] w-12 bg-primary-gold" />
                <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                  BFSI, government, EdTech, manufacturing, infrastructure, consumer, and professional services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

     

    
      {/* 7. FORMAL FOOTER */}
      <Footer/>
    </div>
  );
}
