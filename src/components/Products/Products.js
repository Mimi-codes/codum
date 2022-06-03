import React, { useContext } from 'react';
import classes from './Products.module.css';
import { Row, Col, Navbar, Nav, Container } from 'react-bootstrap';
// import ProductItemForm from './ProductItemForm';
import CartContext from '../../store/cart-context';
import AvailableProducts from './ProductItem/AvailableProducts';
import { Link} from 'react-router-dom';

const Products = (props) => {
  
  return (
     <>
<Container className={classes.container}>
    <Row>
    <Col xs={12} md={7}>
<h4>products</h4>
    </Col>
    <Col xs={3} md={1}>
    <Link to="/popular">popular:</Link> 
    </Col>
    <Col xs={2} md={1}>
    <Link to="/all">all</Link> 
    </Col>
    <Col xs={2} md={1}>
    <Link to="/sofa">sofa</Link> 
        </Col>
    <Col xs={2} md={1}>
    <Link to="/lamp">lamp</Link> 
    </Col>
    <Col xs={2} md={1}>
    <Link to="/chair">chair</Link> 
    </Col>
  </Row>
</Container>
{/* <AvailableProducts /> */}

</>
   
    )
}

export default Products;//rendered in App.js