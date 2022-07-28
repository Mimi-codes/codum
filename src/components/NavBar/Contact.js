import React from 'react'
import Footer from '../Footer/Footer';
import NavBar from './NavBar';
import classes from './Contact.module.css';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import {Container, Col, Row} from 'react-bootstrap';

const Contact = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
<>
<NavBar  onShowCart={showCartHandler} />
{cartIsShown && <Cart onClose={hideCartHandler} />}
<Container>
<Col> 
<Row>
      <div className={classes['contact-us']}>
            <Container className={classes.contact}>
          <h5>Get in touch</h5>
          <p>Have an inquiry or some feedback for us? 
            <br />
            Fill out the form below to 
            contact our team.
          </p>
            <form>
        <input  type="name"  placeholder="First Name" />
        <input  type="name"  placeholder="Last Name" />
        <input type="email"  placeholder="Email address" />
        <textarea rows="3" cols="45" placeholder="Your message..." className={classes.message} ></textarea>
       <button type="submit" className={classes.btn}>GET IN TOUCH</button>
</form>
</Container>
</div>
</Row>
</Col>
</Container>
<div className={classes.footer}>
      <Footer />
      </div>
     
</>
   

           
     
  )
}

export default Contact; //rendered in index.js