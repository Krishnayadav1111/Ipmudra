import React from 'react';
import PageBanner from '../components/common/PageBanner';
import ContactContainer from '../containers/contact/ContactContainer';
import ContactCTABanner from '../components/ui/ContactCTABanner';

const ContactPage = () => {
  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="Get in touch with our team of IP experts. We respond to all inquiries within 24 business hours."
        breadcrumbs={[{ label: 'Contact Us', path: '/contact' }]}
      />
      <ContactContainer />
    </>
  );
};

export default ContactPage;
