import React from 'react';
import classes from './NavBar.module.css';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
// import Cart from './NavCartButton';
import NavCartButton from './NavCartButton';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
return (
  <Navbar bg="" expand="lg" fixed='top' className={classes.nav}>
  <Container className={classes.container}>
    <Navbar.Brand  className={classes.title} >FURNITURE</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto mt-4 links">
      <Link to="/" className={classes.home}>Home</Link> 
 <Link to='/about' className={classes.about}>About</Link>
 <Link to='/blog' className={classes.about}>Blog</Link>
 <Link to='/contact' className={classes.about}>Contact</Link>
        <Button  className={classes.btn} variant="outline-light" onClick={props.onShowCart}>
          <NavCartButton /></Button> 
        <Button className={classes.button} variant="outline-light" > <Link to="/login" className={classes.link}>Log In</Link> </Button> 
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
)
}

export default NavBar; //rendered in App.js