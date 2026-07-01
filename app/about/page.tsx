'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import gsap from 'gsap';

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

// Capsule element with direction-aware hover fill animations using GSAP
function IndustryCapsule({ name }: { name: string }) {
  const capsuleRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = capsuleRef.current?.getBoundingClientRect();
    if (!rect || !fillRef.current || !textRef.current) return;

    // Entry coordinates relative to capsule
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.set(fillRef.current, {
      left: x,
      top: y,
      width: 0,
      height: 0,
      borderRadius: '50%',
      backgroundColor: '#fa0249',
    });

    const distance = Math.max(
      Math.hypot(x, y),
      Math.hypot(rect.width - x, y),
      Math.hypot(x, rect.height - y),
      Math.hypot(rect.width - x, rect.height - y)
    );

    gsap.to(fillRef.current, {
      width: distance * 2,
      height: distance * 2,
      left: x - distance,
      top: y - distance,
      duration: 0.45,
      ease: 'power2.out',
    });

    gsap.to(textRef.current, {
      color: '#ffffff',
      duration: 0.3,
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = capsuleRef.current?.getBoundingClientRect();
    if (!rect || !fillRef.current || !textRef.current) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.to(fillRef.current, {
      width: 0,
      height: 0,
      left: x,
      top: y,
      duration: 0.45,
      ease: 'power2.inOut',
    });

    gsap.to(textRef.current, {
      color: '#fa0249',
      duration: 0.3,
    });
  };

  return (
    <div
      ref={capsuleRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden border border-[#fa0249] rounded-full px-6 py-2.5 cursor-pointer select-none transition-all duration-300 bg-white"
    >
      <div
        ref={fillRef}
        className="absolute pointer-events-none z-0"
        style={{ transform: 'translate(0, 0)' }}
      />
      <span
        ref={textRef}
        className="relative z-10 font-sans text-xs sm:text-sm font-semibold tracking-wider text-[#fa0249] transition-colors duration-300"
      >
        {name}
      </span>
    </div>
  );
}

export default function AboutPage() {
  // Intersection Observer for scroll-triggered animations
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

  return (
    <div className="relative w-full overflow-hidden bg-white text-black min-h-screen">
      {/* Shared Navigation Bar */}
      <Navbar />

      {/* HERO BANNER */}
      <section className="relative w-full bg-[#000000] pt-28 pb-12 md:pt-36 md:pb-16 px-6 md:px-16 border-b border-white/10 text-white">
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-normal text-white mb-6">
            <RevealHeading>ABOUT</RevealHeading>
          </h1>
          <p className="scroll-fade-up font-sans text-sm sm:text-base md:text-lg text-white/70 font-light leading-relaxed max-w-3xl transition-delay-300">
            A premier advisory firm combining senior strategy consulting and elite legal authority under a single engagement framework.
          </p>
        </div>
      </section>

      {/* 1. FIRM OVERVIEW HEADER */}
      <section className="relative w-full bg-white py-12 md:py-16 px-6 md:px-16 border-b border-black/10">
        <div className="max-w-7xl mx-auto relative z-10 space-y-8">
          
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight text-black max-w-5xl">
            <span className="block"><RevealHeading>One Firm.</RevealHeading></span>
            <span className="block"><RevealHeading>Two Disciplines.</RevealHeading></span>
            <span className="block"><RevealHeading>No Translation Required.</RevealHeading></span>
          </h1>


          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <p className="scroll-fade-up font-sans text-base sm:text-lg md:text-xl text-black/70 font-light leading-relaxed transition-delay-300">
                Legal authority and strategy consulting, working under a single engagement model.
              </p>
            </div>
            <div className="lg:col-span-5 relative h-[380px] w-full bg-white border border-black/10 rounded-[1px] overflow-hidden shadow-md scroll-fade-up transition-delay-400">
              <Image
                src="/strategic_foresight.png"
                alt="Strategic Foresight"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE FIRM & WHY ONE FIRM (SPLIT LAYOUT) */}
      <section className="relative w-full bg-white py-12 md:py-16 px-6 md:px-16 text-black border-b border-black/10">
        <div className="max-w-7xl mx-auto relative z-10 space-y-16 md:space-y-20">
          
          {/* THE FIRM */}
          <div className="space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-[1.15] text-black w-full scroll-fade-up">
              Built So Clients Don't Have to Choose
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              <div className="lg:col-span-7 space-y-6 font-sans text-sm sm:text-base md:text-lg text-black/75 leading-relaxed font-light scroll-fade-up transition-delay-200">
                <p className="text-black font-normal text-base sm:text-lg md:text-xl leading-snug">
                  The businesses that grow fastest have one thing in common: their legal judgment and commercial strategy stay aligned from the first conversation, not after a deal closes or a dispute comes up.
                </p>
                <p>
                  <strong className="text-black font-semibold">Arventis Partners</strong> is a partnership between <strong className="text-black font-semibold">Kumar Suman</strong>, an advocate with a decade of litigation and public interest law experience, and <strong className="text-black font-semibold">Anshuman Mohanty</strong>, a strategy and growth leader with eleven years of P&L experience across India, the GCC, the UK, the US, and South Korea. We built the firm around one idea: legal precision and commercial strategy shouldn't be handled by two separate teams.
                </p>
                <p>
                  Most businesses end up managing two relationships, one with their lawyers, one with their strategists, and spend time and money reconciling advice from each side. At Arventis, that's one relationship, working to one standard.
                </p>
              </div>
              <div className="lg:col-span-5 relative h-[380px] w-full bg-white border border-black/10 rounded-[1px] overflow-hidden shadow-xl scroll-fade-up transition-delay-300">
                <Image
                  src="/Buisness-bg.jpg"
                  alt="Business Strategy"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>

          {/* WHY ONE FIRM */}
          <div className="space-y-6 pt-12 border-t border-black/10">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-[1.15] text-black w-full scroll-fade-up">
              What Happens When Advice Works in Isolation
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              <div className="lg:col-span-7 space-y-6 font-sans text-sm sm:text-base md:text-lg text-black/75 leading-relaxed font-light scroll-fade-up transition-delay-200">
                <p className="bg-white border border-black/10 border-l-2 border-l-[#fa0249] p-6 text-black/90 font-serif italic text-base md:text-xl">
                  "Legal counsel without commercial context can be technically correct and still miss the point. Strategy without legal grounding can look solid on paper and fall apart the moment it meets a regulator or a contract dispute."
                </p>
                <p>
                  Every legal mandate at Arventis accounts for the client's broader commercial position. Every strategy engagement is shaped with legal risk already factored in. This isn't a referral between two firms, it's one team, working from one engagement model, with one point of accountability.
                </p>
              </div>
              <div className="lg:col-span-5 relative h-[380px] w-full bg-white border border-black/10 rounded-[1px] overflow-hidden shadow-xl scroll-fade-up transition-delay-300">
                <Image
                  src="/legal-bg.jpg"
                  alt="Legal Practice"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. GLOBAL REACH */}
      <section className="relative w-full bg-white py-12 md:py-16 px-6 md:px-16 text-black border-b border-black/10">
        <div className="max-w-7xl mx-auto relative z-10 space-y-8">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-black scroll-fade-up">
            Local depth. International fluency.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-7 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="scroll-fade-up bg-white p-6 border-t-2 border-t-[#fa0249] border-x border-b border-black/10 rounded-[1px] space-y-4 shadow-sm hover:bg-white/30 transition-all duration-300">
                  <h3 className="font-serif text-xl font-medium text-black">
                    Legal Practice Scope
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-black/75 leading-relaxed font-light">
                    Our advocates practice across courts and regulatory bodies in Delhi, Himachal Pradesh, and at the national level, representing businesses, landowners, institutions, and individuals in litigation and public interest matters. Our practice covers litigation, arbitration, corporate advisory, employment, intellectual property, real estate, and constitutional law.
                  </p>
                </div>

                <div className="scroll-fade-up bg-white p-6 border-t-2 border-t-[#fa0249] border-x border-b border-black/10 rounded-[1px] space-y-4 shadow-sm hover:bg-white/30 transition-all duration-300 transition-delay-200">
                  <h3 className="font-serif text-xl font-medium text-black">
                    Consulting Engagement Footprint
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-black/75 leading-relaxed font-light">
                    Our consulting practice has delivered engagements in India, Saudi Arabia, the UAE, Kuwait, the UK, the US, and South Korea, spanning government, BFSI, EdTech, manufacturing, and consumer businesses. We work with companies at every stage, from early founders building their first commercial model to established mid-market businesses redesigning operations for their next phase of growth.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-white border border-black/10 text-black rounded-[1px] scroll-fade-up">
                <p className="font-sans text-xs sm:text-sm md:text-base font-light leading-relaxed tracking-wide">
                  Whether you're a domestic business, a family managing an estate, or an international company entering India or the GCC, every engagement gets the same level of preparation and delivery.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-[380px] w-full bg-white border border-black/10 rounded-[1px] overflow-hidden shadow-xl scroll-fade-up transition-delay-300">
              <Image
                src="/global_reach_bg.png"
                alt="Global Footprint"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHO WE WORK WITH */}
      <section className="relative w-full bg-white py-12 md:py-16 px-6 md:px-16 text-black border-b border-black/10">
        <div className="max-w-7xl mx-auto relative z-10 space-y-8">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-black scroll-fade-up">
            Who We Work With
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4 scroll-fade-up">
                {[
                  'Founders and CXOs navigating regulatory complexity in India and internationally',
                  'Startups and growth-stage companies building commercial and legal infrastructure from the ground up',
                  'Mid-market companies entering new geographies or professionalizing operations',
                  'Government-linked entities that need both legal and strategic advisory',
                  'Family businesses planning succession or entering institutional capital markets',
                  'Landowners, communities, and individuals in litigation and public interest matters',
                  'International companies entering India or the GCC who need local expertise and cross-border experience'
                ].map((profile, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-white border border-black/10 rounded-[1px] hover:border-[#fa0249]/40 transition-all duration-300">
                    <span className="w-5 h-5 rounded-full border border-[#fa0249] flex items-center justify-center flex-shrink-0 mt-0.5 text-xs text-[#fa0249] font-bold font-sans">&#10003;</span>
                    <span className="font-sans text-xs sm:text-sm text-black/85 font-normal">
                      {profile}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-white border border-black/10 text-black p-6 rounded-[1px] space-y-4 shadow-md scroll-fade-up transition-delay-200">
                <h3 className="font-serif text-xl font-light">
                  <span className="block">Across India,</span>
                  <span className="block">the GCC, and Beyond.</span>
                </h3>
                <div className="h-[1px] w-12 bg-[#fa0249]" />
                <p className="font-sans text-xs sm:text-sm text-black/80 leading-relaxed font-light">
                  BFSI, government, EdTech, manufacturing, infrastructure, consumer, and professional services.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-[380px] w-full bg-white border border-black/10 rounded-[1px] overflow-hidden shadow-xl scroll-fade-up transition-delay-300">
              <Image
                src="/prof_services_bg.png"
                alt="Professional Services"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. INDUSTRIES SECTION (SPLIT LAYOUT) */}
      <section className="relative w-full bg-white py-16 md:py-24 px-6 md:px-16 text-black border-b border-black/10">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="scroll-fade-up">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-black">
              Industries
            </h2>
            <div className="h-[1px] w-16 bg-[#fa0249] mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start scroll-fade-up transition-delay-200">
            {/* Left Column (3 columns of industry text items with thin bottom border) */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4">
              {industries.map((ind, idx) => (
                <div key={idx} className="border-b border-black/10 pb-3 pt-1 hover:border-[#fa0249]/30 transition-all duration-300">
                  <span className="font-sans text-xs sm:text-sm font-semibold tracking-wider text-[#fa0249] hover:text-black transition-colors duration-300 block">
                    {ind}
                  </span>
                </div>
              ))}
            </div>

            {/* Right Column (Sample industry image) */}
            <div className="lg:col-span-4 relative h-[380px] w-full bg-white border border-black/10 rounded-[1px] overflow-hidden shadow-xl">
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
      <section className="relative w-full bg-white py-12 md:py-14 px-6 md:px-16 border-t border-black/10 text-center text-black z-20">
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
              className="inline-block bg-[#fa0249] hover:bg-black text-white font-bold text-xs tracking-[0.2em] uppercase px-10 py-4 transition-all duration-300 hover-target shadow-xl rounded-[1px]"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
