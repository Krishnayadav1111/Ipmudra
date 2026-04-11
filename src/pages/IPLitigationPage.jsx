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
    title: 'Infringement Suits',
    desc: 'Expert legal representation in trademark, copyright, patent, and design infringement cases.',
    points: ['Drafting Plaints', 'Injunctions', 'Evidence Gathering', 'Court Representation'],
  },
  {
    title: 'Passing Off Actions',
    desc: 'Protecting unregistered trademarks and trade dress against unauthorized use and imitation.',
    points: ['Common Law Rights', 'Brand Dilution', 'Consumer Confusion', 'Damages Recovery'],
  },
  {
    title: 'Appeals & Revocations',
    desc: 'Handling complex appeals before High Courts and tribunals against Registry decisions.',
    points: ['Tribunal Appeals', 'High Court Litigations', 'Revocation Petitions', 'Cancellation Actions'],
  },
  {
    title: 'Domain Name Disputes',
    desc: 'Resolving cybersquatting and domain name disputes through authoritative bodies.',
    points: ['UDRP Proceedings', 'INDRP Complaints', 'Cease & Desist', 'Domain Recovery'],
  },
];

const IPLitigationPage = () => {
  return (
    <>
      <PageBanner
        title="IP Litigation"
        subtitle="Expert representation in intellectual property disputes before courts and tribunals across India."
        breadcrumbs={[{ label: 'IP Litigation', path: '/ip-litigation' }]}
      />

      <Box sx={{ py: { xs: 7, md: 10 }, background: '#F8F6F1' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: { xs: 5, md: 8 }, alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <SectionTitle title="Aggressive IP Enforcement" align="left" overline="Litigation" />
              <Typography variant="body1" sx={{ color: '#4a4a6a', lineHeight: 1.85, mb: 3 }}>
                When your intellectual property rights are violated, swift and decisive action is required. IP Litigation is an intricate realm that demands not only a deep understanding of the law but also aggressive advocacy and strategic foresight.
              </Typography>
              <Typography variant="body1" sx={{ color: '#4a4a6a', lineHeight: 1.85, mb: 4 }}>
                IP Mudra stands at the forefront of IP litigation across India. Our team has successfully represented clients before High Courts, the Supreme Court of India, and specialized tribunals. We combine strategic thinking with rigorous enforcement to protect your valuable intangible assets.
              </Typography>
              <Button component={Link} to="/contact" variant="contained" color="primary" size="large" sx={{ px: 4, py: 1.6, fontWeight: 700 }}>
                Consult Our Litigators
              </Button>
            </motion.div>

            <Box sx={{ background: 'linear-gradient(135deg, #0B1F4B, #1a3a7a)', borderRadius: 4, p: 4, color: 'white' }}>
              <Typography variant="overline" sx={{ color: '#C9A84C', display: 'block', mb: 2 }}>Litigation Expertise</Typography>
              <Stack spacing={1.5}>
                {['Trademark & Copyright Infringement', 'Patent & Design Violations', 'Trade Secret Misappropriation', 'Counterfeiting Operations', 'Commercial Disputes', 'Domain Name Cybersquatting'].map((point, i) => (
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
          <SectionTitle title="Our Litigation Services" subtitle="Strategic enforcement and defense in all IP matters." overline="What We Do" />
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

export default IPLitigationPage;
