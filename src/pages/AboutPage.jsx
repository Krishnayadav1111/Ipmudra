import React from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
  Card,
  CardContent,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PageBanner from '../components/common/PageBanner';
import SectionTitle from '../components/common/SectionTitle';
import TeamSection from '../components/ui/TeamSection';
import ContactCTABanner from '../components/ui/ContactCTABanner';
import { TEAM_MEMBERS } from '../utils/constants';

const values = [
  { title: 'Excellence', desc: 'We pursue the highest standards in every legal engagement, never settling for mediocrity.' },
  { title: 'Vigilance', desc: 'Constant monitoring and proactive action to protect your IP rights at all times.' },
  { title: 'Integrity', desc: 'Unwavering ethical practice and transparent communication with every client.' },
  { title: 'Innovation', desc: 'Forward-thinking legal strategies that adapt to the evolving IP landscape.' },
];


const AboutPage = () => {
  return (
    <>
      <PageBanner
        title="About IP Mudra"
        subtitle="A premier intellectual property law firm committed to protecting your innovations, brands, and creative works."
        breadcrumbs={[{ label: 'About Us', path: '/about' }]}
      />

      {/* Mission Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, background: '#F8F6F1' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
              gap: { xs: 5, md: 8 },
              alignItems: 'center',
            }}
          >
            {/* Left text */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <SectionTitle title="Our Motivation" align="left" overline="Who We Are" />
              <Typography variant="body1" sx={{ color: '#4a4a6a', lineHeight: 1.85, mb: 3 }}>
                IP Mudra bears an old soul with a modern approach. By implementing historically significant legal services while keeping contemporary changes in mind, we ensure that intellectual property is never lost to infringers. Our focus is excellence, our philosophy is constant vigilance, and our belief is the ethical exercise of the laws we are entrusted to oversee.
              </Typography>
              <Typography variant="body1" sx={{ color: '#4a4a6a', lineHeight: 1.85, mb: 4 }}>
                We combine our collective experience to give robust legal protection to your creativity — advising individuals and corporate bodies in all matters of intellectual property. The world is building in many sociological and infrastructural ways; we are here to push its legal growth.
              </Typography>
              <Button component={Link} to="/contact" variant="contained" color="primary" size="large" sx={{ px: 4, py: 1.7, fontWeight: 700 }}>
                Get a Free Consultation
              </Button>
            </motion.div>

            {/* Right values grid */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                  gap: 2,
                }}
              >
                {values.map((v, i) => (
                  <Card
                    key={i}
                    elevation={0}
                    sx={{
                      p: 0.5,
                      border: '1px solid rgba(11,31,75,0.07)',
                      '&:hover': { boxShadow: 3, transform: 'translateY(-3px)' },
                      transition: 'all 0.3s',
                    }}
                  >
                    <CardContent>
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: 2,
                          background: 'linear-gradient(135deg, #0B1F4B, #1a3a7a)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 2,
                        }}
                      >
                        <CheckCircleIcon sx={{ color: '#C9A84C', fontSize: 22 }} />
                      </Box>
                      <Typography sx={{ fontFamily: '"Playfair Display", serif', fontWeight: 700, color: '#0B1F4B', mb: 1, fontSize: '1.05rem' }}>
                        {v.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#6a6a8a', lineHeight: 1.7 }}>{v.desc}</Typography>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </motion.div>
          </Box>
        </Container>
      </Box>

      {/* Stats */}
      <Box sx={{ py: { xs: 6, md: 8 }, background: 'linear-gradient(135deg, #0B1F4B, #060f26)' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(3, 1fr)', md: 'repeat(6, 1fr)' },
              gap: { xs: 3, md: 2 },
              textAlign: 'center',
            }}
          >
            {[
              { value: '15+', label: 'Years of Experience' },
              { value: '850+', label: 'Cases Handled' },
              { value: '98%', label: 'Success Rate' },
              { value: '200+', label: 'Satisfied Clients' },
              { value: '50+', label: 'Expert Attorneys' },
              { value: 'PAN', label: 'India Coverage' },
            ].map((s, i) => (
              <Box key={i}>
                <Typography sx={{ fontFamily: '"Playfair Display", serif', fontSize: { xs: '1.8rem', md: '2.4rem' }, fontWeight: 800, color: '#C9A84C', lineHeight: 1 }}>
                  {s.value}
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', mt: 0.5 }}>{s.label}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      <TeamSection members={TEAM_MEMBERS} />
      <ContactCTABanner />
    </>
  );
};

export default AboutPage;
