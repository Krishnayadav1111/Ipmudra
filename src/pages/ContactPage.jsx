import React from 'react';
import TrademarkPricingBanner from '../components/ui/trademark-registration/TrademarkPricingBanner';
import TrademarkRegistrationContent from '../components/ui/trademark-registration/TrademarkRegistrationContent';
import ContactContainer from '../containers/contact/ContactContainer';
import WhatsAppFloat from '../components/ui/trademark-registration/WhatsAppFloat';

const ContactPage = () => {
  return (
    <>
      <TrademarkPricingBanner />
      <TrademarkRegistrationContent />
      <ContactContainer />
      <WhatsAppFloat />
    </>
  );
};

export default ContactPage;
