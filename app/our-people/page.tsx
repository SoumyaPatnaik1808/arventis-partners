'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import { ALL_PEOPLE, MemberProfile } from './peopleData';
import Footer from '../components/Footer';

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

function LinkedInIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={`fill-current ${className}`} viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={`fill-current ${className}`} viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export default function OurPeoplePage() {
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

  const foundingPartners = ALL_PEOPLE.filter((p) => p.category === 'Founding Partner');
  const consultancyMembers = ALL_PEOPLE.filter((p) => p.slug === 'anshuman-mohanty');
  const legalMembersRow1Order = ['kumar-suman', 'yash', 'sweta', 'adarsh'];
  const legalMembersRow1 = legalMembersRow1Order
    .map((slug) => ALL_PEOPLE.find((p) => p.slug === slug))
    .filter((p): p is MemberProfile => p !== undefined);
  const legalMembersRow2 = ALL_PEOPLE.filter((p) =>
    ['advocate-1', 'advocate-2', 'advocate-3', 'advocate-4'].includes(p.slug)
  );

  const renderCard = (member: MemberProfile) => (
    <div
      key={member.slug + member.category}
      className="group relative bg-white border border-primary-navy/10 rounded-[1px] overflow-hidden shadow-md hover:shadow-2xl hover:border-primary-gold transition-all duration-500 flex flex-col justify-between scroll-fade-up"
    >
      {/* Card Header & Image */}
      <div>
        <div className="relative w-full h-72 sm:h-80 bg-primary-navy overflow-hidden">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className={`${
              member.category === 'Founding Partner'
                ? 'object-contain object-center p-2'
                : 'object-cover object-top'
            } filter contrast-[1.03] group-hover:scale-105 transition-transform duration-700 ease-out`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/90 via-primary-navy/20 to-transparent z-10" />
          
          {member.badge && (
            <span className="absolute top-4 left-4 z-20 bg-[#081226]/90 backdrop-blur-md text-primary-gold border border-primary-gold/30 text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 shadow-md">
              {member.badge}
            </span>
          )}

          {/* Social Media Links directly on Card */}
          <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="w-8 h-8 rounded-full bg-primary-navy/80 hover:bg-[#0077b5] text-white flex items-center justify-center border border-white/20 transition-all duration-300 hover:scale-110 shadow-md"
            >
              <LinkedInIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={member.instagram}
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              className="w-8 h-8 rounded-full bg-primary-navy/80 hover:bg-[#e1306c] text-white flex items-center justify-center border border-white/20 transition-all duration-300 hover:scale-110 shadow-md"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
            <h3 className="font-serif text-2xl sm:text-3xl font-light tracking-wide drop-shadow-md">
              {member.name}
            </h3>
            <p className="font-sans text-xs text-primary-gold font-medium tracking-wider uppercase mt-1">
              {member.title}
            </p>
          </div>
        </div>

        {/* Card Content Details */}
        <div className="p-6 space-y-4">
          {member.credentials && (
            <div className="bg-bg-warm p-3 border-l-2 border-primary-gold text-primary-navy/90 text-[11px] font-sans font-medium leading-relaxed">
              {member.credentials}
            </div>
          )}

          <p className="font-sans text-xs sm:text-sm text-primary-navy/75 leading-relaxed font-light line-clamp-3">
            {member.shortDesc}
          </p>
        </div>
      </div>

      {/* Card Footer with Link to Dedicated Profile Page */}
      <div className="p-6 pt-0 mt-auto">
        <Link
          href={`/our-people/${member.slug}`}
          className="w-full bg-primary-navy hover:bg-primary-gold hover:text-primary-navy text-white text-xs font-bold tracking-[0.2em] uppercase py-3.5 px-4 transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg hover-target"
        >
          <span>OPEN PROFILE</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );

  return (
    <div className="relative w-full overflow-hidden bg-primary-navy text-white min-h-screen">
      <Navbar />

      {/* 1. HERO BANNER */}
      <section className="relative w-full bg-primary-navy pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-primary-gold font-bold block mb-4">
            PEOPLE & LEADERSHIP
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight text-white mb-6">
            <RevealHeading>OUR PEOPLE.</RevealHeading>
          </h1>
        
        </div>
      </section>

      {/* SECTION 1: FOUNDING PARTNERS */}
      <section className="relative w-full bg-bg-warm py-20 md:py-28 px-6 md:px-16 text-primary-navy border-b border-primary-navy/10">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="scroll-fade-up flex items-center gap-4 pb-4 border-b border-primary-navy/15">
            <span className="font-sans text-xs sm:text-sm tracking-[0.3em] uppercase font-bold text-primary-gold-dark">
              01 &nbsp;│&nbsp; FOUNDING PARTNERS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {foundingPartners.map(renderCard)}
          </div>
        </div>
      </section>

      {/* SECTION 2: CONSULTANCY */}
      <section className="relative w-full bg-white py-20 md:py-28 px-6 md:px-16 text-primary-navy border-b border-primary-navy/10">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="scroll-fade-up flex items-center gap-4 pb-4 border-b border-primary-navy/15">
            <span className="font-sans text-xs sm:text-sm tracking-[0.3em] uppercase font-bold text-primary-gold-dark">
              02 &nbsp;│&nbsp; CONSULTANCY PRACTICE
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultancyMembers.map(renderCard)}
          </div>
        </div>
      </section>

      {/* SECTION 3: LEGAL BENCH */}
      <section className="relative w-full bg-bg-warm py-20 md:py-28 px-6 md:px-16 text-primary-navy">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="scroll-fade-up flex items-center gap-4 pb-4 border-b border-primary-navy/15">
            <span className="font-sans text-xs sm:text-sm tracking-[0.3em] uppercase font-bold text-primary-gold-dark">
              03 &nbsp;│&nbsp; LEGAL BENCH
            </span>
          </div>

          {/* Legal Row 1 (4 Members) */}
          <div className="space-y-6">
          
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {legalMembersRow1.map(renderCard)}
            </div>
          </div>

          {/* Legal Row 2 (4 Members) */}
          <div className="space-y-6 pt-6 border-t border-primary-navy/10">
           
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {legalMembersRow2.map(renderCard)}
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <Footer/>
    </div>
  );
}
