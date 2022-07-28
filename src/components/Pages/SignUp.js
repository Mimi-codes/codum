import React from 'react'
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import { Link } from 'react-router-dom';
import classes from './SignUp.module.css';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import { Container } from 'react-bootstrap';

const SignUp = () => {
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
      <Container className={classes.create}>
            <div className={classes.sign}>
          <h5>Create your account</h5>
            <form className={classes.form}>
        <input  type="name"  placeholder="Full Name" className={classes.name} />
        <input type="email"  placeholder="Email address" className={classes.name} />
        <input type="password"  placeholder="Password" className={classes.name} />
    


       <button type="submit" className={classes.btn}>CREATE ACCOUNT</button>
</form>
<p>Already have an account? <Link to='/login' className={classes.link}>Sign In</Link> here.</p>
</div>
</Container>
      <Footer />
      </>
  )
}

export default SignUp; //rendered in index.js