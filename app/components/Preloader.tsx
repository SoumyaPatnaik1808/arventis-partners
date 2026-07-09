'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Preloader() {
  const [mounted, setMounted] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);
  const [exitAnimation, setExitAnimation] = useState(false);

  useEffect(() => {
    // Only run on client
    setMounted(true);

    // Disable scrolling while loading
    document.body.style.overflow = 'hidden';

    // Timeline for preloader stages:
    // 1. Let the animation complete (takes ~1.8s)
    // 2. Trigger the slide up exit animation
    const exitTimer = setTimeout(() => {
      setExitAnimation(true);
    }, 2500);

    // 3. Remove from DOM after slide up finishes (1.2s duration)
    const removeTimer = setTimeout(() => {
      setShouldRender(false);
      // Restore scrolling
      document.body.style.overflow = '';
    }, 3700);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = '';
    };
  }, []);

  if (!mounted || !shouldRender) return null;

  const brandText = "ARVENTIS PARTNERS";

  const rawCss = `
    @keyframes preloaderLetterReveal {
      0% {
        opacity: 0;
        transform: translateY(15px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes preloaderLogoReveal {
      0% {
        opacity: 0;
        transform: translateY(12px) scale(0.98);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }
    @keyframes preloaderLineGrow {
      0% {
        width: 0%;
        opacity: 0;
      }
      30% {
        opacity: 0.8;
      }
      100% {
        width: 100%;
        opacity: 1;
      }
    }
    @keyframes preloaderTaglineFade {
      0% {
        opacity: 0;
        transform: translateY(8px);
      }
      100% {
        opacity: 0.85;
        transform: translateY(0);
      }
    }
    .preloader-letter {
      display: inline-block;
      opacity: 0;
      animation: preloaderLetterReveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    .preloader-logo {
      opacity: 0;
      animation: preloaderLogoReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    .preloader-line {
      height: 1.5px;
      background-color: #ffffff;
      width: 0%;
      opacity: 0;
      animation: preloaderLineGrow 1.5s cubic-bezier(0.22, 1, 0.36, 1) 0.4s forwards;
    }
    .preloader-tagline {
      opacity: 0;
      animation: preloaderTaglineFade 1.2s cubic-bezier(0.16, 1, 0.3, 1) 1s forwards;
    }
  `;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#01142d] transition-transform duration-[1200ms] ${
        exitAnimation ? '-translate-y-full' : 'translate-y-0'
      }`}
      style={{
        transitionTimingFunction: 'cubic-bezier(0.85, 0, 0.15, 1)',
      }}
    >
      {/* Inject styling safely */}
      <style dangerouslySetInnerHTML={{ __html: rawCss }} />

      {/* DESKTOP PRELOADER (LOGO VIEW) - Hidden on mobile, shown on medium & up */}
      <div className="hidden md:flex flex-col items-center select-none text-center px-4">
        {/* Logo Image */}
        <div className="preloader-logo py-2 flex items-center justify-center">
          <Image
            src="/logo-Black-bg.png"
            alt="Arventis Partners Logo"
            width={450}
            height={120}
            priority
            unoptimized
            className="w-auto h-28 md:h-36 lg:h-40 object-contain"
          />
        </div>

        {/* Elegant Underline */}
        <div className="w-[180px] sm:w-[240px] md:w-[300px] mt-3">
          <div className="preloader-line mx-auto" />
        </div>
      
      </div>

      {/* MOBILE PRELOADER (LOGO VIEW) - Shown on mobile/tablet, hidden on medium & up */}
      <div className="flex md:hidden flex-col items-center select-none text-center px-4">
        {/* Logo Image */}
        <div className="preloader-logo py-2 flex items-center justify-center">
          <Image
            src="/logo-Black-bg.png"
            alt="Arventis Partners Logo"
            width={380}
            height={100}
            priority
            unoptimized
            className="w-auto h-16 sm:h-20 object-contain"
          />
        </div>

        {/* Elegant Underline */}
        <div className="w-[180px] sm:w-[240px] mt-3">
          <div className="preloader-line mx-auto" />
        </div>
        

      
        
      </div>
    </div>
  );
}
