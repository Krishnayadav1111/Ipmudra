import React from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
  Paper,
  Button,
  Divider,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PageBanner from '../components/common/PageBanner';
import SectionTitle from '../components/common/SectionTitle';
import ContactCTABanner from '../components/ui/ContactCTABanner';

const services = [
  {
    title: 'Trademark Registration & Filing',
    desc: 'Comprehensive end-to-end trademark registration across all 45 classes. We handle prior art searches, application drafting, and filing before the Trade Marks Registry of India.',
    points: ['Trademark Availability Search', 'Application Drafting & Review', 'Filing in All 45 Classes', 'Multi-Class Applications'],
  },
  {
    title: 'Trademark Prosecution',
    desc: 'We manage the entire prosecution process including responding to examination reports, office actions, and objections raised by the Trade Marks Registry.',
    points: ['Examination Report Responses', 'Office Action Handling', 'Show Cause Hearings', 'Trademark Journal Watch'],
  },
  {
    title: 'Trademark Advisory',
    desc: 'Strategic advisory on trademark selection, brand protection strategies, licensing, assignments, and coexistence agreements.',
    points: ['Brand Strategy Consultation', 'Licensing & Assignment', 'Coexistence Agreements', 'Watchman Services'],
  },
  {
    title: 'Trademark Enforcement & Litigation',
    desc: 'Aggressive enforcement of trademark rights through oppositions, cancellations, infringement suits, and passing off actions before courts and tribunals.',
    points: ['Opposition Proceedings', 'Cancellation Petitions', 'Infringement Litigation', 'Criminal Enforcement'],
  },
];

const TrademarkPage = () => {
  return (
    <>
      <PageBanner
        title="Trademark Services"
        subtitle="Protect your brand identity with comprehensive trademark registration, prosecution, and enforcement services across India."
        breadcrumbs={[{ label: 'Trademark', path: '/trademark' }]}
      />

      {/* Introduction */}
      <Box sx={{ py: { xs: 7, md: 10 }, background: '#F8F6F1' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
              gap: { xs: 5, md: 8 },
              alignItems: 'center',
            }}
          >
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <SectionTitle title="Brand Protection Starts Here" align="left" overline="Trademark" />
              <Typography variant="body1" sx={{ color: '#4a4a6a', lineHeight: 1.85, mb: 3 }}>
                A trademark is the most visible manifestation of your brand. It distinguishes your goods and services from competitors and serves as a powerful marketing tool. For businesses of all sizes, trademark protection in India and internationally is not just advisable — it is essential.
              </Typography>
              <Typography variant="body1" sx={{ color: '#4a4a6a', lineHeight: 1.85, mb: 4 }}>
                At IP Mudra, our trademark team has handled thousands of trademark matters — from simple registrations to complex multi-jurisdictional disputes. We ensure your brand receives the robust legal shield it deserves.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button component={Link} to="/contact" variant="contained" color="primary" size="large" sx={{ px: 4, py: 1.6, fontWeight: 700 }}>
                  Get Trademark Advice
                </Button>
                <Button component={Link} to="/services" variant="outlined" color="primary" size="large" sx={{ px: 4, py: 1.6, fontWeight: 600 }}>
                  All Services
                </Button>
              </Stack>
            </motion.div>

            <Box sx={{ background: 'linear-gradient(135deg, #0B1F4B, #1a3a7a)', borderRadius: 4, p: 4, color: 'white' }}>
              <Typography variant="overline" sx={{ color: '#C9A84C', display: 'block', mb: 2 }}>Why Trademark?</Typography>
              <Stack spacing={1.5}>
                {[
                  'Exclusive right to use your mark pan-India',
                  'Legal presumption of ownership',
                  'Basis for international filings (Madrid Protocol)',
                  'Valuable intangible business asset',
                  'Protection against counterfeiters',
                  'Enhanced brand credibility and trust',
                ].map((point, i) => (
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

      {/* Services breakdown */}
      <Box sx={{ py: { xs: 7, md: 10 }, background: 'white' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
          <SectionTitle title="Our Trademark Services" subtitle="End-to-end trademark protection tailored to your brand strategy." overline="What We Do" />
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 3,
            }}
          >
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 4 },
                    border: '1px solid rgba(11,31,75,0.08)',
                    borderRadius: 3,
                    height: '100%',
                    '&:hover': { boxShadow: 4, transform: 'translateY(-3px)' },
                    transition: 'all 0.3s',
                  }}
                >
                  <Box sx={{ width: 36, height: 3, background: 'linear-gradient(90deg, #C9A84C, #e0c070)', borderRadius: 2, mb: 2 }} />
                  <Typography sx={{ fontFamily: '"Playfair Display", serif', fontWeight: 700, color: '#0B1F4B', mb: 1.5, fontSize: '1.1rem' }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#6a6a8a', lineHeight: 1.7, mb: 2.5 }}>
                    {service.desc}
                  </Typography>
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

export default TrademarkPage;
