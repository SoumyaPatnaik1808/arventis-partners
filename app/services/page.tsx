'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';

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
  const industries = [
    'Advanced Manufacturing & Services',
    'Aerospace & Defense',
    'Agribusiness',
    'Automotive',
    'Aviation',
    'Chemicals',
    'Construction & Infrastructure',
    'Consumer Products',
    'Energy & Natural Resources',
    'Financial Services',
    'Healthcare & Life Sciences',
    'Machinery & Equipment',
    'Media & Entertainment',
    'Mining',
    'Oil & Gas',
    'Paper & Packaging',
    'Private Equity',
    'Retail',
    'Social Impact',
    'Technology',
    'Telecommunications'
  ];

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
    <div className="relative w-full overflow-hidden bg-black text-white">
      {/* Shared Navigation Bar */}
      <Navbar />

      {/* HERO VIDEO BANNER */}
      <section className="relative w-full min-h-[60vh] md:min-h-[75vh] flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-16 border-b border-white/10 text-white overflow-hidden pt-28 bg-black">
        {/* Background Video */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="https://pub-e76f3c2b747241f99a84d7c073d76e11.r2.dev/services_page.mp4" type="video/mp4" />
        </video>
        
        {/* Overlays for text readability */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30 z-10"></div>

        <div className="max-w-7xl mx-auto w-full relative z-20">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-normal text-white mb-6 drop-shadow-lg">
            <RevealHeading>SERVICES</RevealHeading>
          </h1>
          <p className="scroll-fade-up font-sans text-sm sm:text-base md:text-lg text-white/90 font-light leading-relaxed max-w-3xl transition-delay-300 drop-shadow-md">
            Unified strategic management consulting and elite legal advocacy, engineered for <br className="hidden sm:inline" />
           high-stakes execution.
          </p>
        </div>
      </section>

      {/* 1. TWIN HERO BANNER (Standalone Luxury Cards with margins from everywhere) */}
      <section className="relative w-full py-10 md:py-14 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Card 1: Arventis Consulting */}
          <div className="group bg-white border border-black/10 rounded-[2px] overflow-hidden shadow-2xl transition-all duration-500 flex flex-col min-h-[480px]">
            <div className="relative h-[240px] w-full overflow-hidden">
              <Image
                src="/arvBuisness-bg.jpg"
                alt="Arventis Consulting"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="p-8 sm:p-10 flex flex-col justify-between flex-1 bg-white">
              <div className="space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl font-light tracking-wider leading-tight text-black">
                  ARVENTIS CONSULTING
                </h2>
                <p className="font-sans text-sm text-black/70 font-light leading-relaxed">
                  Senior strategy advisory engineered for execution. From growth planning, sales transformation, and operating model design to AI integration and cross-border market expansion.
                </p>
              </div>
              <div className="pt-6">
                <Link
                  href="/services/consulting"
                  className="inline-flex items-center gap-3 bg-[#fa0249] hover:bg-black text-white font-bold text-xs tracking-[0.2em] uppercase px-8 py-4 transition-all duration-300 hover-target shadow-xl"
                >
                  <span>EXPLORE CONSULTING</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Arventis Legal */}
          <div className="group bg-white border border-black/10 rounded-[2px] overflow-hidden shadow-2xl transition-all duration-500 flex flex-col min-h-[480px]">
            <div className="relative h-[240px] w-full overflow-hidden">
              <Image
                src = "/arvlegal-bg.jpg"
                alt="Arventis Legal"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="p-8 sm:p-10 flex flex-col justify-between flex-1 bg-white">
              <div className="space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl font-light tracking-wider leading-tight text-black">
                  ARVENTIS LEGAL
                </h2>
                <p className="font-sans text-sm text-black/75 font-light leading-relaxed">
                  Courtroom credibility and senior advocacy across trial courts, high courts, arbitral tribunals, and the Supreme Court of India. Covering litigation, corporate compliance, and constitutional law.
                </p>
              </div>
              <div className="pt-6">
                <Link
                  href="/services/legal"
                  className="inline-flex items-center gap-3 bg-[#fa0249] hover:bg-black text-white font-bold text-xs tracking-[0.2em] uppercase px-8 py-4 transition-all duration-300 hover-target shadow-xl"
                >
                  <span>EXPLORE LEGAL</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. INDUSTRIES SECTION (TEXT LEFT, IMAGE RIGHT) */}
      <section className="relative w-full bg-white py-16 md:py-24 px-6 md:px-16 text-black border-b border-black/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-stretch">
            {/* Left Column: Text */}
            <div className="lg:col-span-8 lg:min-h-[380px] flex flex-col justify-between py-2 space-y-6">
              <div className="scroll-fade-up">
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-black">
                  Industries
                </h2>
                <div className="h-[1px] w-16 bg-[#fa0249] mt-4" />
              </div>

              {/* 3 columns of industry text items with thin bottom border */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4 scroll-fade-up transition-delay-200">
                {industries.map((ind, idx) => (
                  <div key={idx} className="border-b border-black/10 pb-3 pt-1 hover:border-[#fa0249]/30 transition-all duration-300">
                    <span className="font-sans text-xs sm:text-sm font-semibold tracking-wider text-[#fa0249] hover:text-black transition-colors duration-300 block">
                      {ind}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-4 relative h-[380px] w-full bg-white border border-black/10 rounded-[1px] overflow-hidden shadow-xl scroll-fade-up">
              <Image
                src="/manufacturing_bg.png"
                alt="Industries sector mapping"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 30vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. OPERATIONAL FLOW SECTION */}
      <section className="relative w-full bg-white py-24 md:py-32 px-6 md:px-16 text-black border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-left mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight leading-tight text-black">
              <RevealHeading>THREE STEPS. ONE ACCOUNTABLE TEAM.</RevealHeading>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {/* Step 1 Card */}
            <div className="group relative overflow-hidden scroll-fade-up bg-white border border-black/10 p-8 md:p-10 shadow-md hover:shadow-xl hover:translate-y-[-4px] transition-all duration-500 flex flex-col items-start">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-20 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none z-20" />
              <div className="relative z-10 w-8 h-8 bg-[#fa0249] text-white font-serif flex items-center justify-center text-sm font-semibold mb-6">
                01
              </div>
              <h3 className="relative z-10 font-serif text-xl font-semibold mb-3 tracking-wide text-black">
                Assessment
              </h3>
              <p className="relative z-10 font-sans text-xs md:text-sm text-black/70 leading-relaxed font-light">
                Surgical dissection of vulnerabilities, counter-party positions, and jurisdictional liabilities on the target field.
              </p>
            </div>

            {/* Step 2 Card */}
            <div className="group relative overflow-hidden scroll-fade-up bg-white border border-black/10 p-8 md:p-10 shadow-md hover:shadow-xl hover:translate-y-[-4px] transition-all duration-500 flex flex-col items-start transition-delay-100">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-20 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none z-20" />
              <div className="relative z-10 w-8 h-8 bg-[#fa0249] text-white font-serif flex items-center justify-center text-sm font-semibold mb-6">
                02
              </div>
              <h3 className="relative z-10 font-serif text-xl font-semibold mb-3 tracking-wide text-black">
                Strategy
              </h3>
              <p className="relative z-10 font-sans text-xs md:text-sm text-black/70 leading-relaxed font-light">
                Architecting tactical blueprints designed to neutralize threats, resolve claims, and secure high-value legal advantages.
              </p>
            </div>

            {/* Step 3 Card */}
            <div className="group relative overflow-hidden scroll-fade-up bg-white border border-black/10 p-8 md:p-10 shadow-md hover:shadow-xl hover:translate-y-[-4px] transition-all duration-500 flex flex-col items-start transition-delay-200">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-20 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none z-20" />
              <div className="relative z-10 w-8 h-8 bg-[#fa0249] text-white font-serif flex items-center justify-center text-sm font-semibold mb-6">
                03
              </div>
              <h3 className="relative z-10 font-serif text-xl font-semibold mb-3 tracking-wide text-black">
                Execution
              </h3>
              <p className="relative z-10 font-sans text-xs md:text-sm text-black/70 leading-relaxed font-light">
                Unwavering advocacy and precise coordination of resources to deliver the defined mandate under secure frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA SECTION */}
      <ContactUs />

      <Footer/>
    </div>
  );
}
