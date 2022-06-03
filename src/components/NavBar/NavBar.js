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
    <Navbar.Brand href="#home"className={classes.title} >FURNITURE</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto mt-4">
        <Nav.Link href="#home" className={classes.home}> <Link to="/" className={classes.link}>Home</Link> </Nav.Link>
        <Nav.Link href="#link" className={classes.about}>About Us</Nav.Link>
        <Nav.Link href="#link" className={classes.about}>Blog</Nav.Link>
        <Nav.Link href="#link" className={classes.about}>Contact Us</Nav.Link>
        <Button href="#" className={classes.btn} variant="outline-light"  onClick ={props.onClick}>
          <NavCartButton /></Button> 
        <Button className={classes.button} variant="outline-light" > <Link to="/login" className={classes.link}>Log In</Link> </Button> 
        
    {/* <NavLink activeClassName={classes.active} to="/login" id='login'><Button className={classes.button} variant="outline-light" >Log In</Button></NavLink>  */}
    
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
)
}

export default NavBar; //rendered in HeroSection.js