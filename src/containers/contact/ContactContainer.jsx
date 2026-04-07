import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Alert,
  Stack,
  Paper,
  CircularProgress,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { submitContact, resetContact } from '../../store/slices/contactSlice';
import { CONTACT_INFO } from '../../utils/constants';

const ContactContainer = () => {
  const dispatch = useDispatch();
  const { status, message, error } = useSelector((state) => state.contact);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (status === 'success') {
      reset();
      const timer = setTimeout(() => dispatch(resetContact()), 5000);
      return () => clearTimeout(timer);
    }
  }, [status, reset, dispatch]);

  const onSubmit = (data) => {
    dispatch(submitContact(data));
  };

  const contactDetails = [
    { icon: LocationOnIcon, label: 'Office Address', value: CONTACT_INFO.address },
    { icon: EmailIcon, label: 'Email Us', value: CONTACT_INFO.email },
    { icon: PhoneIcon, label: 'Call Us', value: `${CONTACT_INFO.phone} | ${CONTACT_INFO.mobile}` },
    { icon: AccessTimeIcon, label: 'Business Hours', value: CONTACT_INFO.hours },
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, background: '#F8F6F1' }}>
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '5fr 7fr' },
            gap: { xs: 4, md: 6 },
            alignItems: 'start',
          }}
        >
          {/* ── Left: Contact Info Panel ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box
              sx={{
                background: 'linear-gradient(135deg, #0B1F4B 0%, #060f26 100%)',
                borderRadius: 4,
                p: { xs: 4, md: 5 },
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Decorative circle */}
              <Box
                sx={{
                  position: 'absolute',
                  top: -40,
                  right: -40,
                  width: 200,
                  height: 200,
                  borderRadius: '50%',
                  background: 'rgba(201,168,76,0.06)',
                  border: '1px solid rgba(201,168,76,0.1)',
                  pointerEvents: 'none',
                }}
              />

              <Typography variant="overline" sx={{ color: '#C9A84C', letterSpacing: '0.15em', display: 'block', mb: 2 }}>
                Get In Touch
              </Typography>
              <Typography sx={{
                fontFamily: '"Playfair Display", serif',
                fontSize: { xs: '1.6rem', md: '2rem' },
                fontWeight: 700,
                color: 'white',
                mb: 1.5,
                lineHeight: 1.3,
              }}>
                We're Here to Help
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, mb: 4 }}>
                Reach out to our team of IP experts. Whether you need a consultation, a question, or urgent legal assistance — we respond within 24 hours.
              </Typography>

              <Stack spacing={3}>
                {contactDetails.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <Stack key={i} direction="row" spacing={2} alignItems="flex-start">
                      <Box sx={{
                        width: 44,
                        height: 44,
                        borderRadius: 2,
                        flexShrink: 0,
                        background: 'rgba(201,168,76,0.12)',
                        border: '1px solid rgba(201,168,76,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                        <Icon sx={{ color: '#C9A84C', fontSize: 20 }} />
                      </Box>
                      <Box>
                        <Typography sx={{ color: '#C9A84C', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', mb: 0.3 }}>
                          {item.label}
                        </Typography>
                        <Typography sx={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                          {item.value}
                        </Typography>
                      </Box>
                    </Stack>
                  );
                })}
              </Stack>

              {/* Map placeholder */}
              <Box sx={{
                mt: 4,
                borderRadius: 2,
                overflow: 'hidden',
                border: '1px solid rgba(201,168,76,0.2)',
                height: 150,
                background: 'rgba(255,255,255,0.04)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: 1,
              }}>
                <LocationOnIcon sx={{ color: '#C9A84C', fontSize: 30 }} />
                <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem', textAlign: 'center', px: 2 }}>
                  Connaught Place, New Delhi – 110001
                </Typography>
              </Box>
            </Box>
          </motion.div>

          {/* ── Right: Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Paper
              elevation={0}
              sx={{
                p: { xs: 4, md: 5 },
                borderRadius: 4,
                border: '1px solid rgba(11,31,75,0.08)',
                background: 'white',
              }}
            >
              <Typography variant="overline" sx={{ color: '#C9A84C', letterSpacing: '0.15em', display: 'block', mb: 1.5 }}>
                Send Us a Message
              </Typography>
              <Typography sx={{
                fontFamily: '"Playfair Display", serif',
                fontSize: { xs: '1.5rem', md: '1.8rem' },
                fontWeight: 700,
                color: '#0B1F4B',
                mb: 0.5,
              }}>
                Request a Consultation
              </Typography>
              <Typography variant="body2" sx={{ color: '#6a6a8a', mb: 4 }}>
                Fill in the form and one of our attorneys will contact you within 24 business hours.
              </Typography>

              {status === 'success' && (
                <Alert severity="success" sx={{ mb: 3, borderRadius: 2 }}>{message}</Alert>
              )}
              {status === 'error' && (
                <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>{error}</Alert>
              )}

              <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                {/* Row 1: First Name + Last Name */}
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                    gap: 2.5,
                    mb: 2.5,
                  }}
                >
                  <TextField
                    label="First Name"
                    fullWidth
                    error={!!errors.firstName}
                    helperText={errors.firstName?.message}
                    {...register('firstName', { required: 'First name is required' })}
                  />
                  <TextField
                    label="Last Name"
                    fullWidth
                    error={!!errors.lastName}
                    helperText={errors.lastName?.message}
                    {...register('lastName', { required: 'Last name is required' })}
                  />
                </Box>

                {/* Row 2: Email + Phone */}
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                    gap: 2.5,
                    mb: 2.5,
                  }}
                >
                  <TextField
                    label="Email Address"
                    fullWidth
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
                    error={!!errors.phone}
                    helperText={errors.phone?.message}
                    {...register('phone', {
                      pattern: { value: /^[0-9+\-\s()]{7,15}$/, message: 'Enter a valid phone number' },
                    })}
                  />
                </Box>

                {/* Row 3: Subject — full width */}
                <TextField
                  label="Subject / Service Type"
                  fullWidth
                  error={!!errors.subject}
                  helperText={errors.subject?.message}
                  sx={{ mb: 2.5 }}
                  {...register('subject', { required: 'Subject is required' })}
                />

                {/* Row 4: Message — full width */}
                <TextField
                  label="Your Message"
                  fullWidth
                  multiline
                  rows={5}
                  placeholder="Please describe your legal matter or query in detail..."
                  error={!!errors.message}
                  helperText={errors.message?.message}
                  sx={{ mb: 3 }}
                  {...register('message', {
                    required: 'Message is required',
                    minLength: { value: 20, message: 'Please provide at least 20 characters' },
                  })}
                />

                {/* Row 5: Submit button — full width */}
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                  disabled={status === 'loading'}
                  sx={{ py: 1.8, fontWeight: 700, fontSize: '0.95rem', letterSpacing: '0.05em' }}
                >
                  {status === 'loading' ? (
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <CircularProgress size={20} color="inherit" />
                      <span>Submitting...</span>
                    </Stack>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </Box>

              <Typography variant="caption" sx={{ color: '#9a9ab0', display: 'block', mt: 2, textAlign: 'center' }}>
                By submitting this form, you acknowledge that IP Mudra will process your information to respond to your inquiry.
              </Typography>
            </Paper>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactContainer;
