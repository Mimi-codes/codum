import classes from './ProductsNav.module.css';
import React, { useContext } from 'react';
import { Row, Col, Navbar, Nav, Container } from 'react-bootstrap';
import { Link} from 'react-router-dom';

const ProductsNav = (props) => {
  
  return (
     <>
<Container >
    <Row className={classes.row} >
    <Col xs={4} sm={4} md={2} lg={1}  >
    <Link activeClassName={classes.active} to="/popular">Popular:</Link> 
    </Col>

<Col xs={2} sm={2} md={1} lg={1} >
<Link to="/all">All</Link>
</Col>

<Col xs={2} sm={2} md={1} lg={1}> 
  <Link to="/sofa">Sofa</Link>
  </Col>

<Col xs={2} sm={2} md={1} lg={1}>   
<Link to="/lamp">Lamp</Link>
 </Col>

<Col xs={2} sm={2} md={1} lg={1}>
<Link to="/chair">Chair</Link>
</Col>

    </Row>
   </Container>

</>
   
    )
}

export default ProductsNav;//rendered in App.js