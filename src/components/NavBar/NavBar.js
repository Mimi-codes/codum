import React from 'react';
import classes from './NavBar.module.css';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
// import Cart from './NavCartButton';
import NavCartButton from './NavCartButton';

const NavBar = (props) => {
return (

  <Navbar bg="" expand="lg" >
  <Container>
    <Navbar.Brand href="#home"className={classes.title} >FURNITURE</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto mt-4">
        <Nav.Link href="#home" className={classes.home}>Home</Nav.Link>
        <Nav.Link href="#link" className={classes.about}>About Us</Nav.Link>
        <Nav.Link href="#link" className={classes.about}>Blog</Nav.Link>
        <Nav.Link href="#link" className={classes.about}>Contact Us</Nav.Link>
        <Button href="#" className={classes.btn} variant="outline-light" onClick={props.onClick}>
          <NavCartButton /></Button> 
        <Button href="#" className={classes.button} variant="outline-light">Log In</Button> 
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

)
}

export default NavBar; //rendered in HeroSection.js