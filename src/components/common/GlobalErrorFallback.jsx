import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const GlobalErrorFallback = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0B1F4B 0%, #060f26 100%)',
        color: '#fff',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
      }}
    >
      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{ textAlign: 'center' }}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 10,
              delay: 0.2
            }}
          >
            <Box sx={{ mb: 4, display: 'inline-flex', p: 3, borderRadius: '50%', background: 'rgba(201, 168, 76, 0.1)' }}>
              <WarningAmberIcon sx={{ fontSize: 80, color: '#C9A84C' }} />
            </Box>
          </motion.div>
          
          <Typography variant="h2" sx={{ fontFamily: '"Playfair Display", serif', fontWeight: 700, mb: 2, color: '#C9A84C' }}>
            We'll Be Right Back!
          </Typography>
          
          <Typography variant="body1" sx={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.7)', mb: 5, lineHeight: 1.6 }}>
            Oops! Something unexpected happened. <br/>
            Our engineers are working on it and <strong>we will be live soon!</strong>
          </Typography>
          
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => window.location.reload()}
            startIcon={<AutorenewIcon />}
            sx={{
              backgroundColor: '#C9A84C',
              color: '#0B1F4B',
              fontWeight: 600,
              px: 4,
              py: 1.5,
              '&:hover': {
                backgroundColor: '#d8b958',
              }
            }}
          >
            Refresh Page
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
};

export default GlobalErrorFallback;
