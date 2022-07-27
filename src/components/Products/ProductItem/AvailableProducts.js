import React, { useContext, useState } from 'react';
import CartContext from '../../../store/cart-context';
import {Card, Button, Container} from 'react-bootstrap';
import classes from './AvailableProducts.module.css';
import Slider  from "react-slick";
import ProductItemForm from '../ProductItem/ProductItemForm';

const DUMMY_ITEMS = [

  {id: 'm1', name: 'ARM CHAIR', description: 'Comfy', price: 800, img: require('../../../assets/chair/chair.png')},
  {id: 'm4', name: 'LED LAMP', description: 'Led lamp', price: 800, img: require('../../../assets/lamp/led.jpg')},
  {id: 'm5', name: 'LONG SOFA', description: 'Comfy', price: 800, img: require('../../../assets/sofa/images.jpg')},
  {id: 'm6', name: 'PATTERN COUCH', description: 'Comfy', price: 800, img: require('../../../assets/sofa/s3.jpg')},
]




const AvailableProducts = (props) => {
  const cartCtx =  useContext(CartContext);

  return (
<>
   
<div className={classes.items}>
      
      {DUMMY_ITEMS.map((item) => (
        <Card className={classes.card} style={{ width: '18rem' }}>
       <Card.Img variant="top" src={item.img} />
       <Card.Body className={classes.body}>
         <Card.Title>{item.name}</Card.Title>
         <Card.Text> {item.description}  </Card.Text>
          <Card.Text> {item.price} 
          <ProductItemForm item={item} />
           </Card.Text>
       </Card.Body>
       </Card>
       ))}
       </div>
</>
)
}

export default AvailableProducts;//rendered in Products.js