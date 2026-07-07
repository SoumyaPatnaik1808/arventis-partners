'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ring = ringRef.current;
    const dot = dotRef.current;

    if (!ring || !dot) return;

    // Track mouse position and animate elements
    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      // Instant dot position
      gsap.set(dot, {
        x: clientX,
        y: clientY,
      });

      // Smooth trailing ring position
      gsap.to(ring, {
        x: clientX,
        y: clientY,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', onMouseMove);

    // Hover animation states
    const onMouseEnterInteractive = () => {
      ring.classList.add('custom-cursor-hover');
      gsap.to(ring, {
        scale: 0.75,
        backgroundColor: 'rgba(197, 168, 128, 0.12)',
        borderColor: 'rgba(197, 168, 128, 0.9)',
        duration: 0.25,
      });
      gsap.to(dot, {
        scale: 0.5,
        backgroundColor: 'rgba(197, 168, 128, 0.9)',
        duration: 0.25,
      });
    };

    const onMouseLeaveInteractive = () => {
      ring.classList.remove('custom-cursor-hover');
      gsap.to(ring, {
        scale: 1,
        backgroundColor: 'transparent',
        borderColor: 'rgba(197, 168, 128, 0.4)',
        duration: 0.25,
      });
      gsap.to(dot, {
        scale: 1,
        backgroundColor: '#fcbe03',
        duration: 0.25,
      });
    };

    // Find and attach to interactive elements
    const attachListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, .hover-target'
      );
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', onMouseEnterInteractive);
        el.addEventListener('mouseleave', onMouseLeaveInteractive);
      });
    };

    attachListeners();

    // Use MutationObserver to cover dynamic DOM updates
    const observer = new MutationObserver(() => {
      attachListeners();
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      observer.disconnect();
      
      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, .hover-target'
      );
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterInteractive);
        el.removeEventListener('mouseleave', onMouseLeaveInteractive);
      });
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="custom-cursor-ring hidden md:block" />
      <div ref={dotRef} className="custom-cursor-dot hidden md:block" />
    </>
  );
}
