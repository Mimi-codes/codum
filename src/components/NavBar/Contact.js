import React from 'react'
import { Navbar } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import NavBar from './NavBar';
import classes from './Contact.module.css';

const Contact = () => {
  return (
      <>
      <NavBar />
      <div className={classes['contact-us']}>
            <div className={classes.contact}>
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
</div>
</div>
      <Footer />
      </>
  )
}

export default Contact; //rendered in index.js