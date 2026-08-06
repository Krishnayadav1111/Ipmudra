import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO_CONFIG = {
  '/': {
    title: 'IP Mudra | Top Intellectual Property & Legal Firm in India',
    description: 'Premier IP law firm in Delhi, India offering expert Trademark, Copyright, Patent, Design registration, Corporate Law, and IP Litigation services.',
    keywords: 'IP Mudra, intellectual property law firm, trademark attorney India, patent law Delhi, copyright registration, design protection, IP litigation India',
  },
  '/about': {
    title: 'About IP Mudra | Premier Intellectual Property Law Firm India',
    description: 'Learn about IP Mudra Associates, an ethical and progressive IP law firm in New Delhi with 15+ years of measurable client success across India.',
    keywords: 'about IP Mudra, IP law firm New Delhi, trademark attorneys India, patent professionals, legal ethical IP practice, IP litigation advocates',
  },
  '/services': {
    title: 'Comprehensive IP & Legal Services in India | IP Mudra',
    description: 'Explore our specialized end-to-end IP legal services including Trademark, Patent, Copyright, Industrial Design, Corporate Law, GI registration, TMT, and IP Litigation.',
    keywords: 'IP legal services India, trademark search, patent prosecution, copyright enforcement, design registration, corporate law, TMT legal advisory',
  },
  '/trademark': {
    title: 'Trademark Registration, Search & Enforcement in India | IP Mudra',
    description: 'Protect your brand identity with IP Mudra’s comprehensive trademark search, fast application filing, opposition defense, and renewal services in India.',
    keywords: 'trademark registration India, trademark attorney Delhi, file trademark online, trademark opposition, brand protection law firm India',
  },
  '/copyright': {
    title: 'Copyright Registration & Infringement Protection in India | IP Mudra',
    description: 'Safeguard your creative works, software, literature, and art with IP Mudra’s copyright registration, licensing agreements, and dispute resolution services.',
    keywords: 'copyright registration India, software copyright, musical artistic work copyright, copyright infringement lawyer, DMCA notice India',
  },
  '/patent': {
    title: 'Patent Search, Drafting & Filing Services in India | IP Mudra',
    description: 'Secure your technological innovations with comprehensive prior art patent searches, specification drafting, provisional filing, and patent prosecution.',
    keywords: 'patent filing India, patent law firm Delhi, patent specifications, freedom to operate analysis, Indian patent attorney, patent litigation',
  },
  '/design': {
    title: 'Industrial Design IP Registration & Protection | IP Mudra',
    description: 'Protect the distinctive aesthetic and visual design elements of your products with expert design registration searches and filing across India.',
    keywords: 'design registration India, product aesthetic protection, industrial design law, design infringement, design IP attorneys',
  },
  '/trademark-registration-india': {
    title: 'Online Trademark Registration in India | Contact IP Mudra',
    description: 'Get fast, hassle-free, 100% online trademark registration in India with zero hidden charges. Connect with dedicated legal experts at IP Mudra today.',
    keywords: 'online trademark registration India, trademark fee India, trademark search online, register brand name India, cheap trademark filing Delhi',
  },
  '/team': {
    title: 'Our IP Lawyers & Legal Partners | Team IP Mudra',
    description: 'Meet our dedicated team of experienced intellectual property attorneys, managing directors, and technical specialists leading IP strategy across India.',
    keywords: 'IP Mudra team, Arvind Venkataraman, Varun Seth, top IP lawyers India, intellectual property associates Delhi, patent prosecutors',
  },
  '/ip-litigation': {
    title: 'IP Litigation & Dispute Resolution Advocates in India | IP Mudra',
    description: 'Expert advocacy and legal representation in trademark infringement suits, passing off actions, domain disputes, and appeals before High Courts across India.',
    keywords: 'IP litigation lawyers, trademark infringement suit India, passing off advocate, IPAB appeals, Delhi High Court IP practice, domain dispute lawyers',
  },
  '/corporate-law': {
    title: 'Corporate Law, M&A & Company Incorporation Advisory | IP Mudra',
    description: 'Expert corporate legal advisory for growing enterprises, covering company incorporation, mergers and acquisitions, joint ventures, FDI advisory, and due diligence.',
    keywords: 'corporate law firm Delhi, company incorporation India, M&A lawyers, IP licensing transactions, joint venture agreements, FDI advisory',
  },
  '/geographical-indication': {
    title: 'Geographical Indication (GI Tag) Registration & Strategy | IP Mudra',
    description: 'Protect regional heritage and traditional specialty products with specialized GI application filing, opposition handling, and renewal services in India.',
    keywords: 'GI tag registration India, Geographical Indication law, regional product protection, GI enforcement, traditional Indian heritage IP',
  },
  '/tmt': {
    title: 'Technology, Media & Telecom (TMT) Legal Services | IP Mudra',
    description: 'Navigate TMT legal complexities, Digital Personal Data Protection (DPDP) compliance, media contract drafting, and software deal structuring with expert legal counsel.',
    keywords: 'TMT legal advisors India, DPDP Act compliance, data privacy lawyers Delhi, technology licensing contracts, telecom regulatory advisory',
  },
};

const updateMetaTag = (selector, content, attribute = 'name', attributeValue = null) => {
  let element = document.querySelector(selector);
  if (!element && attributeValue) {
    element = document.createElement('meta');
    element.setAttribute(attribute, attributeValue);
    document.head.appendChild(element);
  }
  if (element) {
    element.setAttribute('content', content);
  }
};

const usePageSEO = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = SEO_CONFIG[pathname] || {
      title: 'IP Mudra | Intellectual Property Law Firm India',
      description: 'Premier IP law firm in India. Expert legal services for Trademark, Copyright, Patent, Design, IP Litigation, and Corporate Law.',
      keywords: 'IP Mudra, intellectual property, trademark registration, patent filing, copyright protection, design IP, IP litigation, corporate law',
    };

    // 1. Document Title
    document.title = seo.title;

    // 2. Standard Meta Tags
    updateMetaTag('meta[name="description"]', seo.description, 'name', 'description');
    updateMetaTag('meta[name="keywords"]', seo.keywords, 'name', 'keywords');

    // 3. Open Graph Tags
    updateMetaTag('meta[property="og:title"]', seo.title, 'property', 'og:title');
    updateMetaTag('meta[property="og:description"]', seo.description, 'property', 'og:description');
    updateMetaTag('meta[property="og:url"]', `https://ipmudra.in${pathname === '/' ? '' : pathname}`, 'property', 'og:url');

    // 4. Twitter Card Tags
    updateMetaTag('meta[name="twitter:title"]', seo.title, 'name', 'twitter:title');
    updateMetaTag('meta[name="twitter:description"]', seo.description, 'name', 'twitter:description');

    // 5. Canonical URL
    let canonicalLink = document.getElementById('canonical-link') || document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('id', 'canonical-link');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', `https://ipmudra.in${pathname === '/' ? '' : pathname}`);
  }, [pathname]);
};

export default usePageSEO;
