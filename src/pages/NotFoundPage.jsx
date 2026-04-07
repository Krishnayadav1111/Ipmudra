import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import BalanceIcon from '@mui/icons-material/Balance';

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
        <BalanceIcon sx={{ fontSize: 80, color: '#C9A84C', mb: 3 }} />
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
        <Typography sx={{ color: 'rgba(255,255,255,0.6)', mb: 5, maxWidth: 400, mx: 'auto' }}>
          The page you are looking for does not exist or has been moved.
        </Typography>
        <Button component={Link} to="/" variant="contained" color="secondary" size="large" sx={{ px: 5, py: 1.8, fontWeight: 700 }}>
          Back to Home
        </Button>
      </motion.div>
    </Box>
  );
};

export default NotFoundPage;
