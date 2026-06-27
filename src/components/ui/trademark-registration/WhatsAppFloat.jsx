import React from 'react';
import { Box, Button } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { WHATSAPP_URL } from '../../../utils/constants';

const WhatsAppFloat = () => {
  const handleClick = () => {
    window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        right: { xs: 16, md: 24 },
        bottom: { xs: 20, md: 28 },
        zIndex: 1300,
      }}
    >
      <Button
        onClick={handleClick}
        startIcon={<WhatsAppIcon sx={{ fontSize: 28 }} />}
        sx={{
          background: '#25D366',
          color: 'white',
          fontWeight: 700,
          fontSize: { xs: '0.85rem', md: '0.95rem' },
          px: { xs: 2, md: 3 },
          py: { xs: 1.2, md: 1.5 },
          borderRadius: '50px',
          boxShadow: '0 4px 20px rgba(37,211,102,0.5)',
          textTransform: 'none',
          '&:hover': {
            background: '#1da851',
            transform: 'scale(1.04)',
            boxShadow: '0 6px 28px rgba(37,211,102,0.6)',
          },
          transition: 'all 0.3s ease',
        }}
      >
        How can I help you?
      </Button>
    </Box>
  );
};

export default WhatsAppFloat;
