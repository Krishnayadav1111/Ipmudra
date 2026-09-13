import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Stack,
  Button,
  Rating,
  Skeleton,
  Avatar,
  Chip,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import GoogleIcon from '../common/GoogleIcon';
import useGoogleReviews from '../../hooks/useGoogleReviews';
import { GOOGLE_REVIEWS } from '../../utils/constants';

const formatReviewDate = (dateStr) => {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};

const GoogleReviewsSection = () => {
  const { rating, totalReviews, reviews, label, loading, isLive } = useGoogleReviews();

  const displayReviews = reviews.slice(0, 3);

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, background: 'white' }}>
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
        <Stack direction="row" spacing={1} alignItems="center" justifyContent="center" sx={{ mb: 1 }}>
          <GoogleIcon size={28} />
          <Typography
            sx={{
              color: '#0B1F4B',
              fontWeight: 700,
              fontSize: '0.85rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            Google Reviews
          </Typography>
          {isLive && (
            <Chip
              label="Live"
              size="small"
              sx={{
                height: 22,
                fontSize: '0.65rem',
                fontWeight: 700,
                background: 'rgba(52,168,83,0.12)',
                color: '#34A853',
              }}
            />
          )}
        </Stack>

        <SectionTitle
          title="What Our Clients Say"
          subtitle=""
          overline="Client Reviews"
        />

        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 4 },
            mb: 4,
            borderRadius: 3,
            border: '1px solid rgba(11,31,75,0.08)',
            background: 'linear-gradient(135deg, #0B1F4B 0%, #1a3a7a 100%)',
            textAlign: 'center',
          }}
        >
          {loading ? (
            <Stack spacing={1.5} alignItems="center">
              <Skeleton variant="text" width={120} sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />
              <Skeleton variant="rounded" width={180} height={28} sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />
              <Skeleton variant="text" width={200} sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />
            </Stack>
          ) : (
            <>
              <Stack direction="row" spacing={1} justifyContent="center" alignItems="center" sx={{ mb: 1 }}>
                <GoogleIcon size={22} />
                <Typography
                  sx={{
                    color: '#C9A84C',
                    fontWeight: 800,
                    letterSpacing: '0.12em',
                    fontSize: '0.85rem',
                  }}
                >
                  {label}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} justifyContent="center" alignItems="center" sx={{ mb: 1 }}>
                <Rating
                  value={rating}
                  readOnly
                  precision={0.1}
                  icon={<StarIcon sx={{ color: '#C9A84C' }} />}
                  emptyIcon={<StarIcon sx={{ color: 'rgba(255,255,255,0.2)' }} />}
                />
                <Typography sx={{ color: 'white', fontWeight: 700, fontSize: '1.1rem' }}>
                  {rating.toFixed(1)}
                </Typography>
              </Stack>
              <Typography sx={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.95rem' }}>
                Based on {totalReviews.toLocaleString('en-IN')} Google reviews
              </Typography>
            </>
          )}
        </Paper>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 3,
            mb: 4,
          }}
        >
          {loading
            ? [0, 1, 2].map((i) => (
                <Paper key={i} sx={{ p: 3, borderRadius: 3, border: '1px solid rgba(11,31,75,0.08)' }}>
                  <Skeleton variant="circular" width={40} height={40} sx={{ mb: 2 }} />
                  <Skeleton variant="text" height={80} />
                </Paper>
              ))
            : displayReviews.map((review, index) => (
                <motion.div
                  key={`${review.name}-${review.date}-${index}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      height: '100%',
                      borderRadius: 3,
                      border: '1px solid rgba(11,31,75,0.08)',
                      background: '#F8F6F1',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
                      <Avatar
                        src={review.photoUri || undefined}
                        alt={review.name}
                        sx={{ width: 40, height: 40, bgcolor: '#0B1F4B', fontSize: '0.9rem' }}
                      >
                        {review.name?.charAt(0)}
                      </Avatar>
                      <Box sx={{ flex: 1 }}>
                        <Typography sx={{ fontWeight: 700, color: '#0B1F4B', fontSize: '0.95rem' }}>
                          {review.name}
                        </Typography>
                        <Stack direction="row" spacing={0.5} alignItems="center">
                          <Rating
                            value={review.rating || 5}
                            readOnly
                            size="small"
                            icon={<StarIcon sx={{ color: '#C9A84C', fontSize: 16 }} />}
                            emptyIcon={<StarIcon sx={{ color: '#ddd', fontSize: 16 }} />}
                          />
                          <GoogleIcon size={14} sx={{ ml: 0.5, opacity: 0.85 }} />
                        </Stack>
                      </Box>
                    </Stack>
                    <Typography
                      sx={{
                        color: '#6a6a8a',
                        lineHeight: 1.7,
                        fontSize: '0.9rem',
                        mb: 2,
                        flex: 1,
                      }}
                    >
                      &ldquo;{review.text}&rdquo;
                    </Typography>
                    {review.date && (
                      <Typography sx={{ color: '#9a9ab0', fontSize: '0.78rem' }}>
                        {formatReviewDate(review.date)}
                      </Typography>
                    )}
                  </Paper>
                </motion.div>
              ))}
        </Box>

        <Box sx={{ textAlign: 'center' }}>
          <Button
            component="a"
            href={GOOGLE_REVIEWS.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            startIcon={<GoogleIcon size={20} />}
            sx={{
              borderColor: '#C9A84C',
              color: '#0B1F4B',
              fontWeight: 700,
              px: 4,
              py: 1.2,
              '&:hover': { borderColor: '#a07830', background: 'rgba(201,168,76,0.08)' },
            }}
          >
            View All Reviews on Google
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default GoogleReviewsSection;
