import React from 'react'
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import AvailableProducts from '../Products/ProductItem/AvailableProducts';
import ProductsNav from '../Products/ProductsNav';
import classes from './BuyNow.module.css'
import { useState } from 'react';
import Cart from '../Cart/Cart';

const Lamps = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <>
    <NavBar  onShowCart={showCartHandler}/>
    {cartIsShown && <Cart onClose={hideCartHandler} />}
    <div className={classes.main}>
  <ProductsNav />
  <AvailableProducts />
  </div>
  <Footer />
    </>
    )
}

export default Lamps; //rendered in index.js