import React from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import PageBanner from '../components/common/PageBanner';

const sections = [
  {
    title: '1. Acceptance of Terms',
    body: 'By accessing and using the IP Mudra website (ipmudra.com), you agree to be bound by these Terms and Conditions. If you do not agree, please do not use this website.',
  },
  {
    title: '2. Informational Purpose Only',
    body: 'This website is published for informational purposes only. Nothing on this site constitutes legal advice, solicitation, or an attorney-client relationship. Always consult a qualified legal professional for advice specific to your matter.',
  },
  {
    title: '3. Bar Council Compliance',
    body: 'As per the rules of the Bar Council of India, law firms are not permitted to solicit work or advertise. Content on this website is intended to provide general information about IP Mudra and its areas of practice.',
  },
  {
    title: '4. Intellectual Property',
    body: 'All content, logos, text, graphics, and design elements on this website are the property of IP Mudra Associates unless otherwise stated. Unauthorised reproduction or distribution is prohibited.',
  },
  {
    title: '5. Limitation of Liability',
    body: 'IP Mudra shall not be liable for any direct, indirect, or consequential damages arising from the use of this website or reliance on information contained herein. Use of this website is at your own risk.',
  },
  {
    title: '6. External Links',
    body: 'This website may contain links to third-party websites. IP Mudra is not responsible for the content, privacy practices, or availability of external sites.',
  },
  {
    title: '7. Governing Law',
    body: 'These Terms shall be governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in New Delhi, India.',
  },
  {
    title: '8. Contact',
    body: 'For questions regarding these Terms, contact us at info@ipmudra.com or +91-9582874719.',
  },
];

const TermsPage = () => (
  <>
    <PageBanner
      title="Terms & Conditions"
      subtitle="Please read these terms carefully before using our website."
      breadcrumbs={[{ label: 'Terms & Conditions', path: '/terms' }]}
    />
    <Box sx={{ py: { xs: 6, md: 10 }, background: '#F8F6F1' }}>
      <Container maxWidth="md">
        <Stack spacing={3}>
          {sections.map((section) => (
            <Box
              key={section.title}
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 3,
                background: 'white',
                border: '1px solid rgba(11,31,75,0.08)',
              }}
            >
              <Typography sx={{ fontWeight: 700, color: '#0B1F4B', mb: 1.5, fontSize: '1.05rem' }}>
                {section.title}
              </Typography>
              <Typography sx={{ color: '#6a6a8a', lineHeight: 1.8 }}>{section.body}</Typography>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  </>
);

export default TermsPage;
