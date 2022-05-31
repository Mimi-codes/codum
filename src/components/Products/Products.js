import React, { useContext } from 'react';
import classes from './Products.module.css';
import { Row, Col, Navbar, Nav, Container } from 'react-bootstrap';
// import ProductItemForm from './ProductItemForm';
import CartContext from '../../store/cart-context';
import AvailableProducts from './ProductItem/AvailableProducts';
import { NavLink} from 'react-router-dom';

const Products = (props) => {
  
  return (
     <>
<Container className={classes.container}>
    <Row>
    <Col xs={12} md={7}>
<h4>products</h4>
    </Col>
    <Col xs={3} md={1}>
    <NavLink activeClassName={classes.active} to="/popular" id='popular'>popular:</NavLink> 
    </Col>
    <Col xs={2} md={1}>
    <NavLink activeClassName={classes.active} to="/all" id='all'>all</NavLink> 
    </Col>
    <Col xs={2} md={1}>
    <NavLink activeClassName={classes.active} to="/sofa" id='sofa'>sofa</NavLink> 
    </Col>
    <Col xs={2} md={1}>
    <NavLink activeClassName={classes.active} to="/lamps" id='lamps'>lamps</NavLink> 
    </Col>
    <Col xs={2} md={1}>
    <NavLink activeClassName={classes.active} to="/chair" id='chair'>chair</NavLink> 
    </Col>
  </Row>
</Container>
{/* <AvailableProducts /> */}

</>
   
    )
}

export default Products;//rendered in App.js