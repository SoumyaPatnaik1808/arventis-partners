'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface DisclaimerModalProps {
  onAccept?: () => void;
}

export default function DisclaimerModal({ onAccept }: DisclaimerModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== 'undefined') {
      const accepted = localStorage.getItem('arventis_disclaimer_accepted');
      if (accepted !== 'true') {
        setIsOpen(true);
      }
    }
  }, []);

  const handleProceed = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('arventis_disclaimer_accepted', 'true');
    }
    setIsOpen(false);
    if (onAccept) {
      onAccept();
    }
  };

  if (!isMounted || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99990] bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 select-none transition-all duration-500 animate-fade-in">
      {/* Main Premium Card */}
      <div className="relative z-10 max-w-2xl w-full bg-white border border-black/10 shadow-2xl p-6 sm:p-8 md:p-10 text-black">
        
        {/* Header */}
        <div className="mb-6">
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#fcbe03] font-bold block mb-1">
            REGULATORY DISCLAIMER
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-light tracking-tight text-black">
            Disclaimer & Terms
          </h2>
        </div>

        <div className="h-[1px] w-full bg-black/10 my-4" />

        {/* Disclaimer Body Text */}
        <div className="space-y-4 font-sans text-xs sm:text-sm text-black/75 font-light leading-relaxed max-h-[45vh] overflow-y-auto pr-2 custom-scrollbar">
          <p>
            The Bar Council of India does not permit advertisement or solicitation by advocates in any form or manner. By accessing this website, <strong className="text-black font-semibold">www.arventispartners.com</strong>, you acknowledge and confirm that you are seeking information relating to <strong className="text-black font-semibold">Arventis Partners</strong> of your own accord and that there has been no form of solicitation, advertisement or inducement by Arventis Partners or its members.
          </p>
          <p>
            The content of this website is for informational purposes only and should not be interpreted as soliciting or advertisement. No material/information provided on this website should be construed as legal advice.
          </p>
          <p>
            Arventis Partners shall not be liable for consequences of any action taken by relying on the material/information provided on this website. The contents of this website are the intellectual property of Arventis Partners.
          </p>
        </div>

        <div className="h-[1px] w-full bg-black/10 my-6" />

        {/* Action Toggles */}
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <button
            onClick={handleProceed}
            className="flex-1 py-3.5 px-6 bg-[#fcbe03] hover:bg-black text-white font-bold text-xs tracking-[0.2em] uppercase transition-all duration-300 rounded-[1px] shadow-lg shadow-[#fcbe03]/10"
          >
            I AGREE
          </button>
          <button
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.location.href = 'https://google.com';
              }
            }}
            className="flex-1 py-3.5 px-6 bg-transparent hover:bg-black/5 border border-black/20 text-black/70 hover:text-black font-bold text-xs tracking-[0.2em] uppercase transition-all duration-300 rounded-[1px]"
          >
            DECLINE
          </button>
        </div>

      </div>
    </div>
  );
}
