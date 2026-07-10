'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Scale, Globe, ShieldCheck, Mail, MapPin } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';

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
      title: "One Firm, Two Disciplines",
      subtitle: "Strategy consulting and legal advocacy, led by \n the same founding partners from day one",
      image: "/hero building.png",
      primaryBtnText: "Meet the Firm",
      primaryBtnHref: "/about",
    },
    {
      navTitle: "Strategy Consulting",
      title: "Strategy Consulting",
      subtitle: "Growth, GTM, and operating model design,\n delivered across India, GCC, UK, US, and South Korea",
      image: "/ArvBiz-bg.jpg",
      primaryBtnText: "Explore Consulting",
      primaryBtnHref: "/services#consulting",
      secondaryBtnText: "Discuss Growth",
      secondaryBtnHref: "/contact-us"
    },
    {
      navTitle: "Legal Advisory",
      title: "Legal Advisory",
      subtitle: "Litigation, compliance, and constitutional law, \n from Trial Courts to the Supreme Court of India",
      image: "/Hero-legal.png",
      primaryBtnText: "Explore Practice Areas",
      primaryBtnHref: "/services#legal",
      secondaryBtnText: "Initiate Mandate",
      secondaryBtnHref: "/contact-us"
    },
    {
      navTitle: "International Reach",
      title: "Local Depth.\nInternational Reach.",
      subtitle: "Legal and strategy advisory for  clients across India,\n  the Gulf, the UK, the US, and South Korea.",
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
    }, 10000);
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
        className="relative w-full h-screen flex items-center justify-center px-6 md:px-16 overflow-hidden cursor-pointer select-none bg-white"
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
              {/* Dark Overlay and Gradient for Readability */}
              <div className="absolute inset-0 bg-black/45 z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 z-10" />
            </div>
          ))}
        </div>

        {/* Hero Content Container - aligned to the center vertically */}
        <div className="relative z-10 max-w-7xl w-full text-left flex flex-col items-start justify-start h-[300px] md:h-[350px] mt-16 md:mt-32">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className={`slide-text-transition flex flex-col items-start text-left w-full transition-all duration-1000 ease-in-out ${
                currentSlide === idx
                  ? ' opacity-100 translate-y-0 relative z-10'
                  : 'opacity-0 translate-y-6 absolute inset-x-0 top-0 pointer-events-none z-0'
              }`}
            >
              <h1 className="text-white font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal tracking-tight leading-[1.1] max-w-5xl mb-4 sm:mb-6 drop-shadow-md">
                {formatSliderText(slide.title)}
                {slide.subtitle && (
                  <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white/95 mt-2 font-sans">
                    {formatSliderText(slide.subtitle)}
                  </span>
                )}
              </h1>
            </div>
          ))}
        </div>

        {/* BOTTOM NAVIGATION BAR */}
        <div className="absolute bottom-0 left-0 w-full z-20 px-6 md:px-16 pb-4 pt-8">
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
                      className={`h-full bg-[#16284C] transition-all ${
                        currentSlide === idx ? 'w-full animate-slide-progress' : 'w-0'
                      }`}
                      style={{
                        transitionDuration: currentSlide === idx ? '0ms' : '300ms',
                      }}
                    />
                  </div>
                  
                  {/* Title */}
                  <span className={`font-sans text-[10px] sm:text-xs md:text-sm font-semibold tracking-wider transition-colors duration-300 uppercase block w-full text-center ${
                    currentSlide === idx ? 'text-white font-bold' : 'text-white/90 group-hover:text-white'
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
              className="group cursor-pointer focus:outline-none mt-2"
            >
              <svg
                className="w-5 h-5 text-white/80 group-hover:text-white transition-transform duration-300 group-hover:translate-y-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

          </div>
        </div>

      </section>

      

      {/* 4. OVERVIEW SECTION (5 Items) */}
      <section id="overview" className="relative w-full bg-white text-black pt-6 pb-12 md:pt-8 md:pb-16 px-6 md:px-16 relative z-20">
        <div className="max-w-7xl mx-auto space-y-15">
          <div className="scroll-fade-up max-w-2xl">
           
            
          </div>

        
        </div>
      </section>
      {/* 5. DETAILED FEATURES */}
      <section className="relative w-full bg-white text-black py-12 md:py-16 px-6 md:px-16 relative z-20">
        <div className="max-w-7xl mx-auto space-y-16 md:space-y-20">
          {/* Feature 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-stretch">
            {/* Left Column: Text */}
            <div className="lg:col-span-6 lg:h-[400px] flex flex-col justify-between py-0 scroll-fade-up order-1">
              <div className="space-y-4 md:space-y-6">
                <h2 className="font-serif text-4xl sm:text-4xl md:text-5xl font-light tracking-tight leading-tight text-black lg:-mt-[10px]">
                  Strategy and Legal, <br/> Under One Mandate
                </h2>
                <div className="font-sans text-[17px] text-black/75 leading-relaxed font-light space-y-3">
                  <p>
                    Most clients engage separate advisors for strategy and for legal risk, then absorb the cost when the two are not aligned.
                  </p>
                  <p>
                    At Arventis, the same leadership is responsible for both domains from the outset, so clients are not required to coordinate between separate practices.
                  </p>
                  <p>
                    Each recommendation accounts for both the business objective and its legal implications.
                  </p>
                  <p>
                    Client time is spent on decisions rather than on coordinating between advisors.
                  </p>
                  
                  
                </div>
              </div>
              <div className="flex justify-center w-full">
                <Link
                  href="/our-people"
                  className="inline-flex items-center gap-3 bg-[#16284C] text-white font-bold text-xs tracking-[0.2em] uppercase px-8 py-4 transition-all duration-300 hover-target shadow-xl"
                >
                  <span>MEET THE TEAM</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>
            {/* Right Column: Image */}
            <div className="lg:col-span-6 scroll-fade-up relative h-[300px] lg:h-[400px] border border-black/10 rounded-[1px] overflow-hidden shadow-lg order-2">
              <Image
                src="/TwoDisciplines-heropg.jpg"
                alt="One Team, Start to Finish"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>


          {/* Feature 4 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-stretch pt-8">
            {/* Left Column: Image */}
            <div className="lg:col-span-6 scroll-fade-up relative h-[300px] lg:h-[400px] border border-black/10 rounded-[1px] overflow-hidden shadow-lg order-2 lg:order-1">
              <Image
                src="/int_fluency.jpeg"
                alt="Strategy Consulting"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Right Column: Text */}
            <div className="lg:col-span-6 lg:h-[400px] flex flex-col justify-between py-0 scroll-fade-up order-1 lg:order-2">
              <div className="space-y-4 md:space-y-6">
                <h2 className="font-serif text-4xl sm:text-4xl md:text-5xl font-light tracking-tight leading-tight text-black lg:-mt-[10px]">
                  Experience Across Markets
                </h2>
                <div className="font-sans text-[17px] text-black/75 leading-relaxed font-light space-y-3">
                  <p>
                    Over more than a decade, our leadership has advised on market entry, government mandates, and enterprise strategy across India, the GCC, the UK, the US, and South Korea.
                  </p>
                  <p>
                    That experience spans the regulatory, cultural, and commercial complexity specific to each of these jurisdictions.
                  </p>
                </div>
              </div>
              <div className="flex justify-center w-full">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-3 bg-[#16284C] text-white font-bold text-xs tracking-[0.2em] uppercase px-8 py-4 transition-all duration-300 hover-target shadow-xl"
                >
                  <span>SEE OUR EXPERTISE</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. WHERE TO START (Dual Cards) */}
      <section className="relative w-full bg-[#ffffff] text-[#000000] py-12 md:py-16 px-6 md:px-16 relative z-20">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="scroll-fade-up text-center max-w-3xl mx-auto space-y-4">
            <h2 className="font-serif text-[20px] sm:text-4xl md:text-5xl font-light tracking-tight leading-tight text-[#000000] md:whitespace-nowrap">
              Which Practice Would You Like to Start With?
            </h2>
            <div className="font-sans text-[17px] text-[#000000]/75 leading-relaxed font-light mt-2">
              <p>Most engagements ultimately involve both practices.<br/> Begin with whichever one matches the immediate need.</p>
            </div>
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
              <div className="p-8 sm:p-10 flex flex-col justify-between items-center flex-1 bg-white text-center">
                <div className="space-y-4 flex flex-col items-center">
                  <h3 className="font-serif text-2xl sm:text-3xl font-light tracking-wider leading-tight text-black">
                    Strategy Consulting
                  </h3>
                  <p className="font-sans text-[15px] text-black/70 font-light leading-relaxed">
                    Growth strategy, GTM expansion, and operational work for <br/> organisations that require execution alongside planning.
                  </p>
                </div>
                <div className="pt-6 flex justify-center">
                  <Link
                    href="/services/consulting"
                    className="inline-flex items-center gap-3 bg-[#16284C] text-white font-bold text-xs tracking-[0.2em] uppercase px-8 py-4 transition-all duration-300 hover-target shadow-xl"
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
                  src="/arvLegal-bg.jpeg"
                  alt="Legal Advisory"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-8 sm:p-10 flex flex-col justify-between items-center flex-1 bg-white text-center">
                <div className="space-y-4 flex flex-col items-center">
                  <h3 className="font-serif text-2xl sm:text-3xl font-light tracking-wider leading-tight text-black">
                    Legal Advisory
                  </h3>
                  <p className="font-sans text-[15px] text-black/75 font-light leading-relaxed">
                    Commercial dispute resolution and advocacy for<br/> businesses operating at scale.
                  </p>
                </div>
                <div className="pt-6 flex justify-center">
                  <Link
                    href="/services/legal"
                    className="inline-flex items-center gap-3 bg-[#16284C] text-white font-bold text-xs tracking-[0.2em] uppercase px-8 py-4 transition-all duration-300 hover-target shadow-xl"
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

       <ContactUs/>

      {/* 7. FOOTER */}
      <Footer />

    </div>
  );
}
