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
    title: 'Patent Search & Analysis',
    desc: 'Comprehensive prior art searches and freedom-to-operate analysis to determine patentability and identify potential conflicts.',
    points: ['Prior Art Search', 'Patentability Opinion', 'Freedom-to-Operate', 'Invalidity Search'],
  },
  {
    title: 'Patent Filing & Prosecution',
    desc: 'Expert drafting and prosecution of provisional and complete patent applications before the Indian Patent Office.',
    points: ['Provisional Applications', 'Complete Specifications', 'PCT Filing', 'Examination & Prosecution'],
  },
  {
    title: 'Patent Litigation',
    desc: 'Vigorous representation in patent infringement suits, revocation proceedings, and opposition matters before courts and tribunals.',
    points: ['Infringement Suits', 'Revocation Proceedings', 'Pre-Grant Oppositions', 'Post-Grant Oppositions'],
  },
  {
    title: 'Patent Portfolio Management',
    desc: 'Strategic management of your patent portfolio including maintenance, renewal, licensing, and commercialization strategies.',
    points: ['Portfolio Audits', 'Renewal Management', 'Licensing Agreements', 'IP Valuation'],
  },
];

const PatentPage = () => {
  return (
    <>
      <PageBanner
        title="Patent Services"
        subtitle="Secure your innovations with strategic patent filing, prosecution, and enforcement services across India and internationally."
        breadcrumbs={[{ label: 'Patent', path: '/patent' }]}
      />

      <Box sx={{ py: { xs: 7, md: 10 }, background: '#F8F6F1' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: { xs: 5, md: 8 }, alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <SectionTitle title="Innovation Deserves Protection" align="left" overline="Patent" />
              <Typography variant="body1" sx={{ color: '#4a4a6a', lineHeight: 1.85, mb: 3 }}>
                A patent grants you the exclusive right to prevent others from making, using, or selling your invention for up to 20 years. Patents are among the most valuable intellectual assets a company can hold — providing competitive advantage, revenue potential through licensing, and protection against infringers.
              </Typography>
              <Typography variant="body1" sx={{ color: '#4a4a6a', lineHeight: 1.85, mb: 4 }}>
                IP Mudra's patent practice covers the full lifecycle — from prior art searches and expert specification drafting to prosecution, opposition proceedings, and litigation. Our team includes technical specialists across engineering, pharmaceuticals, biotechnology, and software domains.
              </Typography>
              <Button component={Link} to="/contact" variant="contained" color="primary" size="large" sx={{ px: 4, py: 1.6, fontWeight: 700 }}>
                Protect Your Innovation
              </Button>
            </motion.div>

            <Box sx={{ background: 'linear-gradient(135deg, #0B1F4B, #1a3a7a)', borderRadius: 4, p: 4, color: 'white' }}>
              <Typography variant="overline" sx={{ color: '#C9A84C', display: 'block', mb: 2 }}>Patentable Inventions</Typography>
              <Stack spacing={1.5}>
                {['Product inventions & processes', 'Pharmaceutical & biotechnology innovations', 'Software with technical character', 'Mechanical & electrical inventions', 'Chemical compositions & formulations', 'Methods of manufacture'].map((point, i) => (
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
          <SectionTitle title="Our Patent Services" subtitle="Full-lifecycle patent protection for your innovations." overline="What We Do" />
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

export default PatentPage;
