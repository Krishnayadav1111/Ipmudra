import React from 'react';
import { Box, Typography } from '@mui/material';

const SectionTitle = ({
  title,
  subtitle,
  align = 'center',
  light = false,
  overline,
}) => {
  return (
    <Box
      sx={{
        textAlign: align,
        mb: { xs: 4, md: 6 },
      }}
    >
      {overline && (
        <Typography
          variant="overline"
          sx={{
            color: '#C9A84C',
            fontWeight: 700,
            letterSpacing: '0.15em',
            fontSize: '0.72rem',
            mb: 1,
            display: 'block',
          }}
        >
          {overline}
        </Typography>
      )}
      <Typography
        variant="h2"
        sx={{
          fontFamily: '"Playfair Display", serif',
          fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.6rem' },
          fontWeight: 700,
          color: light ? 'white' : '#0B1F4B',
          mb: 2,
          lineHeight: 1.25,
        }}
      >
        {title}
      </Typography>
      {/* Gold accent underline */}
      <Box
        sx={{
          width: 64,
          height: 3,
          background: 'linear-gradient(90deg, #C9A84C, #e0c070)',
          borderRadius: 2,
          mx: align === 'center' ? 'auto' : 0,
          mb: subtitle ? 2.5 : 0,
        }}
      />
      {subtitle && (
        <Typography
          variant="body1"
          sx={{
            color: light ? 'rgba(255,255,255,0.75)' : '#4a4a6a',
            maxWidth: 680,
            mx: align === 'center' ? 'auto' : 0,
            lineHeight: 1.8,
            mt: 1,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default SectionTitle;
