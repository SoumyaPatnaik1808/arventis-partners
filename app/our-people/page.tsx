'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, CheckCircle2, X } from 'lucide-react';
import { peopleData, Person } from './peopleData';
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

export default function OurPeoplePage() {
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  // Prevent scrolling on body when modal is open
  useEffect(() => {
    if (selectedPerson) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [selectedPerson]);

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

  const foundingPartners = [
    peopleData.find(p => p.id === 'anshuman'),
    peopleData.find(p => p.id === 'suman-thakur')
  ].filter(Boolean) as Person[];

  const otherMembers = [
    peopleData.find(p => p.id === 'yash-thakur'),
    peopleData.find(p => p.id === 'sweta'),
    peopleData.find(p => p.id === 'adarsh')
  ].filter(Boolean) as Person[];

  function getDomainPosition(person: Person) {
    let positionText = '';
    if (person.id === 'anshuman') {
      positionText = 'Founding Partner | Strategy Consulting Services'; 
    } else if (person.id === 'suman-thakur') {
      positionText = 'Founding Partner | Legal Services';
    } else if (person.id === 'yash-thakur') {
      positionText = 'Associate Counsel | Legal Services';
    } else if (person.id === 'sweta' || person.id === 'adarsh') {
      positionText = 'Advocate | Legal Services';
    } else {
      positionText = `${person.badge} | ${person.discipline || 'Member'}`;
    }

    const parts = positionText.split(' | ');
    if (parts.length === 2) {
      return (
        <>
          {parts[0]} <br />
          {parts[1]}
        </>
      );
    }
    return positionText;
  }

  const renderCard = (person: Person) => (
    <div 
      key={person.id} 
      onClick={() => setSelectedPerson(person)}
      className="bg-white rounded-none cursor-pointer group flex flex-col w-full border border-black/5 hover:bg-[#0a0862] hover:shadow-xl transition-all duration-300 pb-4"
    >
      <div className="relative w-full overflow-hidden bg-neutral-50 aspect-[4/5]">
        <Image
          src={person.imagePath}
          alt={person.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
        />
      </div>
      <div className="px-4 pt-6 flex flex-col items-center text-center w-full">
        <h3 className="text-lg sm:text-xl md:text-2xl font-serif text-[#0a0862] font-semibold group-hover:text-white transition-colors duration-300 w-full leading-tight">
          {person.cardName || person.name}
        </h3>
        <p className="text-xs sm:text-sm md:text-base font-sans text-black/60 mt-2 font-medium w-full group-hover:text-white/80 transition-colors duration-300">
          {getDomainPosition(person)}
        </p>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-white pb-0">
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
          <source src="https://pub-e76f3c2b747241f99a84d7c073d76e11.r2.dev/people_page.mp4" type="video/mp4" />
        </video>
        
        {/* Overlays for text readability */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30 z-10"></div>

        <div className="max-w-7xl mx-auto w-full relative z-20">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-normal text-white mb-6 drop-shadow-lg">
            <RevealHeading>OUR  PEOPLE</RevealHeading>
          </h1>
          <p className="scroll-fade-up font-sans text-sm sm:text-base md:text-lg text-white/90 font-light leading-relaxed max-w-3xl transition-delay-300 drop-shadow-md">
            A bench of senior strategists and Supreme Court advocates <br/>
             drawn from the highest tiers of their respective disciplines.
          </p>
        </div>
      </section>

      {/* 2. Team Sections */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 space-y-20">
        {/* Founding Partners */}
        <div className="space-y-12">
          <div className="relative flex flex-col items-center justify-center pb-6 scroll-fade-up">
            <h2 className="text-2xl md:text-3xl font-serif font-light text-black  text-center">
              Founding Partners
            </h2>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90vw] h-[2px] bg-gradient-to-r from-transparent via-[#0a0862] to-transparent opacity-90" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 max-w-2xl mx-auto hover:text-white">
            {foundingPartners.map(renderCard)}
          </div>
        </div>

        {/* Other Team Members */}
        <div className="space-y-12 pt-12">
          <div className="relative flex flex-col items-center justify-center pb-6 scroll-fade-up">
            <h2 className="text-2xl md:text-3xl font-serif font-light text-black text-center">
              Team
            </h2>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90vw] h-[2px] bg-gradient-to-r from-transparent via-[#0a0862] to-transparent opacity-90" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-16 max-w-4xl mx-auto hover:text-white">
            {otherMembers.map(renderCard)}
          </div>
        </div>
      </section>

      {/* 3. The Detail View (Modal) */}
      {selectedPerson && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm animate-in fade-in duration-300"
          data-lenis-prevent="true"
        >
          <div className="min-h-full flex items-center justify-center p-4 md:p-8 lg:p-12">
            <div 
              className="bg-white w-full max-w-6xl rounded-none shadow-2xl relative animate-in slide-in-from-bottom-8 duration-500"
            >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedPerson(null)}
              className="absolute top-2 right-2 md:top-3 md:right-3 p-1.5 rounded-full bg-black/5 hover:bg-black/10 text-black transition-colors z-20 group"
            >
              <X className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </button>

            <div className="flex flex-col md:flex-row">
              {/* Left Column */}
              <div className="w-full md:w-[35%] lg:w-[30%] bg-neutral-50 p-6 md:p-8 border-r border-black/5 flex flex-col">
                <div className="relative w-full mb-4 md:mb-6 overflow-hidden shadow-md aspect-[4/5]">
                  <Image
                    src={selectedPerson.imagePath}
                    alt={selectedPerson.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover"
                  />
                </div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-black mb-1 tracking-tight leading-snug">{selectedPerson.name}</h2>
                <div className="mb-6 space-y-1 mt-2">
                  <p className="text-black/80 font-bold text-[10px] md:text-xs uppercase tracking-wider">{selectedPerson.title}</p>
                  {selectedPerson.badge && <p className="text-[#0a0862] font-bold text-[10px] md:text-xs uppercase tracking-wider">{selectedPerson.badge}</p>}
                </div>
                
              </div>  

              {/* Right Column */}
              <div className="w-full md:w-[65%] lg:w-[70%] p-6 md:p-8 pr-8 md:pr-12 flex flex-col justify-start bg-white">
                <div className="space-y-4 mb-4">
                  {selectedPerson.bio.map((paragraph, idx) => (
                    <p key={idx} className="text-sm md:text-[15px] text-black/75 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {selectedPerson.customSectionTitle && selectedPerson.customSectionContent && (
                  <div className="mb-4">
                    <h4 className="text-[10px] md:text-xs font-bold text-black uppercase tracking-widest mb-3">
                      {selectedPerson.customSectionTitle}
                    </h4>
                    <div className="space-y-3 text-sm md:text-[15px] text-black/75 leading-relaxed">
                      {selectedPerson.customSectionContent.map((para, idx) => (
                        <p key={idx}>{para}</p>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-4 pt-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Data Column */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-[10px] md:text-xs font-bold text-black uppercase tracking-widest mb-3">
                          Geographies
                        </h4>
                        {selectedPerson.geographies && selectedPerson.geographies.length > 0 && (
                          <ul className="mt-2 space-y-1.5">
                            {selectedPerson.geographies.map((geo, idx) => (
                              <li key={idx} className="flex items-start text-xs md:text-sm font-medium text-black/80">
                                <MapPin className="w-3.5 h-3.5 mr-1.5 text-black/40 shrink-0 mt-0.5" />
                                <span>{geo}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>

                    {/* Right Data Column */}
                    <div className="space-y-6">
                      {selectedPerson.clientList && selectedPerson.clientList.length > 0 && (
                        <div>
                          <h4 className="text-[10px] md:text-xs font-bold text-black uppercase tracking-widest mb-3">
                            Representative Clients
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedPerson.clientList.map((client, idx) => (
                              <span key={idx} className="bg-black/5 px-3 py-1.5 text-[10px] md:text-xs font-medium text-black/80 rounded-sm">
                                {client}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div>
                        <h4 className="text-[10px] md:text-xs font-bold text-black uppercase tracking-widest mb-3">
                          Practice Highlights
                        </h4>
                        <ul className="space-y-3">
                          {selectedPerson.highlights.map(highlight => (
                            <li key={highlight.id} className="flex items-start group">
                              <CheckCircle2 className="w-4 h-4 mr-3 text-[#0a0862] shrink-0 mt-0.5 opacity-80 group-hover:opacity-100 transition-opacity" />
                              <span className="text-xs md:text-sm text-black/80 leading-snug font-medium group-hover:text-black transition-colors">
                                {highlight.text}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}

       <ContactUs />

      <Footer />
    </main>
  );
}
