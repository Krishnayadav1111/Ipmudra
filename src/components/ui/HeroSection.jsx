import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroBg from '../../assets/hero_bg.png';

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
        }}
      />
      {/* Multi-layer overlay for depth */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(135deg, rgba(6,15,38,0.92) 0%, rgba(11,31,75,0.85) 50%, rgba(6,15,38,0.75) 100%)',
          zIndex: 1,
        }}
      />
      {/* Animated gold accent */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
          zIndex: 2,
        }}
      />
      {/* Decorative circles */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: { xs: 200, md: 400 },
          height: { xs: 200, md: 400 },
          borderRadius: '50%',
          border: '1px solid rgba(201,168,76,0.12)',
          zIndex: 1,
          animation: 'rotate 20s linear infinite',
          '@keyframes rotate': { from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(360deg)' } },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '15%',
          right: '8%',
          width: { xs: 120, md: 260 },
          height: { xs: 120, md: 260 },
          borderRadius: '50%',
          border: '1px solid rgba(201,168,76,0.08)',
          zIndex: 1,
          animation: 'rotate 14s linear infinite reverse',
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2, px: { xs: 3, md: 8 }, pt: { xs: 12, md: 0 } }}>
        <Box sx={{ maxWidth: { xs: '100%', md: '65%', lg: '55%' } }}>
          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1.5,
                mb: 3,
              }}
            >
              <Box sx={{ width: 40, height: 2, background: '#C9A84C' }} />
              <Typography
                variant="overline"
                sx={{ color: '#C9A84C', letterSpacing: '0.18em', fontSize: '0.72rem' }}
              >
                India's Trusted IP Law Firm
              </Typography>
            </Box>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontSize: { xs: '2.2rem', sm: '3rem', md: '3.8rem', lg: '4.2rem' },
                fontWeight: 800,
                color: 'white',
                lineHeight: 1.18,
                mb: 3,
              }}
            >
              Staying Updated{' '}
              <Box
                component="span"
                sx={{
                  color: '#C9A84C',
                  fontStyle: 'italic',
                }}
              >
                with the Legal
              </Box>{' '}
              Changes
            </Typography>
          </motion.div>

          {/* Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255,255,255,0.75)',
                fontSize: { xs: '1rem', md: '1.15rem' },
                lineHeight: 1.8,
                mb: 5,
                maxWidth: 560,
              }}
            >
              IP Mudra is a premier intellectual property law firm. We implement historically
              significant legal services while adapting to modern changes — ensuring your intellectual
              property is never lost to infringers.
            </Typography>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button
                component={Link}
                to="/contact"
                variant="contained"
                color="secondary"
                size="large"
                sx={{
                  px: 4,
                  py: 1.7,
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                }}
              >
                Get Consultation
              </Button>
              <Button
                component={Link}
                to="/services"
                variant="outlined"
                size="large"
                sx={{
                  px: 4,
                  py: 1.7,
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  color: 'white',
                  borderColor: 'rgba(255,255,255,0.4)',
                  '&:hover': {
                    borderColor: '#C9A84C',
                    color: '#C9A84C',
                    background: 'rgba(201,168,76,0.07)',
                  },
                }}
              >
                Our Services
              </Button>
            </Stack>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Stack
              direction="row"
              spacing={0}
              sx={{
                mt: 7,
                flexWrap: 'wrap',
                gap: { xs: 2, md: 0 },
              }}
            >
              {[
                { value: '1500+', label: 'Cases Handled' },
                { value: '15+', label: 'Years Experience' },
                { value: '98%', label: 'Success Rate' },
                { value: '200+', label: 'Clients' },
              ].map((stat, i) => (
                <Box
                  key={i}
                  sx={{
                    pr: { xs: 3, md: 5 },
                    mr: { xs: 0, md: 5 },
                    borderRight: { xs: 'none', md: i < 3 ? '1px solid rgba(255,255,255,0.15)' : 'none' },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: '"Playfair Display", serif',
                      fontSize: { xs: '1.6rem', md: '2rem' },
                      fontWeight: 700,
                      color: '#C9A84C',
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    sx={{
                      color: 'rgba(255,255,255,0.55)',
                      fontSize: '0.78rem',
                      fontFamily: '"Inter", sans-serif',
                      mt: 0.5,
                      letterSpacing: '0.05em',
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </motion.div>
        </Box>
      </Container>

      {/* Scroll indicator */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
          cursor: 'pointer',
          opacity: 0.6,
          '&:hover': { opacity: 1 },
          animation: 'bounce 2s ease-in-out infinite',
          '@keyframes bounce': {
            '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
            '50%': { transform: 'translateX(-50%) translateY(-8px)' },
          },
        }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <Typography sx={{ color: 'white', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          Scroll
        </Typography>
        <Box
          sx={{
            width: 24,
            height: 38,
            border: '2px solid rgba(255,255,255,0.4)',
            borderRadius: 12,
            display: 'flex',
            justifyContent: 'center',
            pt: 1,
          }}
        >
          <Box
            sx={{
              width: 4,
              height: 8,
              background: '#C9A84C',
              borderRadius: 2,
              animation: 'scrollDot 1.5s ease-in-out infinite',
              '@keyframes scrollDot': {
                '0%': { opacity: 1, transform: 'translateY(0)' },
                '100%': { opacity: 0, transform: 'translateY(12px)' },
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
