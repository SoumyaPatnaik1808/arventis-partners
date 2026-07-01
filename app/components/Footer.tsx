'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image'


const Footer = () => {
  return (
    <footer className="relative w-full bg-white text-black py-6 sm:py-8 px-4 sm:px-6 md:px-16 border-t border-black/10 font-sans">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
        
        {/* 1. TOP BRAND HEADER & PARALLEL DISCLAIMER / SECONDARY LINKS */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          {/* Left: Brand Header */}
          <div className="flex items-center justify-start py-2">
            <Image
              src="/logo-final.png"
              alt="Arventis footer logo"
              width={450}
              height={100}
              unoptimized
              className="h-16 sm:h-20 md:h-24 w-auto object-contain mix-blend-multiply filter contrast-[1.08]"
            />
          </div>

          {/* Right: Disclaimer, FAQ & Legal Links (Parallel with ARVENTIS PARTNERS) */}
          <div className="space-y-2.5 md:text-right font-sans text-xs text-black/80">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 md:justify-end font-medium">
              <Link href="/disclaimer" className="hover:underline hover:text-black">
                Disclaimer
              </Link>
              <Link href="/faq" className="hover:underline hover:text-black">
                FAQ
              </Link>
              <Link href="/contact#privacy" className="hover:underline hover:text-black">
                Privacy policy
              </Link>
              <span className="inline-flex items-center gap-1 text-black font-semibold cursor-pointer hover:underline">
                <span className="w-3.5 h-3.5 rounded-full border border-black flex items-center justify-center text-[8px] font-bold">✓</span>
                <span>Your privacy choices</span>
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 md:justify-end text-black/70">
              <span className="cursor-pointer hover:underline">Cookie preferences</span>
              <Link href="/contact#terms" className="hover:underline">
                Terms of use
              </Link>
              
            </div>

            <p className="text-[11px] text-black/50 pt-1">
              © 2026 Arventis Partners. All rights reserved. SEC1 & Statutory Compliance.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;