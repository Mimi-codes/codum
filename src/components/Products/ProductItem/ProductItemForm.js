import React, { useContext } from 'react'
import { useRef, useState } from 'react';
// import classes from './ProductItemForm.module.css';
import Input from '../../UI/Input';
import {Button} from 'react-bootstrap';
import classes from '../ProductItem/ProductItemForm.module.css';
import CartContext from '../../../store/cart-context';

const ProductItemForm = (props) => {
const quantityInputRef =  useRef();
  
const cartCtx =  useContext(CartContext);

const submitHandler = event => {
event.preventDefault();

const enteredQuantity = quantityInputRef.current.value;
const totalQty= +enteredQuantity;

const itemInCart={
  id: props.item.id,
name: props.item.name, 
quantity: totalQty,
price:props.item.price
}
cartCtx.items.push( itemInCart)
}

  return (
      <form className = {classes.form} >
          <Input 
           ref={quantityInputRef}
              label='Amount' 
              input={{ 
              id:'azzquantity',
              type:'number',
              min: '1',
              max:'5',
              step: '1',
              defaultValue: '1',
          }} />
          
    <Button variant="secondary" onClick={submitHandler}>ADD TO CART</Button>
     {/* // {!amountIsValid && <p>Please enter a valid amount (1-5).</p>} */}
      </form>
  )
}

export default ProductItemForm; //rendered in AvailableProducts.js