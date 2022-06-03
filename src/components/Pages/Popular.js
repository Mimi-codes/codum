import React from 'react'
import Footer from '../Footer/Footer';
import HeroSection from '../HeroSection/HeroSection';
import AvailableProducts from '../Products/ProductItem/AvailableProducts';
import Products from '../Products/Products';

const Popular = () => {

  return (
    <>
    <HeroSection />
    <Products />
  <AvailableProducts />
  <Footer />
  </>
  )
}

export default Popular; //rendered in App.js