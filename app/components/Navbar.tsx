'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation items mapping
  const navItems = [
    { label: 'about', href: '/about' },
    { label: 'our services', href: '/services' },
    { label: 'our people', href: '/our-people' },
    { label: 'contact us', href: '/contact' },
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
      <header className={`fixed top-0 left-0 w-full z-50 h-20 md:h-24 px-6 md:px-16 flex items-center justify-between transition-all duration-700 ${
        isMenuOpen ? 'bg-white border-b border-primary-navy/10' : 'bg-white/95  border-b border-primary-navy/10 shadow-md'
      }`}>
        {/* Left column: Extended Logo covering full height of navbar */}
        <div className="flex-1 flex items-center justify-start h-full my-0 py-0 z-20 ml-2 sm:ml-6 md:ml-10 lg:ml-12">
          <Link 
            href="/" 
            onClick={() => setIsMenuOpen(false)}
            className="hover-target inline-flex items-center h-full my-0 py-0 relative transition-transform duration-300 hover:scale-[1.01]"
          >
            <Image
              src="/logo-final.png"
              alt="Arventis Partners Logo"
              width={350}
              height={100}
              priority
              className="h-full w-auto object-contain my-0 py-0 "
            />
          </Link>
        </div>

        {/* Right column: Hamburger icon */}
        <div className="flex-1 flex justify-end items-center z-20">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            className="relative z-50 p-2 transition-colors duration-300 focus:outline-none hover-target text-primary-navy hover:text-primary-gold-dark"
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </header>

      {/* Full-page menu drawer translating from right */}
      <div
        className={`fixed inset-0 z-40 bg-white text-primary-navy flex flex-col justify-between px-6 py-12 md:p-20 transition-transform duration-1000 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header spacer */}
        <div className="relative z-10 pt-16 md:pt-24" />

        {/* Navigation links */}
        <nav className="relative z-10 flex flex-col items-center justify-center space-y-6 md:space-y-10 my-auto text-center">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl tracking-widest uppercase transition-all duration-300 hover:scale-105 hover-target ${
                  isActive ? 'text-primary-gold-dark font-bold' : 'text-primary-navy/80 hover:text-primary-gold-dark'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Drawer Footer */}
        <div className="relative z-10 border-t border-primary-navy/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs tracking-widest text-primary-navy/50 uppercase font-sans">
          <div>Judgment, Applied</div>
          <div>ARVENTIS PARTNERS &copy; {new Date().getFullYear()}</div>
        </div>
      </div>
    </>
  );
}
