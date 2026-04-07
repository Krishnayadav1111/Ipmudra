import React from 'react';
import { useSelector } from 'react-redux';
import ServicesGrid from '../../components/ui/ServicesGrid';

const ServicesContainer = () => {
  const services = useSelector((state) => state.services.list);
  return <ServicesGrid services={services} />;
};

export default ServicesContainer;
