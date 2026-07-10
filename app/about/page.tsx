'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';

// Custom component to reveal text word-by-word with a calming stagger
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
          <p className="scroll-fade-up font-sans text-[15px] sm:text-[17px] md:text-[19px] text-white/90 font-light leading-relaxed max-w-3xl transition-delay-300 drop-shadow-md">
            An advisory firm combining strategy consulting and <br/> legal counsel under a single engagement framework.
          </p>
        </div>
      </section>

      {/* QUOTE HEADLINE */}
      <section className="relative w-full bg-white pt-16 md:pt-24 pb-8 md:pb-12 px-6 md:px-16 text-center">
        <div className="max-w-6xl mx-auto scroll-fade-up">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light leading-snug text-black">
            &quot;Whether it is a domestic business, a family managing an estate, or an international company entering India or the GCC,<br/> <span className="lg:whitespace-nowrap">every engagement receives the same standard of preparation and delivery.</span>&quot;
          </h2>
        </div>
      </section>

      {/* 1. FIRM OVERVIEW HEADER */}
      <section className="relative w-full bg-white pt-8 md:pt-12 pb-16 md:pb-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-stretch">
            
            {/* Left Column: Image */}
            <div className="lg:col-span-5 relative h-[250px] sm:h-[320px] lg:h-auto w-full bg-white border border-black/10 rounded-[1px] overflow-hidden shadow-xl scroll-fade-up order-2 lg:order-1">
              <Image
                src="/about-1.jpeg"
                alt="Strategic Foresight"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            {/* Right Column: Title and Subtitle */}
            <div className="lg:col-span-7 flex flex-col justify-start pt-0 pb-0 order-1 lg:order-2">
              <div className="space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-light tracking-tight leading-[1.15] text-black w-full scroll-fade-up lg:-mt-[8px]">
                  <span className="block md:whitespace-nowrap"><RevealHeading>One Firm.</RevealHeading></span>
                  <span className="block md:whitespace-nowrap"><RevealHeading>Two Disciplines.</RevealHeading></span>
                  <span className="block md:whitespace-nowrap"><RevealHeading>No Translation Required.</RevealHeading></span>
                </h2>
                <div className="h-[1px] w-24 bg-[#16284C] mt-4" />
              </div>

              <div className="space-y-3 mt-8 font-sans text-[15px] sm:text-[17px] text-black/75 leading-relaxed font-light scroll-fade-up transition-delay-200">
                <p>Legal authority and strategy consulting, working under a single engagement model.</p>
                <p>Every decision here is weighed twice before it reaches you: once for what it builds, <br/> once for what it risks.</p>
                <p>You get one answer, already tested from both sides.</p>
              </div>
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
            <div className="lg:col-span-7 lg:min-h-[380px] flex flex-col justify-between pt-0 pb-0">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-light tracking-tight leading-[1.15] text-black w-full scroll-fade-up lg:whitespace-nowrap lg:-mt-[8px]">
                  Built So Clients Don't Have to Choose
                </h2>
                <div className="space-y-3 mt-6 mb-4 font-sans text-[15px] sm:text-[17px] text-black/75 leading-relaxed font-light scroll-fade-up transition-delay-200">
                  <p>
                    Founded by Kumar Suman, an advocate with 13 years in litigation,<br/> and Anshuman Mohanty, a strategy leader with 10 years across global markets.
                  </p>
                  <p>
                    Most businesses run two advisors: one for strategy, one for law.<br/> Then spend weeks reconciling what the two don't agree on.
                  </p>
                  <p>
                    We built Arventis to skip that step. One team carries the idea from first strategy call to final legal execution. Nothing gets lost in the handoff, because there is no handoff.
                  </p>
                  <p>
                    One point of accountability. One standard, applied every time.
                  </p>
                </div>
              </div>
              <div className="flex justify-center w-full mt-6 scroll-fade-up transition-delay-300">
                <Link
                  href="/our-people"
                  className="inline-flex items-center gap-3 bg-[#16284C] text-white font-bold text-xs tracking-[0.2em] uppercase px-8 py-4 transition-all duration-300 hover-target shadow-xl"
                >
                  <span>MEET OUR TEAM</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-5 relative h-[250px] sm:h-[320px] lg:h-[380px] w-full bg-white border border-black/10 rounded-[1px] overflow-hidden shadow-xl scroll-fade-up">
              <Image
                src="/about-2.jpg"
                alt="Business Strategy"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* SECTION REMOVED AS PER REQUEST */}

        </div>
      </section>

  
    

      {/* 4. WHO WE WORK WITH (IMAGE LEFT, TEXT RIGHT) */}
      <section className="relative w-full bg-white pt-8 md:pt-12 pb-16 md:pb-24 px-6 md:px-16 text-black">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            {/* Left Column: Image */}
            <div className="lg:col-span-5 relative h-[380px] w-full bg-white border border-black/10 rounded-[1px] overflow-hidden shadow-xl scroll-fade-up order-2 lg:order-1 mt-2">
              <Image
                src="/work.jpeg"
                alt="Professional Services"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            
            {/* Right Column: Text */}
            <div className="lg:col-span-7 flex flex-col justify-start order-1 lg:order-2 space-y-6">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-black scroll-fade-up leading-[1.15]">
                Who We Work With
              </h2>
              
              <div className="space-y-4 scroll-fade-up transition-delay-200">
                <p className="font-sans text-[15px] sm:text-[17px] text-black/85 font-light">
                  If you're building, defending, or expanding something that matters, <br /> you're probably on this list.
                </p>
                <ul className="list-disc pl-5 space-y-2 marker:text-[#16284C]">
                  {[
                    'Founders and CXOs navigating regulatory complexity, in India and abroad',
                    'Startups building commercial and legal infrastructure from day one',
                    'Mid-market companies entering new geographies or professionalizing fast',
                    'Government-linked entities that need law and strategy in the same room',
                    'Family businesses planning succession or entering institutional capital',
                    'Landowners and individuals fighting for what\'s theirs',
                    'International companies entering India or GCC, without local blind spots'
                  ].map((profile, idx) => (
                    <li key={idx} className="font-sans text-[15px] sm:text-[17px] text-black/85 font-light pl-1">
                      {profile}
                    </li>
                  ))}
                </ul>
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
