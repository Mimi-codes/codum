import React, { useContext } from 'react';
import classes from './Products.module.css';
import { Row, Col, Navbar, Nav, Container } from 'react-bootstrap';
// import ProductItemForm from './ProductItemForm';
import CartContext from '../../store/cart-context';
import AvailableProducts from './ProductItem/AvailableProducts';

const Products = (props) => {
  
  return (
     <>
<Container className={classes.container}>
    <Row>
    <Col xs={12} md={7}>
<h4>products</h4>
    </Col>
    <Col xs={3} md={1}>
      <p><a href='#'>popular:</a></p>
    </Col>
    <Col xs={2} md={1}>
      <p><a href='#'>all</a></p>
    </Col>
    <Col xs={2} md={1}>
      <p><a href='#'>sofa</a></p> 
    </Col>
    <Col xs={2} md={1}>
      <p><a href='#'>lamp</a></p>
    </Col>
    <Col xs={2} md={1}>
      <p><a href='#'>chair</a></p>
    </Col>
  </Row>
</Container>
<AvailableProducts />

</>
   
    )
}

export default Products;//rendered in App.js