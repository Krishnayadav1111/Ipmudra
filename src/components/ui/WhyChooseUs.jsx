import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import VerifiedIcon from '@mui/icons-material/Verified';
import BalanceIcon from '@mui/icons-material/Balance';
import SecurityIcon from '@mui/icons-material/Security';
import PublicIcon from '@mui/icons-material/Public';
import GroupsIcon from '@mui/icons-material/Groups';
import SpeedIcon from '@mui/icons-material/Speed';
import SectionTitle from '../common/SectionTitle';

const reasons = [
  {
    icon: VerifiedIcon,
    title: 'Proven Expertise',
    desc: 'Over 15 years of dedicated intellectual property practice with a track record of measurable outcomes.',
  },
  {
    icon: BalanceIcon,
    title: 'Ethical Practice',
    desc: 'Unwavering commitment to legal ethics and professional integrity in every client engagement.',
  },
  {
    icon: SecurityIcon,
    title: 'Full-Spectrum Protection',
    desc: 'End-to-end IP protection — from registration and prosecution through enforcement and litigation.',
  },
  {
    icon: PublicIcon,
    title: 'Pan-India Presence',
    desc: 'Representation before all major courts, High Courts, Supreme Court, and specialized IP tribunals.',
  },
  {
    icon: GroupsIcon,
    title: 'Client-First Approach',
    desc: 'We tailor every strategy to the unique goals of each client — startups, SMEs, or large corporations.',
  },
  {
    icon: SpeedIcon,
    title: 'Swift & Responsive',
    desc: 'Timely responses, efficient filing, and proactive updates ensure your IP is always protected.',
  },
];

const WhyChooseUs = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #0B1F4B 0%, #060f26 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative */}
      <Box
        sx={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 500,
          height: 500,
          borderRadius: '50%',
          border: '1px solid rgba(201,168,76,0.06)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 }, position: 'relative', zIndex: 1 }}>
        <SectionTitle
          title="Why Choose IP Mudra?"
          subtitle="We bring together legal expertise, ethical practice, and strategic thinking to deliver exceptional IP protection."
          overline="Our Advantage"
          light
        />

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: 3,
          }}
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 3.5 },
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(201,168,76,0.12)',
                    borderRadius: 3,
                    backdropFilter: 'blur(10px)',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(201,168,76,0.3)',
                      transform: 'translateY(-4px)',
                      boxShadow: '0 16px 40px rgba(0,0,0,0.3)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(201,168,76,0.2), rgba(201,168,76,0.08))',
                      border: '1px solid rgba(201,168,76,0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2.5,
                    }}
                  >
                    <Icon sx={{ color: '#C9A84C', fontSize: 26 }} />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: '"Playfair Display", serif',
                      fontWeight: 700,
                      color: 'white',
                      mb: 1.5,
                      fontSize: '1.1rem',
                    }}
                  >
                    {reason.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, fontSize: '0.875rem' }}
                  >
                    {reason.desc}
                  </Typography>
                </Paper>
              </motion.div>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
