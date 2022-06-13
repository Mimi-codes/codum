import React from 'react'
import Footer from '../Footer/Footer';
import classes from './LogIn.module.css';
import NavBar from './NavBar';
import { Link} from 'react-router-dom';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import { Container } from 'react-bootstrap';

const LogIn = () => {
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
      <Container className={classes.login}>
            <div className={classes.log}>
          <h5>Sign in to your account</h5>
            <form>
        <input type="email"  placeholder="Email" className={classes.mail} />
        <input type="password"  placeholder="Password" className={classes.mail} />


        <div className={classes.box}>
        <input type='checkbox' className={classes.checkbox} />
        <p>Keep me signed in</p>
        </div>
        
       <button type="submit" className={classes.btn}>SIGN IN</button>
</form>
<p>Don't have an account? <Link to='/signup' className={classes.link}>Sign Up</Link> here.</p>
      </div>
      </Container>
      <Footer />
      </>
  )
}

export default LogIn; //rendered in index.js