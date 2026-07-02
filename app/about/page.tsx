'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
    <div className="relative w-full overflow-hidden bg-white text-black min-h-screen">
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
          <source src="https://pub-e76f3c2b747241f99a84d7c073d76e11.r2.dev/about_page.mp4" type="video/mp4" />
        </video>
        
        {/* Overlays for text readability */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30 z-10"></div>

        <div className="max-w-7xl mx-auto w-full relative z-20">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-normal text-white mb-6 drop-shadow-lg">
            <RevealHeading>ABOUT</RevealHeading>
          </h1>
          <p className="scroll-fade-up font-sans text-sm sm:text-base md:text-lg text-white/90 font-light leading-relaxed max-w-3xl transition-delay-300 drop-shadow-md">
            A premier advisory firm combining senior strategy consulting and elite legal authority under a single engagement framework.
          </p>
        </div>
      </section>

      {/* QUOTE HEADLINE */}
      <section className="relative w-full bg-white pt-16 md:pt-24 pb-2 md:pb-4 px-6 md:px-16 text-center">
        <div className="max-w-4xl mx-auto scroll-fade-up">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light leading-snug text-black sm:whitespace-nowrap">
           "No matter the scale, excellence remains the standard"
          </h2>
        </div>
      </section>

      {/* 1. FIRM OVERVIEW HEADER */}
      <section className="relative w-full bg-white pt-4 md:pt-6 pb-16 md:pb-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-stretch">
            
            {/* Left Column: Image */}
            <div className="lg:col-span-5 relative h-[250px] sm:h-[320px] lg:h-auto w-full bg-white border border-black/10 rounded-[1px] overflow-hidden shadow-xl scroll-fade-up order-2 lg:order-1">
              <Image
                src="/strategic_foresight.png"
                alt="Strategic Foresight"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            {/* Right Column: Title and Subtitle */}
            <div className="lg:col-span-7 flex flex-col justify-start pt-0 pb-2 order-1 lg:order-2">
              <div className="space-y-4">
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight text-black">
                  <span className="block whitespace-nowrap"><RevealHeading>One Firm.</RevealHeading></span>
                  <span className="block whitespace-nowrap"><RevealHeading>Two Disciplines.</RevealHeading></span>
                  <span className="block whitespace-nowrap"><RevealHeading>No Translation Required.</RevealHeading></span>
                </h1>
                <div className="h-[1px] w-24 bg-[#fa0249]" />
              </div>

              <p className="scroll-fade-up font-sans text-base sm:text-lg md:text-xl text-black/70 font-light leading-relaxed transition-delay-300 mt-8">
                Legal authority and strategy consulting, working under a single engagement model.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 2. THE FIRM & WHY ONE FIRM */}
      <section className="relative w-full bg-white py-16 md:py-24 px-6 md:px-16 text-black">
        <div className="max-w-7xl mx-auto relative z-10 space-y-24">
          
          {/* THE FIRM (TEXT LEFT, IMAGE RIGHT) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-stretch">
            {/* Left Column: Text */}
            <div className="lg:col-span-7 lg:h-[380px] flex flex-col justify-start pt-0 pb-2">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-[1.15] text-black w-full scroll-fade-up">
                Built So Clients Don't Have to Choose
              </h2>
              <div className="space-y-3 mt-6 mb-4 font-sans text-sm sm:text-base text-black/75 leading-relaxed font-light scroll-fade-up transition-delay-200">
                <p>
                  <b>Arventis Partners</b> brings together <b>Suman Thakur</b>, an advocate with a decade of litigation experience, and <b>Anshuman Mohanty</b>, a strategy leader with 11 years of global business experience.
                </p>
                <p>
                  We built the firm around one idea: legal precision and commercial strategy shouldn't be handled by two separate teams.
                </p>
                <p className="pt-2">
                  Most businesses end up managing two relationships, one with their lawyers, one with their strategists, and spend time and money reconciling advice from each side.
                </p>
                <p>
                  At Arventis, that's one relationship, working to one standard.
                </p>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-5 relative h-[250px] sm:h-[320px] lg:h-[380px] w-full bg-white border border-black/10 rounded-[1px] overflow-hidden shadow-xl scroll-fade-up">
              <Image
                src="/arvBuisness-bg.jpg"
                alt="Business Strategy"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* WHY ONE FIRM (IMAGE LEFT, TEXT RIGHT) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-stretch pt-24">
            {/* Left Column: Image */}
            <div className="lg:col-span-5 relative h-[250px] sm:h-[320px] lg:h-[380px] w-full bg-white border border-black/10 rounded-[1px] overflow-hidden shadow-xl scroll-fade-up order-2 lg:order-1">
              <Image
                src="/arvlegal-bg.jpg"
                alt="Legal Practice"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            
            {/* Right Column: Text */}
            <div className="lg:col-span-7 lg:h-[380px] flex flex-col justify-start pt-0 pb-2 order-1 lg:order-2">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-[1.15] text-black w-full scroll-fade-up">
                What Happens When Advice Works in Isolation
              </h2>
              <div className="space-y-3 mt-6 font-sans text-sm sm:text-base text-black/75 leading-relaxed font-light scroll-fade-up transition-delay-200">
                <p>
                  Every legal mandate at Arventis accounts for the client's broader commercial position.
                </p>
                <p>
                  Every strategy engagement is shaped with legal risk already factored in.
                </p>
                <p>
                  This isn't a referral between two firms, it's one team, working from one engagement model, with one point of accountability.
                </p>
                <p>
                  When every decision is viewed through the same lens, execution becomes simpler.
                </p>
                <p>
                  Less coordination for you. Greater clarity at every step.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. GLOBAL REACH (TEXT LEFT, IMAGE RIGHT) */}
      <section className="relative w-full bg-white py-8 md:py-12 px-6 md:px-16 text-black">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-stretch">
            {/* Left Column: Text */}
            <div className="lg:col-span-7 lg:min-h-[380px] flex flex-col justify-start pt-0 pb-2 space-y-6">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-black scroll-fade-up">
                <span className="block whitespace-nowrap">Local depth.</span>
                <span className="block whitespace-nowrap">International fluency.</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="scroll-fade-up bg-white p-4 border-t-2 border-t-[#fa0249] border-x border-b border-black/10 rounded-[1px] space-y-2 shadow-sm">
                  <h3 className="font-serif text-lg font-medium text-black">
                    Legal Practice Scope
                  </h3>
                  <p className="font-sans text-xs text-black/75 leading-relaxed font-light">
                    Our advocates practice across courts and regulatory bodies in Delhi, Himachal Pradesh, and at the national level, representing businesses, landowners, institutions, and individuals in litigation and public interest matters. Our practice covers litigation, arbitration, corporate advisory, employment, intellectual property, real estate, and constitutional law.
                  </p>
                </div>

                <div className="scroll-fade-up bg-white p-4 border-t-2 border-t-[#fa0249] border-x border-b border-black/10 rounded-[1px] space-y-2 shadow-sm transition-delay-200">
                  <h3 className="font-serif text-lg font-medium text-black">
                    Consulting Engagement Footprint
                  </h3>
                  <p className="font-sans text-xs text-black/75 leading-relaxed font-light">
                    Our consulting practice has delivered engagements in India, Saudi Arabia, the UAE, Kuwait, the UK, the US, and South Korea, spanning government, BFSI, EdTech, manufacturing, and consumer businesses. We work with companies at every stage, from early founders building their first commercial model to established mid-market businesses redesigning operations for their next phase of growth.
                  </p>
                </div>
              </div>
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

      {/* 4. WHO WE WORK WITH (IMAGE LEFT, TEXT RIGHT) */}
      <section className="relative w-full bg-white pt-8 md:pt-12 pb-16 md:pb-24 px-6 md:px-16 text-black">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-stretch">
            {/* Left Column: Image */}
            <div className="lg:col-span-5 relative h-[380px] w-full bg-white border border-black/10 rounded-[1px] overflow-hidden shadow-xl scroll-fade-up order-2 lg:order-1">
              <Image
                src="/prof_services_bg.png"
                alt="Professional Services"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            
            {/* Right Column: Text */}
            <div className="lg:col-span-7 lg:min-h-[380px] flex flex-col justify-between py-2 order-1 lg:order-2 space-y-6">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-black scroll-fade-up">
                Who We Work With
              </h2>
              
              <div className="space-y-3 scroll-fade-up">
                {[
                  'Founders and CXOs navigating regulatory complexity in India and internationally',
                  'Startups and growth-stage companies building commercial and legal infrastructure from the ground up',
                  'Mid-market companies entering new geographies or professionalizing operations',
                  'Government-linked entities that need both legal and strategic advisory',
                  'Family businesses planning succession or entering institutional capital markets',
                  'Landowners, communities, and individuals in litigation and public interest matters',
                  'International companies entering India or the GCC who need local expertise and cross-border experience'
                ].map((profile, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-white border border-black/10 rounded-[1px] hover:border-[#fa0249]/40 transition-all duration-300">
                    <span className="w-4 h-4 rounded-full border border-[#fa0249] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] text-[#fa0249] font-bold font-sans">&#10003;</span>
                    <span className="font-sans text-xs text-black/85 font-normal">
                      {profile}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-white border border-black/10 text-black p-4 rounded-[1px] space-y-2 shadow-md scroll-fade-up transition-delay-200">
                <h3 className="font-serif text-lg font-light">
                  <span className="block">Across India, the GCC, and Beyond.</span>
                </h3>
                <div className="h-[1px] w-12 bg-[#fa0249]" />
                <p className="font-sans text-xs text-black/80 leading-relaxed font-light">
                  BFSI, government, EdTech, manufacturing, infrastructure, consumer, and professional services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* CONTACT CTA SECTION */}
      <ContactUs />

      <Footer />
    </div>
  );
}
