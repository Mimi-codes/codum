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
      <Col xs={12} sm={12} md={2} lg ={4}>
          <h3>FURNITURE</h3>
          <p>Find furnitures with amazing quality products and services. 
         <br/>   Call Us: (+234)123456789</p>
          
          </Col>
      <Col xs={3} sm={12} md={2} lg ={2} className={classes.useful}>
          <h4> links</h4>
          <a href='#'>product categories</a>
          <a href='#'>special promo</a>
          <a href='#'>affiliate product</a>
      </Col>
      <Col xs={2} sm={12} md={2} lg ={2} className={classes.useful}>
      <h4>info</h4>
          <a href='#'>about us</a>
          <a href='#'>offline store</a>
          <a href='#'>join us</a>
      </Col>
      <Col xs={3} sm={12} md={2} lg ={2} className={classes.useful}>
      <h4>support</h4>
          <a href='#'>FAQS</a>
          <a href='#'>support</a>
          <a href='#'>help center</a>
      </Col>
      <Col xs={3} sm={12} md={2} lg ={2} className={classes.useful}> 
      <h4>socials</h4>
          <a href='#'>facebook</a>
          <a href='#'>instagram</a>
          <a href='#'>twitter</a>
      </Col>
    </Row>
<p className={classes.right}>Furniture, 2022. All rights reserved</p>
  </Container>
  {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31564.814088941548!2d4.527146825470622!3d8.537986097446666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1036528d9c605049%3A0xf59fa28215d71df1!2sIlorin!5e0!3m2!1sen!2sng!4v1654298184518!5m2!1sen!2sng" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
  </footer>
  </>
  )
}

export default Footer; //rendered in App.js