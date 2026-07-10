'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import { ChevronDown, HelpCircle, ArrowRight, MapPin, Shield, Briefcase } from 'lucide-react';

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

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

  const faqs: FAQItem[] = [
    {
      category: 'PRACTICE ARCHITECTURE',
      question: 'How does Arventis Partners combine legal counsel and strategy consulting?',
      answer: 'Arventis Partners operates as a unified dual-discipline firm. High\u2011stakes commercial decisions — whether cross-border market entry, corporate restructuring, or M and A — carry both commercial growth and legal regulatory implications. Our senior partners stay in the room from strategic design to courtroom advocacy, ensuring seamless alignment without institutional hand-offs.'
    },
    {
      category: 'OFFICES and FOOTPRINT',
      question: 'Where are Arventis Partners offices and practice footprints located?',
      answer: 'We maintain physical offices in Hyderabad (Yusufguda), Lucknow (Lalbagh), Cuttack (CDA Sector 8), and Shimla (CPRI). Additionally, our team regularly appears before High Courts, Arbitral Tribunals, and regulatory bodies across Delhi, Mumbai, Pune, Chandigarh, and Kolkata, as well as managing international consulting mandates across GCC, UK, US, and South Korea.'
    },
    {
      category: 'CONFIDENTIALITY and NDAs',
      question: 'What confidentiality standards govern mandate enquiries?',
      answer: 'All communications, preliminary documentation, and mandate enquiries submitted to Arventis Partners are protected under strict attorney-client privilege protocols and institutional non-disclosure agreements (NDAs). Data is handled through encrypted channels.'
    },
    {
      category: 'MANDATE INITIATION',
      question: 'How do clients initiate a formal advisory or legal engagement?',
      answer: 'Engagements begin with a confidential mandate evaluation. Clients can submit an enquiry via our Contact page specifying whether they require Legal counsel, Strategy Consulting, or a combined advisory mandate. Our founding partners review the classification and schedule a formal consultation.'
    },
    {
      category: 'LEGAL ADVOCACY',
      question: 'What practice areas does the legal bench cover?',
      answer: 'Our legal practice, led by Supreme Court and High Court advocates, specialises in commercial litigation, institutional and ad-hoc arbitration, infrastructure claims, land acquisition disputes, banking recovery proceedings, corporate regulatory compliance, and constitutional public law.'
    },
    {
      category: 'STRATEGY CONSULTING',
      question: 'What types of consulting engagements do you lead?',
      answer: 'Our strategy practice leads GTM (Go-To-Market) expansion, sales operating model transformations, organizational restructuring, digital infrastructure implementation, and P and L optimization across BFSI, government, tech, manufacturing, and EdTech sectors.'
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <div className="relative w-full overflow-hidden bg-white text-black min-h-screen font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Shared Navigation Bar */}
      <Navbar />

      {/* 1. HERO BANNER (LIGHT THEME) */}
      <section className="relative w-full bg-white pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto relative z-10 space-y-4">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#16284C] font-bold block">
            KNOWLEDGE BASE and MANDATE GUIDANCE
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-black leading-tight">
            <RevealHeading>FREQUENTLY ASKED QUESTIONS</RevealHeading>
          </h1>
          <p className="scroll-fade-up font-sans text-sm sm:text-base text-black/70 font-light leading-relaxed max-w-2xl pt-2">
            Clear insights into our dual-discipline practice model, office locations, confidentiality protocols, and mandate initiation workflows.
          </p>
        </div>
      </section>

      {/* 2. FAQ ACCORDION SECTION */}
      <section className="relative w-full py-20 px-6 md:px-16 text-black">
        <div className="max-w-4xl mx-auto space-y-6">
          
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="scroll-fade-up bg-white border border-black/10 rounded-[1px] shadow-sm overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left p-6 sm:p-8 flex items-center justify-between gap-4 focus:outline-none hover:bg-slate-50/50 transition-colors duration-300"
              >
                <div className="space-y-1">
                  <span className="font-sans text-[10px] tracking-[0.25em] text-[#16284C] uppercase font-bold block">
                    {faq.category}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-medium text-black pr-4">
                    {faq.question}
                  </h3>
                </div>
                <div className={`w-8 h-8 rounded-full border border-black/15 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                  openIndex === idx ? 'rotate-180 bg-[#16284C] text-white border-[#16284C]' : 'text-black'
                }`}>
                  <ChevronDown size={18} />
                </div>
              </button>

              {openIndex === idx && (
                <div className="px-6 pb-8 sm:px-8 pt-0 font-sans text-xs sm:text-sm text-black/80 leading-relaxed font-light mt-2 animate-fadeIn">
                  <p className="pt-4">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}

          {/* Direct CTA Box */}
          <div className="scroll-fade-up mt-12 p-8 sm:p-10 bg-white border border-[#16284C]/40 rounded-[1px] shadow-md flex flex-col items-center text-center gap-6">
            <div>
              <h4 className="font-serif text-2xl font-light text-black mb-2">Have a Specific Mandate Inquiry?</h4>
              <p className="font-sans text-xs sm:text-sm text-black/70 font-light">Connect directly with our strategy practice or legal bench leads.</p>
            </div>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-[#16284C] text-white text-xs font-bold tracking-[0.2em] uppercase px-8 py-4 transition-colors duration-300 shadow-md"
            >
              <span>Initiate Contact</span>
              <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </section>

      {/* Shared Footer Component */}
      <Footer />
    </div>
  );
}
