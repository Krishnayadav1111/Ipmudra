const CACHE_SECONDS = 300; // 5 minutes — new Google reviews appear on site within ~5 min

const parseNumber = (value, fallback) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

const FALLBACK_REVIEWS = [
  {
    name: 'Anuj Singh',
    date: '2025-06-19',
    text: 'Very good, polite and professional. Affordable pricing and my trademark was registered within 3 hours.',
    rating: 5,
    photoUri: null,
  },
  {
    name: 'Sathish Adithya',
    date: '2025-06-17',
    text: 'Trademark registration completed in just two days. Outstanding service, transparent process, and genuinely client-focused.',
    rating: 5,
    photoUri: null,
  },
  {
    name: 'Aman Khanna',
    date: '2025-06-07',
    text: 'Good service, good behaviour, no hidden charges. If you want trademark registration, always choose IP Mudra.',
    rating: 5,
    photoUri: null,
  },
];

const fallbackPayload = () => ({
  rating: parseNumber(process.env.GOOGLE_RATING, 5.0),
  totalReviews: parseNumber(process.env.GOOGLE_TOTAL_REVIEWS, 232),
  reviews: FALLBACK_REVIEWS,
  source: 'fallback',
});

const mapGoogleReview = (review) => ({
  name: review.authorAttribution?.displayName || 'Google User',
  text: review.text?.text || review.originalText?.text || '',
  date: review.publishTime || null,
  rating: review.rating || 5,
  photoUri: review.authorAttribution?.photoUri || null,
});

const resolvePlaceId = async (apiKey) => {
  if (process.env.GOOGLE_PLACE_ID) {
    return process.env.GOOGLE_PLACE_ID.replace(/^places\//, '');
  }

  const query = process.env.GOOGLE_PLACE_QUERY || 'IP MUDRA ASSOCIATES New Delhi';
  const response = await fetch('https://places.googleapis.com/v1/places:searchText', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': apiKey,
      'X-Goog-FieldMask': 'places.id',
    },
    body: JSON.stringify({ textQuery: query }),
  });

  if (!response.ok) return null;

  const data = await response.json();
  const placeResource = data.places?.[0]?.id;
  return placeResource ? placeResource.replace(/^places\//, '') : null;
};

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    return res.status(200).json(fallbackPayload());
  }

  try {
    const placeId = await resolvePlaceId(apiKey);
    if (!placeId) throw new Error('Place ID not found');

    const response = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'rating,userRatingCount,reviews',
      },
    });

    if (!response.ok) {
      throw new Error(`Places API responded with ${response.status}`);
    }

    const data = await response.json();
    const reviews = (data.reviews || [])
      .map(mapGoogleReview)
      .filter((review) => review.text)
      .slice(0, 5);

    res.setHeader(
      'Cache-Control',
      `s-maxage=${CACHE_SECONDS}, stale-while-revalidate=${CACHE_SECONDS * 2}`,
    );

    return res.status(200).json({
      rating: data.rating ?? fallbackPayload().rating,
      totalReviews: data.userRatingCount ?? fallbackPayload().totalReviews,
      reviews: reviews.length > 0 ? reviews : FALLBACK_REVIEWS,
      source: 'google',
      fetchedAt: new Date().toISOString(),
    });
  } catch {
    return res.status(200).json(fallbackPayload());
  }
}
