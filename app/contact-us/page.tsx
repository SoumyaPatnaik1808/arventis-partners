'use client';

import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReCAPTCHA from 'react-google-recaptcha';
import { countryCodes } from './countryCodes';
import { MapPin } from 'lucide-react';

// Custom component to reveal text word-by-word with a calming stagger
function RevealHeading({ children, className = "" }: { children: string; className?: string }) {
  const words = children.split(' ').filter(Boolean);
  return (
    <span className={`reveal-text flex flex-wrap justify-center gap-x-[0.35em] gap-y-[0.15em] ${className}`}>
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

const officeLocations = [
  { city: "Delhi", state: "Delhi", pin: "110001", country: "India", mapUrl: "https://maps.google.com/?q=HT+House,+Kasturba+Gandhi+Marg,+Connaught+Place,+New+Delhi" },
  { city: "Shimla", state: "Himachal Pradesh", pin: "171001", country: "India", mapUrl: "https://maps.google.com/?q=Anoop+Sood+Building,+Paras+Dass+Garden,+Near+CPRI,+Shimla" },
  { city: "Lucknow", state: "Uttar Pradesh", pin: "226001", country: "India", mapUrl: "https://maps.google.com/?q=110,+First+Floor+Durgma+Tower,+Lalbagh,+Lucknow" },
  { city: "Chandigarh", state: "Chandigarh", pin: "160002", country: "India", mapUrl: "https://maps.google.com/?q=Elante+Offices,+Industrial+Area+Phase+I,+Chandigarh" },
  { city: "Hyderabad", state: "Telangana", pin: "500045", country: "India", mapUrl: "https://maps.google.com/?q=House+No+8-3-A/413,+Krishna+Nagar,+Yusufguda,+Hyderabad" },
  { city: "Cuttack", state: "Odisha", pin: "753014", country: "India", mapUrl: "https://maps.google.com/?q=Plot+No+C/71,+Sector+8,+CDA,+Cuttack" },
  { city: "Kolkata", state: "West Bengal", pin: "700091", country: "India", mapUrl: "https://maps.google.com/?q=Bengal+Intelligent+Park,+Sector+V,+Salt+Lake,+Kolkata" },
  { city: "Mumbai", state: "Maharashtra", pin: "400021", country: "India", mapUrl: "https://maps.google.com/?q=Maker+Chambers+VI,+Nariman+Point,+Mumbai" },
  { city: "Pune", state: "Maharashtra", pin: "411016", country: "India", mapUrl: "https://maps.google.com/?q=ICC+Trade+Tower,+Senapati+Bapat+Road,+Pune" }
];

export default function ContactUsPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [serviceInterest, setServiceInterest] = useState<'Consulting' | 'Legal' | 'Both'>('Consulting');
  
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+91',
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
          phone: `${formData.countryCode} ${formData.phone}`,
          message: `Area of Interest: ${serviceInterest}\n\nEnquiry details:\n${formData.message || 'No custom message provided.'}`,
          captchaToken
        }),
      });

      const result = await res.json();
      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', countryCode: '+91', organisation: '', message: '' });
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
          <h1 className="font-serif text-[clamp(12px,4vw,4rem)] font-bold text-[#000000] tracking-normal leading-tight px-2 flex justify-center text-center md:whitespace-nowrap overflow-visible">
            <RevealHeading className="sm:!gap-x-2">Thank You  for  Showing  Your  Interest</RevealHeading>
          </h1>
        </div>

        {/* Form panel container */}
        <div className="w-full max-w-3xl bg-white border border-[#000000]/10 p-6 md:p-12 shadow-lg rounded-[1px] relative z-10">
          {isSubmitted ? (
            <div className="text-center py-16 space-y-4 animate-fade-in flex flex-col items-center">
              <div className="relative mb-6">
                {/* Background jagged circle imitation */}
                <div className="absolute inset-0 bg-[#16284C] rounded-full scale-110 opacity-20 blur-sm rotate-45"></div>
                <div className="relative w-24 h-24 bg-[#16284C] rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" /></svg>
                </div>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl font-medium text-black md:whitespace-nowrap">Thank You For Contacting Us</h3>
              <p className="font-sans text-base md:text-lg text-slate-600 max-w-md mx-auto">
                Our Team will reach you shortly
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-8 inline-flex justify-center bg-neutral-800 hover:bg-[#1915e1] text-white font-medium text-sm px-8 py-3 transition-all duration-300 rounded-full"
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto w-full space-y-8">
              <div className="space-y-2">
                <p className="font-sans text-sm sm:text-base text-black leading-relaxed font-light text-center">
                  We work with ambitious leaders who want to define the future, not hide from it.<br/> Together, we achieve extraordinary outcomes.
                </p>
                <p className="font-sans text-xs sm:text-sm text-black/80 text-center font-light italic">
                  Required fields are marked with an asterisk (<span className="text-[#16284C]">*</span>).
                </p>
              </div>

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
                    className="w-full bg-white border border-black/20 px-4 py-3 text-sm text-[#000000] placeholder:text-slate-400 focus:outline-none focus:border-[#16284C] transition-all duration-300 font-sans rounded-[1px]"
                    placeholder="Your name"
                  />
                </div>

                {/* Email field */}
                <div>
                  <label htmlFor="email" className="block font-sans text-xs uppercase tracking-widest text-[#000000] font-bold mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-black/20 px-4 py-3 text-sm text-[#000000] placeholder:text-slate-400 focus:outline-none focus:border-[#16284C] transition-all duration-300 font-sans rounded-[1px]"
                    placeholder="Your email address"
                  />
                </div>

                {/* Phone field */}
                <div>
                  <label htmlFor="phone" className="block font-sans text-xs uppercase tracking-widest text-[#000000] font-bold mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex w-full">
                    <select
                      value={formData.countryCode}
                      onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                      className="bg-gray-50 border border-r-0 border-black/20 px-3 py-3 text-sm text-[#000000] focus:outline-none focus:border-[#16284C] transition-all duration-300 font-sans rounded-l-[1px] w-[120px] cursor-pointer"
                    >
                      {countryCodes.map((c, i) => (
                        <option key={i} value={c.code}>
                          {c.code} ({c.name})
                        </option>
                      ))}
                    </select>
                    <input
                      id="phone"
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="flex-1 w-full bg-white border border-black/20 px-4 py-3 text-sm text-[#000000] placeholder:text-slate-400 focus:outline-none focus:border-[#16284C] transition-all duration-300 font-sans rounded-r-[1px]"
                      placeholder="Your phone number"
                    />
                  </div>
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
                    className="w-full bg-white border border-black/20 px-4 py-3 text-sm text-[#000000] placeholder:text-slate-400 focus:outline-none focus:border-[#16284C] transition-all duration-300 font-sans rounded-[1px]"
                    placeholder="Your organization name"
                  />
                </div>

                {/* Service Choice capsules */}
                <div>
                  <label className="block font-sans text-xs uppercase tracking-widest text-[#000000] font-bold mb-3">
                    Area of Interest <span className="text-red-500">*</span>
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {(['Consulting', 'Legal', 'Both'] as const).map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setServiceInterest(opt)}
                        className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 border ${
                          serviceInterest === opt
                            ? 'bg-[#16284C] border-[#16284C] text-white shadow-sm'
                            : 'bg-white border-black/20 text-[#000000] hover:border-[#16284C] hover:text-[#16284C]'
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
                     Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-black/20 px-4 py-3 text-sm text-[#000000] placeholder:text-slate-400 focus:outline-none focus:border-[#16284C] transition-all duration-300 font-sans resize-none rounded-[1px]"
                    placeholder="Please describe your parameters of enquiry"
                  />
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start gap-3 mt-4 mb-6">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className="mt-1 w-4 h-4 text-[#16284C] border-black/20 rounded focus:ring-[#16284C] cursor-pointer"
                  />
                  <label htmlFor="terms" className="font-sans text-sm text-black/75 leading-relaxed">
                    I agree to the{' '}
                    <a href="/terms-of-use" className="text-black underline hover:text-[#16284C] transition-colors duration-300">
                      terms of use
                    </a>
                    {' '}and{' '}
                    <a href="/privacy-policy" className="text-black underline hover:text-[#16284C] transition-colors duration-300">
                      privacy policy
                    </a>.
                  </label>
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
                <div className="flex justify-center pt-2">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full sm:w-auto px-16 bg-[#16284C] hover:bg-[#1915e1] disabled:bg-[#16284C]/50 text-white text-xs font-bold tracking-[0.2em] uppercase py-4 transition-all duration-300 rounded-[1px] shadow-md flex items-center justify-center gap-2"
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
                </div>

              </form>
            </div>
          )}
        </div>

        {/* Offices Section */}
        <div className="w-full max-w-5xl mt-16 mb-8 z-10 flex flex-col items-center px-4">
          <div className="flex flex-col items-center mb-10">
            <h2 className="text-3xl md:text-4xl font-sans text-black text-center font-bold tracking-wide uppercase">
              Offices
            </h2>
            <svg className="w-48 h-2 mt-2 text-[#16284C]" viewBox="0 0 100 4" fill="currentColor" preserveAspectRatio="none">
              <path d="M 0 2 Q 50 0 100 2 Q 50 4 0 2 Z" />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 md:gap-x-24 gap-y-6 w-fit mx-auto font-sans text-sm md:text-base text-black/85 font-normal tracking-wide">
            {officeLocations.map((office, idx) => (
              <div key={idx} className="flex items-start gap-2.5 transition-colors duration-300 text-black/85 hover:text-[#16284C]">
                <MapPin className="w-5 h-5 text-[#16284C] shrink-0 mt-0.5" />
                <a
                  href={office.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-relaxed text-inherit hover:underline transition-colors duration-300"
                > {office.city} 
                </a>
              </div>
            ))}
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
