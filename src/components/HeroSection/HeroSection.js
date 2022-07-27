import React from 'react';
import classes from './HeroSection.module.css';
import {Container, Row, Col, Button} from 'react-bootstrap';
import img from '../../assets/chair/edited.png';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

const HeroSection = (props) => {

    return (
  <>
        {/* <div className={classes.hero}> */}
       <Container className={classes.container}>
        <Row className={classes.row}>

        <Col xs={12} sm={12} md={12} lg={5}>
      <Image src={img} fluid alt='chair' className={classes.chair}/>
    </Col>

    <Col xs={12} sm={12} md={12} lg={7}>
      <div className={classes.text}>
       <h3 className={classes.perfect}>beauty is whatever brings perfection</h3>
      <p className={classes.passages}>There are many variations of passages of lorem ipsum available
      but many have suffered.There are many variations of passages of lorem ipsum available
      but many have suffered.There are many variations of passages of lorem ipsum available
      but many have suffered.There are many variations of passages of lorem ipsum available
      but many have suffered.There are many variations of passages of lorem ipsum available
      but many have suffered</p>

<div className={classes.cta}>
      <Button className={classes.button} variant="outline-light"><Link to='/buy' className={classes.link}>buy now</Link></Button> 
      <Button className={classes.btn} variant="outline-light"><Link to='/more' className={classes.link}>read more</Link></Button> 
      </div>    
      </div>
    </Col>

  </Row>
  </Container>
        {/* </div> */}
      
      </>
    )
}
export default HeroSection;//rendered in App.js