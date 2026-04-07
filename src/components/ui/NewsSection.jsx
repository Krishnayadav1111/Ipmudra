import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SectionTitle from '../common/SectionTitle';

const categoryColors = {
  Trademark: '#0B1F4B',
  Patent: '#1a3a7a',
  Copyright: '#2a4a8a',
  TMT: '#C9A84C',
  GI: '#8b7355',
  Corporate: '#4a5568',
};

const NewsSection = ({ items }) => {
  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, background: '#F8F6F1' }}>
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
        <SectionTitle
          title="Legal Insights & News"
          subtitle="Stay informed on the latest developments in intellectual property law, landmark judgments, and regulatory updates."
          overline="News & Updates"
        />

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: 3,
          }}
        >
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid rgba(11,31,75,0.07)',
                  background: 'white',
                  overflow: 'hidden',
                  '&:hover': {
                    boxShadow: '0 16px 40px rgba(11,31,75,0.12)',
                    transform: 'translateY(-4px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                {/* Top color bar */}
                <Box
                  sx={{
                    height: 4,
                    background: `linear-gradient(90deg, ${categoryColors[item.category] || '#0B1F4B'}, ${categoryColors[item.category] || '#0B1F4B'}88)`,
                  }}
                />
                <CardContent sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Chip
                      label={item.category}
                      size="small"
                      sx={{
                        background: `${categoryColors[item.category] || '#0B1F4B'}15`,
                        color: categoryColors[item.category] || '#0B1F4B',
                        fontWeight: 700,
                        fontSize: '0.7rem',
                        height: 22,
                      }}
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <CalendarTodayIcon sx={{ fontSize: 12, color: '#9a9ab0' }} />
                      <Typography sx={{ fontSize: '0.75rem', color: '#9a9ab0' }}>
                        {formatDate(item.date)}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: '"Playfair Display", serif',
                      fontWeight: 700,
                      fontSize: '1rem',
                      color: '#0B1F4B',
                      mb: 1.5,
                      lineHeight: 1.4,
                      flex: 1,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: '#6a6a8a', lineHeight: 1.7, fontSize: '0.855rem', mb: 2.5 }}
                  >
                    {item.excerpt}
                  </Typography>
                  <Box
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 0.5,
                      color: '#C9A84C',
                      fontFamily: '"Inter", sans-serif',
                      fontWeight: 700,
                      fontSize: '0.78rem',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      transition: 'gap 0.2s',
                      '&:hover': { gap: 1 },
                    }}
                  >
                    Read More <ArrowForwardIcon sx={{ fontSize: 14 }} />
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default NewsSection;
