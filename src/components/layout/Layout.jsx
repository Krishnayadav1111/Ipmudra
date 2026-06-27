import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingEnquireButton from '../common/FloatingEnquireButton';
import useScrollTop from '../../hooks/useScrollTop';

const Layout = () => {
  useScrollTop();
  const location = useLocation();
  const isTrademarkLanding = location.pathname === '/trademark-registration-india';

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Box component="main" sx={{ flex: 1 }}>
        <Outlet />
      </Box>
      <Footer />
      {!isTrademarkLanding && <FloatingEnquireButton />}
    </Box>
  );
};

export default Layout;
