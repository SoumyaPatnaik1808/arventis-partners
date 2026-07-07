'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image'


const Footer = () => {
  return (
    <footer className="relative w-full bg-white text-black py-6 sm:py-8 px-4 sm:px-6 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
        
        {/* 1. TOP BRAND HEADER & PARALLEL DISCLAIMER / SECONDARY LINKS */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          {/* Left: Brand Header */}
          <div className="flex items-center justify-start py-0">
            <Image
              src="/LOGO X.png"
              alt="Arventis footer logo"
              width={450}
              height={120}
              unoptimized
              className="h-12 sm:h-14 md:h-16 w-auto object-contain origin-left mix-blend-multiply filter contrast-[1.08]"
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
              <Link href="/privacy-policy" className="hover:underline hover:text-black hover:text-[#fc8403] transition-colors">
                Privacy policy
              </Link>
              <Link href="/terms-of-use" className="hover:underline hover:text-black hover:text-[#fc8403] transition-colors">
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