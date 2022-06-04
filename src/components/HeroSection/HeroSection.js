import React from 'react';
import classes from './HeroSection.module.css';
import NavBar from '../NavBar/NavBar';
import {Container, Row, Col, Button} from 'react-bootstrap';
import img from '../../assets/choc-cake.png';
import Image from 'react-bootstrap/Image'
import Cart from '../Cart/Cart';
import { useState } from 'react';
import NavCartButton from '../NavBar/NavCartButton';
import { Link } from 'react-router-dom';

const HeroSection = (props) => {

    return (
        <>
  <>
        <div className={classes.hero}>
        <NavBar onClick={props.onShowCart}/>
       <Container className={classes.container}>
        <Row>
    <Col xs={12} md={6}>
      <p className={classes.variations}>there are many variations</p>
      <h3 className={classes.perfect}>beauty is whatever brings perfect</h3>
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
      </>
    )
}
export default HeroSection;//rendered in App.js