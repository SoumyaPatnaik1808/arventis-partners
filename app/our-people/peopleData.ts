export interface MemberProfile {
  slug: string;
  name: string;
  title: string;
  category: 'Founding Partner' | 'Consultancy' | 'Legal';
  image: string;
  badge?: string;
  credentials?: string;
  shortDesc: string;
  bio: string[];
  highlights?: string[];
  customSectionTitle?: string;
  customSectionContent?: string[];
  clientList?: string[];
  linkedin: string;
  instagram: string;
}

export const ALL_PEOPLE: MemberProfile[] = [
  {
    slug: 'anshuman-mohanty',
    name: 'Anshuman Mohanty',
    title: 'FOUNDING PARTNER, STRATEGY CONSULTING',
    category: 'Founding Partner',
    image: '/Anshuman.jpg',
    badge: 'Consulting Head',
    credentials: 'MBA, IIM Lucknow  |  11+ Years  |  India · GCC · UK · US · South Korea',
    shortDesc: 'Strategy consulting leader with 11+ years of P&L ownership across consulting, BFSI, government, and tech.',
    bio: [
      'Anshuman Mohanty has spent eleven years at the sharp end of growth decisions: holding P&L ownership across consulting, BFSI, government, and technology-led businesses as Co-Founder, Business Head, and Strategic Sales Leader. He has built markets, run sales organisations, led government digital transformation, and executed cross-border entries across five geographies.',
      'The discipline he brings to every engagement is the same: rigorous diagnosis, a strategy built to be executed rather than presented, and the commitment to stay in the room through implementation. Clients who work with Anshuman get a partner who has done the work before, across sectors and at scale.'
    ],
    customSectionTitle: 'THE CONSULTING NETWORK',
    customSectionContent: [
      'Every engagement is led directly by Anshuman Mohanty and supported by a curated global bench of academicians, domain specialists, and sector experts, activated by mandate rather than assigned by default. This gives clients something rare: a senior partner who is present throughout, backed by specialist depth exactly where the work demands it.',
      'The network spans strategy, operations, digital, finance, and sector verticals across India, the GCC, Europe, and the US. It includes senior academics, IIM faculty, central banking alumni, and industry principals with deep P&L experience. Clients receive senior expertise without the overhead of a large firm.'
    ],
    highlights: [
      'P&L leadership across multi-geography corporate and state initiatives',
      'Architect of sales operating models & GTM strategies in 5 countries',
      'Digital transformation lead recognised at World Economic Forum'
    ],
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com'
  },
  {
    slug: 'kumar-suman',
    name: 'Kumar Suman',
    title: 'FOUNDING PARTNER, LEGAL  |  ADVOCATE',
    category: 'Founding Partner',
    image: '/Suman.jpg',
    badge: 'Legal Head',
    credentials: 'Faculty of Law, Delhi University  |  10+ Years  |  Delhi · Himachal Pradesh',
    shortDesc: 'Supreme Court advocate specialising in commercial litigation, arbitration, infrastructure, and public law.',
    bio: [
      'Kumar Suman has built his practice from the ground up across a decade of advocacy, litigation, and public interest law. His focus is arbitration, land acquisition, infrastructure, and public law. He comes to each mandate not as an advisor offering opinions, but as a litigator accountable for outcomes in high-stakes disputes.',
      'His work is defined by cases that carry real consequence: landowners displaced by acquisition, communities navigating rehabilitation, infrastructure projects caught between private enterprise and regulatory complexity. He brings to Arventis Legal the discipline of someone whose practice has been tested in contested terrain, across courts, arbitral tribunals, and policy forums.'
    ],
    highlights: [
      'Represented landowners in land acquisition disputes on rehabilitation and compensation, holding government accountability through statutory frameworks',
      'Handled arbitration and infrastructure litigation involving private enterprises, government agencies, and affected communities',
      'Public interest litigation and policy advocacy on displacement and equitable development, achieving real-world impact for vulnerable populations'
    ],
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com'
  },
  {
    slug: 'sweta',
    name: 'Sweta',
    title: 'ADVOCATE │ HIGH COURT & ARBITRAL ADVOCACY',
    category: 'Legal',
    image: '/sweta.jpg',
    badge: '15+ Years Experience',
    credentials: 'Bar Council │ 15+ Years │ High Court of Himachal Pradesh · District Courts · Arbitral Tribunals',
    shortDesc: 'Extensive experience in High Court litigation, civil disputes, criminal prosecutions, and institutional arbitration.',
    bio: [
      'Sweta has built her practice across fifteen years of representing institutions and individuals where the stakes are real — government bodies, public sector undertakings, financial institutions, and corporate organisations navigating complex disputes, criminal prosecutions, and infrastructure-related litigation.',
      'Her work has been shaped by the mandates others find difficult: NHAI, NHIDCL, NTPC, Adani Cement, IL&FS, Punjab National Bank, SBI Life Insurance. These are not clients who retain counsel for appearances. They retain counsel when the matter carries consequence - and she has carried those matters, across arbitration, commercial disputes, banking recovery proceedings, construction and infrastructure law, and regulatory compliance.',
      'She appears regularly before the High Court of Himachal Pradesh and district courts across the state. The practice she brings to each matter is defined by meticulous preparation, litigation strategy built around the specific facts on record, and the kind of advocacy that earns institutional confidence over time - not once, but repeatedly, across matters and across years.'
    ],
    clientList: ['NHAI', 'NHIDCL', 'NTPC', 'Adani Cement', 'IL&FS', 'Punjab National Bank', 'SBI Life Insurance'],
    highlights: [
      'High Court of Himachal Pradesh Standing & District Courts',
      'Institutional & Ad-Hoc Arbitral Proceedings in Infrastructure & Construction',
      'Banking Recovery Proceedings & Regulatory Compliance'
    ],
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com'
  },
  {
    slug: 'adarsh',
    name: 'Adarsh Prabhat Asthana',
    title: 'ADVOCATE │ HIGH COURT & BANKING APPELLATE',
    category: 'Legal',
    image: '/adarsh.jpg',
    badge: '14+ Years Experience',
    credentials: 'Bar Council of Uttar Pradesh │ 14+ Years │ Allahabad High Court · Lucknow Bench · DRT',
    shortDesc: 'Senior advocate with 14+ years standing across Allahabad High Court, Lucknow Bench, DRT, and Revenue Courts.',
    bio: [
      'Adarsh Prabhat Asthana has spent fourteen years building a practice defined by one thing: results in contested terrain. His focus is civil litigation, debt recovery, banking and financial disputes, revenue matters, arbitration, and bail - the areas where procedural command and strategic clarity determine outcomes rather than decoration.',
      'He appears regularly before the High Court of Judicature at Allahabad (Lucknow Bench), District and Sessions Courts, Revenue Courts, the Debt Recovery Tribunal, and Arbitral Tribunals. His value is not found in the breadth of forums he navigates, but in what he delivers inside them - positions built on sound legal analysis, argued with the discipline of someone accountable for the outcome.',
      'Clients who work with Adv. Asthana get an advocate who has stood on the right side of difficult disputes, across judicial and quasi-judicial forums, for over a decade. He does not offer opinions at a distance. He takes the brief, builds the position, and sees it through.'
    ],
    highlights: [
      'Allahabad High Court (Judicature & Lucknow Bench) Standing',
      'Debts Recovery Tribunal (DRT) & Revenue Courts Practice',
      'Banking & Financial Disputes, Debt Recovery & Bail Advocacy'
    ],
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com'
  },
  {
    slug: 'yash',
    name: 'Yash',
    title: 'ADVOCATE │ CORPORATE & COMMERCIAL LITIGATION',
    category: 'Legal',
    image: '/yash.png',
    badge: 'Associate Counsel',
    credentials: 'Bar Council │ High Court & Commercial Courts',
    shortDesc: 'Specialising in corporate contract disputes, recovery proceedings, and shareholder litigation.',
    bio: [
      'Yash represents corporate clients and institutional investors in commercial recovery, contract enforcement actions, and shareholder disputes.',
      'Works closely with the senior bench to prepare rigorous evidentiary strategy for complex commercial trials before trial and appellate courts.'
    ],
    highlights: ['Commercial Recovery', 'Contract Enforcement', 'Corporate Disputes'],
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com'
  },
  {
    slug: 'advocate-1',
    name: 'Advocate-1',
    title: 'Senior Associate │ Civil Litigation',
    category: 'Legal',
    image: '/suman.png',
    badge: 'Specialist Bench',
    credentials: 'Civil Courts & High Court Practice',
    shortDesc: 'Focusing on contractual disputes, property verification, and recovery suits.',
    bio: [
      'Specialist advocate attached to the core civil litigation wing of Arventis Legal, driving thorough due diligence and trial strategy.'
    ],
    highlights: ['Civil Disputes', 'Contract Review', 'Recovery Suits'],
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com'
  },
  {
    slug: 'advocate-2',
    name: 'Advocate-2',
    title: 'Associate │ Arbitration & Infrastructure',
    category: 'Legal',
    image: '/suman.png',
    badge: 'Specialist Bench',
    credentials: 'Arbitral Tribunals & EPC Claims',
    shortDesc: 'Handling infrastructure claims, delay disputes, and ad-hoc arbitrations.',
    bio: [
      'Specialist advocate handling domestic and institutional construction arbitration, EPC contract claims, and dispute resolution.'
    ],
    highlights: ['Arbitration', 'EPC Contracts', 'Delay Claims'],
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com'
  },
  {
    slug: 'advocate-3',
    name: 'Advocate-3',
    title: 'Associate │ Corporate & Regulatory Advisory',
    category: 'Legal',
    image: '/suman.png',
    badge: 'Specialist Bench',
    credentials: 'Corporate Compliance & Statutory Filings',
    shortDesc: 'Advising businesses on entity structuring, employment law, and statutory approvals.',
    bio: [
      'Advising corporate clients on statutory compliance, employment policy frameworks, and cross-border regulatory advisory.'
    ],
    highlights: ['Corporate Governance', 'Statutory Filings', 'Employment Policies'],
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com'
  },
  {
    slug: 'advocate-4',
    name: 'Advocate-4',
    title: 'Associate │ Real Estate & Property Law',
    category: 'Legal',
    image: '/suman.png',
    badge: 'Specialist Bench',
    credentials: 'RERA Advisory & Title Verification',
    shortDesc: 'Specialising in RERA compliance, title due diligence, and landlord-tenant disputes.',
    bio: [
      'Handling real estate transactions, RERA regulatory representation, boundary disputes, and commercial lease agreements.'
    ],
    highlights: ['RERA Advisory', 'Title Due Diligence', 'Lease Documentation'],
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com'
  }
];

export function getPersonBySlug(slug: string): MemberProfile | undefined {
  return ALL_PEOPLE.find((p) => p.slug.toLowerCase() === slug.toLowerCase());
}
