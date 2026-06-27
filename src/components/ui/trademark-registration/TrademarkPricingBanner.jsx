import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  TextField,
  Stack,
  Paper,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import heroBg from '../../../assets/hero_bg.png';
import { WHATSAPP_URL } from '../../../utils/constants';

const openWhatsApp = (message) => {
  const url = message
    ? `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`
    : WHATSAPP_URL;
  window.open(url, '_blank', 'noopener,noreferrer');
};

const TrademarkPricingBanner = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const message = `Hi, I'm interested in Trademark Registration.\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}`;
    openWhatsApp(message);
  };

  const benefits = [
    '100% Online Process',
    'No Hidden Charges',
    'Legal Experts',
  ];

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: 'auto', md: '90vh' },
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        pt: { xs: 10, md: 12 },
        pb: { xs: 6, md: 8 },
      }}
    >
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
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(135deg, rgba(6,15,38,0.94) 0%, rgba(11,31,75,0.88) 50%, rgba(6,15,38,0.92) 100%)',
          zIndex: 1,
        }}
      />
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

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 3, px: { xs: 3, md: 6 } }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
            gap: { xs: 4, md: 6 },
            alignItems: 'center',
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                fontWeight: 700,
                color: 'white',
                lineHeight: 1.2,
                mb: 1,
              }}
            >
              Secure Your Brand Name
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '1.4rem', sm: '1.8rem', md: '2.2rem' },
                fontWeight: 700,
                color: '#C9A84C',
                lineHeight: 1.3,
                mb: 2,
              }}
            >
              Trademark Registration @ Just ₹2,000/- + Gov. Fees
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '1rem', md: '1.15rem' },
                fontWeight: 600,
                color: 'white',
                mb: 3,
                lineHeight: 1.5,
              }}
            >
              No Additional Cost for Reply of Objection and Hearing
            </Typography>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1, sm: 2 }}
              flexWrap="wrap"
              sx={{ mb: 4, gap: 1 }}
            >
              {benefits.map((item) => (
                <Stack key={item} direction="row" spacing={0.5} alignItems="center">
                  <CheckCircleIcon sx={{ color: '#4CAF50', fontSize: 20 }} />
                  <Typography sx={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem', fontWeight: 500 }}>
                    {item}
                  </Typography>
                </Stack>
              ))}
            </Stack>

            <Button
              variant="contained"
              size="large"
              onClick={() => openWhatsApp('Hi, I want to register my trademark.')}
              sx={{
                background: 'linear-gradient(135deg, #C9A84C, #e0c070)',
                color: '#0B1F4B',
                fontWeight: 800,
                fontSize: { xs: '0.95rem', md: '1.05rem' },
                px: { xs: 3, md: 5 },
                py: { xs: 1.5, md: 1.8 },
                borderRadius: '50px',
                boxShadow: '0 4px 24px rgba(201,168,76,0.45)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #a07830, #C9A84C)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 32px rgba(201,168,76,0.55)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Register My Trademark Now
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 3,
                background: 'rgba(6,15,38,0.75)',
                border: '1px solid rgba(201,168,76,0.25)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <Typography
                sx={{
                  fontFamily: '"Playfair Display", serif',
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  fontWeight: 700,
                  color: '#C9A84C',
                  mb: 3,
                  textAlign: 'center',
                  lineHeight: 1.4,
                }}
              >
                Get Free Consultation from expert Trademark Attorney
              </Typography>

              <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={2.5}>
                  <TextField
                    label="Name"
                    required
                    fullWidth
                    {...register('name', { required: true })}
                    sx={formFieldSx}
                  />
                  <TextField
                    label="Number"
                    required
                    fullWidth
                    {...register('phone', { required: true })}
                    sx={formFieldSx}
                  />
                  <TextField
                    label="Email"
                    required
                    fullWidth
                    type="email"
                    {...register('email', { required: true })}
                    sx={formFieldSx}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    size="large"
                    sx={{
                      py: 1.5,
                      fontWeight: 800,
                      fontSize: '1rem',
                      letterSpacing: '0.08em',
                      background: 'white',
                      color: '#0B1F4B',
                      '&:hover': { background: '#f0f0f0' },
                    }}
                  >
                    SUBMIT
                  </Button>
                </Stack>
              </Box>
            </Paper>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

const formFieldSx = {
  '& .MuiOutlinedInput-root': {
    color: 'white',
    '& fieldset': { borderColor: 'rgba(201,168,76,0.35)' },
    '&:hover fieldset': { borderColor: '#C9A84C' },
    '&.Mui-focused fieldset': { borderColor: '#C9A84C' },
  },
  '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.7)' },
  '& .MuiInputLabel-root.Mui-focused': { color: '#C9A84C' },
};

export default TrademarkPricingBanner;
