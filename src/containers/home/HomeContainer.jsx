import React from 'react';
import { useSelector } from 'react-redux';
import HeroSection from '../../components/ui/HeroSection';
import AboutSection from '../../components/ui/AboutSection';
import ServicesGrid from '../../components/ui/ServicesGrid';
import TeamSection from '../../components/ui/TeamSection';
import NewsSection from '../../components/ui/NewsSection';
import ContactCTABanner from '../../components/ui/ContactCTABanner';
import WhyChooseUs from '../../components/ui/WhyChooseUs';

const HomeContainer = () => {
  const services = useSelector((state) => state.services.list);
  const team = [
    { id: 1, name: 'Adv. Priya Sharma', role: 'Senior Partner', specialization: 'Trademark & IP Litigation', experience: '18 years', initials: 'PS' },
    { id: 2, name: 'Adv. Rajesh Mehta', role: 'Managing Partner', specialization: 'Patent & Corporate Law', experience: '22 years', initials: 'RM' },
    { id: 3, name: 'Adv. Ananya Krishnan', role: 'Associate Partner', specialization: 'Copyright & Design IP', experience: '12 years', initials: 'AK' },
    { id: 4, name: 'Adv. Vikram Patel', role: 'Senior Associate', specialization: 'IP Litigation & GI', experience: '9 years', initials: 'VP' },
    { id: 5, name: 'Adv. Meera Iyer', role: 'Associate', specialization: 'TMT & Corporate Law', experience: '6 years', initials: 'MI' },
    { id: 6, name: 'Adv. Arjun Nair', role: 'Associate', specialization: 'Trademark Prosecution', experience: '5 years', initials: 'AN' },
  ];

  const news = [
    { id: 1, title: 'Supreme Court Landmark Ruling on Trademark Dilution in India', date: '2026-03-15', excerpt: 'The Supreme Court of India has issued a significant ruling clarifying the standards for trademark dilution, impacting brand owners across all industries.', category: 'Trademark' },
    { id: 2, title: 'New Patent (Amendment) Rules 2024: What You Need to Know', date: '2026-02-28', excerpt: 'The Indian Patent Office has notified significant amendments to the Patent Rules, streamlining the examination process and introducing new fee structures.', category: 'Patent' },
    { id: 3, title: 'Digital Personal Data Protection Act: Implications for Businesses', date: '2026-02-10', excerpt: 'With the DPDP Act coming into force, Indian businesses must revisit their data handling practices. IP Mudra guides you through compliance.', category: 'TMT' },
  ];

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesGrid services={services} />
      <WhyChooseUs />
      <TeamSection members={team} />
      <NewsSection items={news} />
      <ContactCTABanner />
    </>
  );
};

export default HomeContainer;
