export interface PracticeHighlight {
  id: string;
  text: string;
}

export interface Person {
  id: string;
  slug: string;
  name: string;
  discipline: 'Strategy Consulting' | 'Legal' | 'Advocates';
  category: 'Founding Partner' | 'Consultancy' | 'Legal';
  title: string;
  experience: string; 
  geographies: string[]; 
  shortBio: string;
  shortDesc: string;
  fullBio: string;
  bio: string[];
  highlights: PracticeHighlight[];
  imagePath: string;
  image: string;
  badge?: string;
  credentials?: string;
  customSectionTitle?: string;
  customSectionContent?: string[];
  clientList?: string[];
  linkedin: string;
  instagram: string;
}

export type MemberProfile = Person;

export const peopleData: Person[] = [
  {
    id: 'anshuman',
    slug: 'anshuman-mohanty',
    name: 'Anshuman Mohanty',
    discipline: 'Strategy Consulting',
    category: 'Founding Partner',
    title: 'FOUNDING PARTNER, STRATEGY CONSULTING SERVICES',
    experience: '11+ Years',
    geographies: ['India', 'GCC', 'UK', 'US', 'South Korea'],
    shortBio: 'Eleven years at the sharp end of growth decisions, holding P&L ownership across consulting, BFSI, government, and technology-led businesses.',
    shortDesc: 'Strategy consulting leader with 11+ years of P&L ownership across consulting, BFSI, government, and tech.',
    fullBio: 'Anshuman Mohanty has spent eleven years at the sharp end of growth decisions: holding P&L ownership across consulting, BFSI, government, and technology-led businesses as Co-Founder, Business Head, and Strategic Sales Leader. He has built markets, run sales organisations, led government digital transformation, and executed cross-border entries across five geographies.\nThe discipline he brings to every engagement is the same: rigorous diagnosis, a strategy built to be executed rather than presented, and the commitment to stay in the room through implementation. Clients who work with Anshuman get a partner who has done the work before, across sectors and at scale.',
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
      { id: 'a1', text: 'P&L leadership across multi-geography corporate and state initiatives' },
      { id: 'a2', text: 'Architect of sales operating models & GTM strategies in 5 countries' },
      { id: 'a3', text: 'Digital transformation lead recognised at World Economic Forum' }
    ],
    imagePath: '/Anshuman.jpg',
    image: '/Anshuman.jpg',
    badge: 'Consulting Head',
    credentials: 'MBA, IIM Lucknow  |  11+ Years  |  India – GCC – UK – US – South Korea',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com'
  },
  {
    id: 'suman-thakur',
    slug: 'suman-thakur',
    name: 'Suman Thakur',
    discipline: 'Legal',
    category: 'Founding Partner',
    title: 'FOUNDING PARTNER, LEGAL  |  ADVOCATE',
    experience: '10+ Years',
    geographies: ['Delhi', 'Himachal Pradesh'],
    shortBio: 'A decade of advocacy, litigation, and public interest law, with a focus on arbitration, land acquisition, infrastructure, and public law.',
    shortDesc: 'Supreme Court advocate specialising in commercial litigation, arbitration, infrastructure, and public law.',
    fullBio: 'Suman Thakur has built his practice from the ground up across a decade of advocacy, litigation, and public interest law. His focus is arbitration, land acquisition, infrastructure, and public law. He comes to each mandate not as an advisor offering opinions, but as a litigator accountable for outcomes in high-stakes disputes.\nHis work is defined by cases that carry real consequence: landowners displaced by acquisition, communities navigating rehabilitation, infrastructure projects caught between private enterprise and regulatory complexity. He brings to Arventis Legal the discipline of someone whose practice has been tested in contested terrain, across courts, arbitral tribunals, and policy forums.',
    bio: [
      'Suman Thakur has built his practice from the ground up across a decade of advocacy, litigation, and public interest law. His focus is arbitration, land acquisition, infrastructure, and public law. He comes to each mandate not as an advisor offering opinions, but as a litigator accountable for outcomes in high-stakes disputes.',
      'His work is defined by cases that carry real consequence: landowners displaced by acquisition, communities navigating rehabilitation, infrastructure projects caught between private enterprise and regulatory complexity. He brings to Arventis Legal the discipline of someone whose practice has been tested in contested terrain, across courts, arbitral tribunals, and policy forums.'
    ],
    highlights: [
      { id: 's1', text: 'Represented landowners in land acquisition disputes on rehabilitation and compensation, holding government accountability through statutory frameworks' },
      { id: 's2', text: 'Handled arbitration and infrastructure litigation involving private enterprises, government agencies, and affected communities' },
      { id: 's3', text: 'Public interest litigation and policy advocacy on displacement and equitable development, achieving real-world impact for vulnerable populations' }
    ],
    imagePath: '/Suman.jpg',
    image: '/Suman.jpg',
    badge: 'Legal Head',
    credentials: 'Faculty of Law, Delhi University  |  10+ Years  |  Delhi – Himachal Pradesh',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com'
  },
  {
    id: 'sweta',
    slug: 'sweta',
    name: 'Sweta Verma',
    discipline: 'Advocates',
    category: 'Legal',
    title: 'ADVOCATE – HIGH COURT & ARBITRAL ADVOCACY',
    experience: '15+ Years',
    geographies: ['High Court of Himachal Pradesh', 'District Courts', 'Arbitral Tribunals'],
    shortBio: 'Fifteen years representing institutions and individuals navigating complex disputes, criminal prosecutions, and infrastructure litigation.',
    shortDesc: 'Extensive experience in High Court litigation, civil disputes, criminal prosecutions, and institutional arbitration.',
    fullBio: 'Sweta has built her practice across fifteen years representing institutions and individuals where the stakes are real - government bodies, public sector undertakings, financial institutions, and corporate organisations navigating complex disputes, criminal prosecutions, and infrastructure-related litigation.\nHer work has been shaped by the mandates others find difficult: NHAI, NHIDCL, NTPC, Adani Cement, IL&FS, Punjab National Bank, SBI Life Insurance. These are not clients who retain counsel for appearances. They retain counsel when the matter carries consequence - and she has carried those matters, across arbitration, commercial disputes, banking recovery proceedings, construction and infrastructure law, and regulatory compliance.\nShe appears regularly before the High Court of Himachal Pradesh and district courts across the state. The practice she brings to each matter is defined by meticulous preparation, litigation strategy built around the specific facts on record, and the kind of advocacy that earns institutional confidence over time - not once, but repeatedly, across matters and across years.',
    bio: [
      'Sweta has built her practice across fifteen years of representing institutions and individuals where the stakes are real - government bodies, public sector undertakings, financial institutions, and corporate organisations navigating complex disputes, criminal prosecutions, and infrastructure-related litigation.',
      'Her work has been shaped by the mandates others find difficult: NHAI, NHIDCL, NTPC, Adani Cement, IL&FS, Punjab National Bank, SBI Life Insurance. These are not clients who retain counsel for appearances. They retain counsel when the matter carries consequence - and she has carried those matters, across arbitration, commercial disputes, banking recovery proceedings, construction and infrastructure law, and regulatory compliance.',
      'She appears regularly before the High Court of Himachal Pradesh and district courts across the state. The practice she brings to each matter is defined by meticulous preparation, litigation strategy built around the specific facts on record, and the kind of advocacy that earns institutional confidence over time - not once, but repeatedly, across matters and across years.'
    ],
    clientList: ['NHAI', 'NHIDCL', 'NTPC', 'Adani Cement', 'IL&FS', 'Punjab National Bank', 'SBI Life Insurance'],
    highlights: [
      { id: 'sw1', text: 'High Court of Himachal Pradesh Standing & District Courts' },
      { id: 'sw2', text: 'Institutional & Ad-Hoc Arbitral Proceedings in Infrastructure & Construction' },
      { id: 'sw3', text: 'Banking Recovery Proceedings & Regulatory Compliance' }
    ],
    imagePath: '/sweta.jpg',
    image: '/sweta.jpg',
    badge: '15+ Years Experience',
    credentials: 'Bar Council – 15+ Years – High Court of Himachal Pradesh – District Courts – Arbitral Tribunals',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com'
  },
  {
    id: 'adarsh',
    slug: 'adarsh-prabhat-asthana',
    name: 'Adarsh Prabhat Asthana',
    discipline: 'Advocates',
    category: 'Legal',
    title: 'ADVOCATE – HIGH COURT & BANKING APPELLATE',
    experience: '14+ Years',
    geographies: ['Allahabad High Court', 'Lucknow Bench', 'DRT'],
    shortBio: 'Fourteen years building a practice defined by results in contested terrain: civil litigation, debt recovery, banking and financial disputes, revenue matters, arbitration, and bail.',
    shortDesc: 'Senior advocate with 14+ years standing across Allahabad High Court, Lucknow Bench, DRT, and Revenue Courts.',
    fullBio: 'Adarsh Prabhat Asthana has spent fourteen years building a practice defined by one thing: results in contested terrain. His focus is civil litigation, debt recovery, banking and financial disputes, revenue matters, arbitration, and bail - the areas where procedural command and strategic clarity determine outcomes rather than decoration.\nHe appears regularly before the High Court of Judicature at Allahabad (Lucknow Bench), District and Sessions Courts, Revenue Courts, the Debt Recovery Tribunal, and Arbitral Tribunals. His value is not found in the breadth of forums he navigates, but in what he delivers inside them - positions built on sound legal analysis, argued with the discipline of someone accountable for the outcome.\nClients who work with Adv. Asthana get an advocate who has stood on the right side of difficult disputes, across judicial and quasi-judicial forums, for over a decade. He does not offer opinions at a distance. He takes the brief, builds the position, and sees it through.',
    bio: [
      'Adarsh Prabhat Asthana has spent fourteen years building a practice defined by one thing: results in contested terrain. His focus is civil litigation, debt recovery, banking and financial disputes, revenue matters, arbitration, and bail - the areas where procedural command and strategic clarity determine outcomes rather than decoration.',
      'He appears regularly before the High Court of Judicature at Allahabad (Lucknow Bench), District and Sessions Courts, Revenue Courts, the Debt Recovery Tribunal, and Arbitral Tribunals. His value is not found in the breadth of forums he navigates, but in what he delivers inside them - positions built on sound legal analysis, argued with the discipline of someone accountable for the outcome.',
      'Clients who work with Adv. Asthana get an advocate who has stood on the right side of difficult disputes, across judicial and quasi-judicial forums, for over a decade. He does not offer opinions at a distance. He takes the brief, builds the position, and sees it through.'
    ],
    highlights: [
      { id: 'ad1', text: 'Allahabad High Court (Judicature & Lucknow Bench) Standing' },
      { id: 'ad2', text: 'Debts Recovery Tribunal (DRT) & Revenue Courts Practice' },
      { id: 'ad3', text: 'Banking & Financial Disputes, Debt Recovery & Bail Advocacy' }
    ],
    imagePath: '/adarsh.jpg',
    image: '/adarsh.jpg',
    badge: '14+ Years Experience',
    credentials: 'Bar Council of Uttar Pradesh – 14+ Years – Allahabad High Court – Lucknow Bench – DRT',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com'
  },
  {
    id: 'yash-thakur',
    slug: 'yash-thakur',
    name: 'Yash Thakur',
    discipline: 'Advocates',
    category: 'Legal',
    title: 'ADVOCATE – CORPORATE & COMMERCIAL LITIGATION',
    experience: 'Bar Council',
    geographies: ['High Court & Commercial Courts'],
    shortBio: 'Represents corporate clients and institutional investors in commercial recovery, contract enforcement, and shareholder disputes.',
    shortDesc: 'Specialising in corporate contract disputes, recovery proceedings, and shareholder litigation.',
    fullBio: 'Yash Thakur represents corporate clients and institutional investors in commercial recovery, contract enforcement actions, and shareholder disputes, working closely with the senior bench to prepare rigorous evidentiary strategy for complex commercial trials before trial and appellate courts.\nHis focus is on the procedural and evidentiary groundwork that determines outcomes in trial and appellate courts, work that often decides a case before arguments are even heard.',
    bio: [
      'Yash Thakur represents corporate clients and institutional investors in commercial recovery, contract enforcement actions, and shareholder disputes.',
      'Works closely with the senior bench to prepare rigorous evidentiary strategy for complex commercial trials before trial and appellate courts.'
    ],
    highlights: [
      { id: 'y1', text: 'Commercial Recovery' },
      { id: 'y2', text: 'Contract Enforcement' },
      { id: 'y3', text: 'Corporate Disputes' }
    ],
    imagePath: '/yash.png',
    image: '/yash.png',
    badge: 'Associate Counsel',
    credentials: 'Bar Council – High Court & Commercial Courts',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com'
  }
];

export const ALL_PEOPLE = peopleData;

export function getPersonBySlug(slug: string): MemberProfile | undefined {
  return ALL_PEOPLE.find((p) => p.slug.toLowerCase() === slug.toLowerCase());
}
