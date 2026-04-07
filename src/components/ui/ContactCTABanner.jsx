import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ContactCTABanner = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        py: { xs: 7, md: 9 },
        background: 'linear-gradient(135deg, #060f26 0%, #0B1F4B 50%, #1a3a7a 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Decorative */}
      <Box
        sx={{
          position: 'absolute',
          top: -60,
          left: '40%',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'rgba(201,168,76,0.05)',
          border: '1px solid rgba(201,168,76,0.08)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: -80,
          right: '10%',
          width: 240,
          height: 240,
          borderRadius: '50%',
          border: '1px solid rgba(201,168,76,0.06)',
        }}
      />
      {/* Gold line accents */}
      <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }} />
      <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center', px: { xs: 3, md: 4 } }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="overline"
            sx={{ color: '#C9A84C', letterSpacing: '0.18em', display: 'block', mb: 2, fontSize: '0.72rem' }}
          >
            Get Expert Advice
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontSize: { xs: '1.8rem', sm: '2.3rem', md: '2.8rem' },
              fontWeight: 700,
              color: 'white',
              mb: 2.5,
              lineHeight: 1.25,
            }}
          >
            Need Intellectual Property Assistance?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255,255,255,0.7)',
              maxWidth: 560,
              mx: 'auto',
              mb: 5,
              lineHeight: 1.8,
              fontSize: '1.05rem',
            }}
          >
            Our expert IP attorneys are ready to protect your innovations.
            Schedule a consultation today and take the first step towards securing your intellectual assets.
          </Typography>
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            color="secondary"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{ px: 5, py: 1.8, fontSize: '0.95rem', fontWeight: 700 }}
          >
            Ask Us Now
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ContactCTABanner;
