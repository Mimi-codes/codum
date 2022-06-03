import React from 'react'
import Footer from '../Footer/Footer';
import HeroSection from '../HeroSection/HeroSection';
import AvailableProducts from '../Products/ProductItem/AvailableProducts';
import Products from '../Products/Products';

const Lamps = () => {

  return (
    <>
  <HeroSection />
  <Products />
  <AvailableProducts />
  <Footer />
    </>
    )
}

export default Lamps; //rendered in App.js