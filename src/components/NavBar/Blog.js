import React from 'react'
import Footer from '../Footer/Footer';
import NavBar from './NavBar';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import classes from './Blog.module.css';

const Blog = () => {
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
 <div className={classes.footer}>
      <Footer />
      </div>
      </>
  )
}

export default Blog; //rendered in index.js