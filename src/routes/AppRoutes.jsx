import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';
import Layout from '../components/layout/Layout';

// Lazy-loaded pages for optimal performance
const HomePage = lazy(() => import('../pages/HomePage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const ServicesPage = lazy(() => import('../pages/ServicesPage'));
const TrademarkPage = lazy(() => import('../pages/TrademarkPage'));
const CopyrightPage = lazy(() => import('../pages/CopyrightPage'));
const PatentPage = lazy(() => import('../pages/PatentPage'));
const DesignPage = lazy(() => import('../pages/DesignPage'));
const TeamPage = lazy(() => import('../pages/TeamPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const IPLitigationPage = lazy(() => import('../pages/IPLitigationPage'));
const CorporateLawPage = lazy(() => import('../pages/CorporateLawPage'));
const GeographicalIndicationPage = lazy(() => import('../pages/GeographicalIndicationPage'));
const TMTPage = lazy(() => import('../pages/TMTPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

const PageLoader = () => (
  <Box
    sx={{
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: 2,
    }}
  >
    <CircularProgress sx={{ color: '#C9A84C' }} size={40} thickness={3} />
  </Box>
);

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<PageLoader />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<PageLoader />}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: '/services',
        element: (
          <Suspense fallback={<PageLoader />}>
            <ServicesPage />
          </Suspense>
        ),
      },
      {
        path: '/trademark',
        element: (
          <Suspense fallback={<PageLoader />}>
            <TrademarkPage />
          </Suspense>
        ),
      },
      {
        path: '/copyright',
        element: (
          <Suspense fallback={<PageLoader />}>
            <CopyrightPage />
          </Suspense>
        ),
      },
      {
        path: '/patent',
        element: (
          <Suspense fallback={<PageLoader />}>
            <PatentPage />
          </Suspense>
        ),
      },
      {
        path: '/design',
        element: (
          <Suspense fallback={<PageLoader />}>
            <DesignPage />
          </Suspense>
        ),
      },
      {
        path: '/contact',
        element: (
          <Suspense fallback={<PageLoader />}>
            <ContactPage />
          </Suspense>
        ),
      },
      {
        path: '/team',
        element: (
          <Suspense fallback={<PageLoader />}>
            <TeamPage />
          </Suspense>
        ),
      },
      {
        path: '/ip-litigation',
        element: (
          <Suspense fallback={<PageLoader />}>
            <IPLitigationPage />
          </Suspense>
        ),
      },
      {
        path: '/corporate-law',
        element: (
          <Suspense fallback={<PageLoader />}>
            <CorporateLawPage />
          </Suspense>
        ),
      },
      {
        path: '/geographical-indication',
        element: (
          <Suspense fallback={<PageLoader />}>
            <GeographicalIndicationPage />
          </Suspense>
        ),
      },
      {
        path: '/tmt',
        element: (
          <Suspense fallback={<PageLoader />}>
            <TMTPage />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<PageLoader />}>
            <NotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
]);

const AppRoutes = () => <RouterProvider router={router} />;

export default AppRoutes;
