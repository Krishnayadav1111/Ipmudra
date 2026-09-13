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
import GoogleReviewsSection from "../../components/ui/GoogleReviewsSection";
import { TEAM_MEMBERS, CLIENTS, INSIGHTS_ARTICLES } from '../../utils/constants';

const HomeContainer = () => {
  const services = useSelector((state) => state.services.list);

  return (
    <>
      <HeroSection />
      <ClientsSection clients={CLIENTS} />
      <AboutSection />
      <ServicesGrid services={services} />
      <WhyChooseUs />
      <GoogleReviewsSection />
      <TeamSection members={TEAM_MEMBERS} />
      <NewsSection items={INSIGHTS_ARTICLES} />
      <ContactCTABanner />
    </>
  );
};

export default HomeContainer;
