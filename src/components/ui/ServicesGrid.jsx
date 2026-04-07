import React from 'react';
import { Box, Container } from '@mui/material';
import ServiceCard from './ServiceCard';
import SectionTitle from '../common/SectionTitle';

const ServicesGrid = ({ services }) => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: '#F8F6F1',
        position: 'relative',
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
        <SectionTitle
          title="Our Practice Domains"
          subtitle="Comprehensive intellectual property and legal services tailored to protect and advance your business interests across all domains."
          overline="Our Expertise"
        />
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)',
            },
            gap: 3,
            alignItems: 'stretch',
          }}
        >
          {services.map((service, index) => (
            <Box key={service.id} sx={{ display: 'flex', flexDirection: 'column' }}>
              <ServiceCard service={service} index={index} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesGrid;
