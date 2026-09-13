import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

const loadGtag = () => {
  if (!GA_MEASUREMENT_ID || window.gtag) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, { send_page_view: false });
};

const useGoogleAnalytics = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    loadGtag();
  }, []);

  useEffect(() => {
    if (!GA_MEASUREMENT_ID || !window.gtag) return;
    window.gtag('event', 'page_view', {
      page_path: `${pathname}${search}`,
      page_title: document.title,
    });
  }, [pathname, search]);
};

export default useGoogleAnalytics;
