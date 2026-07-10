'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../../components/Navbar';
import ServiceDrawerItem from '../../components/ServiceDrawerItem';
import Footer from '@/app/components/Footer';
import ContactUs from '@/app/components/ContactUs';

// Custom component to reveal text word-by-word with a calming stagger
function RevealHeading({ children, className = "" }: { children: string; className?: string }) {
  const words = children.split(' ').filter(Boolean);
  return (
    <span className={`reveal-text flex flex-wrap gap-x-[0.35em] gap-y-[0.15em] ${className}`}>
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

const consultingServices = [
  {
    num: '01',
    title: 'Growth Strategy',
    description: [
      "We help management teams build growth strategy on evidence rather than assumption, using market sizing, segmentation, and whitespace mapping to establish where a business has a genuine right to win and where it does not. This includes a candid assessment of competitive position, cost structure, and the capabilities required to defend or expand it.",
      "The output is translated into P&L architecture, pricing logic, and margin design, structured as a phased roadmap with defined ownership, milestones, and performance indicators. Each phase carries its own set of leading indicators, so leadership can identify underperformance early rather than at the point a quarterly review confirms it."
    ]
  },
  {
    num: '02',
    title: 'Market Entry and Go-to-Market Strategy',
    description: [
      "We support businesses entering new markets, including India, Saudi Arabia, the UAE, Kuwait, and South Korea, drawing on direct operating experience across each of these markets rather than advisory observation from outside them. Our work begins with regulatory assessment and compliance-aware commercial planning, since entry structure, licensing requirements, and permissible ownership models vary substantially by geography and sector.",
      "From there, we define the target segment and ideal customer profile, evaluate direct, partner-led, institutional, and D2C channel options, and structure commercial terms with the channel partners best positioned to carry the business into the market. Pricing and positioning are localised to the competitive dynamics of that specific market rather than adapted from a template built for the home market."
    ]
  },
  {
    num: '03',
    title: 'Sales Transformation',
    description: [
      "We address sales underperformance at a structural level, on the premise that most underperformance originates in pipeline architecture, governance, and forecasting rather than in the talent of the sales organisation itself. This includes redesigning roles, KPIs, and incentive structures so that individual and team incentives are aligned to the outcomes the business actually needs.",
      "We build CRM-based pipeline and funnel visibility, and establish a reporting cadence and governance rhythm that sustains performance over multiple quarters rather than producing a single strong quarter followed by reversion. We have delivered these operating models for consulting practices, EdTech businesses, and mid-market enterprises across a range of sales motions, from high-touch B2B to volume-driven B2C."
    ]
  },
  {
    num: '04',
    title: 'Organisational and Operating Model Design',
    description: [
      "We design the organisational structures that allow a business to scale, covering decision rights, span of control, and role clarity, distinct from an org chart exercise that documents reporting lines without addressing how decisions actually get made. This work typically surfaces where authority is informally concentrated in one or two individuals, and what needs to change structurally for that authority to be distributed without losing speed.",
      "This is most relevant in two situations: when a founder-led business is professionalising and needs to reduce dependency on any single individual for critical commercial processes, and when a company is expanding into a geography or business line its existing structure was not designed to support. In both cases, the deliverable includes a transition plan, not only a target-state design."
    ]
  },
  {
    num: '05',
    title: 'Operational Excellence',
    description: [
      "We identify the sources of process inefficiency that are not visible until they affect cost, customer experience, or compliance standing, typically because the process as documented differs materially from the process as actually run. Our approach begins with mapping the process as it currently operates, including the informal workarounds staff have built to compensate for gaps in the formal design, before redesigning service delivery and the customer journey around it.",
      "For businesses operating across multiple geographies, we additionally establish the standardisation and KPI tracking required to hold quality consistent at scale, recognising that some degree of local adaptation is necessary and building the governance to distinguish acceptable variation from quality drift. This includes work for a USD 3 billion QSR chain across three countries, state government digital transformation mandates, and professional services firms."
    ]
  },
  {
    num: '06',
    title: 'Key Account and Channel Strategy',
    description: [
      "We build the senior relationship architecture and expansion frameworks required to grow a major account beyond its initial scope, on the premise that winning an account is the beginning of the commercial relationship rather than its conclusion. This includes structured account farming, refined value propositions tailored to each stakeholder within the account, and early identification of adjacent mandates before a competitor identifies them first.",
      "This approach delivered 4x revenue expansion within a single government account, and the same framework now informs how we design channel partner performance and retention, including the incentive structures and account planning cadence that keep a partner network expanding rather than plateauing after the initial agreement."
    ]
  },
  {
    num: '07',
    title: 'Digital Transformation',
    description: [
      "We treat digital transformation as a business redesign that uses technology as an enabler rather than as the objective, beginning with the intended business outcome and working backward to the systems required to deliver it. This includes the change management and adoption planning that, in our experience, determines whether a transformation is sustained after go-live or reverts to legacy behaviour within two quarters.",
      "We deliver strategy through to build within a single engagement, using in-house development capability rather than handing execution to a third party once the strategy phase concludes. This includes work for state government clients recognised at the World Economic Forum, applied with the same rigor to commercial digital transformation engagements."
    ]
  },
  {
    num: '08',
    title: 'Marketing and Brand Execution',
    description: [
      "We translate commercial strategy and competitive positioning into brand narrative, content, and performance marketing aligned to the underlying GTM objectives, so that execution reinforces the strategic position rather than drifting into generic category messaging. This includes defining the campaign architecture, channel mix, and measurement framework required to track performance against the original commercial objective, not only against marketing-specific metrics.",
      "Execution is delivered through a curated network of specialist partners, managed to the same quality standard and reporting discipline as the preceding strategy work, so that the client relationship remains with Arventis throughout rather than being handed off at the point of execution."
    ]
  }
];

export default function ConsultingPage() {
  const [activeService, setActiveService] = useState<number | null>(0);

  // Scroll animations observer
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const revealElements = document.querySelectorAll('.scroll-fade-up, .reveal-text');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('scroll-fade-up')) {
              entry.target.classList.add('scroll-fade-up-active');
            } else if (entry.target.classList.contains('reveal-text')) {
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

  return (
    <div className="relative w-full overflow-hidden bg-white text-black min-h-screen">
      <Navbar />

      {/* Hero Section with Back Button */}
      <section className="relative w-full min-h-[60vh] md:min-h-[75vh] flex flex-col justify-between pb-16 md:pb-24 px-6 md:px-16 border-b border-white/10 text-white overflow-hidden pt-28 bg-black">
        {/* Background Video Layer */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="https://pub-e76f3c2b747241f99a84d7c073d76e11.r2.dev/consulting_subpage.mp4" type="video/mp4" />
        </video>

        {/* Overlays for text readability */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30 z-10"></div>

        <div className="max-w-7xl mx-auto w-full relative z-20 mt-4 md:mt-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-[#16284C] text-white text-xs tracking-[0.2em] font-bold uppercase border border-white/20 hover:border-[#16284C] px-5 py-3 transition-all duration-300 hover-target backdrop-blur-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO OUR SERVICES</span>
          </Link>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-20 mt-auto pt-16">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight text-white mb-6 drop-shadow-lg">
            <RevealHeading>ARVENTIS   CONSULTING</RevealHeading>
          </h1>
          <p className="scroll-fade-up font-sans text-sm sm:text-base md:text-lg text-white/90 font-light leading-relaxed max-w-3xl transition-delay-300 drop-shadow-md">
            Strategy consulting for growth, operating model design, and market expansion, 
            <br/>delivered across India, the GCC, and international jurisdictions.
          </p>
        </div>
      </section>

   

      {/* Practice Accordions Section */}
      <section className="relative w-full bg-white py-12 md:py-16 px-6 md:px-16 text-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 scroll-fade-up">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-black">
              Consulting Practice Disciplines
            </h2>
          </div>

          <div className="space-y-4">
            {consultingServices.map((service, idx) => (
              <ServiceDrawerItem
                key={idx}
                num={service.num}
                title={service.title}
                description={service.description}
                isOpen={activeService === idx}
                onToggle={() => setActiveService(activeService === idx ? null : idx)}
                theme="consulting"
              />
            ))}
          </div>
        </div>
          
      </section>

      {/* CONTACT CTA SECTION */}
     <ContactUs/>

     <Footer/>
    </div>
  );
}
