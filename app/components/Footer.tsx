'use client';

import React from 'react';
import Link from 'next/link';

function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={`fill-current ${className}`} viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z" />
    </svg>
  );
}

function TwitterIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={`fill-current ${className}`} viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={`fill-current ${className}`} viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function YoutubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={`fill-current ${className}`} viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function RssIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={`fill-current ${className}`} viewBox="0 0 24 24">
      <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20 5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44v2.83c7.2 0 13 5.8 13 13h2.83c0-8.74-7.09-15.83-15.83-15.83m0 5.66v2.83c4.07 0 7.37 3.3 7.37 7.34h2.83c0-5.62-4.55-10.17-10.2-10.17z" />
    </svg>
  );
}

const Footer = () => {
  return (
    <footer className="relative w-full bg-white text-primary-navy py-16 px-6 md:px-16 border-t border-primary-navy/10 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* 1. TOP BRAND HEADER & PARALLEL DISCLAIMER / SECONDARY LINKS */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
          {/* Left: Brand Header */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl tracking-[0.15em] uppercase text-primary-navy font-normal">
              ARVENTIS PARTNERS
            </h2>
            <p className="font-serif italic text-sm text-primary-navy/60 mt-1">
              Judgment, Applied.
            </p>
          </div>

          {/* Right: Disclaimer, FAQ & Legal Links (Parallel with ARVENTIS PARTNERS) */}
          <div className="space-y-2.5 md:text-right font-sans text-xs text-primary-navy/80">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 md:justify-end font-medium">
              <Link href="/disclaimer" className="hover:underline hover:text-primary-navy">
                Disclaimer
              </Link>
              <Link href="/faq" className="hover:underline hover:text-primary-navy">
                FAQ
              </Link>
              <Link href="/contact#privacy" className="hover:underline hover:text-primary-navy">
                Privacy policy
              </Link>
              <span className="inline-flex items-center gap-1 text-primary-navy font-semibold cursor-pointer hover:underline">
                <span className="w-3.5 h-3.5 rounded-full border border-primary-navy flex items-center justify-center text-[8px] font-bold">✓</span>
                <span>Your privacy choices</span>
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 md:justify-end text-primary-navy/70">
              <span className="cursor-pointer hover:underline">Cookie preferences</span>
              <Link href="/contact#terms" className="hover:underline">
                Terms of use
              </Link>
              <Link href="/contact#map" className="hover:underline">
                Office locations
              </Link>
            </div>

            <p className="text-[11px] text-primary-navy/50 pt-1">
              © 2026 Arventis Partners. All rights reserved. SEC1 & Statutory Compliance.
            </p>
          </div>
        </div>

        {/* 2. NAVIGATION COLUMNS */}
        <div className="pt-2">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl font-sans text-sm md:text-base font-semibold text-primary-navy">
            <div>
              <Link href="/our-people" className="hover:text-primary-gold-dark transition-colors duration-300">
                Our People
              </Link>
            </div>
            <div>
              <Link href="/services" className="hover:text-primary-gold-dark transition-colors duration-300">
                Services
              </Link>
            </div>
            <div>
              <Link href="/contact#map" className="hover:text-primary-gold-dark transition-colors duration-300">
                Global Footprint
              </Link>
            </div>
            <div>
              <Link href="/about" className="hover:text-primary-gold-dark transition-colors duration-300">
                About us
              </Link>
            </div>
          </div>
        </div>

        {/* 3. THIN DIVIDER */}
        <div className="border-t border-primary-navy/15 pt-8" />

        {/* 4. BOTTOM ROW: SOCIAL ICONS */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="w-9 h-9 rounded-full bg-primary-navy text-white flex items-center justify-center hover:bg-primary-gold-dark transition-all duration-300 hover:scale-110 shadow-sm"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter / X"
              className="w-9 h-9 rounded-full bg-primary-navy text-white flex items-center justify-center hover:bg-primary-gold-dark transition-all duration-300 hover:scale-110 shadow-sm"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
              className="w-9 h-9 rounded-full bg-primary-navy text-white flex items-center justify-center hover:bg-primary-gold-dark transition-all duration-300 hover:scale-110 shadow-sm"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              title="YouTube"
              className="w-9 h-9 rounded-full bg-primary-navy text-white flex items-center justify-center hover:bg-primary-gold-dark transition-all duration-300 hover:scale-110 shadow-sm"
            >
              <YoutubeIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:contact@arventispartners.com"
              title="RSS / Insights Feed"
              className="w-9 h-9 rounded-full bg-primary-navy text-white flex items-center justify-center hover:bg-primary-gold-dark transition-all duration-300 hover:scale-110 shadow-sm"
            >
              <RssIcon className="w-4 h-4" />
            </a>
          </div>

          <Link href="/contact" className="hover-target font-sans text-xs font-semibold uppercase tracking-wider text-primary-navy hover:text-primary-gold-dark transition-colors">
            Contact Us &rarr;
          </Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;