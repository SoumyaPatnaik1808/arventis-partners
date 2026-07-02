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
    'Agriculture',
    'Automotive & Assembly',
    'Chemicals',
    'Consumer Packaged Goods',
    'Education',
    'Infrastructure',
    'Real Estate',
    'Public Sector',
    'Social Sector',
    'Technology',
    'Media & Telecommunications',
    'Healthcare',
    'Financial Services'
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
            Unified strategic management consulting and elite legal advocacy, <br className="hidden sm:inline" />
            engineered for high-stakes execution.
          </p>
        </div>
      </section>

      {/* 1. TWIN HERO BANNER (Standalone Luxury Cards with margins from everywhere) */}
      <section className="relative w-full py-10 md:py-14 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Card 1: Arventis Consulting */}
          <div className="scroll-fade-up group bg-white border border-black/10 rounded-[2px] overflow-hidden shadow-2xl transition-all duration-500 flex flex-col min-h-[480px]">
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
                <h2 className="font-serif text-2xl sm:text-3xl font-light tracking-wider leading-tight text-black text-center">
                  ARVENTIS CONSULTING
                </h2>
                <p className="font-sans text-sm text-black/70 font-light leading-relaxed text-center">
                  Senior strategy advisory engineered for execution.<br />
                  From growth planning, sales transformation, and operating model design to AI integration and cross-border market expansion.
                </p>
              </div>
              <div className="pt-6 flex justify-center w-full">
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
          <div className="scroll-fade-up transition-delay-100 group bg-white border border-black/10 rounded-[2px] overflow-hidden shadow-2xl transition-all duration-500 flex flex-col min-h-[480px]">
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
                <h2 className="font-serif text-2xl sm:text-3xl font-light tracking-wider leading-tight text-black text-center">
                  ARVENTIS LEGAL
                </h2>
                <p className="font-sans text-sm text-black/75 font-light leading-relaxed text-center">
                  Courtroom credibility and senior advocacy across trial courts, high courts, arbitral tribunals, and the Supreme Court of India.<br />
                  Covering litigation, corporate compliance, and constitutional law.
                </p>
              </div>
              <div className="pt-6 flex justify-center w-full">
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
      <section className="relative w-full bg-white pt-8 md:pt-12 pb-16 md:pb-24 px-6 md:px-16 text-black">
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



      {/* CONTACT CTA SECTION */}
      <ContactUs />

      <Footer/>
    </div>
  );
}
