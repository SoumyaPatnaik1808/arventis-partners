'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface LoadingScreenProps {
  onComplete?: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const container = containerRef.current;
    const text = textRef.current;
    const subtitle = subtitleRef.current;

    if (!container || !text || !subtitle) return;

    // Reset scroll to top on initial mount/loading
    window.scrollTo(0, 0);

    // Split text into letters for the blur-reveal effect
    const rawText = text.innerText;
    text.innerHTML = '';
    const letters: HTMLSpanElement[] = [];

    rawText.split('').forEach((char) => {
      const span = document.createElement('span');
      span.innerText = char === ' ' ? '\u00A0' : char; // Keep non-breaking space
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      text.appendChild(span);
      letters.push(span);
    });

    const tl = gsap.timeline({
      onComplete: () => {
        // Slide the loading container up completely
        gsap.to(container, {
          yPercent: -100,
          duration: 1.2,
          ease: 'power4.inOut',
          onComplete: () => {
            setIsVisible(false);
            // Re-trigger Locomotive Scroll update if needed
            window.dispatchEvent(new Event('resize'));
            if (onComplete) {
              onComplete();
            }
          },
        });
      },
    });

    // 1. Calming initial delay
    tl.delay(0.3);

    // 2. Letters fade in with blur and gentle translate up
    tl.to(letters, {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      stagger: 0.04,
      duration: 1.2,
      ease: 'power3.out',
      // Start slightly blurred and translated
      onStart: () => {
        gsap.set(letters, { filter: 'blur(12px)', y: 15 });
      },
    });

    // 3. Subtitle slides up gently
    tl.fromTo(
      subtitle,
      { opacity: 0, y: 10 },
      { opacity: 0.6, y: 0, duration: 1.0, ease: 'power2.out' },
      '-=0.6' // overlap with the letter animations
    );

    // 4. Calming pause at full opacity before slide-out
    tl.to({}, { duration: 1.0 });

    return () => {
      tl.kill();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-[#081226] z-[99999] flex flex-col items-center justify-center select-none"
    >
      <div className="text-center px-4">
        <h1
          ref={textRef}
          className="font-serif text-3xl md:text-5xl lg:text-6xl tracking-[0.25em] text-[#faf6ee] font-normal leading-normal uppercase"
        >
          ARVENTIS PARTNERS
        </h1>
        <p
          ref={subtitleRef}
          className="font-sans text-xs md:text-sm tracking-[0.4em] text-[#c5a880] uppercase mt-6 opacity-0"
        >
          Where Strategy Meets Standing 
        </p>
      </div>
    </div>
  );
}
