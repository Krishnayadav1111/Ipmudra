import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import PageBanner from '../components/common/PageBanner';
import ServicesContainer from '../containers/services/ServicesContainer';
import ContactCTABanner from '../components/ui/ContactCTABanner';

const ServicesPage = () => {
  return (
    <>
      <PageBanner
        title="Our Legal Services"
        subtitle="Comprehensive intellectual property and legal services for individuals, startups, and enterprises across India."
        breadcrumbs={[{ label: 'Our Services', path: '/services' }]}
      />
      <ServicesContainer />
      <ContactCTABanner />
    </>
  );
};

export default ServicesPage;
