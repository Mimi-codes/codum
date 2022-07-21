import React, { useContext, useState } from 'react';
import CartContext from '../../../store/cart-context';
import {Card, Button, Container} from 'react-bootstrap';
import classes from './AvailableProducts.module.css';
import Slider  from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductItemForm from '../ProductItem/ProductItemForm';


const DUMMY_ITEMS = [

  {id: 'm1', name: 'CAKE LOAF', description: 'Yummy', price: 800, img: require('../../../assets/cakeparfait.jpg')},
  {id: 'm2', name: 'CAKE PARFAIT', description: 'Yummy', price: 800, img: require('../../../assets/cakeparfait.jpg')},
  {id: 'm3', name: 'CAKE ROLL', description: 'Yummy', price: 800, img: require('../../../assets/cakeparfait.jpg')},
  {id: 'm4', name: 'CAKE SLICE', description: 'Yummy', price: 800, img: require('../../../assets/cakeparfait.jpg')},
  {id: 'm5', name: 'CUP CAKE', description: 'Yummy', price: 800, img: require('../../../assets/cakeparfait.jpg')},
  {id: 'm6', name: 'CUP CAKE', description: 'Yummy', price: 800, img: require('../../../assets/cakeparfait.jpg')},
  {id: 'm7', name: 'CUP CAKE', description: 'Yummy', price: 800, img: require('../../../assets/cakeparfait.jpg')},
  {id: 'm8', name: 'CUP CAKE', description: 'Yummy', price: 800, img: require('../../../assets/cakeparfait.jpg')},
]


const AvailableProducts = (props) => {
  const cartCtx =  useContext(CartContext);
 

  var settings = {
    className: 'variable-width',
    dots: true,
    infinite: false,
    speed: 900,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }, 
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }, 
      }
    ]
  }
  return (
<>
{/* <Container className={classes.container}> */}
<div className={classes.items}>
        <Slider {...settings}>
        {DUMMY_ITEMS.map((item) => (
                  <div className={classes.item}>
        <Card style={{ width: '18rem' }} className={classes.card}>
<Card.Img variant="top" src={item.img} />
<Card.Body className={classes['card-body']}>
  <Card.Title style={{ fontSize: '1rem' }}>{item.name}</Card.Title>
  <Card.Text>
  <p>{item.description}</p>
 <p>{item.price}</p>
  <ProductItemForm item={item} />
  </Card.Text>
</Card.Body>
</Card>
</div>
))}
        </Slider>
        </div>
{/* </Container> */}
</>
)
}

export default AvailableProducts;//rendered in Products.js