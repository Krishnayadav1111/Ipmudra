import React from 'react';
import { Box, Container, Typography, Card, CardContent, Chip, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PageBanner from '../components/common/PageBanner';
import { INSIGHTS_ARTICLES } from '../utils/constants';

const categoryColors = {
  Trademark: '#0B1F4B',
  Patent: '#1a3a7a',
  Copyright: '#2a4a8a',
  TMT: '#C9A84C',
};

const formatDate = (dateStr) =>
  new Date(dateStr).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

const InsightsPage = () => (
  <>
    <PageBanner
      title="Legal Insights"
      subtitle="Expert commentary on trademark, patent, copyright, and regulatory developments in India."
      breadcrumbs={[{ label: 'Insights', path: '/insights' }]}
    />
    <Box sx={{ py: { xs: 6, md: 10 }, background: '#F8F6F1' }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 3,
          }}
        >
          {INSIGHTS_ARTICLES.map((item) => (
            <Card
              key={item.id}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid rgba(11,31,75,0.07)',
                background: 'white',
                '&:hover': { boxShadow: '0 16px 40px rgba(11,31,75,0.12)' },
                transition: 'all 0.3s ease',
              }}
            >
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
                    fontSize: '1.05rem',
                    color: '#0B1F4B',
                    mb: 1.5,
                    lineHeight: 1.4,
                    flex: 1,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#6a6a8a', lineHeight: 1.7, mb: 2.5 }}>
                  {item.excerpt}
                </Typography>
                <Button
                  component={Link}
                  to={`/insights/${item.slug}`}
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    alignSelf: 'flex-start',
                    color: '#C9A84C',
                    fontWeight: 700,
                    px: 0,
                    '&:hover': { background: 'transparent', color: '#a07830' },
                  }}
                >
                  Read Article
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  </>
);

export default InsightsPage;
