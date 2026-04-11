import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  IconButton,
  Divider,
  Link as MuiLink,
} from '@mui/material';
import { Link } from 'react-router-dom';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import { NAV_LINKS, CONTACT_INFO } from '../../utils/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = NAV_LINKS.slice(0, 5);
  const serviceLinks = NAV_LINKS.slice(2);

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(160deg, #060f26 0%, #0B1F4B 70%, #111d40 100%)',
        color: 'rgba(255,255,255,0.85)',
        pt: { xs: 6, md: 8 },
        pb: 0,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, #C9A84C, #e0c070, #C9A84C)',
        },
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4 } }}>
        <Grid container spacing={{ xs: 5, md: 8, lg: 10 }}>
          {/* Brand Column */}
          <Grid item xs={12} md={4}>
            <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 2.5 }}>
              <Box
                component="img"
                src="/ipmudra.png"
                alt="IP Mudra Logo"
                sx={{
                  height: { xs: 55, md: 70 },
                  objectFit: 'contain',
                  mixBlendMode: 'screen',
                }}
              />
              <Box>
                <Box
                  sx={{
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 800,
                    fontSize: { xs: '1.4rem', md: '1.8rem' },
                    color: '#C9A84C',
                    lineHeight: 1,
                    letterSpacing: '0.02em',
                  }}
                >
                  IP MUDRA
                </Box>
                <Box
                  sx={{
                    fontSize: { xs: '0.7rem', md: '1rem' },
                    color: '#C9A84C',
                    mt: 0.5,
                    fontWeight: 600,
                  }}
                >
                  विचारो का अधिकार
                </Box>
              </Box>
            </Stack>
            <Typography
              variant="body2"
              sx={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, mb: 3, maxWidth: 320 }}
            >
              Protecting your intellectual property with expertise, ethics, and strategic foresight. 
              We combine years of legal experience to give your innovations the protection they deserve.
            </Typography>
            <Stack direction="row" spacing={1}>
              {[
                { Icon: LinkedInIcon, url: '#' },
                { Icon: XIcon, url: '#' },
                { Icon: InstagramIcon, url: 'https://www.instagram.com/ipmudra/' }
              ].map(({ Icon, url }, i) => (
                <IconButton
                  key={i}
                  component="a"
                  href={url}
                  target={url !== '#' ? "_blank" : undefined}
                  rel={url !== '#' ? "noopener noreferrer" : undefined}
                  size="small"
                  sx={{
                    color: 'rgba(255,255,255,0.6)',
                    border: '1px solid rgba(201,168,76,0.3)',
                    borderRadius: 1,
                    p: 0.8,
                    transition: 'all 0.25s',
                    '&:hover': {
                      color: '#C9A84C',
                      borderColor: '#C9A84C',
                      background: 'rgba(201,168,76,0.1)',
                    },
                  }}
                >
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} md={2}>
            <Typography
              variant="overline"
              sx={{ color: '#C9A84C', fontWeight: 700, fontSize: '0.7rem', mb: 2, display: 'block' }}
            >
              Quick Links
            </Typography>
            <Stack spacing={1}>
              {NAV_LINKS.filter(l => !['Trademark', 'Copyright', 'Design', 'Patent'].includes(l.label)).map((link) => (
                <MuiLink
                  key={link.path}
                  component={Link}
                  to={link.path}
                  sx={{
                    color: 'rgba(255,255,255,0.65)',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    fontFamily: '"Inter", sans-serif',
                    transition: 'color 0.2s',
                    '&:hover': { color: '#C9A84C' },
                  }}
                >
                  {link.label}
                </MuiLink>
              ))}
            </Stack>
          </Grid>

          {/* Practice Areas */}
          <Grid item xs={6} md={2}>
            <Typography
              variant="overline"
              sx={{ color: '#C9A84C', fontWeight: 700, fontSize: '0.7rem', mb: 2, display: 'block' }}
            >
              Practice Areas
            </Typography>
            <Stack spacing={1}>
              {['Trademark', 'Copyright', 'Patent', 'Design IP', 'IP Litigation', 'Corporate Law'].map((area) => (
                <Typography
                  key={area}
                  sx={{
                    color: 'rgba(255,255,255,0.65)',
                    fontSize: '0.85rem',
                    fontFamily: '"Inter", sans-serif',
                    cursor: 'default',
                    transition: 'color 0.2s',
                    '&:hover': { color: '#C9A84C' },
                  }}
                >
                  {area}
                </Typography>
              ))}
            </Stack>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="overline"
              sx={{ color: '#C9A84C', fontWeight: 700, fontSize: '0.7rem', mb: 2, display: 'block' }}
            >
              Contact Us
            </Typography>
            <Stack spacing={2}>
              <Stack direction="row" spacing={1.5} alignItems="flex-start">
                <LocationOnIcon sx={{ color: '#C9A84C', fontSize: 18, mt: 0.3, flexShrink: 0 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, whiteSpace: 'pre-line' }}>
                  {CONTACT_INFO.address}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <EmailIcon sx={{ color: '#C9A84C', fontSize: 18, flexShrink: 0 }} />
                <MuiLink
                  href={`mailto:${CONTACT_INFO.email}`}
                  sx={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.875rem', textDecoration: 'none', '&:hover': { color: '#C9A84C' } }}
                >
                  {CONTACT_INFO.email}
                </MuiLink>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <PhoneIcon sx={{ color: '#C9A84C', fontSize: 18, flexShrink: 0 }} />
                <MuiLink
                  href={`tel:${CONTACT_INFO.phone}`}
                  sx={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.875rem', textDecoration: 'none', whiteSpace: 'pre-line', '&:hover': { color: '#C9A84C' } }}
                >
                  {CONTACT_INFO.phone}
                </MuiLink>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Box sx={{ width: 18, flexShrink: 0 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem' }}>
                  {CONTACT_INFO.hours}
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        {/* Disclaimer Bar */}
        <Box
          sx={{
            mt: 5,
            mx: { xs: -2, md: -4 },
            px: { xs: 2, md: 4 },
            py: 2,
            background: 'rgba(0,0,0,0.25)',
            borderTop: '1px solid rgba(201,168,76,0.15)',
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: 'rgba(255,255,255,0.4)',
              display: 'block',
              textAlign: 'center',
              lineHeight: 1.7,
              fontSize: '0.72rem',
            }}
          >
            <strong style={{ color: 'rgba(255,255,255,0.6)' }}>Disclaimer:</strong> As per the rules of the Bar Council of India, law firms are not permitted to solicit work or advertise. This website is solely for informational purposes and should not be construed as legal advice.
          </Typography>
        </Box>

        <Divider sx={{ borderColor: 'rgba(201,168,76,0.15)' }} />

        <Box
          sx={{
            py: 2.5,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 1,
          }}
        >
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>
            © {currentYear} IP Mudra. All Rights Reserved.
          </Typography>
          <Stack direction="row" spacing={2}>
            {['Terms & Conditions', 'Privacy Policy'].map((item) => (
              <Typography
                key={item}
                variant="caption"
                sx={{
                  color: 'rgba(255,255,255,0.4)',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  '&:hover': { color: '#C9A84C' },
                }}
              >
                {item}
              </Typography>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
