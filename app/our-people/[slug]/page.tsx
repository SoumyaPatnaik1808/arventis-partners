'use client';

import React, { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink, ShieldCheck, Award, Briefcase, Building2 } from 'lucide-react';
import Navbar from '../../components/Navbar';
import { getPersonBySlug } from '../peopleData';
import Footer from '@/app/components/Footer';

interface PageProps {
  params: Promise<{ slug: string }>;
}

function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={`fill-current ${className}`} viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={`fill-current ${className}`} viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export default function DedicatedProfilePage({ params }: PageProps) {
  const resolvedParams = use(params);
  const person = getPersonBySlug(resolvedParams.slug);

  if (!person) {
    notFound();
  }

  return (
    <div className="relative w-full overflow-hidden bg-black text-white min-h-screen">
      <Navbar />

      {/* 1. HERO BANNER WITH PERSON'S NAME */}
      <section className="relative w-full bg-[#000000] pt-28 pb-12 md:pt-36 md:pb-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto relative z-10 space-y-6">
          {/* Back Button */}
          <div>
            <Link
              href="/our-people"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-[#fcbe03] hover:text-black text-white text-xs tracking-[0.2em] font-bold uppercase border border-white/10 px-5 py-3 transition-all duration-300 hover-target shadow-md"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>BACK TO OUR PEOPLE</span>
            </Link>
          </div>

          <div className="pt-4">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wide text-white drop-shadow-md">
              {person.name}
            </h1>
            <p className="font-sans text-xs sm:text-sm md:text-base text-[#fcbe03]/90 font-medium tracking-wider uppercase mt-2">
              {person.title}
            </p>
          </div>
        </div>
      </section>

      {/* 2. MAIN SPLIT SECTION (IMAGE ON LEFT, CONTENT ON RIGHT) */}
      <section className="relative w-full bg-white py-12 md:py-16 px-6 md:px-16 text-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: PERSON IMAGE */}
          <div className="lg:col-span-4 relative w-full h-[450px] sm:h-[550px] lg:h-[600px] bg-black rounded-none overflow-hidden shadow-2xl border border-black/10 group sticky top-28">
            <Image
              src={person.image}
              alt={person.name}
              fill
              priority
              className="object-cover object-top filter contrast-[1.03] group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10" />
            <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
              <h3 className="font-serif text-2xl font-light">{person.name}</h3>
            </div>
          </div>

          {/* RIGHT COLUMN: CONTENT GOES ON */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Credentials Banner */}
            {person.credentials && (
              <div className="bg-white p-6 border-l-4 border-[#fcbe03] shadow-md">
                <p className="font-serif text-lg sm:text-xl font-normal text-black leading-snug">
                  {person.credentials}
                </p>
              </div>
            )}

            {/* Biography */}
            <div className="space-y-4 bg-white p-8 sm:p-10 border border-black/10 shadow-md">
              <h3 className="font-serif text-2xl sm:text-3xl font-light tracking-wide text-black border-b border-black/10 pb-4">
                Biography & Professional Background
              </h3>
              <div className="space-y-4 font-sans text-xs sm:text-sm md:text-base text-black/85 leading-relaxed font-light">
                {person.bio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Custom Section (e.g. THE CONSULTING NETWORK) */}
            {person.customSectionTitle && person.customSectionContent && (
              <div className="bg-[#000000] text-white p-8 sm:p-10 border border-[#fcbe03]/30 shadow-2xl space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-[#fcbe03]" />
                  <h3 className="font-serif text-2xl sm:text-3xl font-light tracking-wide text-white">
                    {person.customSectionTitle}
                  </h3>
                </div>
                <div className="space-y-4 font-sans text-xs sm:text-sm md:text-base text-white/80 leading-relaxed font-light">
                  {person.customSectionContent.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Key Clients & Mandates (e.g. for Sweta) */}
            {person.clientList && person.clientList.length > 0 && (
              <div className="bg-white p-8 sm:p-10 border border-black/10 shadow-md space-y-4">
                <h3 className="font-serif text-xl sm:text-2xl font-light text-black tracking-wide border-b border-black/10 pb-3">
                  Key Institutional Clients & Representative Mandates
                </h3>
                <div className="flex flex-wrap gap-2.5 pt-2">
                  {person.clientList.map((client, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-2 bg-white px-4 py-2 border border-black/10 text-black text-xs font-semibold tracking-wider uppercase"
                    >
                      <Building2 size={13} className="text-[#fcbe03]" />
                      <span>{client}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Practice Highlights */}
            {person.highlights && person.highlights.length > 0 && (
              <div className="bg-white p-8 sm:p-10 border border-black/10 shadow-md space-y-4">
                <h3 className="font-serif text-xl sm:text-2xl font-light text-black tracking-wide border-b border-black/10 pb-3">
                  Key Practice Highlights & Representative Experience
                </h3>
                <div className="space-y-3 pt-2">
                  {person.highlights.map((item, idx) => (
                    <div key={item.id || idx} className="flex items-start gap-3 bg-white p-4 border border-black/5">
                      <span className="w-2 h-2 rounded-full bg-[#fcbe03] mt-2 flex-shrink-0" />
                      <span className="font-sans text-xs sm:text-sm text-black font-medium leading-relaxed">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* DEDICATED HEADING NAMED "CONTACT" WITH LINKEDIN AND INSTAGRAM */}
            <div className="bg-[#000000] text-white p-8 sm:p-10 border border-[#fcbe03]/30 shadow-2xl space-y-6">
              <div>
                <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#fcbe03] font-bold block mb-1">
                  DIRECT ADVISORY CHANNEL
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-light tracking-wide text-white">
                  Contact
                </h3>
              </div>
              <p className="font-sans text-xs sm:text-sm text-white/70 font-light leading-relaxed max-w-2xl">
                Connect directly with {person.name} via professional networks or initiate a formal confidential mandate evaluation through Arventis Partners.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                {/* LinkedIn Link */}
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white/10 hover:bg-[#fcbe03] text-white hover:text-white font-sans text-xs font-bold tracking-[0.2em] uppercase px-6 py-3.5 border border-white/20 transition-all duration-300 shadow-md hover-target"
                >
                  <LinkedInIcon className="w-4 h-4" />
                  <span>LINKEDIN PROFILE</span>
                </a>

                {/* Instagram Link */}
                <a
                  href={person.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white/10 hover:bg-[#fcbe03] text-white hover:text-white font-sans text-xs font-bold tracking-[0.2em] uppercase px-6 py-3.5 border border-white/20 transition-all duration-300 shadow-md hover-target"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>INSTAGRAM</span>
                </a>

               
                
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CONTACT CTA SECTION */}
      <section className="relative w-full bg-black py-10 md:py-12 px-6 md:px-16 text-center text-white z-20">
        <div className="max-w-4xl mx-auto space-y-6 scroll-fade-up">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white">
            Let's Start the Conversation
          </h2>
          <p className="font-sans text-sm md:text-base text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
            Establish a direct partner relationship or initiate a mandate. Our strategy and legal practices operate under strict NDA protocols.
          </p>
          <div className="pt-4">
            <Link
              href="/contact-us"
              className="inline-block bg-[#fcbe03] hover:bg-white text-black font-bold text-xs tracking-[0.2em] uppercase px-10 py-4 transition-all duration-300 hover-target shadow-xl rounded-[1px]"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <Footer/>
    </div>
  );
}
