import React from 'react'
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import { Link, useHref } from 'react-router-dom';
import classes from './SignUp.module.css';
import LogIn from '../NavBar/LogIn';

const SignUp = () => {
  return (
      <>
      <NavBar />

      <div className={classes.create}>
            <div className={classes.sign}>
          <h5>Create your account</h5>
            <form>
        <input  type="name"  placeholder="Full Name" />
        <input type="email"  placeholder="Email address" />
        <input type="password"  placeholder="Password" />
        <input type='checkbox' className={classes.box} />
        {/* <label for='box'>Keep </label> */}
        <input type='checkbox' className={classes.box} />
       <button type="submit" className={classes.btn}>CREATE ACCOUNT</button>
</form>
<p>Already have an account? <Link to='/login' className={classes.link}>Sign In</Link> here.</p>
</div>
</div>
      <Footer />
      </>
  )
}

export default SignUp; //rendered in index.js