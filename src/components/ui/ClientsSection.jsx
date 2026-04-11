import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
} from '@mui/material';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';

const ClientsSection = ({ clients }) => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: '#ffffff',
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
        <SectionTitle
          title="Our Prestigious Clients"
          subtitle="Trusted by industry leaders, corporations, and innovative startups across the globe to protect their most valuable assets."
          overline="Clients"
        />

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(2, 1fr)',
              sm: 'repeat(3, 1fr)',
              md: 'repeat(6, 1fr)',
            },
            gap: { xs: 2, md: 3 },
          }}
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card
                sx={{
                  textAlign: 'center',
                  border: '1px solid rgba(11,31,75,0.07)',
                  background: '#F8F6F1',
                  pt: 3,
                  height: '100%',
                  '&:hover': {
                    boxShadow: '0 16px 40px rgba(201,168,76,0.15)',
                    transform: 'translateY(-6px)',
                    borderColor: 'rgba(201,168,76,0.5)',
                  },
                  transition: 'all 0.35s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
                  <Avatar
                    src={client.logo || undefined}
                    sx={{
                      width: 64,
                      height: 64,
                      background: 'rgba(201,168,76,0.1)',
                      color: '#C9A84C',
                      fontSize: '1.4rem',
                      fontFamily: '"Playfair Display", serif',
                      fontWeight: 700,
                      '& img': { objectFit: 'contain' }
                    }}
                  >
                    {!client.logo && client.initials}
                  </Avatar>
                </Box>
                <CardContent sx={{ pt: 1, pb: 3, px: 2 }}>
                  <Typography
                    sx={{
                      fontFamily: '"Playfair Display", serif',
                      fontWeight: 700,
                      fontSize: '1rem',
                      color: '#0B1F4B',
                      mb: 0.5,
                      lineHeight: 1.2,
                    }}
                  >
                    {client.name}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: '#6a6a8a',
                      display: 'block',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {client.industry}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ClientsSection;
