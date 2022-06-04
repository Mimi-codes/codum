import React from 'react'
import Footer from '../Footer/Footer';
import HeroSection from '../HeroSection/HeroSection';
import NavBar from '../NavBar/NavBar';
import AvailableProducts from '../Products/ProductItem/AvailableProducts';
import ProductsNav from '../Products/ProductsNav';
import classes from './BuyNow.module.css'

const Sofa = () => {

  return (
    <>
    <NavBar />
    <div className={classes.main}>
    <ProductsNav />
  <AvailableProducts />
  </div>
  <Footer />
    </>
    )
}

export default Sofa; //rendered in App.js