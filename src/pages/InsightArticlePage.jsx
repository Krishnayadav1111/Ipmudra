import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Box, Container, Typography, Chip, Button, Stack } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PageBanner from '../components/common/PageBanner';
import { INSIGHTS_ARTICLES } from '../utils/constants';

const InsightArticlePage = () => {
  const { slug } = useParams();
  const article = INSIGHTS_ARTICLES.find((item) => item.slug === slug);

  if (!article) return <Navigate to="/insights" replace />;

  const formattedDate = new Date(article.date).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <>
      <PageBanner
        title={article.title}
        breadcrumbs={[
          { label: 'Insights', path: '/insights' },
          { label: article.category, path: `/insights/${article.slug}` },
        ]}
      />
      <Box sx={{ py: { xs: 6, md: 10 }, background: '#F8F6F1' }}>
        <Container maxWidth="md">
          <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 4 }}>
            <Chip label={article.category} sx={{ fontWeight: 700, color: '#0B1F4B' }} />
            <Stack direction="row" spacing={0.5} alignItems="center">
              <CalendarTodayIcon sx={{ fontSize: 14, color: '#9a9ab0' }} />
              <Typography sx={{ color: '#9a9ab0', fontSize: '0.85rem' }}>{formattedDate}</Typography>
            </Stack>
          </Stack>

          <Box
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: 3,
              background: 'white',
              border: '1px solid rgba(11,31,75,0.08)',
            }}
          >
            <Typography sx={{ color: '#6a6a8a', fontSize: '1.05rem', lineHeight: 1.8, mb: 4, fontStyle: 'italic' }}>
              {article.excerpt}
            </Typography>
            <Stack spacing={2.5}>
              {article.content.map((paragraph) => (
                <Typography key={paragraph.slice(0, 40)} sx={{ color: '#3a3a5a', lineHeight: 1.9, fontSize: '1rem' }}>
                  {paragraph}
                </Typography>
              ))}
            </Stack>
          </Box>

          <Box sx={{ mt: 4, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button
              component={Link}
              to="/insights"
              startIcon={<ArrowBackIcon />}
              variant="outlined"
              sx={{ borderColor: '#C9A84C', color: '#0B1F4B', fontWeight: 700 }}
            >
              All Insights
            </Button>
            <Button
              component={Link}
              to="/trademark-registration-india"
              variant="contained"
              color="primary"
              sx={{ fontWeight: 700 }}
            >
              Get Free Consultation
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default InsightArticlePage;
