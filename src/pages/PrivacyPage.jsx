import React from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import PageBanner from '../components/common/PageBanner';

const sections = [
  {
    title: '1. Information We Collect',
    body: 'When you submit a contact form, enquiry, or consultation request, we may collect your name, email address, phone number, and message content. We may also collect basic usage data such as pages visited and device type through analytics tools.',
  },
  {
    title: '2. How We Use Your Information',
    body: 'We use your information solely to respond to your enquiries, provide legal services you request, improve our website, and communicate with you regarding your matter. We do not sell your personal data to third parties.',
  },
  {
    title: '3. Data Storage & Security',
    body: 'We implement reasonable technical and organisational measures to protect your data. Form submissions may be processed through secure third-party email services. While we strive to protect your information, no method of transmission over the internet is 100% secure.',
  },
  {
    title: '4. Cookies & Analytics',
    body: 'This website may use cookies and Google Analytics (when enabled) to understand visitor behaviour and improve user experience. You can disable cookies through your browser settings.',
  },
  {
    title: '5. Third-Party Services',
    body: 'We may use third-party services such as EmailJS for form delivery, Google Maps for location display, and WhatsApp for communication. These services have their own privacy policies governing data they process.',
  },
  {
    title: '6. Your Rights',
    body: 'Under applicable Indian data protection laws including the Digital Personal Data Protection Act, you may have the right to access, correct, or request deletion of your personal data. Contact us at info@ipmudra.com to exercise these rights.',
  },
  {
    title: '7. Data Retention',
    body: 'We retain enquiry and client-related information only for as long as necessary to fulfil the purpose for which it was collected, or as required by applicable law and professional obligations.',
  },
  {
    title: '8. Contact Us',
    body: 'For privacy-related queries, contact IP Mudra at info@ipmudra.com or visit our office at G2 (Ground Floor), Delhi Tax Bar Association, Lawyer Chambers, 30 D.D.U. Marg, New Delhi – 110002.',
  },
];

const PrivacyPage = () => (
  <>
    <PageBanner
      title="Privacy Policy"
      subtitle="How IP Mudra collects, uses, and protects your personal information."
      breadcrumbs={[{ label: 'Privacy Policy', path: '/privacy' }]}
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

export default PrivacyPage;
