'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../../components/Navbar';
import ServiceDrawerItem from '../../components/ServiceDrawerItem';
import Footer from '@/app/components/Footer';
import ContactUs from '@/app/components/ContactUs';

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

const consultingServices = [
  {
    num: '01',
    title: 'Growth Strategy',
    description: 'A growth plan built on assumptions is a liability dressed as a strategy. We construct growth strategies from evidence: market sizing, competitive positioning, revenue architecture, and a candid assessment of where a business genuinely has the right to win. The output is a roadmap leadership can act on, with clear owners, sequencing, and metrics attached to every milestone.',
    bullets: [
      'Revenue growth planning and P&L architecture',
      'Market sizing, whitespace mapping, and opportunity assessment',
      'Expansion roadmaps with phased milestones and early-warning indicators',
      'Pricing logic, margin architecture, and commercial model design'
    ]
  },
  {
    num: '02',
    title: 'Go-to-Market Strategy',
    description: 'Entering a new market is among the highest-stakes decisions a business makes. The cost of a poorly structured go-to-market is not just a missed quarter; it is reputational exposure in a market that rarely offers second introductions. We have led market entries across India, Saudi Arabia, the UAE, Kuwait, and South Korea. Define the segment with precision, align channel to buyer behaviour, and price for the position the business intends to hold.',
    bullets: [
      'Market entry strategy for new geographies and customer segments',
      'Channel architecture: direct, partner-led, institutional, and D2C',
      'Segment targeting, ideal customer profiling, and acquisition frameworks',
      'Competitive positioning and sustainable differentiation strategy',
      'Commercial model design and pricing strategy'
    ]
  },
  {
    num: '03',
    title: 'Sales Transformation',
    description: 'Sales underperformance is almost never a talent problem. It is a systems problem: the wrong pipeline architecture, absent governance, no reliable visibility into what is working. Companies that fix the system compound the gains. We have built sales operating models for consulting practices, EdTech businesses, and mid-market enterprises. The goal is always the same: build repeatability into the revenue engine and create the governance that allows performance to sustain itself.',
    bullets: [
      'Sales governance design: roles, KPIs, and accountability structures',
      'Pipeline architecture and CRM-readiness frameworks',
      'Performance management cadences and reporting dashboards',
      'Sales team structuring, onboarding playbooks, and incentive design',
      'Revenue forecasting models and funnel visibility frameworks'
    ]
  },
  {
    num: '04',
    title: 'Organisational & Operating Model Design',
    description: 'Strategy fails at implementation when the organisation is not designed to execute it. Accountability gaps, unclear decision rights, and role overlaps are structural problems, not management ones. We work with leadership teams to design the structures and governance models that allow a business to scale without fragmenting. This is most critical when a founder-led business is professionalising, or when a scaling company is expanding into a geography its existing structure was never built to handle.',
    bullets: [
      'Organisational design and restructuring across growth stages',
      'Operating model architecture for scaling businesses',
      'Governance frameworks and decision rights mapping',
      'Role design, team structuring, and span-of-control optimisation',
      'Founder-dependency reduction in critical commercial processes'
    ]
  },
  {
    num: '05',
    title: 'Operational Excellence',
    description: 'Process inefficiency is rarely the surface problem. It is what sits beneath it, invisible until it is costing money, customers, or compliance standing. We have led operational improvement programmes for a USD 3 billion QSR chain across three countries, for state government digital transformation mandates, and for professional services firms. The method: map the process as it actually exists, identify the real friction points, and redesign for efficiency without sacrificing quality or regulatory compliance.',
    bullets: [
      'End-to-end process mapping and redesign',
      'Service delivery efficiency and customer journey improvement',
      'Multi-geography operational standardisation frameworks',
      'Performance tracking systems and operational KPI design'
    ]
  },
  {
    num: '06',
    title: 'Market Entry & Geographic Expansion',
    description: 'Cross-border expansion demands a different discipline than domestic growth. The regulatory environment is unfamiliar. Channels behave differently. Buyer behaviour does not follow domestic assumptions. We bring direct experience of entering India, Saudi Arabia, the UAE, Kuwait, and South Korea, not as advisors observing from a distance, but as operators accountable for outcomes. Map the regulatory terrain before the product arrives, define the segment with precision, and build the channel alongside the commercial model.',
    bullets: [
      'New geography entry strategy: India, GCC, and international markets',
      'Regulatory landscape mapping and compliance-aware commercial strategy',
      'Target segment definition and customer development frameworks',
      'Channel partner identification, qualification, and commercial terms design',
      'Localisation strategy across product, pricing, and market positioning'
    ]
  },
  {
    num: '07',
    title: 'Key Account & Channel Strategy',
    description: 'Winning a significant account or channel relationship is the beginning of the commercial opportunity, not the completion of it. We have driven 4x revenue expansion within a single government account through sharper value propositions, structured account farming, and early identification of adjacent mandates. The method transfers directly to commercial enterprise and channel relationships.',
    bullets: [
      'Enterprise account planning and senior relationship architecture',
      'Revenue expansion frameworks within existing account portfolios',
      'Channel partner design, onboarding, and performance management',
      'Account retention programmes and value proposition sharpening'
    ]
  },
  {
    num: '08',
    title: 'Digital Transformation',
    description: 'Digital transformation that produces durable change is a business redesign that uses technology as the instrument, not the objective. We have led digital transformation programmes for state government clients recognised at the World Economic Forum. We approach commercial digital transformation with the same discipline: start with the business outcome, design backward to the technology, and deliver through our own development capability rather than outsourcing the execution.',
    bullets: [
      'Technology-led business process modernisation and redesign',
      'Website, application, and digital infrastructure delivery',
      'In-house development capability: strategy through to build in a single engagement',
      'Digital governance, change management, and adoption frameworks'
    ]
  },
  {
    num: '09',
    title: 'Marketing & Brand Execution',
    description: 'A commercial strategy that never reaches its buyers is an internal document. We work with clients to translate competitive positioning into brand strategy, content, and campaign execution, delivered through a curated network of specialist partners held to the same standard as the strategy work that precedes it.',
    bullets: [
      'Brand strategy, narrative architecture, and market positioning',
      'Content development and editorial direction aligned to GTM objectives',
      'Performance marketing strategy and campaign execution',
      'Delivered through a curated specialist partner network, quality-controlled by Arventis'
    ]
  }
];

export default function ConsultingPage() {
  const [activeService, setActiveService] = useState<number | null>(0);

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
    <div className="relative w-full overflow-hidden bg-white text-black min-h-screen">
      <Navbar />

      {/* Hero Section with Back Button */}
      <section className="relative w-full min-h-[60vh] md:min-h-[75vh] flex flex-col justify-between pb-16 md:pb-24 px-6 md:px-16 border-b border-white/10 text-white overflow-hidden pt-28 bg-black">
        {/* Background Video Layer */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="https://pub-e76f3c2b747241f99a84d7c073d76e11.r2.dev/consulting_subpage.mp4" type="video/mp4" />
        </video>

        {/* Overlays for text readability */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30 z-10"></div>

        <div className="max-w-7xl mx-auto w-full relative z-20 mt-4 md:mt-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-[#fc8403] text-white text-xs tracking-[0.2em] font-bold uppercase border border-white/20 hover:border-[#fc8403] px-5 py-3 transition-all duration-300 hover-target backdrop-blur-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO OUR SERVICES</span>
          </Link>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-20 mt-auto pt-16">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight text-white mb-6 max-w-4xl drop-shadow-lg">
            <RevealHeading>ARVENTIS CONSULTING</RevealHeading>
          </h1>
          <p className="scroll-fade-up font-sans text-sm sm:text-base md:text-lg text-white/90 font-light leading-relaxed max-w-3xl transition-delay-300 drop-shadow-md">
            Senior strategy advisory engineered for execution. Engineering sustainable growth, operating models, and market expansion across global jurisdictions.
          </p>
        </div>
      </section>

   

      {/* Practice Accordions Section */}
      <section className="relative w-full bg-white py-12 md:py-16 px-6 md:px-16 text-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 scroll-fade-up">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-black">
              Consulting Practice Disciplines
            </h2>
          </div>

          <div className="space-y-4">
            {consultingServices.map((service, idx) => (
              <ServiceDrawerItem
                key={idx}
                num={service.num}
                title={service.title}
                description={service.description}
                bullets={service.bullets}
                isOpen={activeService === idx}
                onToggle={() => setActiveService(activeService === idx ? null : idx)}
                theme="consulting"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA SECTION */}
      <section className="relative w-full bg-[#fc8403] py-10 md:py-12 px-6 md:px-16 text-center text-black z-20">
        <div className="max-w-4xl mx-auto space-y-6 scroll-fade-up">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-black">
            Let's Start the Conversation
          </h2>
          <p className="font-sans text-sm md:text-base text-black/70 font-light max-w-2xl mx-auto leading-relaxed">
            Establish a direct partner relationship or initiate a mandate. Our strategy and legal practices operate under strict NDA protocols.
          </p>
          <div className="pt-4">
            <Link
              href="/contact-us"
              className="inline-block bg-white hover:bg-black text-black hover:text-white font-bold text-xs tracking-[0.2em] uppercase px-10 py-4 transition-all duration-300 hover-target shadow-xl rounded-[1px]"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </section>

     <Footer/>
    </div>
  );
}
