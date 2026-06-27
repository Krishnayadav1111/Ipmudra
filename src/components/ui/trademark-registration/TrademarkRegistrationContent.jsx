import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import GavelIcon from '@mui/icons-material/Gavel';
import { WHATSAPP_URL } from '../../../utils/constants';

const openWhatsApp = () => {
  window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer');
};

const INCLUDED_SERVICES = [
  {
    icon: SearchIcon,
    title: 'Trademark Search',
    desc: 'Ensure your brand name is unique',
  },
  {
    icon: DescriptionIcon,
    title: 'Trademark Filing',
    desc: 'Hassle-free process by experts',
  },
  {
    icon: GavelIcon,
    title: 'Reply to Objection & Hearing (if required) – Absolutely FREE!',
    desc: 'Our Unique Selling Point',
  },
];

const WHY_CHOOSE = [
  '📣 All-In-One ₹2K Package',
  '🛡️ 5000+ Successful Registrations',
  '⚖️ Expert Legal Team with 10+ Years Experience',
  '💼 Trusted by Startups & Businesses',
  '🚀 Fast & Hassle-Free Online Process',
];

const TESTIMONIALS = [
  {
    name: 'Anuj Singh',
    text: 'He is very good, polite and professional in his work and he charges very affordable amount. Done registering my trademark within 3 hours.',
  },
  {
    name: 'Sathish Adithya',
    text: 'My trademark registration was completed in just two days. Outstanding service, lightning-fast results, and genuinely client-focused service.',
  },
  {
    name: 'Aman Khanna',
    text: 'Good service, good behaviour, no hidden charges. If you want trademark registration always choose IP Mudra.',
  },
];

const FAQS = [
  {
    q: 'How long does trademark registration take?',
    a: 'It usually takes 6–12 months, but you get immediate protection upon filing.',
  },
  {
    q: 'What is the government fee?',
    a: 'The government fee varies, but we guide you through it transparently.',
  },
];

const CountdownTimer = () => {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const end = new Date();
    end.setHours(23, 59, 59, 999);

    const tick = () => {
      const diff = Math.max(0, end - Date.now());
      setTime({
        hours: Math.floor(diff / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n) => String(n).padStart(2, '0');

  return (
    <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 3 }}>
      {[
        { label: 'Hours', value: pad(time.hours) },
        { label: 'Minutes', value: pad(time.minutes) },
        { label: 'Seconds', value: pad(time.seconds) },
      ].map((item) => (
        <Box key={item.label} sx={{ textAlign: 'center' }}>
          <Typography sx={{ fontSize: '2rem', fontWeight: 800, color: '#C9A84C' }}>
            {item.value}
          </Typography>
          <Typography sx={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase' }}>
            {item.label}
          </Typography>
        </Box>
      ))}
    </Stack>
  );
};

const CtaButton = ({ children, sx = {} }) => (
  <Button
    variant="contained"
    size="large"
    onClick={openWhatsApp}
    sx={{
      background: 'linear-gradient(135deg, #C9A84C, #e0c070)',
      color: '#0B1F4B',
      fontWeight: 800,
      px: 4,
      py: 1.6,
      borderRadius: '50px',
      '&:hover': { background: 'linear-gradient(135deg, #a07830, #C9A84C)' },
      ...sx,
    }}
  >
    {children}
  </Button>
);

const SectionTitle = ({ children, subtitle }) => (
  <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 5 } }}>
    <Typography
      sx={{
        fontFamily: '"Playfair Display", serif',
        fontSize: { xs: '1.6rem', md: '2.2rem' },
        fontWeight: 700,
        color: '#0B1F4B',
        mb: subtitle ? 1 : 0,
      }}
    >
      {children}
    </Typography>
    {subtitle && (
      <Typography sx={{ color: '#6a6a8a', fontSize: '1rem' }}>{subtitle}</Typography>
    )}
  </Box>
);

const TrademarkRegistrationContent = () => {
  return (
    <Box>
      {/* Stats strip */}
      <Box sx={{ background: '#0B1F4B', py: 3 }}>
        <Container maxWidth="xl">
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            {['10000+ Successful Registrations', 'Government Approved', '5★ Average Rating'].map(
              (item) => (
                <Stack key={item} direction="row" spacing={1} alignItems="center">
                  <CheckCircleIcon sx={{ color: '#C9A84C', fontSize: 22 }} />
                  <Typography sx={{ color: 'white', fontWeight: 600, fontSize: '0.95rem' }}>
                    {item}
                  </Typography>
                </Stack>
              ),
            )}
          </Stack>
        </Container>
      </Box>

      {/* What's Included */}
      <Box sx={{ py: { xs: 6, md: 8 }, background: '#F8F6F1' }}>
        <Container maxWidth="lg">
          <SectionTitle>What&apos;s Included in Our Service?</SectionTitle>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: 3,
            }}
          >
            {INCLUDED_SERVICES.map((item) => {
              const Icon = item.icon;
              return (
                <Paper
                  key={item.title}
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    border: '1px solid rgba(11,31,75,0.08)',
                    textAlign: 'center',
                    background: 'white',
                  }}
                >
                  <Icon sx={{ fontSize: 40, color: '#C9A84C', mb: 2 }} />
                  <Typography sx={{ fontWeight: 700, color: '#0B1F4B', mb: 1, fontSize: '1rem' }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ color: '#6a6a8a', fontSize: '0.9rem' }}>{item.desc}</Typography>
                </Paper>
              );
            })}
          </Box>
        </Container>
      </Box>

      {/* Comparison table */}
      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="md">
          <SectionTitle subtitle="Company Feature Comparison">How We Are Different</SectionTitle>
          <TableContainer
            component={Paper}
            elevation={0}
            sx={{ borderRadius: 3, border: '1px solid rgba(11,31,75,0.1)', overflow: 'hidden' }}
          >
            <Table>
              <TableHead>
                <TableRow sx={{ background: '#0B1F4B' }}>
                  <TableCell sx={{ color: 'white', fontWeight: 700 }}>Feature</TableCell>
                  <TableCell sx={{ color: '#C9A84C', fontWeight: 700 }} align="center">
                    IP Mudra ₹2K
                  </TableCell>
                  <TableCell sx={{ color: 'rgba(255,255,255,0.7)', fontWeight: 700 }} align="center">
                    Competitors ₹4.5K+
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[
                  { feature: 'Search and Filing', us: true, them: true },
                  { feature: 'Objection Handling', us: true, them: false },
                  { feature: 'Hearing Support', us: true, them: false },
                  { feature: 'Transparent Pricing', us: '₹2,000 flat', them: '₹5,000 Extra' },
                  { feature: 'Bilingual Support', us: 'English & Hindi', them: 'English' },
                ].map((row) => (
                  <TableRow key={row.feature} sx={{ '&:nth-of-type(even)': { background: '#F8F6F1' } }}>
                    <TableCell sx={{ fontWeight: 600, color: '#0B1F4B' }}>{row.feature}</TableCell>
                    <TableCell align="center">
                      {row.us === true ? (
                        <CheckCircleIcon sx={{ color: '#4CAF50' }} />
                      ) : (
                        <Typography sx={{ fontWeight: 600, color: '#0B1F4B' }}>{row.us}</Typography>
                      )}
                    </TableCell>
                    <TableCell align="center">
                      {row.them === true ? (
                        <CheckCircleIcon sx={{ color: '#4CAF50' }} />
                      ) : row.them === false ? (
                        <CancelIcon sx={{ color: '#e53935' }} />
                      ) : (
                        <Typography sx={{ color: '#6a6a8a' }}>{row.them}</Typography>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>

      {/* Objection section */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          background: 'linear-gradient(135deg, #060f26 0%, #0B1F4B 100%)',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontSize: { xs: '1.8rem', md: '2.4rem' },
              fontWeight: 700,
              color: 'white',
              mb: 1,
            }}
          >
            Objection? No Worries
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontSize: { xs: '1.6rem', md: '2rem' },
              fontWeight: 700,
              color: '#C9A84C',
              mb: 2,
            }}
          >
            We Handle It for FREE!
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.75)', mb: 4, maxWidth: 560, mx: 'auto' }}>
            Many firms charge extra for replying to objections, but we provide it at no additional cost.
          </Typography>
          <CtaButton>Register My Trademark Now</CtaButton>
        </Container>
      </Box>

      {/* Why Choose */}
      <Box sx={{ py: { xs: 6, md: 8 }, background: '#F8F6F1' }}>
        <Container maxWidth="md">
          <SectionTitle>Why Choose IP Mudra?</SectionTitle>
          <Stack spacing={2}>
            {WHY_CHOOSE.map((item) => (
              <Paper
                key={item}
                elevation={0}
                sx={{
                  p: 2.5,
                  borderRadius: 2,
                  border: '1px solid rgba(11,31,75,0.08)',
                  background: 'white',
                }}
              >
                <Typography sx={{ fontWeight: 600, color: '#0B1F4B', fontSize: '1rem' }}>
                  {item}
                </Typography>
              </Paper>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* Testimonials */}
      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <SectionTitle subtitle="Join 10000+ Businesses Who Trust IP Mudra">
            Client Testimonials
          </SectionTitle>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: 3,
            }}
          >
            {TESTIMONIALS.map((t) => (
              <Paper
                key={t.name}
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  border: '1px solid rgba(11,31,75,0.08)',
                  background: 'white',
                }}
              >
                <Typography
                  sx={{ color: '#6a6a8a', fontSize: '0.9rem', lineHeight: 1.7, mb: 2, fontStyle: 'italic' }}
                >
                  &ldquo;{t.text}&rdquo;
                </Typography>
                <Typography sx={{ fontWeight: 700, color: '#0B1F4B' }}>{t.name}</Typography>
              </Paper>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Limited-time offer */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          background: 'linear-gradient(135deg, #0B1F4B, #1a3a7a)',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="sm">
          <Typography
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontSize: { xs: '1.6rem', md: '2rem' },
              fontWeight: 700,
              color: '#C9A84C',
              mb: 1,
            }}
          >
            Limited-Time Offer
          </Typography>
          <Typography sx={{ color: 'white', fontSize: '1.1rem', fontWeight: 600, mb: 2 }}>
            Register Now &amp; Secure Your Brand!
          </Typography>
          <CtaButton>Register My Trademark Now</CtaButton>
          <CountdownTimer />
        </Container>
      </Box>

      {/* FAQs */}
      <Box sx={{ py: { xs: 6, md: 8 }, background: '#F8F6F1' }}>
        <Container maxWidth="md">
          <SectionTitle>FAQs</SectionTitle>
          {FAQS.map((faq) => (
            <Accordion
              key={faq.q}
              elevation={0}
              sx={{
                mb: 1.5,
                borderRadius: '12px !important',
                border: '1px solid rgba(11,31,75,0.08)',
                '&:before': { display: 'none' },
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#C9A84C' }} />}>
                <Typography sx={{ fontWeight: 600, color: '#0B1F4B' }}>{faq.q}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: '#6a6a8a', lineHeight: 1.7 }}>{faq.a}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Box>

      {/* Bottom CTA */}
      <Box sx={{ py: { xs: 6, md: 8 }, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontSize: { xs: '1.6rem', md: '2rem' },
              fontWeight: 700,
              color: '#0B1F4B',
              mb: 1,
            }}
          >
            Lawyer&apos;s Assisted Trademark Filing
          </Typography>
          <Typography sx={{ color: '#6a6a8a', mb: 3 }}>
            Get Free Trademark Consultation Today
          </Typography>
          <CtaButton>Register My Trademark Now</CtaButton>
        </Container>
      </Box>
    </Box>
  );
};

export default TrademarkRegistrationContent;
