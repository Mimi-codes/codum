import React from 'react'
import Footer from '../Footer/Footer';
import NavBar from './NavBar';
import { useState } from 'react';
import Cart from '../Cart/Cart';

const About = () => {
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
      <Footer />
      </>
  )
}

export default About; //rendered in index.js