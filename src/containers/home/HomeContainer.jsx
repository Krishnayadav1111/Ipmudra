import React from "react";
import { useSelector } from "react-redux";
import HeroSection from "../../components/ui/HeroSection";
import AboutSection from "../../components/ui/AboutSection";
import ServicesGrid from "../../components/ui/ServicesGrid";
import TeamSection from "../../components/ui/TeamSection";
import NewsSection from "../../components/ui/NewsSection";
import ContactCTABanner from "../../components/ui/ContactCTABanner";
import WhyChooseUs from "../../components/ui/WhyChooseUs";
import ClientsSection from "../../components/ui/ClientsSection";
import { TEAM_MEMBERS, CLIENTS } from '../../utils/constants';

const HomeContainer = () => {
  const services = useSelector((state) => state.services.list);

  const news = [
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
      title:
        "Digital Personal Data Protection Act: Implications for Businesses",
      date: "2026-02-10",
      excerpt:
        "With the DPDP Act coming into force, Indian businesses must revisit their data handling practices. IP Mudra guides you through compliance.",
      category: "TMT",
    },
  ];


  return (
    <>
      <HeroSection />
      <ClientsSection clients={CLIENTS} />
      <AboutSection />
      <ServicesGrid services={services} />
      <WhyChooseUs />
      <TeamSection members={TEAM_MEMBERS} />
      {/* <NewsSection items={news} /> */}
      <ContactCTABanner />
    </>
  );
};

export default HomeContainer;
