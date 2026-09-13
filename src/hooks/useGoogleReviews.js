import { useEffect, useState, useCallback } from 'react';
import { GOOGLE_REVIEWS_DEFAULTS, GOOGLE_REVIEWS_FALLBACK_ITEMS } from '../utils/constants';

const REFETCH_MS = 5 * 60 * 1000; // match server cache — refresh every 5 minutes

const getRatingLabel = (rating) => {
  if (rating >= 4.8) return 'EXCELLENT';
  if (rating >= 4.5) return 'GREAT';
  if (rating >= 4.0) return 'VERY GOOD';
  return 'GOOD';
};

const parseEnvStats = () => ({
  rating: Number(import.meta.env.VITE_GOOGLE_RATING) || GOOGLE_REVIEWS_DEFAULTS.rating,
  totalReviews: Number(import.meta.env.VITE_GOOGLE_TOTAL_REVIEWS) || GOOGLE_REVIEWS_DEFAULTS.totalReviews,
  reviews: GOOGLE_REVIEWS_FALLBACK_ITEMS,
  source: 'env',
});

const useGoogleReviews = () => {
  const [data, setData] = useState(() => parseEnvStats());
  const [loading, setLoading] = useState(true);

  const fetchReviews = useCallback(async (isInitial = false) => {
    try {
      const response = await fetch('/api/google-reviews', { cache: 'no-store' });
      if (!response.ok) throw new Error('Failed to fetch reviews');

      const json = await response.json();
      setData({
        rating: Number(json.rating) || parseEnvStats().rating,
        totalReviews: Number(json.totalReviews) || parseEnvStats().totalReviews,
        reviews: json.reviews?.length ? json.reviews : GOOGLE_REVIEWS_FALLBACK_ITEMS,
        source: json.source || 'api',
      });
    } catch {
      setData(parseEnvStats());
    } finally {
      if (isInitial) setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchReviews(true);
    const interval = setInterval(() => fetchReviews(false), REFETCH_MS);
    return () => clearInterval(interval);
  }, [fetchReviews]);

  return {
    rating: data.rating,
    totalReviews: data.totalReviews,
    reviews: data.reviews,
    label: getRatingLabel(data.rating),
    loading,
    isLive: data.source === 'google',
  };
};

export default useGoogleReviews;
