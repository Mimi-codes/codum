import React from 'react';
import classes from './NavBar.module.css';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
// import Cart from './NavCartButton';
import NavCartButton from './NavCartButton';
import { Link } from 'react-router-dom';
import LogIn from './LogIn';

const NavBar = (props) => {
return (
  <Navbar bg="" expand="lg" fixed='top' className={classes.nav} >
  <Container>
    <Navbar.Brand className={classes.title} >FURNITURE</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto mt-4 links">
        <Nav.Link  className={classes.home}> <Link to="/" className={classes.link}>Home</Link> </Nav.Link>
        <Nav.Link  className={classes.about}><Link to='/about' className={classes.link}>About</Link></Nav.Link>
        <Nav.Link  className={classes.about}><Link to='/blog' className={classes.link}>Blog</Link></Nav.Link>
        <Nav.Link  className={classes.about}> <Link to='/contact' className={classes.link}>Contact Us</Link></Nav.Link>
        <Button  className={classes.btn} variant="outline-light"  onClick ={props.onClick}>
          <NavCartButton /></Button> 
        <Button className={classes.button} variant="outline-light" > <Link to="/login" className={classes.link}>Log In</Link> </Button> 
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
)
}

export default NavBar; //rendered in HeroSection.js