import React, { useState } from 'react';
import {
  Fab,
  Tooltip,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Stack,
  Typography,
  IconButton,
  Alert,
} from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CloseIcon from '@mui/icons-material/Close';
import { useForm } from 'react-hook-form';

const FloatingEnquireButton = () => {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    reset();
    setTimeout(() => { setSubmitted(false); setOpen(false); }, 2500);
  };

  return (
    <>
      <Tooltip title="Enquire Now" placement="left" arrow>
        <Fab
          onClick={() => setOpen(true)}
          sx={{
            position: 'fixed',
            right: { xs: 16, md: 24 },
            bottom: { xs: 80, md: 100 },
            zIndex: 1200,
            background: 'linear-gradient(135deg, #C9A84C, #e0c070)',
            color: '#0B1F4B',
            boxShadow: '0 4px 20px rgba(201,168,76,0.5)',
            width: { xs: 52, md: 60 },
            height: { xs: 52, md: 60 },
            '&:hover': {
              background: 'linear-gradient(135deg, #a07830, #C9A84C)',
              transform: 'scale(1.08)',
              boxShadow: '0 8px 28px rgba(201,168,76,0.6)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          <HelpOutlineIcon sx={{ fontSize: { xs: 24, md: 28 } }} />
        </Fab>
      </Tooltip>

      <Box
        sx={{
          position: 'fixed',
          right: { xs: 16, md: 24 },
          bottom: { xs: 140, md: 168 },
          zIndex: 1199,
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
          display: { xs: 'none', md: 'block' },
          animation: 'pulse 2s ease-in-out infinite',
          '@keyframes pulse': {
            '0%, 100%': { opacity: 1 },
            '50%': { opacity: 0.7 },
          },
        }}
      >
        Enquire Now
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
          {submitted ? (
            <Alert severity="success" sx={{ borderRadius: 2 }}>
              Thank you! We will get back to you within 24 hours.
            </Alert>
          ) : (
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
                  color="primary"
                  fullWidth
                  disabled={isSubmitting}
                  sx={{ py: 1.5, fontWeight: 700 }}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                </Button>
              </Stack>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FloatingEnquireButton;
