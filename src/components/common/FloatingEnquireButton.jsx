import React, { useState } from 'react';
import {
  Fab,
  Tooltip,
  Box,
  Dialog,
  DialogContent,
  TextField,
  Button,
  Stack,
  Typography,
  IconButton,
} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CloseIcon from '@mui/icons-material/Close';
import { useForm } from 'react-hook-form';
import { WHATSAPP_BASE_URL, WHATSAPP_URL } from '../../utils/constants';

const buildEnquiryMessage = (data) =>
  [
    'Hi, I have a quick enquiry from the IP Mudra website.',
    '',
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Query: ${data.query}`,
  ].join('\n');

const openWhatsApp = (message) => {
  const url = message
    ? `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`
    : WHATSAPP_URL;
  window.open(url, '_blank', 'noopener,noreferrer');
};

const FloatingEnquireButton = () => {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    openWhatsApp(buildEnquiryMessage(data));
    reset();
    setOpen(false);
  };

  const fabStackSx = {
    position: 'fixed',
    right: { xs: 16, md: 24 },
    bottom: { xs: 20, md: 28 },
    zIndex: 1200,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: 1.5,
  };

  return (
    <>
      <Box sx={fabStackSx}>
        <Box
          component="button"
          type="button"
          onClick={() => setOpen(true)}
          sx={{
            border: 'none',
            cursor: 'pointer',
            background: 'linear-gradient(135deg, #0B1F4B, #1a3a7a)',
            color: 'white',
            px: 1.5,
            py: 0.6,
            borderRadius: '20px 20px 0 20px',
            fontSize: '0.7rem',
            fontWeight: 700,
            fontFamily: '"Inter", sans-serif',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            boxShadow: '0 2px 8px rgba(11,31,75,0.3)',
            animation: 'pulse 2s ease-in-out infinite',
            '@keyframes pulse': {
              '0%, 100%': { opacity: 1 },
              '50%': { opacity: 0.7 },
            },
            '&:hover': { opacity: 0.92 },
          }}
        >
          Enquire Now
        </Box>

        <Tooltip title="Chat on WhatsApp" placement="left" arrow>
          <Fab
            onClick={() => openWhatsApp()}
            sx={{
              background: '#25D366',
              color: 'white',
              boxShadow: '0 4px 20px rgba(37,211,102,0.5)',
              width: { xs: 52, md: 60 },
              height: { xs: 52, md: 60 },
              '&:hover': {
                background: '#1da851',
                transform: 'scale(1.08)',
                boxShadow: '0 6px 28px rgba(37,211,102,0.6)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <WhatsAppIcon sx={{ fontSize: { xs: 26, md: 30 } }} />
          </Fab>
        </Tooltip>
      </Box>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
            background: 'white',
            overflow: 'hidden',
          },
        }}
      >
        <Box
          sx={{
            background: 'linear-gradient(135deg, #0B1F4B, #1a3a7a)',
            py: 2.5,
            px: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontSize: '1.2rem',
              fontWeight: 700,
              color: 'white',
            }}
          >
            Quick Enquiry
          </Typography>
          <IconButton size="small" onClick={() => setOpen(false)} sx={{ color: 'rgba(255,255,255,0.7)' }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <DialogContent sx={{ pt: 3 }}>
          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2.5}>
              <TextField
                label="Your Name"
                fullWidth
                size="small"
                error={!!errors.name}
                helperText={errors.name?.message}
                {...register('name', { required: 'Name is required' })}
              />
              <TextField
                label="Email Address"
                fullWidth
                size="small"
                error={!!errors.email}
                helperText={errors.email?.message}
                {...register('email', {
                  required: 'Email is required',
                  pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email' },
                })}
              />
              <TextField
                label="Phone Number"
                fullWidth
                size="small"
                error={!!errors.phone}
                helperText={errors.phone?.message}
                {...register('phone', {
                  required: 'Phone number is required',
                  pattern: { value: /^[0-9+\-\s()]{7,15}$/, message: 'Enter a valid phone number' },
                })}
              />
              <TextField
                label="Your Query"
                fullWidth
                multiline
                rows={3}
                size="small"
                error={!!errors.query}
                helperText={errors.query?.message}
                {...register('query', { required: 'Please describe your query' })}
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                startIcon={<WhatsAppIcon />}
                sx={{
                  py: 1.5,
                  fontWeight: 700,
                  background: '#25D366',
                  '&:hover': { background: '#1da851' },
                }}
              >
                Submit Enquiry on WhatsApp
              </Button>
              <Button
                type="button"
                variant="outlined"
                fullWidth
                onClick={() => openWhatsApp()}
                startIcon={<WhatsAppIcon sx={{ color: '#25D366' }} />}
                sx={{
                  py: 1.2,
                  fontWeight: 600,
                  borderColor: '#25D366',
                  color: '#0B1F4B',
                  '&:hover': { borderColor: '#1da851', background: 'rgba(37,211,102,0.08)' },
                }}
              >
                Chat on WhatsApp
              </Button>
            </Stack>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FloatingEnquireButton;
