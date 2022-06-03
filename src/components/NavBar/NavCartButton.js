import React from 'react'
import { useContext, useState } from 'react';
import CartContext from '../../store/cart-context';
import classes from './NavCartButton.module.css';

const NavCartButton = (props) => {
const cartCtx = useContext(CartContext);
// const {items} = cartCtx;
// const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
  // return curNumber + item.quantity;
  // return curNumber + item.amount;
// }, 0) //reduce helps to transform an array of data into a single value

const numberOfCartItems = cartCtx.items.length;
// console.log(numberOfCartItems);


//test
const [updateBadge, setUpdateBadge] = useState(false)

const submitHandler = (props) => {
  // setUpdateBadge(true)
}

  return (
      <div>
          <span></span>
          <span>Cart</span>
      <span className={classes.badge}> 
           {numberOfCartItems} 
            </span> 
          </div>
  )
}

export default NavCartButton//rendered in Nav.js