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
    title: 'Design Registration',
    desc: 'Registration of industrial designs under the Designs Act, 2000 to protect the visual features of your products.',
    points: ['Design Search', 'Application Drafting', 'Registration Proceedings', 'Certificate Issuance'],
  },
  {
    title: 'Design Prosecution',
    desc: 'Expert handling of examination reports, office actions, and formal requirements during the design registration process.',
    points: ['Examination Responses', 'Office Action Handling', 'Formal Objections', 'Locarno Classification'],
  },
  {
    title: 'Design Infringement & Enforcement',
    desc: 'Enforcement of registered design rights against copyists and infringers through civil and criminal proceedings.',
    points: ['Infringement Analysis', 'Cease & Desist', 'Civil Litigation', 'Criminal Action'],
  },
  {
    title: 'International Design Filing',
    desc: 'Filing of design applications under the Hague System of International Registration for global design protection.',
    points: ['Hague System Filing', 'Priority Claims', 'Multi-Country Protection', 'Portfolio Management'],
  },
];

const DesignPage = () => {
  return (
    <>
      <PageBanner
        title="Design IP Services"
        subtitle="Protect the aesthetic and visual elements of your products through strategic design registration and enforcement."
        breadcrumbs={[{ label: 'Design', path: '/design' }]}
      />

      <Box sx={{ py: { xs: 7, md: 10 }, background: '#F8F6F1' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: { xs: 5, md: 8 }, alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <SectionTitle title="Protecting the Look of Innovation" align="left" overline="Design IP" />
              <Typography variant="body1" sx={{ color: '#4a4a6a', lineHeight: 1.85, mb: 3 }}>
                The visual appeal of a product can be as commercially valuable as its technical function. Industrial design protection safeguards the decorative or aesthetic aspects of a product — its shape, configuration, pattern, or ornamentation — that make it visually distinctive and attractive to consumers.
              </Typography>
              <Typography variant="body1" sx={{ color: '#4a4a6a', lineHeight: 1.85, mb: 4 }}>
                IP Mudra helps designers, manufacturers, and innovators protect the visual identity of their products through strategic design registrations in India and internationally under the Hague System. Our team handles the complete process from search through registration and enforcement.
              </Typography>
              <Button component={Link} to="/contact" variant="contained" color="primary" size="large" sx={{ px: 4, py: 1.6, fontWeight: 700 }}>
                Protect Your Design
              </Button>
            </motion.div>

            <Box sx={{ background: 'linear-gradient(135deg, #0B1F4B, #1a3a7a)', borderRadius: 4, p: 4, color: 'white' }}>
              <Typography variant="overline" sx={{ color: '#C9A84C', display: 'block', mb: 2 }}>What Can Be Protected</Typography>
              <Stack spacing={1.5}>
                {['Shape & configuration of products', 'Surface patterns & ornamentation', 'Lines and colors in combination', 'Product packaging & container designs', 'GUI (Graphical User Interface) designs', 'Furniture, automobile, and device designs'].map((point, i) => (
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
          <SectionTitle title="Our Design IP Services" subtitle="Comprehensive design protection from registration to global enforcement." overline="What We Do" />
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

export default DesignPage;
