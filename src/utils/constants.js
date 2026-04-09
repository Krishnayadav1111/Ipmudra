import GavelIcon from '@mui/icons-material/Gavel';
import BalanceIcon from '@mui/icons-material/Balance';
import InventoryIcon from '@mui/icons-material/Inventory';
import BrushIcon from '@mui/icons-material/Brush';
import SecurityIcon from '@mui/icons-material/Security';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PublicIcon from '@mui/icons-material/Public';
import DevicesIcon from '@mui/icons-material/Devices';
import NatureIcon from '@mui/icons-material/Nature';
import VerifiedIcon from '@mui/icons-material/Verified';

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Our Services', path: '/services' },
  { label: 'Trademark', path: '/trademark' },
  { label: 'Copyright', path: '/copyright' },
  { label: 'Design', path: '/design' },
  { label: 'Patent', path: '/patent' },
  { label: 'Contact Us', path: '/contact' },
];

export const SERVICES = [
  {
    id: 'trademark',
    label: 'Trademark',
    icon: 'VerifiedIcon',
    path: '/trademark',
    color: '#0B1F4B',
    shortDesc: 'Protect your brand identity with comprehensive trademark registration, prosecution, and enforcement services.',
    details: [
      'Trademark Search & Analysis',
      'Application Filing & Prosecution',
      'Trademark Advisory',
      'Enforcement & Litigation',
      'Renewal & Maintenance',
      'Opposition & Cancellation',
    ],
    fullDesc: `Trademark protection is the cornerstone of brand identity. IP Mudra offers end-to-end trademark services that safeguard your brand from infringers and impostors. Our expert team conducts comprehensive trademark searches, files applications across all classes, and vigorously prosecutes your trademark through registration. We handle oppositions, cancellations, and enforcement proceedings before the Trade Marks Registry and Courts across India.`,
  },
  {
    id: 'copyright',
    label: 'Copyright',
    icon: 'BalanceIcon',
    path: '/copyright',
    color: '#1a3a7a',
    shortDesc: 'Safeguard your creative works — from literature and art to software and digital content.',
    details: [
      'Copyright Registration',
      'Infringement Analysis',
      'Licensing & Assignments',
      'DMCA & Takedown Notices',
      'Copyright Litigation',
      'Advisory Services',
    ],
    fullDesc: `Copyright is the bedrock of creative protection. At IP Mudra, we provide comprehensive copyright solutions for authors, artists, software developers, and businesses. Our team handles copyright registration, drafts licensing agreements, and aggressively enforces copyright rights through litigation and alternative dispute resolution mechanisms.`,
  },
  {
    id: 'patent',
    label: 'Patent',
    icon: 'InventoryIcon',
    path: '/patent',
    color: '#0B1F4B',
    shortDesc: 'Secure your innovations with strategic patent filing, prosecution, and protection.',
    details: [
      'Patent Search & Analysis',
      'Provisional & Complete Filing',
      'Patent Prosecution',
      'Patent Litigation',
      'Freedom-to-Operate Analysis',
      'Patent Portfolio Management',
    ],
    fullDesc: `Innovation drives progress, and patents protect it. IP Mudra's patent practice covers the full lifecycle of patent protection — from prior art searches and drafting to filing, prosecution, and litigation. Our team of technical experts and legal professionals ensures your inventions receive the strongest possible protection.`,
  },
  {
    id: 'design',
    label: 'Design IP',
    icon: 'BrushIcon',
    path: '/design',
    color: '#1a3a7a',
    shortDesc: 'Protect the aesthetic and visual elements of your products through design registration.',
    details: [
      'Design Registration',
      'Design Search',
      'Infringement Proceedings',
      'Design Prosecution',
      'Portfolio Management',
      'International Filing',
    ],
    fullDesc: `The appearance of a product can be as valuable as its function. IP Mudra helps designers, manufacturers, and innovators protect the visual identity of their products through strategic design registrations. We handle design searches, applications, oppositions, and infringement proceedings.`,
  },
  {
    id: 'ip-litigation',
    label: 'IP Litigation',
    icon: 'GavelIcon',
    path: '/services',
    color: '#C9A84C',
    shortDesc: 'Expert representation in IP disputes before courts and tribunals across India.',
    details: [
      'Infringement Suits',
      'Passing Off Actions',
      'Writ Petitions',
      'Appeals & Revocations',
      'Domain Name Disputes',
      'ADR & Arbitration',
    ],
    fullDesc: `IP Mudra stands at the forefront of IP litigation across India. Our team has successfully represented clients before High Courts, the Supreme Court of India, IPAB, and various specialized tribunals. We combine strategic thinking with aggressive advocacy to protect your intellectual property.`,
  },
  {
    id: 'corporate-law',
    label: 'Corporate Law',
    icon: 'BusinessCenterIcon',
    path: '/services',
    color: '#0B1F4B',
    shortDesc: 'Comprehensive corporate legal services for businesses at every stage of growth.',
    details: [
      'Company Incorporation',
      'Mergers & Acquisitions',
      'Joint Venture Agreements',
      'IP Transactions & Licensing',
      'FDI Advisory',
      'Due Diligence',
    ],
    fullDesc: `Corporate legal matters require specialized expertise. IP Mudra's corporate practice assists businesses with incorporation, M&A transactions, joint ventures, and comprehensive IP transactional work. Our team liaisons with government agencies, chartered accountants, and business partners to ensure smooth operations.`,
  },
  {
    id: 'geographical-indication',
    label: 'Geographical Indication',
    icon: 'PublicIcon',
    path: '/services',
    color: '#1a3a7a',
    shortDesc: 'Register and protect geographical indications for regional products and traditions.',
    details: [
      'GI Advisory & Strategy',
      'Application Filing',
      'Opposition Handling',
      'GI Enforcement',
      'Renewal Services',
      'Third-Party GI Services',
    ],
    fullDesc: `Geographical Indications protect regional heritage and products with unique characteristics linked to their origin. IP Mudra has extensive experience in advising, filing, and prosecuting GI applications across various product categories in India.`,
  },
  {
    id: 'tmt',
    label: 'Technology, Media & Telecom',
    icon: 'DevicesIcon',
    path: '/services',
    color: '#C9A84C',
    shortDesc: 'Specialized legal services for TMT sectors including data privacy and contract drafting.',
    details: [
      'Confidentiality Management',
      'Deal Structuring',
      'Data Privacy Compliance',
      'Media & Advertising Advisory',
      'Contract Drafting',
      'Telecom Regulatory Advisory',
    ],
    fullDesc: `The Technology, Media, and Telecom sector operates in a complex legal environment. IP Mudra's TMT practice provides comprehensive legal services including confidentiality management, deal structuring, data privacy compliance, and regulatory advisory for startups and established enterprises.`,
  },
];

export const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Adv. Priya Sharma',
    role: 'Senior Partner',
    specialization: 'Trademark & IP Litigation',
    experience: '18 years',
    avatar: null,
    initials: 'PS',
  },
  {
    id: 2,
    name: 'Adv. Rajesh Mehta',
    role: 'Managing Partner',
    specialization: 'Patent & Corporate Law',
    experience: '22 years',
    avatar: null,
    initials: 'RM',
  },
  {
    id: 3,
    name: 'Adv. Ananya Krishnan',
    role: 'Associate Partner',
    specialization: 'Copyright & Design IP',
    experience: '12 years',
    avatar: null,
    initials: 'AK',
  },
  {
    id: 4,
    name: 'Adv. Vikram Patel',
    role: 'Senior Associate',
    specialization: 'IP Litigation & GI',
    experience: '9 years',
    avatar: null,
    initials: 'VP',
  },
  {
    id: 5,
    name: 'Adv. Meera Iyer',
    role: 'Associate',
    specialization: 'TMT & Corporate Law',
    experience: '6 years',
    avatar: null,
    initials: 'MI',
  },
  {
    id: 6,
    name: 'Adv. Arjun Nair',
    role: 'Associate',
    specialization: 'Trademark Prosecution',
    experience: '5 years',
    avatar: null,
    initials: 'AN',
  },
];

export const NEWS_ITEMS = [
  {
    id: 1,
    title: 'Supreme Court Landmark Ruling on Trademark Dilution in India',
    date: '2026-03-15',
    excerpt: 'The Supreme Court of India has issued a significant ruling clarifying the standards for trademark dilution, impacting brand owners across all industries.',
    category: 'Trademark',
  },
  {
    id: 2,
    title: 'New Patent (Amendment) Rules 2024: What You Need to Know',
    date: '2026-02-28',
    excerpt: 'The Indian Patent Office has notified significant amendments to the Patent Rules, streamlining the examination process and introducing new fee structures.',
    category: 'Patent',
  },
  {
    id: 3,
    title: 'Digital Personal Data Protection Act: Implications for Businesses',
    date: '2026-02-10',
    excerpt: 'With the DPDP Act coming into force, Indian businesses must revisit their data handling practices. IP Mudra guides you through the compliance journey.',
    category: 'TMT',
  },
  {
    id: 4,
    title: 'GI Tag: A New Wave of Protection for Indian Heritage Products',
    date: '2026-01-20',
    excerpt: "India's Geographical Indication registry has seen a surge in applications. Understanding GI protection is crucial for producers of regional specialties.",
    category: 'GI',
  },
  {
    id: 5,
    title: 'Copyright Registration in the Digital Age: New Guidelines Released',
    date: '2026-01-05',
    excerpt: 'The Copyright Office has released updated guidelines for digital content registration, impacting creators, platforms, and media companies alike.',
    category: 'Copyright',
  },
  {
    id: 6,
    title: 'IP Valuation: Why Intangible Assets Are Your Most Valuable Property',
    date: '2025-12-18',
    excerpt: 'As businesses increasingly rely on intangible assets, proper IP valuation has become essential for investment, M&A, and strategic planning.',
    category: 'Corporate',
  },
];

export const FIRM_STATS = [
  { value: '500+', label: 'Cases Handled' },
  { value: '15+', label: 'Years Experience' },
  { value: '98%', label: 'Success Rate' },
  { value: '200+', label: 'Happy Clients' },
];

export const CONTACT_INFO = {
  address: '4th Floor, IP Tower, Connaught Place, New Delhi – 110001, India',
  email: 'info@ipmudra.com',
  phone: '+91-11-4567-8900',
  mobile: '+91-98765-43210',
  hours: 'Mon – Sat: 9:00 AM – 6:30 PM',
};

export const WHY_CHOOSE_US = [
  {
    icon: 'VerifiedIcon',
    title: 'Proven Expertise',
    desc: 'Over 15 years of dedicated intellectual property practice with measurable outcomes.',
  },
  {
    icon: 'BalanceIcon',
    title: 'Ethical Practice',
    desc: 'Unwavering commitment to legal ethics and professional integrity in every engagement.',
  },
  {
    icon: 'SecurityIcon',
    title: 'Comprehensive Protection',
    desc: 'End-to-end IP protection strategy — from registration to enforcement and litigation.',
  },
  {
    icon: 'PublicIcon',
    title: 'Pan-India Presence',
    desc: 'Representation before all major courts, tribunals, and registries across India.',
  },
];
