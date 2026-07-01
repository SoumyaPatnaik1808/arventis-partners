'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Scale, Globe, ShieldCheck, Mail, MapPin } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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

function formatSliderText(text: string) {
  const parts = text.split('\n');
  return parts.map((part, idx) => {
    const trimmed = part.trim();
    if (!trimmed) return null;
    return (
      <span key={idx} className="block">
        {trimmed}
      </span>
    );
  });
}

export default function Home() {
  const slides = [
    {
      navTitle: "Two Disciplines",
      title: "Two Disciplines.\nOne Standard of Rigour.",
      subtitle: "Strategy and law, under one accountable team,\nso neither one ever works alone.",
      image: "/hero building.png",
      primaryBtnText: "Meet the Firm",
      primaryBtnHref: "/about",
    },
    {
      navTitle: "Strategy Built for Execution.",
      title: "Strategy Execution.",
      subtitle: "We stay in the room until the strategy becomes the result,\nnot just a deck.",
      image: "/hero strategy.png",
      primaryBtnText: "Explore Consulting",
      primaryBtnHref: "/services#consulting",
      secondaryBtnText: "Discuss Growth",
      secondaryBtnHref: "/contact-us"
    },
    {
      navTitle: "Courtroom Credibility",
      title: "Courtroom Credibility,\nAcross Every Practice Area.",
      subtitle: "Advocacy built for the moments that decide outcomes.",
      image: "/hero legal.png",
      primaryBtnText: "Explore Practice Areas",
      primaryBtnHref: "/services#legal",
      secondaryBtnText: "Initiate Mandate",
      secondaryBtnHref: "/contact-us"
    },
    {
      navTitle: "International Fluency",
      title: "Local Depth.\nInternational Fluency.",
      subtitle: "A bench built across India and the GCC, with a team that knows every market firsthand.",
      description: "Litigation and advisory across Indian courts and regulatory bodies. Consulting engagements delivered in India, Saudi Arabia, the UAE, Kuwait, the UK, the US, and South Korea — with the same preparation and the same standard of delivery, every time.",
      image: "/hero international.png",
      primaryBtnText: "Our Story",
      primaryBtnHref: "/about",
      secondaryBtnText: "Get in Touch",
      secondaryBtnHref: "/contact-us"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
  };

  const handleSlideClick = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
    pauseTimeoutRef.current = setTimeout(() => {
      startTimer();
    }, 15000);
  };

  const handleNavClick = (idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide(idx);
    startTimer();
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, []);

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
            // Unobserve to make the animation permanent on this scroll
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
    <div className="relative w-full bg-white text-black">
      
      {/* 1. STICKY HEADER */}
      <Navbar />

      {/* 2. HERO BANNER WITH BACKGROUND IMAGE SLIDER */}
      <section 
        onClick={handleSlideClick}
        className="relative w-full h-screen flex items-center justify-center pt-28 pb-40 px-6 md:px-16 overflow-hidden cursor-pointer select-none bg-white"
      >
        
        {/* Background Image Slider Stacks */}
        <div className="absolute inset-0 z-0 bg-white">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
                currentSlide === idx ? 'opacity-100 z-0' : 'opacity-0 pointer-events-none z-0'
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={idx === 0}
                sizes="100vw"
                className={`object-cover transition-transform duration-[6000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  currentSlide === idx ? 'scale-105' : 'scale-100'
                }`}
              />
            </div>
          ))}
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl w-full pt-16 pb-28 text-left flex flex-col items-start justify-center min-h-[350px] md:min-h-[400px]">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className={`slide-text-transition flex flex-col items-start text-left w-full ${
                currentSlide === idx
                  ? ' translate-y-0 relative z-10'
                  : 'opacity-0 translate-y-6 absolute inset-x-0 top-16 pointer-events-none z-0'
              }`}
            >
              <h1 className="text-white font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal tracking-tight leading-[1.1] max-w-5xl mb-4 sm:mb-6">
                {formatSliderText(slide.title)}
                {slide.subtitle && (
                  <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white/60 mt-2 font-sans font-light">
                    {formatSliderText(slide.subtitle)}
                  </span>
                )}
              </h1>

           
            </div>
          ))}
        </div>

        {/* BOTTOM NAVIGATION BAR */}
        <div className="absolute bottom-0 left-0 w-full z-20 px-6 md:px-16 pb-8 pt-12 ">
          <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
            
            {/* Navigation Items (2x2 on mobile, 4 columns on desktop) */}
            <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-x-12 lg:gap-x-16 text-center">
              {slides.map((slide, idx) => (
                <button
                  key={idx}
                  onClick={(e) => handleNavClick(idx, e)}
                  className="group relative flex flex-col pt-4 pb-2 text-center cursor-pointer focus:outline-none transition-all duration-300 w-full"
                >
                  {/* Horizontal Progress Bar above the title */}
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-white/20 overflow-hidden">
                    <div
                      className={`h-full bg-[#fa0249] transition-all ${
                        currentSlide === idx ? 'w-full animate-slide-progress' : 'w-0'
                      }`}
                      style={{
                        transitionDuration: currentSlide === idx ? '0ms' : '300ms',
                      }}
                    />
                  </div>
                  
                  {/* Title */}
                  <span className={`font-sans text-[10px] sm:text-xs md:text-sm font-semibold tracking-wider transition-colors duration-300 uppercase block w-full text-center ${
                    currentSlide === idx ? 'text-white' : 'text-white/40 group-hover:text-black'
                  }`}>
                    {slide.navTitle}
                  </span>
                </button>
              ))}
            </div>

            {/* Scroll Down Button (Centered below the navigation grid) */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                const overviewSection = document.getElementById('overview');
                if (overviewSection) {
                  overviewSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="flex flex-col items-center gap-1.5 group cursor-pointer focus:outline-none"
            >
              <span className="text-[10px] uppercase tracking-[0.22em] text-black/50 group-hover:text-black transition-colors duration-300 font-sans font-medium">
                Scroll
              </span>
              <div className="w-9 h-9 rounded-full border border-black/15 flex items-center justify-center group-hover:border-black/40 transition-colors duration-300">
                <svg
                  className="w-3.5 h-3.5 text-black/60 group-hover:text-black transition-transform duration-300 group-hover:translate-y-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </button>

          </div>
        </div>

      </section>

      

      {/* 4. OVERVIEW SECTION (5 Items) */}
      <section id="overview" className="relative w-full bg-white text-black pt-6 pb-12 md:pt-8 md:pb-16 px-6 md:px-16 border-b border-black/10 relative z-20">
        <div className="max-w-7xl mx-auto space-y-15">
          <div className="scroll-fade-up max-w-2xl">
           
            
          </div>

        
        </div>
      </section>

      {/* 5. DETAILED FEATURES */}
      <section className="relative w-full bg-white text-black py-12 md:py-16 px-6 md:px-16 border-b border-black/10 relative z-20">
        <div className="max-w-7xl mx-auto space-y-16 md:space-y-20">
          {/* Feature 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6 scroll-fade-up">
             
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-tight text-black">
                One Team, Start to Finish
              </h2>
              <p className="font-sans text-base text-black/75 leading-relaxed font-light">
                Most clients brief one advisor on strategy and a different one on legal risk, 
                then deal with the two not lining up. At Arventis, the same leadership handles both from the start. You explain the problem once.
              </p>
              <div className="pt-4">
                <Link
                  href="/our-people"
                  className="inline-flex items-center gap-3 bg-[#fa0249] hover:bg-black text-white font-bold text-xs tracking-[0.2em] uppercase px-8 py-4 transition-all duration-300 hover-target shadow-xl"
                >
                  <span>MEET THE TEAM</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-6 scroll-fade-up relative h-[300px] sm:h-[400px] border border-black/10 rounded-[1px] overflow-hidden shadow-lg">
              <Image
                src="/strategic_foresight.png"
                alt="One Team, Start to Finish"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-6 lg:order-2 space-y-6 scroll-fade-up">
              
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-tight text-black">
                Experience Across Markets
              </h2>
              <p className="font-sans text-base text-black/75 leading-relaxed font-light">
                Over more than a decade, our leadership has worked on market entry, government mandates, and enterprise strategy across India, the GCC, the UK, the US, and South Korea. That range means we've already dealt with the regulatory, cultural, and commercial differences most firms are encountering for the first time.
              </p>
              <div className="pt-4">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-3 bg-[#fa0249] hover:bg-black text-white font-bold text-xs tracking-[0.2em] uppercase px-8 py-4 transition-all duration-300 hover-target shadow-xl"
                >
                  <span>SEE OUR EXPERTISE</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-6 lg:order-1 scroll-fade-up relative h-[300px] sm:h-[400px] border border-black/10 rounded-[1px] overflow-hidden shadow-lg">
              <Image
                src="/global_reach_bg.png"
                alt="Experience Across Markets"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHERE TO START (Dual Cards) */}
      <section className="relative w-full bg-[#ffffff] text-[#000000] py-12 md:py-16 px-6 md:px-16 relative z-20">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="scroll-fade-up text-center max-w-3xl mx-auto space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-tight text-[#000000]">
              Where Would You Like to Start?
            </h2>
            <p className="font-sans text-base text-[#000000]/75 leading-relaxed font-light">
              Most engagements need both eventually. Start with whichever one fits your problem right now.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Card Left: Strategy Consulting */}
            <div className="group bg-white border border-black/10 rounded-[2px] overflow-hidden shadow-2xl transition-all duration-500 flex flex-col min-h-[440px]">
              <div className="relative h-[200px] w-full overflow-hidden">
                <Image
                  src="/arvBuisness-bg.jpg"
                  alt="Strategy Consulting"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-8 sm:p-10 flex flex-col justify-between flex-1 bg-white">
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl sm:text-3xl font-light tracking-wider leading-tight text-black">
                    Strategy Consulting
                  </h3>
                  <p className="font-sans text-sm text-black/70 font-light leading-relaxed">
                    Growth strategy, GTM expansion, and operational work for organizations that need execution, not just plans.
                  </p>
                </div>
                <div className="pt-6">
                  <Link
                    href="/services/consulting"
                    className="inline-flex items-center gap-3 bg-[#fa0249] hover:bg-black text-white font-bold text-xs tracking-[0.2em] uppercase px-8 py-4 transition-all duration-300 hover-target shadow-xl"
                  >
                    <span>EXPLORE CONSULTING</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Card Right: Legal Advisory */}
            <div className="group bg-white border border-black/10 rounded-[2px] overflow-hidden shadow-2xl transition-all duration-500 flex flex-col min-h-[440px]">
              <div className="relative h-[200px] w-full overflow-hidden">
                <Image
                  src="/arvlegal-bg.jpg"
                  alt="Legal Advisory"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-8 sm:p-10 flex flex-col justify-between flex-1 bg-white">
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl sm:text-3xl font-light tracking-wider leading-tight text-black">
                    Legal Advisory
                  </h3>
                  <p className="font-sans text-sm text-black/75 font-light leading-relaxed">
                    Commercial dispute resolution and advocacy for businesses that need counsel as sharp as their ambition.
                  </p>
                </div>
                <div className="pt-6">
                  <Link
                    href="/services/legal"
                    className="inline-flex items-center gap-3 bg-[#fa0249] hover:bg-black text-white font-bold text-xs tracking-[0.2em] uppercase px-8 py-4 transition-all duration-300 hover-target shadow-xl"
                  >
                    <span>EXPLORE LEGAL</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA SECTION */}
      <section className="relative w-full bg-[#fa0249] py-10 md:py-12 px-6 md:px-16 border-t border-black/10 text-center text-black z-20">
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
              className="inline-block bg-white text-black hover:bg-gray-200 font-bold text-xs tracking-[0.2em] uppercase px-10 py-4 transition-all duration-300 hover-target shadow-xl rounded-[1px]"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <Footer />

    </div>
  );
}
