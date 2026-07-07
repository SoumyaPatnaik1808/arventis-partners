'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Check if current page has a dark hero banner at the top
  const isDarkHeroPage =
    pathname === '/' ||
    pathname === '/about' ||
    pathname === '/services' ||
    pathname === '/services/consulting' ||
    pathname === '/services/legal' ||
    pathname === '/our-people' ||
    pathname === '/contact';

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  const isHeaderWhite = isMenuOpen || !isDarkHeroPage || isScrolled;

  // Navigation items mapping
  const navItems = [
    { label: 'about', href: '/about' },
    { label: 'services', href: '/services' },
    { label: 'our people', href: '/our-people' },
    { label: 'contact us', href: '/contact-us' },
  ];

  // Lock body scroll when full page menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 h-14 sm:h-16 md:h-18 px-2 sm:px-6 md:px-12 lg:px-16 flex items-center justify-between transition-all duration-500 ${
        isHeaderWhite ? 'bg-white/95 backdrop-blur-md shadow-sm text-black' : 'bg-transparent text-white'
      }`}>
        {/* Left column: Logo */}
        <div className="flex items-center justify-start h-full py-1.5 sm:py-2 z-20">
          <Link 
            href="/" 
            onClick={() => setIsMenuOpen(false)}
            className="hover-target inline-flex items-center h-full relative transition-transform duration-300 hover:scale-[1.02]"
          >
            <Image
              src={isHeaderWhite ? "/LOGO X.png" : "/logo X white.png"}
              alt="Arventis Partners Logo"
              width={450}
              height={120}
              priority
              unoptimized
              className={`h-full max-h-12 sm:max-h-14 md:max-h-16 w-auto object-contain transition-all duration-500 origin-left ${
                isHeaderWhite ? 'mix-blend-multiply filter contrast-[1.08]' : 'opacity-90'
              }`}
            />
          </Link>
        </div>

        {/* Center column: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 z-20">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            
            if (item.label === 'contact us') {
              const isContactActive = pathname === '/contact-us';
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`inline-flex items-center justify-center px-6 py-3 text-xs tracking-[0.25em] font-bold uppercase transition-all duration-300 border rounded-[2px] hover-target ${
                    isContactActive
                      ? 'bg-[#fc8403] text-white border-[#fc8403]'
                      : isHeaderWhite
                        ? 'border-black/80 text-black hover:bg-[#fc8403] hover:text-white hover:border-black'
                        : 'border-[#fc8403] text-white hover:bg-[#fc8403] hover:text-white hover:border-[#fc8403]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`font-sans text-sm font-bold tracking-widest uppercase transition-all duration-300 hover-target nav-link-hover ${
                  isActive
                    ? 'text-[#fc8403] font-bold border-b-2 border-[#fc8403] pb-1 after:hidden'
                    : isHeaderWhite
                      ? 'text-black/85 hover:text-[#fc8403]'
                      : 'text-white hover:text-[#fc8403]'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right column: Hamburger Toggle (Visible ONLY on mobile/tablet) */}
        <div className="flex items-center justify-end z-20 md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            className={`relative z-50 p-1.5 sm:p-2 transition-colors duration-300 focus:outline-none hover-target ${
              isMenuOpen 
                ? 'text-black hover:text-[#fc8403]'
                : isHeaderWhite
                  ? 'text-black hover:text-[#fc8403]'
                  : 'text-white hover:text-[#fc8403]'
            }`}
          >
            {isMenuOpen ? <X className="w-8 h-8 sm:w-9 sm:h-9" /> : <Menu className="w-8 h-8 sm:w-9 sm:h-9" />}
          </button>
        </div>
      </header>

      {/* Full-page menu drawer translating from right to left */}
      <div
        className={`fixed inset-0 z-40 bg-white text-black flex flex-col justify-between px-6 py-12 md:p-20 transition-transform duration-700 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header spacer */}
        <div className="relative z-10 pt-16 md:pt-24" />

        {/* Navigation links */}
        <nav className="relative z-10 flex flex-col items-center justify-center space-y-6 md:space-y-10 my-auto text-center">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl tracking-widest uppercase transition-all duration-300 hover:scale-105 hover-target nav-link-hover ${
                  isActive ? 'text-[#fc8403] font-bold after:hidden' : 'text-black/80 hover:text-[#fc8403]'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Drawer Footer */}
        <div className="relative z-10 border-t border-black/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs tracking-widest text-black/55 uppercase font-sans">
          <div>Where Strategy meets standing</div>
          <div>ARVENTIS PARTNERS &copy; {new Date().getFullYear()}</div>
        </div>
      </div>
    </>
  );
}
