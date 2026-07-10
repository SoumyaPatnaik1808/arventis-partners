'use client';

import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import { ShieldAlert, FileText, Scale, CheckCircle2, ArrowRight } from 'lucide-react';

function RevealHeading({ children, className = "" }: { children: string; className?: string }) {
  const words = children.split(' ').filter(Boolean);
  return (
    <span className={`reveal-text flex flex-wrap gap-x-[0.35em] gap-y-[0.15em] ${className}`}>
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

export default function DisclaimerPage() {
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
    <div className="relative w-full overflow-hidden bg-white text-black min-h-screen font-sans">
      {/* Shared Navigation Bar */}
      <Navbar />

      {/* 1. HERO BANNER (LIGHT THEME) */}
      <section className="relative w-full bg-white pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto relative z-10 space-y-4">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#16284C] font-bold block">
            STATUTORY COMPLIANCE and LEGAL NOTICE
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-black leading-tight">
            <RevealHeading>LEGAL DISCLAIMER</RevealHeading>
          </h1>
          <p className="scroll-fade-up font-sans text-sm sm:text-base text-black/70 font-light leading-relaxed max-w-2xl pt-2">
            Important regulatory disclosures, Bar Council compliance notices, and informational terms governing the use of the Arventis Partners web platform.
          </p>
        </div>
      </section>

      {/* 2. DISCLAIMER CONTENT CONTAINER */}
      <section className="relative w-full py-20 px-6 md:px-16 text-black">
        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* Highlight Card */}
          <div className="scroll-fade-up p-8 bg-white border border-black/10 border-l-4 border-l-[#16284C] shadow-md rounded-[1px] space-y-3">
            <div className="flex items-center gap-3 text-black">
              <ShieldAlert className="w-5 h-5 text-[#16284C] flex-shrink-0" />
              <h3 className="font-serif text-xl font-semibold">Bar Council Compliance Notice</h3>
            </div>
            <p className="font-sans text-xs sm:text-sm text-black/80 leading-relaxed font-light">
              As per the rules of the Bar Council of India, law firms and advocates are restricted from soliciting work or advertising. By accessing this website, the user acknowledges that the information provided herein is solely for informational purposes and does not constitute advertisement, solicitation, or legal advice.
            </p>
          </div>

          {/* Section 1: Non-Solicitation */}
          <div className="scroll-fade-up bg-white p-8 md:p-10 border border-black/10 shadow-sm space-y-4">
            <h3 className="font-serif text-2xl font-light text-black flex items-center gap-3">
              <Scale className="w-5 h-5 text-[#16284C]" />
              <span>1. Purpose of Information and Non-Solicitation</span>
            </h3>
            <div className="space-y-3 font-sans text-xs sm:text-sm text-black/75 leading-relaxed font-light">
              <p>
                The contents of this website are intended solely to provide general information about Arventis Partners, its founding partners, practice areas, and professional credentials. 
              </p>
              <p>
                Any transmission, receipt, or use of this site or any information contained herein does not create an advocate-client or consultant-client relationship. Users seeking specific legal or strategic advice should consult directly with a qualified partner through formal mandate agreement protocols.
              </p>
            </div>
          </div>

          {/* Section 2: No Binding Legal Advice */}
          <div className="scroll-fade-up bg-white p-8 md:p-10 border border-black/10 shadow-sm space-y-4">
            <h3 className="font-serif text-2xl font-light text-black flex items-center gap-3">
              <FileText className="w-5 h-5 text-[#16284C]" />
              <span>2. Informational Accuracy and Limitation of Liability</span>
            </h3>
            <div className="space-y-3 font-sans text-xs sm:text-sm text-black/75 leading-relaxed font-light">
              <p>
                While Arventis Partners endeavours to maintain up-to-date and accurate publications, articles, and sector overviews, the law and commercial landscapes evolve continuously. 
              </p>
              <p>
                Arventis Partners expressly disclaims all liability for actions taken or not taken based on any or all contents of this website. Materials published on this site should not be relied upon as substitute for tailored legal advocacy or commercial consultation.
              </p>
            </div>
          </div>

          {/* Section 3: Intellectual Property & Contact */}
          <div className="scroll-fade-up bg-white p-8 md:p-10 border border-black/10 shadow-sm space-y-4">
            <h3 className="font-serif text-2xl font-light text-black flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#16284C]" />
              <span>3. Intellectual Property and Mandate Engagement</span>
            </h3>
            <div className="space-y-3 font-sans text-xs sm:text-sm text-black/75 leading-relaxed font-light">
              <p>
                All brand trade names, logos, original editorial publications, and strategic frameworks displayed on this platform are the exclusive intellectual property of Arventis Partners. Reproduction without prior written consent is strictly prohibited.
              </p>
              <div className="pt-4 flex justify-center">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 bg-[#16284C] text-white text-xs font-bold tracking-[0.2em] uppercase px-8 py-3.5 transition-colors duration-300 shadow-md"
                >
                  <span>Initiate Formal Mandate Inquiry</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Shared Footer Component */}
      <Footer />
    </div>
  );
}
