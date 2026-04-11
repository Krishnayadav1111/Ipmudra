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
    title: 'GI Advisory & Strategy',
    desc: 'Assessing product eligibility and devising comprehensive strategies for GI protection.',
    points: ['Feasibility Studies', 'Historical Research', 'Origin Proof', 'Filing Strategy'],
  },
  {
    title: 'Application Filing',
    desc: 'Preparing and filing robust GI applications with the Geographical Indications Registry.',
    points: ['Drafting Statements', 'Logo Registration', 'Association Filing', 'Registry Actions'],
  },
  {
    title: 'GI Enforcement & Opposition',
    desc: 'Protecting registered GIs against misuse, infringement, and dilution.',
    points: ['Infringement Actions', 'Customs Recordal', 'Opposition Defenses', 'Market Surveillance'],
  },
  {
    title: 'Authorized User Registration',
    desc: 'Assisting individual producers to register as authorized users of a registered GI.',
    points: ['Producer Verification', 'Application Filing', 'Compliance Checks', 'Renewal Services'],
  },
];

const GeographicalIndicationPage = () => {
  return (
    <>
      <PageBanner
        title="Geographical Indication"
        subtitle="Register and protect geographical indications for regional products and unique traditions."
        breadcrumbs={[{ label: 'Geographical Indication', path: '/geographical-indication' }]}
      />

      <Box sx={{ py: { xs: 7, md: 10 }, background: '#F8F6F1' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: { xs: 5, md: 8 }, alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <SectionTitle title="Safeguarding Regional Heritage" align="left" overline="Geographical Indication" />
              <Typography variant="body1" sx={{ color: '#4a4a6a', lineHeight: 1.85, mb: 3 }}>
                Geographical Indications (GIs) are powerful tools that protect products possessing specific qualities and reputation intimately tied to their geographical origin. By registering a GI, producers prevent unauthorized use and preserve the authenticity of their regional treasures.
              </Typography>
              <Typography variant="body1" sx={{ color: '#4a4a6a', lineHeight: 1.85, mb: 4 }}>
                IP Mudra has extensive experience in advising, filing, and prosecuting GI applications across various product categories in India. We work closely with associations, producer groups, and state boards to secure GI tags for agricultural, natural, and manufactured goods.
              </Typography>
              <Button component={Link} to="/contact" variant="contained" color="primary" size="large" sx={{ px: 4, py: 1.6, fontWeight: 700 }}>
                Protect Your Heritage
              </Button>
            </motion.div>

            <Box sx={{ background: 'linear-gradient(135deg, #0B1F4B, #1a3a7a)', borderRadius: 4, p: 4, color: 'white' }}>
              <Typography variant="overline" sx={{ color: '#C9A84C', display: 'block', mb: 2 }}>Categories Protected</Typography>
              <Stack spacing={1.5}>
                {['Agricultural Products (Tea, Spices)', 'Handicrafts & Textiles', 'Foodstuffs & Sweets', 'Manufactured Goods', 'Natural Goods', 'Wines & Spirits'].map((point, i) => (
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
          <SectionTitle title="Our GI Services" subtitle="Comprehensive protection for your region's pride." overline="What We Do" />
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

export default GeographicalIndicationPage;
