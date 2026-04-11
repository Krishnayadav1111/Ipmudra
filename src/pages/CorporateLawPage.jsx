import React from 'react';
import { Box, Container, Typography, Stack, Paper, Button, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PageBanner from '../components/common/PageBanner';
import SectionTitle from '../components/common/SectionTitle';
import ContactCTABanner from '../components/ui/ContactCTABanner';

const services = [
  {
    title: 'Company Incorporation',
    desc: 'Seamless company registration and setup processes for startups and established entities.',
    points: ['Entity Selection', 'Registration', 'MoA & AoA Drafting', 'Compliance Setup'],
  },
  {
    title: 'Mergers & Acquisitions',
    desc: 'Strategic advising on corporate restructuring, mergers, acquisitions, and joint ventures.',
    points: ['Due Diligence', 'Term Sheets', 'Shareholder Agreements', 'Regulatory Approvals'],
  },
  {
    title: 'IP Transactions & Licensing',
    desc: 'Structuring complex commercial transactions and IP monetization strategies.',
    points: ['Franchise Agreements', 'Technology Transfer', 'IP Licensing', 'Assignment Deeds'],
  },
  {
    title: 'Foreign Direct Investment (FDI)',
    desc: 'Guiding foreign entities through Indian regulatory frameworks for seamless market entry.',
    points: ['FEMA Compliance', 'RBI Approvals', 'Joint Ventures', 'Entity Structuring'],
  },
];

const CorporateLawPage = () => {
  return (
    <>
      <PageBanner
        title="Corporate Law"
        subtitle="Comprehensive corporate legal services for businesses at every stage of growth."
        breadcrumbs={[{ label: 'Corporate Law', path: '/corporate-law' }]}
      />

      <Box sx={{ py: { xs: 7, md: 10 }, background: '#F8F6F1' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: { xs: 5, md: 8 }, alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <SectionTitle title="Strategic Corporate Guidance" align="left" overline="Corporate" />
              <Typography variant="body1" sx={{ color: '#4a4a6a', lineHeight: 1.85, mb: 3 }}>
                Navigating the corporate legal landscape requires specialized expertise and meticulous attention to detail. From the inception of a startup to the complex operations of a multinational corporation, robust legal foundations are vital.
              </Typography>
              <Typography variant="body1" sx={{ color: '#4a4a6a', lineHeight: 1.85, mb: 4 }}>
                IP Mudra's corporate practice assists businesses with entity incorporation, regulatory compliance, M&A transactions, and comprehensive transactional work. We ensure that your business operates seamlessly within the legal framework while maximizing growth opportunities.
              </Typography>
              <Button component={Link} to="/contact" variant="contained" color="primary" size="large" sx={{ px: 4, py: 1.6, fontWeight: 700 }}>
                Speak to our Experts
              </Button>
            </motion.div>

            <Box sx={{ background: 'linear-gradient(135deg, #0B1F4B, #1a3a7a)', borderRadius: 4, p: 4, color: 'white' }}>
              <Typography variant="overline" sx={{ color: '#C9A84C', display: 'block', mb: 2 }}>Corporate Services</Typography>
              <Stack spacing={1.5}>
                {['Business Structuring & Formation', 'M&A and Joint Ventures', 'Commercial Contracts', 'Regulatory & FEMA Compliance', 'Employment & Labor Laws', 'Corporate Governance'].map((point, i) => (
                  <Stack key={i} direction="row" spacing={1.5} alignItems="flex-start">
                    <CheckCircleIcon sx={{ color: '#C9A84C', fontSize: 18, mt: 0.3, flexShrink: 0 }} />
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>{point}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 7, md: 10 }, background: 'white' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
          <SectionTitle title="Our Corporate Practice" subtitle="Navigating complexity to power your business." overline="What We Do" />
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
            {services.map((service, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <Paper elevation={0} sx={{ p: { xs: 3, md: 4 }, border: '1px solid rgba(11,31,75,0.08)', borderRadius: 3, height: '100%', '&:hover': { boxShadow: 4, transform: 'translateY(-3px)' }, transition: 'all 0.3s' }}>
                  <Box sx={{ width: 36, height: 3, background: 'linear-gradient(90deg, #C9A84C, #e0c070)', borderRadius: 2, mb: 2 }} />
                  <Typography sx={{ fontFamily: '"Playfair Display", serif', fontWeight: 700, color: '#0B1F4B', mb: 1.5, fontSize: '1.1rem' }}>{service.title}</Typography>
                  <Typography variant="body2" sx={{ color: '#6a6a8a', lineHeight: 1.7, mb: 2.5 }}>{service.desc}</Typography>
                  <Divider sx={{ mb: 2 }} />
                  <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1 }}>
                    {service.points.map((p, j) => (
                      <Stack key={j} direction="row" spacing={1} alignItems="center">
                        <ArrowForwardIcon sx={{ color: '#C9A84C', fontSize: 14, flexShrink: 0 }} />
                        <Typography variant="caption" sx={{ color: '#4a4a6a', fontSize: '0.82rem' }}>{p}</Typography>
                      </Stack>
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>
      <ContactCTABanner />
    </>
  );
};

export default CorporateLawPage;
