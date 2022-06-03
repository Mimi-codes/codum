import React from 'react'
import Footer from '../Footer/Footer';
import HeroSection from '../HeroSection/HeroSection';
import AvailableProducts from '../Products/ProductItem/AvailableProducts';
import Products from '../Products/Products';

const All = () => {

  return (
    <>
    <HeroSection />
<Products />
  <AvailableProducts />
  <Footer />
  </>
    )
}

export default All; //rendered in App.js