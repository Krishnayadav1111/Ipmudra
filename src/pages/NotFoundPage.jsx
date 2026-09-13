import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const helpfulLinks = [
  { label: 'Home', path: '/' },
  { label: 'Trademark Registration', path: '/trademark-registration-india' },
  { label: 'Our Services', path: '/services' },
  { label: 'Contact Us', path: '/trademark-registration-india' },
];

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #060f26 0%, #0B1F4B 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        px: 3,
      }}
    >
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <Box
          component="img"
          src="/ipmudra.png"
          alt="IP Mudra Logo"
          sx={{ width: 120, height: 120, objectFit: 'contain', mb: 3 }}
        />
        <Typography
          sx={{
            fontFamily: '"Playfair Display", serif',
            fontSize: { xs: '5rem', md: '8rem' },
            fontWeight: 800,
            color: '#C9A84C',
            lineHeight: 1,
            mb: 2,
          }}
        >
          404
        </Typography>
        <Typography
          sx={{ fontFamily: '"Playfair Display", serif', fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 700, color: 'white', mb: 2 }}
        >
          Page Not Found
        </Typography>
        <Typography sx={{ color: 'rgba(255,255,255,0.6)', mb: 4, maxWidth: 400, mx: 'auto' }}>
          The page you are looking for does not exist or has been moved.
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" sx={{ mb: 3 }}>
          {helpfulLinks.map((link) => (
            <Button
              key={link.path + link.label}
              component={Link}
              to={link.path}
              variant={link.label === 'Home' ? 'contained' : 'outlined'}
              color="secondary"
              sx={{
                fontWeight: 700,
                ...(link.label !== 'Home' && {
                  borderColor: 'rgba(201,168,76,0.5)',
                  color: '#C9A84C',
                  '&:hover': { borderColor: '#C9A84C', background: 'rgba(201,168,76,0.08)' },
                }),
              }}
            >
              {link.label}
            </Button>
          ))}
        </Stack>
      </motion.div>
    </Box>
  );
};

export default NotFoundPage;
