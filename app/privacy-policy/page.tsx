'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Top Thin Accent Border */}
      <div className="w-full h-1 bg-[#fc8403]"></div>
      
      <Navbar />

      {/* Main Content Container */}
      <div className="pt-32 pb-24 px-6 md:px-12 w-full flex justify-center">
        <article className="max-w-[800px] w-full text-[#10141A]">
          {/* Header */}
          <div className="mb-16 border-b border-gray-200 pb-12">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight mb-4 text-black">
              Privacy Policy
            </h1>
            <p className="font-sans text-lg md:text-xl font-medium text-black/60 uppercase tracking-widest">
              Arventis Partners
            </p>
          </div>

          {/* Intro Paragraph */}
          <div className="font-sans text-base md:text-lg leading-[1.8] mb-12">
            <p>
              Arventis Partners (“Arventis,” “the Firm,” “we,” “us,” or “our”) respects the privacy of every individual and organization that visits our website or engages with our strategy consulting and legal advisory services. This Privacy Policy explains what information we collect, how we use it, and the choices available to you. By accessing our website or engaging our services, you agree to the terms of this Privacy Policy.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-12">
            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">1. Information We Collect</h2>
              <ul className="font-sans text-base md:text-lg leading-[1.8] list-disc pl-5 space-y-3 marker:text-[#fc8403]">
                <li><span className="font-semibold">Information you provide directly.</span> Name, designation, organization, and any details submitted through our contact or consultation forms.</li>
                <li><span className="font-semibold">Information collected automatically.</span> Technical information such as IP address, browser type, device information, and pages visited, collected through cookies and similar technologies.</li>
                <li><span className="font-semibold">Information from engagements.</span> Where you become a client, we may collect additional information necessary to deliver strategy consulting or legal services, governed by the specific engagement agreement executed between us.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">2. How We Use Your Information</h2>
              <p className="font-sans text-base md:text-lg leading-[1.8]">
                We use collected information to respond to enquiries, evaluate and deliver services, maintain client records, improve our website and communications, and comply with applicable legal and professional obligations. We do not use information submitted through this website for the purpose of solicitation or advertisement, in keeping with the standards applicable to legal practice in India.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">3. Cookies</h2>
              <p className="font-sans text-base md:text-lg leading-[1.8]">
                Our website may use cookies to improve functionality and understand usage patterns. You may disable cookies through your browser settings; doing so may affect certain features of the website.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">4. Sharing of Information</h2>
              <p className="font-sans text-base md:text-lg leading-[1.8] mb-4">
                We do not sell, rent, or trade personal information. Information may be shared only in the following circumstances:
              </p>
              <ul className="font-sans text-base md:text-lg leading-[1.8] list-disc pl-5 space-y-2 marker:text-[#fc8403] mb-4">
                <li>With Firm personnel on a need-to-know basis</li>
                <li>With service providers who support our operations, under confidentiality obligations</li>
                <li>Where required by law or regulatory authority</li>
                <li>With your explicit consent</li>
              </ul>
              <p className="font-sans text-base md:text-lg leading-[1.8]">
                All client information relating to legal matters is additionally protected by advocate-client privilege and professional confidentiality obligations under applicable law.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">5. Data Security and Retention</h2>
              <p className="font-sans text-base md:text-lg leading-[1.8]">
                We implement reasonable technical and organizational safeguards to protect information from unauthorized access or disclosure. We retain personal information only for as long as necessary to fulfil the purposes outlined in this Policy, or as required by applicable law or professional regulation.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">6. International Data Transfers</h2>
              <p className="font-sans text-base md:text-lg leading-[1.8]">
                As a firm engaged in cross-border work across India, the GCC, and other jurisdictions, information may be processed or stored outside your home country. We take reasonable steps to ensure an appropriate standard of protection in such cases.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">7. Your Rights</h2>
              <p className="font-sans text-base md:text-lg leading-[1.8]">
                You may have rights to access, correct, or request deletion of your personal information, depending on the jurisdiction applicable to you. To exercise these rights, please reach out through our contact page.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">8. Changes to This Policy</h2>
              <p className="font-sans text-base md:text-lg leading-[1.8]">
                We may update this Privacy Policy periodically to reflect changes in our practices or applicable law. Continued use of the website after such changes constitutes acceptance of the revised Policy.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4">9. Governing Law</h2>
              <p className="font-sans text-base md:text-lg leading-[1.8]">
                This Policy is governed by the laws of India, and any disputes arising in connection with it shall be subject to the exclusive jurisdiction of the courts at New Delhi.
              </p>
            </section>
          </div>
        </article>
      </div>

      <Footer />
    </main>
  );
}
