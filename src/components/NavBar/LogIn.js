import React from 'react'
import Footer from '../Footer/Footer';
import classes from './LogIn.module.css';
import NavBar from './NavBar';
import { Link, useHref } from 'react-router-dom';


function LogIn() {
  return (
      <>
      <NavBar />
      <div className={classes.login}>
            <div className={classes.log}>
          <h5>Sign in to your account</h5>
            <form>
        <input type="email"  placeholder="Email" />
        <input type="password"  placeholder="Password" />
        <input type='checkbox' className={classes.box} />
        {/* <label for='box'>Keep </label> */}
        <input type='checkbox' className={classes.box} />
    
       <button type="submit" className={classes.btn}>SIGN IN</button>
</form>
<p>Don't have an account? <Link to='/signup' className={classes.link}>Sign Up</Link> here.</p>
      </div>
      </div>
      <Footer />
      </>
  )
}

export default LogIn; //rendered in index.js