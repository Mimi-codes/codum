import React from 'react'
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import AvailableProducts from '../Products/ProductItem/AvailableProducts';
import ProductsNav from '../Products/ProductsNav';
// import classes from './BuyNow.module.css'
import { useState } from 'react';
import Cart from '../Cart/Cart';
import {Card, Button, Container} from 'react-bootstrap';
import ProductItemForm from '../Products/ProductItem/ProductItemForm';
import classes from './Sofa.module.css';


const DUMMY_ITEMS = [

  {id: 'm1', name: 'FOAMY COUCH', description: 'Comfy', price: 800, img: require('../../assets/sofa/couch2.jpg')},
  // {id: 'm2', name: 'CROWN COUCH', description: 'Comfy', price: 800, img: require('../../assets/sofa/c5.jpg')},
  {id: 'm2', name: 'PATTERN SOFA', description: 'Yummy', price: 800, img: require('../../assets/sofa/s3.jpg')},
  {id: 'm3', name: 'PILLOW SOFA', description: 'Led lamp', price: 800, img: require('../../assets/sofa/sofa.jpg')},
  {id: 'm4', name: 'MULTI-SITTER SOFA', description: 'Comfy', price: 800, img: require('../../assets/sofa/images.jpg')},
  // {id: 'm6', name: 'PATTERN COUCH', description: 'Comfy', price: 800, img: require('../../assets/sofa/s3.jpg')},
]


const Sofa = () => {
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
  </div>
  <Footer />
    </>
    )
}

export default Sofa; //rendered in index.js