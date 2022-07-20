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
    <div className={classes.links}>
    <Col  md={1} >
    <Link activeClassName={classes.active} to="/popular">popular:</Link> 
    </Col>

    <Col  md={1} >
    <Link to="/all" className={classes.all}>all</Link> 
    </Col>
    <Col  md={1} >
    <Link to="/sofa">sofa</Link> 
        </Col>
    <Col  md={1} >
    <Link to="/lamp">lamp</Link> 
    </Col>
    <Col md={1} >
    <Link to="/chair">chair</Link> 
    </Col>
    </div>
  </Row>
</Container>

</>
   
    )
}

export default ProductsNav;//rendered in App.js