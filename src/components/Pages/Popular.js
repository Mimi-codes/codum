import React from 'react'
import Footer from '../Footer/Footer';
import AvailableProducts from '../Products/ProductItem/AvailableProducts';
import ProductsNav from '../Products/ProductsNav';
import classes from './BuyNow.module.css'
import { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import Cart from '../Cart/Cart';
import {Card, Button, Container} from 'react-bootstrap';
import ProductItemForm from '../Products/ProductItem/ProductItemForm';


const DUMMY_ITEMS = [

  {id: 'm1', name: 'FUR ARM CHAIR', description: 'Comfy', price: 800, img: require('../../assets/chair/fur.jpg')},
  {id: 'm2', name: 'SWING ARM CHAIR', description: 'Comfy', price: 800, img: require('../../assets/chair/comfy2.jpg')},
  {id: 'm3', name: 'PENDANT LAMP', description: 'Yummy', price: 800, img: require('../../assets/lamp/pendantlamp.jpg')},
  {id: 'm4', name: 'LED LAMP', description: 'Led lamp', price: 800, img: require('../../assets/lamp/led.jpg')},
  {id: 'm5', name: 'LONG SOFA', description: 'Comfy', price: 800, img: require('../../assets/sofa/images.jpg')},
  {id: 'm6', name: 'PATTERN COUCH', description: 'Comfy', price: 800, img: require('../../assets/sofa/s3.jpg')},
]


const Popular = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <>
    <NavBar  onShowCart={showCartHandler}/>
    {cartIsShown && <Cart onClose={hideCartHandler} />}
<div className={classes.main}>    
    <ProductsNav />
 <AvailableProducts />
 </div>
  <Footer />
  </>
  )
}

export default Popular; //rendered in index.js