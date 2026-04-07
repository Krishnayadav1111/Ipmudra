import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
  Button,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GavelIcon from '@mui/icons-material/Gavel';
import BalanceIcon from '@mui/icons-material/Balance';
import InventoryIcon from '@mui/icons-material/Inventory';
import BrushIcon from '@mui/icons-material/Brush';
import SecurityIcon from '@mui/icons-material/Security';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PublicIcon from '@mui/icons-material/Public';
import DevicesIcon from '@mui/icons-material/Devices';
import VerifiedIcon from '@mui/icons-material/Verified';
import NatureIcon from '@mui/icons-material/Nature';

const iconMap = {
  GavelIcon,
  BalanceIcon,
  InventoryIcon,
  BrushIcon,
  SecurityIcon,
  BusinessCenterIcon,
  PublicIcon,
  DevicesIcon,
  VerifiedIcon,
  NatureIcon,
};

const ServiceCard = ({ service, index }) => {
  const IconComponent = iconMap[service.icon] || VerifiedIcon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{ height: '100%' }}
    >
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid rgba(11,31,75,0.07)',
          cursor: 'pointer',
          position: 'relative',
          overflow: 'hidden',
          background: 'white',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'linear-gradient(90deg, #C9A84C, #e0c070)',
            transform: 'scaleX(0)',
            transformOrigin: 'left',
            transition: 'transform 0.35s ease',
          },
          '&:hover::before': {
            transform: 'scaleX(1)',
          },
          '&:hover': {
            boxShadow: '0 16px 48px rgba(11,31,75,0.14)',
            transform: 'translateY(-6px)',
          },
          transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <CardContent sx={{ p: { xs: 3, md: 3.5 }, flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Icon */}
          <Box
            sx={{
              width: 60,
              height: 60,
              borderRadius: 2,
              background: 'linear-gradient(135deg, rgba(11,31,75,0.06), rgba(11,31,75,0.02))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 2.5,
              border: '1px solid rgba(11,31,75,0.08)',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: 'linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))',
                borderColor: 'rgba(201,168,76,0.3)',
              },
            }}
          >
            <IconComponent sx={{ color: '#0B1F4B', fontSize: 28 }} />
          </Box>

          {/* Title */}
          <Typography
            variant="h6"
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 700,
              color: '#0B1F4B',
              mb: 1.5,
              fontSize: '1.05rem',
            }}
          >
            {service.label}
          </Typography>

          {/* Description */}
          <Typography
            variant="body2"
            sx={{
              color: '#6a6a8a',
              lineHeight: 1.7,
              mb: 2.5,
              flex: 1,
              fontSize: '0.875rem',
            }}
          >
            {service.shortDesc}
          </Typography>

          {/* CTA */}
          <Box
            component={Link}
            to={service.path}
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 0.5,
              color: '#C9A84C',
              fontFamily: '"Inter", sans-serif',
              fontWeight: 700,
              fontSize: '0.8rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'gap 0.2s',
              '&:hover': { gap: 1 },
            }}
          >
            Learn More
            <ArrowForwardIcon sx={{ fontSize: 16 }} />
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
