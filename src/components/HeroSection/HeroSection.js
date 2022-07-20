import React from 'react';
import classes from './HeroSection.module.css';
import {Container, Row, Col, Button} from 'react-bootstrap';
import img from '../../assets/choc-cake.png';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

const HeroSection = (props) => {

    return (
  <>
        <div className={classes.hero}>
       <Container className={classes.container}>
        <Row>
    <Col xs={12} md={6}>
       <h3 className={classes.perfect}>beauty is whatever brings perfection</h3>
      <p className={classes.passages}>There are many variations of passages of lorem ipsum available
      but many have suffered</p>
    
      <Button className={classes.button} variant="outline-light"><Link to='/buy' className={classes.link}>buy now</Link></Button> 
      <Button className={classes.btn} variant="outline-light"><Link to='/more' className={classes.link}>read more</Link></Button> 
    
    </Col>
    <Col xs={12} md={6}>
      <Image src={img} fluid alt='chair' className={classes.chair}/>
    </Col>
  </Row>
  </Container>
        </div>
      
      </>
    )
}
export default HeroSection;//rendered in App.js