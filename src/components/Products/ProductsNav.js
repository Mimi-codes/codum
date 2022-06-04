import classes from './ProductsNav.module.css';
import React, { useContext } from 'react';
import { Row, Col, Navbar, Nav, Container } from 'react-bootstrap';
import { Link} from 'react-router-dom';

const ProductsNav = (props) => {
  
  return (
     <>
<Container className={classes.container}>
    <Row>
    <Col xs={12} md={7}>
<h4>products</h4>
    </Col>
    <Col xs={3} md={1}>
    <Link activeClassName={classes.active} to="/popular">popular:</Link> 
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

</>
   
    )
}

export default ProductsNav;//rendered in App.js