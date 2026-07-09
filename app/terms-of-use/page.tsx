'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Top Thin Accent Border */}
      <div className="w-full h-1 bg-[#0a0862]"></div>
      
      <Navbar />

      {/* Main Content Container */}
      <div className="pt-32 pb-24 px-6 md:px-12 w-full flex justify-center">
        <article className="max-w-[800px] w-full text-[#10141A]">
          {/* Header */}
          <div className="mb-16 border-b border-gray-200 pb-12">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight mb-4 text-black">
              Terms of Use
            </h1>
            <p className="font-sans text-lg md:text-xl font-medium text-black/60 uppercase tracking-widest">
              Arventis Partners
            </p>
          </div>

          {/* Intro Paragraph */}
          <div className="font-sans text-base md:text-lg leading-[1.8] mb-12">
            <p>
              Please read these Terms of Use (“Terms”) carefully before using this website. By accessing or using this website, you agree to be bound by these Terms.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-12">
            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">1. Disclaimer Under the Bar Council of India Rules</h2>
              <p className="font-sans text-base md:text-lg leading-[1.8]">
                This website is intended solely to provide general information about Arventis Partners, its people, and the nature of its strategy consulting and legal advisory practice. It is not intended, and should not be construed, as advertising, solicitation, or an invitation to engage the Firm for any matter. The Bar Council of India does not permit advocates to solicit work or advertise. By accessing this website, you confirm that you are seeking information of your own accord, that there has been no solicitation or inducement of any sort from the Firm, and that no advocate-client or advisory relationship is created through mere access to, or use of, this website.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">2. No Advice, No Relationship</h2>
              <p className="font-sans text-base md:text-lg leading-[1.8]">
                Nothing on this website constitutes legal or professional advice. Use of this website, or submission of an enquiry through it, does not by itself create an attorney-client relationship or a consulting engagement. Such a relationship is established only through a formal, written engagement following our conflict-check and onboarding process.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">3. Intellectual Property</h2>
              <p className="font-sans text-base md:text-lg leading-[1.8]">
                All content on this website, including text, graphics, logos, and design, is the property of Arventis Partners or its licensors. No content may be reproduced, distributed, or used for commercial purposes without prior written consent.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">4. Accuracy of Information</h2>
              <p className="font-sans text-base md:text-lg leading-[1.8]">
                While we take reasonable care to keep information on this website accurate and current, the Firm makes no warranty as to its completeness or reliability for any particular purpose, and content may be updated without notice.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">5. Third-Party Links</h2>
              <p className="font-sans text-base md:text-lg leading-[1.8]">
                This website may link to third-party websites for reference. The Firm does not control or accept responsibility for the content or practices of any third-party website.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">6. Limitation of Liability</h2>
              <p className="font-sans text-base md:text-lg leading-[1.8]">
                To the fullest extent permitted by law, Arventis Partners, its partners, and employees shall not be liable for any damages arising out of, or in connection with, access to or use of this website, including reliance on any content contained herein.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">7. Indemnification</h2>
              <p className="font-sans text-base md:text-lg leading-[1.8]">
                You agree to indemnify and hold harmless Arventis Partners, its partners, and employees from any claims or liabilities arising out of your misuse of this website or violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">8. Amendments</h2>
              <p className="font-sans text-base md:text-lg leading-[1.8]">
                We reserve the right to amend these Terms at any time. Continued use of the website following any amendment constitutes acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">9. Governing Law and Jurisdiction</h2>
              <p className="font-sans text-base md:text-lg leading-[1.8]">
                These Terms are governed by the laws of India. Any disputes arising out of, or in connection with, these Terms or the use of this website shall be subject to the exclusive jurisdiction of the courts at New Delhi. For engagements outside India, governing law and dispute resolution will be set out separately in the relevant engagement agreement.
              </p>
            </section>
          </div>
        </article>
      </div>

      <Footer />
    </main>
  );
}
