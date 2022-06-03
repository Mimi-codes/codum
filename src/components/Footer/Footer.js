import React from 'react';
import classes from './Footer.module.css';
import { Container, Row, Col } from 'react-bootstrap';


function Footer() {
  return (
<>
    {/* <Container> */}
    {/* <Row> */}
      {/* <Col sm={8} lg ={4}> */}
          {/* <h3>join our mailing list</h3> */}
          {/* <p>Sign up to be the first to hear about exclusive deals, special offers and upcoming collections.</p> */}
          {/* </Col> */}
      {/* <Col sm={4} lg ={4}> */}
       {/* <input type ='text' placeholder='Enter a valid email address' /> */}
       {/* <hr /> */}
       {/* </Col> */}
{/* </Row> */}
{/* </Container> */}

<footer className={classes.footer}>
    <Container className={classes.container}>
    <Row className={classes.row}>
      <Col xs={12} lg ={4}>
          <h3>FURNITURE</h3>
          <p>Find furnitures with amazing quality products and services.</p>
          <p>Call Us: (+234)123456789</p>
          </Col>
      <Col xs={6} lg ={2} className={classes.useful}>
          <h4>useful links</h4>
          <a href='#'>product categories</a>
          <a href='#'>special promo</a>
          <a href='#'>affiliate product</a>
      </Col>
      <Col xs={6} lg ={2} className={classes.useful}>
      <h4>information</h4>
          <a href='#'>about us</a>
          <a href='#'>offline store</a>
          <a href='#'>join us</a>
      </Col>
      <Col xs={6} lg ={2} className={classes.useful}>
      <h4>support</h4>
          <a href='#'>FAQS</a>
          <a href='#'>support</a>
          <a href='#'>help center</a>
      </Col>
      <Col xs={6} lg ={2} className={classes.useful}> 
      <h4>socials</h4>
          <a href='#'>facebook</a>
          <a href='#'>instagram</a>
          <a href='#'>twitter</a>
      </Col>
    </Row>
<p className={classes.right}>Furniture, 2022 All rights reserved</p>
  </Container>
  </footer>
  </>
  )
}

export default Footer; //rendered in App.js