import React from 'react'
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import AvailableProducts from '../Products/ProductItem/AvailableProducts';
import ProductsNav from '../Products/ProductsNav';
import classes from './BuyNow.module.css'

const All = () => {

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

export default All; //rendered in App.js