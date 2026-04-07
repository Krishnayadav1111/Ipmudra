import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingEnquireButton from '../common/FloatingEnquireButton';
import useScrollTop from '../../hooks/useScrollTop';

const Layout = () => {
  useScrollTop();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Box component="main" sx={{ flex: 1 }}>
        <Outlet />
      </Box>
      <Footer />
      <FloatingEnquireButton />
    </Box>
  );
};

export default Layout;
