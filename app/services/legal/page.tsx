'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../../components/Navbar';
import ServiceDrawerItem from '../../components/ServiceDrawerItem';
import Footer from '../../components/Footer';
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

const legalPractices = [
  {
    num: '01',
    title: 'Civil and Commercial Litigation',
    description: [
      "Commercial disputes require more than technical legal knowledge. They require a thorough understanding of the commercial context in which the dispute arose, a candid assessment of litigation risk on both sides, and the quality of advocacy before Trial Courts, High Courts, and the Supreme Court to protect or advance the client's position as proceedings develop.",
      "Arventis Legal represents businesses and individuals in contract disputes, recovery proceedings, and multi-party commercial litigation. Our bench's standing before the Supreme Court of India means that complex, high-value matters do not require a change of counsel as they escalate through the judicial hierarchy. Clients benefit from continuity: the same team that understands the matter at inception argues it at the apex court."
    ],
    bullets: [
      'Contract disputes, breach of agreement claims, and enforcement actions',
      'Commercial recovery proceedings: debt, damages, and specific performance',
      'Inter-party commercial litigation: shareholder, partnership, joint venture',
      'Multi-party disputes and applications for urgent interim relief',
      'Representation before Trial Courts, High Courts, and the Supreme Court of India'
    ]
  },
  {
    num: '02',
    title: 'Business and Corporate Law',
    description: [
      "The legal infrastructure of a business determines its resilience when conditions are favourable and its exposure when they are not. Businesses that treat corporate law as a compliance exercise rather than a strategic input tend to encounter avoidable problems at the points of highest consequence: a fundraise, an acquisition, a regulatory investigation, or a leadership transition.",
      "Arventis Legal advises businesses at every stage of their lifecycle on entity formation, governance frameworks, commercial contracts, and the legal dimensions of growth decisions. Our counsel is delivered with an awareness of what the legal position means for the client's broader commercial strategy, informed directly by the consulting practice that operates alongside this bench."
    ],
    bullets: [
      'Company formation, structuring, and governance frameworks',
      'Shareholder agreements, joint venture documentation, and partnership deeds',
      'Mergers, acquisitions, and corporate restructuring advisory',
      'Commercial contracts: drafting, review, and negotiation',
      'Legal due diligence for investments, acquisitions, and strategic partnerships',
      'Regulatory approvals and statutory filings across sectors'
    ]
  },
  {
    num: '03',
    title: 'Estate Planning and Succession',
    description: [
      "Matters involving family estates, succession, and inheritance carry consequences that extend far beyond the legal outcome. They affect relationships built across generations, the transfer of wealth that has taken decades to accumulate, and the continuity of businesses families intend to preserve. Clients who bring these matters to Arventis Legal receive the same quality of preparation and seniority of counsel as our institutional clients, because the stakes are equally significant.",
      "We advise high-net-worth individuals, business families, and NRI clients on testamentary instruments, trust structures, and succession frameworks designed to withstand legal challenge and faithfully reflect the intentions of the person giving the instructions."
    ],
    bullets: [
      'Will drafting, codicils, and testamentary planning for complex and multi-asset estates',
      'Trust structures: private family trusts, charitable trusts, and discretionary arrangements',
      'Succession planning for family businesses, HNI estates, and multi-generational wealth',
      'Family settlement agreements and mediated inheritance arrangements',
      'Contested succession, inheritance disputes, and probate proceedings',
      'Cross-border estate and succession matters involving NRI and internationally held assets'
    ]
  },
  {
    num: '04',
    title: 'Real Estate and Property Law',
    description: [
      "Real estate transactions carry significant financial exposure at every stage. The quality of legal preparation at the outset, from title verification through to the structure of transaction documents, determines the client's exposure to dispute, delay, and financial loss at every stage that follows. A transaction structured correctly at the beginning rarely requires the litigation that a poorly documented one almost inevitably does.",
      "Arventis Legal advises individual homeowners, commercial occupiers, developers, and institutional investors across the full real estate lifecycle: transactional advisory, RERA compliance, property disputes, and real estate litigation. Where a matter proceeds to contested proceedings, clients have continuity of counsel from advisory through to courtroom representation."
    ],
    bullets: [
      'Title due diligence, property verification, and encumbrance searches',
      'Sale deeds, agreements to sell, development agreements, and lease documentation',
      'RERA advisory, compliance structuring, and regulatory representation',
      'Property and boundary disputes, adverse possession, and title challenges',
      'Tenancy, lease, and landlord-tenant matters: residential and commercial',
      'Real estate litigation: title disputes, land use, zoning, and condominium matters'
    ]
  },
  {
    num: '05',
    title: 'Employment Law',
    description: [
      "The legal relationship between an employer and its workforce has grown materially more complex. Statutory obligations governing wages, benefits, workplace safety, anti-discrimination, and termination create a compliance environment that businesses, domestic and international, must navigate carefully. The cost of getting this wrong is not merely regulatory; it is reputational, and increasingly, it is litigated.",
      "Arventis Legal advises businesses on employment policy frameworks, executive contracts, and the legal dimensions of workforce management. Our counsel is proactive: the employment policies and contracts we design are intended to resolve disputes before they surface, not merely respond to them after."
    ],
    bullets: [
      'Employment contract drafting and review: executive, senior management, and standard workforce',
      'Employment policy frameworks: HR policies, codes of conduct, POSH compliance',
      'Workplace investigations and employer guidance on disciplinary proceedings',
      'Representation in employment disputes before courts, labour tribunals, and appellate authorities',
      'Non-compete, non-solicitation, and confidentiality clause drafting and enforcement',
      'Advisory on termination, severance, and workforce restructuring'
    ]
  },
  {
    num: '06',
    title: 'Intellectual Property and Technology',
    description: [
      "For businesses competing on the basis of proprietary processes, brand equity, creative output, or technology platforms, intellectual property protection is a core asset management question. IP that is inadequately protected, improperly licensed, or carelessly assigned represents a material vulnerability that often only becomes visible when a dispute makes it so.",
      "Arventis Legal advises businesses on the full spectrum of intellectual property: trademarks, copyrights, patents, and trade secrets, from registration and licensing through to enforcement. We also counsel clients on technology agreements, software licensing, digital commerce, and data protection obligations under India's evolving regulatory framework."
    ],
    bullets: [
      'Trademark clearance, prosecution, registration, and protection: India and international',
      'Copyright advisory, licensing, and registration',
      'Patent advisory and coordination with specialist patent attorneys',
      'Trade secret protection and confidentiality frameworks',
      'Technology agreements: software licensing, SaaS contracts, and digital service agreements',
      'IP enforcement, opposition proceedings, and infringement actions',
      'Data protection and privacy compliance advisory under the Digital Personal Data Protection Act'
    ]
  },
  {
    num: '07',
    title: 'Construction Law',
    description: [
      "Construction projects generate a volume and variety of legal disputes that few other industries match. Contract interpretation disputes, subcontractor defaults, delay claims, and payment enforcement actions arise in virtually every significant construction engagement. Legal exposure is heightened in cross-border projects where governing law, jurisdiction, and the enforceability of contract terms are themselves contested.",
      "Arventis Legal advises developers, contractors, subcontractors, and project owners on construction contracts, regulatory compliance, and dispute resolution. We approach construction matters with an understanding of both the legal and commercial dynamics of a project, including the practical realities that determine whether litigation or negotiated resolution better serves the client's interests."
    ],
    bullets: [
      'Construction contract drafting, review, and negotiation: EPC, FIDIC, and bespoke forms',
      'Subcontractor agreements and supply chain documentation',
      'Delay claims, variation disputes, and payment enforcement',
      'Contractor and developer representation in construction disputes',
      'Regulatory compliance: RERA, building codes, and environmental clearances',
      'Dispute resolution and arbitration in construction and infrastructure matters'
    ]
  },
  {
    num: '08',
    title: 'Dispute Resolution and Arbitration',
    description: [
      "As commercial relationships span more jurisdictions, arbitration has become the preferred mechanism for resolving disputes in cross-border and high-value commercial contexts. It offers confidentiality, party autonomy in the choice of governing law and procedure, and, where institutional rules are properly incorporated into the underlying contract, a degree of procedural predictability that litigation rarely matches.",
      "Arventis Legal represents parties in domestic and international arbitration proceedings, including institutional arbitrations under recognised arbitral rules. We advise on the drafting of arbitration clauses at the contract stage, where a well-structured clause materially reduces the cost and complexity of any dispute that arises, and represent clients through proceedings and the enforcement of awards."
    ],
    bullets: [
      'Domestic arbitration: institutional and ad hoc proceedings',
      'International commercial arbitration and cross-border dispute resolution',
      'Arbitration clause drafting and pre-dispute contractual risk advisory',
      'Emergency arbitration and interim measures applications',
      'Enforcement of domestic and foreign arbitral awards',
      'Mediation, conciliation, and structured alternative dispute resolution'
    ]
  },
  {
    num: '09',
    title: 'Constitutional and Writ Matters',
    description: [
      "Writ jurisdiction before the High Courts and the Supreme Court of India represents the most demanding arena of legal practice. The quality of preparation required, the depth of constitutional analysis, the precision of the pleadings, and the standard of oral advocacy, is categorically different from what most matters demand. Access to this level of representation at the right moment can determine outcomes that no other legal mechanism could produce.",
      "Arventis Legal's practice in constitutional and writ matters reflects the bench's direct standing before the Supreme Court of India. We represent individuals, institutions, and businesses whose rights or legitimate interests require intervention at the constitutional level."
    ],
    bullets: [
      'Writ petitions before High Courts and the Supreme Court of India',
      'Fundamental rights matters and constitutional challenges to legislation or executive action',
      'Regulatory and statutory challenges through writ jurisdiction',
      'Public interest matters before constitutional courts',
      'Representation in matters requiring urgent or interim constitutional relief'
    ]
  }
];

export default function LegalPage() {
  const [activePractice, setActivePractice] = useState<number | null>(0);

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
          <source src="https://pub-e76f3c2b747241f99a84d7c073d76e11.r2.dev/legal_subpage.mp4" type="video/mp4" />
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
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight text-white mb-6 max-w-4xl drop-shadow-lg">
            <RevealHeading>ARVENTIS LEGAL</RevealHeading>
          </h1>
          <p className="scroll-fade-up font-sans text-sm sm:text-base md:text-lg text-white/90 font-light leading-relaxed max-w-3xl transition-delay-300 drop-shadow-md">
            Legal advisory and advocacy across Trial Courts, High Courts, Arbitral Tribunals, and the Supreme Court of India.
          </p>
        </div>
      </section>


      {/* Practice Accordions Section */}
      <section className="relative w-full bg-white py-12 md:py-16 px-6 md:px-16 text-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 scroll-fade-up">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-black">
              Legal Practices
            </h2>
          </div>

          <div className="space-y-4">
            {legalPractices.map((practice, idx) => (
              <ServiceDrawerItem
                key={idx}
                num={practice.num}
                title={practice.title}
                description={practice.description}
                bullets={practice.bullets}
                isOpen={activePractice === idx}
                onToggle={() => setActivePractice(activePractice === idx ? null : idx)}
                theme="legal"
              />
            ))}
          </div>
        </div>
        
      </section>

      <ContactUs />

      <Footer />
    </div>
  );
}
