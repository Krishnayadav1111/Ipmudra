import React from 'react';
import PageBanner from '../components/common/PageBanner';
import TeamSection from '../components/ui/TeamSection';
import ContactCTABanner from '../components/ui/ContactCTABanner';
import { TEAM_MEMBERS } from '../utils/constants';

const TeamPage = () => {
  return (
    <>
      <PageBanner
        title="Our Legal Team"
        subtitle="Meet the dedicated legal professionals with deep expertise across all areas of intellectual property law at IP Mudra."
        breadcrumbs={[{ label: 'Our Team', path: '/team' }]}
      />
      <TeamSection members={TEAM_MEMBERS} />
      <ContactCTABanner />
    </>
  );
};

export default TeamPage;
