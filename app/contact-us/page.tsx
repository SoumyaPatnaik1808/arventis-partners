'use client';

import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReCAPTCHA from 'react-google-recaptcha';

// Custom component to reveal text word-by-word with a calming stagger
function RevealHeading({ children, className = "" }: { children: string; className?: string }) {
  const words = children.split(' ');
  return (
    <span className={`reveal-text flex flex-wrap justify-center gap-x-2 gap-y-1 ${className}`}>
      {words.map((word, idx) => (
        <span key={idx} className="reveal-text-line inline-block overflow-hidden">
          <span
            className="reveal-text-word"
            style={{ transitionDelay: `${idx * 0.04}s` }}
          >
            {word}
          </span>
        </span>
      ))}
    </span>
  );
}

export default function ContactUsPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [serviceInterest, setServiceInterest] = useState<'Consulting' | 'Legal' | 'Both'>('Consulting');
  
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organisation: '',
    message: '',
  });

  // Intersection Observer for scroll-triggered reveal animations
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const revealElements = document.querySelectorAll('.reveal-text');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('reveal-text')) {
              entry.target.classList.add('reveal-text-active');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const onCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaToken) {
      setErrorMessage('Please verify that you are not a robot.');
      return;
    }
    
    setIsLoading(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact-us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          organisation: formData.organisation || 'Not Specified',
          phone: formData.phone,
          message: `Service of Interest: ${serviceInterest}\n\nEnquiry details:\n${formData.message || 'No custom message provided.'}`,
          captchaToken
        }),
      });

      const result = await res.json();
      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', organisation: '', message: '' });
        setServiceInterest('Consulting');
      } else {
        setErrorMessage(result.error || 'Failed to submit enquiry. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setErrorMessage('A network error occurred. Please try again.');
    } finally {
      setIsLoading(false);
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
        setCaptchaToken(null);
      }
    }
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col bg-[#ffffff] text-[#000000]">
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-start pt-20 pb-16 px-6 relative">
        
        {/* Animated transparent heading banner */}
        <div className="text-center pt-10 pb-6 w-full max-w-4xl mx-auto z-10">
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#000000] tracking-wide leading-tight px-4 flex justify-center text-center">
            <RevealHeading>Thank You for Showing Your Interest</RevealHeading>
          </h1>
        </div>

        {/* Form panel container */}
        <div className="w-full max-w-3xl bg-white border border-[#000000]/10 p-6 md:p-12 shadow-lg rounded-[1px] relative z-10">
          {isSubmitted ? (
            <div className="text-center py-16 space-y-4 animate-fade-in flex flex-col items-center">
              <div className="relative mb-6">
                {/* Background jagged circle imitation */}
                <div className="absolute inset-0 bg-[#fa0249] rounded-full scale-110 opacity-20 blur-sm rotate-45"></div>
                <div className="relative w-24 h-24 bg-[#fa0249] rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" /></svg>
                </div>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl font-medium text-black whitespace-nowrap">Thank You For Contacting Us</h3>
              <p className="font-sans text-base md:text-lg text-slate-600 max-w-md mx-auto whitespace-nowrap">
                Our Team will reach you shortly
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-8 inline-flex justify-center bg-neutral-800 hover:bg-[#fa0249] text-white font-medium text-sm px-8 py-3 transition-all duration-300 rounded-full"
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto w-full space-y-8">
              <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-light text-center">
                We work with ambitious leaders who want to define the future, not hide from it. Together, we achieve extraordinary outcomes.
              </p>

              {errorMessage && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded-[1px] font-sans">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name field */}
                <div>
                  <label htmlFor="name" className="block font-sans text-xs uppercase tracking-widest text-[#000000] font-bold mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-black/20 px-4 py-3 text-sm text-[#000000] placeholder:text-slate-400 focus:outline-none focus:border-[#fa0249] transition-all duration-300 font-sans rounded-[1px]"
                    placeholder="Your name"
                  />
                </div>

                {/* Email field */}
                <div>
                  <label htmlFor="email" className="block font-sans text-xs uppercase tracking-widest text-[#000000] font-bold mb-2">
                    Contact Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-black/20 px-4 py-3 text-sm text-[#000000] placeholder:text-slate-400 focus:outline-none focus:border-[#fa0249] transition-all duration-300 font-sans rounded-[1px]"
                    placeholder="Your email address"
                  />
                </div>

                {/* Phone field */}
                <div>
                  <label htmlFor="phone" className="block font-sans text-xs uppercase tracking-widest text-[#000000] font-bold mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-black/20 px-4 py-3 text-sm text-[#000000] placeholder:text-slate-400 focus:outline-none focus:border-[#fa0249] transition-all duration-300 font-sans rounded-[1px]"
                    placeholder="Your phone number"
                  />
                </div>

                {/* Organization field */}
                <div>
                  <label htmlFor="organisation" className="block font-sans text-xs uppercase tracking-widest text-[#000000] font-bold mb-2">
                    Organization
                  </label>
                  <input
                    id="organisation"
                    type="text"
                    value={formData.organisation}
                    onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                    className="w-full bg-white border border-black/20 px-4 py-3 text-sm text-[#000000] placeholder:text-slate-400 focus:outline-none focus:border-[#fa0249] transition-all duration-300 font-sans rounded-[1px]"
                    placeholder="Your organization name"
                  />
                </div>

                {/* Service Choice capsules */}
                <div>
                  <label className="block font-sans text-xs uppercase tracking-widest text-[#000000] font-bold mb-3">
                    Service of Interest <span className="text-red-500">*</span>
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {(['Consulting', 'Legal', 'Both'] as const).map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setServiceInterest(opt)}
                        className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 border ${
                          serviceInterest === opt
                            ? 'bg-[#fa0249] border-[#fa0249] text-white shadow-sm'
                            : 'bg-white border-black/20 text-[#000000] hover:border-[#fa0249] hover:text-[#fa0249]'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom Message field */}
                <div>
                  <label htmlFor="message" className="block font-sans text-xs uppercase tracking-widest text-[#000000] font-bold mb-2">
                    Custom Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-black/20 px-4 py-3 text-sm text-[#000000] placeholder:text-slate-400 focus:outline-none focus:border-[#fa0249] transition-all duration-300 font-sans resize-none rounded-[1px]"
                    placeholder="Please describe your parameters of enquiry"
                  />
                </div>

                {/* ReCAPTCHA */}
                <div className="flex justify-start">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"}
                    onChange={onCaptchaChange}
                    theme="light"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#fa0249] hover:bg-[#000000] disabled:bg-[#fa0249]/50 text-white text-xs font-bold tracking-[0.2em] uppercase py-4 transition-all duration-300 rounded-[1px] shadow-md flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>SENDING...</span>
                    </>
                  ) : (
                    <span>CONTACT US</span>
                  )}
                </button>

              </form>
            </div>
          )}
        </div>

      </main>

      <Footer />
    </div>
  );
}
