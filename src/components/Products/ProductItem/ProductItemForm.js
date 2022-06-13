import React, { useContext } from 'react'
import { useRef, useState } from 'react';
// import classes from './ProductItemForm.module.css';
import Input from '../../UI/Input';
import {Button} from 'react-bootstrap';
import classes from '../ProductItem/ProductItemForm.module.css';
import CartContext from '../../../store/cart-context';

const ProductItemForm = (props) => {
const [quantityIsValid, setQuantityIsValid] =  useState(true)
const quantityInputRef =  useRef();
  

const cartCtx =  useContext(CartContext);

const submitHandler = event => {
event.preventDefault();


const enteredQuantity = quantityInputRef.current.value;
const totalQty= +enteredQuantity;

if (enteredQuantity.trim().length === 0 || 
totalQty < 1 ||
totalQty > 5 ) {
  setQuantityIsValid(false);
  return;
}

const itemInCart={
  id: props.item.id,
name: props.item.name, 
quantity: totalQty,
price:props.item.price
}
cartCtx.items.push( itemInCart)
console.log(itemInCart)
}

  return (
      <form className = {classes.form} >
          <Input 
           ref={quantityInputRef}
              label='Quantity' 
              input={{ 
              type:'number',
              min: '1',
              max:'5',
              step: '1',
              defaultValue: '1',
          }} />
          
          <Button variant="secondary" onClick={submitHandler} className={classes.btn}>ADD TO CART</Button> 
      {!quantityIsValid && <p>Please enter a valid amount (1-5).</p>} 
      </form>
  )
}

export default ProductItemForm; //rendered in AvailableProducts.js