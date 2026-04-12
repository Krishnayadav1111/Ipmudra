import GavelIcon from "@mui/icons-material/Gavel";
import BalanceIcon from "@mui/icons-material/Balance";
import InventoryIcon from "@mui/icons-material/Inventory";
import BrushIcon from "@mui/icons-material/Brush";
import SecurityIcon from "@mui/icons-material/Security";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PublicIcon from "@mui/icons-material/Public";
import DevicesIcon from "@mui/icons-material/Devices";
import NatureIcon from "@mui/icons-material/Nature";
import VerifiedIcon from "@mui/icons-material/Verified";

import ArvindImg from "../assets/Arvind.jpeg";
import AnilImg from "../assets/Anil.jpeg";
import AshishImg from "../assets/Ashish.jpeg";
import MayankImg from "../assets/Mayank.jpeg";
import SandhayaImg from "../assets/Sandhaya.jpeg";
import VarunImg from "../assets/varun.jpeg";
import SachinImg from "../assets/Sachin.jpeg";
import MokshaImg from "../assets/moksha.jpeg";

import TridentImg from "../assets/Trident-textile.jpeg";
import BoldfitImg from "../assets/bold-health-and-wellness.jpeg";
import AMPImg from "../assets/amp-automobile.jpeg";
import ChutiyaramImg from "../assets/chuiyaram-food-sector.jpeg";
import AdwikImg from "../assets/Adwik -Real estate.jpeg";
import BayssilImg from "../assets/bayassil-beauty-cosmetics.jpeg";
import SunnyLeoneImg from "../assets/sunny-leon-postion.jpeg";
import GolfIslandImg from "../assets/Golf-island.jpeg";
import BrewlabsImg from "../assets/Brewlab-food.jpeg";
import StylefordImg from "../assets/Styleford-Clothing.jpeg";
import BlackWaveImg from "../assets/Blackwave-Electronics.jpeg";
import DhawalImg from "../assets/Dhawal-Laundry detergent.jpeg";
import AbhyasCareerImg from "../assets/AbhayCareer-Edutech.jpeg";
import AnuttaraYogaImg from "../assets/Anutara-yoga.jpeg";
import FSHCIImg from "../assets/FSHCI-foodandsaftey.jpeg";
import KidieLandImg from "../assets/KidileLand-kidsapparel.jpeg";
import CyberCopsImg from "../assets/Cyber-cops-publicSaftey.jpeg";
import UnifyImg from "../assets/Unify-Healthcare.jpeg";

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Our Services", path: "/services" },
  { label: "Our Team", path: "/team" },
  { label: "Trademark", path: "/trademark" },
  { label: "Copyright", path: "/copyright" },
  { label: "Design", path: "/design" },
  { label: "Patent", path: "/patent" },
  { label: "Contact Us", path: "/contact" },
];

export const SERVICES = [
  {
    id: "trademark",
    label: "Trademark",
    icon: "VerifiedIcon",
    path: "/trademark",
    color: "#0B1F4B",
    shortDesc:
      "Protect your brand identity with comprehensive trademark registration, prosecution, and enforcement services.",
    details: [
      "Trademark Search & Analysis",
      "Application Filing & Prosecution",
      "Trademark Advisory",
      "Enforcement & Litigation",
      "Renewal & Maintenance",
      "Opposition & Cancellation",
    ],
    fullDesc: `Trademark protection is the cornerstone of brand identity. IP Mudra offers end-to-end trademark services that safeguard your brand from infringers and impostors. Our expert team conducts comprehensive trademark searches, files applications across all classes, and vigorously prosecutes your trademark through registration. We handle oppositions, cancellations, and enforcement proceedings before the Trade Marks Registry and Courts across India.`,
  },
  {
    id: "copyright",
    label: "Copyright",
    icon: "BalanceIcon",
    path: "/copyright",
    color: "#1a3a7a",
    shortDesc:
      "Safeguard your creative works — from literature and art to software and digital content.",
    details: [
      "Copyright Registration",
      "Infringement Analysis",
      "Licensing & Assignments",
      "DMCA & Takedown Notices",
      "Copyright Litigation",
      "Advisory Services",
    ],
    fullDesc: `Copyright is the bedrock of creative protection. At IP Mudra, we provide comprehensive copyright solutions for authors, artists, software developers, and businesses. Our team handles copyright registration, drafts licensing agreements, and aggressively enforces copyright rights through litigation and alternative dispute resolution mechanisms.`,
  },
  {
    id: "patent",
    label: "Patent",
    icon: "InventoryIcon",
    path: "/patent",
    color: "#0B1F4B",
    shortDesc:
      "Secure your innovations with strategic patent filing, prosecution, and protection.",
    details: [
      "Patent Search & Analysis",
      "Provisional & Complete Filing",
      "Patent Prosecution",
      "Patent Litigation",
      "Freedom-to-Operate Analysis",
      "Patent Portfolio Management",
    ],
    fullDesc: `Innovation drives progress, and patents protect it. IP Mudra's patent practice covers the full lifecycle of patent protection — from prior art searches and drafting to filing, prosecution, and litigation. Our team of technical experts and legal professionals ensures your inventions receive the strongest possible protection.`,
  },
  {
    id: "design",
    label: "Design IP",
    icon: "BrushIcon",
    path: "/design",
    color: "#1a3a7a",
    shortDesc:
      "Protect the aesthetic and visual elements of your products through design registration.",
    details: [
      "Design Registration",
      "Design Search",
      "Infringement Proceedings",
      "Design Prosecution",
      "Portfolio Management",
      "International Filing",
    ],
    fullDesc: `The appearance of a product can be as valuable as its function. IP Mudra helps designers, manufacturers, and innovators protect the visual identity of their products through strategic design registrations. We handle design searches, applications, oppositions, and infringement proceedings.`,
  },
  {
    id: "ip-litigation",
    label: "IP Litigation",
    icon: "GavelIcon",
    path: "/ip-litigation",
    color: "#C9A84C",
    shortDesc:
      "Expert representation in IP disputes before courts and tribunals across India.",
    details: [
      "Infringement Suits",
      "Passing Off Actions",
      "Writ Petitions",
      "Appeals & Revocations",
      "Domain Name Disputes",
      "ADR & Arbitration",
    ],
    fullDesc: `IP Mudra stands at the forefront of IP litigation across India. Our team has successfully represented clients before High Courts, the Supreme Court of India, IPAB, and various specialized tribunals. We combine strategic thinking with aggressive advocacy to protect your intellectual property.`,
  },
  {
    id: "corporate-law",
    label: "Corporate Law",
    icon: "BusinessCenterIcon",
    path: "/corporate-law",
    color: "#0B1F4B",
    shortDesc:
      "Comprehensive corporate legal services for businesses at every stage of growth.",
    details: [
      "Company Incorporation",
      "Mergers & Acquisitions",
      "Joint Venture Agreements",
      "IP Transactions & Licensing",
      "FDI Advisory",
      "Due Diligence",
    ],
    fullDesc: `Corporate legal matters require specialized expertise. IP Mudra's corporate practice assists businesses with incorporation, M&A transactions, joint ventures, and comprehensive IP transactional work. Our team liaisons with government agencies, chartered accountants, and business partners to ensure smooth operations.`,
  },
  {
    id: "geographical-indication",
    label: "Geographical Indication",
    icon: "PublicIcon",
    path: "/geographical-indication",
    color: "#1a3a7a",
    shortDesc:
      "Register and protect geographical indications for regional products and traditions.",
    details: [
      "GI Advisory & Strategy",
      "Application Filing",
      "Opposition Handling",
      "GI Enforcement",
      "Renewal Services",
      "Third-Party GI Services",
    ],
    fullDesc: `Geographical Indications protect regional heritage and products with unique characteristics linked to their origin. IP Mudra has extensive experience in advising, filing, and prosecuting GI applications across various product categories in India.`,
  },
  {
    id: "tmt",
    label: "Technology, Media & Telecom",
    icon: "DevicesIcon",
    path: "/tmt",
    color: "#C9A84C",
    shortDesc:
      "Specialized legal services for TMT sectors including data privacy and contract drafting.",
    details: [
      "Confidentiality Management",
      "Deal Structuring",
      "Data Privacy Compliance",
      "Media & Advertising Advisory",
      "Contract Drafting",
      "Telecom Regulatory Advisory",
    ],
    fullDesc: `The Technology, Media, and Telecom sector operates in a complex legal environment. IP Mudra's TMT practice provides comprehensive legal services including confidentiality management, deal structuring, data privacy compliance, and regulatory advisory for startups and established enterprises.`,
  },
];

export const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Arvind Venkataraman",
    role: "Founder & Managing Director",
    specialization: "IP Strategy & Corporate Law",
    experience: "36 years",
    avatar: ArvindImg,
    initials: "AV",
  },
  {
    id: 2,
    name: "Varun Seth",
    role: "Equity Partner",
    specialization: "IP Litigation & Enforcement",
    experience: "27 years",
    avatar: VarunImg,
    initials: "VS",
  },
  {
    id: 3,
    name: "Anil Kumar Yadav",
    role: "Non Equity Partner",
    specialization: "Patent & Trademark Prosecution",
    experience: "11 years",
    avatar: AnilImg,
    initials: "AY",
  },
  {
    id: 4,
    name: "Ashish Khanna",
    role: "Non Equity Partner",
    specialization: "Corporate Law & TMT",
    experience: "11 years",
    avatar: AshishImg,
    initials: "AK",
  },
  {
    id: 5,
    name: "Mayank Shrivastav",
    role: "Principal Associate",
    specialization: "Trademark & Copyright",
    experience: "11 years",
    avatar: MayankImg,
    initials: "MS",
  },
  {
    id: 6,
    name: "Sandhya Chaturvedi",
    role: "Principal Associate",
    specialization: "Patent Prosecution",
    experience: "12 years",
    avatar: SandhayaImg,
    initials: "SC",
  },
  {
    id: 7,
    name: "Sachin Arora",
    role: "Associate",
    specialization: "IP Litigation",
    experience: "5 years",
    avatar: SachinImg,
    initials: "SA",
  },
  {
    id: 8,
    name: "Moksha Iyer",
    role: "Associate",
    specialization: "Intellectual Property",
    experience: "3 years",
    avatar: MokshaImg,
    initials: "MI",
  },
];

export const CLIENTS = [
  {
    id: 1,
    name: "Trident Group",
    industry: "Textile & Digital technology",
    initials: "TG",
    logo: TridentImg,
  },
  {
    id: 2,
    name: "Boldfit",
    industry: "Health and wellness",
    initials: "BF",
    logo: BoldfitImg,
  },
  {
    id: 3,
    name: "AMP",
    industry: "Automobile Sector",
    initials: "AM",
    logo: AMPImg,
  },
  {
    id: 4,
    name: "Chutiyaram",
    industry: "Food Sector",
    initials: "CH",
    logo: ChutiyaramImg,
  },
  {
    id: 5,
    name: "Adwik Homes",
    industry: "Real Estate",
    initials: "AH",
    logo: AdwikImg,
  },
  {
    id: 6,
    name: "Bayssil",
    industry: "Beauty and cosmetic",
    initials: "BY",
    logo: BayssilImg,
  },
  {
    id: 7,
    name: "Sunny Leone",
    industry: "Restaurant and bar",
    initials: "SL",
    logo: SunnyLeoneImg,
  },
  {
    id: 8,
    name: "Vizag KLS",
    industry: "Corporate",
    initials: "VK",
    logo: null,
  },
  {
    id: 9,
    name: "Golf Island",
    industry: "Infrastructure sector",
    initials: "GI",
    logo: GolfIslandImg,
  },
  {
    id: 10,
    name: "Brewlabs",
    industry: "Food and Beverages",
    initials: "BL",
    logo: BrewlabsImg,
  },
  {
    id: 11,
    name: "Styleford",
    industry: "Clothing",
    initials: "SF",
    logo: StylefordImg,
  },
  {
    id: 12,
    name: "Black Wave",
    industry: "Electronics",
    initials: "BW",
    logo: BlackWaveImg,
  },
  {
    id: 13,
    name: "Dhawal",
    industry: "Laundry Detergent",
    initials: "DW",
    logo: DhawalImg,
  },
  {
    id: 14,
    name: "Abhyas Career Institute",
    industry: "Edutech",
    initials: "AC",
    logo: AbhyasCareerImg,
  },
  {
    id: 15,
    name: "Anuttara Yoga Shala",
    industry: "Yoga and Wellness",
    initials: "AY",
    logo: AnuttaraYogaImg,
  },
  {
    id: 16,
    name: "FSHCI",
    industry: "Food and Safety",
    initials: "FS",
    logo: FSHCIImg,
  },
  {
    id: 17,
    name: "KidieLand",
    industry: "Kids Apparel",
    initials: "KL",
    logo: KidieLandImg,
  },
  {
    id: 18,
    name: "Cyber Cops",
    industry: "Public Safety",
    initials: "CC",
    logo: CyberCopsImg,
  },
  {
    id: 19,
    name: "Unify",
    industry: "Healthcare",
    initials: "UF",
    logo: UnifyImg,
  },
];

export const NEWS_ITEMS = [
  {
    id: 1,
    title: "Supreme Court Landmark Ruling on Trademark Dilution in India",
    date: "2026-03-15",
    excerpt:
      "The Supreme Court of India has issued a significant ruling clarifying the standards for trademark dilution, impacting brand owners across all industries.",
    category: "Trademark",
  },
  {
    id: 2,
    title: "New Patent (Amendment) Rules 2024: What You Need to Know",
    date: "2026-02-28",
    excerpt:
      "The Indian Patent Office has notified significant amendments to the Patent Rules, streamlining the examination process and introducing new fee structures.",
    category: "Patent",
  },
  {
    id: 3,
    title: "Digital Personal Data Protection Act: Implications for Businesses",
    date: "2026-02-10",
    excerpt:
      "With the DPDP Act coming into force, Indian businesses must revisit their data handling practices. IP Mudra guides you through the compliance journey.",
    category: "TMT",
  },
  {
    id: 4,
    title: "GI Tag: A New Wave of Protection for Indian Heritage Products",
    date: "2026-01-20",
    excerpt:
      "India's Geographical Indication registry has seen a surge in applications. Understanding GI protection is crucial for producers of regional specialties.",
    category: "GI",
  },
  {
    id: 5,
    title: "Copyright Registration in the Digital Age: New Guidelines Released",
    date: "2026-01-05",
    excerpt:
      "The Copyright Office has released updated guidelines for digital content registration, impacting creators, platforms, and media companies alike.",
    category: "Copyright",
  },
  {
    id: 6,
    title:
      "IP Valuation: Why Intangible Assets Are Your Most Valuable Property",
    date: "2025-12-18",
    excerpt:
      "As businesses increasingly rely on intangible assets, proper IP valuation has become essential for investment, M&A, and strategic planning.",
    category: "Corporate",
  },
];

export const FIRM_STATS = [
  { value: "850+", label: "Cases Handled" },
  { value: "15+", label: "Years Experience" },
  { value: "98%", label: "Success Rate" },
  { value: "200+", label: "Happy Clients" },
];

export const CONTACT_INFO = {
  address:
    "IP Mudra associates\n G2 (Ground Floor) DELHI TAX BAR ASSOCIATION\n LAWYER CHAMBERS \n30,D.D.U.MARG OPPOSITE TO ROUSE AVENUE COURT,\nNEW DELHI 110002",
  email: "info@ipmudra.com",
  phone: `+91-9582874719 \n +91-7827014432`,
  hours: "Mon – Sat: 9:00 AM – 6:30 PM",
};

export const WHY_CHOOSE_US = [
  {
    icon: "VerifiedIcon",
    title: "Proven Expertise",
    desc: "Over 15 years of dedicated intellectual property practice with measurable outcomes.",
  },
  {
    icon: "BalanceIcon",
    title: "Ethical Practice",
    desc: "Unwavering commitment to legal ethics and professional integrity in every engagement.",
  },
  {
    icon: "SecurityIcon",
    title: "Comprehensive Protection",
    desc: "End-to-end IP protection strategy — from registration to enforcement and litigation.",
  },
  {
    icon: "PublicIcon",
    title: "Pan-India Presence",
    desc: "Representation before all major courts, tribunals, and registries across India.",
  },
];
